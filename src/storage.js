import { mkdir, readFile, unlink, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { randomUUID } from 'node:crypto';

const ROOT_DIR = resolve(process.cwd(), process.env.SORA2_STUDIO_ROOT || '.sora2studio');
const STATE_FILE = join(ROOT_DIR, 'state.json');
const ASSETS_DIR = join(ROOT_DIR, 'assets');

let state = {
  config: null,
  profiles: [],
  activeProfileId: null,
  studioTasks: [],
  activeStudioTaskId: null,
  tasks: [],
  assets: []
};

function normalizeProfileKey(label, config = {}) {
  return String(label || config?.providerLabel || '').trim().toLowerCase();
}

function normalizeStudioTaskName(name) {
  return String(name || '').trim().toLowerCase();
}

function createDefaultStudioTask() {
  const now = new Date().toISOString();
  return {
    id: randomUUID(),
    name: 'Default Task',
    description: '',
    status: 'active',
    tags: [],
    createdAt: now,
    updatedAt: now
  };
}

function dedupeProfiles(profiles) {
  const seen = new Map();

  for (const profile of Array.isArray(profiles) ? profiles : []) {
    const key = normalizeProfileKey(profile?.label, profile?.config);
    const previous = seen.get(key);
    if (!previous) {
      seen.set(key, profile);
      continue;
    }

    const previousUpdated = Date.parse(previous.updatedAt || previous.createdAt || 0) || 0;
    const currentUpdated = Date.parse(profile.updatedAt || profile.createdAt || 0) || 0;
    if (currentUpdated >= previousUpdated) {
      seen.set(key, profile);
    }
  }

  return Array.from(seen.values()).sort((a, b) => {
    const aUpdated = Date.parse(a.updatedAt || a.createdAt || 0) || 0;
    const bUpdated = Date.parse(b.updatedAt || b.createdAt || 0) || 0;
    return bUpdated - aUpdated;
  });
}

function ensureStudioTasks(items, activeId) {
  const list = Array.isArray(items) ? [...items] : [];
  if (!list.length) {
    const fallback = createDefaultStudioTask();
    return {
      studioTasks: [fallback],
      activeStudioTaskId: fallback.id
    };
  }

  const seen = new Map();
  for (const item of list) {
    const name = String(item?.name || '').trim();
    if (!name) continue;
    const key = normalizeStudioTaskName(name);
    if (seen.has(key)) continue;
    seen.set(key, {
      id: item.id || randomUUID(),
      name,
      description: String(item.description || '').trim(),
      status: String(item.status || 'active').trim() || 'active',
      tags: Array.isArray(item.tags) ? item.tags.map((tag) => String(tag || '').trim()).filter(Boolean) : [],
      createdAt: item.createdAt || new Date().toISOString(),
      updatedAt: item.updatedAt || item.createdAt || new Date().toISOString()
    });
  }

  let studioTasks = Array.from(seen.values());
  if (!studioTasks.length) {
    const fallback = createDefaultStudioTask();
    studioTasks = [fallback];
  }

  let activeStudioTaskId = activeId || null;
  if (!activeStudioTaskId || !studioTasks.some((item) => item.id === activeStudioTaskId)) {
    activeStudioTaskId = studioTasks[0].id;
  }

  return {
    studioTasks,
    activeStudioTaskId
  };
}

async function ensureDirs() {
  await mkdir(ROOT_DIR, { recursive: true });
  await mkdir(ASSETS_DIR, { recursive: true });
}

async function persist() {
  await ensureDirs();
  await writeFile(STATE_FILE, JSON.stringify(state, null, 2), 'utf8');
}

function migrateState(parsed) {
  const profiles = dedupeProfiles(Array.isArray(parsed?.profiles) ? parsed.profiles : []);
  let activeProfileId = parsed?.activeProfileId || null;

  if (!profiles.length && parsed?.config) {
    const migratedId = randomUUID();
    profiles.push({
      id: migratedId,
      label: parsed.config.providerLabel || 'Default Provider',
      config: parsed.config,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    activeProfileId = migratedId;
  }

  if (activeProfileId && !profiles.some((profile) => profile.id === activeProfileId)) {
    activeProfileId = profiles[0]?.id || null;
  }

  const studioTaskState = ensureStudioTasks(
    parsed?.studioTasks || parsed?.workspaces,
    parsed?.activeStudioTaskId || parsed?.activeWorkspaceId
  );

  const tasks = Array.isArray(parsed?.tasks) ? parsed.tasks.map((task) => {
    const nextTask = { ...task };
    if (!nextTask.studioTaskId && nextTask.workspaceId) {
      nextTask.studioTaskId = nextTask.workspaceId;
    }
    delete nextTask.workspaceId;
    return nextTask;
  }) : [];

  return {
    config: parsed?.config || null,
    profiles,
    activeProfileId,
    ...studioTaskState,
    tasks,
    assets: Array.isArray(parsed?.assets) ? parsed.assets : []
  };
}

export async function initStorage() {
  await ensureDirs();
  if (!existsSync(STATE_FILE)) {
    await persist();
    return state;
  }

  try {
    const raw = await readFile(STATE_FILE, 'utf8');
    state = migrateState(JSON.parse(raw));
    await persist();
  } catch {
    await persist();
  }
  return state;
}

export function getStoredConfig() {
  return state.config;
}

export async function saveStoredConfig(config) {
  state.config = config;
  await persist();
  return state.config;
}

export function listProviderProfiles() {
  return [...state.profiles];
}

export function getActiveProfileId() {
  return state.activeProfileId;
}

export function getProviderProfile(profileId) {
  return state.profiles.find((profile) => profile.id === profileId) || null;
}

export async function saveProviderProfile({ id, label, config, makeActive = true }) {
  const dedupeKey = normalizeProfileKey(label, config);
  const matchedProfile = id
    ? getProviderProfile(id)
    : state.profiles.find((profile) => normalizeProfileKey(profile.label, profile.config) === dedupeKey) || null;
  const profileId = matchedProfile?.id || id || randomUUID();
  const existingIndex = state.profiles.findIndex((profile) => profile.id === profileId);
  const now = new Date().toISOString();
  const nextProfile = {
    id: profileId,
    label: label || config?.providerLabel || 'Unnamed Provider',
    config,
    createdAt: existingIndex >= 0 ? state.profiles[existingIndex].createdAt : now,
    updatedAt: now
  };

  if (existingIndex >= 0) state.profiles[existingIndex] = nextProfile;
  else state.profiles.unshift(nextProfile);

  state.profiles = dedupeProfiles(state.profiles);

  if (makeActive) state.activeProfileId = profileId;
  state.config = config;
  await persist();
  return nextProfile;
}

export async function deleteProviderProfile(profileId) {
  const before = state.profiles.length;
  state.profiles = state.profiles.filter((profile) => profile.id !== profileId);
  if (state.activeProfileId === profileId) {
    state.activeProfileId = state.profiles[0]?.id || null;
    state.config = state.profiles[0]?.config || null;
  }
  await persist();
  return before !== state.profiles.length;
}

export async function activateProviderProfile(profileId) {
  const profile = getProviderProfile(profileId);
  if (!profile) return null;
  state.activeProfileId = profile.id;
  state.config = profile.config;
  await persist();
  return profile;
}

export function listStudioTasks() {
  return [...state.studioTasks];
}

export function getActiveStudioTaskId() {
  return state.activeStudioTaskId;
}

export function getStudioTask(studioTaskId) {
  return state.studioTasks.find((item) => item.id === studioTaskId) || null;
}

export async function saveStudioTask({ id = null, name, description = '', status = 'active', tags = [], makeActive = true }) {
  const normalizedName = String(name || '').trim();
  if (!normalizedName) return null;
  const dedupeKey = normalizeStudioTaskName(normalizedName);
  const matched = id
    ? getStudioTask(id)
    : state.studioTasks.find((item) => normalizeStudioTaskName(item.name) === dedupeKey) || null;
  const studioTaskId = matched?.id || id || randomUUID();
  const index = state.studioTasks.findIndex((item) => item.id === studioTaskId);
  const now = new Date().toISOString();
  const nextStudioTask = {
    id: studioTaskId,
    name: normalizedName,
    description: String(description || '').trim(),
    status: String(status || 'active').trim() || 'active',
    tags: Array.isArray(tags) ? tags.map((tag) => String(tag || '').trim()).filter(Boolean) : [],
    createdAt: index >= 0 ? state.studioTasks[index].createdAt : now,
    updatedAt: now
  };

  if (index >= 0) state.studioTasks[index] = nextStudioTask;
  else state.studioTasks.unshift(nextStudioTask);

  if (makeActive) state.activeStudioTaskId = studioTaskId;
  await persist();
  return nextStudioTask;
}

export async function activateStudioTask(studioTaskId) {
  const studioTask = getStudioTask(studioTaskId);
  if (!studioTask) return null;
  state.activeStudioTaskId = studioTask.id;
  await persist();
  return studioTask;
}

export async function deleteStudioTask(studioTaskId) {
  const before = state.studioTasks.length;
  state.studioTasks = state.studioTasks.filter((item) => item.id !== studioTaskId);
  if (before === state.studioTasks.length) return false;

  for (const task of state.tasks) {
    if (task.studioTaskId === studioTaskId) task.studioTaskId = null;
  }

  const normalized = ensureStudioTasks(state.studioTasks, state.activeStudioTaskId);
  state.studioTasks = normalized.studioTasks;
  state.activeStudioTaskId = normalized.activeStudioTaskId;
  await persist();
  return true;
}

export function listStoredTasks() {
  return [...state.tasks];
}

export function getStoredTask(taskId) {
  return state.tasks.find((task) => task.id === taskId) || null;
}

export async function upsertStoredTask(task) {
  const nextTask = { ...task };
  if (!nextTask.studioTaskId && nextTask.workspaceId) {
    nextTask.studioTaskId = nextTask.workspaceId;
  }
  delete nextTask.workspaceId;

  const index = state.tasks.findIndex((item) => item.id === nextTask.id);
  if (index >= 0) state.tasks[index] = nextTask;
  else state.tasks.unshift(nextTask);
  await persist();
  return nextTask;
}

export async function assignTaskStudioTask(taskId, studioTaskId) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) return null;
  task.studioTaskId = studioTaskId || null;
  delete task.workspaceId;
  task.updatedAt = new Date().toISOString();
  await persist();
  return task;
}

export async function deleteStoredTask(taskId) {
  const before = state.tasks.length;
  state.tasks = state.tasks.filter((task) => task.id !== taskId);
  await persist();
  return before !== state.tasks.length;
}

export function listStoredAssets() {
  return [...state.assets];
}

export function getStoredAsset(assetId) {
  return state.assets.find((asset) => asset.id === assetId) || null;
}

export async function addStoredAsset(asset) {
  state.assets.unshift(asset);
  await persist();
  return asset;
}

export async function deleteStoredAsset(assetId) {
  const before = state.assets.length;
  state.assets = state.assets.filter((asset) => asset.id !== assetId);
  await persist();
  return before !== state.assets.length;
}

export async function writeAssetFile(relativeName, buffer) {
  const absolutePath = join(ASSETS_DIR, relativeName);
  await mkdir(dirname(absolutePath), { recursive: true });
  await writeFile(absolutePath, buffer);
  return absolutePath;
}

export function createAssetRecord({ kind, source, mimeType, originalName, filePath, taskId = null }) {
  return {
    id: randomUUID(),
    kind,
    source,
    mimeType: mimeType || 'application/octet-stream',
    originalName: originalName || '',
    filePath,
    taskId,
    createdAt: new Date().toISOString()
  };
}

export async function deleteAssetFile(filePath) {
  if (!filePath) return false;
  try {
    await unlink(filePath);
    return true;
  } catch (error) {
    if (error?.code === 'ENOENT') return false;
    throw error;
  }
}
