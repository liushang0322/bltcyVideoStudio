const els = {
  configForm: document.getElementById('configForm'),
  createForm: document.getElementById('createForm'),
  providerPreset: document.getElementById('providerPreset'),
  profileSelect: document.getElementById('profileSelect'),
  deleteProfile: document.getElementById('deleteProfile'),
  toggleAdvanced: document.getElementById('toggleAdvanced'),
  advancedConfig: document.getElementById('advancedConfig'),
  configStatus: document.getElementById('configStatus'),
  configDraftStatus: document.getElementById('configDraftStatus'),
  resetConfigDraft: document.getElementById('resetConfigDraft'),
  checkConnectivity: document.getElementById('checkConnectivity'),
  runDiagnostics: document.getElementById('runDiagnostics'),
  connectivityStatus: document.getElementById('connectivityStatus'),
  diagnosticsStatus: document.getElementById('diagnosticsStatus'),
  loadModels: document.getElementById('loadModels'),
  reloadModelsFull: document.getElementById('reloadModelsFull'),
  reloadModelsFromDocs: document.getElementById('reloadModelsFromDocs'),
  modelSyncPanel: document.getElementById('modelSyncPanel'),
  modelSyncTitle: document.getElementById('modelSyncTitle'),
  modelSyncMeta: document.getElementById('modelSyncMeta'),
  modelSyncBar: document.getElementById('modelSyncBar'),
  modelSyncMessage: document.getElementById('modelSyncMessage'),
  modelsText: document.getElementById('models'),
  prompt: document.getElementById('prompt'),
  imageModelList: document.getElementById('imageModelList'),
  videoModelList: document.getElementById('videoModelList'),
  otherModelList: document.getElementById('otherModelList'),
  typeSelect: document.getElementById('typeSelect'),
  storyboardPanel: document.getElementById('storyboardPanel'),
  storyboardWorkspace: document.getElementById('storyboardWorkspace'),
  videoGenerationMode: document.getElementById('videoGenerationMode'),
  videoModeHint: document.getElementById('videoModeHint'),
  storyboardTimeline: document.getElementById('storyboardTimeline'),
  storyboardEditor: document.getElementById('storyboardEditor'),
  storyboardPreview: document.getElementById('storyboardPreview'),
  storyboardText: document.getElementById('storyboardText'),
  addStoryboardShot: document.getElementById('addStoryboardShot'),
  imageModel: document.getElementById('imageModel'),
  videoModel: document.getElementById('videoModel'),
  imageModelWrap: document.getElementById('imageModelWrap'),
  videoModelWrap: document.getElementById('videoModelWrap'),
  modelCapabilityHint: document.getElementById('modelCapabilityHint'),
  modelRoleHint: document.getElementById('modelRoleHint'),
  taskTypeGuide: document.getElementById('taskTypeGuide'),
  fieldGuidePanel: document.getElementById('fieldGuidePanel'),
  negativePrompt: document.getElementById('negativePrompt'),
  imageOptionRow: document.getElementById('imageOptionRow'),
  imageCountWrap: document.getElementById('imageCountWrap'),
  imageQualityWrap: document.getElementById('imageQualityWrap'),
  imageCount: document.getElementById('imageCount'),
  imageQuality: document.getElementById('imageQuality'),
  aspectRatioWrap: document.getElementById('aspectRatioWrap'),
  aspectRatio: document.getElementById('aspectRatio'),
  imageSizeWrap: document.getElementById('imageSizeWrap'),
  imageSize: document.getElementById('imageSize'),
  resolutionPreset: document.getElementById('resolutionPreset'),
  resolutionInput: document.getElementById('resolutionInput'),
  durationWrap: document.getElementById('durationWrap'),
  durationSelect: document.getElementById('durationSelect'),
  durationInput: document.getElementById('durationInput'),
  durationHidden: document.getElementById('duration'),
  sourceImageWrap: document.getElementById('sourceImageWrap'),
  referenceImageWrap: document.getElementById('referenceImageWrap'),
  sourceImageUrl: document.getElementById('sourceImageUrl'),
  referenceImageUrl: document.getElementById('referenceImageUrl'),
  visualInputGuide: document.getElementById('visualInputGuide'),
  sourceImageHint: document.getElementById('sourceImageHint'),
  referenceImageHint: document.getElementById('referenceImageHint'),
  sourceAssetWrap: document.getElementById('sourceAssetWrap'),
  referenceAssetWrap: document.getElementById('referenceAssetWrap'),
  sourceUploadWrap: document.getElementById('sourceUploadWrap'),
  referenceUploadWrap: document.getElementById('referenceUploadWrap'),
  sourceAssetSelect: document.getElementById('sourceAssetSelect'),
  referenceAssetSelect: document.getElementById('referenceAssetSelect'),
  sourceUploadInput: document.getElementById('sourceUploadInput'),
  referenceUploadInput: document.getElementById('referenceUploadInput'),
  endFrameGroup: document.getElementById('endFrameGroup'),
  endFrameUploadWrap: document.getElementById('endFrameUploadWrap'),
  endFrameImageUrl: document.getElementById('endFrameImageUrl'),
  endFrameAssetSelect: document.getElementById('endFrameAssetSelect'),
  endFrameUploadInput: document.getElementById('endFrameUploadInput'),
  endFrameHint: document.getElementById('endFrameHint'),
  videoAdvancedRow: document.getElementById('videoAdvancedRow'),
  providerModeWrap: document.getElementById('providerModeWrap'),
  providerMode: document.getElementById('providerMode'),
  cfgScaleWrap: document.getElementById('cfgScaleWrap'),
  cfgScale: document.getElementById('cfgScale'),
  cameraControlGroup: document.getElementById('cameraControlGroup'),
  cameraControlType: document.getElementById('cameraControlType'),
  cameraControlPan: document.getElementById('cameraControlPan'),
  cameraControlTilt: document.getElementById('cameraControlTilt'),
  cameraControlZoom: document.getElementById('cameraControlZoom'),
  omniInputsGroup: document.getElementById('omniInputsGroup'),
  omniImageUrls: document.getElementById('omniImageUrls'),
  omniVideoUrls: document.getElementById('omniVideoUrls'),
  elementList: document.getElementById('elementList'),
  omniInputHint: document.getElementById('omniInputHint'),
  submitStatus: document.getElementById('submitStatus'),
  saveLocalResult: document.getElementById('saveLocalResult'),
  saveStatus: document.getElementById('saveStatus'),
  previewState: document.getElementById('previewState'),
  previewCard: document.getElementById('previewCard'),
  previewMeta: document.getElementById('previewMeta'),
  previewMedia: document.getElementById('previewMedia'),
  openRemoteResult: document.getElementById('openRemoteResult'),
  tasks: document.getElementById('tasks'),
  refreshTasks: document.getElementById('refresh'),
  studioTaskSearch: document.getElementById('studioTaskSearch'),
  studioTaskList: document.getElementById('studioTaskList'),
  createStudioTask: document.getElementById('createStudioTask'),
  editStudioTask: document.getElementById('editStudioTask'),
  deleteStudioTask: document.getElementById('deleteStudioTask'),
  studioTaskStatus: document.getElementById('studioTaskStatus'),
  studioTaskName: document.getElementById('studioTaskName'),
  studioTaskDescription: document.getElementById('studioTaskDescription'),
  studioTaskQueueStatus: document.getElementById('studioTaskQueueStatus'),
  debugPanel: document.getElementById('debugPanel'),
  clearDebug: document.getElementById('clearDebug'),
  localImageInput: document.getElementById('localImageInput'),
  uploadLocalImage: document.getElementById('uploadLocalImage'),
  assetLibrary: document.getElementById('assetLibrary'),
  calmStatus: document.getElementById('calmStatus'),
  autoRefreshToggle: document.getElementById('autoRefreshToggle'),
  autoRefreshStatus: document.getElementById('autoRefreshStatus'),
  lastOutcome: document.getElementById('lastOutcome'),
  focusLatestTask: document.getElementById('focusLatestTask')
};

const state = {
  presets: [],
  taskTypes: [],
  profiles: [],
  activeProfileId: '',
  savedConfigSnapshot: '',
  models: [],
  modelById: new Map(),
  studioTasks: [],
  activeStudioTaskId: '',
  studioTaskSearchTerm: '',
  tasks: [],
  assets: [],
  selectedTaskId: '',
  logs: [],
  autoRefreshTimer: null,
  modelSyncTimer: null,
  modelGroups: {
    image: [],
    video: [],
    other: []
  },
  modelsByTask: {
    text_to_image: [],
    image_edit: [],
    text_to_video: [],
    image_to_video: []
  },
  modelCapabilityViewCache: new Map(),
  providerCapabilities: {},
  hasStoredApiKey: false
};

const IMAGE_DEFAULT_RES = ['1024x1024', '1536x1024', '1024x1536'];
const VIDEO_DEFAULT_RES = ['1280x720', '720x1280', '1920x1080', '1080x1920'];
const UI_STATE_STORAGE_KEY = 'sora2studio.uiState.v1';

function readUiState() {
  try {
    return JSON.parse(window.localStorage.getItem(UI_STATE_STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function writeUiState(nextState) {
  try {
    window.localStorage.setItem(UI_STATE_STORAGE_KEY, JSON.stringify(nextState || {}));
  } catch {
    // Ignore localStorage write failures.
  }
}

function redactSecrets(value) {
  if (value == null) return value;
  if (Array.isArray(value)) return value.map((item) => redactSecrets(item));
  if (typeof value !== 'object') return value;
  const result = {};
  for (const [key, entryValue] of Object.entries(value)) {
    if (/apikey|api_key|authorization|token|secret|password/i.test(key)) {
      result[key] = entryValue ? '[redacted]' : '';
      continue;
    }
    result[key] = redactSecrets(entryValue);
  }
  return result;
}

function activeDraftKey() {
  return String(state.activeStudioTaskId || 'global');
}

function collectCreateDraft() {
  if (!els.createForm) return {};
  const draft = {};
  const fields = els.createForm.querySelectorAll('input[name], select[name], textarea[name]');
  fields.forEach((field) => {
    if (!field.name || field.disabled || field.type === 'file') return;
    if ((field.type === 'checkbox' || field.type === 'radio')) {
      draft[field.name] = Boolean(field.checked);
      return;
    }
    if (field.tagName === 'SELECT' && field.multiple) {
      draft[field.name] = Array.from(field.selectedOptions || []).map((option) => option.value);
      return;
    }
    draft[field.name] = field.value;
  });
  return draft;
}

function persistUiState() {
  const current = readUiState();
  const drafts = current.drafts && typeof current.drafts === 'object' ? current.drafts : {};
  drafts[activeDraftKey()] = collectCreateDraft();
  const configDraft = els.configForm
    ? Object.fromEntries(
        Array.from(new FormData(els.configForm).entries())
          .filter(([key]) => key !== 'sora2ApiKey')
          .map(([key, value]) => [key, String(value)])
      )
    : {};
  writeUiState({
    ...current,
    autoRefreshEnabled: Boolean(els.autoRefreshToggle?.checked),
    configDraft,
    selectedTaskIds: {
      ...(current.selectedTaskIds && typeof current.selectedTaskIds === 'object' ? current.selectedTaskIds : {}),
      [activeDraftKey()]: state.selectedTaskId || ''
    },
    drafts
  });
}

function restoreUiPreferences() {
  const current = readUiState();
  if (typeof current.autoRefreshEnabled === 'boolean' && els.autoRefreshToggle) {
    els.autoRefreshToggle.checked = current.autoRefreshEnabled;
  }
  const configDraft = current.configDraft && typeof current.configDraft === 'object' ? current.configDraft : null;
  if (configDraft && els.configForm) {
    for (const [key, value] of Object.entries(configDraft)) {
      if (key === 'sora2ApiKey') continue;
      const field = els.configForm.elements[key];
      if (!field) continue;
      if (field.type === 'checkbox') {
        field.checked = value === true || value === 'true' || value === 'on';
      } else {
        field.value = value ?? '';
      }
    }
  }
  updateConfigDirtyState();
}

function restoreSelectedTaskForActiveStudioTask() {
  const current = readUiState();
  const selectedTaskIds = current.selectedTaskIds && typeof current.selectedTaskIds === 'object' ? current.selectedTaskIds : {};
  state.selectedTaskId = String(selectedTaskIds[activeDraftKey()] || '').trim();
}

function restoreCreateDraft() {
  if (!els.createForm) return;
  const current = readUiState();
  const drafts = current.drafts && typeof current.drafts === 'object' ? current.drafts : {};
  const draft = drafts[activeDraftKey()];
  if (!draft || typeof draft !== 'object') return;

  Object.entries(draft).forEach(([name, value]) => {
    const field = els.createForm.elements[name];
    if (!field) return;
    if (field instanceof RadioNodeList) return;
    if (field.type === 'checkbox' || field.type === 'radio') {
      field.checked = Boolean(value);
      return;
    }
    if (field.tagName === 'SELECT' && field.multiple && Array.isArray(value)) {
      const selected = new Set(value.map((item) => String(item)));
      Array.from(field.options || []).forEach((option) => {
        option.selected = selected.has(option.value);
      });
      return;
    }
    field.value = value == null ? '' : String(value);
  });
  if (els.storyboardText) {
    renderStoryboardEditor(parseStoryboardText(els.storyboardText.value));
  }
}

function writeLog(type, payload) {
  const line = `[${new Date().toISOString()}] ${type}`;
  const block = `${line}\n${JSON.stringify(payload ?? null, null, 2)}`;
  state.logs.unshift(block);
  if (state.logs.length > 30) state.logs.length = 30;
  if (els.debugPanel) {
    els.debugPanel.textContent = state.logs.join('\n\n');
  }
}

function summarizeForLog(value, depth = 0) {
  if (value == null) return value;
  if (depth >= 3) return '[truncated]';
  if (typeof value === 'string') {
    return value.length > 320 ? `${value.slice(0, 320)}...(${value.length} chars)` : value;
  }
  if (typeof value !== 'object') return value;
  if (Array.isArray(value)) {
    const sample = value.slice(0, 5).map((item) => summarizeForLog(item, depth + 1));
    return value.length > 5 ? [...sample, `...(${value.length} items)`] : sample;
  }
  const entries = Object.entries(value);
  const result = {};
  for (const [key, entryValue] of entries.slice(0, 12)) {
    result[key] = summarizeForLog(entryValue, depth + 1);
  }
  if (entries.length > 12) result.__truncatedKeys = entries.length - 12;
  return result;
}

function summarizeApiPayloadForLog(path, payload) {
  if (!payload || typeof payload !== 'object') return summarizeForLog(payload);
  if (Array.isArray(payload?.data) && /\/api\/v1\/models(?:\/cache)?/.test(path)) {
    return {
      total: Number(payload.total || payload.data.length || 0),
      updatedAt: payload.updatedAt || '',
      sampleIds: payload.data.slice(0, 12).map((item) => item?.id || item).filter(Boolean),
      providers: [...new Set(payload.data.slice(0, 24).map((item) => item?.provider).filter(Boolean))]
    };
  }
  if (Array.isArray(payload?.data) && /\/api\/v1\/tasks/.test(path)) {
    return {
      total: Number(payload.total || payload.data.length || 0),
      sample: payload.data.slice(0, 5).map((item) => ({
        id: item?.id,
        type: item?.type,
        status: item?.status,
        model: item?.input?.model || ''
      }))
    };
  }
  return summarizeForLog(payload);
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/'/g, '&#39;');
}

function normalizeMediaUrl(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  if (raw.startsWith('/api/')) return raw;
  try {
    const parsed = new URL(raw, window.location.origin);
    if (['http:', 'https:', 'data:', 'blob:'].includes(parsed.protocol)) {
      return parsed.toString();
    }
  } catch {
    return '';
  }
  return '';
}

function summarizeBody(body) {
  if (!body) return null;
  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch {
      return body.length > 500 ? `${body.slice(0, 500)}...` : body;
    }
  }
  return body;
}

function setStatus(message) {
  els.calmStatus.textContent = message;
}

function setSubmitStatus(message = '', isError = false) {
  if (!els.submitStatus) return;
  els.submitStatus.textContent = message;
  els.submitStatus.classList.toggle('error-text', Boolean(isError && message));
}

function normalizeUserErrorMessage(error, fallback = '操作失败，请稍后重试。') {
  const raw = String(error?.message || '').trim();
  if (error?.code === 'NO_MODELS_FOR_TASK_TYPE') return '当前任务类型没有可用模型，请先加载模型或切换任务类型。';
  if (error?.code === 'TIMEOUT') return '请求超时，请稍后重试。';
  if (!raw) return fallback;
  return raw.includes('?') ? fallback : raw;
}

function nextFrame() {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function') {
      window.requestAnimationFrame(() => resolve());
      return;
    }
    setTimeout(resolve, 0);
  });
}

function positiveNumberOrNull(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) && numeric > 0 ? numeric : null;
}

function looksLikeTierModeOptions(options = []) {
  const normalized = (Array.isArray(options) ? options : [])
    .map((item) => String(item || '').trim().toLowerCase())
    .filter(Boolean);
  if (!normalized.length) return false;
  return normalized.every((item) => ['std', 'pro', 'standard', 'turbo', 'master', 'high'].includes(item));
}

function getProviderCapabilityPolicy() {
  return {
    supportsStoryboardPrompt: state.providerCapabilities?.supportsStoryboardPrompt !== false,
    supportsNativeKlingVideoRoutes: state.providerCapabilities?.supportsNativeKlingVideoRoutes !== false,
    supportsKlingOmniVideo: state.providerCapabilities?.supportsKlingOmniVideo !== false,
    supportsKlingMultiImageToVideo: state.providerCapabilities?.supportsKlingMultiImageToVideo !== false,
    supportsKlingIntelligentStoryboardInput: state.providerCapabilities?.supportsKlingIntelligentStoryboardInput === true
  };
}

function applyProviderCapabilityPolicy(model, taskType, caps = {}) {
  const providerPolicy = getProviderCapabilityPolicy();
  const modelId = String(model?.id || '').trim().toLowerCase();
  const isKlingVideo = /^kling-video/.test(modelId);
  const effective = {
    ...caps,
    modelSupportsStoryboardPrompt: Boolean(caps.supportsStoryboardPrompt ?? caps.supportsStoryboard),
    modelSupportsIntelligentStoryboard: Boolean(caps.supportsIntelligentStoryboard),
    supportsStoryboardPrompt: Boolean(caps.supportsStoryboardPrompt ?? caps.supportsStoryboard),
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
  if (/omni/i.test(modelId)) {
    effective.supportsDirectionalCameraControls = false;
  }

  return effective;
}

function isTierSizeModel(taskType, model, caps) {
  if (!model || !caps) return false;
  const explicitImageTier = caps.sizeField === 'image_size';
  const hasExplicitPixelResolutions = (Array.isArray(model?.supported_resolutions) && model.supported_resolutions.length > 0)
    || (Array.isArray(model?.supported_sizes) && model.supported_sizes.length > 0)
    || (Array.isArray(caps.resolutionPresets) && caps.resolutionPresets.length > 0);
  const videoTierOnly = taskType.includes('video')
    && Array.isArray(caps.imageSizeOptions)
    && caps.imageSizeOptions.length > 0
    && !hasExplicitPixelResolutions;
  return explicitImageTier || videoTierOnly;
}

function deriveResolutionFromTierAndAspectRatio(tier, aspectRatio) {
  const normalizedTier = String(tier || '').trim().toUpperCase();
  const ratio = String(aspectRatio || '').trim() || '1:1';
  const baseByTier = {
    '1K': 720,
    '2K': 1440,
    '4K': 2160
  };
  const base = baseByTier[normalizedTier];
  if (!base) return '';
  if (ratio === '16:9') return `${Math.round(base * 16 / 9)}x${base}`;
  if (ratio === '9:16') return `${base}x${Math.round(base * 16 / 9)}`;
  if (ratio === '4:3') return `${Math.round(base * 4 / 3)}x${base}`;
  if (ratio === '3:4') return `${base}x${Math.round(base * 4 / 3)}`;
  return `${base}x${base}`;
}

function resolutionMatchesAspectRatio(resolution, aspectRatio) {
  const match = String(resolution || '').trim().match(/^(\d{3,5})x(\d{3,5})$/);
  if (!match) return false;
  const width = Number(match[1]);
  const height = Number(match[2]);
  if (!width || !height) return false;
  switch (String(aspectRatio || '').trim()) {
    case '16:9':
      return width > height;
    case '9:16':
      return height > width;
    case '1:1':
      return width === height;
    case '4:3':
      return width > height && Math.abs(width / height - 4 / 3) < 0.05;
    case '3:4':
      return height > width && Math.abs(width / height - 3 / 4) < 0.05;
    default:
      return true;
  }
}

async function renderSelectOptionsChunked(selectEl, models, { limit = null, chunkSize = 40 } = {}) {
  if (!selectEl) return;
  const list = Array.isArray(models) ? (limit ? models.slice(0, limit) : models.slice()) : [];
  selectEl.innerHTML = '';
  for (let i = 0; i < list.length; i += chunkSize) {
    const fragment = document.createDocumentFragment();
    for (const model of list.slice(i, i + chunkSize)) {
      const option = document.createElement('option');
      option.value = model.id;
      option.textContent = modelOptionText(model);
      fragment.appendChild(option);
    }
    selectEl.appendChild(fragment);
    await nextFrame();
  }
}

function summarizeModelRoleMatrix(model, taskType = '') {
  const caps = taskType ? getModelCapabilities(model, taskType) : null;
  if (!caps) return [];
  const parts = [];
  const gated = [];
  if (taskType === 'image_to_video') {
    parts.push(caps.supportsImageToVideoFirstFrame
      ? (caps.supportsImageToVideoEndFrame ? '首尾帧' : '首帧')
      : '无首帧');
    if (caps.supportsImageToVideoReferenceImages) {
      parts.push(caps.supportsMultipleReferenceImages ? `附加参考 x${caps.maxReferenceImages || 'N'}` : '附加参考');
    } else if (caps.modelSupportsImageToVideoReferenceImages) {
      gated.push('附加参考未开放');
    }
    if (!caps.supportsImageToVideoEndFrame && caps.modelSupportsImageToVideoEndFrame) gated.push('尾帧未开放');
    if (caps.supportsDirectionalCameraControls) parts.push('方向运镜');
    else if (caps.supportsCameraControls) parts.push('内置镜头');
  } else if (taskType === 'text_to_video') {
    parts.push('纯文本');
    if (caps.supportsTextToVideoReferenceImages) {
      parts.push(caps.supportsMultipleReferenceImages ? `视频参考 x${caps.maxReferenceImages || 'N'}` : '视频参考');
    } else if (caps.modelSupportsTextToVideoReferenceImages) {
      gated.push('视频参考未开放');
    }
    if (caps.supportsStoryboardPrompt) parts.push('Storyboard');
    else if (caps.modelSupportsStoryboardPrompt) gated.push('Storyboard未开放');
    if (caps.supportsIntelligentStoryboard) parts.push('智能分镜');
    else if (caps.modelSupportsIntelligentStoryboard) gated.push('智能分镜未开放');
    if (caps.supportsOmniInputs) parts.push('Omni/Elements');
    else if (caps.modelSupportsOmniInputs) gated.push('Omni未开放');
    if (caps.supportsDirectionalCameraControls) parts.push('方向运镜');
    else if (caps.supportsCameraControls) parts.push('内置镜头');
  } else if (taskType === 'text_to_image') {
    parts.push('纯文本');
    if (caps.supportsTextToImageReferenceImages) {
      parts.push(caps.supportsMultipleReferenceImages ? `参考图 x${caps.maxReferenceImages || 'N'}` : '参考图');
    }
  } else if (taskType === 'image_edit') {
    parts.push(caps.supportsImageEditSourceImage ? '待编辑原图' : '无原图');
    if (caps.supportsReferenceImage) parts.push('编辑参考');
  }
  return {
    active: parts.slice(0, 6),
    gated: gated.slice(0, 4)
  };
}

function buildModelCapabilityRows(model) {
  const matrix = [
    {
      taskType: 'text_to_video',
      label: '文生视频',
      items: (caps) => [
        caps.supportsTextToVideoReferenceImages ? '参考图' : null,
        caps.supportsStoryboardPrompt ? 'Storyboard' : null,
        caps.supportsIntelligentStoryboard ? '智能分镜' : null,
        caps.supportsOmniInputs ? 'Omni/Elements' : null,
        caps.supportsDirectionalCameraControls ? '方向运镜' : (caps.supportsCameraControls ? '内置镜头' : null)
      ]
    },
    {
      taskType: 'image_to_video',
      label: '图生视频',
      items: (caps) => [
        caps.supportsImageToVideoFirstFrame ? '首帧' : null,
        caps.supportsImageToVideoEndFrame ? '尾帧' : null,
        caps.supportsImageToVideoReferenceImages ? '附加参考图' : null,
        caps.supportsMultipleReferenceImages ? `多参考(${caps.maxReferenceImages || 'N'})` : null,
        caps.supportsDirectionalCameraControls ? '方向运镜' : (caps.supportsCameraControls ? '内置镜头' : null)
      ]
    },
    {
      taskType: 'text_to_image',
      label: '文生图',
      items: (caps) => [
        '文本提示',
        caps.supportsTextToImageReferenceImages ? '参考图' : null,
        caps.supportsMultipleReferenceImages ? `多参考(${caps.maxReferenceImages || 'N'})` : null
      ]
    },
    {
      taskType: 'image_edit',
      label: '图片编辑',
      items: (caps) => [
        caps.supportsImageEditSourceImage ? '原图' : null,
        caps.supportsReferenceImage ? '编辑参考图' : null
      ]
    }
  ];

  return matrix.map(({ taskType, label, items }) => {
    const caps = getModelCapabilities(model, taskType);
    const active = items(caps).filter(Boolean);
    const gated = [];
    if (taskType === 'text_to_video') {
      if (!caps.supportsStoryboardPrompt && caps.modelSupportsStoryboardPrompt) gated.push('Storyboard未开放');
      if (!caps.supportsIntelligentStoryboard && caps.modelSupportsIntelligentStoryboard) gated.push('智能分镜未开放');
      if (!caps.supportsTextToVideoReferenceImages && caps.modelSupportsTextToVideoReferenceImages) gated.push('视频参考未开放');
      if (!caps.supportsOmniInputs && caps.modelSupportsOmniInputs) gated.push('Omni未开放');
    }
    if (taskType === 'image_to_video') {
      if (!caps.supportsImageToVideoEndFrame && caps.modelSupportsImageToVideoEndFrame) gated.push('尾帧未开放');
      if (!caps.supportsImageToVideoReferenceImages && caps.modelSupportsImageToVideoReferenceImages) gated.push('附加参考未开放');
    }
    return { label, active, gated };
  });
}

function renderModelSummary(container, models, { limit = 12, taskType = '' } = {}) {
  if (!container) return;
  const list = Array.isArray(models) ? models.slice(0, limit) : [];
  if (!list.length) {
    container.innerHTML = '<div class="model-chip model-chip-muted">暂无</div>';
    return;
  }
  const cards = list
    .map((model) => {
      const roles = summarizeModelRoleMatrix(model, taskType);
      const taskCaps = taskType ? getModelCapabilities(model, taskType) : null;
      const meta = [];
      if (taskCaps?.durationOptions?.length) meta.push(`时长 ${taskCaps.durationOptions.join('/')}`);
      if (taskCaps?.aspectRatioOptions?.length) meta.push(`比例 ${taskCaps.aspectRatioOptions.slice(0, 3).join('/')}`);
      const metaLine = meta.length ? `<div class="model-card-meta">${escapeHtml(meta.join(' / '))}</div>` : '';
      const roleLine = roles.active.length
        ? `<div class="model-card-tags">${roles.active.map((item) => `<span class="model-card-tag">${escapeHtml(item)}</span>`).join('')}${roles.gated.map((item) => `<span class="model-card-tag model-card-tag-gated">${escapeHtml(item)}</span>`).join('')}</div>`
        : '<div class="model-card-meta">未提取到明确能力标签</div>';
      const detailRows = buildModelCapabilityRows(model)
        .map((row) => `<div class="model-matrix-row">
          <strong>${escapeHtml(row.label)}</strong>
          <div class="model-card-tags">${row.active.map((item) => `<span class="model-card-tag">${escapeHtml(item)}</span>`).join('')}${row.gated.map((item) => `<span class="model-card-tag model-card-tag-gated">${escapeHtml(item)}</span>`).join('') || '<span class="model-card-tag model-card-tag-muted">无</span>'}</div>
        </div>`)
        .join('');
      const detailBlock = `<details class="model-card-detail">
        <summary>查看详细矩阵</summary>
        <div class="model-matrix">${detailRows}</div>
      </details>`;
      return `<article class="model-card" title="${escapeAttr(model.id)}">
        <div class="model-card-id">${escapeHtml(model.id)}</div>
        ${roleLine}
        ${metaLine}
        ${detailBlock}
      </article>`;
    })
    .join('');
  const remain = Array.isArray(models) && models.length > limit
    ? `<div class="model-chip model-chip-muted">+${models.length - limit}</div>`
    : '';
  container.innerHTML = cards + remain;
}

async function applyLoadedModels(result) {
  state.models = Array.isArray(result?.data) ? result.data : [];
  state.modelById = new Map(state.models.map((m) => [m.id, m]));
  state.modelCapabilityViewCache = new Map();
  state.modelGroups = { image: [], video: [], other: [] };
  state.modelsByTask = buildTaskModelIndex(state.models);
  const imageIds = new Set();
  const videoIds = new Set();
  for (const model of state.modelsByTask.text_to_image.concat(state.modelsByTask.image_edit)) imageIds.add(model.id);
  for (const model of state.modelsByTask.text_to_video.concat(state.modelsByTask.image_to_video)) videoIds.add(model.id);
  for (const model of state.models) {
    const inImage = imageIds.has(model.id);
    const inVideo = videoIds.has(model.id);
    if (inImage) state.modelGroups.image.push(model);
    if (inVideo) state.modelGroups.video.push(model);
    if (!inImage && !inVideo) state.modelGroups.other.push(model);
  }
  await nextFrame();
  await renderModelPanel();
  await nextFrame();
  await refreshCreateModelOptions();
  await nextFrame();
  restoreCreateDraft();
  applyCreateFormRulesV2();
}

function setModelSyncUI(sync = null) {
  if (!els.modelSyncPanel) return;
  const syncButtons = [els.loadModels, els.reloadModelsFull, els.reloadModelsFromDocs].filter(Boolean);
  if (!sync) {
    els.modelSyncPanel.classList.add('hidden');
    syncButtons.forEach((button) => {
      button.classList.remove('button-busy');
      button.removeAttribute('disabled');
    });
    if (els.loadModels) els.loadModels.textContent = '加载缓存模型';
    if (els.reloadModelsFull) els.reloadModelsFull.textContent = '完全重载';
    if (els.reloadModelsFromDocs) els.reloadModelsFromDocs.textContent = '按项目文档重建';
    return;
  }

  const total = Number(sync.total || 0);
  const processed = Number(sync.processed || 0);
  const percent = total > 0 ? Math.max(4, Math.min(100, Math.round((processed / total) * 100))) : (sync.running ? 8 : 100);
  const stageTextMap = {
    starting: '正在启动模型同步',
    fetching_catalog: '正在获取模型目录',
    catalog_loaded: '已获取模型列表，准备解析文档',
    parsing_docs: '正在解析模型文档',
    rebuilding_docs: '正在根据项目文档重建模型目录',
    writing_cache: '正在写入本地缓存',
    completed: '模型目录已更新完成',
    failed: '模型目录更新失败'
  };
  const sourceLabelMap = {
    'runtime-cache': '来源：本地缓存',
    'remote-refresh': '来源：远程全量重载',
    'project-docs': '来源：项目文档重建'
  };

  els.modelSyncPanel.classList.remove('hidden');
  els.modelSyncTitle.textContent = stageTextMap[sync.stage] || '正在处理模型目录';
  els.modelSyncMeta.textContent = total > 0 ? `${processed} / ${total}` : (sync.modelsCount ? `${sync.modelsCount} 个模型` : '处理中');
  els.modelSyncBar.style.width = `${percent}%`;
  const syncSource = sourceLabelMap[String(sync.source || '')] || '';
  const syncMessage = sync.error
    || sync.current
    || (sync.stage === 'completed' ? `已完成，本次共同步 ${sync.modelsCount || 0} 个模型。` : '请稍候，页面会自动刷新能力配置。');
  els.modelSyncMessage.textContent = syncSource ? `${syncSource}｜${syncMessage}` : syncMessage;

  if (sync.running) {
    syncButtons.forEach((button) => {
      button.classList.remove('button-busy');
      button.setAttribute('disabled', 'disabled');
    });
    if (sync.mode === 'docs') {
      els.reloadModelsFromDocs?.classList.add('button-busy');
      if (els.reloadModelsFromDocs) els.reloadModelsFromDocs.textContent = '重建中...';
    } else {
      els.reloadModelsFull?.classList.add('button-busy');
      if (els.reloadModelsFull) els.reloadModelsFull.textContent = '重载中...';
    }
  } else {
    syncButtons.forEach((button) => {
      button.classList.remove('button-busy');
      button.removeAttribute('disabled');
    });
    if (els.loadModels) els.loadModels.textContent = '加载缓存模型';
    if (els.reloadModelsFull) els.reloadModelsFull.textContent = '完全重载';
    if (els.reloadModelsFromDocs) els.reloadModelsFromDocs.textContent = '按项目文档重建';
  }
}

async function pollModelSyncUntilDone() {
  if (state.modelSyncTimer) {
    clearInterval(state.modelSyncTimer);
    state.modelSyncTimer = null;
  }

  await new Promise((resolve, reject) => {
    state.modelSyncTimer = setInterval(async () => {
      try {
        const result = await api('/api/v1/models/sync');
        const sync = result.sync || null;
        setModelSyncUI(sync);
        if (!sync?.running) {
          clearInterval(state.modelSyncTimer);
          state.modelSyncTimer = null;
          if (sync?.stage === 'failed') {
            reject(new Error(sync.error || '模型同步失败'));
            return;
          }
          resolve();
        }
      } catch (error) {
        clearInterval(state.modelSyncTimer);
        state.modelSyncTimer = null;
        reject(error);
      }
    }, 1200);
  });
}

function startSilentModelSyncLegacy() {
  api('/api/v1/models/sync', {
    method: 'POST',
    body: '{}',
    timeoutMs: 15000
  }).then((start) => {
    setModelSyncUI(start.sync || {
      running: true,
      stage: 'starting',
      processed: 0,
      total: 0,
      current: ''
    });
    return pollModelSyncUntilDone();
  }).then(() => {
      setStatus(`后台已更新模型缓存，当前页面继续使用已加载的 ${state.models.length} 个模型。`);
      setModelSyncUI({
        running: false,
        stage: 'completed',
        processed: state.models.length,
        total: state.models.length,
        current: '',
        modelsCount: state.models.length
      });
    })
    .catch((error) => {
      setModelSyncUI({
        running: false,
        stage: 'failed',
        processed: 0,
        total: 0,
        current: '',
        error: error.message
      });
      setStatus(`后台模型更新失败：${error.message}`);
    });
}

async function api(path, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), options.timeoutMs || 90000);
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
  const method = options.method || 'GET';
  const body = options.body;
  writeLog('REQUEST', {
    method,
    path,
    body: summarizeForLog(redactSecrets(summarizeBody(body)))
  });
  try {
    const response = await fetch(path, {
      method,
      headers,
      body,
      signal: controller.signal
    });
    const text = await response.text();
    let json = null;
    try {
      json = text ? JSON.parse(text) : null;
    } catch {
      json = null;
    }

    if (!response.ok) {
      const message = json?.error || text || `${response.status} ${response.statusText}`;
      const err = new Error(message);
      err.code = json?.code || 'HTTP_ERROR';
      err.status = response.status;
      err.details = json?.details || null;
      writeLog('RESPONSE_ERROR', {
        method,
        path,
        status: response.status,
        code: err.code,
        message: err.message,
        details: redactSecrets(err.details)
      });
      throw err;
    }
    writeLog('RESPONSE_OK', {
      method,
      path,
      status: response.status,
      data: redactSecrets(summarizeApiPayloadForLog(path, json))
    });
    return json;
  } catch (error) {
    if (error.name === 'AbortError') {
      const timeoutError = new Error('请求超时，请稍后重试。');
      timeoutError.code = 'TIMEOUT';
      writeLog('REQUEST_TIMEOUT', {
        method,
        path,
        message: timeoutError.message
      });
      throw timeoutError;
    }
    writeLog('REQUEST_FAIL', {
      method,
      path,
      code: error.code || 'UNKNOWN',
      message: error.message
    });
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

function setInputValue(name, value) {
  const input = els.configForm.elements[name];
  if (!input) return;
  input.value = value ?? '';
}

function setChecked(name, checked) {
  const input = els.configForm.elements[name];
  if (!input) return;
  input.checked = Boolean(checked);
}

function snapshotConfigPayload(payload = {}) {
  return JSON.stringify({
    providerLabel: payload.providerLabel || '',
    providerType: payload.providerType || '',
    sora2ApiKey: payload.sora2ApiKey || '',
    baseUrl: payload.baseUrl || '',
    proxyUrl: payload.proxyUrl || '',
    outputDir: payload.outputDir || '',
    modelsPath: payload.modelsPath || '',
    imageGeneratePath: payload.imageGeneratePath || '',
    videoCreatePath: payload.videoCreatePath || '',
    videoRetrievePathTemplate: payload.videoRetrievePathTemplate || '',
    videoCancelPathTemplate: payload.videoCancelPathTemplate || '',
    videoContentPathTemplate: payload.videoContentPathTemplate || '',
    videoRequestFormat: payload.videoRequestFormat || '',
    inputReferenceFormat: payload.inputReferenceFormat || '',
    imageEnabled: Boolean(payload.imageEnabled),
    videoEnabled: Boolean(payload.videoEnabled)
  });
}

function updateConfigDirtyState() {
  if (!els.configDraftStatus || !els.configForm) return;
  const current = snapshotConfigPayload(getConfigPayload());
  const dirty = Boolean(state.savedConfigSnapshot) && current !== state.savedConfigSnapshot;
  els.configDraftStatus.textContent = dirty ? '当前有未保存的配置改动。' : '当前配置已与已保存版本同步。';
  els.configDraftStatus.classList.toggle('error-text', dirty);
}

function fillConfigForm(config) {
  if (!config) return;
  state.providerCapabilities = { ...(config.providerCapabilities || {}) };
  state.modelCapabilityViewCache = new Map();
  state.hasStoredApiKey = Boolean(config.hasApiKey);
  setInputValue('providerLabel', config.providerLabel);
  setInputValue('providerType', config.providerType || 'compatible');
  setInputValue('sora2ApiKey', '');
  if (els.configForm?.elements?.sora2ApiKey) {
    els.configForm.elements.sora2ApiKey.placeholder = config.maskedApiKey
      ? `已保存：${config.maskedApiKey}`
      : 'sk-...';
  }
  setInputValue('baseUrl', config.baseUrl);
  setInputValue('proxyUrl', config.proxyUrl);
  setInputValue('outputDir', config.outputDir);
  setInputValue('modelsPath', config.endpoints?.modelsPath || config.modelsPath || '');
  setInputValue('imageGeneratePath', config.endpoints?.imageGeneratePath || config.imageGeneratePath || '');
  setInputValue('videoCreatePath', config.endpoints?.videoCreatePath || config.videoCreatePath || '');
  setInputValue('videoRetrievePathTemplate', config.endpoints?.videoRetrievePathTemplate || config.videoRetrievePathTemplate || '');
  setInputValue('videoCancelPathTemplate', config.endpoints?.videoCancelPathTemplate || config.videoCancelPathTemplate || '');
  setInputValue('videoContentPathTemplate', config.endpoints?.videoContentPathTemplate || config.videoContentPathTemplate || '');
  setInputValue('videoRequestFormat', config.endpoints?.videoRequestFormat || config.videoRequestFormat || 'multipart');
  setInputValue('inputReferenceFormat', config.endpoints?.inputReferenceFormat || config.inputReferenceFormat || '');
  setChecked('imageEnabled', config.capabilities?.imageEnabled ?? config.imageEnabled ?? true);
  setChecked('videoEnabled', config.capabilities?.videoEnabled ?? config.videoEnabled ?? true);
  state.savedConfigSnapshot = snapshotConfigPayload(getConfigPayload());
  updateConfigDirtyState();
}

function getConfigPayload() {
  const fd = new FormData(els.configForm);
  const sora2ApiKeyInput = String(fd.get('sora2ApiKey') || '').trim();
  const sora2ApiKey = sora2ApiKeyInput || (state.hasStoredApiKey ? '__KEEP__' : '');
  return {
    profileId: state.activeProfileId || undefined,
    profileLabel: String(fd.get('providerLabel') || '').trim() || 'BLTCY',
    providerLabel: String(fd.get('providerLabel') || '').trim() || 'BLTCY',
    providerType: String(fd.get('providerType') || 'compatible'),
    sora2ApiKey,
    baseUrl: String(fd.get('baseUrl') || '').trim(),
    proxyUrl: String(fd.get('proxyUrl') || '').trim(),
    outputDir: String(fd.get('outputDir') || '').trim(),
    modelsPath: String(fd.get('modelsPath') || '').trim(),
    imageGeneratePath: String(fd.get('imageGeneratePath') || '').trim(),
    videoCreatePath: String(fd.get('videoCreatePath') || '').trim(),
    videoRetrievePathTemplate: String(fd.get('videoRetrievePathTemplate') || '').trim(),
    videoCancelPathTemplate: String(fd.get('videoCancelPathTemplate') || '').trim(),
    videoContentPathTemplate: String(fd.get('videoContentPathTemplate') || '').trim(),
    videoRequestFormat: String(fd.get('videoRequestFormat') || 'multipart'),
    inputReferenceFormat: String(fd.get('inputReferenceFormat') || '').trim(),
    imageEnabled: Boolean(els.configForm.elements.imageEnabled.checked),
    videoEnabled: Boolean(els.configForm.elements.videoEnabled.checked)
  };
}

function updateConfigStatus(config) {
  const key = config?.maskedApiKey ? config.maskedApiKey : '未设置';
  const provider = config?.providerLabel || '未命名';
  const url = config?.baseUrl || '未配置';
  const outputDir = config?.outputDir || 'workspace-output';
  els.configStatus.textContent = `配置已加载：${provider} | Base ${url} | 输出目录 ${outputDir} | API Key ${key}`;
}

function renderPresets() {
  const presets = state.presets.length
    ? state.presets
    : [{
      key: 'bltcy',
      providerLabel: 'BLTCY',
      providerType: 'compatible',
      baseUrl: 'https://api.bltcy.ai'
    }];
  els.providerPreset.innerHTML = presets.map((preset) => {
    return `<option value="${escapeAttr(preset.key)}">${escapeHtml(preset.providerLabel)}（${escapeHtml(preset.baseUrl)}）</option>`;
  }).join('');
}

function applyPreset(key) {
  const preset = state.presets.find((item) => item.key === key);
  if (!preset) return;
  setInputValue('providerLabel', preset.providerLabel || 'BLTCY');
  setInputValue('providerType', preset.providerType || 'compatible');
  setInputValue('baseUrl', preset.baseUrl || 'https://api.bltcy.ai');
  setInputValue('modelsPath', preset.modelsPath || '/v1/models');
  setInputValue('imageGeneratePath', preset.imageGeneratePath || '/v1/images/generations');
  setInputValue('videoCreatePath', preset.videoCreatePath || '/v1/videos');
  setInputValue('videoRetrievePathTemplate', preset.videoRetrievePathTemplate || '/v1/videos/{id}');
  setInputValue('videoCancelPathTemplate', preset.videoCancelPathTemplate || '/v1/videos/{id}/cancel');
  setInputValue('videoContentPathTemplate', preset.videoContentPathTemplate || '/v1/videos/{id}/content');
  setInputValue('videoRequestFormat', preset.videoRequestFormat || 'multipart');
  setInputValue('inputReferenceFormat', preset.inputReferenceFormat || '');
  setChecked('imageEnabled', preset.imageEnabled ?? true);
  setChecked('videoEnabled', preset.videoEnabled ?? true);
}

function renderProfiles() {
  if (!state.profiles.length) {
    els.profileSelect.innerHTML = '<option value="">暂无档案</option>';
    return;
  }
  els.profileSelect.innerHTML = state.profiles.map((profile) => {
    const selected = profile.id === state.activeProfileId ? 'selected' : '';
    const suffix = profile.baseUrl ? ` · ${profile.baseUrl}` : '';
    return `<option value="${escapeAttr(profile.id)}" ${selected}>${escapeHtml(profile.label)}${escapeHtml(suffix)}</option>`;
  }).join('');
}

function activeStudioTaskId() {
  return state.activeStudioTaskId || '';
}

function renderStudioTasks() {
  if (!els.studioTaskList) return;
  if (!state.studioTasks.length) {
    els.studioTaskList.innerHTML = '<div class="empty-state">还没有创作任务</div>';
    if (els.studioTaskStatus) els.studioTaskStatus.textContent = '当前任务：未创建';
    if (els.studioTaskQueueStatus) els.studioTaskQueueStatus.textContent = '当前没有可显示执行记录的任务';
    if (els.studioTaskName) els.studioTaskName.value = '';
    if (els.studioTaskDescription) els.studioTaskDescription.value = '';
    return;
  }

  const keyword = String(state.studioTaskSearchTerm || '').trim().toLowerCase();
  const visibleTasks = state.studioTasks.filter((item) => {
    if (!keyword) return true;
    const haystack = `${item.name || ''} ${item.description || ''} ${(item.tags || []).join(' ')}`.toLowerCase();
    return haystack.includes(keyword);
  });

  if (!visibleTasks.length) {
    els.studioTaskList.innerHTML = '<div class="empty-state">没有匹配的任务</div>';
  } else {
    els.studioTaskList.innerHTML = visibleTasks.map((item) => {
      const active = item.id === state.activeStudioTaskId ? ' studio-task-card-active' : '';
      const desc = String(item.description || '').trim();
      const meta = [item.status || 'active', item.updatedAt ? new Date(item.updatedAt).toLocaleString() : ''];
      const tags = Array.isArray(item.tags) && item.tags.length
        ? `<div class="studio-task-tags">${item.tags.map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`).join('')}</div>`
        : '';
      return `
        <article class="studio-task-card${active}" data-studio-task-id="${escapeAttr(item.id)}">
          <div class="studio-task-card-top">
            <strong>${escapeHtml(item.name)}</strong>
            <span class="pill">${escapeHtml(item.status || 'active')}</span>
          </div>
          <div class="studio-task-card-meta">${escapeHtml(meta.filter(Boolean).join(' · '))}</div>
          <div class="studio-task-card-desc">${escapeHtml(desc || '暂无任务描述')}</div>
          ${tags}
        </article>
      `;
    }).join('');
  }

  const current = state.studioTasks.find((item) => item.id === activeStudioTaskId()) || null;
  if (els.studioTaskStatus) {
    els.studioTaskStatus.textContent = `当前任务：${current?.name || '未选择'}`;
  }
  if (els.studioTaskName) {
    els.studioTaskName.value = current?.name || '';
  }
  if (els.studioTaskDescription) {
    els.studioTaskDescription.value = current?.description || '';
  }
  if (els.studioTaskQueueStatus) {
    els.studioTaskQueueStatus.textContent = current
      ? `当前仅显示「${current.name}」下的执行记录`
      : '当前仅显示所属创作任务的执行记录';
  }
}

function renderTaskTypeOptions() {
  const list = state.taskTypes.length ? state.taskTypes : [
    { value: 'text_to_image', label: '文生图' },
    { value: 'image_edit', label: '图片编辑' },
    { value: 'text_to_video', label: '文生视频' },
    { value: 'image_to_video', label: '图生视频' }
  ];
  els.typeSelect.innerHTML = list.map((item) => `<option value="${item.value}">${item.label}</option>`).join('');
}

function currentTaskType() {
  return String(els.typeSelect.value || '');
}

function selectedModelIdForTask(taskType = currentTaskType()) {
  return taskType.includes('video') ? els.videoModel.value : els.imageModel.value;
}

function getAllTaskTypes() {
  const values = state.taskTypes.map((item) => item.value).filter(Boolean);
  return values.length ? values : ['text_to_image', 'image_edit', 'text_to_video', 'image_to_video'];
}

function getSupportedTasksForModel(model) {
  const fromCatalog = Array.isArray(model?.catalog?.capabilities?.supportedTasks)
    ? model.catalog.capabilities.supportedTasks.filter(Boolean)
    : [];
  if (fromCatalog.length) return [...new Set(fromCatalog)];

  const id = String(model?.id || '').toLowerCase();
  const metaText = `${id} ${model?.catalog?.desc || ''} ${model?.catalog?.tags || ''}`.toLowerCase();
  if (id.includes('sora_image')) return ['text_to_image', 'image_edit'];
  const explicitImageOnly = /(gpt-image|dall-e|banana|seedream|recraft|ideogram|qwen-image|midjourney|mj|(^|[-_])image($|[-_])|image2image|\bi2i\b|inpaint|outpaint|edit)/.test(id);
  const explicitImageToVideo = /(image[_-]?to[_-]?video|image2video|\bi2v\b|start.?frame|end.?frame)/.test(metaText);
  const explicitTextToVideo = /(text[_-]?to[_-]?video|text2video|\bt2v\b)/.test(metaText);
  const generalVideoFamily = /(sora|veo|gpt-video|seedance|kling-video|wan|hailuo|pixverse|vidu|(^|[-_])video($|[-_]))/.test(id);
  const imageLike = explicitImageOnly || /(绘图|图像编辑|图片编辑|文生图)/.test(metaText);
  const videoLike = explicitImageToVideo || explicitTextToVideo || generalVideoFamily || /(视频|文生视频|图生视频)/.test(metaText);
  if (explicitTextToVideo && !explicitImageToVideo) return ['text_to_video'];
  if (explicitImageToVideo && !explicitTextToVideo) return ['image_to_video'];
  if (imageLike && videoLike) return ['text_to_image', 'image_edit', 'text_to_video', 'image_to_video'];
  if (imageLike) return ['text_to_image', 'image_edit'];
  if (videoLike) return ['text_to_video', 'image_to_video'];
  return [];
}

function modelSupportsTask(model, taskType) {
  return getSupportedTasksForModel(model).includes(taskType);
}

function buildTaskModelIndex(models) {
  const index = {};
  for (const taskType of getAllTaskTypes()) index[taskType] = [];
  for (const model of models || []) {
    for (const taskType of getSupportedTasksForModel(model)) {
      if (!index[taskType]) index[taskType] = [];
      index[taskType].push(model);
    }
  }
  return index;
}

function classifyModel(model) {
  const supported = getSupportedTasksForModel(model);
  if (supported.includes('text_to_video') || supported.includes('image_to_video')) return 'video';
  if (supported.includes('text_to_image') || supported.includes('image_edit')) return 'image';

  const id = String(model.id || '').toLowerCase();
  if (/(sora|veo|video|seedance|wan|kling|hailuo|pixverse|vidu)/.test(id)) return 'video';
  if (/(image|banana|flux|seedream|recraft|ideogram|qwen)/.test(id)) return 'image';
  return 'other';
}

function getModelPriceLabel(model) {
  if (!model) return '';
  const p = model.pricing || model.catalog?.pricing || null;
  if (!p) return '';
  if (typeof p.label === 'string' && p.label) return p.label;
  if (typeof p.priceText === 'string' && p.priceText) return p.priceText;
  if (typeof p.input === 'number' || typeof p.output === 'number') {
    return `输入 ${p.input ?? '-'} / 输出 ${p.output ?? '-'}`;
  }
  return '';
}

function modelOptionText(model) {
  const price = getModelPriceLabel(model);
  return price ? `${model.id} · ${price}` : model.id;
}

function rankModelForTask(taskType, model) {
  const id = String(model?.id || '').toLowerCase();
  const provider = String(model?.provider || '').toLowerCase();
  const isVideoTask = String(taskType || '').includes('video');
  if (isVideoTask) {
    if (id.startsWith('sora-2-pro')) return 0;
    if (id.startsWith('sora-2')) return 1;
    if (id.startsWith('gpt-video-2-pro')) return 2;
    if (id.startsWith('gpt-video-2')) return 3;
    if (id.startsWith('veo3.1-pro')) return 4;
    if (id.startsWith('veo3.1')) return 5;
    if (id.startsWith('veo3-pro')) return 6;
    if (id.startsWith('veo3')) return 7;
    if (id.startsWith('kling-video-v3')) return 8;
    if (id.startsWith('kling-video')) return 9;
    if (id.includes('seedance')) return 10;
    if (provider === 'openai') return 11;
    if (provider === 'google') return 12;
    if (provider === '快手可灵') return 13;
    if (provider === '火山豆包') return 14;
    return 50;
  }
  if (id.startsWith('gpt-image')) return 0;
  if (id.includes('banana')) return 1;
  if (id.includes('seedream')) return 2;
  if (provider === 'openai') return 3;
  if (provider === 'google') return 4;
  if (provider === 'mid-journey') return 5;
  if (provider === '火山豆包') return 6;
  return 50;
}

function sortModelsForTask(taskType, models) {
  return [...models].sort((a, b) => {
    const rankDiff = rankModelForTask(taskType, a) - rankModelForTask(taskType, b);
    if (rankDiff !== 0) return rankDiff;
    return String(a?.id || '').localeCompare(String(b?.id || ''));
  });
}

function getModelsForTask(taskType = currentTaskType()) {
  return sortModelsForTask(taskType, state.modelsByTask[taskType] || []);
}

async function refreshCreateModelOptions() {
  const taskType = currentTaskType();
  const taskModels = getModelsForTask(taskType);

  if (taskType.includes('video')) {
    await renderSelectOptionsChunked(els.videoModel, taskModels, { chunkSize: 20 });
  } else {
    await renderSelectOptionsChunked(els.imageModel, taskModels, { chunkSize: 20 });
  }

  if (!taskModels.some((item) => item.id === els.imageModel.value) && !taskType.includes('video')) {
    els.imageModel.value = taskModels[0]?.id || '';
  }
  if (!taskModels.some((item) => item.id === els.videoModel.value) && taskType.includes('video')) {
    els.videoModel.value = taskModels[0]?.id || '';
  }
}

async function renderModelPanel() {
  const imageModels = state.modelGroups.image;
  const videoModels = state.modelGroups.video;
  const otherModels = state.modelGroups.other;
  const limit = 12;
  const activeTaskType = currentTaskType();
  const activeImageTaskType = activeTaskType === 'image_edit' ? 'image_edit' : 'text_to_image';
  const activeVideoTaskType = activeTaskType === 'image_to_video' ? 'image_to_video' : 'text_to_video';

  renderModelSummary(els.imageModelList, imageModels, { limit, taskType: activeImageTaskType });
  renderModelSummary(els.videoModelList, videoModels, { limit, taskType: activeVideoTaskType });
  renderModelSummary(els.otherModelList, otherModels, { limit });

  const lines = [
    `共 ${state.models.length} 个模型`,
    `图片模型：${imageModels.length}${imageModels.length > limit ? `（摘要展示前 ${limit} 个）` : ''}`,
    `视频模型：${videoModels.length}${videoModels.length > limit ? `（摘要展示前 ${limit} 个）` : ''}`,
    `其他模型：${otherModels.length}${otherModels.length > limit ? `（摘要展示前 ${limit} 个）` : ''}`
  ];
  els.modelsText.textContent = lines.join('\n');
}

function parseResolutions(model, taskType) {
  const caps = getModelCapabilities(model, taskType);
  if (isTierSizeModel(taskType, model, caps)) {
    return [];
  }
  const raw = []
    .concat(model?.supported_resolutions || [])
    .concat(model?.supported_sizes || [])
    .concat(model?.catalog?.resolutionPresets || [])
    .concat(caps.resolutionPresets || []);
  const normalized = new Set();
  for (const item of raw) {
    const s = String(item || '').trim();
    if (/^\d{3,5}x\d{3,5}$/.test(s)) normalized.add(s);
  }
  if (normalized.size) return [...normalized];
  return taskType.includes('video') ? [...VIDEO_DEFAULT_RES] : [...IMAGE_DEFAULT_RES];
}

function normalizeDurationOptions(values) {
  if (!Array.isArray(values)) return [];
  const normalized = values
    .map((item) => Number(item))
    .filter((item) => Number.isFinite(item) && item > 0);
  return [...new Set(normalized)].sort((a, b) => a - b);
}

function parseDurationConstraintFromModel(model) {
  if (!model || typeof model !== 'object') return null;
  const caps = getModelCapabilities(model, currentTaskType());
  if (!caps.supportsDuration) return null;
  const options = normalizeDurationOptions(
    model.durationOptions
    || model.supportedDurations
    || model.supported_durations
    || model.durations
    || caps.durationOptions
    || []
  );
  const minRaw = model.minDuration
    ?? model.min_duration
    ?? model.secondsMin
    ?? model.seconds_min
    ?? caps.minDuration
    ?? null;
  const maxRaw = model.maxDuration
    ?? model.max_duration
    ?? model.secondsMax
    ?? model.seconds_max
    ?? caps.maxDuration
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

function getActiveDurationField() {
  if (!els.durationSelect || !els.durationInput) return null;
  if (!els.durationSelect.classList.contains('hidden')) return els.durationSelect;
  if (!els.durationInput.classList.contains('hidden')) return els.durationInput;
  return null;
}

function syncDurationValueMirror() {
  if (!els.durationHidden) return;
  const activeField = getActiveDurationField();
  const raw = String(activeField?.value || '').trim();
  els.durationHidden.value = raw;
}

function syncDurationInputForModel() {
  const durationInput = els.durationInput;
  const durationSelect = els.durationSelect;
  if (!durationInput || !durationSelect) return null;
  const taskType = currentTaskType();
  if (!taskType.includes('video')) {
    durationSelect.innerHTML = '';
    durationSelect.classList.add('hidden');
    durationInput.classList.add('hidden');
    durationInput.removeAttribute('min');
    durationInput.removeAttribute('max');
    durationInput.removeAttribute('step');
    if (els.durationHidden) els.durationHidden.value = '';
    if (els.durationWrap) durationInput.placeholder = '例如 8';
    if (els.durationWrap) els.durationWrap.htmlFor = 'durationInput';
    setFieldLabel(els.durationWrap, '时长（秒）');
    return null;
  }

  const constraint = parseDurationConstraintFromModel(currentModel());
  const currentRaw = String(getActiveDurationField()?.value || els.durationHidden?.value || '').trim();
  const current = Number(currentRaw);

  durationInput.step = '1';
  durationInput.min = '1';
  durationInput.max = '60';
  durationSelect.classList.add('hidden');
  durationInput.classList.remove('hidden');
  if (els.durationWrap) els.durationWrap.htmlFor = 'durationInput';
  setFieldLabel(els.durationWrap, '时长（秒）');

  if (!constraint) {
    if (currentRaw) durationInput.value = currentRaw;
    syncDurationValueMirror();
    return null;
  }

  if (constraint.options.length) {
    const currentOption = Number.isFinite(current) && constraint.options.includes(current)
      ? String(current)
      : String(constraint.options[0]);
    durationSelect.innerHTML = constraint.options
      .map((value) => `<option value="${value}">${value} 秒</option>`)
      .join('');
    durationSelect.value = currentOption;
    durationSelect.classList.remove('hidden');
    durationInput.classList.add('hidden');
    durationInput.value = '';
    if (els.durationWrap) els.durationWrap.htmlFor = 'durationSelect';
    setFieldLabel(els.durationWrap, '时长选项（秒）');
    syncDurationValueMirror();
    return constraint;
  }

  if (constraint.minDuration !== null) durationInput.min = String(constraint.minDuration);
  if (constraint.maxDuration !== null) durationInput.max = String(constraint.maxDuration);

  if (Number.isFinite(current)) {
    if (constraint.minDuration !== null && current < constraint.minDuration) durationInput.value = String(constraint.minDuration);
    if (constraint.maxDuration !== null && current > constraint.maxDuration) durationInput.value = String(constraint.maxDuration);
  } else if (constraint.minDuration !== null) {
    durationInput.value = String(constraint.minDuration);
  }

  syncDurationValueMirror();
  return constraint;
}

function currentModel() {
  const taskType = currentTaskType();
  const modelId = selectedModelIdForTask(taskType);
  return state.modelById.get(modelId) || null;
}

function syncResolutionOptionsLegacy() {
  return null;
  /*
  const taskType = currentTaskType();
  const model = currentModel();
  const caps = getModelCapabilities(model, taskType);
  const previousAspectRatio = String(els.aspectRatio.value || '').trim();
  const previousImageSize = String(els.imageSize.value || '').trim();
  const current = String(els.resolutionInput.value || '').trim();
  const aspectRatioOptions = Array.isArray(caps.aspectRatioOptions) ? caps.aspectRatioOptions : [];
  const selectedAspectRatio = aspectRatioOptions.includes(previousAspectRatio) ? previousAspectRatio : (caps.defaultAspectRatio || '');
  const values = parseResolutions(model, taskType).filter((value) => resolutionMatchesAspectRatio(value, selectedAspectRatio));
  const useTierSizeMode = isTierSizeModel(taskType, model, caps);
  const options = values.map((v) => `<option value="${v}">${v}</option>`).join('');
  els.resolutionPreset.innerHTML = `${options}${caps.allowCustomResolution === false ? '' : '<option value="__custom__">自定义</option>'}`;

  const imageSizeOptions = Array.isArray(caps.imageSizeOptions) ? caps.imageSizeOptions : [];
  els.imageSize.innerHTML = ['<option value="">自动</option>']
    .concat(imageSizeOptions.map((item) => `<option value="${item}">${item}</option>`))
    .join('');
  showElement(els.imageSizeWrap, imageSizeOptions.length > 0 && !taskType.includes('video'));
  if (!imageSizeOptions.includes(els.imageSize.value)) {
    els.imageSize.value = caps.defaultImageSize || '';
  }

  const aspectRatioOptions = Array.isArray(caps.aspectRatioOptions) ? caps.aspectRatioOptions : [];
  els.aspectRatio.innerHTML = ['<option value="">自动</option>']
    .concat(aspectRatioOptions.map((item) => `<option value="${item}">${item}</option>`))
    .join('');
  showElement(els.aspectRatioWrap, aspectRatioOptions.length > 0);
  if (!aspectRatioOptions.includes(els.aspectRatio.value)) {
    els.aspectRatio.value = caps.defaultAspectRatio || '';
  }

  showElement(els.resolutionPreset.closest('label'), values.length > 0);
  showElement(els.resolutionInput.closest('label'), caps.allowCustomResolution !== false);

  if (!current) {
    els.resolutionInput.value = caps.defaultResolution || values[0] || '';
    els.resolutionPreset.value = caps.defaultResolution || values[0] || (caps.allowCustomResolution === false ? '' : '__custom__');
    return;
  }
  if (values.includes(current)) {
    els.resolutionPreset.value = current;
  } else {
    els.resolutionPreset.value = caps.allowCustomResolution === false ? '' : '__custom__';
  }
  */
}

function resolveTaskMeta() {
  return state.taskTypes.find((t) => t.value === currentTaskType()) || { value: currentTaskType(), kind: 'video' };
}

function syncResolutionOptionsOld() {
  const taskType = currentTaskType();
  const model = currentModel();
  const caps = getModelCapabilities(model, taskType);
  const values = parseResolutions(model, taskType);
  const useTierSizeMode = isTierSizeModel(taskType, model, caps);
  const current = String(els.resolutionInput.value || '').trim();
  const options = values.map((v) => `<option value="${v}">${v}</option>`).join('');
  els.resolutionPreset.innerHTML = `${options}${caps.allowCustomResolution === false || useTierSizeMode ? '' : '<option value="__custom__">自定义</option>'}`;

  const imageSizeOptions = Array.isArray(caps.imageSizeOptions) ? caps.imageSizeOptions : [];
  els.imageSize.innerHTML = ['<option value="">自动</option>']
    .concat(imageSizeOptions.map((item) => `<option value="${item}">${item}</option>`))
    .join('');
  showElement(els.imageSizeWrap, imageSizeOptions.length > 0);
  if (!imageSizeOptions.includes(els.imageSize.value)) {
    els.imageSize.value = caps.defaultImageSize || '';
  }

  const aspectRatioOptions = Array.isArray(caps.aspectRatioOptions) ? caps.aspectRatioOptions : [];
  els.aspectRatio.innerHTML = ['<option value="">自动</option>']
    .concat(aspectRatioOptions.map((item) => `<option value="${item}">${item}</option>`))
    .join('');
  showElement(els.aspectRatioWrap, aspectRatioOptions.length > 0);
  if (!aspectRatioOptions.includes(els.aspectRatio.value)) {
    els.aspectRatio.value = caps.defaultAspectRatio || '';
  }

  showElement(els.resolutionPreset.closest('label'), values.length > 0 && !useTierSizeMode);
  showElement(els.resolutionInput.closest('label'), caps.allowCustomResolution !== false && !useTierSizeMode);

  if (useTierSizeMode) {
    const derived = deriveResolutionFromTierAndAspectRatio(
      els.imageSize.value || caps.defaultImageSize,
      els.aspectRatio.value || caps.defaultAspectRatio
    );
    els.resolutionInput.value = derived || '';
    els.resolutionPreset.value = '';
    return;
  }

  if (!current) {
    els.resolutionInput.value = caps.defaultResolution || values[0] || '';
    els.resolutionPreset.value = caps.defaultResolution || values[0] || (caps.allowCustomResolution === false ? '' : '__custom__');
    return;
  }
  if (values.includes(current)) {
    els.resolutionPreset.value = current;
  } else {
    els.resolutionPreset.value = caps.allowCustomResolution === false ? '' : '__custom__';
  }
}

function syncResolutionOptions() {
  const taskType = currentTaskType();
  const model = currentModel();
  const caps = getModelCapabilities(model, taskType);
  const previousAspectRatio = String(els.aspectRatio.value || '').trim();
  const previousImageSize = String(els.imageSize.value || '').trim();
  const previousResolution = String(els.resolutionInput.value || '').trim();
  const aspectRatioOptions = Array.isArray(caps.aspectRatioOptions) ? caps.aspectRatioOptions : [];
  const selectedAspectRatio = aspectRatioOptions.includes(previousAspectRatio)
    ? previousAspectRatio
    : (caps.defaultAspectRatio || '');

  els.aspectRatio.innerHTML = ['<option value="">自动</option>']
    .concat(aspectRatioOptions.map((item) => `<option value="${item}">${item}</option>`))
    .join('');
  showElement(els.aspectRatioWrap, aspectRatioOptions.length > 0);
  els.aspectRatio.value = selectedAspectRatio;

  const imageSizeOptions = Array.isArray(caps.imageSizeOptions) ? caps.imageSizeOptions : [];
  const selectedImageSize = imageSizeOptions.includes(previousImageSize)
    ? previousImageSize
    : (caps.defaultImageSize || '');
  els.imageSize.innerHTML = ['<option value="">自动</option>']
    .concat(imageSizeOptions.map((item) => `<option value="${item}">${item}</option>`))
    .join('');
  showElement(els.imageSizeWrap, imageSizeOptions.length > 0);
  els.imageSize.value = selectedImageSize;

  const useTierSizeMode = isTierSizeModel(taskType, model, caps);
  const supportsSizeControl = hasExplicitSizeCapability(caps);
  const values = parseResolutions(model, taskType).filter((value) => {
    if (!selectedAspectRatio) return true;
    return resolutionMatchesAspectRatio(value, selectedAspectRatio);
  });
  const options = values.map((v) => `<option value="${v}">${v}</option>`).join('');
  els.resolutionPreset.innerHTML = `${options}${caps.allowCustomResolution === false || useTierSizeMode ? '' : '<option value="__custom__">自定义</option>'}`;

  showElement(els.resolutionPreset.closest('label'), supportsSizeControl && values.length > 0 && !useTierSizeMode);
  showElement(els.resolutionInput.closest('label'), supportsSizeControl && caps.allowCustomResolution !== false && !useTierSizeMode);

  if (!supportsSizeControl) {
    els.imageSize.value = '';
    els.resolutionInput.value = '';
    els.resolutionPreset.value = '';
    return;
  }

  if (useTierSizeMode) {
    const derived = deriveResolutionFromTierAndAspectRatio(
      els.imageSize.value || caps.defaultImageSize,
      els.aspectRatio.value || caps.defaultAspectRatio
    );
    els.resolutionInput.value = derived || '';
    els.resolutionPreset.value = '';
    return;
  }

  const selectedResolution = values.includes(previousResolution)
    ? previousResolution
    : (caps.defaultResolution || values[0] || '');

  if (!previousResolution) {
    els.resolutionInput.value = selectedResolution;
    els.resolutionPreset.value = selectedResolution || (caps.allowCustomResolution === false ? '' : '__custom__');
    return;
  }

  if (selectedResolution && values.includes(selectedResolution)) {
    els.resolutionInput.value = selectedResolution;
    els.resolutionPreset.value = selectedResolution;
  } else {
    els.resolutionInput.value = selectedResolution;
    els.resolutionPreset.value = caps.allowCustomResolution === false ? '' : '__custom__';
  }
}

function getModelCapabilities(model, taskType = currentTaskType()) {
  if (!model) {
    return {
      supportedTasks: [],
      supportsSourceImage: false,
      supportsReferenceImage: false,
      supportsMultipleReferenceImages: false,
      maxReferenceImages: 1,
      supportsStoryboardPrompt: false,
      modelSupportsStoryboardPrompt: false,
      modelSupportsIntelligentStoryboard: false,
      supportsIntelligentStoryboard: false,
      supportsStoryboard: false,
      supportsEndFrame: false,
      supportsNegativePrompt: false,
      supportsProviderMode: false,
      providerModeOptions: [],
      providerModeLabel: '生成模式',
      supportsCfgScale: false,
      promptMaxLength: null,
      supportsElements: false,
      supportsOmniImageList: false,
      supportsOmniVideoList: false,
      modelSupportsOmniInputs: false,
      modelSupportsImageToVideoEndFrame: false,
      modelSupportsImageToVideoReferenceImages: false,
      modelSupportsTextToVideoReferenceImages: false,
      supportsImageCount: false,
      maxImageCount: null,
      supportsStructuredPrompt: true,
      supportsCameraControls: false,
      supportsDirectionalCameraControls: false,
      supportsDuration: false,
      supportsAspectRatio: false,
      supportsPromptOptimize: false,
      promptOptimizePath: '',
      chatCompletionsPath: '',
      docsLinks: [],
      notes: '',
      qualityOptions: [],
      durationOptions: [],
      minDuration: null,
      maxDuration: null,
      aspectRatioOptions: [],
      resolutionPresets: [],
      imageSizeOptions: [],
      sizeField: 'size',
      allowCustomResolution: true,
      defaultResolution: '',
      defaultImageSize: '',
      defaultAspectRatio: ''
    };
  }
  const cacheKey = `${taskType}::${model.id}`;
  if (state.modelCapabilityViewCache.has(cacheKey)) {
    return state.modelCapabilityViewCache.get(cacheKey);
  }
  const taskCaps = model?.catalog?.taskCapabilities?.[taskType] || {};
  const caps = {
    ...(model?.catalog?.capabilities || {}),
    ...taskCaps
  };
  const supportedTasks = getSupportedTasksForModel(model);
  const modelId = String(model?.id || '').toLowerCase();
  const inferredVideoModel = /(sora|veo|video|seedance|wan|kling|hailuo|pixverse|vidu)/.test(modelId);
  const inferredSupportsImageCount = /(gpt-image|dall-e)/.test(modelId);
  const qualityOptions = Array.isArray(caps.qualityOptions)
    ? caps.qualityOptions.map((item) => String(item).trim()).filter(Boolean)
    : (modelId.includes('gpt-image') ? ['hd'] : []);
  const promptOptimizePath = String(caps.promptOptimizePath || '');
  const chatCompletionsPath = String(caps.chatCompletionsPath || '');
  const supportsPromptOptimize = Boolean(caps.supportsPromptOptimize || promptOptimizePath || chatCompletionsPath);
  const result = {
    supportedTasks,
    supportsSourceImage: Boolean(caps.supportsSourceImage),
    supportsReferenceImage: Boolean(caps.supportsReferenceImage),
    supportsMultipleReferenceImages: Boolean(caps.supportsMultipleReferenceImages),
    maxReferenceImages: positiveNumberOrNull(caps.maxReferenceImages) ?? 1,
    supportsStoryboardPrompt: Boolean(caps.supportsStoryboardPrompt ?? caps.supportsStoryboard),
    modelSupportsStoryboardPrompt: Boolean(caps.supportsStoryboardPrompt ?? caps.supportsStoryboard),
    modelSupportsIntelligentStoryboard: Boolean(caps.supportsIntelligentStoryboard),
    supportsIntelligentStoryboard: Boolean(caps.supportsIntelligentStoryboard),
    supportsStoryboard: Boolean(caps.supportsStoryboardPrompt ?? caps.supportsStoryboard),
    supportsEndFrame: Boolean(caps.supportsEndFrame),
    supportsNegativePrompt: Boolean(caps.supportsNegativePrompt),
    supportsProviderMode: Boolean(caps.supportsProviderMode),
    providerModeOptions: Array.isArray(caps.providerModeOptions) ? caps.providerModeOptions : [],
    providerModeLabel: String(caps.providerModeLabel || (looksLikeTierModeOptions(caps.providerModeOptions) ? '生成等级' : '生成模式')),
    supportsCfgScale: Boolean(caps.supportsCfgScale) && !/^kling-video/i.test(modelId),
    promptMaxLength: positiveNumberOrNull(caps.promptMaxLength),
    supportsElements: Boolean(caps.supportsElements),
    supportsOmniImageList: Boolean(caps.supportsOmniImageList),
    supportsOmniVideoList: Boolean(caps.supportsOmniVideoList),
    modelSupportsOmniInputs: Boolean(caps.supportsOmniInputs || caps.supportsElements || caps.supportsOmniImageList || caps.supportsOmniVideoList),
    modelSupportsImageToVideoEndFrame: Boolean(caps.supportsImageToVideoEndFrame ?? (taskType === 'image_to_video' && caps.supportsEndFrame)),
    modelSupportsImageToVideoReferenceImages: Boolean(caps.supportsImageToVideoReferenceImages ?? (taskType === 'image_to_video' && caps.supportsReferenceImage)),
    modelSupportsTextToVideoReferenceImages: Boolean(caps.supportsTextToVideoReferenceImages ?? (taskType === 'text_to_video' && caps.supportsReferenceImage)),
    supportsImageCount: caps.supportsImageCount === undefined ? inferredSupportsImageCount : Boolean(caps.supportsImageCount),
    maxImageCount: positiveNumberOrNull(caps.maxImageCount),
    supportsStructuredPrompt: true,
    supportsCameraControls: caps.supportsCameraControls === undefined ? inferredVideoModel : Boolean(caps.supportsCameraControls),
    supportsDirectionalCameraControls: Boolean(
      caps.supportsDirectionalCameraControls
      ?? ((caps.supportsCameraControls === true || inferredVideoModel) && !/omni/i.test(modelId))
    ),
    supportsDuration: Boolean(
      caps.supportsDuration
      || (Array.isArray(caps.durationOptions) && caps.durationOptions.length > 0)
      || positiveNumberOrNull(caps.minDuration) !== null
      || positiveNumberOrNull(caps.maxDuration) !== null
    ),
    supportsAspectRatio: caps.supportsAspectRatio === true || (Array.isArray(caps.aspectRatioOptions) && caps.aspectRatioOptions.length > 0),
    supportsPromptOptimize,
    promptOptimizePath,
    chatCompletionsPath,
    docsLinks: Array.isArray(caps.docsLinks) ? caps.docsLinks : [],
    notes: String(caps.notes || model?.catalog?.desc || ''),
    qualityOptions,
    durationOptions: Array.isArray(caps.durationOptions) ? caps.durationOptions : [],
    minDuration: positiveNumberOrNull(caps.minDuration),
    maxDuration: positiveNumberOrNull(caps.maxDuration),
    aspectRatioOptions: Array.isArray(caps.aspectRatioOptions) ? caps.aspectRatioOptions : [],
    resolutionPresets: Array.isArray(caps.resolutionPresets) ? caps.resolutionPresets : [],
    imageSizeOptions: Array.isArray(caps.imageSizeOptions) ? caps.imageSizeOptions : [],
    sizeField: String(caps.sizeField || 'size'),
    allowCustomResolution: caps.allowCustomResolution !== false,
    defaultResolution: String(caps.defaultResolution || ''),
    defaultImageSize: String(caps.defaultImageSize || ''),
    defaultAspectRatio: String(caps.defaultAspectRatio || '')
  };
  const effective = deriveTaskRoleCapabilities(taskType, applyProviderCapabilityPolicy(model, taskType, result));
  state.modelCapabilityViewCache.set(cacheKey, effective);
  return effective;
}

function showElement(el, visible) {
  if (!el) return;
  el.classList.toggle('hidden', !visible);
}

function setFieldLabel(el, text) {
  if (!el) return;
  const textNode = Array.from(el.childNodes || []).find((node) => node.nodeType === Node.TEXT_NODE);
  if (textNode) {
    textNode.textContent = `\n                  ${text}\n                  `;
  }
}

function setFieldHint(el, text) {
  if (!el) return;
  el.textContent = String(text || '').trim();
  showElement(el, Boolean(el.textContent));
}

function clearImageInputHints() {
  setFieldHint(els.visualInputGuide, '');
  setFieldHint(els.sourceImageHint, '');
  setFieldHint(els.referenceImageHint, '');
  setFieldHint(els.endFrameHint, '');
  setFieldHint(els.omniInputHint, '');
}

function getVisualInputSemantics(taskType, caps, generationMode) {
  const isImageToVideo = taskType === 'image_to_video';
  const isImageEdit = taskType === 'image_edit';
  const isTextToVideo = taskType === 'text_to_video';
  const structuredMode = isTextToVideo && (generationMode === 'storyboard' || generationMode === 'intelligent');
  const intelligentMode = isTextToVideo && generationMode === 'intelligent';
  const storyboardMode = isTextToVideo && generationMode === 'storyboard';
  const usesUnifiedPrimaryImage = isImageToVideo;

  const semantics = {
    structuredMode,
    hidesVisualInputs: structuredMode,
    sourceLabel: '源图 URL',
    sourceAssetLabel: '本地源图',
    sourceUploadLabel: '上传源图',
    sourcePlaceholder: '可选，填写可访问的图片地址',
    sourceHint: '',
    referenceLabel: '参考图 URL',
    referenceAssetLabel: '本地参考图',
    referenceUploadLabel: '上传参考图',
    referencePlaceholder: caps.supportsMultipleReferenceImages
      ? '可选，每行一个 URL，用于主体或风格参考'
      : '可选，用于主体或风格参考',
    referenceHint: '',
    endFrameLabel: '尾帧 URL',
    endFrameAssetLabel: '本地尾帧',
    endFrameUploadLabel: '上传尾帧',
    endFramePlaceholder: '可选，用于约束结束画面',
    endFrameHint: '',
    omniImagePlaceholder: '每行一个元素图片 URL',
    omniVideoPlaceholder: '每行一个元素视频 URL',
    elementPlaceholder: '每行一个元素描述',
    omniHint: '',
    visualGuide: ''
  };

  if (storyboardMode) {
    semantics.visualGuide = '当前是 Storyboard Prompt 模式，只提交结构化文本分镜，不接收首帧、参考图、尾帧或元素素材。';
    return semantics;
  }
  if (intelligentMode) {
    semantics.visualGuide = '当前是智能分镜模式，只提交 prompt 和模型分镜参数；图片、尾帧、元素素材在该模式下不会发送。';
    return semantics;
  }
  if (isImageToVideo) {
    semantics.sourceLabel = '首帧 / 输入图 URL';
    semantics.sourceAssetLabel = '本地首帧 / 输入图';
    semantics.sourceUploadLabel = '上传首帧 / 输入图';
    semantics.sourcePlaceholder = '必填，作为图生视频的起始画面';
    semantics.sourceHint = caps.supportsSourceImage
      ? '这张图会作为视频起始画面；如果模型支持首尾帧，尾帧会单独控制结束画面。'
      : '当前模型不单独区分首帧字段，会退化到参考图输入。';
    semantics.referenceLabel = caps.supportsMultipleReferenceImages ? '附加参考图 URL' : '附加参考图 URL';
    semantics.referenceAssetLabel = caps.supportsMultipleReferenceImages ? '本地附加参考图' : '本地附加参考图';
    semantics.referenceUploadLabel = caps.supportsMultipleReferenceImages ? '上传附加参考图' : '上传附加参考图';
    semantics.referencePlaceholder = caps.supportsMultipleReferenceImages
      ? '可选，每行一个 URL，用于补充主体、风格或构图参考'
      : '可选，用于补充主体或风格参考，不替代首帧';
    semantics.referenceHint = caps.supportsImageToVideoReferenceImages
      ? (caps.supportsMultipleReferenceImages
          ? `这些图片是补充参考，不是首帧；当前模型最多支持 ${caps.maxReferenceImages || '多张'}。`
          : '这张图是附加参考，不是首帧。')
      : '';
    semantics.endFrameLabel = '尾帧 / 结束画面 URL';
    semantics.endFrameAssetLabel = '本地尾帧 / 结束画面';
    semantics.endFrameUploadLabel = '上传尾帧 / 结束画面';
    semantics.endFramePlaceholder = '可选，用于约束视频结束画面';
    semantics.endFrameHint = caps.supportsImageToVideoEndFrame
      ? '尾帧只控制结束画面，不替代首帧。只有支持首尾帧的图生视频模型会发送该字段。'
      : '';
    semantics.visualGuide = caps.supportsImageToVideoEndFrame
      ? '当前模型是图生视频：首帧决定起始画面，尾帧决定结束画面，参考图只用于补充约束。'
      : '当前模型是图生视频：需要首帧/输入图，参考图只用于补充约束。';
    return semantics;
  }
  if (isImageEdit) {
    semantics.sourceLabel = '待编辑原图 URL';
    semantics.sourceAssetLabel = '本地待编辑原图';
    semantics.sourceUploadLabel = '上传待编辑原图';
    semantics.sourcePlaceholder = '必填，待编辑的原始图片';
    semantics.sourceHint = '这张图会被直接编辑。';
    semantics.referenceLabel = caps.supportsMultipleReferenceImages ? '编辑参考图 URL' : '编辑参考图 URL';
    semantics.referenceAssetLabel = caps.supportsMultipleReferenceImages ? '本地编辑参考图' : '本地编辑参考图';
    semantics.referenceUploadLabel = caps.supportsMultipleReferenceImages ? '上传编辑参考图' : '上传编辑参考图';
    semantics.referencePlaceholder = caps.supportsMultipleReferenceImages
      ? '可选，每行一个 URL，用于提供风格或主体参考'
      : '可选，用于提供风格或主体参考';
    semantics.referenceHint = caps.supportsReferenceImage ? '参考图只辅助编辑方向，不会被当作待编辑原图。' : '';
    semantics.visualGuide = caps.supportsReferenceImage
      ? '当前模型是图片编辑：原图是被编辑对象，参考图用于补充风格或主体约束。'
      : '当前模型是图片编辑：只需要待编辑原图。';
    return semantics;
  }
  if (taskType === 'text_to_image') {
    semantics.referenceLabel = caps.supportsMultipleReferenceImages ? '图像参考 URL' : '图像参考 URL';
    semantics.referenceAssetLabel = caps.supportsMultipleReferenceImages ? '本地图像参考' : '本地图像参考';
    semantics.referenceUploadLabel = caps.supportsMultipleReferenceImages ? '上传图像参考' : '上传图像参考';
    semantics.referencePlaceholder = caps.supportsMultipleReferenceImages
      ? '可选，每行一个 URL，用于主体、构图或风格参考'
      : '可选，用于主体、构图或风格参考';
    semantics.referenceHint = caps.supportsTextToImageReferenceImages ? '参考图不会被直接输出，只用于约束生成结果。' : '';
    semantics.visualGuide = caps.supportsReferenceImage
      ? '当前模型是文生图：参考图只用于约束人物、风格或构图。'
      : '';
    return semantics;
  }
  if (isTextToVideo) {
    semantics.referenceLabel = caps.supportsMultipleReferenceImages ? '视频参考图 URL' : '视频参考图 URL';
    semantics.referenceAssetLabel = caps.supportsMultipleReferenceImages ? '本地视频参考图' : '本地视频参考图';
    semantics.referenceUploadLabel = caps.supportsMultipleReferenceImages ? '上传视频参考图' : '上传视频参考图';
    semantics.referencePlaceholder = caps.supportsMultipleReferenceImages
      ? '可选，每行一个 URL，用于主体、风格或镜头参考'
      : '可选，用于主体、风格或镜头参考';
    semantics.referenceHint = caps.supportsTextToVideoReferenceImages ? '这些图片只作为视频参考，不是首帧。' : '';
    semantics.omniImagePlaceholder = '每行一个元素图片 URL，用于 Omni / Elements 输入';
    semantics.omniVideoPlaceholder = '每行一个元素视频 URL，用于 Omni 视频输入';
    semantics.elementPlaceholder = '每行一个元素描述，用于元素绑定或替换';
    semantics.omniHint = caps.supportsOmniInputs
      ? 'Omni / Elements 素材与普通参考图不是一类输入。参考图用于约束生成，Omni / Elements 用于模型元素注入或编辑。'
      : '';
    semantics.visualGuide = caps.supportsTextToVideoReferenceImages
      ? '当前模型是文生视频：参考图只用于约束主体或风格，不代表首帧。'
      : '';
  }

  return semantics;
}

function buildInputRoleSummary(taskType, caps, generationMode) {
  const tags = [];
  if (taskType === 'image_to_video') {
    tags.push(caps.supportsImageToVideoFirstFrame ? '首帧/输入图' : '无首帧输入');
    if (caps.supportsImageToVideoReferenceImages) {
      tags.push(caps.supportsMultipleReferenceImages ? `附加参考图 x${caps.maxReferenceImages || 'N'}` : '附加参考图');
    }
    tags.push(caps.supportsImageToVideoEndFrame ? '尾帧/结束画面' : '无尾帧');
  } else if (taskType === 'image_edit') {
    tags.push(caps.supportsImageEditSourceImage ? '待编辑原图' : '无原图输入');
    if (caps.supportsReferenceImage) tags.push('编辑参考图');
  } else if (taskType === 'text_to_image') {
    tags.push('纯文本提示');
    if (caps.supportsTextToImageReferenceImages) {
      tags.push(caps.supportsMultipleReferenceImages ? `参考图 x${caps.maxReferenceImages || 'N'}` : '参考图');
    }
  } else if (taskType === 'text_to_video') {
    tags.push('纯文本提示');
    if (caps.supportsTextToVideoReferenceImages) {
      tags.push(caps.supportsMultipleReferenceImages ? `视频参考图 x${caps.maxReferenceImages || 'N'}` : '视频参考图');
    }
    if (caps.supportsStoryboardPrompt) tags.push('Storyboard Prompt');
    if (caps.supportsIntelligentStoryboard) tags.push('智能分镜');
    if (caps.supportsOmniInputs) tags.push('Omni / Elements');
  }
  if (generationMode === 'storyboard') tags.push('当前模式: 仅结构化文本');
  if (generationMode === 'intelligent') tags.push('当前模式: prompt + intelligence');
  return tags.length ? `输入矩阵：${tags.join(' / ')}` : '';
}

function buildTaskTypeGuide(taskType, caps, generationMode) {
  if (taskType === 'text_to_video') {
    if (generationMode === 'storyboard') {
      return '任务边界：当前是文生视频里的 Storyboard Prompt 模式。提交主体是结构化文本分镜，不发送首帧、参考图、尾帧或 Omni 素材。';
    }
    if (generationMode === 'intelligent') {
      return '任务边界：当前是文生视频里的智能分镜模式。提交主体是 prompt 和模型分镜能力，不等同于图生视频，也不等同于手工 Storyboard 编辑。';
    }
    return caps.supportsTextToVideoReferenceImages
      ? '任务边界：当前是文生视频。主输入是文本提示；参考图如果开放，只用于约束主体、风格或镜头，不会被当作首帧。'
      : '任务边界：当前是文生视频。主输入只有文本提示，画面由模型从文本直接生成。';
  }
  if (taskType === 'image_to_video') {
    return caps.supportsImageToVideoEndFrame
      ? '任务边界：当前是图生视频。首帧/输入图决定起始画面，尾帧决定结束画面；两者都属于模型特征，不是所有模型都支持。'
      : '任务边界：当前是图生视频。必须有一张输入图作为起始画面；如果模型支持附加参考图，它们只做补充约束。';
  }
  if (taskType === 'image_edit') {
    return '任务边界：当前是图片编辑。原图是被修改对象，参考图只辅助说明想要的风格、主体或材质。';
  }
  if (taskType === 'text_to_image') {
    return caps.supportsTextToImageReferenceImages
      ? '任务边界：当前是文生图。文本是主输入；参考图如果开放，只用于约束结果，不会直接作为输出底图。'
      : '任务边界：当前是文生图。文本提示直接驱动图片生成。';
  }
  return '';
}

function renderFieldGuide(entries = []) {
  if (!els.fieldGuidePanel) return;
  if (!entries.length) {
    els.fieldGuidePanel.innerHTML = '';
    return;
  }
  els.fieldGuidePanel.innerHTML = entries.map((entry) => `
    <article class="field-guide-card">
      <div class="field-guide-head">
        <div class="field-guide-title">${escapeHtml(entry.title)}</div>
        <span class="field-guide-kind">${escapeHtml(entry.kind)}</span>
      </div>
      <div class="field-guide-copy">${escapeHtml(entry.purpose)}</div>
      <div class="field-guide-tip">${escapeHtml(entry.recommendation)}</div>
    </article>
  `).join('');
}

function buildFieldGuideEntries(taskType, caps, generationMode) {
  const entries = [];
  const add = (title, kind, purpose, recommendation) => {
    entries.push({ title, kind, purpose, recommendation });
  };

  add(
    '任务类型',
    '选择项',
    '决定当前工作流是文生图、图片编辑、文生视频还是图生视频，也决定后续哪些字段出现。',
    '先根据模型特征选任务类型，不要反过来用任务类型去猜模型能力。'
  );
  add(
    '模型',
    '选择项',
    '决定这次提交真正可用的输入角色、分辨率、时长、镜头能力和高级模式。',
    '优先看上方模型卡片里的输入矩阵，再选择最匹配当前任务的模型。'
  );
  if (taskType === 'text_to_video' || taskType === 'text_to_image') {
    add(
      'Prompt',
      '输入项',
      '这是主输入。模型会主要根据这里的文本描述生成画面或视频。',
      '推荐写清主体、场景、动作、镜头、光线和风格，不要只写很短的关键词。'
    );
  }
  if (taskType === 'image_edit') {
    add(
      '待编辑原图',
      '输入项 / 上传项',
      '这是被修改的原始图片，不是参考图。',
      '先提供要修改的原图，再用 prompt 描述你希望怎么改。'
    );
  }
  if (taskType === 'image_to_video') {
    add(
      '首帧 / 输入图',
      '输入项 / 上传项',
      '这是图生视频的起始画面。模型会从这张图开始生成视频。',
      '推荐上传主体清晰、构图稳定的图片；不要把参考图误填到这里。'
    );
    if (caps.supportsImageToVideoReferenceImages) {
      add(
        '附加参考图',
        '输入项 / 上传项',
        '用于补充主体、风格、服装、材质或构图约束，不替代首帧。',
        caps.supportsMultipleReferenceImages
          ? `推荐每张参考图只表达一个意图，当前模型最多支持 ${caps.maxReferenceImages || '多张'}。`
          : '推荐只放最关键的一张参考图，避免把首帧和参考图混用。'
      );
    }
    if (caps.supportsImageToVideoEndFrame) {
      add(
        '尾帧 / 结束画面',
        '输入项 / 上传项',
        '只用于约束视频结束画面，与首帧配对形成首尾帧工作流。',
        '推荐只在你明确需要“一镜到底收束到指定画面”时填写，否则留空。'
      );
    }
  }
  if (taskType === 'text_to_image' && caps.supportsTextToImageReferenceImages) {
    add(
      '参考图',
      '输入项 / 上传项',
      '用于约束人物、风格、构图或材质，不会直接被当作输出底图。',
      caps.supportsMultipleReferenceImages
        ? `推荐拆开角色参考和风格参考，当前模型最多支持 ${caps.maxReferenceImages || '多张'}。`
        : '推荐只放一张最关键的参考图。'
    );
  }
  if (taskType === 'text_to_video' && caps.supportsTextToVideoReferenceImages && generationMode === 'standard') {
    add(
      '视频参考图',
      '输入项 / 上传项',
      '用于约束文生视频里的主体、风格或镜头倾向，不是首帧。',
      '推荐把 prompt 作为主描述，把参考图作为补充约束，不要把它当图生视频来用。'
    );
  }
  if (taskType === 'text_to_video') {
    add(
      '视频模式',
      '选择项',
      '决定当前是标准模式、Storyboard Prompt 还是智能分镜。不同模式的输入边界完全不同。',
      '先看模式说明再填字段；Storyboard 和智能分镜不是普通文生视频的附加开关。'
    );
  }
  if (caps.supportsProviderMode && Array.isArray(caps.providerModeOptions) && caps.providerModeOptions.length) {
    add(
      caps.providerModeLabel || '生成模式',
      '选择项',
      looksLikeTierModeOptions(caps.providerModeOptions)
        ? '这是模型或 Provider 暴露的等级档位，不是自由输入参数。'
        : '这是模型特有的生成模式切换，不同选项通常对应不同推理路线。',
      `推荐先用 ${caps.providerModeOptions[0]}，除非你明确知道其他档位或模式的差异。`
    );
  }
  if (taskType.includes('video') && caps.supportsDuration !== false) {
    const durationConstraint = parseDurationConstraintFromModel(currentModel());
    add(
      durationConstraint?.options?.length ? '时长选项' : '时长',
      durationConstraint?.options?.length ? '选择项' : '输入项',
      durationConstraint?.options?.length
        ? '这个模型只允许提交固定时长档位，不能自由填写任意秒数。'
        : '这个模型允许按秒填写时长，但仍然要落在模型允许的区间内。',
      durationConstraint?.options?.length
        ? `当前只支持 ${durationConstraint.options.join('/')} 秒，直接从下拉框选，不要手填。`
        : `推荐先用 ${durationConstraint?.minDuration ?? 5} 秒起步；如果模型给了上下限，保持在区间内。`
    );
  }
  if (caps.supportsCfgScale) {
    add(
      'CFG Scale',
      '输入项',
      '用于控制模型对提示词的跟随强度，只在明确支持该参数的模型上显示。',
      '推荐先留空或使用中间值，过高通常会导致结果僵硬。'
    );
  }
  if (caps.supportsDirectionalCameraControls) {
    add(
      '方向镜头控制',
      '选择项 + 输入项',
      '这是显式的镜头控制接口，允许指定类型并微调 pan / tilt / zoom。',
      '只在你明确想控制镜头运动时使用；如果模型只是“内置镜头能力”，这里不会出现。'
    );
  } else if (taskType === 'text_to_video' && caps.supportsCameraControls) {
    add(
      '内置镜头能力',
      '模型特性',
      '这个模型具备镜头能力，但不是通过通用的 pan / tilt / zoom 参数暴露。',
      '按模型自己的模式或 Omni 能力使用，不要期待通用方向控制字段。'
    );
  }
  if (caps.supportsOmniInputs && generationMode === 'standard') {
    add(
      'Omni / Elements 素材',
      '输入项',
      '这是模型特有的元素输入，不等同于普通参考图，也不等同于首帧。',
      '图片、视频和元素描述最好各自承担单一职责，不要在同一字段里混着表达多个意图。'
    );
  }
  add(
    'Seed',
    '输入项',
    '用于固定随机性，便于复现结果。',
    '只有在你需要复现结果或做对比测试时再填写。'
  );
  add(
    '负向提示词',
    '输入项',
    '用于说明不希望出现的内容，只在支持该参数的模型上生效。',
    '推荐写明显的排除项，例如“不要字幕、不要多余人物、不要畸形手”。'
  );
  return entries;
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

function normalizeImageToVideoPrimaryInputs() {
  if (String(els.typeSelect?.value || '') !== 'image_to_video') return;
  if (els.sourceImageUrl && !String(els.sourceImageUrl.value || '').trim()) {
    const fallbackUrl = String(els.referenceImageUrl?.value || '')
      .split(/\r?\n|,/)
      .map((item) => item.trim())
      .find(Boolean);
    if (fallbackUrl) els.sourceImageUrl.value = fallbackUrl;
  }
  if (els.sourceAssetSelect && !String(els.sourceAssetSelect.value || '').trim()) {
    const fallbackReferenceOption = Array.from(els.referenceAssetSelect?.selectedOptions || []).find((option) => option.value);
    if (fallbackReferenceOption?.value) els.sourceAssetSelect.value = fallbackReferenceOption.value;
  }
  if (els.referenceImageUrl) els.referenceImageUrl.value = '';
  if (els.referenceAssetSelect) {
    Array.from(els.referenceAssetSelect.options || []).forEach((option) => {
      option.selected = false;
    });
  }
  if (els.referenceUploadInput) els.referenceUploadInput.value = '';
}

function createStoryboardShot(shot = {}) {
  return {
    title: String(shot.title || '').trim(),
    prompt: String(shot.prompt || '').trim(),
    duration: String(shot.duration || '').trim()
  };
}

function defaultStoryboardShots() {
  return [
    createStoryboardShot({ title: '开场', prompt: '', duration: '' }),
    createStoryboardShot({ title: '主体镜头', prompt: '', duration: '' }),
    createStoryboardShot({ title: '结尾镜头', prompt: '', duration: '' })
  ];
}

function getGenerationModeOptions(taskType, caps) {
  const options = [{ value: 'standard', label: '标准生成' }];
  const gatedMessages = [];
  if (taskType === 'text_to_video' && caps.supportsStoryboardPrompt) {
    options.push({ value: 'storyboard', label: '故事板模式' });
  } else if (taskType === 'text_to_video' && caps.modelSupportsStoryboardPrompt) {
    gatedMessages.push('模型支持 Storyboard Prompt，但当前 Provider 未开放');
  }
  if (taskType === 'text_to_video' && caps.supportsIntelligentStoryboard) {
    options.push({ value: 'intelligent', label: '智能分镜' });
  } else if (taskType === 'text_to_video' && caps.modelSupportsIntelligentStoryboard) {
    gatedMessages.push('模型支持智能分镜，但当前 Provider/UI 未开放');
  }
  return { options, gatedMessages };
}

function parseStoryboardText(text = '') {
  const raw = String(text || '').trim();
  if (!raw) return [];
  const blocks = raw
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);
  const shots = blocks.map((block, index) => {
    const lines = block.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    const first = lines[0] || '';
    const match = first.match(/^Shot\s+\d+\s*(?:\(([^)]+)\))?\s*:\s*(.*)$/i);
    if (match) {
      return createStoryboardShot({
        duration: match[1] || '',
        title: `镜头 ${index + 1}`,
        prompt: [match[2], ...lines.slice(1)].filter(Boolean).join('\n')
      });
    }
    return createStoryboardShot({
      title: `镜头 ${index + 1}`,
      prompt: lines.join('\n')
    });
  }).filter((shot) => shot.prompt || shot.title || shot.duration);
  return shots;
}

function storyboardShotsFromEditor() {
  return Array.from(els.storyboardEditor?.querySelectorAll('[data-storyboard-shot]') || []).map((card) => createStoryboardShot({
    title: card.querySelector('[data-field=\"title\"]')?.value,
    prompt: card.querySelector('[data-field=\"prompt\"]')?.value,
    duration: card.querySelector('[data-field=\"duration\"]')?.value
  })).filter((shot) => shot.title || shot.prompt || shot.duration);
}

function buildStoryboardText(shots = []) {
  return shots.map((shot, index) => {
    const lines = [`Shot ${index + 1}:`];
    if (shot.duration) lines.push(`duration: ${shot.duration}`);
    const sceneText = [shot.title, shot.prompt].filter(Boolean).join(' - ');
    if (sceneText) lines.push(`Scene: ${sceneText}`);
    return lines.join('\n').trim();
  }).join('\n\n');
}

function parseStoryboardDurationSeconds(value) {
  const match = String(value || '').trim().match(/^(\d+(?:\.\d+)?)\s*s?$/i);
  if (!match) return null;
  const numeric = Number(match[1]);
  return Number.isFinite(numeric) ? numeric : null;
}

function renderStoryboardTimeline(shots = []) {
  if (!els.storyboardTimeline) return;
  const validShots = shots.filter((shot) => shot.title || shot.prompt || shot.duration);
  const totalSeconds = validShots.reduce((sum, shot) => sum + (parseStoryboardDurationSeconds(shot.duration) || 0), 0);
  if (!validShots.length) {
    els.storyboardTimeline.innerHTML = '';
    return;
  }
  const chips = validShots.map((shot, index) => {
    const title = shot.title || `镜头 ${index + 1}`;
    const duration = shot.duration || '未设时长';
    return `<div class="storyboard-chip"><span>${index + 1}</span><strong>${escapeHtml(title)}</strong><em>${escapeHtml(duration)}</em></div>`;
  }).join('');
  const totalLabel = totalSeconds > 0 ? `总时长约 ${totalSeconds}s` : '总时长未设定';
  els.storyboardTimeline.innerHTML = `<div class="storyboard-timeline-meta">${totalLabel}</div><div class="storyboard-chip-row">${chips}</div>`;
}

function syncStoryboardTextFromEditor() {
  if (!els.storyboardText) return;
  const shots = storyboardShotsFromEditor();
  const compiled = buildStoryboardText(shots);
  els.storyboardText.value = compiled;
  if (els.storyboardPreview) {
    els.storyboardPreview.textContent = compiled || '暂无故事板内容';
  }
  renderStoryboardTimeline(shots);
}

function renderStoryboardEditor(shots = []) {
  if (!els.storyboardEditor) return;
  const nextShots = (shots.length ? shots : defaultStoryboardShots()).map((shot) => createStoryboardShot(shot));
  els.storyboardEditor.innerHTML = nextShots.map((shot, index) => `
    <article class="storyboard-card" data-storyboard-shot="${index}">
      <div class="storyboard-card-head">
        <strong>镜头 ${index + 1}</strong>
        <div class="config-actions">
          <button type="button" class="secondary-button" data-storyboard-action="duplicate" data-storyboard-index="${index}">复制</button>
          <button type="button" class="secondary-button" data-storyboard-action="move-up" data-storyboard-index="${index}">上移</button>
          <button type="button" class="secondary-button" data-storyboard-action="move-down" data-storyboard-index="${index}">下移</button>
          <button type="button" class="secondary-button" data-storyboard-action="remove" data-storyboard-index="${index}">删除</button>
        </div>
      </div>
      <div class="inline-grid">
        <label>
          镜头标题
          <input type="text" data-field="title" value="${escapeHtml(shot.title)}" placeholder="例如：开场、高潮、收束" />
        </label>
        <label>
          时长提示
          <input type="text" data-field="duration" value="${escapeHtml(shot.duration)}" placeholder="例如：4s，可选" />
        </label>
      </div>
      <label>
        镜头内容
        <textarea rows="4" data-field="prompt" placeholder="描述这个镜头的主体、动作、景别、光线和氛围">${escapeHtml(shot.prompt)}</textarea>
      </label>
    </article>
  `).join('');
  syncStoryboardTextFromEditor();
}

function syncStoryboardMode() {
  const taskType = currentTaskType();
  const model = currentModel();
  const caps = getModelCapabilities(model, taskType);
  const modeInfo = getGenerationModeOptions(taskType, caps);
  if (els.videoGenerationMode) {
    const currentMode = String(els.videoGenerationMode.value || 'standard');
    els.videoGenerationMode.innerHTML = modeInfo.options
      .map((option) => `<option value="${option.value}">${option.label}</option>`)
      .join('');
    els.videoGenerationMode.value = modeInfo.options.some((option) => option.value === currentMode)
      ? currentMode
      : 'standard';
    if (els.videoModeHint) {
      if (taskType !== 'text_to_video') {
        els.videoModeHint.textContent = '';
      } else {
        const selectedMode = String(els.videoGenerationMode.value || 'standard');
        const modeCopy = selectedMode === 'storyboard'
          ? '故事板模式会提交纯文本 storyboard prompt。'
          : (selectedMode === 'intelligent'
              ? '智能分镜会提交 prompt + shot_type=intelligence。'
              : '标准模式直接按当前模型的常规视频接口提交。');
        const gatedCopy = modeInfo.gatedMessages.length ? ` ${modeInfo.gatedMessages.join(' / ')}` : '';
        els.videoModeHint.textContent = `${modeCopy}${gatedCopy}`.trim();
      }
    }
  }
  const hasAdvancedVideoModes = taskType === 'text_to_video' && (modeInfo.options.length > 1 || modeInfo.gatedMessages.length > 0);
  showElement(els.storyboardPanel, hasAdvancedVideoModes);
  if (!hasAdvancedVideoModes) {
    if (els.storyboardText) els.storyboardText.value = '';
    if (els.storyboardTimeline) els.storyboardTimeline.innerHTML = '';
    if (els.storyboardPreview) els.storyboardPreview.textContent = '';
    if (els.storyboardEditor) els.storyboardEditor.innerHTML = '';
    showElement(els.storyboardWorkspace, false);
    showElement(els.addStoryboardShot, false);
    if (els.prompt) els.prompt.disabled = false;
    return;
  }
  const storyboardMode = String(els.videoGenerationMode?.value || 'standard') === 'storyboard';
  showElement(els.addStoryboardShot, storyboardMode);
  showElement(els.storyboardWorkspace, storyboardMode);
  const parsedShots = parseStoryboardText(els.storyboardText?.value || '');
  if (storyboardMode && els.storyboardEditor && !els.storyboardEditor.children.length) {
    renderStoryboardEditor(parsedShots);
  }
  if (els.prompt) {
    els.prompt.disabled = storyboardMode;
    els.prompt.placeholder = storyboardMode
      ? '故事板模式下将使用下方故事板内容提交'
      : '描述你想生成的内容';
  }
}

function applyCreateFormRulesLegacy() {
  const taskMeta = resolveTaskMeta();
  const taskType = taskMeta.value;
  const isVideo = taskType.includes('video');
  const isImageToVideo = taskType === 'image_to_video';
  const isImageEdit = taskType === 'image_edit';
  const model = currentModel();
  const caps = getModelCapabilities(model);

  showElement(els.imageModelWrap, !isVideo);
  showElement(els.videoModelWrap, isVideo);
  showElement(els.durationWrap, isVideo && caps.supportsDuration !== false);
  showElement(els.imageOptionRow, !isVideo);

  const needSource = isImageEdit || isImageToVideo;
  const canSource = needSource || caps.supportsSourceImage || isImageToVideo;
  const canReference = caps.supportsReferenceImage || taskType === 'text_to_image' || taskType === 'image_to_video' || taskType === 'text_to_video';
  const canEndFrame = isImageToVideo && caps.supportsEndFrame;

  showElement(els.sourceImageWrap, canSource);
  showElement(els.sourceAssetWrap, canSource);
  showElement(els.sourceUploadWrap, canSource);
  showElement(els.referenceImageWrap, canReference);
  showElement(els.referenceAssetWrap, canReference);
  showElement(els.referenceUploadWrap, canReference);
  showElement(els.endFrameGroup, canEndFrame);
  showElement(els.endFrameUploadWrap, canEndFrame);
  showElement(els.negativePrompt?.closest('label'), Boolean(caps.supportsNegativePrompt) || isVideo || taskType === 'text_to_image' || taskType === 'image_edit');

  const supportsImageCount = !isVideo && (caps.supportsImageCount || taskType === 'text_to_image');
  showElement(els.imageCountWrap, supportsImageCount);
  if (supportsImageCount) {
    const maxCount = caps.maxImageCount && caps.maxImageCount > 0 ? caps.maxImageCount : 8;
    els.imageCount.max = String(maxCount);
    const currentCount = Number(els.imageCount.value || '1');
    if (!Number.isFinite(currentCount) || currentCount < 1) els.imageCount.value = '1';
    if (currentCount > maxCount) els.imageCount.value = String(maxCount);
  } else {
    els.imageCount.value = '1';
  }

  const qualityOptions = Array.isArray(caps.qualityOptions) ? caps.qualityOptions : [];
  const supportsQuality = !isVideo && qualityOptions.length > 0;
  showElement(els.imageQualityWrap, supportsQuality);
  if (supportsQuality) {
    const currentQuality = String(els.imageQuality.value || '');
    const opts = ['<option value="">自动</option>']
      .concat(qualityOptions.map((q) => `<option value="${q}">${q}</option>`))
      .join('');
    els.imageQuality.innerHTML = opts;
    if (currentQuality && qualityOptions.includes(currentQuality)) {
      els.imageQuality.value = currentQuality;
    } else {
      els.imageQuality.value = '';
    }
  } else {
    els.imageQuality.value = '';
  }

  const mismatch = model && caps.supportedTasks.length && !caps.supportedTasks.includes(taskType);
  const durationConstraint = syncDurationInputForModel();
  if (mismatch) {
    els.modelCapabilityHint.textContent = `当前模型可能不支持「${taskMeta.label || taskType}」，建议更换模型。`;
  } else {
    const tips = [];
    if (canSource && !needSource) tips.push('支持源图');
    if (canReference) tips.push('支持参考图');
    if (canEndFrame) tips.push('支持尾帧');
    if (supportsImageCount) tips.push(`支持多图输出（最多 ${els.imageCount.max} 张）`);
    if (supportsQuality) tips.push(`支持质量参数（${qualityOptions.join('/')})`);
    if (durationConstraint?.options?.length) {
      tips.push(`时长仅支持 ${durationConstraint.options.join('/')} 秒`);
    } else if (durationConstraint && (durationConstraint.minDuration !== null || durationConstraint.maxDuration !== null)) {
      const min = durationConstraint.minDuration ?? '-';
      const max = durationConstraint.maxDuration ?? '-';
      tips.push(`时长范围 ${min}-${max} 秒`);
    }
    els.modelCapabilityHint.textContent = tips.length ? `模型能力：${tips.join(' / ')}` : '';
  }

  syncResolutionOptions();
}

function applyCreateFormRulesV2() {
  const taskMeta = resolveTaskMeta();
  const taskType = taskMeta.value;
  const isVideo = taskType.includes('video');
  const isImageToVideo = taskType === 'image_to_video';
  const isImageEdit = taskType === 'image_edit';
  const model = currentModel();
  const caps = getModelCapabilities(model, taskType);

  showElement(els.imageModelWrap, !isVideo);
  showElement(els.videoModelWrap, isVideo);
  showElement(els.durationWrap, isVideo && caps.supportsDuration !== false);
  showElement(els.imageOptionRow, !isVideo);
  syncStoryboardMode();

  const usesUnifiedPrimaryImage = isImageToVideo;
  const needSource = isImageEdit || isImageToVideo;
  const canPrimaryImage = caps.supportsPrimaryImageInput;
  const canSource = usesUnifiedPrimaryImage ? canPrimaryImage : (caps.supportsImageEditSourceImage || caps.supportsSourceImage);
  const canReference = isImageToVideo
    ? caps.supportsImageToVideoReferenceImages
    : (taskType === 'text_to_video'
        ? caps.supportsTextToVideoReferenceImages
        : (taskType === 'text_to_image' ? caps.supportsTextToImageReferenceImages : caps.supportsReferenceImage));
  const canEndFrame = caps.supportsImageToVideoEndFrame;
  const canProviderMode = isVideo && caps.supportsProviderMode && Array.isArray(caps.providerModeOptions) && caps.providerModeOptions.length > 0;
  const canCfgScale = isVideo && caps.supportsCfgScale;
  const canCameraControl = taskType === 'text_to_video' && caps.supportsDirectionalCameraControls;
  const canOmniInputs = caps.supportsOmniInputs;
  const generationMode = String(els.videoGenerationMode?.value || 'standard');
  const storyboardMode = generationMode === 'storyboard';
  const intelligentMode = generationMode === 'intelligent';
  const semantics = getVisualInputSemantics(taskType, caps, generationMode);
  const showReferenceInputs = !usesUnifiedPrimaryImage && canReference;
  const hidesVisualInputsForStructuredMode = semantics.hidesVisualInputs;

  clearImageInputHints();
  setFieldLabel(els.sourceImageWrap, semantics.sourceLabel);
  setFieldLabel(els.sourceAssetWrap, semantics.sourceAssetLabel);
  setFieldLabel(els.sourceUploadWrap, semantics.sourceUploadLabel);
  setFieldLabel(els.referenceImageWrap, semantics.referenceLabel);
  setFieldLabel(els.referenceAssetWrap, semantics.referenceAssetLabel);
  setFieldLabel(els.referenceUploadWrap, semantics.referenceUploadLabel);
  setFieldLabel(document.getElementById('endFrameImageWrap'), semantics.endFrameLabel);
  setFieldLabel(document.getElementById('endFrameAssetWrap'), semantics.endFrameAssetLabel);
  if (els.sourceImageUrl) els.sourceImageUrl.placeholder = semantics.sourcePlaceholder;
  if (els.referenceImageUrl) els.referenceImageUrl.placeholder = semantics.referencePlaceholder;
  if (els.endFrameImageUrl) els.endFrameImageUrl.placeholder = semantics.endFramePlaceholder;
  if (els.omniImageUrls) els.omniImageUrls.placeholder = semantics.omniImagePlaceholder;
  if (els.omniVideoUrls) els.omniVideoUrls.placeholder = semantics.omniVideoPlaceholder;
  if (els.elementList) els.elementList.placeholder = semantics.elementPlaceholder;
  setFieldHint(els.visualInputGuide, semantics.visualGuide);
  setFieldHint(els.sourceImageHint, semantics.sourceHint);
  setFieldHint(els.referenceImageHint, semantics.referenceHint);
  setFieldHint(els.endFrameHint, semantics.endFrameHint);
  setFieldHint(els.omniInputHint, semantics.omniHint);

  if (usesUnifiedPrimaryImage) {
    normalizeImageToVideoPrimaryInputs();
  }
  if (els.referenceAssetSelect) {
    const supportsMultipleReferenceImages = Boolean(caps.supportsMultipleReferenceImages);
    els.referenceAssetSelect.multiple = supportsMultipleReferenceImages;
    els.referenceAssetSelect.size = supportsMultipleReferenceImages ? Math.min(caps.maxReferenceImages || 4, 4) : 1;
  }

  showElement(els.sourceImageWrap, canSource && !hidesVisualInputsForStructuredMode);
  showElement(els.sourceAssetWrap, canSource && !hidesVisualInputsForStructuredMode);
  showElement(els.sourceUploadWrap, canSource && !hidesVisualInputsForStructuredMode);
  showElement(els.referenceImageWrap, showReferenceInputs && !hidesVisualInputsForStructuredMode);
  showElement(els.referenceAssetWrap, showReferenceInputs && !hidesVisualInputsForStructuredMode);
  showElement(els.referenceUploadWrap, showReferenceInputs && !hidesVisualInputsForStructuredMode);
  showElement(els.endFrameGroup, canEndFrame && !hidesVisualInputsForStructuredMode);
  showElement(els.endFrameUploadWrap, canEndFrame && !hidesVisualInputsForStructuredMode);
  showElement(els.videoAdvancedRow, (canProviderMode || canCfgScale) && !storyboardMode);
  showElement(els.providerModeWrap, canProviderMode && !storyboardMode);
  showElement(els.cfgScaleWrap, canCfgScale && !storyboardMode);
  showElement(els.cameraControlGroup, canCameraControl && !storyboardMode);
  showElement(els.omniInputsGroup, canOmniInputs && !hidesVisualInputsForStructuredMode);
  showElement(els.negativePrompt?.closest('label'), Boolean(caps.supportsNegativePrompt));
  showElement(els.visualInputGuide, Boolean(semantics.visualGuide) && (canSource || showReferenceInputs || canEndFrame || canOmniInputs || hidesVisualInputsForStructuredMode));
  showElement(els.sourceImageHint, Boolean(semantics.sourceHint) && canSource && !hidesVisualInputsForStructuredMode);
  showElement(els.referenceImageHint, Boolean(semantics.referenceHint) && showReferenceInputs && !hidesVisualInputsForStructuredMode);
  showElement(els.endFrameHint, Boolean(semantics.endFrameHint) && canEndFrame && !hidesVisualInputsForStructuredMode);
  showElement(els.omniInputHint, Boolean(semantics.omniHint) && canOmniInputs && !hidesVisualInputsForStructuredMode);

  if (canProviderMode && els.providerMode) {
    const providerModeLabel = document.querySelector('label[for="providerMode"]');
    if (providerModeLabel) setFieldLabel(providerModeLabel, caps.providerModeLabel || '生成模式');
    const currentMode = String(els.providerMode.value || '');
    els.providerMode.innerHTML = ['<option value="">自动</option>']
      .concat(caps.providerModeOptions.map((mode) => `<option value="${mode}">${mode}</option>`))
      .join('');
    els.providerMode.value = caps.providerModeOptions.includes(currentMode) ? currentMode : '';
  } else if (els.providerMode) {
    els.providerMode.value = '';
  }

  if (!canSource) {
    if (els.sourceImageUrl) els.sourceImageUrl.value = '';
    if (els.sourceAssetSelect) els.sourceAssetSelect.value = '';
    if (els.sourceUploadInput) els.sourceUploadInput.value = '';
  }
  if (!showReferenceInputs) {
    if (els.referenceImageUrl) els.referenceImageUrl.value = '';
    if (els.referenceAssetSelect) {
      Array.from(els.referenceAssetSelect.options || []).forEach((option) => {
        option.selected = false;
      });
    }
    if (els.referenceUploadInput) els.referenceUploadInput.value = '';
  }
  if (!canEndFrame) {
    if (els.endFrameImageUrl) els.endFrameImageUrl.value = '';
    if (els.endFrameAssetSelect) els.endFrameAssetSelect.value = '';
    if (els.endFrameUploadInput) els.endFrameUploadInput.value = '';
  }
  if (!canCfgScale && els.cfgScale) els.cfgScale.value = '';
  if (!canCameraControl) {
    if (els.cameraControlType) els.cameraControlType.value = '';
    if (els.cameraControlPan) els.cameraControlPan.value = '';
    if (els.cameraControlTilt) els.cameraControlTilt.value = '';
    if (els.cameraControlZoom) els.cameraControlZoom.value = '';
  }
  if (!canOmniInputs) {
    if (els.omniImageUrls) els.omniImageUrls.value = '';
    if (els.omniVideoUrls) els.omniVideoUrls.value = '';
    if (els.elementList) els.elementList.value = '';
  }
  if (hidesVisualInputsForStructuredMode) {
    if (els.sourceImageUrl) els.sourceImageUrl.value = '';
    if (els.sourceAssetSelect) els.sourceAssetSelect.value = '';
    if (els.sourceUploadInput) els.sourceUploadInput.value = '';
    if (els.referenceImageUrl) els.referenceImageUrl.value = '';
    if (els.referenceAssetSelect) {
      Array.from(els.referenceAssetSelect.options || []).forEach((option) => {
        option.selected = false;
      });
    }
    if (els.referenceUploadInput) els.referenceUploadInput.value = '';
    if (els.endFrameImageUrl) els.endFrameImageUrl.value = '';
    if (els.endFrameAssetSelect) els.endFrameAssetSelect.value = '';
    if (els.endFrameUploadInput) els.endFrameUploadInput.value = '';
    if (els.omniImageUrls) els.omniImageUrls.value = '';
    if (els.omniVideoUrls) els.omniVideoUrls.value = '';
    if (els.elementList) els.elementList.value = '';
  }

  const supportsImageCount = !isVideo && caps.supportsImageCount;
  showElement(els.imageCountWrap, supportsImageCount);
  if (supportsImageCount) {
    const maxCount = caps.maxImageCount && caps.maxImageCount > 0 ? caps.maxImageCount : 8;
    els.imageCount.max = String(maxCount);
    const currentCount = Number(els.imageCount.value || '1');
    if (!Number.isFinite(currentCount) || currentCount < 1) els.imageCount.value = '1';
    if (currentCount > maxCount) els.imageCount.value = String(maxCount);
  } else {
    els.imageCount.value = '1';
  }

  const qualityOptions = Array.isArray(caps.qualityOptions) ? caps.qualityOptions : [];
  const supportsQuality = !isVideo && qualityOptions.length > 0;
  showElement(els.imageQualityWrap, supportsQuality);
  if (supportsQuality) {
    const currentQuality = String(els.imageQuality.value || '');
    const opts = ['<option value="">自动</option>']
      .concat(qualityOptions.map((q) => `<option value="${q}">${q}</option>`))
      .join('');
    els.imageQuality.innerHTML = opts;
    if (currentQuality && qualityOptions.includes(currentQuality)) {
      els.imageQuality.value = currentQuality;
    } else {
      els.imageQuality.value = '';
    }
  } else {
    els.imageQuality.value = '';
  }

  const mismatch = model && caps.supportedTasks.length && !caps.supportedTasks.includes(taskType);
  const durationConstraint = syncDurationInputForModel();
  if (mismatch) {
    els.modelCapabilityHint.textContent = `当前模型可能不支持「${taskMeta.label || taskType}」，建议更换模型。`;
    if (els.modelRoleHint) els.modelRoleHint.textContent = '';
    if (els.taskTypeGuide) els.taskTypeGuide.textContent = buildTaskTypeGuide(taskType, caps, generationMode);
    renderFieldGuide(buildFieldGuideEntries(taskType, caps, generationMode));
  } else {
    const tips = [];
    if (typeof caps.notes === 'string' && /^failed to load/i.test(caps.notes.trim())) {
      tips.push('部分参数来自模型说明推断');
    } else if (Array.isArray(caps.docsLinks) && caps.docsLinks.length > 0) {
      tips.push(`已关联 ${caps.docsLinks.length} 份文档信号`);
    }
    if (caps.supportsStoryboardPrompt && taskType === 'text_to_video') tips.push('支持 Storyboard Prompt');
    if (caps.modelSupportsIntelligentStoryboard && taskType === 'text_to_video') {
      tips.push(caps.supportsIntelligentStoryboard ? '支持智能分镜' : '模型支持智能分镜，当前 Provider/UI 未开放');
    }
    if (storyboardMode && caps.supportsStoryboardPrompt && taskType === 'text_to_video') {
      tips.push('Storyboard Prompt 只接收结构化文本分镜');
    } else if (intelligentMode && caps.supportsIntelligentStoryboard && taskType === 'text_to_video') {
      tips.push('智能分镜以 prompt + shot_type=intelligence 提交');
    } else if (usesUnifiedPrimaryImage) {
      tips.push(canEndFrame ? '图生视频支持首帧与尾帧联动' : '图生视频需要首帧/输入图');
      if (caps.supportsImageToVideoReferenceImages) {
        tips.push(caps.supportsMultipleReferenceImages ? `支持附加参考图（最多 ${caps.maxReferenceImages || '多张'}）` : '支持附加参考图');
      }
    } else {
      if (canSource && !needSource) tips.push('支持源图输入');
      if (canReference) tips.push(caps.supportsMultipleReferenceImages ? `支持多参考图（最多 ${caps.maxReferenceImages || '多张'}）` : '支持参考图');
    }
    if (canEndFrame) tips.push('支持尾帧 / 结束画面');
    if (canProviderMode) tips.push(`${caps.providerModeLabel || '生成模式'} ${caps.providerModeOptions.join('/')}`);
    if (canCameraControl) tips.push('支持显式镜头控制');
    else if (taskType === 'text_to_video' && caps.supportsCameraControls) tips.push('支持模型内置镜头能力');
    if (canOmniInputs) tips.push('支持 Omni / Elements 输入');
    if (supportsImageCount) tips.push(`支持多图输出（最多 ${els.imageCount.max} 张）`);
    if (supportsQuality) tips.push(`支持质量参数（${qualityOptions.join('/')}）`);
    if (caps.aspectRatioOptions?.length) tips.push(`支持比例 ${caps.aspectRatioOptions.join('/')}`);
    if (caps.imageSizeOptions?.length) tips.push(`支持尺寸档位 ${caps.imageSizeOptions.join('/')}`);
    if (caps.resolutionPresets?.length) tips.push(`支持分辨率预设 ${caps.resolutionPresets.slice(0, 4).join('/')}${caps.resolutionPresets.length > 4 ? '…' : ''}`);
    if (durationConstraint?.options?.length) {
      tips.push(`时长仅支持 ${durationConstraint.options.join('/')} 秒`);
    } else if (durationConstraint && (durationConstraint.minDuration !== null || durationConstraint.maxDuration !== null)) {
      const min = durationConstraint.minDuration ?? '-';
      const max = durationConstraint.maxDuration ?? '-';
      tips.push(`时长范围 ${min}-${max} 秒`);
    }
    els.modelCapabilityHint.textContent = tips.length ? `模型能力：${tips.join(' / ')}` : '';
    if (els.modelRoleHint) {
      els.modelRoleHint.textContent = buildInputRoleSummary(taskType, caps, generationMode);
    }
    if (els.taskTypeGuide) {
      els.taskTypeGuide.textContent = buildTaskTypeGuide(taskType, caps, generationMode);
    }
    renderFieldGuide(buildFieldGuideEntries(taskType, caps, generationMode));
  }

  syncResolutionOptions();
}

function renderAssets() {
  const imageAssets = state.assets.filter((a) => a.kind === 'image');
  const selectedSourceAssetId = String(els.sourceAssetSelect?.value || '').trim();
  const selectedReferenceAssetIds = new Set(Array.from(els.referenceAssetSelect?.selectedOptions || []).map((option) => option.value));
  const selectedEndFrameAssetId = String(els.endFrameAssetSelect?.value || '').trim();
  if (!state.assets.length) {
    els.assetLibrary.innerHTML = '<div class="empty-state">暂无素材</div>';
  } else {
    els.assetLibrary.innerHTML = state.assets.map((asset) => {
      const src = `/api/v1/assets/${asset.id}/content`;
      const isImage = asset.kind === 'image';
      const preview = isImage
        ? `<img src="${escapeAttr(src)}" alt="${escapeAttr(asset.originalName || asset.id)}" loading="lazy" />`
        : `<div class="asset-meta">视频素材</div>`;
      return `
      <article class="asset-card">
        ${preview}
        <div class="asset-meta">${escapeHtml(asset.originalName || asset.id)}</div>
        <div class="asset-actions">
          <button type="button" class="secondary-button" data-action="use-source" data-id="${escapeAttr(asset.id)}">设为源图</button>
          <button type="button" class="secondary-button" data-action="use-ref" data-id="${escapeAttr(asset.id)}">设为参考图</button>
          <button type="button" class="secondary-button" data-action="use-end" data-id="${escapeAttr(asset.id)}">设为尾帧</button>
          <button type="button" data-action="delete-asset" data-id="${escapeAttr(asset.id)}">删除</button>
        </div>
      </article>`;
    }).join('');
  }

  const options = ['<option value="">不使用本地图片</option>']
    .concat(imageAssets.map((a) => `<option value="${escapeAttr(a.id)}">${escapeHtml(a.originalName || a.id)}</option>`))
    .join('');
  els.sourceAssetSelect.innerHTML = options;
  els.referenceAssetSelect.innerHTML = options;
  els.endFrameAssetSelect.innerHTML = options;
  if (selectedSourceAssetId) els.sourceAssetSelect.value = selectedSourceAssetId;
  if (selectedEndFrameAssetId) els.endFrameAssetSelect.value = selectedEndFrameAssetId;
  Array.from(els.referenceAssetSelect.options || []).forEach((option) => {
    option.selected = selectedReferenceAssetIds.has(option.value);
  });
}

function getTaskLabel(type) {
  const meta = state.taskTypes.find((item) => item.value === type);
  return meta?.label || type;
}

function summarizeTaskPrompt(task) {
  const prompt = String(task?.input?.prompt || '').trim();
  if (prompt) return prompt;
  const storyboardText = String(task?.input?.storyboardText || '').trim();
  if (!storyboardText) return '';
  return storyboardText.split(/\r?\n/).find((line) => line.trim()) || '';
}

function summarizeTaskMode(task) {
  if (String(task?.input?.videoGenerationMode || '') === 'storyboard') {
    return '故事板模式';
  }
  return '';
}

function taskProgress(status) {
  const normalized = String(status || '').toLowerCase();
  if (['completed', 'succeeded'].includes(normalized)) return 100;
  if (['failed', 'canceled', 'cancelled'].includes(normalized)) return 100;
  if (normalized === 'processing' || normalized === 'running') return 60;
  if (normalized === 'queued' || normalized === 'pending') return 20;
  return 10;
}

function renderTasks() {
  if (!state.tasks.length) {
    els.tasks.innerHTML = '<div class="empty-state">暂无任务</div>';
    return;
  }

  els.tasks.innerHTML = state.tasks.map((task) => {
    const activeClass = task.id === state.selectedTaskId ? ' task-active' : '';
    const model = task.input?.model || '-';
    const status = task.status || 'unknown';
    const prompt = summarizeTaskPrompt(task);
    const mode = summarizeTaskMode(task);
    const percent = taskProgress(status);
    const localCount = Array.isArray(task.savedAssets) ? task.savedAssets.length : 0;
    const errorText = task.error?.message ? `<div class="task-error">${escapeHtml(task.error.message)}</div>` : '';
    return `
      <article class="task${activeClass}" data-task-id="${escapeAttr(task.id)}">
        <div class="task-top">
          <strong>${escapeHtml(getTaskLabel(task.type))}</strong>
          <span class="pill">${escapeHtml(status)}</span>
        </div>
        <div class="task-progress"><div class="task-progress-bar" style="width:${percent}%"></div></div>
        <div>模型：${escapeHtml(model)}${mode ? ` / ${escapeHtml(mode)}` : ''}</div>
        <div>本地保存：${localCount} 个文件</div>
        <div class="task-prompt">Prompt: ${escapeHtml(prompt || '（空）')}</div>
        ${errorText}
        <div class="config-actions">
          <button type="button" data-action="task-refresh" data-id="${escapeAttr(task.id)}">刷新状态</button>
          <button type="button" data-action="task-retry" data-id="${escapeAttr(task.id)}">重试</button>
          <button type="button" data-action="task-cancel" data-id="${escapeAttr(task.id)}">取消</button>
          <button type="button" class="secondary-button" data-action="task-preview" data-id="${escapeAttr(task.id)}">预览</button>
          <button type="button" class="secondary-button" data-action="task-delete" data-id="${escapeAttr(task.id)}">删除</button>
        </div>
      </article>`;
  }).join('');
}

function getTaskOutputUrl(task) {
  return task?.output?.video_url
    || task?.output?.url
    || task?.output?.image_url
    || task?.output?.data?.[0]?.url
    || '';
}

function renderPreview(task) {
  if (!task) {
    state.selectedTaskId = '';
    persistUiState();
    els.previewCard.classList.add('hidden');
    els.previewState.classList.remove('hidden');
    els.previewState.textContent = '选择任务后可在这里预览，并下载到浏览器或保存到本地目录。';
    return;
  }

  state.selectedTaskId = task.id;
  persistUiState();
  const outputUrl = getTaskOutputUrl(task);
  const safeOutputUrl = normalizeMediaUrl(outputUrl);
  const isVideo = task.type.includes('video');
  const status = task.status || 'unknown';
  const model = task.input?.model || '-';
  els.previewMeta.textContent = `任务类型：${getTaskLabel(task.type)} | 状态：${status} | 模型：${model}`;
  els.openRemoteResult.href = `/api/v1/tasks/${encodeURIComponent(task.id)}/browser-download`;

  if (isVideo && safeOutputUrl) {
    const video = document.createElement('video');
    video.controls = true;
    video.preload = 'metadata';
    video.src = safeOutputUrl;
    els.previewMedia.replaceChildren(video);
  } else if (!isVideo && safeOutputUrl) {
    const image = document.createElement('img');
    image.src = safeOutputUrl;
    image.alt = 'result';
    els.previewMedia.replaceChildren(image);
  } else {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = '任务尚未产出可预览资源';
    els.previewMedia.replaceChildren(empty);
  }

  els.previewState.classList.add('hidden');
  els.previewCard.classList.remove('hidden');
}

function updateCalmPanel() {
  const latest = state.tasks[0];
  const autoOn = Boolean(els.autoRefreshToggle.checked);
  els.autoRefreshStatus.textContent = autoOn ? '自动刷新已开启（15 秒）' : '自动刷新已关闭';
  if (!latest) {
    els.lastOutcome.textContent = '暂无结果';
    return;
  }
  const line = `${getTaskLabel(latest.type)} · ${latest.status || 'unknown'} · ${latest.input?.model || '-'}`;
  els.lastOutcome.textContent = line;
}

function restartAutoRefresh() {
  if (state.autoRefreshTimer) {
    clearInterval(state.autoRefreshTimer);
    state.autoRefreshTimer = null;
  }
  if (!els.autoRefreshToggle.checked) return;
  state.autoRefreshTimer = setInterval(() => {
    loadTasks(true).catch((error) => writeLog('AUTO_REFRESH_ERROR', { message: error.message }));
  }, 15000);
}

async function loadMeta() {
  const data = await api('/api/v1/meta');
  state.presets = Array.isArray(data.providerPresets) ? data.providerPresets : [];
  state.taskTypes = Array.isArray(data.taskTypes) ? data.taskTypes : [];
  renderPresets();
  renderTaskTypeOptions();
}

async function loadProfiles() {
  const profiles = await api('/api/v1/provider-profiles');
  const allProfiles = Array.isArray(profiles.data) ? profiles.data : [];
  state.profiles = allProfiles.filter((item) => {
    const label = String(item.label || '').toLowerCase();
    const base = String(item.baseUrl || '').toLowerCase();
    return label.includes('bltcy') || base.includes('bltcy.ai');
  });
  state.activeProfileId = profiles.activeProfileId || state.profiles[0]?.id || '';
  if (state.activeProfileId && !state.profiles.some((item) => item.id === state.activeProfileId)) {
    state.activeProfileId = state.profiles[0]?.id || '';
  }
  renderProfiles();
}

async function loadStudioTasks() {
  const result = await api('/api/v1/studio-tasks');
  state.studioTasks = Array.isArray(result.data) ? result.data : [];
  state.activeStudioTaskId = result.activeStudioTaskId || state.studioTasks[0]?.id || '';
  restoreSelectedTaskForActiveStudioTask();
  renderStudioTasks();
}

async function activateStudioTask(studioTaskId) {
  if (!studioTaskId) return;
  const result = await api('/api/v1/studio-tasks/activate', {
    method: 'POST',
    body: JSON.stringify({ studioTaskId })
  });
  state.activeStudioTaskId = result.activeStudioTaskId || studioTaskId;
  restoreSelectedTaskForActiveStudioTask();
  state.tasks = [];
  renderStudioTasks();
  renderTasks();
  renderPreview(null);
  restoreSelectedTaskForActiveStudioTask();
  restoreCreateDraft();
  applyCreateFormRulesV2();
  updateCalmPanel();
  await loadTasks(false);
}

async function createStudioTask() {
  const name = window.prompt('请输入新任务名称');
  if (!name || !name.trim()) return;
  const description = window.prompt('请输入任务目标或备注（可留空）') || '';
  const result = await api('/api/v1/studio-tasks', {
    method: 'POST',
    body: JSON.stringify({ name: name.trim(), description: description.trim(), makeActive: true })
  });
  state.studioTasks = Array.isArray(result.data) ? result.data : state.studioTasks;
  state.activeStudioTaskId = result.activeStudioTaskId || state.activeStudioTaskId;
  restoreSelectedTaskForActiveStudioTask();
  renderStudioTasks();
  restoreCreateDraft();
  applyCreateFormRulesV2();
  await loadTasks(false);
}

async function editCurrentStudioTask() {
  const studioTaskId = activeStudioTaskId();
  if (!studioTaskId) throw new Error('当前没有可编辑的任务');
  const current = state.studioTasks.find((item) => item.id === studioTaskId);
  if (!current) throw new Error('任务不存在');
  const name = window.prompt('修改任务名称', current.name);
  if (!name || !name.trim()) return;
  const description = window.prompt('修改任务目标或备注', current.description || '') || '';
  const result = await api('/api/v1/studio-tasks', {
    method: 'POST',
    body: JSON.stringify({
      id: current.id,
      name: name.trim(),
      description: description.trim(),
      status: current.status || 'active',
      tags: current.tags || [],
      makeActive: true
    })
  });
  state.studioTasks = Array.isArray(result.data) ? result.data : state.studioTasks;
  state.activeStudioTaskId = result.activeStudioTaskId || current.id;
  restoreSelectedTaskForActiveStudioTask();
  renderStudioTasks();
  persistUiState();
}

async function deleteCurrentStudioTask() {
  const studioTaskId = activeStudioTaskId();
  if (!studioTaskId) throw new Error('当前没有可删除的任务');
  const current = state.studioTasks.find((item) => item.id === studioTaskId);
  const ok = window.confirm(`确认删除任务「${current?.name || studioTaskId}」吗？该任务下的执行记录会保留，但将脱离该任务。`);
  if (!ok) return;
  const result = await api(`/api/v1/studio-tasks/${studioTaskId}`, { method: 'DELETE' });
  state.studioTasks = Array.isArray(result.data) ? result.data : [];
  state.activeStudioTaskId = result.activeStudioTaskId || state.studioTasks[0]?.id || '';
  restoreSelectedTaskForActiveStudioTask();
  renderStudioTasks();
  restoreCreateDraft();
  applyCreateFormRulesV2();
  await loadTasks(false);
}

async function loadRuntimeConfig() {
  const data = await api('/api/v1/config');
  fillConfigForm(data.sora2 || {});
  updateConfigStatus(data.sora2 || {});
  persistUiState();
}

async function saveConfig() {
  const payload = getConfigPayload();
  if (!payload.baseUrl) throw new Error('请先填写 Base URL');
  if (!payload.sora2ApiKey) throw new Error('请先填写 API Key');
  const result = await api('/api/v1/config', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
  state.activeProfileId = result.activeProfileId || state.activeProfileId;
  fillConfigForm(result.sora2 || {});
  updateConfigStatus(result.sora2 || {});
  await loadProfiles();
  persistUiState();
  setStatus('配置保存成功，可继续加载模型或提交任务。');
}

async function activateProfile(profileId) {
  if (!profileId) return;
  const result = await api('/api/v1/provider-profiles/activate', {
    method: 'POST',
    body: JSON.stringify({ profileId })
  });
  state.activeProfileId = result.activeProfileId || '';
  fillConfigForm(result.sora2 || {});
  updateConfigStatus(result.sora2 || {});
  renderProfiles();
  setStatus('已切换档案。');
}

async function deleteActiveProfile() {
  if (!state.activeProfileId) throw new Error('当前没有可删除档案');
  await api(`/api/v1/provider-profiles/${state.activeProfileId}`, { method: 'DELETE' });
  state.activeProfileId = '';
  await loadProfiles();
  await loadRuntimeConfig();
  setStatus('已删除当前档案。');
}

async function checkConnectivity() {
  els.connectivityStatus.textContent = '检测中...';
  try {
    const data = await api('/api/v1/connectivity', { timeoutMs: 120000 });
    const c = data.connectivity || {};
    const lines = [
      `提供商：${c.provider || '-'}`,
      `模型数：${c.modelsCount ?? '-'}`,
      `图片接口：${c.endpointStatus?.images?.reachable ? '可达' : '不可达'}`,
      `视频接口：${c.endpointStatus?.videos?.reachable ? '可达' : '不可达'}`,
      `结论：${c.message || (c.generationReady ? '可用' : '不可用')}`
    ];
    els.connectivityStatus.textContent = lines.join('\n');
  } catch (error) {
    els.connectivityStatus.textContent = `检测失败\n${error.message}`;
  }
}

async function runDiagnostics() {
  els.diagnosticsStatus.textContent = '诊断中...';
  try {
    const data = await api('/api/v1/diagnostics', { timeoutMs: 120000 });
    els.diagnosticsStatus.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    els.diagnosticsStatus.textContent = `诊断失败\n${error.message}`;
  }
}

async function loadModelsLegacy() {
  setStatus('正在加载模型...');
  try {
    const cached = await api('/api/v1/models/cache', { timeoutMs: 10000 });
    await applyLoadedModels(cached);
    setStatus(`已加载 ${state.models.length} 个模型，正在后台同步最新能力配置。`);
    setModelSyncUI({
      running: true,
      stage: 'starting',
      processed: 0,
      total: 0,
      current: '正在检查模型缓存并同步最新目录'
    });
    startSilentModelSyncLegacy();
    return;
  } catch (error) {
    setStatus('本地缓存不可用，正在从服务端重新拉取模型...');
  }

  const start = await api('/api/v1/models/sync', {
    method: 'POST',
    body: '{}',
    timeoutMs: 15000
  });
  setModelSyncUI(start.sync || {
    running: true,
    stage: 'starting',
    processed: 0,
    total: 0,
    current: ''
  });
  await pollModelSyncUntilDone();
  const result = await api('/api/v1/models/cache', { timeoutMs: 15000 });
  await applyLoadedModels(result);
  setStatus(`模型加载完成，当前共有 ${state.models.length} 个可用模型。`);
  setModelSyncUI({
    running: false,
    stage: 'completed',
    processed: state.models.length,
    total: state.models.length,
    current: '',
    modelsCount: state.models.length
  });
}

async function loadModelsV2() {
  setStatus('正在加载本地缓存模型...');
  try {
    const cached = await api('/api/v1/models/cache', { timeoutMs: 10000 });
    await applyLoadedModels(cached);
    setStatus(`已从本地缓存加载 ${state.models.length} 个模型。需要刷新时请明确选择“完全重载”或“按项目文档重建”。`);
    setModelSyncUI({
      running: false,
      stage: 'completed',
      processed: state.models.length,
      total: state.models.length,
      current: '',
      modelsCount: state.models.length,
      source: 'runtime-cache',
      mode: 'cache'
    });
    return;
  } catch {
    setStatus('本地缓存不可用，正在执行完全重载...');
  }

  await syncModelsV2('full');
}

async function syncModelsV2(mode = 'full') {
  const normalizedMode = mode === 'docs' ? 'docs' : 'full';
  const actionText = normalizedMode === 'docs' ? '根据项目文档重建模型目录' : '执行远程全量重载';
  setStatus(`正在${actionText}...`);
  const start = await api('/api/v1/models/sync', {
    method: 'POST',
    body: JSON.stringify({ mode: normalizedMode }),
    timeoutMs: 15000
  });
  setModelSyncUI(start.sync || {
    running: true,
    mode: normalizedMode,
    stage: normalizedMode === 'docs' ? 'rebuilding_docs' : 'starting',
    processed: 0,
    total: 0,
    current: '',
    source: normalizedMode === 'docs' ? 'project-docs' : 'remote-refresh'
  });
  await pollModelSyncUntilDone();
  const result = await api('/api/v1/models/cache', { timeoutMs: 15000 });
  await applyLoadedModels(result);
  setStatus(`${normalizedMode === 'docs' ? '项目文档重建' : '完全重载'}完成，当前共计 ${state.models.length} 个可用模型。`);
  setModelSyncUI({
    running: false,
    mode: normalizedMode,
    stage: 'completed',
    processed: state.models.length,
    total: state.models.length,
    current: '',
    modelsCount: state.models.length,
    source: normalizedMode === 'docs' ? 'project-docs' : 'remote-refresh'
  });
}

async function loadAssets() {
  const data = await api('/api/v1/assets');
  state.assets = Array.isArray(data.data) ? data.data : [];
  renderAssets();
}

async function loadTasks(silent = false) {
  const studioTaskId = activeStudioTaskId();
  const endpoint = studioTaskId ? `/api/v1/tasks?studioTaskId=${encodeURIComponent(studioTaskId)}` : '/api/v1/tasks';
  const data = await api(endpoint);
  state.tasks = Array.isArray(data.data) ? data.data : [];
  if (state.selectedTaskId && !state.tasks.some((item) => item.id === state.selectedTaskId)) {
    state.selectedTaskId = '';
  }
  if (!state.selectedTaskId && state.tasks.length) {
    restoreSelectedTaskForActiveStudioTask();
  }
  if (state.selectedTaskId && !state.tasks.some((item) => item.id === state.selectedTaskId)) {
    state.selectedTaskId = '';
  }
  renderTasks();
  updateCalmPanel();
  restartAutoRefresh();
  if (!silent && state.selectedTaskId) {
    const task = state.tasks.find((item) => item.id === state.selectedTaskId) || null;
    renderPreview(task);
  } else if (!silent) {
    renderPreview(null);
  }
  persistUiState();
}

function hasExplicitSizeCapability(caps) {
  if (!caps) return false;
  return Boolean(
    (Array.isArray(caps.resolutionPresets) && caps.resolutionPresets.length > 0)
    || (Array.isArray(caps.imageSizeOptions) && caps.imageSizeOptions.length > 0)
    || String(caps.defaultResolution || '').trim()
    || String(caps.defaultImageSize || '').trim()
  );
}

async function uploadImageInput(fileInput, targetSelect) {
  const file = fileInput.files?.[0];
  if (!file) return;
  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
  await api('/api/v1/assets/upload', {
    method: 'POST',
    body: JSON.stringify({
      kind: 'image',
      name: file.name,
      mimeType: file.type || 'image/png',
      dataUrl
    })
  });
  await loadAssets();
  fileInput.value = '';
  if (targetSelect) targetSelect.value = state.assets[0]?.id || '';
}

function getCreatePayload() {
  const fd = new FormData(els.createForm);
  const type = String(fd.get('type') || '');
  const model = state.modelById.get(selectedModelIdForTask(type)) || null;
  const caps = getModelCapabilities(model, type);
  const sourceImageUrlValue = String(fd.get('sourceImageUrl') || '').trim();
  const sourceAssetIdValue = String(fd.get('sourceAssetId') || '').trim();
  const referenceImageUrls = String(fd.get('referenceImageUrl') || '')
    .split(/\r?\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
  const referenceAssetIds = fd.getAll('referenceAssetId')
    .map((item) => String(item || '').trim())
    .filter(Boolean);
  const primaryImageUrl = sourceImageUrlValue || referenceImageUrls[0] || '';
  const primaryAssetId = sourceAssetIdValue || referenceAssetIds[0] || '';
  const useReferenceAsPrimaryInput = type === 'image_to_video' && !caps.supportsSourceImage && caps.supportsImageToVideoFirstFrame;
  const videoGenerationMode = String(fd.get('videoGenerationMode') || 'standard').trim() || 'standard';
  const storyboardText = String(fd.get('storyboardText') || '').trim();
  const omniImageUrls = String(fd.get('omniImageUrls') || '').split(/\r?\n|,/).map((item) => item.trim()).filter(Boolean);
  const omniVideoUrls = String(fd.get('omniVideoUrls') || '').split(/\r?\n|,/).map((item) => item.trim()).filter(Boolean);
  const elementList = String(fd.get('elementList') || '').split(/\r?\n/).map((item) => item.trim()).filter(Boolean);
  const payload = {
    studioTaskId: activeStudioTaskId() || undefined,
    type,
    prompt: String(fd.get('prompt') || '').trim(),
    videoGenerationMode,
    storyboardText,
    providerMode: String(fd.get('providerMode') || '').trim(),
    cfgScale: fd.get('cfgScale') ? Number(fd.get('cfgScale')) : undefined,
    cameraControlType: String(fd.get('cameraControlType') || '').trim(),
    cameraControlPan: fd.get('cameraControlPan') ? Number(fd.get('cameraControlPan')) : undefined,
    cameraControlTilt: fd.get('cameraControlTilt') ? Number(fd.get('cameraControlTilt')) : undefined,
    cameraControlZoom: fd.get('cameraControlZoom') ? Number(fd.get('cameraControlZoom')) : undefined,
    omniImageUrls,
    omniVideoUrls,
    elementList,
    negativePrompt: String(fd.get('negativePrompt') || '').trim(),
    model: selectedModelIdForTask(type),
    resolution: String(fd.get('resolution') || '').trim(),
    imageSize: String(fd.get('imageSize') || '').trim(),
    aspectRatio: String(fd.get('aspectRatio') || '').trim(),
    duration: fd.get('duration') ? Number(fd.get('duration')) : undefined,
    sourceImageUrl: type === 'image_to_video' ? (useReferenceAsPrimaryInput ? '' : primaryImageUrl) : sourceImageUrlValue,
    sourceAssetId: type === 'image_to_video' ? (useReferenceAsPrimaryInput ? '' : primaryAssetId) : sourceAssetIdValue,
    referenceImageUrl: type === 'image_to_video'
      ? (useReferenceAsPrimaryInput ? primaryImageUrl : '')
      : (caps.supportsMultipleReferenceImages ? '' : (referenceImageUrls[0] || '')),
    referenceImageUrls: type === 'image_to_video'
      ? undefined
      : (caps.supportsMultipleReferenceImages ? referenceImageUrls : undefined),
    referenceAssetId: type === 'image_to_video'
      ? (useReferenceAsPrimaryInput ? primaryAssetId : '')
      : (caps.supportsMultipleReferenceImages ? '' : (referenceAssetIds[0] || '')),
    referenceAssetIds: type === 'image_to_video'
      ? undefined
      : (caps.supportsMultipleReferenceImages ? referenceAssetIds : undefined),
    endFrameImageUrl: String(fd.get('endFrameImageUrl') || '').trim(),
    endFrameAssetId: String(fd.get('endFrameAssetId') || '').trim(),
    imageCount: fd.get('imageCount') ? Number(fd.get('imageCount')) : undefined,
    imageQuality: String(fd.get('imageQuality') || '').trim(),
    seed: fd.get('seed') ? Number(fd.get('seed')) : undefined,
    styleStrength: fd.get('styleStrength') ? Number(fd.get('styleStrength')) : undefined
  };

  if (caps.promptMaxLength && payload.prompt && payload.prompt.length > caps.promptMaxLength) {
    throw new Error(`当前模型提示词长度不能超过 ${caps.promptMaxLength} 字。`);
  }

  if (caps.allowCustomResolution === false && payload.imageSize && !payload.resolution) {
    payload.resolution = payload.imageSize;
  }
  if (type.includes('video') && isTierSizeModel(type, model, caps) && payload.imageSize) {
    payload.resolution = deriveResolutionFromTierAndAspectRatio(payload.imageSize, payload.aspectRatio || caps.defaultAspectRatio);
  }
  if (!hasExplicitSizeCapability(caps)) {
    delete payload.resolution;
    delete payload.imageSize;
  }
  if (!caps.supportsAspectRatio) delete payload.aspectRatio;
  if (!caps.imageSizeOptions?.length) delete payload.imageSize;
  if (!(caps.supportsImageEditSourceImage || caps.supportsImageToVideoFirstFrame || caps.supportsSourceImage)) {
    delete payload.sourceImageUrl;
    delete payload.sourceAssetId;
  }
  if (payload.videoGenerationMode === 'storyboard') {
    delete payload.sourceImageUrl;
    delete payload.sourceAssetId;
    delete payload.referenceImageUrl;
    delete payload.referenceImageUrls;
    delete payload.referenceAssetId;
    delete payload.referenceAssetIds;
    delete payload.endFrameImageUrl;
    delete payload.endFrameAssetId;
    delete payload.omniImageUrls;
    delete payload.omniVideoUrls;
    delete payload.elementList;
  }
  if (payload.videoGenerationMode === 'intelligent') {
    delete payload.storyboardText;
    delete payload.sourceImageUrl;
    delete payload.sourceAssetId;
    delete payload.referenceImageUrl;
    delete payload.referenceImageUrls;
    delete payload.referenceAssetId;
    delete payload.referenceAssetIds;
    delete payload.endFrameImageUrl;
    delete payload.endFrameAssetId;
    delete payload.omniImageUrls;
    delete payload.omniVideoUrls;
    delete payload.elementList;
  }
  if (!(caps.supportsImageToVideoReferenceImages || caps.supportsTextToImageReferenceImages || caps.supportsTextToVideoReferenceImages || caps.supportsReferenceImage)) {
    delete payload.referenceImageUrl;
    delete payload.referenceImageUrls;
    delete payload.referenceAssetId;
    delete payload.referenceAssetIds;
  }
  if (!caps.supportsImageToVideoEndFrame) {
    delete payload.endFrameImageUrl;
    delete payload.endFrameAssetId;
  }
  if (!caps.supportsProviderMode) delete payload.providerMode;
  if (!caps.supportsCfgScale) delete payload.cfgScale;
  if (!caps.supportsCameraControls) {
    delete payload.cameraControlType;
    delete payload.cameraControlPan;
    delete payload.cameraControlTilt;
    delete payload.cameraControlZoom;
  }
  if (!caps.supportsOmniInputs) {
    delete payload.omniImageUrls;
    delete payload.omniVideoUrls;
    delete payload.elementList;
  }

  if (!payload.model) throw new Error('请先选择模型。');
  if (payload.videoGenerationMode === 'storyboard' && caps.supportsStoryboardPrompt !== true) {
    throw new Error('当前模型不支持故事板模式。');
  }
  if (payload.videoGenerationMode === 'intelligent' && caps.supportsIntelligentStoryboard !== true) {
    throw new Error('当前模型或 Provider/UI 不支持智能分镜。');
  }
  if (payload.videoGenerationMode === 'storyboard') {
    if (type !== 'text_to_video') throw new Error('故事板模式仅支持文生视频。');
    if (!payload.storyboardText) throw new Error('请选择故事板模式后填写故事板内容。');
  } else {
    delete payload.storyboardText;
  }
  if (payload.videoGenerationMode === 'intelligent' && type !== 'text_to_video') {
    throw new Error('智能分镜仅支持文生视频。');
  }
  const referenceCount = []
    .concat(Array.isArray(payload.referenceImageUrls) ? payload.referenceImageUrls : [])
    .concat(Array.isArray(payload.referenceAssetIds) ? payload.referenceAssetIds : [])
    .concat(payload.referenceImageUrl || [])
    .concat(payload.referenceAssetId || [])
    .filter(Boolean)
    .length;
  if (caps.supportsMultipleReferenceImages !== true && referenceCount > 1) {
    throw new Error('当前模型仅支持一张参考图。');
  }
  if (caps.maxReferenceImages && referenceCount > caps.maxReferenceImages) {
    throw new Error(`当前模型最多支持 ${caps.maxReferenceImages} 张参考图。`);
  }
  if (type === 'image_to_video' && !payload.sourceImageUrl && !payload.sourceAssetId && !referenceCount) {
    throw new Error('图生视频必须提供一张输入图片，尾帧图是可选项。');
  }
  if (type === 'image_edit' && !payload.sourceImageUrl && !payload.sourceAssetId) {
    throw new Error('图片编辑需要提供源图片，请填写图片 URL 或选择本地图片。');
  }
  if (type !== 'image_to_video' && type !== 'image_edit' && payload.videoGenerationMode !== 'storyboard' && !payload.prompt) {
    throw new Error('请输入提示词。');
  }
  if (!type.includes('video') && payload.imageCount !== undefined) {
    if (!Number.isInteger(payload.imageCount) || payload.imageCount < 1) {
      throw new Error('图片数量必须是大于等于 1 的整数。');
    }
    if (caps.maxImageCount && payload.imageCount > caps.maxImageCount) {
      throw new Error(`图片数量不能超过 ${caps.maxImageCount} 张。`);
    }
  }

  if (payload.imageSize && caps.imageSizeOptions?.length && !caps.imageSizeOptions.includes(payload.imageSize)) {
    throw new Error(`尺寸档位仅支持 ${caps.imageSizeOptions.join('/')}`);
  }
  if (payload.aspectRatio && caps.aspectRatioOptions?.length && !caps.aspectRatioOptions.includes(payload.aspectRatio)) {
    throw new Error(`画幅比例仅支持 ${caps.aspectRatioOptions.join('/')}`);
  }
  if (payload.resolution && payload.aspectRatio && !resolutionMatchesAspectRatio(payload.resolution, payload.aspectRatio)) {
    throw new Error(`当前分辨率 ${payload.resolution} 与画幅比例 ${payload.aspectRatio} 不匹配。`);
  }

  if (type.includes('video') && isTierSizeModel(type, model, caps) && !payload.resolution) {
    throw new Error('当前模型使用尺寸档位，请先选择尺寸档位和画幅比例');
  }

  if (type.includes('video') && payload.duration !== undefined) {
    if (caps.supportsDuration === false) {
      delete payload.duration;
    } else {
      if (!Number.isFinite(payload.duration) || payload.duration <= 0) {
        throw new Error('时长必须是大于 0 的数字。');
      }
      const constraint = parseDurationConstraintFromModel(currentModel());
      if (constraint?.options?.length && !constraint.options.includes(payload.duration)) {
        throw new Error(`当前模型仅支持 ${constraint.options.join('/')} 秒时长。`);
      }
      if (!constraint?.options?.length) {
        if (constraint && constraint.minDuration !== null && payload.duration < constraint.minDuration) {
          throw new Error(`时长不能小于 ${constraint.minDuration} 秒。`);
        }
        if (constraint && constraint.maxDuration !== null && payload.duration > constraint.maxDuration) {
          throw new Error(`时长不能大于 ${constraint.maxDuration} 秒。`);
        }
      }
    }
  }

  if (type.includes('video')) {
    delete payload.imageCount;
    delete payload.imageQuality;
  }

  return payload;
}

async function submitTask() {
  const payload = getCreatePayload();
  const task = await api('/api/v1/tasks', {
    method: 'POST',
    body: JSON.stringify(payload),
    timeoutMs: 180000
  });
  state.selectedTaskId = task.id;
  await loadTasks(false);
  renderPreview(task);
}

async function saveSelectedToLocal() {
  const task = state.tasks.find((t) => t.id === state.selectedTaskId);
  if (!task) return;
  els.saveLocalResult.disabled = true;
  els.saveStatus.textContent = '正在保存...';
  try {
    const isVideo = task.type.includes('video');
    const sourceUrl = task.output?.image_url || task.output?.data?.[0]?.url || '';
    const data = await api('/api/v1/assets/save', {
      method: 'POST',
      body: JSON.stringify({
        taskId: task.id,
        kind: isVideo ? 'video' : 'image',
        providerTaskId: isVideo ? task.providerTaskId : '',
        sourceUrl: isVideo ? '' : sourceUrl,
        fileStem: `${task.input?.model || 'asset'}-${task.id}`
      }),
      timeoutMs: 180000
    });
    els.saveStatus.textContent = `保存成功：${data.saved.path}`;
    await loadTasks(true);
  } catch (error) {
    els.saveStatus.textContent = normalizeUserErrorMessage(error, '保存失败，请稍后重试。');
  } finally {
    els.saveLocalResult.disabled = false;
  }
}

async function taskAction(action, id) {
  if (action === 'task-preview') {
    const latest = await api(`/api/v1/tasks/${id}`);
    renderPreview(latest);
    renderTasks();
    return;
  }
  if (action === 'task-refresh') {
    await api(`/api/v1/tasks/${id}`);
    await loadTasks(false);
    return;
  }
  if (action === 'task-retry') {
    await api(`/api/v1/tasks/${id}/retry`, { method: 'POST', body: '{}' });
    await loadTasks(false);
    return;
  }
  if (action === 'task-cancel') {
    await api(`/api/v1/tasks/${id}/cancel`, { method: 'POST', body: '{}' });
    await loadTasks(false);
    return;
  }
  if (action === 'task-delete') {
    await api(`/api/v1/tasks/${id}`, { method: 'DELETE' });
    if (state.selectedTaskId === id) {
      state.selectedTaskId = '';
      renderPreview(null);
    }
    await loadTasks(false);
  }
}

async function assetAction(action, id) {
  const taskType = String(els.typeSelect?.value || '');
  if (action === 'delete-asset') {
    await api(`/api/v1/assets/${id}`, { method: 'DELETE' });
    await loadAssets();
    return;
  }
  if (action === 'use-source') els.sourceAssetSelect.value = id;
  if (action === 'use-ref') {
    if (taskType === 'image_to_video' && els.sourceAssetSelect) {
      els.sourceAssetSelect.value = id;
    } else if (els.referenceAssetSelect?.multiple) {
      const option = Array.from(els.referenceAssetSelect.options || []).find((item) => item.value === id);
      if (option) option.selected = true;
    } else if (els.referenceAssetSelect) {
      els.referenceAssetSelect.value = id;
    }
  }
  if (action === 'use-end') els.endFrameAssetSelect.value = id;
  persistUiState();
}

function bindEvents() {
  els.toggleAdvanced.addEventListener('click', () => {
    const hidden = els.advancedConfig.classList.toggle('hidden');
    els.toggleAdvanced.textContent = hidden ? '展开高级设置' : '收起高级设置';
  });

  els.providerPreset.addEventListener('change', () => applyPreset(els.providerPreset.value));

  els.profileSelect.addEventListener('change', () => {
    activateProfile(els.profileSelect.value).catch((error) => alert(error.message));
  });

  els.deleteProfile.addEventListener('click', () => {
    deleteActiveProfile().catch((error) => alert(error.message));
  });

  els.configForm.addEventListener('submit', (event) => {
    event.preventDefault();
    saveConfig().catch((error) => {
      if (els.configDraftStatus) {
        els.configDraftStatus.textContent = `配置保存失败：${error.message}`;
        els.configDraftStatus.classList.add('error-text');
      }
      alert(error.message);
    });
  });
  els.configForm.addEventListener('input', () => {
    persistUiState();
    updateConfigDirtyState();
  });
  els.configForm.addEventListener('change', () => {
    persistUiState();
    updateConfigDirtyState();
  });
  els.resetConfigDraft?.addEventListener('click', () => {
    loadRuntimeConfig().catch((error) => alert(error.message));
  });

  els.checkConnectivity.addEventListener('click', () => {
    checkConnectivity().catch((error) => alert(error.message));
  });
  els.runDiagnostics.addEventListener('click', () => {
    runDiagnostics().catch((error) => alert(error.message));
  });
  els.loadModels.addEventListener('click', () => {
    loadModelsV2().catch((error) => {
      setModelSyncUI({
        running: false,
        stage: 'failed',
        processed: 0,
        total: 0,
        current: '',
        error: error.message
      });
      alert(error.message);
    });
  });
  els.reloadModelsFull?.addEventListener('click', () => {
    syncModelsV2('full').catch((error) => {
      setModelSyncUI({
        running: false,
        mode: 'full',
        stage: 'failed',
        processed: 0,
        total: 0,
        current: '',
        error: error.message,
        source: 'remote-refresh'
      });
      alert(error.message);
    });
  });
  els.reloadModelsFromDocs?.addEventListener('click', () => {
    syncModelsV2('docs').catch((error) => {
      setModelSyncUI({
        running: false,
        mode: 'docs',
        stage: 'failed',
        processed: 0,
        total: 0,
        current: '',
        error: error.message,
        source: 'project-docs'
      });
      alert(error.message);
    });
  });

  els.typeSelect.addEventListener('change', () => {
    refreshCreateModelOptions().then(() => {
      renderModelPanel();
      applyCreateFormRulesV2();
      persistUiState();
    });
  });

  els.imageModel.addEventListener('change', () => {
    renderModelPanel();
    applyCreateFormRulesV2();
    persistUiState();
  });
  els.videoModel.addEventListener('change', () => {
    renderModelPanel();
    applyCreateFormRulesV2();
    persistUiState();
  });
  els.videoGenerationMode?.addEventListener('change', () => {
    syncStoryboardMode();
    persistUiState();
  });
  els.addStoryboardShot?.addEventListener('click', () => {
    const shots = storyboardShotsFromEditor();
    shots.push(createStoryboardShot({ title: `镜头 ${shots.length + 1}` }));
    renderStoryboardEditor(shots);
    persistUiState();
  });
  els.storyboardEditor?.addEventListener('input', () => {
    syncStoryboardTextFromEditor();
    persistUiState();
  });
  els.storyboardEditor?.addEventListener('click', (event) => {
    const target = event.target.closest('[data-storyboard-action]');
    if (!target) return;
    const action = String(target.dataset.storyboardAction || '');
    const index = Number(target.dataset.storyboardIndex || '-1');
    const shots = storyboardShotsFromEditor();
    if (index < 0 || index >= shots.length) return;
    if (action === 'remove') {
      shots.splice(index, 1);
    } else if (action === 'duplicate') {
      shots.splice(index + 1, 0, createStoryboardShot(shots[index]));
    } else if (action === 'move-up' && index > 0) {
      [shots[index - 1], shots[index]] = [shots[index], shots[index - 1]];
    } else if (action === 'move-down' && index < shots.length - 1) {
      [shots[index + 1], shots[index]] = [shots[index], shots[index + 1]];
    } else {
      return;
    }
    renderStoryboardEditor(shots);
    persistUiState();
  });

  els.resolutionPreset.addEventListener('change', () => {
    if (els.resolutionPreset.value === '__custom__') return;
    els.resolutionInput.value = els.resolutionPreset.value;
    persistUiState();
  });

  els.aspectRatio?.addEventListener('change', () => {
    syncResolutionOptions();
    persistUiState();
  });

  els.imageSize?.addEventListener('change', () => {
    syncResolutionOptions();
    persistUiState();
  });

  els.resolutionInput.addEventListener('input', () => {
    const value = String(els.resolutionInput.value || '').trim();
    const options = Array.from(els.resolutionPreset.options).map((o) => o.value);
    els.resolutionPreset.value = options.includes(value) ? value : '__custom__';
    persistUiState();
  });
  els.durationInput?.addEventListener('blur', () => {
    syncDurationInputForModel();
    persistUiState();
  });
  els.durationInput?.addEventListener('input', () => {
    syncDurationValueMirror();
  });
  els.durationSelect?.addEventListener('change', () => {
    syncDurationValueMirror();
    persistUiState();
  });
  els.createForm.addEventListener('input', () => {
    persistUiState();
  });
  els.createForm.addEventListener('change', () => {
    persistUiState();
  });

  els.sourceUploadInput.addEventListener('change', () => {
    uploadImageInput(els.sourceUploadInput, els.sourceAssetSelect).catch((error) => alert(error.message));
  });
  els.referenceUploadInput.addEventListener('change', () => {
    uploadImageInput(els.referenceUploadInput, els.referenceAssetSelect).catch((error) => alert(error.message));
  });
  els.endFrameUploadInput.addEventListener('change', () => {
    uploadImageInput(els.endFrameUploadInput, els.endFrameAssetSelect).catch((error) => alert(error.message));
  });
  els.uploadLocalImage.addEventListener('click', () => {
    uploadImageInput(els.localImageInput, null).catch((error) => alert(error.message));
  });

  els.createForm.addEventListener('submit', (event) => {
    event.preventDefault();
    setSubmitStatus('');
    setStatus('任务提交中...');
    submitTask()
      .then(() => {
        setSubmitStatus('任务已提交，正在队列中处理。');
        setStatus('任务已提交，正在队列中处理。');
      })
      .catch((error) => {
        const message = normalizeUserErrorMessage(error, '任务提交失败，请检查必填项和模型配置。');
        setSubmitStatus(message, true);
        setStatus('任务提交失败');
      });
  });

  els.saveLocalResult.addEventListener('click', () => {
    saveSelectedToLocal().catch((error) => alert(error.message));
  });

  els.refreshTasks.addEventListener('click', () => {
    loadTasks(false).catch((error) => alert(error.message));
  });

  els.studioTaskSearch?.addEventListener('input', () => {
    state.studioTaskSearchTerm = String(els.studioTaskSearch.value || '').trim();
    renderStudioTasks();
  });
  els.studioTaskList?.addEventListener('click', (event) => {
    const card = event.target.closest('[data-studio-task-id]');
    if (!card) return;
    activateStudioTask(card.dataset.studioTaskId).catch((error) => alert(error.message));
  });
  els.createStudioTask?.addEventListener('click', () => {
    createStudioTask().catch((error) => alert(error.message));
  });
  els.editStudioTask?.addEventListener('click', () => {
    editCurrentStudioTask().catch((error) => alert(error.message));
  });
  els.deleteStudioTask?.addEventListener('click', () => {
    deleteCurrentStudioTask().catch((error) => alert(error.message));
  });

  els.tasks.addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (!target) return;
    const action = target.dataset.action;
    const id = target.dataset.id;
    if (!action || !id) return;
    taskAction(action, id).catch((error) => alert(error.message));
  });

  els.assetLibrary.addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (!target) return;
    const action = target.dataset.action;
    const id = target.dataset.id;
    if (!action || !id) return;
    assetAction(action, id).catch((error) => alert(error.message));
  });

  els.autoRefreshToggle.addEventListener('change', () => {
    restartAutoRefresh();
    updateCalmPanel();
    persistUiState();
  });
  els.focusLatestTask.addEventListener('click', () => {
    const latest = state.tasks[0];
    if (!latest) return;
    taskAction('task-preview', latest.id).catch((error) => alert(error.message));
  });
  els.clearDebug.addEventListener('click', () => {
    state.logs = [];
    els.debugPanel.textContent = '暂无日志';
  });
}

async function init() {
  bindEvents();
  try {
    await loadMeta();
    if (els.providerPreset.options.length) {
      els.providerPreset.value = els.providerPreset.options[0].value;
      applyPreset(els.providerPreset.value);
    }

    await Promise.all([loadProfiles(), loadRuntimeConfig(), loadStudioTasks()]);
    restoreUiPreferences();
    await Promise.all([loadAssets(), loadTasks(true)]);
    restoreCreateDraft();
    applyCreateFormRulesV2();
    setStatus('初始化完成，可开始配置和创建任务。');
  } catch (error) {
    writeLog('INIT_ERROR', { message: error.message });
    setStatus(`初始化失败：${error.message}`);
  }
}

init();
