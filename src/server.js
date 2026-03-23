import http from 'node:http';
import { existsSync } from 'node:fs';
import { createWriteStream } from 'node:fs';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { basename, extname, join, resolve } from 'node:path';
import { randomUUID } from 'node:crypto';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { BASE_PORT, DEFAULT_OUTPUT_DIR, PROVIDER_PRESETS, TASK_TYPE_DEFINITIONS, TASK_TYPE_SET } from './app-config.js';
import { getBltcyCatalogEntry, getBltcyModelCatalogFromDisk, upgradeCatalogEntry } from './bltcy-model-catalog.js';
import {
  checkConnectivity,
  createImage,
  createVideoTask,
  getPublicRuntimeConfig,
  getPersistableRuntimeConfig,
  optimizePromptWithModel,
  getSora2RuntimeConfig,
  getVideoContent,
  getVideoTask,
  listModels,
  cancelVideoTask,
  setSora2RuntimeConfig
} from './sora2-client.js';
import {
  addStoredAsset,
  activateProviderProfile,
  activateStudioTask,
  assignTaskStudioTask,
  createAssetRecord,
  deleteAssetFile,
  deleteProviderProfile,
  deleteStudioTask,
  deleteStoredAsset,
  getActiveProfileId,
  getActiveStudioTaskId,
  getProviderProfile,
  getStoredAsset,
  getStoredConfig,
  getStoredTask,
  initStorage,
  listStoredAssets,
  listStudioTasks,
  listProviderProfiles,
  listStoredTasks,
  deleteStoredTask,
  saveProviderProfile,
  saveStudioTask,
  saveStoredConfig,
  upsertStoredTask,
  writeAssetFile
} from './storage.js';

const WEBHOOK_SECRET = process.env.SORA2_WEBHOOK_SECRET || '';
const tasks = new Map();
const MODEL_CAPABILITY_CACHE_TTL_MS = 5 * 60 * 1000;
const MODEL_CACHE_VERSION = 3;
const STUDIO_ALLOWED_PROVIDERS = new Set(['openai', 'google', 'mid-journey', '快手可灵', '火山豆包']);
const STUDIO_SUPPORTED_TASKS = new Set(['text_to_image', 'image_edit', 'text_to_video', 'image_to_video']);
const modelCapabilityCache = {
  fetchedAt: 0,
  byId: new Map()
};
const MODEL_CACHE_DIR = resolve(process.cwd(), '.sora2studio', 'catalog');
const MODEL_LIST_CACHE_FILE = join(MODEL_CACHE_DIR, 'runtime-models.json');
const ENTRY_FILE = fileURLToPath(import.meta.url);
const WORKSPACE_ROOT = resolve(process.cwd());
const STORAGE_ROOT = resolve(process.cwd(), '.sora2studio');
const DEFAULT_DOWNLOAD_HOST_ALLOWLIST = ['api.bltcy.ai', 'cdn.bltcy.ai', 'files.bltcy.ai'];
const modelSyncState = {
  running: false,
  startedAt: 0,
  finishedAt: 0,
  stage: 'idle',
  processed: 0,
  total: 0,
  current: '',
  error: '',
  modelsCount: 0,
  mode: 'cache',
  source: 'runtime-cache'
};

function json(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(data));
}

function publicConfig() {
  return getPublicRuntimeConfig();
}

function isSafeWorkspacePath(filePath, rootDir = STORAGE_ROOT) {
  const target = resolve(String(filePath || ''));
  const root = resolve(rootDir);
  return target === root || target.startsWith(`${root}\\`) || target.startsWith(`${root}/`);
}

function sanitizeAbsolutePathForClient(filePath) {
  if (!filePath || !isSafeWorkspacePath(filePath, WORKSPACE_ROOT)) return '';
  return filePath;
}

function sanitizeAssetForClient(asset = {}) {
  return {
    id: asset.id,
    kind: asset.kind,
    source: asset.source,
    mimeType: asset.mimeType,
    originalName: asset.originalName || '',
    taskId: asset.taskId || null,
    createdAt: asset.createdAt || null,
    hasFile: Boolean(asset.filePath && isSafeWorkspacePath(asset.filePath)),
    path: sanitizeAbsolutePathForClient(asset.filePath)
  };
}

function sanitizeSavedAsset(saved = {}) {
  return {
    kind: saved.kind,
    fileName: saved.fileName || '',
    mimeType: saved.mimeType || 'application/octet-stream',
    path: sanitizeAbsolutePathForClient(saved.path || '')
  };
}

function sanitizeTaskForClient(task = {}) {
  return {
    ...task,
    savedAssets: Array.isArray(task.savedAssets) ? task.savedAssets.map((item) => sanitizeSavedAsset(item)) : []
  };
}

function getDownloadHostAllowlist() {
  const configured = String(process.env.ALLOWED_DOWNLOAD_HOSTS || '')
    .split(',')
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
  const allowlist = new Set(configured.length ? configured : DEFAULT_DOWNLOAD_HOST_ALLOWLIST);
  try {
    const baseHost = new URL(getSora2RuntimeConfig().baseUrl).hostname.toLowerCase();
    if (baseHost) allowlist.add(baseHost);
  } catch {
    // Ignore invalid runtime baseUrl when building the allowlist.
  }
  return allowlist;
}

function validateRemoteAssetUrl(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  let parsed;
  try {
    parsed = new URL(raw);
  } catch {
    const error = new Error('资源地址不是合法 URL。');
    error.code = 'INVALID_ASSET_URL';
    error.statusCode = 400;
    throw error;
  }

  const protocol = parsed.protocol.toLowerCase();
  if (protocol !== 'https:' && protocol !== 'http:') {
    const error = new Error('仅允许下载 http/https 资源。');
    error.code = 'INVALID_ASSET_URL';
    error.statusCode = 400;
    throw error;
  }

  const host = parsed.hostname.toLowerCase();
  if (
    host === 'localhost'
    || host.endsWith('.localhost')
    || /^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)
    || host.includes(':')
  ) {
    const error = new Error('不允许下载本地或内网资源。');
    error.code = 'ASSET_URL_BLOCKED';
    error.statusCode = 403;
    throw error;
  }

  if (!getDownloadHostAllowlist().has(host)) {
    const error = new Error(`当前只允许下载受信任域名资源：${host}`);
    error.code = 'ASSET_URL_BLOCKED';
    error.statusCode = 403;
    throw error;
  }

  return parsed.toString();
}

function updateModelSyncState(patch = {}) {
  Object.assign(modelSyncState, patch);
}

function positiveNumberOrNull(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) && numeric > 0 ? numeric : null;
}

function normalizeModelCatalog(model = {}) {
  if (!model?.catalog || typeof model.catalog !== 'object') return model;
  const upgraded = upgradeCatalogEntry({
    id: model.id,
    provider: model.provider,
    desc: model.catalog.desc,
    tags: model.catalog.tags,
    apis: Array.isArray(model.catalog.apis) ? model.catalog.apis : [],
    taskCapabilities: model.catalog.taskCapabilities || {},
    capabilities: model.catalog.capabilities || {},
    resolutionPresets: model.catalog.resolutionPresets || []
  });
  return {
    ...model,
    catalog: {
      ...model.catalog,
      taskCapabilities: upgraded.taskCapabilities,
      capabilities: upgraded.capabilities,
      resolutionPresets: upgraded.resolutionPresets
    }
  };
}

function pickCatalogCaps(input = {}) {
  const durationOptions = Array.isArray(input.durationOptions) ? input.durationOptions.slice(0, 12) : [];
  const minDuration = positiveNumberOrNull(input.minDuration);
  const maxDuration = positiveNumberOrNull(input.maxDuration);
  const supportsDuration = Boolean(input.supportsDuration || durationOptions.length > 0 || minDuration !== null || maxDuration !== null);
  const resolutionPresets = Array.isArray(input.resolutionPresets) ? input.resolutionPresets.slice(0, 16) : [];
  const imageSizeOptions = Array.isArray(input.imageSizeOptions) ? input.imageSizeOptions.slice(0, 8) : [];
  const sizeField = typeof input.sizeField === 'string' ? input.sizeField : 'size';
  const allowCustomResolution = input.allowCustomResolution !== false && !(sizeField === 'size' && imageSizeOptions.length > 0 && resolutionPresets.length === 0);
  return {
    supportedTasks: Array.isArray(input.supportedTasks) ? input.supportedTasks : [],
    supportsSourceImage: Boolean(input.supportsSourceImage),
    supportsReferenceImage: Boolean(input.supportsReferenceImage),
    supportsMultipleReferenceImages: Boolean(input.supportsMultipleReferenceImages),
    maxReferenceImages: positiveNumberOrNull(input.maxReferenceImages),
    supportsStoryboardPrompt: Boolean(input.supportsStoryboardPrompt ?? input.supportsStoryboard),
    supportsIntelligentStoryboard: Boolean(input.supportsIntelligentStoryboard),
    supportsStoryboard: Boolean(input.supportsStoryboard),
    supportsEndFrame: Boolean(input.supportsEndFrame),
    supportsNegativePrompt: Boolean(input.supportsNegativePrompt),
    supportsProviderMode: Boolean(input.supportsProviderMode),
    providerModeOptions: Array.isArray(input.providerModeOptions) ? input.providerModeOptions.slice(0, 8) : [],
    providerModeLabel: typeof input.providerModeLabel === 'string' ? input.providerModeLabel : '',
    supportsCfgScale: Boolean(input.supportsCfgScale),
    promptMaxLength: positiveNumberOrNull(input.promptMaxLength),
    supportsElements: Boolean(input.supportsElements),
    supportsOmniImageList: Boolean(input.supportsOmniImageList),
    supportsOmniVideoList: Boolean(input.supportsOmniVideoList),
    supportsImageCount: Boolean(input.supportsImageCount),
    maxImageCount: positiveNumberOrNull(input.maxImageCount),
    supportsCameraControls: Boolean(input.supportsCameraControls ?? input.supportsCameraControl),
    supportsDirectionalCameraControls: Boolean(input.supportsDirectionalCameraControls ?? input.supportsCameraControls ?? input.supportsCameraControl),
    supportsPromptOptimize: Boolean(input.supportsPromptOptimize),
    supportsDuration,
    durationOptions,
    minDuration,
    maxDuration,
    supportsAspectRatio: Boolean(input.supportsAspectRatio),
    aspectRatioOptions: Array.isArray(input.aspectRatioOptions) ? input.aspectRatioOptions.slice(0, 12) : [],
    resolutionPresets,
    imageSizeOptions,
    sizeField,
    allowCustomResolution,
    defaultResolution: typeof input.defaultResolution === 'string' ? input.defaultResolution : '',
    defaultImageSize: typeof input.defaultImageSize === 'string' ? input.defaultImageSize : '',
    defaultAspectRatio: typeof input.defaultAspectRatio === 'string' ? input.defaultAspectRatio : '',
    qualityOptions: Array.isArray(input.qualityOptions) ? input.qualityOptions.slice(0, 12) : [],
    promptOptimizePath: typeof input.promptOptimizePath === 'string' ? input.promptOptimizePath : '',
    chatCompletionsPath: typeof input.chatCompletionsPath === 'string' ? input.chatCompletionsPath : ''
  };
}

function getProviderCapabilityPolicy() {
  const config = getSora2RuntimeConfig();
  return {
    supportsStoryboardPrompt: config?.providerCapabilities?.supportsStoryboardPrompt !== false,
    supportsNativeKlingVideoRoutes: config?.providerCapabilities?.supportsNativeKlingVideoRoutes !== false,
    supportsKlingOmniVideo: config?.providerCapabilities?.supportsKlingOmniVideo !== false,
    supportsKlingMultiImageToVideo: config?.providerCapabilities?.supportsKlingMultiImageToVideo !== false,
    supportsKlingIntelligentStoryboardInput: config?.providerCapabilities?.supportsKlingIntelligentStoryboardInput === true
  };
}

function applyProviderCapabilityPolicy(modelId, taskType, caps = {}) {
  const providerPolicy = getProviderCapabilityPolicy();
  const normalizedModelId = String(modelId || '').trim().toLowerCase();
  const isKlingVideo = /^kling-video/.test(normalizedModelId);
  const effective = {
    ...caps,
    supportsStoryboardPrompt: Boolean(caps.supportsStoryboardPrompt ?? caps.supportsStoryboard),
    supportsIntelligentStoryboard: Boolean(caps.supportsIntelligentStoryboard),
    supportsStoryboard: Boolean(caps.supportsStoryboardPrompt ?? caps.supportsStoryboard)
  };

  if (!providerPolicy.supportsStoryboardPrompt) {
    effective.supportsStoryboardPrompt = false;
    effective.supportsStoryboard = false;
  }
  if (isKlingVideo && !providerPolicy.supportsNativeKlingVideoRoutes) {
    effective.supportsElements = false;
    effective.supportsOmniImageList = false;
    effective.supportsOmniVideoList = false;
    effective.supportsEndFrame = false;
    effective.supportsIntelligentStoryboard = false;
    effective.supportsDirectionalCameraControls = false;
  }
  if (isKlingVideo && !providerPolicy.supportsKlingOmniVideo && taskType === 'text_to_video') {
    effective.supportsElements = false;
    effective.supportsOmniImageList = false;
    effective.supportsOmniVideoList = false;
  }
  if (isKlingVideo && !providerPolicy.supportsKlingMultiImageToVideo && taskType === 'image_to_video') {
    effective.supportsMultipleReferenceImages = false;
    effective.maxReferenceImages = positiveNumberOrNull(effective.maxReferenceImages) ?? 1;
  }
  if (isKlingVideo && !providerPolicy.supportsKlingIntelligentStoryboardInput) {
    effective.supportsIntelligentStoryboard = false;
  }
  if (/omni/i.test(normalizedModelId)) {
    effective.supportsDirectionalCameraControls = false;
  }

  return effective;
}

function deriveTaskRoleCapabilities(taskType, caps = {}) {
  const isTextToImage = taskType === 'text_to_image';
  const isImageEdit = taskType === 'image_edit';
  const isTextToVideo = taskType === 'text_to_video';
  const isImageToVideo = taskType === 'image_to_video';
  const supportsPrimaryImageInput = Boolean(
    (isImageEdit && caps.supportsSourceImage)
    || (isImageToVideo && (caps.supportsSourceImage || caps.supportsReferenceImage))
    || (!isTextToImage && !isTextToVideo && caps.supportsSourceImage)
  );

  return {
    ...caps,
    supportsPrimaryImageInput,
    supportsImageEditSourceImage: Boolean(isImageEdit && caps.supportsSourceImage),
    supportsImageToVideoFirstFrame: Boolean(isImageToVideo && (caps.supportsSourceImage || caps.supportsReferenceImage)),
    supportsImageToVideoReferenceImages: Boolean(isImageToVideo && caps.supportsReferenceImage),
    supportsImageToVideoEndFrame: Boolean(isImageToVideo && caps.supportsEndFrame),
    supportsTextToImageReferenceImages: Boolean(isTextToImage && caps.supportsReferenceImage),
    supportsTextToVideoReferenceImages: Boolean(isTextToVideo && caps.supportsReferenceImage),
    supportsOmniInputs: Boolean(isTextToVideo && (caps.supportsElements || caps.supportsOmniImageList || caps.supportsOmniVideoList)),
    supportsStructuredVideoMode: Boolean(isTextToVideo && (caps.supportsStoryboardPrompt || caps.supportsIntelligentStoryboard))
  };
}

function sanitizeModelForClient(model = {}) {
  const normalized = normalizeModelCatalog(model);
  const taskCapabilities = {};
  const rawTaskCaps = normalized?.catalog?.taskCapabilities || {};
  for (const [taskType, capability] of Object.entries(rawTaskCaps)) {
    taskCapabilities[taskType] = pickCatalogCaps(capability);
  }

  return {
    id: normalized.id,
    object: normalized.object || '',
    created: normalized.created || null,
    owned_by: normalized.owned_by || '',
    provider: normalized.provider || '',
    supported_endpoint_types: Array.isArray(normalized.supported_endpoint_types) ? normalized.supported_endpoint_types.slice(0, 8) : [],
    pricing: normalized.pricing || null,
    supported_resolutions: Array.isArray(normalized.supported_resolutions) ? normalized.supported_resolutions.slice(0, 16) : [],
    supported_sizes: Array.isArray(normalized.supported_sizes) ? normalized.supported_sizes.slice(0, 16) : [],
    durationOptions: Array.isArray(normalized.durationOptions) ? normalized.durationOptions.slice(0, 12) : [],
    minDuration: positiveNumberOrNull(normalized.minDuration),
    maxDuration: positiveNumberOrNull(normalized.maxDuration),
    maxImageCount: positiveNumberOrNull(normalized.maxImageCount),
    catalog: normalized.catalog ? {
      desc: typeof normalized.catalog.desc === 'string' ? normalized.catalog.desc.slice(0, 240) : '',
      tags: typeof normalized.catalog.tags === 'string' ? normalized.catalog.tags.slice(0, 120) : '',
      capabilities: pickCatalogCaps(normalized.catalog.capabilities || {}),
      taskCapabilities,
      resolutionPresets: Array.isArray(normalized.catalog.resolutionPresets) ? normalized.catalog.resolutionPresets.slice(0, 16) : []
    } : null
  };
}

function sanitizeModelListResponse(models = {}) {
  const data = Array.isArray(models.data) ? models.data.map((model) => sanitizeModelForClient(model)) : [];
  return {
    ...models,
    data,
    total: data.length
  };
}

function getCatalogSupportedTasks(model = {}) {
  const fromCaps = Array.isArray(model?.catalog?.capabilities?.supportedTasks)
    ? model.catalog.capabilities.supportedTasks.filter(Boolean)
    : [];
  if (fromCaps.length) return fromCaps;
  return Object.keys(model?.catalog?.taskCapabilities || {}).filter(Boolean);
}

function isStudioModelAllowed(model = {}) {
  const provider = String(model?.provider || '').trim().toLowerCase();
  if (!STUDIO_ALLOWED_PROVIDERS.has(provider)) return false;

  const supportedTasks = getCatalogSupportedTasks(model);
  if (supportedTasks.length) {
    return supportedTasks.some((task) => STUDIO_SUPPORTED_TASKS.has(task));
  }

  const id = String(model?.id || '').toLowerCase();
  const tags = String(model?.catalog?.tags || model?.tags || '').toLowerCase();
  return /(sora|veo|kling|seedance|doubao|midjourney|mj|image|video|banana|seedream)/.test(id + tags);
}

function sanitizeCachedPayload(payload = {}) {
  const rawData = Array.isArray(payload.data) ? payload.data : [];
  const data = rawData
    .map((model) => sanitizeModelForClient(model))
    .filter((model) => isStudioModelAllowed(model));
  return {
    version: MODEL_CACHE_VERSION,
    updatedAt: payload.updatedAt || new Date().toISOString(),
    total: data.length,
    data
  };
}

async function readModelListCache() {
  if (!existsSync(MODEL_LIST_CACHE_FILE)) return null;
  try {
    const raw = await readFile(MODEL_LIST_CACHE_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.data)) return null;
    const sanitized = sanitizeCachedPayload(parsed);
    if (parsed.version !== MODEL_CACHE_VERSION) {
      await writeFile(MODEL_LIST_CACHE_FILE, JSON.stringify(sanitized, null, 2), 'utf8');
    }
    return sanitized;
  } catch {
    return null;
  }
}

async function writeModelListCache(models) {
  await mkdir(MODEL_CACHE_DIR, { recursive: true });
  const sanitized = sanitizeModelListResponse(models);
  const payload = {
    version: MODEL_CACHE_VERSION,
    updatedAt: new Date().toISOString(),
    total: sanitized.total,
    data: sanitized.data
  };
  await writeFile(MODEL_LIST_CACHE_FILE, JSON.stringify(payload, null, 2), 'utf8');
  return payload;
}

async function buildModelListFromDiskCatalog() {
  const catalog = await getBltcyModelCatalogFromDisk();
  if (!catalog?.models) {
    throw new Error('No local catalog docs available');
  }
  const seen = new Set();
  const data = [];
  for (const entry of catalog.models.values()) {
    const id = String(entry?.id || '').trim();
    if (!id || seen.has(id.toLowerCase())) continue;
    seen.add(id.toLowerCase());
    data.push({
      id,
      provider: entry.provider || '',
      pricing: entry.pricing || null,
      catalog: {
        desc: entry.desc || '',
        tags: entry.tags || '',
        apis: Array.isArray(entry.apis) ? entry.apis : [],
        taskCapabilities: entry.taskCapabilities || {},
        capabilities: entry.capabilities || {},
        resolutionPresets: entry.resolutionPresets || []
      }
    });
  }
  return sanitizeModelListResponse({
    ok: true,
    cached: false,
    source: 'project-docs',
    total: data.length,
    data
  });
}

async function startModelSync(mode = 'full') {
  if (modelSyncState.running) return modelSyncState;
  const normalizedMode = mode === 'docs' ? 'docs' : 'full';
  updateModelSyncState({
    running: true,
    startedAt: Date.now(),
    finishedAt: 0,
    stage: 'starting',
    processed: 0,
    total: 0,
    current: '',
    error: '',
    modelsCount: 0,
    mode: normalizedMode,
    source: normalizedMode === 'docs' ? 'project-docs' : 'remote-refresh'
  });

  (async () => {
    try {
      let models;
      if (normalizedMode === 'docs') {
        updateModelSyncState({
          stage: 'rebuilding_docs',
          processed: 0,
          total: 1,
          current: '正在根据项目文档重建模型目录',
          running: true,
          source: 'project-docs'
        });
        models = await buildModelListFromDiskCatalog();
      } else {
        models = await listModels(undefined, {
          includeCatalog: true,
          refreshCatalog: true,
          onCatalogProgress: (progress) => {
            updateModelSyncState({
              stage: progress.stage || 'processing',
              processed: Number(progress.processed || 0),
              total: Number(progress.total || 0),
              current: progress.current || '',
              running: true,
              source: 'remote-refresh'
            });
          }
        });
      }
      await writeModelListCache(models);
      modelCapabilityCache.fetchedAt = 0;
      updateModelSyncState({
        running: false,
        finishedAt: Date.now(),
        stage: 'completed',
        processed: modelSyncState.total || modelSyncState.processed,
        total: modelSyncState.total || modelSyncState.processed,
        current: '',
        modelsCount: models.total || 0,
        source: normalizedMode === 'docs' ? 'project-docs' : 'remote-refresh'
      });
    } catch (error) {
      updateModelSyncState({
        running: false,
        finishedAt: Date.now(),
        stage: 'failed',
        error: extractErrorMessage(error),
        current: '',
        source: normalizedMode === 'docs' ? 'project-docs' : 'remote-refresh'
      });
    }
  })();

  return modelSyncState;
}

function extractErrorMessage(error) {
  const payload = error?.payload || null;
  const candidates = [
    payload?.error?.message,
    payload?.details?.message,
    payload?.message,
    payload?.error,
    payload?.raw,
    error?.message
  ];

  for (const candidate of candidates) {
    const text = String(candidate || '').trim();
    if (!text) continue;
    if (text === 'upstream_error') continue;
    return text;
  }

  return String(error?.message || 'upstream_error');
}

function mapError(error) {
  return {
    error: extractErrorMessage(error),
    code: error.code || 'UPSTREAM_ERROR',
    providerCode: error.providerCode || null,
    details: error.payload || null,
    requestSummary: error.requestSummary || null
  };
}

async function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 12 * 1024 * 1024) {
        reject(new Error('Body too large'));
        req.destroy();
      }
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error('Invalid JSON body'));
      }
    });
    req.on('error', reject);
  });
}

function normalizeDurationArray(values) {
  if (!Array.isArray(values)) return [];
  const normalized = values
    .map((item) => Number(item))
    .filter((item) => Number.isFinite(item) && item > 0);
  return [...new Set(normalized)].sort((a, b) => a - b);
}

function parseDurationConstraint(modelLike) {
  if (!modelLike || typeof modelLike !== 'object') return null;
  const catalogCaps = modelLike.catalog?.capabilities || {};
  const directCaps = modelLike.capabilities || {};
  const options = normalizeDurationArray(
    modelLike.durationOptions
    || modelLike.supportedDurations
    || modelLike.supported_durations
    || modelLike.durations
    || directCaps.durationOptions
    || catalogCaps.durationOptions
    || []
  );

  const minRaw = modelLike.minDuration
    ?? modelLike.min_duration
    ?? modelLike.secondsMin
    ?? modelLike.seconds_min
    ?? directCaps.minDuration
    ?? catalogCaps.minDuration
    ?? null;
  const maxRaw = modelLike.maxDuration
    ?? modelLike.max_duration
    ?? modelLike.secondsMax
    ?? modelLike.seconds_max
    ?? directCaps.maxDuration
    ?? catalogCaps.maxDuration
    ?? null;

  const minDuration = Number(minRaw);
  const maxDuration = Number(maxRaw);

  const normalizedMin = Number.isFinite(minDuration) && minDuration > 0 ? minDuration : (options[0] ?? null);
  const normalizedMax = Number.isFinite(maxDuration) && maxDuration > 0 ? maxDuration : (options[options.length - 1] ?? null);

  if (!options.length && normalizedMin === null && normalizedMax === null) return null;
  return {
    options,
    minDuration: normalizedMin,
    maxDuration: normalizedMax
  };
}

function parseImageConstraint(modelLike) {
  if (!modelLike || typeof modelLike !== 'object') return null;
  const catalogCaps = modelLike.catalog?.capabilities || {};
  const directCaps = modelLike.capabilities || {};

  const supportsImageCount = Boolean(
    modelLike.supportsImageCount
    ?? directCaps.supportsImageCount
    ?? catalogCaps.supportsImageCount
  );

  const maxRaw = modelLike.maxImageCount
    ?? modelLike.max_image_count
    ?? directCaps.maxImageCount
    ?? catalogCaps.maxImageCount
    ?? null;
  const maxImageCount = Number(maxRaw);

  const qualityOptions = [...new Set(
    []
      .concat(modelLike.qualityOptions || [])
      .concat(directCaps.qualityOptions || [])
      .concat(catalogCaps.qualityOptions || [])
      .map((item) => String(item || '').trim())
      .filter(Boolean)
  )];

  return {
    supportsImageCount,
    maxImageCount: Number.isFinite(maxImageCount) && maxImageCount > 0 ? maxImageCount : null,
    qualityOptions
  };
}

function parseModelConstraints(modelLike) {
  return {
    duration: parseDurationConstraint(modelLike),
    image: parseImageConstraint(modelLike)
  };
}

async function refreshModelConstraintCache() {
  const now = Date.now();
  if (now - modelCapabilityCache.fetchedAt < MODEL_CAPABILITY_CACHE_TTL_MS && modelCapabilityCache.byId.size > 0) return;

  const models = await listModels(undefined, { includeCatalog: true });
  const nextMap = new Map();
  for (const model of models.data || []) {
    const id = String(model?.id || '').trim().toLowerCase();
    if (!id) continue;
    nextMap.set(id, parseModelConstraints(model));
  }

  modelCapabilityCache.byId = nextMap;
  modelCapabilityCache.fetchedAt = now;
}

async function resolveModelConstraintsForModel(modelId) {
  const normalizedModelId = String(modelId || '').trim().toLowerCase();
  if (!normalizedModelId) return null;

  try {
    await refreshModelConstraintCache();
    const fromModels = modelCapabilityCache.byId.get(normalizedModelId);
    if (fromModels) return fromModels;
  } catch {
    // Ignore model list lookup errors and fall through to catalog fallback.
  }

  const catalogEntry = await getBltcyCatalogEntry(modelId);
  return parseModelConstraints({
    capabilities: catalogEntry?.capabilities || {},
    durationOptions: catalogEntry?.capabilities?.durationOptions || [],
    qualityOptions: catalogEntry?.capabilities?.qualityOptions || [],
    supportsImageCount: catalogEntry?.capabilities?.supportsImageCount,
    maxImageCount: catalogEntry?.capabilities?.maxImageCount
  });
}

function hasInputValue(value) {
  if (Array.isArray(value)) return value.some((item) => hasInputValue(item));
  return value !== undefined && value !== null && String(value).trim() !== '';
}

function hasDurationCapability(caps) {
  return Boolean(
    caps?.supportsDuration
    || (Array.isArray(caps?.durationOptions) && caps.durationOptions.length > 0)
    || Number.isFinite(Number(caps?.minDuration))
    || Number.isFinite(Number(caps?.maxDuration))
  );
}

function hasResolutionCapability(caps) {
  return Boolean(
    (Array.isArray(caps?.resolutionPresets) && caps.resolutionPresets.length > 0)
    || String(caps?.defaultResolution || '').trim()
  );
}

function hasImageSizeCapability(caps) {
  return Boolean(
    (Array.isArray(caps?.imageSizeOptions) && caps.imageSizeOptions.length > 0)
    || String(caps?.defaultImageSize || '').trim()
  );
}

function resolutionMatchesAspectRatio(resolution, aspectRatio) {
  const match = String(resolution || '').trim().match(/^(\d+)x(\d+)$/i);
  if (!match) return true;
  const width = Number(match[1]);
  const height = Number(match[2]);
  if (!width || !height) return true;
  switch (String(aspectRatio || '').trim()) {
    case '16:9':
      return width >= height;
    case '9:16':
      return height >= width;
    case '1:1':
      return width === height;
    case '4:3':
      return width >= height;
    case '3:4':
      return height >= width;
    default:
      return true;
  }
}

async function resolveTaskCapabilities(modelId, taskType) {
  const catalogEntry = await getBltcyCatalogEntry(modelId);
  return deriveTaskRoleCapabilities(
    taskType,
    applyProviderCapabilityPolicy(
      modelId,
      taskType,
      pickCatalogCaps(catalogEntry?.taskCapabilities?.[taskType] || catalogEntry?.capabilities || {})
    )
  );
}

async function validateInput(input) {
  if (!TASK_TYPE_SET.has(input.type)) return 'Invalid type';
  const meta = TASK_TYPE_DEFINITIONS.find((item) => item.value === input.type);
  if (meta?.requiresPrompt && !input.prompt) return 'prompt is required';
  if (meta?.requiresSourceImage && !input.sourceImageUrl && !input.sourceAssetId) return `sourceImageUrl or sourceAssetId is required for ${input.type}`;
  const constraints = await resolveModelConstraintsForModel(input.model);
  const taskCaps = await resolveTaskCapabilities(input.model, input.type);
  const hasSourceImage = hasInputValue(input.sourceImageUrl) || hasInputValue(input.sourceAssetId);
  const hasReferenceImage = hasInputValue(input.referenceImageUrl) || hasInputValue(input.referenceAssetId) || hasInputValue(input.referenceImageUrls) || hasInputValue(input.referenceAssetIds);
  const hasEndFrameImage = hasInputValue(input.endFrameImageUrl) || hasInputValue(input.endFrameAssetId);
  const hasOmniImages = hasInputValue(input.omniImageUrls);
  const hasOmniVideos = hasInputValue(input.omniVideoUrls);
  const hasElements = hasInputValue(input.elementList);
  const referenceCount = []
    .concat(input.referenceImageUrl || [])
    .concat(input.referenceAssetId || [])
    .concat(Array.isArray(input.referenceImageUrls) ? input.referenceImageUrls : [])
    .concat(Array.isArray(input.referenceAssetIds) ? input.referenceAssetIds : [])
    .map((item) => String(item || '').trim())
    .filter(Boolean)
    .length;
  const storyboardMode = String(input.videoGenerationMode || '').trim() === 'storyboard';
  const intelligentMode = String(input.videoGenerationMode || '').trim() === 'intelligent';
  const storyboardText = String(input.storyboardText || '').trim();
  if (storyboardMode) {
    if (input.type !== 'text_to_video') return 'storyboard mode only supports text_to_video';
    if (taskCaps.supportsStoryboardPrompt !== true) return `model ${input.model} does not support storyboard mode`;
    if (!storyboardText) return 'storyboardText is required when storyboard mode is enabled';
    if (hasSourceImage || hasReferenceImage || hasEndFrameImage || hasOmniImages || hasOmniVideos || hasElements) {
      return 'storyboard mode only supports structured text shots and does not accept visual inputs';
    }
  }
  if (intelligentMode) {
    if (input.type !== 'text_to_video') return 'intelligent mode only supports text_to_video';
    if (taskCaps.supportsIntelligentStoryboard !== true) return `model ${input.model} does not support intelligent storyboard mode`;
    if (!String(input.prompt || '').trim()) return 'prompt is required when intelligent mode is enabled';
    if (hasSourceImage || hasReferenceImage || hasEndFrameImage || hasOmniImages || hasOmniVideos || hasElements) {
      return 'intelligent mode currently only supports prompt-driven submission for this model';
    }
  }

  if (input.type === 'image_to_video') {
    if (!hasSourceImage && !hasReferenceImage) {
      return 'image_to_video requires an input image; end frame image is optional';
    }
    if (hasSourceImage && taskCaps.supportsSourceImage !== true) {
      return `model ${input.model} does not support source_image`;
    }
  }
  if (referenceCount > 1 && taskCaps.supportsMultipleReferenceImages !== true) {
    return `model ${input.model} does not support multiple reference images`;
  }
  if (taskCaps.maxReferenceImages && referenceCount > taskCaps.maxReferenceImages) {
    return `model ${input.model} supports at most ${taskCaps.maxReferenceImages} reference images`;
  }
  if (meta?.kind === 'video') {
    if (taskCaps.promptMaxLength && input.prompt && String(input.prompt).length > taskCaps.promptMaxLength) {
      return `prompt is too long for model ${input.model}; keep it within ${taskCaps.promptMaxLength} characters`;
    }
    if (hasInputValue(input.resolution) && hasInputValue(input.aspectRatio) && !resolutionMatchesAspectRatio(input.resolution, input.aspectRatio)) {
      return `resolution ${input.resolution} does not match aspect_ratio ${input.aspectRatio}`;
    }
    if (hasInputValue(input.resolution) && !hasResolutionCapability(taskCaps) && !hasImageSizeCapability(taskCaps)) {
      return `model ${input.model} does not support size/resolution input`;
    }
    if (hasInputValue(input.imageSize) && !hasImageSizeCapability(taskCaps)) {
      return `model ${input.model} does not support image_size input`;
    }
    if (hasInputValue(input.aspectRatio) && taskCaps.supportsAspectRatio !== true) {
      return `model ${input.model} does not support aspect_ratio`;
    }
    if (hasInputValue(input.negativePrompt) && taskCaps.supportsNegativePrompt !== true) {
      return `model ${input.model} does not support negative_prompt`;
    }
    if (hasInputValue(input.providerMode) && taskCaps.supportsProviderMode !== true) {
      return `model ${input.model} does not support provider mode`;
    }
    if (Array.isArray(taskCaps.providerModeOptions) && taskCaps.providerModeOptions.length > 0 && hasInputValue(input.providerMode) && !taskCaps.providerModeOptions.includes(String(input.providerMode))) {
      return `mode ${input.providerMode} is not supported by model ${input.model}`;
    }
    if (input.cfgScale !== undefined && input.cfgScale !== null && input.cfgScale !== '' && taskCaps.supportsCfgScale !== true) {
      return `model ${input.model} does not support cfg_scale`;
    }
    if ((hasInputValue(input.cameraControlType) || input.cameraControlPan !== undefined || input.cameraControlTilt !== undefined || input.cameraControlZoom !== undefined) && taskCaps.supportsDirectionalCameraControls !== true) {
      return `model ${input.model} does not support camera_control`;
    }
    if (hasElements && taskCaps.supportsElements !== true) return `model ${input.model} does not support element_list`;
    if (hasOmniImages && taskCaps.supportsOmniImageList !== true) return `model ${input.model} does not support omni_image_urls`;
    if (hasOmniVideos && taskCaps.supportsOmniVideoList !== true) return `model ${input.model} does not support omni_video_urls`;
    if (hasReferenceImage && taskCaps.supportsReferenceImage !== true) {
      return `model ${input.model} does not support reference_image`;
    }
    if (hasEndFrameImage && taskCaps.supportsEndFrame !== true) {
      return `model ${input.model} does not support end_frame_image`;
    }
    if (input.duration !== undefined && input.duration !== null && input.duration !== '') {
      if (!hasDurationCapability(taskCaps)) return `model ${input.model} does not support duration`;
      const duration = Number(input.duration);
      if (!Number.isFinite(duration) || duration <= 0) return 'duration must be a positive number';

      const constraint = constraints?.duration || null;
      if (constraint?.options?.length) {
        if (!constraint.options.includes(duration)) {
          return `duration ${duration}s is not supported by model ${input.model}. Allowed values: ${constraint.options.join(', ')}`;
        }
      } else if (constraint) {
        if (constraint.minDuration !== null && duration < constraint.minDuration) {
          return `duration ${duration}s is below model minimum ${constraint.minDuration}s`;
        }
        if (constraint.maxDuration !== null && duration > constraint.maxDuration) {
          return `duration ${duration}s exceeds model maximum ${constraint.maxDuration}s`;
        }
      }
    }
  }
  if (meta?.kind === 'image') {
    if (hasInputValue(input.resolution) && hasInputValue(input.aspectRatio) && !resolutionMatchesAspectRatio(input.resolution, input.aspectRatio)) {
      return `resolution ${input.resolution} does not match aspect_ratio ${input.aspectRatio}`;
    }
    if (input.imageCount !== undefined && input.imageCount !== null && input.imageCount !== '') {
      const imageCount = Number(input.imageCount);
      if (!Number.isInteger(imageCount) || imageCount < 1) return 'imageCount must be an integer greater than or equal to 1';
      const imageConstraint = constraints?.image || null;
      if (imageCount > 1 && imageConstraint?.supportsImageCount === false) {
        return `model ${input.model} does not support imageCount > 1`;
      }
      if (imageConstraint?.maxImageCount && imageCount > imageConstraint.maxImageCount) {
        return `imageCount ${imageCount} exceeds model maximum ${imageConstraint.maxImageCount}`;
      }
    }
    if (input.imageQuality) {
      const quality = String(input.imageQuality).trim();
      const allowed = constraints?.image?.qualityOptions || [];
      if (allowed.length && !allowed.includes(quality)) {
        return `imageQuality ${quality} is not supported by model ${input.model}. Allowed values: ${allowed.join(', ')}`;
      }
    }
  }
  return null;
}

function updateTaskCache(task) {
  tasks.set(task.id, task);
  return upsertStoredTask(task);
}

function composeEffectivePrompt(input) {
  const basePrompt = String(input.prompt || '').trim();
  const storyboardMode = String(input.videoGenerationMode || '').trim() === 'storyboard';
  const intelligentMode = String(input.videoGenerationMode || '').trim() === 'intelligent';
  const storyboardText = String(input.storyboardText || '').trim();
  if (storyboardMode && storyboardText) {
    return {
      originalPrompt: basePrompt,
      effectivePrompt: storyboardText,
      promptControls: ['storyboard'],
      structuredLines: storyboardText.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
    };
  }
  if (intelligentMode) {
    return {
      originalPrompt: basePrompt,
      effectivePrompt: basePrompt,
      promptControls: ['intelligent_storyboard'],
      structuredLines: []
    };
  }
  return {
    originalPrompt: basePrompt,
    effectivePrompt: basePrompt,
    promptControls: [],
    structuredLines: []
  };
}

function mapLocalTask(localId, input, providerResponse) {
  const now = new Date().toISOString();
  const task = {
    id: localId,
    studioTaskId: input.studioTaskId || null,
    providerTaskId: providerResponse.id || providerResponse.task_id || providerResponse.taskId || null,
    providerMeta: providerResponse.providerMeta || null,
    type: input.type,
    status: providerResponse.status || 'queued',
    input,
    output: providerResponse.output || null,
    error: null,
    savedAssets: [],
    createdAt: now,
    updatedAt: now
  };
  return task;
}

function mapFailedTask(localId, input, error) {
  const now = new Date().toISOString();
  return {
    id: localId,
    studioTaskId: input.studioTaskId || null,
    providerTaskId: null,
    type: input.type,
    status: 'failed',
    input,
    output: null,
    error: {
      message: extractErrorMessage(error),
      code: error.code || 'UPSTREAM_ERROR',
      providerCode: error.providerCode || null,
      statusCode: error.statusCode || 500,
      details: error.payload || null,
      requestSummary: error.requestSummary || null
    },
    savedAssets: [],
    createdAt: now,
    updatedAt: now
  };
}

async function refreshTask(task) {
  if (!task?.providerTaskId || !task.type.includes('video')) return task;

  try {
    const latest = await getVideoTask(task.providerTaskId, task.providerMeta || {});
    task.status = latest.status || task.status;
    task.output = latest.output || latest.result || latest.data || task.output;
    if (latest.video_url) {
      task.output = {
        ...(task.output || {}),
        video_url: latest.video_url,
        url: latest.video_url
      };
    }
    task.error = latest.error || null;
    task.updatedAt = new Date().toISOString();
  } catch (error) {
    task.error = {
      message: error.message,
      code: error.code || 'UPSTREAM_ERROR',
      providerCode: error.providerCode || null,
      statusCode: error.statusCode || 500
    };
    task.updatedAt = new Date().toISOString();
  }

  await updateTaskCache(task);
  return task;
}

function inferFileExtension(kind, url, mimeType, originalName = '') {
  const byName = extname(originalName).replace(/^\./, '');
  if (byName) return byName;
  const byUrl = extname(url || '').replace(/^\./, '');
  if (byUrl) return byUrl;
  if (kind === 'image') {
    if ((mimeType || '').includes('png')) return 'png';
    if ((mimeType || '').includes('jpeg')) return 'jpg';
    if ((mimeType || '').includes('webp')) return 'webp';
    return 'png';
  }
  if ((mimeType || '').includes('mp4')) return 'mp4';
  return 'bin';
}

async function resolveTaskDownload(task) {
  const kind = task.type.includes('video') ? 'video' : 'image';
  if (kind === 'video') {
    const latest = task.providerTaskId ? await getVideoTask(task.providerTaskId, task.providerMeta || {}) : null;
    const sourceUrl = latest?.video_url
      || latest?.output?.url
      || latest?.output?.video_url
      || latest?.result?.url
      || latest?.result?.video_url
      || latest?.data?.url
      || latest?.data?.video_url
      || task.output?.video_url
      || task.output?.url
      || '';
    if (!sourceUrl && task.providerTaskId) {
      const content = await getVideoContent(task.providerTaskId);
      return {
        kind,
        buffer: content.buffer,
        mimeType: content.contentType || 'video/mp4',
        fileName: `${String(task.input?.model || 'video').replace(/[^\w.-]+/g, '-')}-${task.id}.${inferFileExtension(kind, '', content.contentType || 'video/mp4')}`
      };
    }
    if (!sourceUrl) {
      const error = new Error('No downloadable video URL was found for this task.');
      error.code = 'NO_ASSET_URL';
      error.statusCode = 404;
      throw error;
    }
    const result = await downloadBinary(sourceUrl);
    return {
      kind,
      buffer: result.buffer,
      mimeType: result.mimeType,
      fileName: `${String(task.input?.model || 'video').replace(/[^\w.-]+/g, '-')}-${task.id}.${inferFileExtension(kind, sourceUrl, result.mimeType)}`
    };
  }

  const sourceUrl = task.output?.image_url
    || task.output?.data?.[0]?.url
    || '';
  if (!sourceUrl && task.output?.data?.[0]?.b64_json) {
    const buffer = Buffer.from(task.output.data[0].b64_json, 'base64');
    return {
      kind,
      buffer,
      mimeType: 'image/png',
      fileName: `${String(task.input?.model || 'image').replace(/[^\w.-]+/g, '-')}-${task.id}.png`
    };
  }
  if (!sourceUrl) {
    const error = new Error('No downloadable image URL was found for this task.');
    error.code = 'NO_ASSET_URL';
    error.statusCode = 404;
    throw error;
  }
  const result = await downloadBinary(sourceUrl);
  return {
    kind,
    buffer: result.buffer,
    mimeType: result.mimeType,
    fileName: `${String(task.input?.model || 'image').replace(/[^\w.-]+/g, '-')}-${task.id}.${inferFileExtension(kind, sourceUrl, result.mimeType)}`
  };
}

async function downloadBinary(url) {
  const validatedUrl = validateRemoteAssetUrl(url);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 90 * 1000);
  let response;
  try {
    response = await fetch(validatedUrl, { signal: controller.signal });
  } catch (error) {
    const wrapped = new Error(error.name === 'AbortError' ? '下载超时，请稍后重试。' : `下载失败：${error.message}`);
    wrapped.code = 'DOWNLOAD_FAILED';
    wrapped.statusCode = 502;
    throw wrapped;
  } finally {
    clearTimeout(timer);
  }
  if (!response.ok) {
    const error = new Error(`下载失败：${response.status} ${response.statusText}`);
    error.code = 'DOWNLOAD_FAILED';
    error.statusCode = response.status;
    throw error;
  }
  return {
    buffer: Buffer.from(await response.arrayBuffer()),
    mimeType: response.headers.get('content-type') || 'application/octet-stream'
  };
}

async function downloadToFile(url, absolutePath) {
  const validatedUrl = validateRemoteAssetUrl(url);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 90 * 1000);
  let response;
  try {
    response = await fetch(validatedUrl, { signal: controller.signal });
  } catch (error) {
    const wrapped = new Error(error.name === 'AbortError' ? '下载超时，请稍后重试。' : `下载失败：${error.message}`);
    wrapped.code = 'DOWNLOAD_FAILED';
    wrapped.statusCode = 502;
    throw wrapped;
  } finally {
    clearTimeout(timer);
  }

  if (!response.ok) {
    const error = new Error(`下载失败：${response.status} ${response.statusText}`);
    error.code = 'DOWNLOAD_FAILED';
    error.statusCode = response.status;
    throw error;
  }

  if (!response.body) {
    const error = new Error('下载响应缺少内容流。');
    error.code = 'DOWNLOAD_FAILED';
    error.statusCode = 502;
    throw error;
  }

  await pipeline(Readable.fromWeb(response.body), createWriteStream(absolutePath));
  return {
    mimeType: response.headers.get('content-type') || 'application/octet-stream'
  };
}

async function saveAssetLocally({ outputDir, kind, sourceUrl, providerTaskId, fileStem }) {
  const baseDir = resolve(process.cwd(), outputDir || DEFAULT_OUTPUT_DIR, kind === 'video' ? 'videos' : 'images');
  await mkdir(baseDir, { recursive: true });
  let result;
  let absolutePath = '';
  let downloadableUrl = sourceUrl || '';
  if (kind === 'video' && providerTaskId) {
    const latest = await getVideoTask(providerTaskId);
    const latestStatus = String(latest?.status || '').toLowerCase();
    const downloadableVideoUrl = latest?.video_url
      || latest?.output?.url
      || latest?.output?.video_url
      || latest?.result?.url
      || latest?.result?.video_url
      || latest?.data?.url
      || latest?.data?.video_url
      || '';

    if (!['completed', 'succeeded'].includes(latestStatus) && !downloadableVideoUrl) {
      const error = new Error(`Video task is not ready to save yet. Current status: ${latest?.status || 'unknown'}.`);
      error.code = 'VIDEO_NOT_READY';
      error.statusCode = 409;
      throw error;
    }

    downloadableUrl = downloadableVideoUrl;
    if (downloadableVideoUrl) {
      const extension = inferFileExtension(kind, downloadableVideoUrl, 'video/mp4');
      const safeStem = (fileStem || `${kind}-${Date.now()}`).replace(/[^\w.-]+/g, '-');
      absolutePath = join(baseDir, `${safeStem}.${extension}`);
      result = await downloadToFile(downloadableVideoUrl, absolutePath);
    } else {
      const content = await getVideoContent(providerTaskId);
      result = {
        buffer: content.buffer,
        mimeType: content.contentType || 'application/octet-stream'
      };
    }
  } else if (sourceUrl) {
    downloadableUrl = validateRemoteAssetUrl(sourceUrl);
    result = await downloadBinary(downloadableUrl);
  } else {
    const error = new Error('缺少可保存的资源地址。');
    error.code = 'NO_ASSET_URL';
    error.statusCode = 422;
    throw error;
  }

  if (!absolutePath) {
    const extension = inferFileExtension(kind, downloadableUrl, result.mimeType);
    const safeStem = (fileStem || `${kind}-${Date.now()}`).replace(/[^\w.-]+/g, '-');
    absolutePath = join(baseDir, `${safeStem}.${extension}`);
    await writeFile(absolutePath, result.buffer);
  }
  return {
    kind,
    path: absolutePath,
    fileName: basename(absolutePath),
    mimeType: result.mimeType
  };
}

async function handleAssetUpload(body) {
  const match = String(body.dataUrl || '').match(/^data:([^;]+);base64,(.+)$/);
  if (!match) {
    const error = new Error('无效的文件内容，请重新选择本地图片。');
    error.code = 'INVALID_DATA_URL';
    error.statusCode = 400;
    throw error;
  }

  const mimeType = body.mimeType || match[1];
  if (!/^image\//i.test(mimeType)) {
    const error = new Error('当前仅支持上传图片素材。');
    error.code = 'UNSUPPORTED_MIME_TYPE';
    error.statusCode = 400;
    throw error;
  }
  const buffer = Buffer.from(match[2], 'base64');
  if (!buffer.length || buffer.length > 10 * 1024 * 1024) {
    const error = new Error('图片大小必须在 10MB 以内。');
    error.code = 'ASSET_TOO_LARGE';
    error.statusCode = 413;
    throw error;
  }
  const kind = body.kind || 'image';
  const extension = inferFileExtension(kind, '', mimeType, body.name || '');
  const relativeName = `${kind}s/${Date.now()}-${randomUUID()}.${extension}`;
  const filePath = await writeAssetFile(relativeName, buffer);
  const asset = createAssetRecord({
    kind,
    source: 'upload',
    mimeType,
    originalName: body.name,
    filePath,
    taskId: body.taskId || null
  });
  await addStoredAsset(asset);
  return asset;
}

async function assetToDataUrl(assetId) {
  if (!assetId) return '';
  const asset = getStoredAsset(assetId);
  if (!asset) {
    const error = new Error('Selected asset was not found.');
    error.code = 'ASSET_NOT_FOUND';
    error.statusCode = 404;
    throw error;
  }

  const buffer = await readFile(asset.filePath);
  return `data:${asset.mimeType || 'application/octet-stream'};base64,${buffer.toString('base64')}`;
}

async function assetsToDataUrls(assetIds) {
  if (!Array.isArray(assetIds) || !assetIds.length) return [];
  const values = [];
  for (const assetId of assetIds) {
    const normalized = String(assetId || '').trim();
    if (!normalized) continue;
    values.push(await assetToDataUrl(normalized));
  }
  return values;
}

async function buildTaskPayload(input) {
  const sourceImageDataUrl = await assetToDataUrl(input.sourceAssetId);
  const referenceImageDataUrl = await assetToDataUrl(input.referenceAssetId);
  const referenceImageDataUrls = await assetsToDataUrls(input.referenceAssetIds);
  const endFrameImageDataUrl = await assetToDataUrl(input.endFrameAssetId);
  const promptMeta = composeEffectivePrompt(input);
  const taskCaps = await resolveTaskCapabilities(input.model, input.type);
  const supportsResolution = hasResolutionCapability(taskCaps);
  const supportsImageSize = hasImageSizeCapability(taskCaps);
  const supportsAspectRatio = taskCaps.supportsAspectRatio === true;
  const supportsDuration = hasDurationCapability(taskCaps);
  const supportsNegativePrompt = taskCaps.supportsNegativePrompt === true;
  const supportsSourceImage = taskCaps.supportsImageEditSourceImage === true || taskCaps.supportsImageToVideoFirstFrame === true || taskCaps.supportsSourceImage === true;
  const supportsReferenceImage = taskCaps.supportsImageToVideoReferenceImages === true || taskCaps.supportsTextToImageReferenceImages === true || taskCaps.supportsTextToVideoReferenceImages === true || taskCaps.supportsReferenceImage === true;
  const supportsEndFrame = taskCaps.supportsImageToVideoEndFrame === true;
  const primaryReferenceImageUrl = String(input.referenceImageUrl || '').trim() || (Array.isArray(input.referenceImageUrls) ? String(input.referenceImageUrls[0] || '').trim() : '');
  const primaryReferenceImageDataUrl = referenceImageDataUrl || referenceImageDataUrls[0] || '';
  const primaryImageUrl = String(input.sourceImageUrl || '').trim() || primaryReferenceImageUrl;
  const primaryImageDataUrl = sourceImageDataUrl || primaryReferenceImageDataUrl;
  const isImageToVideo = input.type === 'image_to_video';
  const resolvedSourceImageUrl = isImageToVideo && supportsSourceImage ? primaryImageUrl : input.sourceImageUrl;
  const resolvedSourceImageDataUrl = isImageToVideo && supportsSourceImage ? primaryImageDataUrl : sourceImageDataUrl;
  const resolvedReferenceImageUrl = isImageToVideo && !supportsSourceImage && supportsReferenceImage ? primaryImageUrl : input.referenceImageUrl;
  const resolvedReferenceImageDataUrl = isImageToVideo && !supportsSourceImage && supportsReferenceImage ? primaryImageDataUrl : referenceImageDataUrl;
  const resolvedReferenceImageUrls = isImageToVideo ? undefined : input.referenceImageUrls;
  const resolvedReferenceImageDataUrls = isImageToVideo ? undefined : referenceImageDataUrls;

  return {
    type: input.type,
    prompt: promptMeta.effectivePrompt,
    negative_prompt: supportsNegativePrompt ? input.negativePrompt : undefined,
    provider_mode: taskCaps.supportsProviderMode ? input.providerMode : undefined,
    cfg_scale: taskCaps.supportsCfgScale ? input.cfgScale : undefined,
    seed: input.seed,
    model: input.model,
    n: input.n ?? input.imageCount,
    quality: input.quality ?? input.imageQuality,
    resolution: supportsResolution ? input.resolution : undefined,
    image_size: supportsImageSize ? input.imageSize : undefined,
    aspect_ratio: supportsAspectRatio ? input.aspectRatio : undefined,
    duration: supportsDuration ? input.duration : undefined,
    fps: input.fps,
    reference_image_url: supportsReferenceImage ? resolvedReferenceImageUrl : undefined,
    reference_image_urls: supportsReferenceImage ? resolvedReferenceImageUrls : undefined,
    source_image_url: resolvedSourceImageUrl,
    style_strength: input.styleStrength,
    source_image_data_url: resolvedSourceImageDataUrl,
    reference_image_data_url: supportsReferenceImage ? resolvedReferenceImageDataUrl : undefined,
    reference_image_data_urls: supportsReferenceImage ? resolvedReferenceImageDataUrls : undefined,
    end_frame_image_url: supportsEndFrame ? input.endFrameImageUrl : undefined,
    end_frame_image_data_url: supportsEndFrame ? endFrameImageDataUrl : undefined,
    camera_control: taskCaps.supportsDirectionalCameraControls && input.cameraControlType
      ? {
          type: input.cameraControlType,
          config: {
            pan: input.cameraControlPan,
            tilt: input.cameraControlTilt,
            zoom: input.cameraControlZoom
          }
        }
      : undefined,
    shot_type: taskCaps.supportsIntelligentStoryboard && String(input.videoGenerationMode || '').trim() === 'intelligent'
      ? 'intelligence'
      : undefined,
    omni_image_urls: taskCaps.supportsOmniImageList ? input.omniImageUrls : undefined,
    omni_video_urls: taskCaps.supportsOmniVideoList ? input.omniVideoUrls : undefined,
    element_list: taskCaps.supportsElements ? input.elementList : undefined
  };
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === 'GET' && url.pathname === '/api/v1/health') return json(res, 200, { ok: true });

  if (req.method === 'GET' && url.pathname === '/api/v1/meta') {
    return json(res, 200, {
      taskTypes: TASK_TYPE_DEFINITIONS,
      providerPresets: [PROVIDER_PRESETS.bltcy],
      generationDefaults: {
        strictModelSelection: true
      }
    });
  }

  if (req.method === 'GET' && url.pathname === '/api/v1/config') {
    return json(res, 200, { sora2: publicConfig() });
  }

  if (req.method === 'GET' && url.pathname === '/api/v1/provider-profiles') {
    return json(res, 200, {
      activeProfileId: getActiveProfileId(),
      data: listProviderProfiles().map((profile) => ({
        id: profile.id,
        label: profile.label,
        providerType: profile.config?.providerType || '',
        baseUrl: profile.config?.baseUrl || '',
        updatedAt: profile.updatedAt
      }))
    });
  }

  if (req.method === 'POST' && url.pathname === '/api/v1/provider-profiles/activate') {
    try {
      const body = await parseBody(req);
      const profile = await activateProviderProfile(body.profileId);
      if (!profile) return json(res, 404, { error: 'Profile not found', code: 'NOT_FOUND' });
      setSora2RuntimeConfig(profile.config);
      return json(res, 200, {
        ok: true,
        activeProfileId: profile.id,
        sora2: publicConfig()
      });
    } catch (error) {
      return json(res, 400, mapError(error));
    }
  }

  const profileDeleteMatch = url.pathname.match(/^\/api\/v1\/provider-profiles\/([^/]+)$/);
  if (req.method === 'DELETE' && profileDeleteMatch) {
    const deleted = await deleteProviderProfile(profileDeleteMatch[1]);
    if (!deleted) return json(res, 404, { error: 'Profile not found', code: 'NOT_FOUND' });
    const current = getStoredConfig();
    if (current) setSora2RuntimeConfig(current);
    return json(res, 200, {
      ok: true,
      activeProfileId: getActiveProfileId(),
      sora2: publicConfig()
    });
  }

  if (req.method === 'GET' && url.pathname === '/api/v1/studio-tasks') {
    return json(res, 200, {
      activeStudioTaskId: getActiveStudioTaskId(),
      data: listStudioTasks()
    });
  }

  if (req.method === 'POST' && url.pathname === '/api/v1/studio-tasks') {
    try {
      const body = await parseBody(req);
      const name = String(body.name || '').trim();
      if (!name) return json(res, 400, { error: 'Task name is required', code: 'VALIDATION_ERROR' });
      const studioTask = await saveStudioTask({
        id: body.id || null,
        name,
        description: body.description || '',
        status: body.status || 'active',
        tags: body.tags || [],
        makeActive: body.makeActive !== false
      });
      return json(res, 201, {
        ok: true,
        studioTask,
        activeStudioTaskId: getActiveStudioTaskId(),
        data: listStudioTasks()
      });
    } catch (error) {
      return json(res, 400, mapError(error));
    }
  }

  if (req.method === 'POST' && url.pathname === '/api/v1/studio-tasks/activate') {
    try {
      const body = await parseBody(req);
      const studioTask = await activateStudioTask(body.studioTaskId);
      if (!studioTask) return json(res, 404, { error: 'Task not found', code: 'NOT_FOUND' });
      return json(res, 200, {
        ok: true,
        activeStudioTaskId: getActiveStudioTaskId(),
        studioTask
      });
    } catch (error) {
      return json(res, 400, mapError(error));
    }
  }

  const studioTaskDeleteMatch = url.pathname.match(/^\/api\/v1\/studio-tasks\/([^/]+)$/);
  if (req.method === 'DELETE' && studioTaskDeleteMatch) {
    const deleted = await deleteStudioTask(studioTaskDeleteMatch[1]);
    if (!deleted) return json(res, 404, { error: 'Task not found', code: 'NOT_FOUND' });
    return json(res, 200, {
      ok: true,
      activeStudioTaskId: getActiveStudioTaskId(),
      data: listStudioTasks()
    });
  }

  if (req.method === 'POST' && url.pathname === '/api/v1/config') {
    try {
      const body = await parseBody(req);
      setSora2RuntimeConfig({
        providerLabel: body.providerLabel,
        providerType: body.providerType,
        apiKey: body.sora2ApiKey === '__KEEP__' ? undefined : body.sora2ApiKey,
        baseUrl: body.baseUrl,
        proxyUrl: body.proxyUrl,
        outputDir: body.outputDir,
        modelsPath: body.modelsPath,
        imageGeneratePath: body.imageGeneratePath,
        videoCreatePath: body.videoCreatePath,
        videoRetrievePathTemplate: body.videoRetrievePathTemplate,
        videoCancelPathTemplate: body.videoCancelPathTemplate,
        videoContentPathTemplate: body.videoContentPathTemplate,
        videoRequestFormat: body.videoRequestFormat,
        inputReferenceFormat: body.inputReferenceFormat,
        imageEnabled: body.imageEnabled,
        videoEnabled: body.videoEnabled
      });
      const persistable = getPersistableRuntimeConfig();
      await saveStoredConfig(persistable);
      const profile = await saveProviderProfile({
        id: body.profileId || null,
        label: body.profileLabel || body.providerLabel || persistable.providerLabel,
        config: persistable,
        makeActive: true
      });
      return json(res, 200, {
        ok: true,
        activeProfileId: profile.id,
        sora2: publicConfig()
      });
    } catch (error) {
      return json(res, 400, mapError(error));
    }
  }

  if (req.method === 'POST' && url.pathname === '/api/v1/prompt/optimize-model') {
    try {
      const body = await parseBody(req);
      const model = String(body.model || '').trim();
      const taskType = String(body.taskType || '').trim();
      if (!model) return json(res, 400, { error: 'model is required', code: 'VALIDATION_ERROR' });

      const inputPrompt = String(body.prompt || '').trim();
      if (!inputPrompt) {
        return json(res, 400, { error: 'prompt is required', code: 'VALIDATION_ERROR' });
      }

      const optimized = await optimizePromptWithModel({
        model,
        taskType,
        prompt: inputPrompt,
        optimizePath: body.optimizePath || ''
      });
      return json(res, 200, {
        ok: true,
        model,
        taskType,
        usedPath: optimized.usedPath,
        originalPrompt: inputPrompt,
        optimizedPrompt: optimized.optimizedPrompt
      });
    } catch (error) {
      return json(res, error.statusCode || 500, mapError(error));
    }
  }

  if (req.method === 'GET' && url.pathname === '/api/v1/connectivity') {
    try {
      const result = await checkConnectivity();
      return json(res, result.ok ? 200 : 502, { sora2: publicConfig(), connectivity: result });
    } catch (error) {
      return json(res, 502, mapError(error));
    }
  }

  if (req.method === 'GET' && url.pathname === '/api/v1/diagnostics') {
    const result = {
      generatedAt: new Date().toISOString(),
      config: publicConfig(),
      connectivity: null,
      models: {
        image: null,
        video: null
      },
      ok: false
    };
    try {
      result.connectivity = await checkConnectivity();
    } catch (error) {
      result.connectivity = { ok: false, message: error.message, code: error.code || 'UPSTREAM_ERROR' };
    }
    try {
      const image = await listModels('text_to_image', { includeCatalog: false });
      result.models.image = { ok: image.total > 0, total: image.total, sample: image.data.slice(0, 5).map((item) => item.id) };
    } catch (error) {
      result.models.image = { ok: false, message: error.message, code: error.code || 'UPSTREAM_ERROR' };
    }
    try {
      const video = await listModels('text_to_video', { includeCatalog: false });
      result.models.video = { ok: video.total > 0, total: video.total, sample: video.data.slice(0, 5).map((item) => item.id) };
    } catch (error) {
      result.models.video = { ok: false, message: error.message, code: error.code || 'UPSTREAM_ERROR' };
    }
    const config = publicConfig();
    result.ok = Boolean(result.connectivity?.generationReady && result.models.image?.ok && (config.capabilities.videoEnabled ? result.models.video?.ok : true));
    return json(res, result.ok ? 200 : 502, result);
  }

  if (req.method === 'GET' && url.pathname === '/api/v1/models') {
    try {
      const taskType = url.searchParams.get('taskType') || undefined;
      const models = await listModels(taskType, { includeCatalog: true, refreshCatalog: false });
      const sanitized = sanitizeModelListResponse(models);
      if (taskType && models.total === 0) {
        return json(res, 422, {
          error: `No models available for task type: ${taskType}`,
          code: 'NO_MODELS_FOR_TASK_TYPE',
          details: sanitized
        });
      }
      return json(res, 200, sanitized);
    } catch (error) {
      return json(res, 502, mapError(error));
    }
  }

  if (req.method === 'GET' && url.pathname === '/api/v1/assets') {
    return json(res, 200, { data: listStoredAssets().map((asset) => sanitizeAssetForClient(asset)) });
  }

  if (req.method === 'POST' && url.pathname === '/api/v1/assets/upload') {
    try {
      const body = await parseBody(req);
      const asset = await handleAssetUpload(body);
      return json(res, 201, { ok: true, asset: sanitizeAssetForClient(asset) });
    } catch (error) {
      return json(res, error.statusCode || 500, mapError(error));
    }
  }

  const assetContentMatch = url.pathname.match(/^\/api\/v1\/assets\/([^/]+)\/content$/);
  if (req.method === 'GET' && assetContentMatch) {
    const asset = getStoredAsset(assetContentMatch[1]);
    if (!asset) return json(res, 404, { error: 'Asset not found', code: 'NOT_FOUND' });
    if (!asset.filePath || !isSafeWorkspacePath(asset.filePath)) {
      return json(res, 403, { error: 'Asset path is invalid', code: 'ASSET_PATH_BLOCKED' });
    }
    try {
      const buffer = await readFile(asset.filePath);
      res.writeHead(200, { 'Content-Type': asset.mimeType || 'application/octet-stream' });
      res.end(buffer);
      return;
    } catch {
      return json(res, 404, { error: 'Asset file missing', code: 'ASSET_FILE_MISSING' });
    }
  }

  const assetMatch = url.pathname.match(/^\/api\/v1\/assets\/([^/]+)$/);
  if (req.method === 'DELETE' && assetMatch) {
    const asset = getStoredAsset(assetMatch[1]);
    if (!asset) return json(res, 404, { error: 'Asset not found', code: 'NOT_FOUND' });
    if (!asset.filePath || !isSafeWorkspacePath(asset.filePath)) {
      return json(res, 403, { error: 'Asset path is invalid', code: 'ASSET_PATH_BLOCKED' });
    }
    try {
      await deleteAssetFile(asset.filePath);
      await deleteStoredAsset(asset.id);
      return json(res, 200, { ok: true, deleted: true, assetId: asset.id });
    } catch (error) {
      return json(res, error.statusCode || 500, mapError(error));
    }
  }

  if (req.method === 'POST' && url.pathname === '/api/v1/assets/save') {
    try {
      const body = await parseBody(req);
      const config = getSora2RuntimeConfig();
      const saved = await saveAssetLocally({
        outputDir: body.outputDir || config.outputDir || DEFAULT_OUTPUT_DIR,
        kind: body.kind,
        sourceUrl: body.sourceUrl,
        providerTaskId: body.providerTaskId,
        fileStem: body.fileStem
      });

      if (body.taskId) {
        const task = tasks.get(body.taskId) || getStoredTask(body.taskId);
        if (task) {
          task.savedAssets = Array.isArray(task.savedAssets) ? task.savedAssets : [];
          task.savedAssets.push(saved);
          task.updatedAt = new Date().toISOString();
          await updateTaskCache(task);
        }
      }
      return json(res, 201, { ok: true, saved: sanitizeSavedAsset(saved) });
    } catch (error) {
      return json(res, error.statusCode || 500, mapError(error));
    }
  }

  if (req.method === 'POST' && url.pathname === '/api/images') {
    try {
      const body = await parseBody(req);
      if (!body.prompt) return json(res, 400, { error: 'prompt is required', code: 'VALIDATION_ERROR' });
      return json(res, 201, await createImage(body));
    } catch (error) {
      return json(res, error.statusCode || 500, mapError(error));
    }
  }

  if (req.method === 'POST' && url.pathname === '/api/videos') {
    try {
      const body = await parseBody(req);
      if (!body.prompt) return json(res, 400, { error: 'prompt is required', code: 'VALIDATION_ERROR' });
      return json(res, 201, await createVideoTask(body));
    } catch (error) {
      return json(res, error.statusCode || 500, mapError(error));
    }
  }

  const videoIdMatch = url.pathname.match(/^\/api\/videos\/([^/]+)$/);
  if (req.method === 'GET' && videoIdMatch) {
    try {
      return json(res, 200, await getVideoTask(videoIdMatch[1]));
    } catch (error) {
      return json(res, error.statusCode || 500, mapError(error));
    }
  }

  const videoContentMatch = url.pathname.match(/^\/api\/videos\/([^/]+)\/content$/);
  if (req.method === 'GET' && videoContentMatch) {
    try {
      const content = await getVideoContent(videoContentMatch[1]);
      res.writeHead(200, { 'Content-Type': content.contentType });
      res.end(content.buffer);
      return;
    } catch (error) {
      return json(res, error.statusCode || 500, mapError(error));
    }
  }

  if (req.method === 'POST' && url.pathname === '/api/v1/tasks') {
    let body = null;
    let studioTaskId = null;
    let payload = null;
    try {
      body = await parseBody(req);
      studioTaskId = String(body.studioTaskId || getActiveStudioTaskId() || '').trim() || null;
      const validationError = await validateInput(body);
      if (validationError) return json(res, 400, { error: validationError, code: 'VALIDATION_ERROR' });
      payload = await buildTaskPayload(body);
      const providerResponse = payload.type.includes('video') ? await createVideoTask(payload) : await createImage(payload);
      const taskInput = {
        ...body,
        studioTaskId,
        prompt: payload.prompt || body.prompt || ''
      };
      const task = mapLocalTask(randomUUID(), taskInput, providerResponse);
      await updateTaskCache(task);
      return json(res, 201, sanitizeTaskForClient(task));
    } catch (error) {
      if (body && payload) {
        const failedInput = {
          ...body,
          studioTaskId,
          prompt: payload.prompt || body.prompt || ''
        };
        const failedTask = mapFailedTask(randomUUID(), failedInput, error);
        await updateTaskCache(failedTask);
      }
      return json(res, error.statusCode || 500, mapError(error));
    }
  }

  if (req.method === 'GET' && url.pathname === '/api/v1/models/cache') {
    const taskType = url.searchParams.get('taskType') || undefined;
    const cached = await readModelListCache();
    if (!cached) {
      return json(res, 404, {
        error: 'No cached models available',
        code: 'MODEL_CACHE_EMPTY'
      });
    }

    let data = Array.isArray(cached.data) ? cached.data : [];
    if (taskType) {
      data = data.filter((model) => {
        const supportedTasks = getCatalogSupportedTasks(model);
        return supportedTasks.length ? supportedTasks.includes(taskType) : true;
      });
    }

    return json(res, 200, {
      ok: true,
      cached: true,
      source: 'runtime-cache',
      updatedAt: cached.updatedAt,
      total: data.length,
      data
    });
  }

  if (req.method === 'POST' && url.pathname === '/api/v1/models/sync') {
    try {
      const body = await parseBody(req);
      const mode = String(body?.mode || 'full').trim().toLowerCase();
      const state = await startModelSync(mode);
      return json(res, 202, { ok: true, sync: state });
    } catch (error) {
      return json(res, 502, mapError(error));
    }
  }

  if (req.method === 'GET' && url.pathname === '/api/v1/models/sync') {
    return json(res, 200, { sync: modelSyncState });
  }

  if (req.method === 'GET' && url.pathname === '/api/v1/tasks') {
    const status = url.searchParams.get('status');
    const studioTaskId = url.searchParams.get('studioTaskId');
    const page = Math.max(1, Number(url.searchParams.get('page') || '1') || 1);
    const pageSize = Math.min(100, Math.max(1, Number(url.searchParams.get('pageSize') || '20') || 20));
    let all = listStoredTasks().sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    if (status) all = all.filter((task) => task.status === status);
    if (studioTaskId) all = all.filter((task) => task.studioTaskId === studioTaskId);
    const total = all.length;
    const data = all.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize).map((task) => sanitizeTaskForClient(task));
    return json(res, 200, { data, page, pageSize, total });
  }

  const taskMatch = url.pathname.match(/^\/api\/v1\/tasks\/([^/]+)$/);
  if (req.method === 'GET' && taskMatch) {
    const task = tasks.get(taskMatch[1]) || getStoredTask(taskMatch[1]);
    if (!task) return json(res, 404, { error: 'Task not found', code: 'NOT_FOUND' });
    await refreshTask(task);
    return json(res, 200, sanitizeTaskForClient(task));
  }

  const taskDownloadMatch = url.pathname.match(/^\/api\/v1\/tasks\/([^/]+)\/browser-download$/);
  if (req.method === 'GET' && taskDownloadMatch) {
    const task = tasks.get(taskDownloadMatch[1]) || getStoredTask(taskDownloadMatch[1]);
    if (!task) return json(res, 404, { error: 'Task not found', code: 'NOT_FOUND' });
    try {
      const download = await resolveTaskDownload(task);
      res.writeHead(200, {
        'Content-Type': download.mimeType || 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${download.fileName}"`
      });
      res.end(download.buffer);
      return;
    } catch (error) {
      return json(res, error.statusCode || 500, mapError(error));
    }
  }

  const cancelMatch = url.pathname.match(/^\/api\/v1\/tasks\/([^/]+)\/cancel$/);
  if (req.method === 'POST' && cancelMatch) {
    const task = tasks.get(cancelMatch[1]) || getStoredTask(cancelMatch[1]);
    if (!task) return json(res, 404, { error: 'Task not found', code: 'NOT_FOUND' });
    try {
      let upstreamCancelError = null;
      if (task.providerTaskId && task.type.includes('video')) {
        try {
          await cancelVideoTask(task.providerTaskId);
        } catch (error) {
          upstreamCancelError = {
            message: error.message,
            code: error.code || 'UPSTREAM_ERROR',
            providerCode: error.providerCode || null,
            statusCode: error.statusCode || 500
          };
        }
      }
      task.status = 'canceled';
      task.error = upstreamCancelError;
      task.updatedAt = new Date().toISOString();
      await updateTaskCache(task);
      return json(res, 200, {
        ...sanitizeTaskForClient(task),
        warning: upstreamCancelError
          ? 'Upstream cancel request failed, but the local task has been marked as canceled.'
          : null
      });
    } catch (error) {
      return json(res, error.statusCode || 500, mapError(error));
    }
  }

  const retryMatch = url.pathname.match(/^\/api\/v1\/tasks\/([^/]+)\/retry$/);
  if (req.method === 'POST' && retryMatch) {
    const task = tasks.get(retryMatch[1]) || getStoredTask(retryMatch[1]);
    if (!task) return json(res, 404, { error: 'Task not found', code: 'NOT_FOUND' });
    let payload = null;
    try {
      const validationError = await validateInput(task.input || {});
      if (validationError) return json(res, 400, { error: validationError, code: 'VALIDATION_ERROR' });
      payload = await buildTaskPayload(task.input);
      const providerResponse = payload.type.includes('video') ? await createVideoTask(payload) : await createImage(payload);
      const retriedInput = {
        ...task.input,
        studioTaskId: task.studioTaskId || task.input?.studioTaskId || null,
        prompt: payload.prompt || task.input.prompt || ''
      };
      const retried = mapLocalTask(randomUUID(), retriedInput, providerResponse);
      await updateTaskCache(retried);
      return json(res, 201, sanitizeTaskForClient(retried));
    } catch (error) {
      if (payload) {
        const failedRetryInput = {
          ...task.input,
          studioTaskId: task.studioTaskId || task.input?.studioTaskId || null,
          prompt: payload.prompt || task.input?.prompt || ''
        };
        const failedRetry = mapFailedTask(randomUUID(), failedRetryInput, error);
        await updateTaskCache(failedRetry);
      }
      return json(res, error.statusCode || 500, mapError(error));
    }
  }

  const deleteTaskMatch = url.pathname.match(/^\/api\/v1\/tasks\/([^/]+)$/);
  if (req.method === 'DELETE' && deleteTaskMatch) {
    const taskId = deleteTaskMatch[1];
    tasks.delete(taskId);
    const deleted = await deleteStoredTask(taskId);
    if (!deleted) return json(res, 404, { error: 'Task not found', code: 'NOT_FOUND' });
    return json(res, 200, { ok: true, id: taskId });
  }

  const taskStudioTaskMatch = url.pathname.match(/^\/api\/v1\/tasks\/([^/]+)\/studio-task$/);
  if (req.method === 'POST' && taskStudioTaskMatch) {
    try {
      const body = await parseBody(req);
      const studioTaskId = String(body.studioTaskId || '').trim() || null;
      const updated = await assignTaskStudioTask(taskStudioTaskMatch[1], studioTaskId);
      if (!updated) return json(res, 404, { error: 'Task not found', code: 'NOT_FOUND' });
      tasks.set(updated.id, updated);
      return json(res, 200, { ok: true, task: updated });
    } catch (error) {
      return json(res, 400, mapError(error));
    }
  }

  if (req.method === 'POST' && url.pathname === '/api/v1/webhooks/sora2') {
    const signature = req.headers['x-sora2-signature'];
    if (WEBHOOK_SECRET && signature !== WEBHOOK_SECRET) return json(res, 401, { error: 'Invalid webhook signature', code: 'UNAUTHORIZED' });
    try {
      const body = await parseBody(req);
      const providerTaskId = body.id || body.task_id || body.taskId;
      const task = listStoredTasks().find((item) => item.providerTaskId === providerTaskId);
      if (!task) return json(res, 200, { ok: true, skipped: true });
      task.status = body.status || task.status;
      task.output = body.output || body.result || task.output;
      task.error = body.error || null;
      task.updatedAt = new Date().toISOString();
      await updateTaskCache(task);
      return json(res, 200, { ok: true });
    } catch (error) {
      return json(res, 400, mapError(error));
    }
  }

  const filePath = url.pathname === '/' ? '/index.html' : url.pathname;
  const fullPath = resolve(process.cwd(), 'public', `.${filePath}`);
  const publicRoot = resolve(process.cwd(), 'public');
  if ((fullPath === publicRoot || fullPath.startsWith(`${publicRoot}\\`) || fullPath.startsWith(`${publicRoot}/`)) && existsSync(fullPath)) {
    const ext = fullPath.split('.').pop();
    const types = {
      html: 'text/html; charset=utf-8',
      css: 'text/css; charset=utf-8',
      js: 'application/javascript; charset=utf-8'
    };
    res.writeHead(200, { 'Content-Type': types[ext] || 'text/plain; charset=utf-8' });
    res.end(await readFile(fullPath));
    return;
  }

  json(res, 404, { error: 'Not found', code: 'NOT_FOUND' });
});

let activePort = null;

async function listenOnPort(port) {
  return new Promise((resolve, reject) => {
    const onError = (error) => {
      server.off('listening', onListening);
      reject(error);
    };
    const onListening = () => {
      server.off('error', onError);
      resolve();
    };
    server.once('error', onError);
    server.once('listening', onListening);
    server.listen(port);
  });
}

export async function startServer() {
  if (activePort !== null && server.listening) return activePort;
  await initStorage();
  const storedConfig = getStoredConfig();
  if (storedConfig) setSora2RuntimeConfig(storedConfig);
  for (const task of listStoredTasks()) tasks.set(task.id, task);

  for (let offset = 0; offset <= 10; offset += 1) {
    const port = BASE_PORT + offset;
    try {
      await listenOnPort(port);
      activePort = port;
      if (offset > 0) console.warn(`Port ${BASE_PORT} was unavailable, auto-switched to ${port}.`);
      console.log(`Sora2 workbench running at http://localhost:${port}`);
      return port;
    } catch (error) {
      if (error.code === 'EADDRINUSE') {
        console.warn(`Port ${port} is in use, retrying...`);
        continue;
      }
      throw error;
    }
  }

  console.error(`Unable to start server: ports ${BASE_PORT}-${BASE_PORT + 10} are all in use.`);
  console.error('Please free a port or set PORT explicitly, e.g. PORT=3100 npm run dev');
  throw new Error(`Unable to start server on ports ${BASE_PORT}-${BASE_PORT + 10}`);
}

export async function stopServer() {
  if (!server.listening) {
    activePort = null;
    return;
  }
  await new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) reject(error);
      else resolve();
    });
  });
  activePort = null;
}

if (process.argv[1] && resolve(process.argv[1]) === ENTRY_FILE) {
  startServer().catch((error) => {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  });
}
