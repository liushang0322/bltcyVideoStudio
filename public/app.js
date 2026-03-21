const els = {
  configForm: document.getElementById('configForm'),
  createForm: document.getElementById('createForm'),
  providerPreset: document.getElementById('providerPreset'),
  profileSelect: document.getElementById('profileSelect'),
  deleteProfile: document.getElementById('deleteProfile'),
  toggleAdvanced: document.getElementById('toggleAdvanced'),
  advancedConfig: document.getElementById('advancedConfig'),
  configStatus: document.getElementById('configStatus'),
  checkConnectivity: document.getElementById('checkConnectivity'),
  runDiagnostics: document.getElementById('runDiagnostics'),
  connectivityStatus: document.getElementById('connectivityStatus'),
  diagnosticsStatus: document.getElementById('diagnosticsStatus'),
  loadModels: document.getElementById('loadModels'),
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
  sourceImageWrap: document.getElementById('sourceImageWrap'),
  referenceImageWrap: document.getElementById('referenceImageWrap'),
  sourceImageUrl: document.getElementById('sourceImageUrl'),
  referenceImageUrl: document.getElementById('referenceImageUrl'),
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
  modelCapabilityViewCache: new Map()
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
  writeUiState({
    ...current,
    autoRefreshEnabled: Boolean(els.autoRefreshToggle?.checked),
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

function renderModelSummary(container, models, { limit = 12 } = {}) {
  if (!container) return;
  const list = Array.isArray(models) ? models.slice(0, limit) : [];
  if (!list.length) {
    container.innerHTML = '<div class="model-chip model-chip-muted">暂无</div>';
    return;
  }
  const chips = list
    .map((model) => `<div class="model-chip" title="${model.id}">${model.id}</div>`)
    .join('');
  const remain = Array.isArray(models) && models.length > limit
    ? `<div class="model-chip model-chip-muted">+${models.length - limit}</div>`
    : '';
  container.innerHTML = chips + remain;
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
  if (!sync) {
    els.modelSyncPanel.classList.add('hidden');
    els.loadModels?.classList.remove('button-busy');
    els.loadModels?.removeAttribute('disabled');
    els.loadModels.textContent = '加载模型';
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
    writing_cache: '正在写入本地缓存',
    completed: '模型目录已更新完成',
    failed: '模型目录更新失败'
  };

  els.modelSyncPanel.classList.remove('hidden');
  els.modelSyncTitle.textContent = stageTextMap[sync.stage] || '正在处理模型目录';
  els.modelSyncMeta.textContent = total > 0 ? `${processed} / ${total}` : (sync.modelsCount ? `${sync.modelsCount} 个模型` : '处理中');
  els.modelSyncBar.style.width = `${percent}%`;
  els.modelSyncMessage.textContent = sync.error
    || sync.current
    || (sync.stage === 'completed' ? `已完成，本次共同步 ${sync.modelsCount || 0} 个模型。` : '请稍候，页面会自动刷新能力配置。');

  if (sync.running) {
    els.loadModels?.classList.add('button-busy');
    els.loadModels?.setAttribute('disabled', 'disabled');
    els.loadModels.textContent = '同步中...';
  } else {
    els.loadModels?.classList.remove('button-busy');
    els.loadModels?.removeAttribute('disabled');
    els.loadModels.textContent = '加载模型';
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

function startSilentModelSync() {
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
    body: summarizeForLog(summarizeBody(body))
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
        details: err.details
      });
      throw err;
    }
    writeLog('RESPONSE_OK', {
      method,
      path,
      status: response.status,
      data: summarizeApiPayloadForLog(path, json)
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

function fillConfigForm(config) {
  if (!config) return;
  setInputValue('providerLabel', config.providerLabel);
  setInputValue('providerType', config.providerType || 'compatible');
  setInputValue('sora2ApiKey', config.apiKey || '');
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
}

function getConfigPayload() {
  const fd = new FormData(els.configForm);
  return {
    profileId: state.activeProfileId || undefined,
    profileLabel: String(fd.get('providerLabel') || '').trim() || 'BLTCY',
    providerLabel: String(fd.get('providerLabel') || '').trim() || 'BLTCY',
    providerType: String(fd.get('providerType') || 'compatible'),
    sora2ApiKey: String(fd.get('sora2ApiKey') || '').trim(),
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
    return `<option value="${preset.key}">${preset.providerLabel}（${preset.baseUrl}）</option>`;
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
    return `<option value="${profile.id}" ${selected}>${profile.label}${suffix}</option>`;
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
        ? `<div class="studio-task-tags">${item.tags.map((tag) => `<span class="pill">${tag}</span>`).join('')}</div>`
        : '';
      return `
        <article class="studio-task-card${active}" data-studio-task-id="${item.id}">
          <div class="studio-task-card-top">
            <strong>${item.name}</strong>
            <span class="pill">${item.status || 'active'}</span>
          </div>
          <div class="studio-task-card-meta">${meta.filter(Boolean).join(' · ')}</div>
          <div class="studio-task-card-desc">${desc || '暂无任务描述'}</div>
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

  renderModelSummary(els.imageModelList, imageModels, { limit });
  renderModelSummary(els.videoModelList, videoModels, { limit });
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

function syncDurationInputForModel() {
  const durationInput = els.createForm?.elements?.duration;
  if (!durationInput) return null;
  const taskType = currentTaskType();
  if (!taskType.includes('video')) {
    durationInput.removeAttribute('min');
    durationInput.removeAttribute('max');
    durationInput.removeAttribute('step');
    return null;
  }

  const constraint = parseDurationConstraintFromModel(currentModel());
  const current = Number(durationInput.value);

  durationInput.step = '1';
  durationInput.min = '1';
  durationInput.max = '60';

  if (!constraint) return null;

  if (constraint.options.length) {
    durationInput.min = String(constraint.options[0]);
    durationInput.max = String(constraint.options[constraint.options.length - 1]);
    if (!Number.isFinite(current) || !constraint.options.includes(current)) {
      durationInput.value = String(constraint.options[0]);
    }
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
      supportsStoryboard: false,
      supportsEndFrame: false,
      supportsNegativePrompt: false,
      supportsProviderMode: false,
      providerModeOptions: [],
      supportsCfgScale: false,
      promptMaxLength: null,
      supportsElements: false,
      supportsOmniImageList: false,
      supportsOmniVideoList: false,
      supportsImageCount: false,
      maxImageCount: null,
      supportsStructuredPrompt: true,
      supportsCameraControls: false,
      supportsDuration: false,
      supportsAspectRatio: false,
      supportsPromptOptimize: false,
      promptOptimizePath: '',
      chatCompletionsPath: '',
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
    supportsStoryboard: Boolean(caps.supportsStoryboard),
    supportsEndFrame: Boolean(caps.supportsEndFrame),
    supportsNegativePrompt: Boolean(caps.supportsNegativePrompt),
    supportsProviderMode: Boolean(caps.supportsProviderMode),
    providerModeOptions: Array.isArray(caps.providerModeOptions) ? caps.providerModeOptions : [],
    supportsCfgScale: Boolean(caps.supportsCfgScale),
    promptMaxLength: positiveNumberOrNull(caps.promptMaxLength),
    supportsElements: Boolean(caps.supportsElements),
    supportsOmniImageList: Boolean(caps.supportsOmniImageList),
    supportsOmniVideoList: Boolean(caps.supportsOmniVideoList),
    supportsImageCount: caps.supportsImageCount === undefined ? inferredSupportsImageCount : Boolean(caps.supportsImageCount),
    maxImageCount: positiveNumberOrNull(caps.maxImageCount),
    supportsStructuredPrompt: true,
    supportsCameraControls: caps.supportsCameraControls === undefined ? inferredVideoModel : Boolean(caps.supportsCameraControls),
    supportsDuration: Boolean(
      caps.supportsDuration
      && (
        (Array.isArray(caps.durationOptions) && caps.durationOptions.length > 0)
        || positiveNumberOrNull(caps.minDuration) !== null
        || positiveNumberOrNull(caps.maxDuration) !== null
      )
    ),
    supportsAspectRatio: caps.supportsAspectRatio === true || (Array.isArray(caps.aspectRatioOptions) && caps.aspectRatioOptions.length > 0),
    supportsPromptOptimize,
    promptOptimizePath,
    chatCompletionsPath,
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
  state.modelCapabilityViewCache.set(cacheKey, result);
  return result;
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
  const supportsStoryboard = taskType === 'text_to_video' && caps.supportsStoryboard;
  showElement(els.storyboardPanel, supportsStoryboard);
  if (!supportsStoryboard) {
    if (els.videoGenerationMode) els.videoGenerationMode.value = 'standard';
    if (els.storyboardText) els.storyboardText.value = '';
    if (els.storyboardTimeline) els.storyboardTimeline.innerHTML = '';
    if (els.storyboardPreview) els.storyboardPreview.textContent = '';
    if (els.storyboardEditor) els.storyboardEditor.innerHTML = '';
    showElement(els.storyboardWorkspace, false);
    if (els.prompt) els.prompt.disabled = false;
    return;
  }
  const storyboardMode = String(els.videoGenerationMode?.value || 'standard') === 'storyboard';
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

function applyCreateFormRules() {
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
  const canEndFrame = isImageToVideo && (caps.supportsEndFrame || true);

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
  const canPrimaryImage = isImageEdit || isImageToVideo || caps.supportsSourceImage || caps.supportsReferenceImage;
  const canSource = usesUnifiedPrimaryImage ? canPrimaryImage : (isImageEdit || caps.supportsSourceImage);
  const canReference = caps.supportsReferenceImage;
  const canEndFrame = isImageToVideo && caps.supportsEndFrame;
  const canProviderMode = isVideo && caps.supportsProviderMode && Array.isArray(caps.providerModeOptions) && caps.providerModeOptions.length > 0;
  const canCfgScale = isVideo && caps.supportsCfgScale;
  const canCameraControl = taskType === 'text_to_video' && caps.supportsCameraControls;
  const canOmniInputs = taskType === 'text_to_video' && (caps.supportsElements || caps.supportsOmniImageList || caps.supportsOmniVideoList);
  const storyboardMode = String(els.videoGenerationMode?.value || 'standard') === 'storyboard';
  const hidesVisualInputsForStoryboard = taskType === 'text_to_video' && storyboardMode && caps.supportsStoryboard;
  const showReferenceInputs = !usesUnifiedPrimaryImage && canReference;
  if (usesUnifiedPrimaryImage) {
    normalizeImageToVideoPrimaryInputs();
    setFieldLabel(els.sourceImageWrap, '输入图片 URL');
    setFieldLabel(els.sourceAssetWrap, '本地输入图片');
    setFieldLabel(els.sourceUploadWrap, '上传输入图片');
    if (els.sourceImageUrl) els.sourceImageUrl.placeholder = '必填，填写可访问的输入图片地址';
  } else {
    setFieldLabel(els.sourceImageWrap, '源图 URL');
    setFieldLabel(els.sourceAssetWrap, '本地源图');
    setFieldLabel(els.sourceUploadWrap, '上传源图');
    if (els.sourceImageUrl) els.sourceImageUrl.placeholder = '可选，填写可访问的图片地址';
  }
  if (els.referenceAssetSelect) {
    const supportsMultipleReferenceImages = Boolean(caps.supportsMultipleReferenceImages);
    els.referenceAssetSelect.multiple = supportsMultipleReferenceImages;
    els.referenceAssetSelect.size = supportsMultipleReferenceImages ? Math.min(caps.maxReferenceImages || 4, 4) : 1;
  }
  if (els.referenceImageUrl) {
    els.referenceImageUrl.placeholder = caps.supportsMultipleReferenceImages
      ? '可选，每行一个 URL，用于约束主体或风格'
      : '可选，用于约束主体或风格';
  }

  showElement(els.sourceImageWrap, canSource && !hidesVisualInputsForStoryboard);
  showElement(els.sourceAssetWrap, canSource && !hidesVisualInputsForStoryboard);
  showElement(els.sourceUploadWrap, canSource && !hidesVisualInputsForStoryboard);
  showElement(els.referenceImageWrap, showReferenceInputs && !hidesVisualInputsForStoryboard);
  showElement(els.referenceAssetWrap, showReferenceInputs && !hidesVisualInputsForStoryboard);
  showElement(els.referenceUploadWrap, showReferenceInputs && !hidesVisualInputsForStoryboard);
  showElement(els.endFrameGroup, canEndFrame && !hidesVisualInputsForStoryboard);
  showElement(els.endFrameUploadWrap, canEndFrame && !hidesVisualInputsForStoryboard);
  showElement(els.videoAdvancedRow, (canProviderMode || canCfgScale) && !hidesVisualInputsForStoryboard);
  showElement(els.providerModeWrap, canProviderMode && !hidesVisualInputsForStoryboard);
  showElement(els.cfgScaleWrap, canCfgScale && !hidesVisualInputsForStoryboard);
  showElement(els.cameraControlGroup, canCameraControl && !hidesVisualInputsForStoryboard);
  showElement(els.omniInputsGroup, canOmniInputs && !hidesVisualInputsForStoryboard);
  showElement(els.negativePrompt?.closest('label'), Boolean(caps.supportsNegativePrompt));
  if (canProviderMode && els.providerMode) {
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
  if (hidesVisualInputsForStoryboard) {
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
  } else {
    const tips = [];
    if (storyboardMode && caps.supportsStoryboard && taskType === 'text_to_video') {
      tips.push('故事板模式为纯文本分镜，不支持图片输入');
    } else if (usesUnifiedPrimaryImage) {
      tips.push('图生视频需要输入图片');
    } else {
      if (canSource && !needSource) tips.push('支持源图');
      if (canReference) tips.push(caps.supportsMultipleReferenceImages ? `支持多参考图（最多 ${caps.maxReferenceImages || '多张'}）` : '支持参考图');
    }
    if (caps.supportsStoryboard && taskType === 'text_to_video') tips.push('支持故事板模式');
    if (canEndFrame) tips.push('支持尾帧');
    if (canProviderMode) tips.push(`支持模式 ${caps.providerModeOptions.join('/')}`);
    if (canCameraControl) tips.push('支持镜头控制');
    if (canOmniInputs) tips.push('支持 Omni 元素输入');
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
        ? `<img src="${src}" alt="${asset.originalName || asset.id}" loading="lazy" />`
        : `<div class="asset-meta">视频素材</div>`;
      return `
      <article class="asset-card">
        ${preview}
        <div class="asset-meta">${asset.originalName || asset.id}</div>
        <div class="asset-actions">
          <button type="button" class="secondary-button" data-action="use-source" data-id="${asset.id}">设为源图</button>
          <button type="button" class="secondary-button" data-action="use-ref" data-id="${asset.id}">设为参考图</button>
          <button type="button" class="secondary-button" data-action="use-end" data-id="${asset.id}">设为尾帧</button>
          <button type="button" data-action="delete-asset" data-id="${asset.id}">删除</button>
        </div>
      </article>`;
    }).join('');
  }

  const options = ['<option value="">不使用本地图片</option>']
    .concat(imageAssets.map((a) => `<option value="${a.id}">${a.originalName || a.id}</option>`))
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
    const errorText = task.error?.message ? `<div class="task-error">${task.error.message}</div>` : '';
    return `
      <article class="task${activeClass}" data-task-id="${task.id}">
        <div class="task-top">
          <strong>${getTaskLabel(task.type)}</strong>
          <span class="pill">${status}</span>
        </div>
        <div class="task-progress"><div class="task-progress-bar" style="width:${percent}%"></div></div>
        <div>模型：${model}${mode ? ` / ${mode}` : ''}</div>
        <div>本地保存：${localCount} 个文件</div>
        <div class="task-prompt">Prompt: ${prompt || '（空）'}</div>
        ${errorText}
        <div class="config-actions">
          <button type="button" data-action="task-refresh" data-id="${task.id}">刷新状态</button>
          <button type="button" data-action="task-retry" data-id="${task.id}">重试</button>
          <button type="button" data-action="task-cancel" data-id="${task.id}">取消</button>
          <button type="button" class="secondary-button" data-action="task-preview" data-id="${task.id}">预览</button>
          <button type="button" class="secondary-button" data-action="task-delete" data-id="${task.id}">删除</button>
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
  const isVideo = task.type.includes('video');
  const status = task.status || 'unknown';
  const model = task.input?.model || '-';
  els.previewMeta.textContent = `任务类型：${getTaskLabel(task.type)} | 状态：${status} | 模型：${model}`;
  els.openRemoteResult.href = `/api/v1/tasks/${task.id}/browser-download`;

  if (isVideo && outputUrl) {
    els.previewMedia.innerHTML = `<video controls preload="metadata" src="${outputUrl}"></video>`;
  } else if (!isVideo && outputUrl) {
    els.previewMedia.innerHTML = `<img src="${outputUrl}" alt="result" />`;
  } else {
    els.previewMedia.innerHTML = '<div class="empty-state">任务尚未产出可预览资源</div>';
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

async function loadModels() {
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
    startSilentModelSync();
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
  const useReferenceAsPrimaryInput = type === 'image_to_video' && !caps.supportsSourceImage && caps.supportsReferenceImage;
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
  if (!(type === 'image_edit' || type === 'image_to_video' || caps.supportsSourceImage)) {
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
  }
  if (!caps.supportsReferenceImage) {
    delete payload.referenceImageUrl;
    delete payload.referenceImageUrls;
    delete payload.referenceAssetId;
    delete payload.referenceAssetIds;
  }
  if (!(type === 'image_to_video' && caps.supportsEndFrame)) {
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
  if (!(caps.supportsElements || caps.supportsOmniImageList || caps.supportsOmniVideoList)) {
    delete payload.omniImageUrls;
    delete payload.omniVideoUrls;
    delete payload.elementList;
  }

  if (!payload.model) throw new Error('请先选择模型。');
  if (payload.videoGenerationMode === 'storyboard' && caps.supportsStoryboard !== true) {
    throw new Error('当前模型不支持故事板模式。');
  }
  if (payload.videoGenerationMode === 'storyboard') {
    if (type !== 'text_to_video') throw new Error('故事板模式仅支持文生视频。');
    if (!payload.storyboardText) throw new Error('请选择故事板模式后填写故事板内容。');
  } else {
    delete payload.storyboardText;
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
    saveConfig().catch((error) => alert(error.message));
  });

  els.checkConnectivity.addEventListener('click', () => {
    checkConnectivity().catch((error) => alert(error.message));
  });
  els.runDiagnostics.addEventListener('click', () => {
    runDiagnostics().catch((error) => alert(error.message));
  });
  els.loadModels.addEventListener('click', () => {
    loadModels().catch((error) => {
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

  els.typeSelect.addEventListener('change', () => {
    refreshCreateModelOptions().then(() => {
      applyCreateFormRulesV2();
      persistUiState();
    });
  });

  els.imageModel.addEventListener('change', () => {
    applyCreateFormRulesV2();
    persistUiState();
  });
  els.videoModel.addEventListener('change', () => {
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
  els.createForm.elements.duration?.addEventListener('blur', () => {
    syncDurationInputForModel();
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
  restoreUiPreferences();
  try {
    await loadMeta();
    if (els.providerPreset.options.length) {
      els.providerPreset.value = els.providerPreset.options[0].value;
      applyPreset(els.providerPreset.value);
    }

    await Promise.all([loadProfiles(), loadRuntimeConfig(), loadStudioTasks()]);
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
