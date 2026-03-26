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
  topRunningCount: document.getElementById('topRunningCount'),
  topRunningBar: document.getElementById('topRunningBar'),
  topBaseUrl: document.getElementById('topBaseUrl'),
  topApiKey: document.getElementById('topApiKey'),
  topProxyUrl: document.getElementById('topProxyUrl'),
  topConnectivityIndicator: document.getElementById('topConnectivityIndicator'),
  topConnectivityDot: document.getElementById('topConnectivityDot'),
  topConnectivityLabel: document.getElementById('topConnectivityLabel'),
  topRunDiagnostics: document.getElementById('topRunDiagnostics'),
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
  imageToVideoPromptGuide: document.getElementById('imageToVideoPromptGuide'),
  imageToVideoPromptSummary: document.getElementById('imageToVideoPromptSummary'),
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
  capabilityFieldLayout: document.getElementById('capabilityFieldLayout'),
  capabilityBasicFields: document.getElementById('capabilityBasicFields'),
  capabilityAdvancedFields: document.getElementById('capabilityAdvancedFields'),
  capabilityExpertFields: document.getElementById('capabilityExpertFields'),
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
  imageToVideoInputPanel: document.getElementById('imageToVideoInputPanel'),
  imageToVideoInputSummary: document.getElementById('imageToVideoInputSummary'),
  imageToVideoSequenceWorkspace: document.getElementById('imageToVideoSequenceWorkspace'),
  imageToVideoLocalWorkspace: document.getElementById('imageToVideoLocalWorkspace'),
  imageToVideoUrlWorkspace: document.getElementById('imageToVideoUrlWorkspace'),
  soraWorkflowPanel: document.getElementById('soraWorkflowPanel'),
  soraWorkflowSummary: document.getElementById('soraWorkflowSummary'),
  soraSubmitPanel: document.getElementById('soraSubmitPanel'),
  soraSubmitSummary: document.getElementById('soraSubmitSummary'),
  soraSubmitTags: document.getElementById('soraSubmitTags'),
  reuseSummaryPanel: document.getElementById('reuseSummaryPanel'),
  reuseSummaryText: document.getElementById('reuseSummaryText'),
  reuseSummaryTags: document.getElementById('reuseSummaryTags'),
  referenceAssetHelp: document.getElementById('referenceAssetHelp'),
  referenceUploadHelp: document.getElementById('referenceUploadHelp'),
  sourceAssetWrap: document.getElementById('sourceAssetWrap'),
  referenceAssetWrap: document.getElementById('referenceAssetWrap'),
  sourceUploadWrap: document.getElementById('sourceUploadWrap'),
  referenceUploadWrap: document.getElementById('referenceUploadWrap'),
  sourceAssetSelect: document.getElementById('sourceAssetSelect'),
  referenceAssetSelect: document.getElementById('referenceAssetSelect'),
  sourceUploadInput: document.getElementById('sourceUploadInput'),
  referenceUploadInput: document.getElementById('referenceUploadInput'),
  endFrameGroup: document.getElementById('endFrameGroup'),
  endFrameImageWrap: document.getElementById('endFrameImageWrap'),
  endFrameAssetWrap: document.getElementById('endFrameAssetWrap'),
  endFrameUploadWrap: document.getElementById('endFrameUploadWrap'),
  endFrameUploadLabel: document.getElementById('endFrameUploadLabel'),
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
  previewTags: document.getElementById('previewTags'),
  previewMedia: document.getElementById('previewMedia'),
  openRemoteResult: document.getElementById('openRemoteResult'),
  taskComparePanel: document.getElementById('taskComparePanel'),
  taskCompareSummary: document.getElementById('taskCompareSummary'),
  taskCompareGrid: document.getElementById('taskCompareGrid'),
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
  focusLatestTask: document.getElementById('focusLatestTask'),
  productModeBar: document.getElementById('productModeBar'),
  quickJumpBar: document.getElementById('quickJumpBar'),
  productModeHint: document.getElementById('productModeHint'),
  modeCreator: document.getElementById('modeCreator'),
  modeOps: document.getElementById('modeOps'),
  modeAdmin: document.getElementById('modeAdmin'),
  setupSection: document.getElementById('setupSection'),
  modelSection: document.getElementById('modelSection'),
  workspaceSection: document.getElementById('workspaceSection'),
  creationMain: document.getElementById('creationMain'),
  resultRail: document.getElementById('resultRail'),
  opsSection: document.getElementById('opsSection'),
  assetSection: document.getElementById('assetSection'),
  queueSection: document.getElementById('queueSection'),
  debugSection: document.getElementById('debugSection')
};

const state = {
  presets: [],
  taskTypes: [],
  profiles: [],
  activeProfileId: '',
  savedConfigSnapshot: '',
  models: [],
  modelById: new Map(),
  uiMode: 'creator',
  studioTasks: [],
  activeStudioTaskId: '',
  studioTaskSearchTerm: '',
  tasks: [],
  compareTaskIds: [],
  assets: [],
  selectedTaskId: '',
  logs: [],
  autoRefreshTimer: null,
  connectivityPollTimer: null,
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
  taskModelSelections: {
    text_to_image: '',
    image_edit: '',
    text_to_video: '',
    image_to_video: ''
  },
  capabilitySchema: null,
  modelCapabilityViewCache: new Map(),
  providerCapabilities: {},
  hasStoredApiKey: false,
  connectivitySnapshot: null,
  imageToVideoInputSequence: [],
  imageToVideoSourceAssetId: '',
  imageToVideoReferenceAssetOrder: [],
  imageToVideoSourceUrlValue: '',
  imageToVideoReferenceUrlOrder: []
};

const IMAGE_DEFAULT_RES = ['1024x1024', '1536x1024', '1024x1536'];
const VIDEO_DEFAULT_RES = ['1280x720', '720x1280', '1920x1080', '1080x1920'];
const UI_STATE_STORAGE_KEY = 'sora2studio.uiState.v1';
const PRODUCT_UI_MODES = ['creator', 'ops', 'admin'];
const QUICK_JUMP_TARGET_IDS = ['setupSection', 'modelSection', 'workspaceSection', 'resultRail', 'assetSection', 'queueSection', 'debugSection'];

function isTypingElement(element) {
  if (!element) return false;
  const tag = String(element.tagName || '').toLowerCase();
  return tag === 'input' || tag === 'textarea' || tag === 'select' || element.isContentEditable;
}

function scrollToSectionById(sectionId) {
  const target = document.getElementById(String(sectionId || '').trim());
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function initQuickJumpBar() {
  const bar = els.quickJumpBar;
  if (!bar) return;
  const items = Array.from(bar.querySelectorAll('.quick-jump-item[data-target]'));
  if (!items.length) return;
  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = String(item.dataset.target || '').trim();
      scrollToSectionById(targetId);
    });
  });

  const sections = QUICK_JUMP_TARGET_IDS
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const syncActiveItem = () => {
    const offset = window.scrollY + 180;
    let activeId = sections[0]?.id || '';
    sections.forEach((section) => {
      if (section.offsetTop <= offset) activeId = section.id;
    });
    items.forEach((item) => {
      item.classList.toggle('is-active', item.dataset.target === activeId);
    });
  };
  window.addEventListener('scroll', syncActiveItem, { passive: true });
  window.addEventListener('resize', syncActiveItem);
  syncActiveItem();
}

function initKeyboardShortcuts() {
  let pendingGo = false;
  let pendingGoTimer = null;
  const clearPendingGo = () => {
    pendingGo = false;
    if (pendingGoTimer) window.clearTimeout(pendingGoTimer);
    pendingGoTimer = null;
  };
  document.addEventListener('keydown', (event) => {
    if (event.defaultPrevented) return;
    const key = String(event.key || '').toLowerCase();
    if (key === '/' && !isTypingElement(document.activeElement)) {
      event.preventDefault();
      els.prompt?.focus();
      return;
    }

    if (isTypingElement(document.activeElement)) return;
    if (key === 'g') {
      pendingGo = true;
      if (pendingGoTimer) window.clearTimeout(pendingGoTimer);
      pendingGoTimer = window.setTimeout(clearPendingGo, 900);
      return;
    }

    if (!pendingGo) return;
    if (key === 'c') {
      event.preventDefault();
      scrollToSectionById('workspaceSection');
    } else if (key === 'q') {
      event.preventDefault();
      scrollToSectionById('queueSection');
    }
    clearPendingGo();
  });
}

function initRevealAnimations() {
  const revealTargets = Array.from(document.querySelectorAll('.hero-main, .hero-side, main .card'));
  if (!revealTargets.length) return;
  revealTargets.forEach((item) => item.classList.add('reveal-target'));
  if (!('IntersectionObserver' in window)) {
    revealTargets.forEach((item) => item.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.14,
    rootMargin: '0px 0px -8% 0px'
  });
  revealTargets.forEach((item) => observer.observe(item));
}

function isSoraFamilyModel(model) {
  const id = String(model?.id || '').trim().toLowerCase();
  const provider = String(model?.provider || '').trim().toLowerCase();
  const title = String(model?.title || model?.catalog?.title || '').trim().toLowerCase();
  const tags = Array.isArray(model?.tags) ? model.tags.join(' ').toLowerCase() : '';
  const haystack = [id, provider, title, tags].join(' ');
  return /(^|[\s_-])sora([\s_-]|$)/.test(haystack) || id.startsWith('sora');
}

function applySoraProductBranding(filteredCount = 0) {
  document.title = 'Sora Bridge Studio';
  const eyebrow = document.querySelector('.eyebrow');
  if (eyebrow) eyebrow.textContent = 'Sora Bridge Studio';
  const heroTitle = document.querySelector('.hero-main h1');
  if (heroTitle) heroTitle.textContent = 'Sora 创作桥梁工作台';
  const heroCopy = document.querySelector('.hero-copy');
  if (heroCopy) heroCopy.textContent = '围绕 Sora 的真实能力组织输入、任务、结果和复用流程。界面只暴露当前 Sora 模型可提交、可理解、可恢复的能力。';
  const heroNote = document.querySelector('.hero-note');
  if (heroNote) {
    heroNote.textContent = filteredCount > 0
      ? `当前界面已收敛为 Sora-only 工作流，已自动隐藏 ${filteredCount} 个非 Sora 模型，避免兼容层噪音干扰创建流程。`
      : '当前界面已收敛为 Sora-only 工作流，只保留 Sora 的真实能力和创作路径。';
  }
  const heroMetrics = document.querySelectorAll('.metric-card strong');
  if (heroMetrics[0]) heroMetrics[0].textContent = 'Sora Family Only';
  if (heroMetrics[1]) heroMetrics[1].textContent = '严格模型驱动 UI';
  const providerType = document.getElementById('providerType');
  if (providerType?.value === 'compatible') {
    const providerLabel = document.getElementById('providerLabel');
    if (providerLabel && !String(providerLabel.value || '').trim()) providerLabel.value = 'BLTCY Sora';
  }
}

function isNanoBananaFamilyModel(model) {
  const id = String(model?.id || '').trim().toLowerCase();
  const provider = String(model?.provider || '').trim().toLowerCase();
  const title = String(model?.title || model?.catalog?.title || '').trim().toLowerCase();
  const tags = Array.isArray(model?.tags) ? model.tags.join(' ').toLowerCase() : '';
  const haystack = [id, provider, title, tags].join(' ');
  return /nano[\s_-]?banana|banana/.test(haystack);
}

function isVeoFamilyModel(model) {
  const id = String(model?.id || '').trim().toLowerCase();
  const provider = String(model?.provider || '').trim().toLowerCase();
  const title = String(model?.title || model?.catalog?.title || '').trim().toLowerCase();
  const tags = Array.isArray(model?.tags) ? model.tags.join(' ').toLowerCase() : '';
  const haystack = [id, provider, title, tags].join(' ');
  return /(^|[\s_.-])veo([\s_.-]|$)/.test(haystack) || id.startsWith('veo');
}

function isVeoTaskModel(model = currentModel()) {
  return isVeoFamilyModel(model);
}

function isFocusedBridgeModel(model) {
  return isSoraFamilyModel(model) || isVeoFamilyModel(model) || isNanoBananaFamilyModel(model);
}

function getTaskDisplayLabel(taskType = '') {
  const map = {
    text_to_image: '文生图',
    image_edit: '图片编辑',
    text_to_video: '文生视频',
    image_to_video: '图生视频'
  };
  return map[String(taskType || '').trim()] || String(taskType || '').trim() || '任务';
}

function getTaskPromptModeLabel(taskType = '') {
  if (taskType === 'image_to_video') return '首帧 + 尾帧 + 参考图 + Prompt';
  if (taskType === 'image_edit') return '原图 + Prompt';
  if (taskType === 'text_to_image') return 'Prompt 生图';
  return 'Prompt 生视频';
}

function hasSourceVisualInput(taskType = currentTaskType()) {
  const sourceImageUrl = String(els.sourceImageUrl?.value || '').trim();
  const sourceAssetId = String(els.sourceAssetSelect?.value || '').trim();
  return Boolean(sourceImageUrl || sourceAssetId);
}

function supportsImageToVideoReferenceInputs(caps = {}) {
  return Boolean(caps.supportsImageToVideoReferenceImages);
}

function applyFocusedBridgeBranding(filteredCount = 0) {
  document.title = 'Sora + Veo + Nano Banana Studio';
  const eyebrow = document.querySelector('.eyebrow');
  if (eyebrow) eyebrow.textContent = 'Sora + Veo + Nano Banana Studio';
  const heroTitle = document.querySelector('.hero-main h1');
  if (heroTitle) heroTitle.textContent = '视频围绕 Sora，生图围绕 Nano Banana';
  const heroCopy = document.querySelector('.hero-copy');
  if (heroCopy) heroCopy.textContent = '文生图与图像编辑优先围绕 Nano Banana，文生视频与图生视频优先围绕 Sora。界面继续严格按模型真实能力组织输入、任务和结果。';
  const heroNote = document.querySelector('.hero-note');
  if (heroNote) {
    heroNote.textContent = filteredCount > 0
      ? `当前界面已收敛到 Sora + Nano Banana 工作流，已自动隐藏 ${filteredCount} 个无关模型。`
      : '当前界面聚焦 Sora 与 Nano Banana，两类模型各自承担最擅长的任务。';
  }
  const heroMetrics = document.querySelectorAll('.metric-card strong');
  if (heroMetrics[0]) heroMetrics[0].textContent = 'Sora/Veo Video + Banana Image';
  if (heroMetrics[1]) heroMetrics[1].textContent = '严格模型驱动 UI';
  const providerType = document.getElementById('providerType');
  if (providerType?.value === 'compatible') {
    const providerLabel = document.getElementById('providerLabel');
    if (providerLabel && !String(providerLabel.value || '').trim()) providerLabel.value = 'BLTCY Creative Bridge';
  }
  if (heroTitle) heroTitle.textContent = '视频围绕 Sora + Veo，生图围绕 Nano Banana';
  if (heroCopy) heroCopy.textContent = '文生图与图片编辑优先围绕 Nano Banana，文生视频与图生视频围绕 Sora 和 Veo。界面继续严格按模型真实能力组织输入、任务和结果。';
  if (heroNote) {
    heroNote.textContent = filteredCount > 0
      ? `当前界面已收敛到 Sora + Veo + Nano Banana 工作流，已自动隐藏 ${filteredCount} 个无关模型。`
      : '当前界面聚焦 Sora、Veo 与 Nano Banana，让视频与图片各自回到最合适的模型家族。';
  }
}

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

function normalizeUiMode(value) {
  const mode = String(value || '').trim().toLowerCase();
  return PRODUCT_UI_MODES.includes(mode) ? mode : 'creator';
}

function updateProductModeUiState() {
  const mode = normalizeUiMode(state.uiMode);
  const modeButtons = [
    ['creator', els.modeCreator],
    ['ops', els.modeOps],
    ['admin', els.modeAdmin]
  ];
  modeButtons.forEach(([key, button]) => {
    if (!button) return;
    button.classList.toggle('product-mode-active', key === mode);
  });
  if (els.productModeHint) {
    const map = {
      creator: 'Creator mode: focus prompt editing and generation with full control panels visible.',
      ops: 'Ops mode: focus queue, retry, and diagnostics with controls still pinned.',
      admin: 'Admin mode: full visibility for provider configuration, model sync, and debugging.'
    };
    els.productModeHint.textContent = map[mode] || map.creator;
  }
}

function applyProductMode(mode, persist = true) {
  const normalized = normalizeUiMode(mode);
  state.uiMode = normalized;
  document.body.classList.remove('app-mode-creator', 'app-mode-ops', 'app-mode-admin');
  document.body.classList.add(`app-mode-${normalized}`);
  showElement(els.setupSection, true);
  showElement(els.creationMain, true);
  showElement(els.debugSection, true);
  showElement(els.workspaceSection, true);
  showElement(els.resultRail, true);
  showElement(els.opsSection, true);
  updateProductModeUiState();
  if (persist) persistUiState();
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
  draft.__imageToVideoSourceAssetId = String(state.imageToVideoSourceAssetId || '');
  draft.__imageToVideoReferenceAssetOrder = Array.isArray(state.imageToVideoReferenceAssetOrder)
    ? state.imageToVideoReferenceAssetOrder.slice()
    : [];
  draft.__imageToVideoInputSequence = Array.isArray(state.imageToVideoInputSequence)
    ? state.imageToVideoInputSequence.map((item) => ({ ...item }))
    : [];
  draft.__imageToVideoSourceUrlValue = String(state.imageToVideoSourceUrlValue || '');
  draft.__imageToVideoReferenceUrlOrder = Array.isArray(state.imageToVideoReferenceUrlOrder)
    ? state.imageToVideoReferenceUrlOrder.slice()
    : [];
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
    uiMode: normalizeUiMode(state.uiMode),
    autoRefreshEnabled: Boolean(els.autoRefreshToggle?.checked),
    configDraft,
    selectedTaskIds: {
      ...(current.selectedTaskIds && typeof current.selectedTaskIds === 'object' ? current.selectedTaskIds : {}),
      [activeDraftKey()]: state.selectedTaskId || ''
    },
    compareTaskIds: {
      ...(current.compareTaskIds && typeof current.compareTaskIds === 'object' ? current.compareTaskIds : {}),
      [activeDraftKey()]: Array.isArray(state.compareTaskIds) ? state.compareTaskIds.slice(0, 2) : []
    },
    drafts
  });
}

function restoreUiPreferences() {
  const current = readUiState();
  state.uiMode = normalizeUiMode(current.uiMode || state.uiMode);
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
  applyProductMode(state.uiMode, false);
}

function restoreSelectedTaskForActiveStudioTask() {
  const current = readUiState();
  const selectedTaskIds = current.selectedTaskIds && typeof current.selectedTaskIds === 'object' ? current.selectedTaskIds : {};
  state.selectedTaskId = String(selectedTaskIds[activeDraftKey()] || '').trim();
}

function restoreCompareTasksForActiveStudioTask() {
  const current = readUiState();
  const compareTaskIds = current.compareTaskIds && typeof current.compareTaskIds === 'object' ? current.compareTaskIds : {};
  state.compareTaskIds = Array.isArray(compareTaskIds[activeDraftKey()])
    ? compareTaskIds[activeDraftKey()].map((item) => String(item || '').trim()).filter(Boolean).slice(0, 2)
    : [];
}

function restoreCreateDraft() {
  if (!els.createForm) return;
  const current = readUiState();
  const drafts = current.drafts && typeof current.drafts === 'object' ? current.drafts : {};
  const draft = drafts[activeDraftKey()];
  if (!draft || typeof draft !== 'object') return;

  Object.entries(draft).forEach(([name, value]) => {
    if (name.startsWith('__')) return;
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
  state.imageToVideoSourceAssetId = String(draft.__imageToVideoSourceAssetId || '').trim();
  state.imageToVideoReferenceAssetOrder = Array.isArray(draft.__imageToVideoReferenceAssetOrder)
    ? draft.__imageToVideoReferenceAssetOrder.map((item) => String(item || '').trim()).filter(Boolean)
    : [];
  state.imageToVideoInputSequence = Array.isArray(draft.__imageToVideoInputSequence)
    ? draft.__imageToVideoInputSequence
      .map((item) => normalizeImageToVideoSequenceItem(item))
      .filter(Boolean)
    : [];
  state.imageToVideoSourceUrlValue = String(draft.__imageToVideoSourceUrlValue || '').trim();
  state.imageToVideoReferenceUrlOrder = Array.isArray(draft.__imageToVideoReferenceUrlOrder)
    ? draft.__imageToVideoReferenceUrlOrder.map((item) => String(item || '').trim()).filter(Boolean)
    : [];
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
  if (raw.includes('requires a dedicated first-frame image')) return '图生视频需要单独提供首帧图（URL 或本地素材）。';
  if (raw.includes('first frame and end frame must be different images')) return '首帧图与尾帧图不能是同一张，请更换尾帧后再提交。';
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

renderModelSummary = function renderModelSummary(container, models, { limit = 12, taskType = '' } = {}) {
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
};

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
      const familyTags = [];
      if (isSoraFamilyModel(model)) familyTags.push('Sora');
      if (isVeoFamilyModel(model)) familyTags.push('Veo');
      if (isNanoBananaFamilyModel(model)) familyTags.push('Nano Banana');
      const meta = [];
      if (taskCaps?.durationOptions?.length) meta.push(`时长 ${taskCaps.durationOptions.join('/')}`);
      if (taskCaps?.aspectRatioOptions?.length) meta.push(`比例 ${taskCaps.aspectRatioOptions.slice(0, 3).join('/')}`);
      if (taskCaps?.supportsPromptOptimize) meta.push('提示词优化');
      const familyLine = familyTags.length
        ? `<div class="model-card-tags">${familyTags.map((item) => `<span class="model-card-tag model-card-tag-family">${escapeHtml(item)}</span>`).join('')}</div>`
        : '';
      const roleLine = roles.active.length
        ? `<div class="model-card-tags">${roles.active.map((item) => `<span class="model-card-tag">${escapeHtml(item)}</span>`).join('')}${roles.gated.map((item) => `<span class="model-card-tag model-card-tag-gated">${escapeHtml(item)}</span>`).join('')}</div>`
        : '<div class="model-card-meta">未提取到明确能力标签</div>';
      const metaLine = meta.length ? `<div class="model-card-meta">${escapeHtml(meta.join(' / '))}</div>` : '';
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
        ${familyLine}
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

renderModelSummary = function renderModelSummary(container, models, { limit = 12, taskType = '' } = {}) {
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
      const familyTags = [];
      if (isSoraFamilyModel(model)) familyTags.push('Sora');
      if (isVeoFamilyModel(model)) familyTags.push('Veo');
      if (isNanoBananaFamilyModel(model)) familyTags.push('Nano Banana');
      const meta = [];
      if (taskCaps?.capabilitySourceLabel) meta.push(taskCaps.capabilitySourceLabel);
      if (taskCaps?.durationOptions?.length) meta.push(`时长 ${taskCaps.durationOptions.join('/')}`);
      if (taskCaps?.aspectRatioOptions?.length) meta.push(`比例 ${taskCaps.aspectRatioOptions.slice(0, 3).join('/')}`);
      if (taskCaps?.supportsPromptOptimize) meta.push('提示词优化');
      if (taskType && (taskCaps?.supportsImageToVideoReferenceImages || taskCaps?.supportsTextToVideoReferenceImages || taskCaps?.supportsTextToImageReferenceImages)) {
        meta.push(`参考图${formatReferenceLimit(taskCaps, { singular: '仅 1 张', pluralPrefix: '最多 ' })}`);
      }
      if (taskType === 'image_to_video' && taskCaps?.supportsImageToVideoEndFrame) meta.push('支持尾帧');
      const familyLine = familyTags.length
        ? `<div class="model-card-tags">${familyTags.map((item) => `<span class="model-card-tag model-card-tag-family">${escapeHtml(item)}</span>`).join('')}</div>`
        : '';
      const roleLine = roles.active.length
        ? `<div class="model-card-tags">${roles.active.map((item) => `<span class="model-card-tag">${escapeHtml(item)}</span>`).join('')}${roles.gated.map((item) => `<span class="model-card-tag model-card-tag-gated">${escapeHtml(item)}</span>`).join('')}</div>`
        : '<div class="model-card-meta">未提取到明确能力标签</div>';
      const metaLine = meta.length ? `<div class="model-card-meta">${escapeHtml(meta.join(' / '))}</div>` : '';
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
        ${familyLine}
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
};

async function applyLoadedModels(result) {
  const allModels = Array.isArray(result?.data) ? result.data : [];
  const focusedModels = allModels.filter((model) => isFocusedBridgeModel(model));
  state.models = focusedModels.length ? focusedModels : allModels;
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
  applyFocusedBridgeBranding(Math.max(0, allModels.length - state.models.length));
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
  syncTopConfigMirrorFromMain();
}

function getConfigPayload() {
  const fd = new FormData(els.configForm);
  const sora2ApiKeyInput = String(fd.get('sora2ApiKey') || '').trim();
  const sora2ApiKey = sora2ApiKeyInput || (state.hasStoredApiKey ? '__KEEP__' : '');
  return {
    profileId: state.activeProfileId || undefined,
    profileLabel: String(fd.get('providerLabel') || '').trim() || 'BLTCY Creative Bridge',
    providerLabel: String(fd.get('providerLabel') || '').trim() || 'BLTCY Creative Bridge',
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
      providerLabel: 'BLTCY Creative Bridge',
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
  setInputValue('providerLabel', preset.providerLabel || 'BLTCY Creative Bridge');
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
  syncTopConfigMirrorFromMain();
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
      const statusTone = normalizeStatusTone(item.status || 'active');
      return `
        <article class="studio-task-card${active}" data-studio-task-id="${escapeAttr(item.id)}">
          <div class="studio-task-card-top">
            <strong>${escapeHtml(item.name)}</strong>
            <span class="pill status-${escapeAttr(statusTone)}">${escapeHtml(item.status || 'active')}</span>
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

function rememberModelSelection(taskType = currentTaskType()) {
  const normalizedTaskType = String(taskType || '').trim();
  if (!normalizedTaskType) return;
  const modelId = String(selectedModelIdForTask(normalizedTaskType) || '').trim();
  if (!modelId) return;
  state.taskModelSelections[normalizedTaskType] = modelId;
}

function getSiblingTaskType(taskType = '') {
  const normalized = String(taskType || '').trim();
  if (normalized === 'text_to_video') return 'image_to_video';
  if (normalized === 'image_to_video') return 'text_to_video';
  if (normalized === 'text_to_image') return 'image_edit';
  if (normalized === 'image_edit') return 'text_to_image';
  return '';
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
    const normalizedTaskType = String(taskType || '').trim();
    const aId = String(a?.id || '').toLowerCase();
    const bId = String(b?.id || '').toLowerCase();
    if (normalizedTaskType === 'text_to_video' || normalizedTaskType === 'image_to_video') {
      const aFocused = isSoraFamilyModel(a) || isVeoFamilyModel(a);
      const bFocused = isSoraFamilyModel(b) || isVeoFamilyModel(b);
      if (aFocused !== bFocused) return aFocused ? -1 : 1;
    }
    if (normalizedTaskType === 'text_to_image' || normalizedTaskType === 'image_edit') {
      const aFocused = isNanoBananaFamilyModel(a);
      const bFocused = isNanoBananaFamilyModel(b);
      if (aFocused !== bFocused) return aFocused ? -1 : 1;
    }
    const rankDiff = rankModelForTask(taskType, a) - rankModelForTask(taskType, b);
    if (rankDiff !== 0) return rankDiff;
    return aId.localeCompare(bId);
  });
}

function getModelsForTask(taskType = currentTaskType()) {
  return sortModelsForTask(taskType, state.modelsByTask[taskType] || []);
}

async function refreshCreateModelOptions() {
  const taskType = currentTaskType();
  const taskModels = getModelsForTask(taskType);
  const isVideoTask = taskType.includes('video');
  const selectEl = isVideoTask ? els.videoModel : els.imageModel;
  const siblingTaskType = getSiblingTaskType(taskType);
  const preferredModelId = String(
    state.taskModelSelections[taskType]
    || selectEl?.value
    || state.taskModelSelections[siblingTaskType]
    || ''
  ).trim();

  await renderSelectOptionsChunked(selectEl, taskModels, { chunkSize: 20 });

  let resolvedModelId = '';
  if (preferredModelId && taskModels.some((item) => item.id === preferredModelId)) {
    resolvedModelId = preferredModelId;
  } else {
    resolvedModelId = taskModels[0]?.id || '';
  }
  selectEl.value = resolvedModelId;
  if (resolvedModelId) state.taskModelSelections[taskType] = resolvedModelId;
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
      capabilitySource: 'none',
      capabilitySourceLabel: '无能力数据',
      hasExplicitReferenceLimit: false,
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
  const hasTaskCapabilityRecord = Object.keys(taskCaps).length > 0;
  const caps = {
    ...(model?.catalog?.capabilities || {}),
    ...taskCaps
  };
  const supportedTasks = getSupportedTasksForModel(model);
  const modelId = String(model?.id || '').toLowerCase();
  const inferredVideoModel = /(sora|veo|video|seedance|wan|kling|hailuo|pixverse|vidu)/.test(modelId);
  const inferredVeoModel = isVeoFamilyModel(model);
  const inferredSupportsImageCount = /(gpt-image|dall-e)/.test(modelId);
  const qualityOptions = Array.isArray(caps.qualityOptions)
    ? caps.qualityOptions.map((item) => String(item).trim()).filter(Boolean)
    : (modelId.includes('gpt-image') ? ['hd'] : []);
  const promptOptimizePath = String(caps.promptOptimizePath || '');
  const chatCompletionsPath = String(caps.chatCompletionsPath || '');
  const supportsPromptOptimize = Boolean(caps.supportsPromptOptimize || promptOptimizePath || chatCompletionsPath);
  const explicitDurationCapability = (
    (Array.isArray(caps.durationOptions) && caps.durationOptions.length > 0)
    || positiveNumberOrNull(caps.minDuration) !== null
    || positiveNumberOrNull(caps.maxDuration) !== null
  );
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
      explicitDurationCapability
      || (!inferredVeoModel && caps.supportsDuration)
    ),
    supportsAspectRatio: caps.supportsAspectRatio === true || (Array.isArray(caps.aspectRatioOptions) && caps.aspectRatioOptions.length > 0),
    supportsPromptOptimize,
    capabilitySource: hasTaskCapabilityRecord ? 'task_catalog' : 'merged_catalog',
    capabilitySourceLabel: hasTaskCapabilityRecord ? '任务级目录' : '合并能力',
    hasExplicitReferenceLimit: positiveNumberOrNull(caps.maxReferenceImages) !== null,
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

function ensureVisualInputEnhancements() {
  if (!els.soraWorkflowPanel && els.createForm) {
    const panel = document.createElement('section');
    panel.id = 'soraWorkflowPanel';
    panel.className = 'sora-flow-panel';
    panel.innerHTML = `
      <div class="sora-flow-head">
        <strong>创作起点</strong>
        <span id="soraWorkflowSummary"></span>
      </div>
      <div class="sora-flow-grid">
        <article class="sora-flow-card">
          <strong>Nano Banana 生图</strong>
          <p>把图片任务入口前置，适合文生图和图像编辑。先选任务，再补提示词、比例、尺寸与参考图。</p>
          <div class="sora-flow-actions">
            <button type="button" class="secondary-button" data-action="workflow-task-text-image">切到文生图</button>
            <button type="button" class="secondary-button" data-action="workflow-task-image-edit">切到图片编辑</button>
          </div>
        </article>
        <article class="sora-flow-card">
          <strong>文生视频</strong>
          <p>从一句完整创意开始，适合先确定镜头气质、时长和画幅，再逐步加分镜或约束。</p>
          <div class="sora-flow-actions">
            <button type="button" class="secondary-button" data-action="workflow-task-text-video">切到文生视频</button>
            <button type="button" class="secondary-button" data-action="workflow-mode-standard">标准模式</button>
            <button type="button" class="secondary-button" data-action="workflow-mode-storyboard">故事板模式</button>
          </div>
        </article>
        <article class="sora-flow-card">
          <strong>图生视频</strong>
          <p>先排输入图序列，再补 prompt。第 1 张决定起始画面，后续图片负责主体、风格和镜头参考。</p>
          <div class="sora-flow-actions">
            <button type="button" class="secondary-button" data-action="workflow-task-image-video">切到图生视频</button>
            <button type="button" class="secondary-button" data-action="workflow-seed-prompt">填入示例提示</button>
            <button type="button" class="secondary-button" data-action="workflow-seed-storyboard">填入分镜骨架</button>
          </div>
        </article>
      </div>`;
    els.createForm.insertBefore(panel, els.createForm.firstChild);
    els.soraWorkflowPanel = panel;
    els.soraWorkflowSummary = panel.querySelector('#soraWorkflowSummary');
    const flowGrid = panel.querySelector('.sora-flow-grid');
    if (flowGrid) {
      const veoCard = document.createElement('article');
      veoCard.className = 'sora-flow-card';
      veoCard.innerHTML = `
        <strong>Veo Prompt-first</strong>
        <p>先写清主体、动作、镜头和节奏，再用模型提示词优化把动作节奏、镜头目标和整体叙事整理成更适合 Veo 的视频指令。</p>
        <div class="sora-flow-actions">
          <button type="button" class="secondary-button" data-action="workflow-task-text-video">切到文生视频</button>
          <button type="button" class="secondary-button" data-action="workflow-seed-prompt">填入 Veo 示例</button>
          <button type="button" class="secondary-button" data-action="workflow-optimize-prompt">优化当前 Prompt</button>
        </div>`;
      const imageVideoCard = flowGrid.querySelectorAll('.sora-flow-card')[2];
      if (imageVideoCard) {
        flowGrid.insertBefore(veoCard, imageVideoCard);
      } else {
        flowGrid.appendChild(veoCard);
      }
    }
  }
  if (!els.soraSubmitPanel && els.fieldGuidePanel?.parentElement) {
    const panel = document.createElement('section');
    panel.id = 'soraSubmitPanel';
    panel.className = 'sora-submit-panel';
    panel.innerHTML = `
      <strong>提交摘要</strong>
      <div id="soraSubmitSummary" class="sora-submit-panel-summary"></div>
      <div id="soraSubmitTags" class="sora-submit-tags"></div>`;
    els.fieldGuidePanel.insertAdjacentElement('afterend', panel);
    els.soraSubmitPanel = panel;
    els.soraSubmitSummary = panel.querySelector('#soraSubmitSummary');
    els.soraSubmitTags = panel.querySelector('#soraSubmitTags');
  }
  if (!els.reuseSummaryPanel && els.soraSubmitPanel?.parentElement) {
    const panel = document.createElement('section');
    panel.id = 'reuseSummaryPanel';
    panel.className = 'reuse-summary-panel hidden';
    panel.innerHTML = `
      <strong>复用结果</strong>
      <div id="reuseSummaryText" class="reuse-summary-text"></div>
      <div id="reuseSummaryTags" class="reuse-summary-tags"></div>`;
    els.soraSubmitPanel.insertAdjacentElement('afterend', panel);
    els.reuseSummaryPanel = panel;
    els.reuseSummaryText = panel.querySelector('#reuseSummaryText');
    els.reuseSummaryTags = panel.querySelector('#reuseSummaryTags');
  }
  if (!els.imageToVideoPromptGuide && els.prompt?.parentElement) {
    const panel = document.createElement('section');
    panel.id = 'imageToVideoPromptGuide';
    panel.className = 'prompt-guide-panel hidden';
    panel.innerHTML = `
      <strong>提示词如何与图片配合</strong>
      <div id="imageToVideoPromptSummary" class="prompt-guide-summary"></div>
      <div class="prompt-guide-grid">
        <article class="prompt-guide-card">
          <strong>第 1 张输入图</strong>
          <p>决定起始画面。提示词不要重复描述这张图里已经明确可见的内容，重点补“运动、镜头、节奏、氛围、结尾”。</p>
        </article>
        <article class="prompt-guide-card">
          <strong>第 2-N 张参考图</strong>
          <p>用于约束主体一致性、服装、风格、场景元素或镜头倾向。提示词里要明确说明“保持与参考图一致”的对象是什么。</p>
        </article>
        <article class="prompt-guide-card">
          <strong>推荐写法</strong>
          <p>让第 1 张画面中的人物开始走向镜头，保持与附加参考图一致的红色夹克、发型和面部特征，镜头缓慢推进，结尾停在半身近景。</p>
        </article>
      </div>`;
    els.prompt.parentElement.insertAdjacentElement('afterend', panel);
    els.imageToVideoPromptGuide = panel;
    els.imageToVideoPromptSummary = panel.querySelector('#imageToVideoPromptSummary');
  }
  if (!els.promptOptimizePanel && els.prompt?.parentElement) {
    const panel = document.createElement('section');
    panel.id = 'promptOptimizePanel';
    panel.className = 'prompt-optimize-panel hidden';
    panel.innerHTML = `
      <div class="prompt-optimize-head">
        <strong>模型提示词优化</strong>
        <span id="promptOptimizeSummary" class="prompt-optimize-summary"></span>
      </div>
      <div class="prompt-optimize-actions">
        <button type="button" id="optimizePromptWithModel" class="secondary-button">按当前模型优化提示词</button>
        <span id="promptOptimizeStatus" class="inline-hint hidden"></span>
      </div>`;
    els.prompt.parentElement.insertAdjacentElement('afterend', panel);
    els.promptOptimizePanel = panel;
    els.optimizePromptWithModel = panel.querySelector('#optimizePromptWithModel');
    els.promptOptimizeSummary = panel.querySelector('#promptOptimizeSummary');
    els.promptOptimizeStatus = panel.querySelector('#promptOptimizeStatus');
  }
  if (!els.capabilityFieldLayout && els.soraSubmitPanel?.parentElement) {
    const panel = document.createElement('section');
    panel.id = 'capabilityFieldLayout';
    panel.className = 'capability-layout';
    panel.innerHTML = `
      <div class="capability-layout-head">
        <strong>能力驱动表单结构</strong>
        <span>当前模型的字段按基础、高级、专家三层整理，避免整页字段混在一起。</span>
      </div>
      <div class="capability-layout-grid">
        <section class="capability-column">
          <div class="capability-column-head">
            <strong>基础项</strong>
            <span>进入提交前必须先看清这一层</span>
          </div>
          <div id="capabilityBasicFields" class="capability-field-list"></div>
        </section>
        <details class="capability-column">
          <summary class="capability-column-head">
            <strong>高级项</strong>
            <span>在明确知道效果影响时再展开</span>
          </summary>
          <div id="capabilityAdvancedFields" class="capability-field-list"></div>
        </details>
        <details class="capability-column">
          <summary class="capability-column-head">
            <strong>专家项</strong>
            <span>复现、调参和对比时再打开</span>
          </summary>
          <div id="capabilityExpertFields" class="capability-field-list"></div>
        </details>
      </div>`;
    els.soraSubmitPanel.insertAdjacentElement('afterend', panel);
    els.capabilityFieldLayout = panel;
    els.capabilityBasicFields = panel.querySelector('#capabilityBasicFields');
    els.capabilityAdvancedFields = panel.querySelector('#capabilityAdvancedFields');
    els.capabilityExpertFields = panel.querySelector('#capabilityExpertFields');
  }
  if (!els.taskComparePanel && els.tasks?.parentElement) {
    const panel = document.createElement('section');
    panel.id = 'taskComparePanel';
    panel.className = 'task-compare-panel hidden';
    panel.innerHTML = `
      <div class="task-compare-head">
        <strong>任务对比</strong>
        <div class="config-actions">
          <button type="button" class="secondary-button" data-action="task-compare-clear">清空对比</button>
        </div>
      </div>
      <div id="taskCompareSummary" class="task-compare-summary"></div>
      <div id="taskCompareGrid" class="task-compare-grid"></div>`;
    els.tasks.insertAdjacentElement('beforebegin', panel);
    els.taskComparePanel = panel;
    els.taskCompareSummary = panel.querySelector('#taskCompareSummary');
    els.taskCompareGrid = panel.querySelector('#taskCompareGrid');
  }
  if (els.referenceImageUrl && els.referenceImageUrl.tagName !== 'TEXTAREA') {
    const textarea = document.createElement('textarea');
    textarea.id = els.referenceImageUrl.id;
    textarea.name = els.referenceImageUrl.name;
    textarea.placeholder = els.referenceImageUrl.placeholder;
    textarea.rows = 4;
    textarea.value = els.referenceImageUrl.value;
    els.referenceImageUrl.replaceWith(textarea);
    els.referenceImageUrl = textarea;
  }
  if (!els.imageToVideoInputPanel && els.referenceImageHint?.parentElement) {
    const panel = document.createElement('div');
    panel.id = 'imageToVideoInputPanel';
    panel.className = 'image-input-panel hidden';
    panel.innerHTML = `
      <div class="image-input-panel-head">
        <strong>图生视频输入结构</strong>
        <span id="imageToVideoInputSummary" class="image-input-panel-meta"></span>
      </div>
      <div class="image-input-panel-grid">
        <article class="image-input-card">
          <span class="image-input-card-kicker">Step 1</span>
          <strong>主图 / 首帧</strong>
          <p>放 1 张主输入图。Sora2 会把它作为视频起始画面。</p>
        </article>
        <article class="image-input-card">
          <span class="image-input-card-kicker">Step 2</span>
          <strong>附加参考图</strong>
          <p>其余图片放到“附加参考图 URL”或“本地附加参考图”。URL 支持一行一张，本地上传支持多选。</p>
        </article>
      </div>`;
    els.referenceImageHint.insertAdjacentElement('afterend', panel);
    els.imageToVideoInputPanel = panel;
    els.imageToVideoInputSummary = panel.querySelector('#imageToVideoInputSummary');
  }
  if (els.referenceUploadInput) {
    els.referenceUploadInput.multiple = true;
  }
  const decorateCard = (labelEl, variant, badgeText) => {
    if (!labelEl) return;
    labelEl.classList.add('visual-input-card', `visual-input-card-${variant}`);
    let badge = labelEl.querySelector('.visual-input-badge');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'visual-input-badge';
      labelEl.insertBefore(badge, labelEl.firstChild);
    }
    badge.textContent = badgeText;
  };
  decorateCard(els.sourceImageWrap, 'primary', '主图');
  decorateCard(els.sourceAssetWrap, 'primary', '主图');
  decorateCard(els.sourceUploadWrap, 'primary', '主图');
  decorateCard(els.endFrameImageWrap, 'primary', '尾帧');
  decorateCard(els.endFrameAssetWrap, 'primary', '尾帧');
  decorateCard(els.endFrameUploadLabel, 'primary', '尾帧');
  decorateCard(els.referenceImageWrap, 'reference', '附加图');
  decorateCard(els.referenceAssetWrap, 'reference', '附加图');
  decorateCard(els.referenceUploadWrap, 'reference', '附加图');
  const ensureHelp = (wrapEl, id) => {
    if (!wrapEl) return null;
    let help = document.getElementById(id);
    if (!help) {
      help = document.createElement('span');
      help.id = id;
      help.className = 'inline-hint';
      wrapEl.appendChild(help);
    }
    return help;
  };
  els.referenceAssetHelp = ensureHelp(els.referenceAssetWrap, 'referenceAssetHelp');
  els.referenceUploadHelp = ensureHelp(els.referenceUploadWrap, 'referenceUploadHelp');
  if (!els.imageToVideoSequenceWorkspace && els.imageToVideoInputPanel?.parentElement) {
    const workspace = document.createElement('section');
    workspace.id = 'imageToVideoSequenceWorkspace';
    workspace.className = 'image-sequence-workspace hidden';
    workspace.innerHTML = `
      <div class="image-sequence-head">
        <div>
          <strong>输入图序列</strong>
          <span>第 1 张决定起始画面，后续图片按顺序作为附加参考输入。</span>
        </div>
        <div class="image-sequence-actions">
          <button type="button" class="secondary-button" data-action="sequence-upload-primary">上传第 1 张</button>
          <button type="button" class="secondary-button" data-action="sequence-upload-reference">上传附加图</button>
          <button type="button" class="secondary-button" data-action="sequence-add-url">加入图片 URL</button>
          <button type="button" class="secondary-button" data-action="sequence-clear-all">清空序列</button>
        </div>
      </div>
      <div id="imageToVideoSequenceList" class="image-sequence-list"></div>`;
    els.imageToVideoInputPanel.insertAdjacentElement('afterend', workspace);
    els.imageToVideoSequenceWorkspace = workspace;
  }
  if (!els.imageToVideoLocalWorkspace && els.imageToVideoInputPanel?.parentElement) {
    const workspace = document.createElement('section');
    workspace.id = 'imageToVideoLocalWorkspace';
    workspace.className = 'local-image-workspace hidden';
    workspace.innerHTML = `
      <div class="local-image-workspace-head">
        <strong>本地图片工作区</strong>
        <span>上传、选中、移除都在这里完成</span>
      </div>
      <div class="local-image-grid">
        <section class="local-image-lane local-image-lane-primary">
          <div class="local-image-lane-head">
            <strong>主图 / 首帧</strong>
            <span>这里始终只有 1 张，本地上传后会自动设为主图。</span>
          </div>
          <div class="local-image-actions">
            <button type="button" class="secondary-button" data-action="workspace-upload-source">上传主图</button>
            <button type="button" class="secondary-button" data-action="workspace-clear-source">清空主图</button>
          </div>
          <div id="workspaceSourceSelection" class="local-image-selection"></div>
        </section>
        <section class="local-image-lane local-image-lane-reference">
          <div class="local-image-lane-head">
            <strong>本地附加参考图</strong>
            <span>可上传多张；支持拖拽排序；也可以在下方素材库点击“设为参考图”。</span>
          </div>
          <div class="local-image-actions">
            <button type="button" class="secondary-button" data-action="workspace-upload-reference">上传附加图</button>
            <button type="button" class="secondary-button" data-action="workspace-clear-reference">清空附加图</button>
          </div>
          <div id="workspaceReferenceSelection" class="local-image-selection"></div>
        </section>
      </div>`;
    els.imageToVideoInputPanel.insertAdjacentElement('afterend', workspace);
    els.imageToVideoLocalWorkspace = workspace;
  }
  if (!els.imageToVideoUrlWorkspace && els.imageToVideoLocalWorkspace?.parentElement) {
    const workspace = document.createElement('section');
    workspace.id = 'imageToVideoUrlWorkspace';
    workspace.className = 'local-image-workspace hidden';
    workspace.innerHTML = `
      <div class="local-image-workspace-head">
        <strong>URL 图片工作区</strong>
        <span>把远程图片也当成输入序列来管理</span>
      </div>
      <div class="local-image-grid">
        <section class="local-image-lane local-image-lane-primary local-image-lane-url">
          <div class="local-image-lane-head">
            <strong>主图 URL</strong>
            <span>如果你不用本地主图，可以直接把第 1 张输入图写成 URL。</span>
          </div>
          <div class="local-image-actions">
            <button type="button" class="secondary-button" data-action="workspace-set-source-url">设置主图 URL</button>
            <button type="button" class="secondary-button" data-action="workspace-clear-source-url">清空主图 URL</button>
          </div>
          <div id="workspaceSourceUrlSelection" class="local-image-selection"></div>
        </section>
        <section class="local-image-lane local-image-lane-reference local-image-lane-url">
          <div class="local-image-lane-head">
            <strong>附加参考图 URL</strong>
            <span>支持添加多条、拖拽排序、设为第 1 张。</span>
          </div>
          <div class="local-image-actions">
            <button type="button" class="secondary-button" data-action="workspace-add-reference-url">添加附加图 URL</button>
            <button type="button" class="secondary-button" data-action="workspace-clear-reference-url">清空附加图 URL</button>
          </div>
          <div id="workspaceReferenceUrlSelection" class="local-image-selection"></div>
        </section>
      </div>`;
    els.imageToVideoLocalWorkspace.insertAdjacentElement('afterend', workspace);
    els.imageToVideoUrlWorkspace = workspace;
  }
}

function updateSoraWorkflowPanel(taskType, caps, generationMode) {
  if (!els.soraWorkflowPanel || !els.soraWorkflowSummary) return;
  const model = currentModel();
  const modelId = String(model?.id || '').trim() || '未选择模型';
  const taskLabel = getTaskDisplayLabel(taskType);
  const summaryBits = [`任务 ${taskLabel}`, `模型 ${modelId}`, `入口 ${getTaskPromptModeLabel(taskType)}`];
  if ((taskType === 'text_to_video' || taskType === 'image_to_video') && generationMode === 'storyboard') {
    summaryBits.push('当前为故事板模式');
  }
  if ((taskType === 'text_to_video' || taskType === 'image_to_video') && generationMode === 'intelligent') {
    summaryBits.push('当前为智能分镜模式');
  }
  if ((taskType === 'text_to_video' || taskType === 'image_to_video') && caps.durationOptions?.length) {
    summaryBits.push(`时长 ${caps.durationOptions.join('/')}`);
  } else if ((taskType === 'text_to_video' || taskType === 'image_to_video') && caps.supportsDuration === true) {
    summaryBits.push('支持自定义时长');
  }
  if (caps.aspectRatioOptions?.length) summaryBits.push(`比例 ${caps.aspectRatioOptions.slice(0, 3).join('/')}`);
  els.soraWorkflowSummary.textContent = summaryBits.join(' / ');
  Array.from(els.soraWorkflowPanel.querySelectorAll('[data-action]')).forEach((button) => {
    const action = String(button.dataset.action || '');
    const active = (
      (action === 'workflow-task-text-image' && taskType === 'text_to_image')
      || (action === 'workflow-task-image-edit' && taskType === 'image_edit')
      || (action === 'workflow-task-text-video' && taskType === 'text_to_video')
      || (action === 'workflow-task-image-video' && taskType === 'image_to_video')
      || (action === 'workflow-mode-standard' && generationMode === 'standard')
      || (action === 'workflow-mode-storyboard' && generationMode === 'storyboard')
    );
    button.dataset.flowActive = active ? 'true' : 'false';
  });
}

function updateSoraSubmitPanel(taskType, caps, generationMode) {
  const taskLabelMap = {
    text_to_image: '文生图',
    image_edit: '图片编辑',
    text_to_video: '文生视频',
    image_to_video: '图生视频'
  };
  if (!els.soraSubmitPanel || !els.soraSubmitSummary || !els.soraSubmitTags) return;
  const model = currentModel();
  const taskLabel = taskType === 'image_to_video' ? '图生视频' : '文生视频';
  const normalizedTaskLabel = taskLabelMap[taskType] || taskType;
  const promptLength = String(els.prompt?.value || '').trim().length;
  const sequenceSummary = taskType === 'image_to_video' ? getImageToVideoInputSequenceSummary() : null;
  const hasPrimary = Boolean(sequenceSummary?.primary);
  const duration = String(els.durationHidden?.value || els.durationInput?.value || '').trim();
  const aspectRatio = String(els.aspectRatio?.value || '').trim();
  const summary = taskType === 'image_to_video'
    ? `当前将以 ${hasPrimary ? '主图 + 参考图序列' : '待补充主图'} 提交到 ${String(model?.id || 'Sora')}${generationMode !== 'standard' ? `，模式为 ${generationMode}` : ''}。`
    : `当前将以 prompt 驱动 ${String(model?.id || 'Sora')} 生成视频${generationMode !== 'standard' ? `，模式为 ${generationMode}` : ''}。`;
  els.soraSubmitSummary.textContent = summary;
  const tags = [];
  tags.push({ text: `任务 ${normalizedTaskLabel}` });
  tags.push({ text: `任务 ${taskLabel}` });
  if (promptLength) tags.push({ text: `Prompt ${promptLength} 字` });
  else if (taskType === 'text_to_video' && generationMode !== 'storyboard') tags.push({ text: '缺少 Prompt', warning: true });
  if (taskType === 'image_to_video') {
    tags.push({ text: hasPrimary ? '已设置第 1 张输入图' : '缺少第 1 张输入图', warning: !hasPrimary });
    tags.push({ text: `附加图 ${sequenceSummary?.referenceCount || 0} 张` });
  }
  if (generationMode === 'storyboard') {
    const shotCount = storyboardShotsFromEditor().length;
    tags.push({ text: shotCount ? `分镜 ${shotCount} 个镜头` : '缺少分镜内容', warning: shotCount === 0 });
  }
  if (duration) tags.push({ text: `时长 ${duration}s` });
  else if (caps.durationOptions?.length) tags.push({ text: `可选时长 ${caps.durationOptions.join('/')}` });
  if (aspectRatio) tags.push({ text: `比例 ${aspectRatio}` });
  const uniqueTags = tags.filter((tag, index) => tags.findIndex((item) => `${item.text}|${Boolean(item.warning)}` === `${tag.text}|${Boolean(tag.warning)}`) === index);
  els.soraSubmitTags.innerHTML = uniqueTags
    .map((tag) => `<span class="sora-submit-tag${tag.warning ? ' sora-submit-tag-warning' : ''}">${escapeHtml(tag.text)}</span>`)
    .join('');
}

function updateBridgeSubmitPanel(taskType, caps, generationMode) {
  if (!els.soraSubmitPanel || !els.soraSubmitSummary || !els.soraSubmitTags) return;
  const model = currentModel();
  const taskLabel = getTaskDisplayLabel(taskType);
  const promptLength = String(els.prompt?.value || '').trim().length;
  const sequenceSummary = taskType === 'image_to_video' ? getImageToVideoInputSequenceSummary() : null;
  const hasPrimary = Boolean(sequenceSummary?.primary);
  const hasSourceImage = hasSourceVisualInput(taskType);
  const duration = String(els.durationHidden?.value || els.durationInput?.value || '').trim();
  const aspectRatio = String(els.aspectRatio?.value || '').trim();
  const modelId = String(model?.id || (taskType === 'text_to_image' || taskType === 'image_edit' ? 'Nano Banana' : 'Sora'));

  let summary = '';
  if (taskType === 'text_to_image') {
    summary = `当前将以 Prompt 提交到 ${modelId} 生成图片${aspectRatio ? `，目标比例为 ${aspectRatio}` : ''}。`;
  } else if (taskType === 'image_edit') {
    summary = `当前将以 ${hasSourceImage ? '原图 + Prompt' : '待补原图'} 提交到 ${modelId} 做图片编辑${aspectRatio ? `，目标比例为 ${aspectRatio}` : ''}。`;
  } else if (taskType === 'image_to_video') {
    summary = `当前将以 ${hasPrimary ? '第 1 张输入图 + 参考图序列' : '待补第 1 张输入图'} 提交到 ${modelId} 生成视频${generationMode !== 'standard' ? `，模式为 ${generationMode}` : ''}。`;
  } else {
    summary = `当前将以 Prompt 提交到 ${modelId} 生成视频${generationMode !== 'standard' ? `，模式为 ${generationMode}` : ''}。`;
  }
  els.soraSubmitSummary.textContent = summary;

  const tags = [{ text: `任务 ${taskLabel}` }];
  if (promptLength) tags.push({ text: `Prompt ${promptLength} 字` });
  else if ((taskType === 'text_to_video' || taskType === 'text_to_image') && generationMode !== 'storyboard') tags.push({ text: '缺少 Prompt', warning: true });
  else if (taskType === 'image_edit' || taskType === 'image_to_video') tags.push({ text: '建议补充 Prompt 约束动作或改图目标' });

  if (taskType === 'image_to_video') {
    tags.push({ text: hasPrimary ? '已设置第 1 张输入图' : '缺少第 1 张输入图', warning: !hasPrimary });
    tags.push({ text: `附加图 ${sequenceSummary?.referenceCount || 0} 张` });
  }
  if (taskType === 'image_edit') {
    tags.push({ text: hasSourceImage ? '已设置待编辑原图' : '缺少待编辑原图', warning: !hasSourceImage });
  }
  if (generationMode === 'storyboard') {
    const shotCount = storyboardShotsFromEditor().length;
    tags.push({ text: shotCount ? `分镜 ${shotCount} 个镜头` : '缺少分镜内容', warning: shotCount === 0 });
  }
  if (duration) tags.push({ text: `时长 ${duration}s` });
  else if ((taskType === 'text_to_video' || taskType === 'image_to_video') && caps.durationOptions?.length) tags.push({ text: `可选时长 ${caps.durationOptions.join('/')}` });
  if (aspectRatio) tags.push({ text: `比例 ${aspectRatio}` });

  const uniqueTags = tags.filter((tag, index) => tags.findIndex((item) => `${item.text}|${Boolean(item.warning)}` === `${tag.text}|${Boolean(tag.warning)}`) === index);
  els.soraSubmitTags.innerHTML = uniqueTags
    .map((tag) => `<span class="sora-submit-tag${tag.warning ? ' sora-submit-tag-warning' : ''}">${escapeHtml(tag.text)}</span>`)
    .join('');
}

function getBridgeVideoModelFamilyLabel(model) {
  if (isVeoFamilyModel(model)) return 'Veo';
  if (isSoraFamilyModel(model)) return 'Sora';
  return 'Video';
}

function formatReferenceLimit(caps, { singular = '仅 1 张', pluralPrefix = '最多 ' } = {}) {
  if (!caps?.supportsMultipleReferenceImages) return singular;
  if (caps.hasExplicitReferenceLimit && caps.maxReferenceImages) return `${pluralPrefix}${caps.maxReferenceImages} 张`;
  return '上限未声明';
}

function getImageSequenceSubmissionSummary(caps) {
  const summary = getImageToVideoInputSequenceSummary();
  const primaryReady = Boolean(summary?.primary);
  const submittedReferenceCount = caps.supportsImageToVideoReferenceImages ? Number(summary?.referenceCount || 0) : 0;
  return {
    primaryReady,
    totalReferenceCount: Number(summary?.referenceCount || 0),
    submittedReferenceCount,
    droppedReferenceCount: Math.max(0, Number(summary?.referenceCount || 0) - submittedReferenceCount)
  };
}

updateBridgeSubmitPanel = function updateBridgeSubmitPanel(taskType, caps, generationMode) {
  if (!els.soraSubmitPanel || !els.soraSubmitSummary || !els.soraSubmitTags) return;
  const model = currentModel();
  const taskLabel = getTaskDisplayLabel(taskType);
  const promptLength = String(els.prompt?.value || '').trim().length;
  const sequenceSummary = taskType === 'image_to_video' ? getImageToVideoInputSequenceSummary() : null;
  const imageSequence = taskType === 'image_to_video' ? getImageSequenceSubmissionSummary(caps) : null;
  const hasPrimary = Boolean(sequenceSummary?.primary);
  const hasSourceImage = hasSourceVisualInput(taskType);
  const duration = String(els.durationHidden?.value || els.durationInput?.value || '').trim();
  const aspectRatio = String(els.aspectRatio?.value || '').trim();
  const modelId = String(model?.id || (taskType === 'text_to_image' || taskType === 'image_edit' ? 'Nano Banana' : 'Sora'));
  const videoFamily = getBridgeVideoModelFamilyLabel(model);
  const endFrameReady = Boolean(String(els.endFrameImageUrl?.value || '').trim() || String(els.endFrameAssetSelect?.value || '').trim());

  let summary = '';
  if (taskType === 'text_to_image') {
    summary = `当前会把 Prompt 提交给 ${modelId} 生成图片${aspectRatio ? `，目标比例为 ${aspectRatio}` : ''}。`;
  } else if (taskType === 'image_edit') {
    summary = `当前会把 ${hasSourceImage ? '原图 + Prompt' : '待补原图'} 提交给 ${modelId} 做图片编辑${aspectRatio ? `，目标比例为 ${aspectRatio}` : ''}。`;
  } else if (taskType === 'image_to_video') {
    if (isVeoFamilyModel(model)) {
      summary = imageSequence?.primaryReady
        ? `当前会把第 1 张输入图作为 ${videoFamily} 的起始画面提交${imageSequence.submittedReferenceCount ? `，并附带 ${imageSequence.submittedReferenceCount} 张参考图` : ''}${caps.supportsImageToVideoEndFrame && endFrameReady ? '，尾帧也会一起提交' : ''}。`
        : `当前是 ${videoFamily} 图生视频，但还缺少第 1 张输入图，提交后不会得到稳定的起始画面。`;
    } else {
      summary = `当前会把 ${hasPrimary ? '第 1 张输入图 + 参考图序列' : '待补第 1 张输入图'} 提交给 ${modelId} 生成视频${generationMode !== 'standard' ? `，模式为 ${generationMode}` : ''}。`;
    }
  } else if (isVeoFamilyModel(model)) {
    summary = `当前会用 Prompt 驱动 ${videoFamily} 文生视频${caps.supportsTextToVideoReferenceImages ? '；参考图只会作为主体或风格约束，不会当作首帧' : ''}${caps.supportsPromptOptimize ? '；提交前可先做模型提示词优化。' : '。'}`;
  } else {
    summary = `当前会把 Prompt 提交给 ${modelId} 生成视频${generationMode !== 'standard' ? `，模式为 ${generationMode}` : ''}。`;
  }
  els.soraSubmitSummary.textContent = summary;

  const tags = [{ text: `任务 ${taskLabel}` }];
  if (taskType === 'text_to_video' || taskType === 'image_to_video') tags.push({ text: `视频家族 ${videoFamily}` });
  if (promptLength) tags.push({ text: `Prompt ${promptLength} 字` });
  else if ((taskType === 'text_to_video' || taskType === 'text_to_image') && generationMode !== 'storyboard') tags.push({ text: '缺少 Prompt', warning: true });
  else if (taskType === 'image_edit' || taskType === 'image_to_video') tags.push({ text: '建议补充 Prompt 约束动作或改图目标' });

  if (taskType === 'image_to_video') {
    tags.push({ text: hasPrimary ? '已设置第 1 张输入图' : '缺少第 1 张输入图', warning: !hasPrimary });
    if (caps.supportsImageToVideoReferenceImages) {
      tags.push({ text: `参考图提交 ${imageSequence?.submittedReferenceCount || 0} 张` });
    } else {
      tags.push({ text: '参考图不会提交', warning: Boolean(sequenceSummary?.referenceCount) });
    }
    if (caps.supportsImageToVideoEndFrame) {
      tags.push({ text: endFrameReady ? '尾帧会提交' : '未设置尾帧' });
    } else {
      tags.push({ text: '不支持尾帧' });
    }
    if (imageSequence?.droppedReferenceCount) {
      tags.push({ text: `${imageSequence.droppedReferenceCount} 张参考图当前不会发送`, warning: true });
    }
  }
  if (taskType === 'image_edit') {
    tags.push({ text: hasSourceImage ? '已设置待编辑原图' : '缺少待编辑原图', warning: !hasSourceImage });
  }
  if (taskType === 'text_to_video') {
    tags.push({ text: caps.supportsTextToVideoReferenceImages ? '参考图仅作约束' : '无参考图输入' });
    if (caps.supportsPromptOptimize) tags.push({ text: '支持提示词优化' });
  }
  if (generationMode === 'storyboard') {
    const shotCount = storyboardShotsFromEditor().length;
    tags.push({ text: shotCount ? `分镜 ${shotCount} 个镜头` : '缺少分镜内容', warning: shotCount === 0 });
  }
  if (duration) tags.push({ text: `时长 ${duration}s` });
  else if ((taskType === 'text_to_video' || taskType === 'image_to_video') && caps.durationOptions?.length) tags.push({ text: `可选时长 ${caps.durationOptions.join('/')}` });
  if (aspectRatio) tags.push({ text: `比例 ${aspectRatio}` });

  const uniqueTags = tags.filter((tag, index) => tags.findIndex((item) => `${item.text}|${Boolean(item.warning)}` === `${tag.text}|${Boolean(tag.warning)}`) === index);
  els.soraSubmitTags.innerHTML = uniqueTags
    .map((tag) => `<span class="sora-submit-tag${tag.warning ? ' sora-submit-tag-warning' : ''}">${escapeHtml(tag.text)}</span>`)
    .join('');
};

updateImageToVideoPromptGuide = function updateImageToVideoPromptGuide() {
  if (!els.imageToVideoPromptGuide || !els.imageToVideoPromptSummary) return;
  const taskType = String(els.typeSelect?.value || '');
  const visible = taskType === 'image_to_video';
  showElement(els.imageToVideoPromptGuide, visible);
  if (!visible) return;
  const title = els.imageToVideoPromptGuide.querySelector('strong');
  if (title) title.textContent = '图像提示';
  const cards = Array.from(els.imageToVideoPromptGuide.querySelectorAll('.prompt-guide-card'));
  if (cards[0]) {
    const cardTitle = cards[0].querySelector('strong');
    const cardCopy = cards[0].querySelector('p');
    if (cardTitle) cardTitle.textContent = '第 1 张';
    if (cardCopy) cardCopy.textContent = '决定起始画面。';
  }
  if (cards[1]) {
    const cardTitle = cards[1].querySelector('strong');
    const cardCopy = cards[1].querySelector('p');
    if (cardTitle) cardTitle.textContent = '参考图';
    if (cardCopy) cardCopy.textContent = '只作主体或风格约束。';
  }
  if (cards[2]) {
    const cardTitle = cards[2].querySelector('strong');
    const cardCopy = cards[2].querySelector('p');
    if (cardTitle) cardTitle.textContent = 'Prompt';
    if (cardCopy) cardCopy.textContent = '重点写动作、镜头和节奏。';
  }
  ensureImageToVideoSequenceState();
  const caps = getModelCapabilities(currentModel(), taskType);
  const model = currentModel();
  const family = getBridgeVideoModelFamilyLabel(model);
  const submission = getImageSequenceSubmissionSummary(caps);
  const promptLength = String(els.prompt?.value || '').trim().length;
  const endFrameReady = Boolean(String(els.endFrameImageUrl?.value || '').trim() || String(els.endFrameAssetSelect?.value || '').trim());
  const primaryLabel = submission.primaryReady ? '已设置第 1 张输入图' : '尚未设置第 1 张输入图';
  const referenceLabel = caps.supportsImageToVideoReferenceImages
    ? `参考图将提交 ${submission.submittedReferenceCount} 张`
    : `参考图不会提交${submission.totalReferenceCount ? `（当前有 ${submission.totalReferenceCount} 张）` : ''}`;
  const endFrameLabel = caps.supportsImageToVideoEndFrame
    ? (endFrameReady ? '尾帧会提交' : '可选尾帧未设置')
    : '当前模型不支持尾帧';
  const promptLabel = promptLength ? `Prompt ${promptLength} 字` : (caps.supportsPromptOptimize ? '建议先写 Prompt 再做模型优化' : '建议补一段运动/镜头提示词');
  els.imageToVideoPromptSummary.textContent = `${family} / ${primaryLabel} / ${referenceLabel} / ${endFrameLabel} / ${promptLabel}`;
};

updateBridgeSubmitPanel = function updateBridgeSubmitPanel(taskType, caps, generationMode) {
  if (!els.soraSubmitPanel || !els.soraSubmitSummary || !els.soraSubmitTags) return;
  const model = currentModel();
  const taskLabel = getTaskDisplayLabel(taskType);
  const promptLength = String(els.prompt?.value || '').trim().length;
  const sequenceSummary = taskType === 'image_to_video' ? getImageToVideoInputSequenceSummary() : null;
  const imageSequence = taskType === 'image_to_video' ? getImageSequenceSubmissionSummary(caps) : null;
  const hasPrimary = Boolean(sequenceSummary?.primary);
  const hasSourceImage = hasSourceVisualInput(taskType);
  const duration = String(els.durationHidden?.value || els.durationInput?.value || '').trim();
  const aspectRatio = String(els.aspectRatio?.value || '').trim();
  const modelId = String(model?.id || (taskType === 'text_to_image' || taskType === 'image_edit' ? 'Nano Banana' : 'Sora'));
  const videoFamily = getBridgeVideoModelFamilyLabel(model);
  const endFrameReady = Boolean(String(els.endFrameImageUrl?.value || '').trim() || String(els.endFrameAssetSelect?.value || '').trim());

  let summary = '';
  if (taskType === 'text_to_image') {
    summary = `当前会把 Prompt 提交给 ${modelId} 生成图片${aspectRatio ? `，目标比例为 ${aspectRatio}` : ''}。`;
  } else if (taskType === 'image_edit') {
    summary = `当前会把 ${hasSourceImage ? '原图 + Prompt' : '待补原图'} 提交给 ${modelId} 做图片编辑${aspectRatio ? `，目标比例为 ${aspectRatio}` : ''}。`;
  } else if (taskType === 'image_to_video') {
    summary = hasPrimary
      ? `当前会把第 1 张输入图提交给 ${modelId} 作为起始画面${caps.supportsImageToVideoReferenceImages ? `；参考图当前${imageSequence?.submittedReferenceCount || 0}张会随任务一起发送` : '；当前模型不提交参考图'}${caps.supportsImageToVideoEndFrame ? (endFrameReady ? '；尾帧也会一起提交。' : '；支持尾帧，但你还没设置。') : '。'}`
      : `当前是 ${videoFamily} 图生视频，但还缺少第 1 张输入图。`;
  } else {
    summary = `当前会用 Prompt 驱动 ${modelId} 生成视频${caps.supportsTextToVideoReferenceImages ? '；参考图只作为主体或风格约束，不会当作首帧' : ''}${caps.supportsPromptOptimize ? '；提交前可先做模型提示词优化。' : '。'}`;
  }
  els.soraSubmitSummary.textContent = summary;

  const tags = [{ text: `任务 ${taskLabel}` }];
  if (taskType === 'text_to_video' || taskType === 'image_to_video') tags.push({ text: `视频家族 ${videoFamily}` });
  if (caps.capabilitySourceLabel) tags.push({ text: `能力来源 ${caps.capabilitySourceLabel}` });
  if (promptLength) tags.push({ text: `Prompt ${promptLength} 字` });
  else if ((taskType === 'text_to_video' || taskType === 'text_to_image') && generationMode !== 'storyboard') tags.push({ text: '缺少 Prompt', warning: true });
  else if (taskType === 'image_edit' || taskType === 'image_to_video') tags.push({ text: '建议补充 Prompt 约束动作或改图目标' });

  if (taskType === 'image_to_video') {
    tags.push({ text: hasPrimary ? '已设置第 1 张输入图' : '缺少第 1 张输入图', warning: !hasPrimary });
    if (caps.supportsImageToVideoReferenceImages) {
      tags.push({ text: `参考图提交 ${imageSequence?.submittedReferenceCount || 0} 张` });
      tags.push({ text: `参考图${formatReferenceLimit(caps, { singular: '仅 1 张', pluralPrefix: '最多 ' })}` });
    } else {
      tags.push({ text: '参考图不会提交', warning: Boolean(sequenceSummary?.referenceCount) });
    }
    if (caps.supportsImageToVideoEndFrame) tags.push({ text: endFrameReady ? '尾帧会提交' : '支持尾帧但未设置' });
    else tags.push({ text: '不支持尾帧' });
    if (imageSequence?.droppedReferenceCount) tags.push({ text: `${imageSequence.droppedReferenceCount} 张参考图当前不会发送`, warning: true });
  }

  if (taskType === 'image_edit') {
    tags.push({ text: hasSourceImage ? '已设置待编辑原图' : '缺少待编辑原图', warning: !hasSourceImage });
  }

  if (taskType === 'text_to_video') {
    tags.push({ text: caps.supportsTextToVideoReferenceImages ? '参考图仅作约束' : '无参考图输入' });
    if (caps.supportsTextToVideoReferenceImages) tags.push({ text: `参考图${formatReferenceLimit(caps, { singular: '仅 1 张', pluralPrefix: '最多 ' })}` });
    if (caps.supportsPromptOptimize) tags.push({ text: '支持提示词优化' });
  }

  if (generationMode === 'storyboard') {
    const shotCount = storyboardShotsFromEditor().length;
    tags.push({ text: shotCount ? `分镜 ${shotCount} 个镜头` : '缺少分镜内容', warning: shotCount === 0 });
  }
  if (duration) tags.push({ text: `时长 ${duration}s` });
  else if ((taskType === 'text_to_video' || taskType === 'image_to_video') && caps.durationOptions?.length) tags.push({ text: `可选时长 ${caps.durationOptions.join('/')}` });
  if (aspectRatio) tags.push({ text: `比例 ${aspectRatio}` });

  const uniqueTags = tags.filter((tag, index) => tags.findIndex((item) => `${item.text}|${Boolean(item.warning)}` === `${tag.text}|${Boolean(tag.warning)}`) === index);
  els.soraSubmitTags.innerHTML = uniqueTags
    .map((tag) => `<span class="sora-submit-tag${tag.warning ? ' sora-submit-tag-warning' : ''}">${escapeHtml(tag.text)}</span>`)
    .join('');
};

updateImageToVideoPromptGuide = function updateImageToVideoPromptGuide() {
  if (!els.imageToVideoPromptGuide || !els.imageToVideoPromptSummary) return;
  const taskType = String(els.typeSelect?.value || '');
  const visible = taskType === 'image_to_video';
  showElement(els.imageToVideoPromptGuide, visible);
  if (!visible) return;
  ensureImageToVideoSequenceState();
  const caps = getModelCapabilities(currentModel(), taskType);
  const model = currentModel();
  const family = getBridgeVideoModelFamilyLabel(model);
  const submission = getImageSequenceSubmissionSummary(caps);
  const promptLength = String(els.prompt?.value || '').trim().length;
  const endFrameReady = Boolean(String(els.endFrameImageUrl?.value || '').trim() || String(els.endFrameAssetSelect?.value || '').trim());
  const primaryLabel = submission.primaryReady ? '已设置第 1 张输入图' : '尚未设置第 1 张输入图';
  const referenceLabel = caps.supportsImageToVideoReferenceImages
    ? `参考图将提交 ${submission.submittedReferenceCount} 张，${formatReferenceLimit(caps, { singular: '仅 1 张', pluralPrefix: '最多 ' })}`
    : `参考图不会提交${submission.totalReferenceCount ? `（当前有 ${submission.totalReferenceCount} 张）` : ''}`;
  const endFrameLabel = caps.supportsImageToVideoEndFrame
    ? (endFrameReady ? '尾帧会提交' : '支持尾帧但未设置')
    : '当前模型不支持尾帧';
  const promptLabel = promptLength ? `Prompt ${promptLength} 字` : (caps.supportsPromptOptimize ? '建议先写 Prompt 再做模型优化' : '建议补一段运动/镜头提示词');
  els.imageToVideoPromptSummary.textContent = `${family} / ${caps.capabilitySourceLabel || '能力未标注'} / ${primaryLabel} / ${referenceLabel} / ${endFrameLabel} / ${promptLabel}`;
};

updateSoraWorkflowPanel = function updateSoraWorkflowPanel(taskType, caps, generationMode) {
  if (!els.soraWorkflowPanel || !els.soraWorkflowSummary) return;
  const model = currentModel();
  const modelId = String(model?.id || '').trim() || '未选择模型';
  const isVeoModel = isVeoFamilyModel(model);
  const isSoraModel = isSoraFamilyModel(model);
  const taskLabel = getTaskDisplayLabel(taskType);
  const summaryBits = [
    `任务 ${taskLabel}`,
    `模型 ${modelId}`
  ];
  if ((taskType === 'text_to_video' || taskType === 'image_to_video') && caps.aspectRatioOptions?.length) {
    summaryBits.push(`比例 ${caps.aspectRatioOptions.slice(0, 3).join('/')}`);
  }
  if ((taskType === 'text_to_video' || taskType === 'image_to_video') && caps.supportsDuration) {
    summaryBits.push(caps.durationOptions?.length ? `时长 ${caps.durationOptions.join('/')}` : '可设时长');
  } else if ((taskType === 'text_to_video' || taskType === 'image_to_video') && isVeoModel) {
    summaryBits.push('不开放时长');
  }
  if (taskType === 'image_to_video' && caps.supportsImageToVideoEndFrame) summaryBits.push('支持首尾帧');
  els.soraWorkflowSummary.textContent = summaryBits.join(' / ');

  const storyboardButtons = Array.from(els.soraWorkflowPanel.querySelectorAll('[data-action="workflow-mode-storyboard"], [data-action="workflow-seed-storyboard"]'));
  const optimizeButton = els.soraWorkflowPanel.querySelector('[data-action="workflow-optimize-prompt"]');
  storyboardButtons.forEach((button) => {
    const allow = taskType === 'text_to_video' && caps.supportsStoryboardPrompt;
    button.classList.toggle('hidden', !allow && isVeoModel);
    button.disabled = !allow && isVeoModel;
  });
  if (optimizeButton) {
    const allowOptimize = (taskType === 'text_to_video' || taskType === 'image_to_video') && caps.supportsPromptOptimize;
    optimizeButton.classList.toggle('hidden', !allowOptimize);
    optimizeButton.disabled = !allowOptimize;
  }

  const cards = Array.from(els.soraWorkflowPanel.querySelectorAll('.sora-flow-card'));
  const textVideoCard = cards.find((card) => card.querySelector('[data-action="workflow-mode-standard"]'));
  const veoCard = cards.find((card) => card.querySelector('[data-action="workflow-optimize-prompt"]'));
  const imageVideoCard = cards.find((card) => card.querySelector('[data-action="workflow-task-image-video"]'));
  if (textVideoCard) {
    const title = textVideoCard.querySelector('strong');
    const copy = textVideoCard.querySelector('p');
    if (isVeoModel) {
      if (title) title.textContent = 'Veo 文生视频';
      if (copy) copy.textContent = '先写 Prompt，再定比例和分辨率。';
    } else if (isSoraModel) {
      if (title) title.textContent = 'Sora 文生视频';
      if (copy) copy.textContent = '先写 Prompt，再补时长和画幅。';
    } else {
      if (title) title.textContent = '文生视频';
      if (copy) copy.textContent = '先写 Prompt，再补必要参数。';
    }
  }
  if (veoCard) {
    veoCard.classList.toggle('hidden', !isVeoModel);
  }
  if (imageVideoCard) {
    const title = imageVideoCard.querySelector('strong');
    const copy = imageVideoCard.querySelector('p');
    if (isVeoModel) {
      if (title) title.textContent = 'Veo 图生视频';
      if (copy) copy.textContent = caps.supportsImageToVideoEndFrame
        ? '第 1 张是首帧，可选尾帧。'
        : '第 1 张是首帧，只显示可提交输入。';
    } else if (isSoraModel) {
      if (title) title.textContent = 'Sora 图生视频';
      if (copy) copy.textContent = '第 1 张定起始画面，后续图做参考。';
    }
  }

  Array.from(els.soraWorkflowPanel.querySelectorAll('[data-action]')).forEach((button) => {
    const action = String(button.dataset.action || '');
    const active = (
      (action === 'workflow-task-text-image' && taskType === 'text_to_image')
      || (action === 'workflow-task-image-edit' && taskType === 'image_edit')
      || (action === 'workflow-task-text-video' && taskType === 'text_to_video')
      || (action === 'workflow-task-image-video' && taskType === 'image_to_video')
      || (action === 'workflow-mode-standard' && generationMode === 'standard')
      || (action === 'workflow-mode-storyboard' && generationMode === 'storyboard')
    );
    button.dataset.flowActive = active ? 'true' : 'false';
  });
};

renderFieldGuide = function renderFieldGuide(entries = []) {
  if (!els.fieldGuidePanel) return;
  const list = Array.isArray(entries) ? entries.slice(0, 4) : [];
  if (!list.length) {
    els.fieldGuidePanel.innerHTML = '';
    return;
  }
  const cards = list.map((entry) => `
    <article class="field-guide-card">
      <div class="field-guide-head">
        <div class="field-guide-title">${escapeHtml(entry.title)}</div>
        <span class="field-guide-kind">${escapeHtml(entry.kind)}</span>
      </div>
      <div class="field-guide-copy">${escapeHtml(String(entry.purpose || '').split(/[。；]/)[0] || '')}</div>
      <div class="field-guide-tip">${escapeHtml(String(entry.recommendation || '').split(/[。；]/)[0] || '')}</div>
    </article>
  `).join('');
  const remain = entries.length > list.length ? '<div class="inline-hint">其余细节见模型卡。</div>' : '';
  els.fieldGuidePanel.innerHTML = cards + remain;
};

updatePromptOptimizePanel = function updatePromptOptimizePanel(taskType, caps) {
  if (!els.promptOptimizePanel || !els.optimizePromptWithModel || !els.promptOptimizeSummary || !els.promptOptimizeStatus) return;
  const isVideoTask = taskType === 'text_to_video' || taskType === 'image_to_video';
  const supportsOptimize = Boolean(isVideoTask && caps.supportsPromptOptimize);
  showElement(els.promptOptimizePanel, supportsOptimize);
  if (!supportsOptimize) {
    els.promptOptimizeStatus.textContent = '';
    showElement(els.promptOptimizeStatus, false);
    return;
  }
  const modelId = String(currentModel()?.id || '').trim() || '当前模型';
  els.promptOptimizeSummary.textContent = `${modelId} 可优化当前 Prompt。`;
  els.optimizePromptWithModel.disabled = false;
  els.optimizePromptWithModel.dataset.taskType = taskType;
  els.optimizePromptWithModel.dataset.optimizePath = String(caps.promptOptimizePath || '').trim();
};

getVisualInputSemantics = function getVisualInputSemantics(taskType, caps, generationMode) {
  const isImageToVideo = taskType === 'image_to_video';
  const isImageEdit = taskType === 'image_edit';
  const isTextToVideo = taskType === 'text_to_video';
  const structuredMode = isTextToVideo && (generationMode === 'storyboard' || generationMode === 'intelligent');
  const intelligentMode = isTextToVideo && generationMode === 'intelligent';
  const storyboardMode = isTextToVideo && generationMode === 'storyboard';
  const semantics = {
    structuredMode,
    hidesVisualInputs: structuredMode,
    sourceLabel: '源图 URL',
    sourceAssetLabel: '本地源图',
    sourceUploadLabel: '上传源图',
    sourcePlaceholder: '填图片 URL',
    sourceHint: '',
    referenceLabel: '参考图 URL',
    referenceAssetLabel: '本地参考图',
    referenceUploadLabel: '上传参考图',
    referencePlaceholder: caps.supportsMultipleReferenceImages ? '一行一张 URL' : '填 1 张参考图 URL',
    referenceHint: '',
    endFrameLabel: '尾帧 URL',
    endFrameAssetLabel: '本地尾帧',
    endFrameUploadLabel: '上传尾帧',
    endFramePlaceholder: '可选',
    endFrameHint: '',
    omniImagePlaceholder: '一行一个图片 URL',
    omniVideoPlaceholder: '一行一个视频 URL',
    elementPlaceholder: '一行一个元素描述',
    omniHint: '',
    visualGuide: ''
  };
  if (storyboardMode) {
    semantics.visualGuide = '当前只提交分镜文本。';
    return semantics;
  }
  if (intelligentMode) {
    semantics.visualGuide = '当前只提交 Prompt 和分镜参数。';
    return semantics;
  }
  if (isImageToVideo) {
    semantics.sourceLabel = '首帧 / 输入图 URL';
    semantics.sourceAssetLabel = '本地首帧 / 输入图';
    semantics.sourceUploadLabel = '上传首帧 / 输入图';
    semantics.sourcePlaceholder = '必填';
    semantics.sourceHint = '第 1 张决定起始画面。';
    semantics.referenceLabel = '附加参考图 URL';
    semantics.referenceAssetLabel = '本地附加参考图';
    semantics.referenceUploadLabel = '上传附加参考图';
    semantics.referencePlaceholder = caps.supportsMultipleReferenceImages ? '一行一张 URL' : '可选 1 张';
    semantics.referenceHint = caps.supportsImageToVideoReferenceImages ? `参考图只作约束，${formatReferenceLimit(caps, { singular: '仅 1 张', pluralPrefix: '最多 ' })}。` : '';
    semantics.endFrameLabel = '尾帧 URL';
    semantics.endFrameAssetLabel = '本地尾帧';
    semantics.endFrameUploadLabel = '上传尾帧';
    semantics.endFramePlaceholder = '可选';
    semantics.endFrameHint = caps.supportsImageToVideoEndFrame ? '尾帧只控制结束画面。' : '';
    semantics.visualGuide = caps.supportsImageToVideoEndFrame ? '首帧定开始，尾帧定结束。' : '首帧定开始。';
    return semantics;
  }
  if (isImageEdit) {
    semantics.sourceLabel = '待编辑原图 URL';
    semantics.sourceAssetLabel = '本地原图';
    semantics.sourceUploadLabel = '上传原图';
    semantics.sourcePlaceholder = '必填';
    semantics.sourceHint = '这张图会被直接编辑。';
    semantics.referenceHint = caps.supportsReferenceImage ? '参考图只作方向参考。' : '';
    semantics.visualGuide = caps.supportsReferenceImage ? '原图负责编辑，参考图负责方向。' : '只提交原图和 Prompt。';
    return semantics;
  }
  if (taskType === 'text_to_image') {
    semantics.referenceHint = caps.supportsTextToImageReferenceImages ? `参考图只作约束，${formatReferenceLimit(caps, { singular: '仅 1 张', pluralPrefix: '最多 ' })}。` : '';
    semantics.visualGuide = caps.supportsReferenceImage ? '参考图不会直接输出。' : '';
    return semantics;
  }
  if (isTextToVideo) {
    semantics.referenceHint = caps.supportsTextToVideoReferenceImages ? `参考图只作约束，${formatReferenceLimit(caps, { singular: '仅 1 张', pluralPrefix: '最多 ' })}。` : '';
    semantics.omniHint = caps.supportsOmniInputs ? 'Omni 输入独立于参考图。' : '';
    semantics.visualGuide = caps.supportsTextToVideoReferenceImages ? '参考图不会当首帧。' : '';
  }
  return semantics;
};

function renderImageToVideoLocalWorkspace() {
  if (!els.imageToVideoLocalWorkspace) return;
  const sourceSelection = els.imageToVideoLocalWorkspace.querySelector('#workspaceSourceSelection');
  const referenceSelection = els.imageToVideoLocalWorkspace.querySelector('#workspaceReferenceSelection');
  if (!sourceSelection || !referenceSelection) return;
  const taskType = String(els.typeSelect?.value || '');
  if (taskType !== 'image_to_video') {
    sourceSelection.innerHTML = '';
    referenceSelection.innerHTML = '';
    return;
  }
  const byId = new Map(state.assets.map((asset) => [asset.id, asset]));
  const sourceId = String(state.imageToVideoSourceAssetId || els.sourceAssetSelect?.value || '').trim();
  const referenceIds = state.imageToVideoReferenceAssetOrder.slice();
  const renderCard = (assetId, role, index = 0, total = 0) => {
    const asset = byId.get(assetId);
    if (!asset) return '';
    const src = `/api/v1/assets/${asset.id}/content`;
    const isReference = role === 'reference';
    const orderLabel = isReference ? `第 ${index + 2} 张输入图` : '第 1 张输入图';
    const moveUpDisabled = isReference && index === 0 ? 'disabled' : '';
    const moveDownDisabled = isReference && index === total - 1 ? 'disabled' : '';
    return `
      <article class="local-image-card${isReference ? ' local-image-card-draggable' : ' local-image-card-primary'}" ${isReference ? `draggable="true" data-reference-id="${escapeAttr(asset.id)}"` : ''}>
        <img src="${escapeAttr(src)}" alt="${escapeAttr(asset.originalName || asset.id)}" loading="lazy" />
        <div class="local-image-card-meta">
          <span class="local-image-order">${escapeHtml(orderLabel)}</span>
          <strong>${escapeHtml(asset.originalName || asset.id)}</strong>
          <span>${escapeHtml(asset.id)}</span>
        </div>
        <div class="local-image-actions">
          ${role === 'reference' ? `<button type="button" class="secondary-button" data-action="workspace-promote-reference" data-id="${escapeAttr(asset.id)}">设为第 1 张</button>` : ''}
          ${role === 'reference' ? `<button type="button" class="secondary-button" data-action="workspace-move-reference-up" data-id="${escapeAttr(asset.id)}" ${moveUpDisabled}>前移</button>` : ''}
          ${role === 'reference' ? `<button type="button" class="secondary-button" data-action="workspace-move-reference-down" data-id="${escapeAttr(asset.id)}" ${moveDownDisabled}>后移</button>` : ''}
          <button type="button" class="secondary-button" data-action="workspace-remove-${role}" data-id="${escapeAttr(asset.id)}">移除</button>
        </div>
      </article>`;
  };
  sourceSelection.innerHTML = sourceId
    ? renderCard(sourceId, 'source', 0, 1)
    : '<div class="local-image-empty">还没有本地主图。点“上传主图”后会自动放进这里。</div>';
  referenceSelection.innerHTML = referenceIds.length
    ? referenceIds.map((assetId, index) => renderCard(assetId, 'reference', index, referenceIds.length)).join('')
    : '<div class="local-image-empty">还没有本地附加参考图。点“上传附加图”，或在素材库点“设为参考图”。</div>';
}

function renderImageToVideoUrlWorkspace() {
  if (!els.imageToVideoUrlWorkspace) return;
  const sourceSelection = els.imageToVideoUrlWorkspace.querySelector('#workspaceSourceUrlSelection');
  const referenceSelection = els.imageToVideoUrlWorkspace.querySelector('#workspaceReferenceUrlSelection');
  if (!sourceSelection || !referenceSelection) return;
  const taskType = String(els.typeSelect?.value || '');
  if (taskType !== 'image_to_video') {
    sourceSelection.innerHTML = '';
    referenceSelection.innerHTML = '';
    return;
  }
  const sourceUrl = String(state.imageToVideoSourceUrlValue || els.sourceImageUrl?.value || '').trim();
  const referenceUrls = state.imageToVideoReferenceUrlOrder.slice();
  const renderUrlCard = (url, role, index = 0, total = 0) => {
    const isReference = role === 'reference';
    const orderLabel = isReference ? `第 ${index + 2} 张输入图` : '第 1 张输入图';
    const moveUpDisabled = isReference && index === 0 ? 'disabled' : '';
    const moveDownDisabled = isReference && index === total - 1 ? 'disabled' : '';
    return `
      <article class="local-image-card${isReference ? ' local-image-card-draggable' : ' local-image-card-primary'}" ${isReference ? `draggable="true" data-reference-url="${escapeAttr(url)}"` : ''}>
        <img src="${escapeAttr(url)}" alt="${escapeAttr(url)}" loading="lazy" />
        <div class="local-image-card-meta">
          <span class="local-image-order">${escapeHtml(orderLabel)}</span>
          <strong>${escapeHtml(url)}</strong>
          <code>${escapeHtml(url)}</code>
        </div>
        <div class="local-image-actions">
          ${role === 'reference' ? `<button type="button" class="secondary-button" data-action="workspace-promote-reference-url" data-url="${escapeAttr(url)}">设为第 1 张</button>` : ''}
          ${role === 'reference' ? `<button type="button" class="secondary-button" data-action="workspace-move-reference-url-up" data-url="${escapeAttr(url)}" ${moveUpDisabled}>前移</button>` : ''}
          ${role === 'reference' ? `<button type="button" class="secondary-button" data-action="workspace-move-reference-url-down" data-url="${escapeAttr(url)}" ${moveDownDisabled}>后移</button>` : ''}
          <button type="button" class="secondary-button" data-action="workspace-remove-${role}-url" data-url="${escapeAttr(url)}">移除</button>
        </div>
      </article>`;
  };
  sourceSelection.innerHTML = sourceUrl
    ? renderUrlCard(sourceUrl, 'source', 0, 1)
    : '<div class="local-image-empty">还没有主图 URL。点“设置主图 URL”即可写入第 1 张输入图。</div>';
  referenceSelection.innerHTML = referenceUrls.length
    ? referenceUrls.map((url, index) => renderUrlCard(url, 'reference', index, referenceUrls.length)).join('')
    : '<div class="local-image-empty">还没有附加参考图 URL。点“添加附加图 URL”后，这里会按顺序列出。</div>';
}

function renderImageToVideoSequenceWorkspace() {
  if (!els.imageToVideoSequenceWorkspace) return;
  const list = els.imageToVideoSequenceWorkspace.querySelector('#imageToVideoSequenceList');
  if (!list) return;
  const taskType = String(els.typeSelect?.value || '');
  if (taskType !== 'image_to_video') {
    list.innerHTML = '';
    return;
  }
  ensureImageToVideoSequenceState();
  const caps = getModelCapabilities(currentModel(), taskType);
  const allowsReferenceInputs = supportsImageToVideoReferenceInputs(caps);
  const { sequence } = getImageToVideoInputSequenceSummary();
  const assetById = new Map(state.assets.map((asset) => [asset.id, asset]));
  const uploadReferenceButton = els.imageToVideoSequenceWorkspace.querySelector('[data-action="sequence-upload-reference"]');
  const addUrlButton = els.imageToVideoSequenceWorkspace.querySelector('[data-action="sequence-add-url"]');
  if (uploadReferenceButton) {
    uploadReferenceButton.hidden = !allowsReferenceInputs;
    uploadReferenceButton.disabled = !allowsReferenceInputs;
    uploadReferenceButton.title = allowsReferenceInputs ? '' : '当前模型不支持附加参考图';
  }
  if (addUrlButton) {
    addUrlButton.textContent = allowsReferenceInputs ? '加入图片 URL' : '设置第 1 张 URL';
    addUrlButton.title = allowsReferenceInputs ? '' : '当前模型只会提交第 1 张输入图';
  }
  if (!sequence.length) {
    list.innerHTML = '<div class="local-image-empty">先上传第 1 张，或直接加入图片 URL。后续图片会按照你排好的顺序一起提交。</div>';
    return;
  }
  list.innerHTML = sequence.map((item, index) => {
    const key = sequenceKeyForImageToVideoItem(item);
    const isPrimary = index === 0;
    const isEndFrame = isSameAsCurrentEndFrame(item);
    const orderLabel = `第 ${index + 1} 张输入图`;
    const metaLabel = item.kind === 'asset' ? '本地素材' : '图片 URL';
    const moveUpDisabled = index === 0 ? 'disabled' : '';
    const moveDownDisabled = index === sequence.length - 1 ? 'disabled' : '';
    const asset = item.kind === 'asset' ? assetById.get(item.value) : null;
    const previewSrc = item.kind === 'asset' ? `/api/v1/assets/${item.value}/content` : item.value;
    const title = item.kind === 'asset'
      ? String(asset?.originalName || item.value)
      : item.value;
    const subtitle = item.kind === 'asset' ? item.value : item.value;
    return `
      <article class="image-sequence-card${isPrimary ? ' image-sequence-card-primary' : ''}${index > 0 ? ' image-sequence-card-draggable' : ''}" ${index > 0 ? `draggable="true" data-sequence-key="${escapeAttr(key)}"` : ''}>
        <img src="${escapeAttr(previewSrc)}" alt="${escapeAttr(title)}" loading="lazy" />
        <div class="image-sequence-meta">
          <div class="image-sequence-badges">
            <span class="local-image-order">${escapeHtml(orderLabel)}</span>
            <span class="image-sequence-source">${escapeHtml(metaLabel)}</span>
          </div>
          <strong>${escapeHtml(title)}</strong>
          <span>${escapeHtml(subtitle)}</span>
        </div>
        <div class="local-image-actions">
          ${!isPrimary ? `<button type="button" class="secondary-button" data-action="sequence-promote" data-sequence-key="${escapeAttr(key)}">设为第 1 张</button>` : ''}
          <button type="button" class="secondary-button${isEndFrame ? ' task-compare-toggle-active' : ''}" data-action="sequence-set-end" data-sequence-key="${escapeAttr(key)}">${isEndFrame ? '已设为尾帧' : '设为尾帧'}</button>
          ${item.kind === 'url' ? `<button type="button" class="secondary-button" data-action="sequence-edit-url" data-sequence-key="${escapeAttr(key)}">编辑 URL</button>` : ''}
          <button type="button" class="secondary-button" data-action="sequence-move-up" data-sequence-key="${escapeAttr(key)}" ${moveUpDisabled}>前移</button>
          <button type="button" class="secondary-button" data-action="sequence-move-down" data-sequence-key="${escapeAttr(key)}" ${moveDownDisabled}>后移</button>
          <button type="button" class="secondary-button" data-action="sequence-remove" data-sequence-key="${escapeAttr(key)}">移除</button>
        </div>
      </article>`;
  }).join('');
}

function countDelimitedUrls(value) {
  return String(value || '')
    .split(/\r?\n|,/)
    .map((item) => item.trim())
    .filter(Boolean)
    .length;
}

function normalizeImageToVideoSequenceItem(item) {
  const kind = String(item?.kind || '').trim();
  const value = String(item?.value || '').trim();
  if (!value || (kind !== 'asset' && kind !== 'url')) return null;
  return { kind, value };
}

function sequenceKeyForImageToVideoItem(item) {
  const normalized = normalizeImageToVideoSequenceItem(item);
  if (!normalized) return '';
  return `${normalized.kind}:${normalized.value}`;
}

function getImageToVideoInputSequence() {
  const normalized = Array.isArray(state.imageToVideoInputSequence)
    ? state.imageToVideoInputSequence.map((item) => normalizeImageToVideoSequenceItem(item)).filter(Boolean)
    : [];
  state.imageToVideoInputSequence = normalized;
  return normalized.slice();
}

function buildImageToVideoInputSequenceFromLegacyState() {
  const next = [];
  const pushUnique = (item) => {
    const normalized = normalizeImageToVideoSequenceItem(item);
    if (!normalized) return;
    const key = sequenceKeyForImageToVideoItem(normalized);
    if (!key || next.some((entry) => sequenceKeyForImageToVideoItem(entry) === key)) return;
    next.push(normalized);
  };
  pushUnique({ kind: 'asset', value: String(state.imageToVideoSourceAssetId || els.sourceAssetSelect?.value || '').trim() });
  pushUnique({ kind: 'url', value: String(state.imageToVideoSourceUrlValue || els.sourceImageUrl?.value || '').trim() });
  state.imageToVideoReferenceAssetOrder.forEach((id) => pushUnique({ kind: 'asset', value: id }));
  state.imageToVideoReferenceUrlOrder.forEach((url) => pushUnique({ kind: 'url', value: url }));
  return next;
}

function applyImageToVideoSequenceToLegacyState() {
  const sequence = getImageToVideoInputSequence();
  const primary = sequence[0] || null;
  const references = sequence.slice(1);
  state.imageToVideoSourceAssetId = primary?.kind === 'asset' ? primary.value : '';
  state.imageToVideoSourceUrlValue = primary?.kind === 'url' ? primary.value : '';
  state.imageToVideoReferenceAssetOrder = references.filter((item) => item.kind === 'asset').map((item) => item.value);
  state.imageToVideoReferenceUrlOrder = references.filter((item) => item.kind === 'url').map((item) => item.value);
  applyImageToVideoAssetStateToForm();
  applyImageToVideoUrlStateToForm();
}

function ensureImageToVideoSequenceState() {
  if (String(els.typeSelect?.value || '') !== 'image_to_video') return;
  syncImageToVideoAssetStateFromForm();
  syncImageToVideoUrlStateFromForm();
  state.imageToVideoInputSequence = [];
}

function setImageToVideoInputSequence(next) {
  const normalized = Array.isArray(next)
    ? next.map((item) => normalizeImageToVideoSequenceItem(item)).filter(Boolean)
    : [];
  state.imageToVideoInputSequence = normalized;
  applyImageToVideoAssetStateToForm();
  applyImageToVideoUrlStateToForm();
}

function appendImageToVideoInputSequence(items, mode = 'append') {
  const normalizedItems = Array.isArray(items)
    ? items.map((item) => normalizeImageToVideoSequenceItem(item)).filter(Boolean)
    : [];
  if (!normalizedItems.length) return;
  const next = getImageToVideoInputSequence();
  const existingKeys = new Set(next.map((item) => sequenceKeyForImageToVideoItem(item)));
  const uniqueItems = normalizedItems.filter((item) => {
    const key = sequenceKeyForImageToVideoItem(item);
    if (!key || existingKeys.has(key)) return false;
    existingKeys.add(key);
    return true;
  });
  if (!uniqueItems.length) return;
  if (mode === 'replace-primary') {
    const previousPrimary = next[0] || null;
    const rest = next.slice(1).filter((item) => sequenceKeyForImageToVideoItem(item) !== sequenceKeyForImageToVideoItem(uniqueItems[0]));
    const merged = [uniqueItems[0]];
    if (previousPrimary && sequenceKeyForImageToVideoItem(previousPrimary) !== sequenceKeyForImageToVideoItem(uniqueItems[0])) {
      merged.push(previousPrimary);
    }
    setImageToVideoInputSequence(merged.concat(rest).concat(uniqueItems.slice(1)));
    return;
  }
  setImageToVideoInputSequence(next.concat(uniqueItems));
}

function moveImageToVideoInputSequenceItemBefore(dragKey, targetKey) {
  if (!dragKey || !targetKey || dragKey === targetKey) return;
  const next = getImageToVideoInputSequence();
  const dragged = next.find((item) => sequenceKeyForImageToVideoItem(item) === dragKey);
  if (!dragged) return;
  const filtered = next.filter((item) => sequenceKeyForImageToVideoItem(item) !== dragKey);
  const targetIndex = filtered.findIndex((item) => sequenceKeyForImageToVideoItem(item) === targetKey);
  if (targetIndex < 0) return;
  filtered.splice(targetIndex, 0, dragged);
  setImageToVideoInputSequence(filtered);
}

function updateImageToVideoInputSequenceItem(action, key) {
  const next = getImageToVideoInputSequence();
  const index = next.findIndex((item) => sequenceKeyForImageToVideoItem(item) === key);
  if (index < 0) return;
  const current = next[index];
  const removedEndFrame = action === 'remove' && isSameAsCurrentEndFrame(current);
  if (action === 'remove') {
    next.splice(index, 1);
  } else if (action === 'promote' && index > 0) {
    const [item] = next.splice(index, 1);
    next.unshift(item);
  } else if (action === 'move-up' && index > 0) {
    [next[index - 1], next[index]] = [next[index], next[index - 1]];
  } else if (action === 'move-down' && index < next.length - 1) {
    [next[index + 1], next[index]] = [next[index], next[index + 1]];
  } else if (action === 'edit-url' && next[index].kind === 'url') {
    const edited = window.prompt('更新图片 URL', next[index].value);
    if (edited == null) return;
    const value = String(edited || '').trim();
    if (!value) {
      next.splice(index, 1);
    } else {
      next[index] = { kind: 'url', value };
    }
  }
  setImageToVideoInputSequence(next);
  if (removedEndFrame) {
    if (els.endFrameAssetSelect) els.endFrameAssetSelect.value = '';
    if (els.endFrameImageUrl) els.endFrameImageUrl.value = '';
  }
}

function getImageToVideoInputSequenceSummary() {
  const sourceAssetId = String(els.sourceAssetSelect?.value || '').trim();
  const sourceUrl = String(els.sourceImageUrl?.value || '').trim();
  const primary = sourceAssetId
    ? { kind: 'asset', value: sourceAssetId }
    : (sourceUrl ? { kind: 'url', value: sourceUrl } : null);
  const referenceItems = [];
  const seen = new Set();
  const pushUnique = (item) => {
    const normalized = normalizeImageToVideoSequenceItem(item);
    if (!normalized) return;
    const key = sequenceKeyForImageToVideoItem(normalized);
    if (!key || seen.has(key)) return;
    seen.add(key);
    referenceItems.push(normalized);
  };
  Array.from(els.referenceAssetSelect?.options || [])
    .filter((option) => option.selected && option.value)
    .forEach((option) => pushUnique({ kind: 'asset', value: option.value }));
  String(els.referenceImageUrl?.value || '')
    .split(/\r?\n|,/)
    .map((item) => item.trim())
    .filter(Boolean)
    .forEach((url) => pushUnique({ kind: 'url', value: url }));
  const sequence = primary ? [primary].concat(referenceItems) : referenceItems.slice();
  return {
    sequence,
    primary,
    referenceItems,
    primaryCount: primary ? 1 : 0,
    referenceCount: referenceItems.length,
    assetReferenceCount: referenceItems.filter((item) => item.kind === 'asset').length,
    urlReferenceCount: referenceItems.filter((item) => item.kind === 'url').length
  };
}

function syncImageToVideoAssetStateFromForm() {
  state.imageToVideoSourceAssetId = String(els.sourceAssetSelect?.value || '').trim();
  const selectedReferenceIds = Array.from(els.referenceAssetSelect?.options || [])
    .filter((option) => option.selected && option.value)
    .map((option) => option.value);
  const ordered = state.imageToVideoReferenceAssetOrder.filter((id) => selectedReferenceIds.includes(id));
  const missing = selectedReferenceIds.filter((id) => !ordered.includes(id));
  state.imageToVideoReferenceAssetOrder = ordered.concat(missing);
}

function applyImageToVideoAssetStateToForm() {
  if (els.sourceAssetSelect) {
    els.sourceAssetSelect.value = String(state.imageToVideoSourceAssetId || '').trim();
  }
  const selectedIds = new Set(state.imageToVideoReferenceAssetOrder);
  Array.from(els.referenceAssetSelect?.options || []).forEach((option) => {
    option.selected = selectedIds.has(option.value);
  });
}

function appendImageToVideoReferenceAssets(ids) {
  const next = state.imageToVideoReferenceAssetOrder.slice();
  ids.forEach((id) => {
    const normalized = String(id || '').trim();
    if (normalized && !next.includes(normalized)) next.push(normalized);
  });
  state.imageToVideoReferenceAssetOrder = next;
  applyImageToVideoAssetStateToForm();
}

function moveImageToVideoReferenceAssetBefore(dragId, targetId) {
  if (!dragId || !targetId || dragId === targetId) return;
  const next = state.imageToVideoReferenceAssetOrder.filter((id) => id !== dragId);
  const targetIndex = next.indexOf(targetId);
  if (targetIndex < 0) return;
  next.splice(targetIndex, 0, dragId);
  state.imageToVideoReferenceAssetOrder = next;
  applyImageToVideoAssetStateToForm();
}

function syncImageToVideoUrlStateFromForm() {
  state.imageToVideoSourceUrlValue = String(els.sourceImageUrl?.value || '').trim();
  const rawUrls = String(els.referenceImageUrl?.value || '')
    .split(/\r?\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
  const ordered = state.imageToVideoReferenceUrlOrder.filter((url) => rawUrls.includes(url));
  const missing = rawUrls.filter((url) => !ordered.includes(url));
  state.imageToVideoReferenceUrlOrder = ordered.concat(missing);
}

function applyImageToVideoUrlStateToForm() {
  if (els.sourceImageUrl) els.sourceImageUrl.value = String(state.imageToVideoSourceUrlValue || '').trim();
  if (els.referenceImageUrl) els.referenceImageUrl.value = state.imageToVideoReferenceUrlOrder.join('\n');
}

function appendImageToVideoReferenceUrls(urls) {
  const next = state.imageToVideoReferenceUrlOrder.slice();
  urls.forEach((url) => {
    const normalized = String(url || '').trim();
    if (normalized && !next.includes(normalized)) next.push(normalized);
  });
  state.imageToVideoReferenceUrlOrder = next;
  applyImageToVideoUrlStateToForm();
}

function moveImageToVideoReferenceUrlBefore(dragUrl, targetUrl) {
  if (!dragUrl || !targetUrl || dragUrl === targetUrl) return;
  const next = state.imageToVideoReferenceUrlOrder.filter((url) => url !== dragUrl);
  const targetIndex = next.indexOf(targetUrl);
  if (targetIndex < 0) return;
  next.splice(targetIndex, 0, dragUrl);
  state.imageToVideoReferenceUrlOrder = next;
  applyImageToVideoUrlStateToForm();
}

function updateImageToVideoInputSummary(caps) {
  if (!els.imageToVideoInputSummary) return;
  ensureImageToVideoSequenceState();
  const summary = getImageToVideoInputSequenceSummary();
  const primaryCount = summary.primaryCount;
  const referenceCount = summary.referenceCount;
  const maxLabel = caps.supportsMultipleReferenceImages
    ? `最多 ${caps.maxReferenceImages || 'N'} 张附加图`
    : '仅 1 张附加图';
  els.imageToVideoInputSummary.textContent = `当前主图 ${primaryCount} 张，附加图 ${referenceCount} 张，${maxLabel}`;
  const allowsReferenceInputs = supportsImageToVideoReferenceInputs(caps);
  if (allowsReferenceInputs) {
    const maxLabel = caps.supportsMultipleReferenceImages ? `最多 ${caps.maxReferenceImages || 'N'} 张附加图` : '仅 1 张附加图';
    els.imageToVideoInputSummary.textContent = `当前主图 ${primaryCount} 张，附加图 ${referenceCount} 张，${maxLabel}`;
  } else {
    const referenceNote = referenceCount ? '，附加图当前不会提交' : '';
    els.imageToVideoInputSummary.textContent = `当前主图 ${primaryCount} 张，附加图 ${referenceCount} 张，当前模型仅提交第 1 张输入图${referenceNote}`;
  }
  const updateBadge = (labelEl, text) => {
    const badge = labelEl?.querySelector('.visual-input-badge');
    if (badge) badge.textContent = text;
  };
  updateBadge(els.sourceImageWrap, '主图 / 首帧');
  updateBadge(els.sourceAssetWrap, '主图 / 首帧');
  updateBadge(els.sourceUploadWrap, '主图 / 首帧');
  updateBadge(els.endFrameImageWrap, '尾帧 / 结束画面');
  updateBadge(els.endFrameAssetWrap, '尾帧 / 结束画面');
  updateBadge(els.endFrameUploadLabel, '尾帧 / 结束画面');
  updateBadge(els.referenceImageWrap, caps.supportsMultipleReferenceImages ? '附加参考图' : '参考图');
  updateBadge(els.referenceAssetWrap, caps.supportsMultipleReferenceImages ? '附加参考图' : '参考图');
  updateBadge(els.referenceUploadWrap, caps.supportsMultipleReferenceImages ? '附加参考图' : '参考图');
  if (els.referenceAssetHelp) {
    els.referenceAssetHelp.textContent = caps.supportsMultipleReferenceImages
      ? '本地附加参考图：可在下拉框多选；也可以先点“上传参考图”，上传后会自动选中。'
      : '本地参考图：在下拉框选择 1 张；也可以先点“上传参考图”，上传后会自动选中。';
  }
  if (els.referenceUploadHelp) {
    els.referenceUploadHelp.textContent = caps.supportsMultipleReferenceImages
      ? '上传附加参考图：可一次选择多张。上传后会自动写入“本地附加参考图”。'
      : '上传参考图：选择 1 张。上传后会自动写入“本地参考图”。';
  }
}

function refreshImageToVideoInputSummaryFromCurrentSelection() {
  const taskType = String(els.typeSelect?.value || '');
  if (taskType !== 'image_to_video') return;
  const model = currentModel();
  const caps = getModelCapabilities(model, taskType);
  updateImageToVideoInputSummary(caps);
  updateImageToVideoPromptGuide();
  renderImageToVideoSequenceWorkspace();
  renderImageToVideoLocalWorkspace();
  renderImageToVideoUrlWorkspace();
}

function getCapabilitySchemaEntry(taskType, modelId) {
  const models = state.capabilitySchema?.models;
  if (!models || !modelId) return null;
  return models[modelId]?.capabilities?.[taskType] || null;
}

function getSchemaVisibleFieldMap(taskType, modelId) {
  const schemaEntry = getCapabilitySchemaEntry(taskType, modelId);
  const visibleFields = Array.isArray(schemaEntry?.fields)
    ? schemaEntry.fields.filter((field) => field?.visible !== false && field?.name)
    : [];
  return new Map(visibleFields.map((field) => [String(field.name), field]));
}

function schemaAllowsAnyField(taskType, modelId, names = []) {
  const fieldMap = getSchemaVisibleFieldMap(taskType, modelId);
  if (!fieldMap.size) return true;
  return names.some((name) => fieldMap.has(String(name)));
}

function renderCapabilityFieldList(target, fields = [], titleMap = new Map()) {
  if (!target) return;
  if (!fields.length) {
    target.innerHTML = '<div class="capability-empty">当前模型没有这一层的可提交字段。</div>';
    return;
  }
  target.innerHTML = fields.map((field) => {
    const label = String(field?.label || field?.name || '').trim();
    const type = String(field?.type || '').trim();
    const required = field?.required ? '<span class="capability-chip capability-chip-required">必填</span>' : '';
    const liveTitle = titleMap.get(String(field?.name || '').trim()) || '';
    const constraintBits = [];
    if (Array.isArray(field?.options) && field.options.length) constraintBits.push(`${field.options.length} 个选项`);
    if (field?.maxItems) constraintBits.push(`最多 ${field.maxItems} 项`);
    if (field?.maxLength) constraintBits.push(`最多 ${field.maxLength} 字`);
    if (field?.min != null || field?.max != null) {
      constraintBits.push(`范围 ${field.min ?? '-'} ~ ${field.max ?? '-'}`);
    }
    return `
      <article class="capability-field-card">
        <div class="capability-field-top">
          <strong>${escapeHtml(label)}</strong>
          <div class="capability-chip-row">
            <span class="capability-chip">${escapeHtml(type || 'field')}</span>
            ${required}
          </div>
        </div>
        <div class="capability-field-copy">${escapeHtml(liveTitle || '当前模型能力 schema 暴露的输入项')}</div>
        ${constraintBits.length ? `<div class="capability-field-meta">${escapeHtml(constraintBits.join(' / '))}</div>` : ''}
      </article>`;
  }).join('');
}

function renderCapabilityFieldLayout(taskType, model, caps, generationMode) {
  if (!els.capabilityFieldLayout) return;
  const schemaEntry = getCapabilitySchemaEntry(taskType, String(model?.id || ''));
  if (!schemaEntry?.fields?.length) {
    els.capabilityFieldLayout.classList.add('hidden');
    return;
  }
  els.capabilityFieldLayout.classList.remove('hidden');
  const fields = schemaEntry.fields.filter((field) => field?.visible !== false);
  const titleMap = new Map();
  titleMap.set('prompt', taskType === 'image_to_video' ? '用于补充首帧/尾帧和参考图约束，描述镜头、运动和节奏。' : '当前创作入口的核心文本输入。');
  titleMap.set('videoGenerationMode', generationMode === 'storyboard' ? '当前已切到故事板模式。' : '当前会决定标准模式、故事板还是智能分镜。');
  titleMap.set('storyboardText', '用于组织多镜头文本结构，只在故事板相关能力里生效。');
  titleMap.set('sourceImage', taskType === 'image_to_video' ? '首帧作为起始画面，需单独填写。' : '可通过 URL、本地素材或上传提供。');
  titleMap.set('referenceImages', taskType === 'image_to_video' ? '参考图单独填写；支持多图时请按一行一张或多选素材。' : '用于约束主体、风格或画面方向。');
  titleMap.set('endFrameImage', '用于约束结尾画面，只在支持尾帧的模型里显示。');
  titleMap.set('duration', '会根据模型支持情况限制为固定档位或允许区间。');
  titleMap.set('aspectRatio', '画幅比例会与尺寸和分辨率一起影响最终结果。');
  titleMap.set('imageSize', '优先使用模型公开的尺寸档位，而不是盲填自由值。');
  titleMap.set('resolution', '当前模型若允许，会暴露分辨率档位或自定义分辨率。');
  titleMap.set('negativePrompt', '仅在模型支持时生效，用于排除不希望出现的内容。');
  titleMap.set('providerMode', '这是模型或 Provider 暴露的原生档位，不是任意自由输入。');
  titleMap.set('cfgScale', '高阶控制项，建议明确知道效果差异后再改。');
  titleMap.set('cameraControl', '镜头控制只在明确支持显式镜头参数时开放。');
  titleMap.set('omniInputs', '用于 Omni / Elements 这类特定能力，不等于普通参考图。');
  titleMap.set('seed', '用于结果复现和稳定对比。');
  titleMap.set('styleStrength', '用于参考强度或风格强度调节。');
  titleMap.set('imageCount', '只在图片类任务支持多图输出时开放。');
  titleMap.set('imageQuality', '由模型暴露的质量档位决定，不做猜测。');

  renderCapabilityFieldList(els.capabilityBasicFields, fields.filter((field) => field.category === 'basic'), titleMap);
  renderCapabilityFieldList(els.capabilityAdvancedFields, fields.filter((field) => field.category === 'advanced'), titleMap);
  renderCapabilityFieldList(els.capabilityExpertFields, fields.filter((field) => field.category === 'expert'), titleMap);
}

function updateImageToVideoPromptGuide() {
  if (!els.imageToVideoPromptGuide || !els.imageToVideoPromptSummary) return;
  const taskType = String(els.typeSelect?.value || '');
  const visible = taskType === 'image_to_video';
  showElement(els.imageToVideoPromptGuide, visible);
  if (!visible) return;
  ensureImageToVideoSequenceState();
  const { primary, referenceItems } = getImageToVideoInputSequenceSummary();
  const promptLength = String(els.prompt?.value || '').trim().length;
  const primaryLabel = primary ? '已设置第 1 张输入图' : '尚未设置第 1 张输入图';
  const referenceLabel = `附加图 ${referenceItems.length} 张`;
  const promptLabel = promptLength ? `Prompt ${promptLength} 字` : '建议补一段运动/镜头提示词';
  els.imageToVideoPromptSummary.textContent = `${primaryLabel} / ${referenceLabel} / ${promptLabel}`;
}

function updatePromptOptimizePanel(taskType, caps) {
  if (!els.promptOptimizePanel || !els.optimizePromptWithModel || !els.promptOptimizeSummary || !els.promptOptimizeStatus) return;
  const isVideoTask = taskType === 'text_to_video' || taskType === 'image_to_video';
  const supportsOptimize = Boolean(isVideoTask && caps.supportsPromptOptimize);
  showElement(els.promptOptimizePanel, supportsOptimize);
  if (!supportsOptimize) {
    els.promptOptimizeStatus.textContent = '';
    showElement(els.promptOptimizeStatus, false);
    return;
  }
  const model = currentModel();
  const modelId = String(model?.id || '').trim() || '当前模型';
  els.promptOptimizeSummary.textContent = `${modelId} 可尝试模型侧提示词优化，适合先把动作、镜头和节奏整理清楚再提交。`;
  els.optimizePromptWithModel.disabled = false;
  els.optimizePromptWithModel.dataset.taskType = taskType;
  els.optimizePromptWithModel.dataset.optimizePath = String(caps.promptOptimizePath || '').trim();
}

function getCreateFormBlockRefs() {
  const modelRow = els.imageModelWrap?.closest('.inline-grid') || null;
  const sizeRow = els.aspectRatioWrap?.closest('.inline-grid') || null;
  const resolutionRow = els.durationWrap?.closest('.inline-grid') || null;
  const urlRow = els.sourceImageWrap?.closest('.inline-grid') || null;
  const assetRow = els.sourceAssetWrap?.closest('.inline-grid') || null;
  const uploadRow = els.sourceUploadWrap?.closest('.inline-grid') || null;
  const seedRow = els.createForm?.querySelector('label[for="seed"]')?.closest('.inline-grid') || null;
  return {
    typeField: els.typeSelect?.closest('label') || null,
    promptField: els.prompt?.closest('label') || null,
    negativePromptField: els.negativePrompt?.closest('label') || null,
    providerModeWrap: els.providerModeWrap || null,
    cfgScaleWrap: els.cfgScaleWrap || null,
    modelRow,
    imageOptionRow: els.imageOptionRow || null,
    sizeRow,
    resolutionRow,
    urlRow,
    assetRow,
    uploadRow,
    storyboardPanel: els.storyboardPanel || null,
    imageToVideoInputPanel: els.imageToVideoInputPanel || null,
    imageToVideoSequenceWorkspace: els.imageToVideoSequenceWorkspace || null,
    visualInputGuide: els.visualInputGuide || null,
    sourceImageHint: els.sourceImageHint || null,
    referenceImageHint: els.referenceImageHint || null,
    endFrameGroup: els.endFrameGroup || null,
    endFrameUploadWrap: els.endFrameUploadWrap || null,
    endFrameHint: els.endFrameHint || null,
    videoAdvancedRow: els.videoAdvancedRow || null,
    cameraControlGroup: els.cameraControlGroup || null,
    omniInputsGroup: els.omniInputsGroup || null,
    omniInputHint: els.omniInputHint || null,
    seedRow
  };
}

function ensureCapabilityDrivenFormSections() {
  if (!els.createForm) return null;
  let layout = document.getElementById('capabilityFormSections');
  if (!layout) {
    layout = document.createElement('section');
    layout.id = 'capabilityFormSections';
    layout.className = 'capability-form-sections';
    layout.innerHTML = `
      <section class="capability-form-section" data-section="basic">
        <div class="capability-form-section-head">
          <strong>基础输入</strong>
          <span>当前任务最先需要完成的输入。</span>
        </div>
        <div class="capability-form-section-body"></div>
      </section>
      <details class="capability-form-section" data-section="advanced">
        <summary class="capability-form-section-head">
          <strong>高级输入</strong>
          <span>只在需要更精细控制时展开。</span>
        </summary>
        <div class="capability-form-section-body"></div>
      </details>
      <details class="capability-form-section" data-section="expert">
        <summary class="capability-form-section-head">
          <strong>专家输入</strong>
          <span>用于复现、调参与对比测试。</span>
        </summary>
        <div class="capability-form-section-body"></div>
      </details>`;
    const submitButton = els.createForm.querySelector('.submit-button');
    if (submitButton?.parentElement) {
      els.createForm.insertBefore(layout, submitButton);
    } else {
      els.createForm.appendChild(layout);
    }
  }
  return {
    layout,
    basic: layout.querySelector('[data-section="basic"] .capability-form-section-body'),
    advanced: layout.querySelector('[data-section="advanced"] .capability-form-section-body'),
    expert: layout.querySelector('[data-section="expert"] .capability-form-section-body')
  };
}

function appendBlocks(container, blocks = []) {
  if (!container) return;
  blocks.filter(Boolean).forEach((block) => container.appendChild(block));
}

function setSectionVisibility(sectionEl, hasContent) {
  if (!sectionEl) return;
  sectionEl.classList.toggle('hidden', !hasContent);
}

function arrangeCreateFormBySchema(taskType, model, caps) {
  const sections = ensureCapabilityDrivenFormSections();
  if (!sections) return;
  const blocks = getCreateFormBlockRefs();
  const modelId = String(model?.id || '');
  const schemaEntry = getCapabilitySchemaEntry(taskType, modelId);
  const fieldMap = getSchemaVisibleFieldMap(taskType, modelId);
  if (!fieldMap.size) {
    sections.layout.classList.add('hidden');
    return;
  }
  sections.layout.classList.remove('hidden');

  const bucketSet = {
    basic: new Set([blocks.typeField, blocks.modelRow]),
    advanced: new Set(),
    expert: new Set()
  };
  const addToBucket = (bucket, ...items) => items.filter(Boolean).forEach((item) => bucketSet[bucket].add(item));
  const getBucket = (name, fallback = 'basic') => String(fieldMap.get(name)?.category || fallback);

  addToBucket(getBucket('prompt', 'basic'), blocks.promptField);
  addToBucket(getBucket('videoGenerationMode', 'basic'), blocks.storyboardPanel);
  if (fieldMap.has('imageCount') || fieldMap.has('imageQuality')) addToBucket('basic', blocks.imageOptionRow);
  if (fieldMap.has('aspectRatio') || fieldMap.has('imageSize')) addToBucket(getBucket('aspectRatio', 'basic'), blocks.sizeRow);
  if (fieldMap.has('duration') || fieldMap.has('resolution')) addToBucket(getBucket(fieldMap.has('duration') ? 'duration' : 'resolution', 'basic'), blocks.resolutionRow);

  if (fieldMap.has('sourceImage') || fieldMap.has('referenceImages')) {
    addToBucket(getBucket(fieldMap.has('sourceImage') ? 'sourceImage' : 'referenceImages', 'basic'), blocks.urlRow, blocks.assetRow, blocks.uploadRow, blocks.visualInputGuide, blocks.sourceImageHint, blocks.referenceImageHint);
  }

  if (fieldMap.has('negativePrompt')) addToBucket(getBucket('negativePrompt', 'advanced'), blocks.negativePromptField);
  if (fieldMap.has('endFrameImage')) addToBucket(getBucket('endFrameImage', 'advanced'), blocks.endFrameGroup, blocks.endFrameUploadWrap, blocks.endFrameHint);
  if (fieldMap.has('providerMode') || fieldMap.has('cfgScale')) addToBucket(getBucket(fieldMap.has('providerMode') ? 'providerMode' : 'cfgScale', 'advanced'), blocks.videoAdvancedRow, blocks.providerModeWrap, blocks.cfgScaleWrap);
  if (fieldMap.has('cameraControl')) addToBucket(getBucket('cameraControl', 'advanced'), blocks.cameraControlGroup);
  if (fieldMap.has('omniInputs')) addToBucket(getBucket('omniInputs', 'advanced'), blocks.omniInputsGroup, blocks.omniInputHint);
  if (fieldMap.has('seed')) addToBucket(getBucket('seed', 'expert'), blocks.seedRow);

  const basicBlocks = Array.from(bucketSet.basic);
  const advancedBlocks = Array.from(bucketSet.advanced);
  const expertBlocks = Array.from(bucketSet.expert);

  appendBlocks(sections.basic, basicBlocks);
  appendBlocks(sections.advanced, advancedBlocks);
  appendBlocks(sections.expert, expertBlocks);

  const sectionNodes = sections.layout.querySelectorAll('.capability-form-section');
  setSectionVisibility(sectionNodes[0], Array.from(sections.basic.children).some((node) => !node.classList.contains('hidden')));
  setSectionVisibility(sectionNodes[1], Array.from(sections.advanced.children).some((node) => !node.classList.contains('hidden')));
  setSectionVisibility(sectionNodes[2], Array.from(sections.expert.children).some((node) => !node.classList.contains('hidden')));
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
  const isVeoModel = isVeoTaskModel(currentModel());
  if (taskType === 'text_to_video') {
    if (generationMode === 'storyboard') {
      return '任务边界：当前是文生视频里的 Storyboard Prompt 模式。提交主体是结构化文本分镜，不发送首帧、参考图、尾帧或 Omni 素材。';
    }
    if (generationMode === 'intelligent') {
      return '任务边界：当前是文生视频里的智能分镜模式。提交主体是 prompt 和模型分镜能力，不等同于图生视频，也不等同于手工 Storyboard 编辑。';
    }
    if (isVeoModel && caps.supportsPromptOptimize) {
      return caps.supportsTextToVideoReferenceImages
        ? '任务边界：当前是 Veo 文生视频。主输入是 prompt，参考图只做主体或风格约束，不是首帧；提交前可先用模型提示词优化整理动作、镜头和节奏。'
        : '任务边界：当前是 Veo 文生视频。主输入是 prompt，画面由模型直接生成；如果当前模型开放了提示词优化，建议先优化再提交。';
    }
    return caps.supportsTextToVideoReferenceImages
      ? '任务边界：当前是文生视频。主输入是文本提示；参考图如果开放，只用于约束主体、风格或镜头，不会被当作首帧。'
      : '任务边界：当前是文生视频。主输入只有文本提示，画面由模型从文本直接生成。';
  }
  if (taskType === 'image_to_video') {
    if (isVeoModel && caps.supportsPromptOptimize) {
      return caps.supportsImageToVideoEndFrame
        ? '任务边界：当前是 Veo 图生视频。第 1 张输入图决定起始画面，尾帧控制结束画面；如果模型支持提示词优化，建议先把动作和镜头目标优化清楚。'
        : '任务边界：当前是 Veo 图生视频。必须有第 1 张输入图作为起始画面；如果模型开放参考图，它们只做补充约束，不会替代首图。';
    }
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
  const isVeoModel = isVeoTaskModel(currentModel());
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
  if ((taskType === 'text_to_video' || taskType === 'image_to_video') && isVeoModel && caps.supportsPromptOptimize) {
    add(
      '模型提示词优化',
      '模型能力 / 提交前',
      '当前 Veo 模型开放了提示词优化入口，可以先把动作、镜头、节奏和风格整理成更适合视频生成的版本，再正式提交。',
      '先写清主体、动作、镜头和节奏，再点“按当前模型优化提示词”；优化后检查是否仍保留你的主体约束与关键细节。'
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
  const summary = getImageToVideoInputSequenceSummary();
  if (summary.primary) return;

  if (els.sourceImageUrl && !String(els.sourceImageUrl.value || '').trim()) {
    const urls = String(els.referenceImageUrl?.value || '')
      .split(/\r?\n|,/)
      .map((item) => item.trim())
      .filter(Boolean);
    if (urls.length) {
      els.sourceImageUrl.value = urls[0];
      if (els.referenceImageUrl) {
        els.referenceImageUrl.value = urls.slice(1).join('\n');
      }
    }
  }
  if (els.sourceAssetSelect && !String(els.sourceAssetSelect.value || '').trim()) {
    const selected = Array.from(els.referenceAssetSelect?.selectedOptions || [])
      .map((option) => option.value)
      .filter(Boolean);
    if (selected.length) {
      els.sourceAssetSelect.value = selected[0];
      const remain = new Set(selected.slice(1));
      Array.from(els.referenceAssetSelect?.options || []).forEach((option) => {
        option.selected = remain.has(option.value);
      });
    }
  }
}

function isSameAsCurrentEndFrame(item) {
  const normalized = normalizeImageToVideoSequenceItem(item);
  if (!normalized) return false;
  if (normalized.kind === 'asset') {
    return String(els.endFrameAssetSelect?.value || '').trim() === normalized.value;
  }
  return String(els.endFrameImageUrl?.value || '').trim() === normalized.value;
}

function setImageToVideoEndFrameFromSequenceItem(item) {
  const normalized = normalizeImageToVideoSequenceItem(item);
  if (!normalized) return;
  if (normalized.kind === 'asset') {
    if (els.endFrameAssetSelect) els.endFrameAssetSelect.value = normalized.value;
    if (els.endFrameImageUrl) els.endFrameImageUrl.value = '';
  } else {
    if (els.endFrameImageUrl) els.endFrameImageUrl.value = normalized.value;
    if (els.endFrameAssetSelect) els.endFrameAssetSelect.value = '';
  }
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

function soraPromptSeed(taskType = currentTaskType()) {
  if (taskType === 'image_to_video') {
    return 'cinematic motion, subject remains consistent with the input images, natural camera movement, coherent lighting, realistic detail, clean background transitions';
  }
  return 'a cinematic scene with clear subject motion, strong composition, controlled camera movement, natural lighting, and a satisfying ending beat';
}

function bridgePromptSeed(taskType = currentTaskType()) {
  if (taskType === 'text_to_image') {
    return 'editorial product photography, clear focal subject, premium material detail, balanced negative space, soft directional lighting, clean background, high image fidelity';
  }
  if (taskType === 'image_edit') {
    return 'edit the source image while preserving the core subject identity and composition, refine texture and lighting, keep edges clean, avoid unrelated new objects, deliver a polished final image';
  }
  if (taskType === 'image_to_video') {
    return 'animate the first input image directly, keep the subject identity and scene layout consistent with the input images, add only motivated motion, controlled camera movement, stable lighting, and a clean ending beat';
  }
  return 'a cinematic scene with clear subject motion, strong composition, controlled camera movement, natural lighting, and a satisfying ending beat';
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
  const modelId = String(model?.id || '');
  const caps = getModelCapabilities(model, taskType);
  const schemaDrivenVideoTask = isVeoFamilyModel(model) && (taskType === 'text_to_video' || taskType === 'image_to_video');
  const schemaAllows = (...names) => !schemaDrivenVideoTask || schemaAllowsAnyField(taskType, modelId, names);

  showElement(els.imageModelWrap, !isVideo);
  showElement(els.videoModelWrap, isVideo);
  showElement(els.durationWrap, isVideo && caps.supportsDuration !== false);
  showElement(els.imageOptionRow, !isVideo);
  syncStoryboardMode();

  const needSource = isImageEdit || isImageToVideo;
  const canSource = isImageToVideo
    ? true
    : (caps.supportsImageEditSourceImage || caps.supportsSourceImage);
  const canReference = isImageToVideo
    ? caps.supportsImageToVideoReferenceImages
    : (taskType === 'text_to_video'
        ? caps.supportsTextToVideoReferenceImages
        : (taskType === 'text_to_image' ? caps.supportsTextToImageReferenceImages : caps.supportsReferenceImage));
  const canEndFrame = caps.supportsImageToVideoEndFrame && schemaAllows('endFrameImage');
  const canProviderMode = isVideo && caps.supportsProviderMode && Array.isArray(caps.providerModeOptions) && caps.providerModeOptions.length > 0 && schemaAllows('providerMode');
  const canCfgScale = isVideo && caps.supportsCfgScale && schemaAllows('cfgScale');
  const canCameraControl = taskType === 'text_to_video' && caps.supportsDirectionalCameraControls && schemaAllows('cameraControl');
  const canOmniInputs = caps.supportsOmniInputs && schemaAllows('omniInputs');
  const generationMode = String(els.videoGenerationMode?.value || 'standard');
  const storyboardMode = generationMode === 'storyboard';
  const intelligentMode = generationMode === 'intelligent';
  const semantics = getVisualInputSemantics(taskType, caps, generationMode);
  const showReferenceInputs = canReference && schemaAllows('referenceImages');
  const hidesVisualInputsForStructuredMode = semantics.hidesVisualInputs;
  updateSoraWorkflowPanel(taskType, caps, generationMode);
  updateBridgeSubmitPanel(taskType, caps, generationMode);
  updateImageToVideoPromptGuide();
  updatePromptOptimizePanel(taskType, caps);
  renderCapabilityFieldLayout(taskType, model, caps, generationMode);
  arrangeCreateFormBySchema(taskType, model, caps);

  clearImageInputHints();
  setFieldLabel(els.sourceImageWrap, semantics.sourceLabel);
  setFieldLabel(els.sourceAssetWrap, semantics.sourceAssetLabel);
  setFieldLabel(els.sourceUploadWrap, semantics.sourceUploadLabel);
  setFieldLabel(els.referenceImageWrap, semantics.referenceLabel);
  setFieldLabel(els.referenceAssetWrap, semantics.referenceAssetLabel);
  setFieldLabel(els.referenceUploadWrap, semantics.referenceUploadLabel);
  setFieldLabel(els.endFrameImageWrap, semantics.endFrameLabel);
  setFieldLabel(els.endFrameAssetWrap, semantics.endFrameAssetLabel);
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

  if (isImageToVideo) {
    state.imageToVideoInputSequence = [];
  }
  if (els.referenceAssetSelect) {
    const supportsMultipleReferenceImages = isImageToVideo
      ? Boolean(caps.supportsImageToVideoReferenceImages && caps.supportsMultipleReferenceImages)
      : Boolean(caps.supportsMultipleReferenceImages);
    els.referenceAssetSelect.multiple = supportsMultipleReferenceImages;
    els.referenceAssetSelect.size = supportsMultipleReferenceImages ? Math.min(caps.maxReferenceImages || 4, 4) : 1;
  }
  if (els.referenceUploadInput) {
    els.referenceUploadInput.multiple = isImageToVideo
      ? Boolean(caps.supportsImageToVideoReferenceImages && caps.supportsMultipleReferenceImages)
      : Boolean(caps.supportsMultipleReferenceImages);
  }
  if (els.referenceImageUrl?.tagName === 'TEXTAREA') {
    els.referenceImageUrl.rows = ((isImageToVideo && caps.supportsImageToVideoReferenceImages) || caps.supportsMultipleReferenceImages) ? 4 : 2;
  }

  showElement(els.sourceImageWrap, canSource && !hidesVisualInputsForStructuredMode);
  showElement(els.sourceAssetWrap, canSource && !hidesVisualInputsForStructuredMode);
  showElement(els.sourceUploadWrap, canSource && !hidesVisualInputsForStructuredMode);
  showElement(els.referenceImageWrap, showReferenceInputs && !hidesVisualInputsForStructuredMode);
  showElement(els.referenceAssetWrap, showReferenceInputs && !hidesVisualInputsForStructuredMode);
  showElement(els.referenceUploadWrap, showReferenceInputs && !hidesVisualInputsForStructuredMode);
  showElement(els.endFrameGroup, canEndFrame && !hidesVisualInputsForStructuredMode);
  showElement(els.endFrameUploadWrap, canEndFrame && !hidesVisualInputsForStructuredMode);
  showElement(els.imageToVideoInputPanel, false);
  showElement(els.imageToVideoSequenceWorkspace, false);
  showElement(els.imageToVideoLocalWorkspace, false);
  showElement(els.imageToVideoUrlWorkspace, false);
  showElement(els.videoAdvancedRow, (canProviderMode || canCfgScale) && !storyboardMode);
  showElement(els.providerModeWrap, canProviderMode && !storyboardMode);
  showElement(els.cfgScaleWrap, canCfgScale && !storyboardMode);
  showElement(els.cameraControlGroup, canCameraControl && !storyboardMode);
  showElement(els.omniInputsGroup, canOmniInputs && !hidesVisualInputsForStructuredMode);
  showElement(els.negativePrompt?.closest('label'), Boolean(caps.supportsNegativePrompt) && schemaAllows('negativePrompt'));
  showElement(els.visualInputGuide, Boolean(semantics.visualGuide) && (canSource || showReferenceInputs || canEndFrame || canOmniInputs || hidesVisualInputsForStructuredMode));
  showElement(els.sourceImageHint, Boolean(semantics.sourceHint) && canSource && !hidesVisualInputsForStructuredMode);
  showElement(els.referenceImageHint, Boolean(semantics.referenceHint) && showReferenceInputs && !hidesVisualInputsForStructuredMode);
  showElement(els.endFrameHint, Boolean(semantics.endFrameHint) && canEndFrame && !hidesVisualInputsForStructuredMode);
  showElement(els.omniInputHint, Boolean(semantics.omniHint) && canOmniInputs && !hidesVisualInputsForStructuredMode);
  if (els.imageToVideoInputSummary) {
    els.imageToVideoInputSummary.textContent = '';
  }

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
    } else if (isImageToVideo) {
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
    if ((taskType === 'text_to_video' || taskType === 'image_to_video') && caps.supportsPromptOptimize && !tips.includes('支持模型提示词优化')) {
      tips.push('支持模型提示词优化');
      els.modelCapabilityHint.textContent = tips.length ? `模型能力：${tips.join(' / ')}` : '';
    }
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
  const activeTaskType = String(els.typeSelect?.value || '');
  const selectedSourceAssetId = String(els.sourceAssetSelect?.value || '').trim();
  const selectedReferenceAssetIds = new Set(Array.from(els.referenceAssetSelect?.selectedOptions || []).map((option) => option.value));
  const selectedEndFrameAssetId = String(els.endFrameAssetSelect?.value || '').trim();
  if (!state.assets.length) {
    els.assetLibrary.innerHTML = '<div class="empty-state">暂无素材</div>';
  } else {
    els.assetLibrary.innerHTML = state.assets.map((asset) => {
      const src = `/api/v1/assets/${asset.id}/content`;
      const isImage = asset.kind === 'image';
      const isSource = selectedSourceAssetId === asset.id;
      const isReference = selectedReferenceAssetIds.has(asset.id) || state.imageToVideoReferenceAssetOrder.includes(asset.id);
      const isEnd = selectedEndFrameAssetId === asset.id;
      const selectedFlags = []
        .concat(isSource ? '<span class="asset-flag asset-flag-source">源图</span>' : [])
        .concat(isReference ? '<span class="asset-flag asset-flag-reference">参考</span>' : [])
        .concat(isEnd ? '<span class="asset-flag asset-flag-end">尾帧</span>' : [])
        .join('');
      const preview = isImage
        ? `<div class="asset-preview"><img src="${escapeAttr(src)}" alt="${escapeAttr(asset.originalName || asset.id)}" loading="lazy" /></div>`
        : '<div class="asset-preview asset-preview-placeholder">视频素材</div>';
      return `
      <article class="asset-card${isSource || isReference || isEnd ? ' asset-card-selected' : ''}">
        ${preview}
        <div class="asset-head">
          <div class="asset-meta" title="${escapeAttr(asset.originalName || asset.id)}">${escapeHtml(asset.originalName || asset.id)}</div>
          ${selectedFlags ? `<div class="asset-flags">${selectedFlags}</div>` : ''}
        </div>
        <div class="asset-actions">
          <button type="button" class="secondary-button" data-action="use-source" data-id="${escapeAttr(asset.id)}">${activeTaskType === 'image_to_video' ? '设为第 1 张' : '设为源图'}</button>
          <button type="button" class="secondary-button" data-action="use-ref" data-id="${escapeAttr(asset.id)}">${activeTaskType === 'image_to_video' ? '加入附加图' : '设为参考图'}</button>
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
  state.imageToVideoSourceAssetId = String(state.imageToVideoSourceAssetId || selectedSourceAssetId || '').trim();
  state.imageToVideoReferenceAssetOrder = state.imageToVideoReferenceAssetOrder.length
    ? state.imageToVideoReferenceAssetOrder.filter((id) => imageAssets.some((asset) => asset.id === id))
    : Array.from(selectedReferenceAssetIds);
  applyImageToVideoAssetStateToForm();
  if (els.referenceAssetHelp) {
    const selectedCount = state.imageToVideoReferenceAssetOrder.length || Array.from(els.referenceAssetSelect?.selectedOptions || []).filter((option) => option.value).length;
    const totalCount = imageAssets.length;
    const baseHelp = els.referenceAssetHelp.textContent.split(' 当前素材库可选 ')[0];
    els.referenceAssetHelp.textContent = `${baseHelp} 当前素材库可选 ${totalCount} 张，已选 ${selectedCount} 张。`;
  }
  renderImageToVideoSequenceWorkspace();
  renderImageToVideoLocalWorkspace();
}

function getTaskLabel(type) {
  const meta = state.taskTypes.find((item) => item.value === type);
  return meta?.label || type;
}

function getTaskModelSnapshot(task) {
  const modelId = String(task?.input?.model || '').trim();
  if (!modelId) return null;
  return state.modelById.get(modelId) || { id: modelId };
}

function countTaskInputReferences(input = {}) {
  const urlItems = Array.isArray(input.referenceImageUrls)
    ? input.referenceImageUrls
    : String(input.referenceImageUrl || '')
      .split(/\r?\n|,/)
      .map((item) => item.trim())
      .filter(Boolean);
  const assetItems = Array.isArray(input.referenceAssetIds)
    ? input.referenceAssetIds
    : [String(input.referenceAssetId || '').trim()].filter(Boolean);
  return urlItems.length + assetItems.length;
}

function hasTaskPrimaryImage(input = {}) {
  return Boolean(String(input.sourceImageUrl || '').trim() || String(input.sourceAssetId || '').trim());
}

function hasTaskEndFrame(input = {}) {
  return Boolean(
    String(input.endFrameImageUrl || '').trim()
    || String(input.endFrameAssetId || '').trim()
    || String(input.end_frame_image_url || '').trim()
    || String(input.end_frame_image_data_url || '').trim()
    || String(input.endFrameImage || '').trim()
    || String(input.end_frame_image || '').trim()
  );
}

function getTaskVisualSubmissionSummary(task) {
  const input = task?.input || {};
  const taskType = String(task?.type || '').trim();
  const model = getTaskModelSnapshot(task);
  const caps = getModelCapabilities(model, taskType);
  const family = getBridgeVideoModelFamilyLabel(model);
  const referenceCount = countTaskInputReferences(input);
  const primaryReady = hasTaskPrimaryImage(input);
  const endFrameReady = hasTaskEndFrame(input);
  const parts = [];

  if (taskType === 'image_to_video') {
    parts.push(`${family}`);
    parts.push(primaryReady ? '第 1 张已提交' : '缺第 1 张');
    if (caps.supportsImageToVideoReferenceImages) {
      parts.push(referenceCount ? `参考图 ${referenceCount} 张` : '无参考图');
    } else if (referenceCount) {
      parts.push(`参考图 ${referenceCount} 张未提交`);
    }
    if (caps.supportsImageToVideoEndFrame) {
      parts.push(endFrameReady ? '尾帧已提交' : '无尾帧');
    } else if (endFrameReady) {
      parts.push('尾帧已填写（模型未生效）');
    }
    return parts.join(' / ');
  }

  if (taskType === 'text_to_video') {
    parts.push(`${family}`);
    parts.push('Prompt');
    if (caps.supportsTextToVideoReferenceImages) {
      parts.push(referenceCount ? `参考图 ${referenceCount} 张` : '无参考图');
    } else if (referenceCount) {
      parts.push(`参考图 ${referenceCount} 张未提交`);
    }
    return parts.join(' / ');
  }

  if (taskType === 'image_edit') {
    parts.push(hasTaskPrimaryImage(input) ? '原图已提交' : '缺原图');
    if (referenceCount) parts.push(`参考图 ${referenceCount} 张`);
    return parts.join(' / ');
  }

  if (taskType === 'text_to_image') {
    parts.push('Prompt');
    if (referenceCount) parts.push(`参考图 ${referenceCount} 张`);
    return parts.join(' / ');
  }

  return '';
}

function getTaskParameterSummary(task) {
  const input = task?.input || {};
  const bits = [];
  if (String(input.aspectRatio || '').trim()) bits.push(String(input.aspectRatio).trim());
  if (String(input.imageSize || '').trim()) bits.push(String(input.imageSize).trim());
  if (String(input.resolution || '').trim()) bits.push(String(input.resolution).trim());
  if (input.duration != null && String(input.duration).trim()) bits.push(`${input.duration}s`);
  return bits.join(' / ');
}

function getTaskPreviewTags(task) {
  const input = task?.input || {};
  const taskType = String(task?.type || '').trim();
  const model = getTaskModelSnapshot(task);
  const caps = getModelCapabilities(model, taskType);
  const family = getBridgeVideoModelFamilyLabel(model);
  const referenceCount = countTaskInputReferences(input);
  const primaryReady = hasTaskPrimaryImage(input);
  const endFrameReady = hasTaskEndFrame(input);
  const tags = [];

  if (taskType === 'text_to_video' || taskType === 'image_to_video') tags.push({ text: family });
  if (String(input.aspectRatio || '').trim()) tags.push({ text: String(input.aspectRatio).trim() });
  if (String(input.imageSize || '').trim()) tags.push({ text: String(input.imageSize).trim() });
  if (String(input.resolution || '').trim()) tags.push({ text: String(input.resolution).trim() });
  if (input.duration != null && String(input.duration).trim()) tags.push({ text: `${input.duration}s` });

  if (taskType === 'image_to_video') {
    tags.push({ text: primaryReady ? '首帧已提交' : '缺首帧', warning: !primaryReady });
    if (caps.supportsImageToVideoReferenceImages) {
      tags.push({ text: referenceCount ? `参考图 ${referenceCount} 张` : '无参考图' });
    } else if (referenceCount) {
      tags.push({ text: `参考图 ${referenceCount} 张未提交`, warning: true });
    }
    if (caps.supportsImageToVideoEndFrame) {
      tags.push({ text: endFrameReady ? '尾帧已提交' : '无尾帧' });
    } else if (endFrameReady) {
      tags.push({ text: '尾帧已填写（模型未生效）', warning: true });
    }
  } else if (taskType === 'text_to_video') {
    if (caps.supportsTextToVideoReferenceImages) {
      tags.push({ text: referenceCount ? `参考图 ${referenceCount} 张` : '无参考图' });
    } else if (referenceCount) {
      tags.push({ text: `参考图 ${referenceCount} 张未提交`, warning: true });
    }
  } else if (taskType === 'image_edit') {
    tags.push({ text: hasTaskPrimaryImage(input) ? '原图已提交' : '缺原图', warning: !hasTaskPrimaryImage(input) });
    if (referenceCount) tags.push({ text: `参考图 ${referenceCount} 张` });
  } else if (taskType === 'text_to_image') {
    tags.push({ text: 'Prompt' });
    if (referenceCount) tags.push({ text: `参考图 ${referenceCount} 张` });
  }

  return tags.slice(0, 8);
}

function getCompareTasks() {
  const ids = Array.isArray(state.compareTaskIds) ? state.compareTaskIds.slice(0, 2) : [];
  return ids
    .map((id) => state.tasks.find((task) => task.id === id) || null)
    .filter(Boolean);
}

function getTaskCompareDifferences(tasks = []) {
  if (!Array.isArray(tasks) || tasks.length < 2) return [];
  const [left, right] = tasks;
  const diffs = [];
  if (String(left.type || '') !== String(right.type || '')) diffs.push('任务类型');
  if (String(left.input?.model || '') !== String(right.input?.model || '')) diffs.push('模型');
  if (getTaskVisualSubmissionSummary(left) !== getTaskVisualSubmissionSummary(right)) diffs.push('输入结构');
  if (getTaskParameterSummary(left) !== getTaskParameterSummary(right)) diffs.push('参数');
  if (summarizeTaskPrompt(left) !== summarizeTaskPrompt(right)) diffs.push('Prompt');
  return diffs;
}

function renderTaskComparePanel() {
  if (!els.taskComparePanel || !els.taskCompareSummary || !els.taskCompareGrid) return;
  const tasks = getCompareTasks();
  if (!tasks.length) {
    showElement(els.taskComparePanel, false);
    els.taskCompareSummary.textContent = '';
    els.taskCompareGrid.innerHTML = '';
    return;
  }
  const diffs = getTaskCompareDifferences(tasks);
  if (tasks.length === 1) {
    els.taskCompareSummary.textContent = '已选 1 条任务，再点另一条“对比”。';
  } else {
    els.taskCompareSummary.textContent = diffs.length ? `当前差异：${diffs.join(' / ')}` : '两条任务当前没有关键差异。';
  }
  els.taskCompareGrid.innerHTML = tasks.map((task, index) => {
    const model = String(task.input?.model || '-');
    const status = String(task.status || 'unknown');
    const statusTone = normalizeStatusTone(status);
    const prompt = summarizeTaskPrompt(task);
    const visualSummary = getTaskVisualSubmissionSummary(task);
    const parameterSummary = getTaskParameterSummary(task);
    const tags = getTaskPreviewTags(task).slice(0, 6);
    return `
      <article class="task-compare-card">
        <div class="task-compare-card-top">
          <strong>${index === 0 ? '对比 A' : '对比 B'}</strong>
          <span class="pill status-${escapeAttr(statusTone)}">${escapeHtml(status)}</span>
        </div>
        <div class="task-compare-card-meta">${escapeHtml(getTaskLabel(task.type))} / ${escapeHtml(model)}</div>
        <div class="task-compare-tags">${tags.map((tag) => `<span class="task-compare-tag${tag.warning ? ' task-compare-tag-warning' : ''}">${escapeHtml(tag.text)}</span>`).join('')}</div>
        ${visualSummary ? `<div class="task-compare-line">输入：${escapeHtml(visualSummary)}</div>` : ''}
        ${parameterSummary ? `<div class="task-compare-line">参数：${escapeHtml(parameterSummary)}</div>` : ''}
        <div class="task-compare-line">Prompt: ${escapeHtml(prompt || '（空）')}</div>
      </article>`;
  }).join('');
  showElement(els.taskComparePanel, true);
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

function normalizeStatusTone(status) {
  const normalized = String(status || '').toLowerCase();
  if (['queued', 'pending'].includes(normalized)) return 'pending';
  if (['processing', 'running'].includes(normalized)) return 'running';
  if (['completed', 'succeeded', 'success'].includes(normalized)) return 'success';
  if (['failed', 'canceled', 'cancelled'].includes(normalized)) return 'failed';
  return 'running';
}

function updateTopRunningStatus() {
  if (!els.topRunningCount || !els.topRunningBar) return;
  const tasks = Array.isArray(state.tasks) ? state.tasks : [];
  const total = tasks.length;
  const running = tasks.filter((task) => normalizeStatusTone(task?.status) === 'running').length;
  const percent = total > 0 ? Math.max(0, Math.min(100, Math.round((running / total) * 100))) : 0;
  els.topRunningCount.textContent = `${running} / ${total}`;
  els.topRunningBar.style.width = `${percent}%`;
}

function deriveConnectivityTone(snapshot = {}) {
  const message = String(snapshot?.message || '').toLowerCase();
  const endpointStatus = snapshot?.endpointStatus || {};
  const modelsOk = endpointStatus?.models?.reachable !== false;
  const imagesOk = endpointStatus?.images?.reachable !== false;
  const videosOk = endpointStatus?.videos?.reachable !== false;
  const generationReady = snapshot?.generationReady === true || (modelsOk && imagesOk && videosOk);
  if (generationReady && !/delay|latency|proxy/i.test(message)) return 'good';
  if (modelsOk || imagesOk || videosOk) return 'warn';
  return 'bad';
}

function renderTopConnectivity() {
  if (!els.topConnectivityDot || !els.topConnectivityLabel || !els.topConnectivityIndicator) return;
  const snapshot = state.connectivitySnapshot;
  if (!snapshot) {
    els.topConnectivityDot.className = 'top-connectivity-dot status-unknown';
    els.topConnectivityLabel.textContent = 'Connectivity: Unknown';
    return;
  }
  const tone = deriveConnectivityTone(snapshot);
  els.topConnectivityDot.className = `top-connectivity-dot status-${tone}`;
  const provider = String(snapshot.provider || 'Provider').trim();
  const conclusion = String(snapshot.message || (snapshot.generationReady ? 'Ready' : 'Unavailable')).trim();
  els.topConnectivityLabel.textContent = `Connectivity: ${tone.toUpperCase()} · ${provider}`;
  const details = [
    `Provider: ${provider}`,
    `Models: ${snapshot.modelsCount ?? '-'}`,
    `Images: ${snapshot.endpointStatus?.images?.reachable ? 'Reachable' : 'Unreachable'}`,
    `Videos: ${snapshot.endpointStatus?.videos?.reachable ? 'Reachable' : 'Unreachable'}`,
    `Conclusion: ${conclusion}`
  ];
  els.topConnectivityIndicator.title = details.join('\n');
}

function startConnectivityPolling() {
  if (state.connectivityPollTimer) {
    clearInterval(state.connectivityPollTimer);
    state.connectivityPollTimer = null;
  }
  state.connectivityPollTimer = setInterval(() => {
    checkConnectivity({ silent: true }).catch((error) => {
      writeLog('CONNECTIVITY_POLL_ERROR', { message: error.message });
    });
  }, 60 * 1000);
}

function syncTopConfigMirrorFromMain() {
  const baseEl = document.getElementById('baseUrl');
  const keyEl = document.getElementById('sora2ApiKey');
  const proxyEl = document.getElementById('proxyUrl');
  if (els.topBaseUrl && baseEl) els.topBaseUrl.value = String(baseEl.value || '');
  if (els.topApiKey && keyEl) els.topApiKey.value = String(keyEl.value || '');
  if (els.topProxyUrl && proxyEl) els.topProxyUrl.value = String(proxyEl.value || '');
}

function applyTopConfigToMain() {
  const baseEl = document.getElementById('baseUrl');
  const keyEl = document.getElementById('sora2ApiKey');
  const proxyEl = document.getElementById('proxyUrl');
  const setField = (el, value) => {
    if (!el) return;
    el.value = value;
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  };
  if (baseEl && els.topBaseUrl) setField(baseEl, String(els.topBaseUrl.value || '').trim());
  if (proxyEl && els.topProxyUrl) setField(proxyEl, String(els.topProxyUrl.value || '').trim());
  if (keyEl && els.topApiKey) setField(keyEl, String(els.topApiKey.value || '').trim());
}

function initTopConfigMirror() {
  syncTopConfigMirrorFromMain();
  const baseEl = document.getElementById('baseUrl');
  const keyEl = document.getElementById('sora2ApiKey');
  const proxyEl = document.getElementById('proxyUrl');
  [baseEl, keyEl, proxyEl].forEach((el) => {
    if (!el) return;
    el.addEventListener('input', () => syncTopConfigMirrorFromMain());
    el.addEventListener('change', () => syncTopConfigMirrorFromMain());
  });
  [els.topBaseUrl, els.topApiKey, els.topProxyUrl].forEach((el) => {
    if (!el) return;
    el.addEventListener('input', () => applyTopConfigToMain());
    el.addEventListener('change', () => applyTopConfigToMain());
  });
}

function taskProgress(status) {
  const normalized = String(status || '').toLowerCase();
  if (['completed', 'succeeded'].includes(normalized)) return 100;
  if (['failed', 'canceled', 'cancelled'].includes(normalized)) return 100;
  if (normalized === 'processing' || normalized === 'running') return 60;
  if (normalized === 'queued' || normalized === 'pending') return 20;
  return 10;
}

function isGenericUpstreamFailure(text) {
  const normalized = String(text || '').trim().toLowerCase();
  return normalized === 'upstream task failed'
    || normalized === 'task failed'
    || normalized === 'upstream_error';
}

function formatTaskErrorMessage(task) {
  const error = task?.error || null;
  const raw = String(error?.message || '').trim();
  if (!raw) return '';
  if (!isGenericUpstreamFailure(raw)) return raw;

  const providerCode = String(error?.providerCode || error?.code || '').trim();
  if (providerCode && providerCode.toLowerCase() !== 'upstream_error') {
    return `Upstream task failed (${providerCode}). Check debug terminal for provider details.`;
  }

  const input = task?.input || {};
  const taskType = String(task?.type || '').trim();
  const model = getTaskModelSnapshot(task);
  const caps = getModelCapabilities(model, taskType);
  const sameFrameAsset = String(input.sourceAssetId || '').trim()
    && String(input.endFrameAssetId || '').trim()
    && String(input.sourceAssetId || '').trim() === String(input.endFrameAssetId || '').trim();

  if (taskType === 'image_to_video' && hasTaskEndFrame(input) && !caps.supportsImageToVideoEndFrame) {
    return 'Upstream task failed. The selected model does not support end frame input.';
  }
  if (taskType === 'image_to_video' && sameFrameAsset) {
    return 'Upstream task failed. First frame and end frame use the same asset; try different images.';
  }
  return 'Upstream task failed. Open debug terminal to inspect provider payload and reason.';
}

function renderTasks() {
  if (!state.tasks.length) {
    els.tasks.innerHTML = '<div class="empty-state">暂无任务</div>';
    return;
  }

  els.tasks.innerHTML = state.tasks.map((task) => {
    const activeClass = task.id === state.selectedTaskId ? ' task-active' : '';
    const comparing = state.compareTaskIds.includes(task.id);
    const model = task.input?.model || '-';
    const status = task.status || 'unknown';
    const statusTone = normalizeStatusTone(status);
    const statusClass = statusTone === 'failed' ? ' task-status-failed' : '';
    const prompt = summarizeTaskPrompt(task);
    const mode = summarizeTaskMode(task);
    const visualSummary = getTaskVisualSubmissionSummary(task);
    const parameterSummary = getTaskParameterSummary(task);
    const taskTags = getTaskPreviewTags(task).slice(0, 5);
    const percent = taskProgress(status);
    const localCount = Array.isArray(task.savedAssets) ? task.savedAssets.length : 0;
    const formattedError = formatTaskErrorMessage(task);
    const errorText = formattedError ? `<div class="task-error">${escapeHtml(formattedError)}</div>` : '';
    return `
      <article class="task${activeClass}${statusClass}" data-task-id="${escapeAttr(task.id)}">
        <div class="task-top">
          <strong>${escapeHtml(getTaskLabel(task.type))}</strong>
          <span class="pill status-${escapeAttr(statusTone)}">${escapeHtml(status)}</span>
        </div>
        <div class="task-progress"><div class="task-progress-bar" style="width:${percent}%"></div></div>
        <div>模型：${escapeHtml(model)}${mode ? ` / ${escapeHtml(mode)}` : ''}</div>
        <div>本地保存：${localCount} 个文件</div>
        ${taskTags.length ? `<div class="task-tags">${taskTags.map((tag) => `<span class="task-tag${tag.warning ? ' task-tag-warning' : ''}">${escapeHtml(tag.text)}</span>`).join('')}</div>` : ''}
        ${visualSummary ? `<div class="task-prompt">输入：${escapeHtml(visualSummary)}</div>` : ''}
        ${parameterSummary ? `<div class="task-prompt">参数：${escapeHtml(parameterSummary)}</div>` : ''}
        <div class="task-prompt">Prompt: ${escapeHtml(prompt || '（空）')}</div>
        ${errorText}
        <div class="config-actions">
          <button type="button" data-action="task-refresh" data-id="${escapeAttr(task.id)}">刷新状态</button>
          <button type="button" data-action="task-retry" data-id="${escapeAttr(task.id)}">重试</button>
          <button type="button" data-action="task-cancel" data-id="${escapeAttr(task.id)}">取消</button>
          <button type="button" class="secondary-button" data-action="task-reuse" data-id="${escapeAttr(task.id)}">复用</button>
          <button type="button" class="secondary-button${comparing ? ' task-compare-toggle-active' : ''}" data-action="task-compare" data-id="${escapeAttr(task.id)}">${comparing ? '取消对比' : '对比'}</button>
          <button type="button" class="secondary-button" data-action="task-preview" data-id="${escapeAttr(task.id)}">预览</button>
          <button type="button" class="secondary-button" data-action="task-delete" data-id="${escapeAttr(task.id)}">删除</button>
        </div>
      </article>`;
  }).join('');
  renderTaskComparePanel();
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
    if (els.previewTags) els.previewTags.innerHTML = '';
    return;
  }

  state.selectedTaskId = task.id;
  persistUiState();
  const outputUrl = getTaskOutputUrl(task);
  const safeOutputUrl = normalizeMediaUrl(outputUrl);
  const isVideo = task.type.includes('video');
  const status = task.status || 'unknown';
  const model = task.input?.model || '-';
  const visualSummary = getTaskVisualSubmissionSummary(task);
  const parameterSummary = getTaskParameterSummary(task);
  const previewTags = getTaskPreviewTags(task);
  const previewLines = [
    `任务类型：${getTaskLabel(task.type)} | 状态：${status} | 模型：${model}`
  ];
  if (visualSummary) previewLines.push(`输入：${visualSummary}`);
  if (parameterSummary) previewLines.push(`参数：${parameterSummary}`);
  els.previewMeta.textContent = previewLines.join('\n');
  if (els.previewTags) {
    els.previewTags.innerHTML = previewTags
      .map((tag) => `<span class="preview-tag${tag.warning ? ' preview-tag-warning' : ''}">${escapeHtml(tag.text)}</span>`)
      .join('');
  }
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
  const [data, capabilities] = await Promise.all([
    api('/api/v1/meta'),
    api('/api/v1/models/capabilities').catch(() => null)
  ]);
  state.presets = Array.isArray(data.providerPresets) ? data.providerPresets : [];
  state.taskTypes = (Array.isArray(data.taskTypes) ? data.taskTypes : [])
    .filter((item) => ['text_to_image', 'image_edit', 'text_to_video', 'image_to_video'].includes(String(item?.value || '').trim()));
  state.capabilitySchema = capabilities;
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
  restoreCompareTasksForActiveStudioTask();
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
  restoreCompareTasksForActiveStudioTask();
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
  restoreCompareTasksForActiveStudioTask();
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
  restoreCompareTasksForActiveStudioTask();
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

async function checkConnectivity(options = {}) {
  const { silent = false } = options;
  if (!silent && els.connectivityStatus) {
    els.connectivityStatus.textContent = '检测中...';
  }
  try {
    const data = await api('/api/v1/connectivity', { timeoutMs: 120000 });
    const c = data.connectivity || {};
    state.connectivitySnapshot = c;
    renderTopConnectivity();
    const lines = [
      `提供商：${c.provider || '-'}`,
      `模型数：${c.modelsCount ?? '-'}`,
      `图片接口：${c.endpointStatus?.images?.reachable ? '可达' : '不可达'}`,
      `视频接口：${c.endpointStatus?.videos?.reachable ? '可达' : '不可达'}`,
      `结论：${c.message || (c.generationReady ? '可用' : '不可用')}`
    ];
    if (!silent && els.connectivityStatus) {
      els.connectivityStatus.textContent = lines.join('\n');
    }
  } catch (error) {
    state.connectivitySnapshot = { message: error.message, endpointStatus: {} };
    renderTopConnectivity();
    if (!silent && els.connectivityStatus) {
      els.connectivityStatus.textContent = `检测失败\n${error.message}`;
    }
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
  state.compareTaskIds = state.compareTaskIds.filter((id) => state.tasks.some((item) => item.id === id)).slice(0, 2);
  if (!state.selectedTaskId && state.tasks.length) {
    restoreSelectedTaskForActiveStudioTask();
  }
  if (state.selectedTaskId && !state.tasks.some((item) => item.id === state.selectedTaskId)) {
    state.selectedTaskId = '';
  }
  renderTasks();
  updateTopRunningStatus();
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
  const files = Array.from(fileInput.files || []);
  if (!files.length) return;
  const uploadedAssetIds = [];
  for (const file of files) {
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    const uploaded = await api('/api/v1/assets/upload', {
      method: 'POST',
      body: JSON.stringify({
        kind: 'image',
        name: file.name,
        mimeType: file.type || 'image/png',
        dataUrl
      })
    });
    if (uploaded?.asset?.id) uploadedAssetIds.push(uploaded.asset.id);
  }
  await loadAssets();
  fileInput.value = '';
  if (targetSelect?.multiple) {
    appendImageToVideoReferenceAssets(uploadedAssetIds);
  } else if (targetSelect) {
    targetSelect.value = uploadedAssetIds[0] || state.assets[0]?.id || '';
    if (targetSelect === els.sourceAssetSelect) {
      state.imageToVideoSourceAssetId = String(targetSelect.value || '').trim();
    }
  }
  refreshImageToVideoInputSummaryFromCurrentSelection();
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
    sourceImageUrl: sourceImageUrlValue,
    sourceAssetId: sourceAssetIdValue,
    referenceImageUrl: caps.supportsMultipleReferenceImages ? '' : (referenceImageUrls[0] || ''),
    referenceImageUrls: caps.supportsMultipleReferenceImages ? referenceImageUrls : undefined,
    referenceAssetId: caps.supportsMultipleReferenceImages ? '' : (referenceAssetIds[0] || ''),
    referenceAssetIds: caps.supportsMultipleReferenceImages ? referenceAssetIds : undefined,
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
  if (type === 'image_to_video' && !payload.sourceImageUrl && !payload.sourceAssetId) {
    throw new Error('图生视频必须单独提供首帧图片（URL 或本地素材）。');
  }
  if (
    type === 'image_to_video'
    && payload.endFrameAssetId
    && payload.sourceAssetId
    && payload.endFrameAssetId === payload.sourceAssetId
  ) {
    throw new Error('首帧图与尾帧图不能是同一张，请更换尾帧后再提交。');
  }
  if (
    type === 'image_to_video'
    && payload.endFrameImageUrl
    && payload.sourceImageUrl
    && payload.endFrameImageUrl === payload.sourceImageUrl
  ) {
    throw new Error('首帧图与尾帧图不能是同一张，请更换尾帧后再提交。');
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
  writeLog('TASK_SUBMIT', { type: payload.type, model: payload.model, studioTaskId: payload.studioTaskId || null });
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

function setReuseSummary(summary = '', tags = []) {
  if (!els.reuseSummaryPanel || !els.reuseSummaryText || !els.reuseSummaryTags) return;
  const normalizedTags = Array.isArray(tags) ? tags.filter((tag) => tag && tag.text) : [];
  const visible = Boolean(String(summary || '').trim() || normalizedTags.length);
  showElement(els.reuseSummaryPanel, visible);
  els.reuseSummaryText.textContent = summary || '';
  els.reuseSummaryTags.innerHTML = normalizedTags
    .map((tag) => `<span class="reuse-summary-tag${tag.warning ? ' reuse-summary-tag-warning' : ''}">${escapeHtml(tag.text)}</span>`)
    .join('');
}

async function reuseTaskInput(taskId) {
  const task = state.tasks.find((item) => item.id === taskId) || await api(`/api/v1/tasks/${taskId}`);
  const input = task?.input || {};
  const taskType = String(task?.type || input.type || '').trim();
  if (!taskType) throw new Error('任务缺少类型，无法复用');

  const setIfPresent = (element, value) => {
    if (!element) return;
    element.value = value == null ? '' : String(value);
  };
  const setSelectIfOptionExists = (element, value, fallback = '') => {
    if (!element) return;
    const normalized = String(value || '').trim();
    const options = Array.from(element.options || []).map((item) => item.value);
    element.value = normalized && options.includes(normalized) ? normalized : fallback;
  };

  const reuseTags = [];
  const reuseWarnings = [];

  els.typeSelect.value = taskType;
  await refreshCreateModelOptions();

  const modelId = String(input.model || '').trim();
  if (taskType.includes('video')) {
    setSelectIfOptionExists(els.videoModel, modelId, els.videoModel.value || '');
  } else {
    setSelectIfOptionExists(els.imageModel, modelId, els.imageModel.value || '');
  }
  const appliedModelId = selectedModelIdForTask(taskType);
  if (modelId) reuseTags.push({ text: `来源模型 ${modelId}` });
  if (modelId && appliedModelId !== modelId) {
    reuseWarnings.push(`当前改用 ${appliedModelId || '默认模型'}`);
  } else if (appliedModelId) {
    reuseTags.push({ text: `已切到 ${appliedModelId}` });
  }

  applyCreateFormRulesV2();
  const appliedCaps = getModelCapabilities(currentModel(), taskType);

  setIfPresent(els.prompt, input.prompt || '');
  setIfPresent(els.negativePrompt, input.negativePrompt || '');
  setIfPresent(els.storyboardText, input.storyboardText || '');
  setIfPresent(els.providerMode, input.providerMode || '');
  setIfPresent(els.cfgScale, input.cfgScale || '');
  setIfPresent(els.cameraControlType, input.cameraControlType || '');
  setIfPresent(els.cameraControlPan, input.cameraControlPan || '');
  setIfPresent(els.cameraControlTilt, input.cameraControlTilt || '');
  setIfPresent(els.cameraControlZoom, input.cameraControlZoom || '');
  setIfPresent(els.omniImageUrls, Array.isArray(input.omniImageUrls) ? input.omniImageUrls.join('\n') : (input.omniImageUrls || ''));
  setIfPresent(els.omniVideoUrls, Array.isArray(input.omniVideoUrls) ? input.omniVideoUrls.join('\n') : (input.omniVideoUrls || ''));
  setIfPresent(els.elementList, Array.isArray(input.elementList) ? input.elementList.join('\n') : (input.elementList || ''));
  setIfPresent(els.seed, input.seed || '');
  setIfPresent(els.styleStrength, input.styleStrength || '');

  if (els.videoGenerationMode) {
    const desiredMode = String(input.videoGenerationMode || 'standard').trim() || 'standard';
    setSelectIfOptionExists(els.videoGenerationMode, desiredMode, 'standard');
    if (desiredMode !== String(els.videoGenerationMode.value || 'standard')) {
      reuseWarnings.push(`模式回退为 ${els.videoGenerationMode.value || 'standard'}`);
    }
  }

  applyCreateFormRulesV2();

  setSelectIfOptionExists(els.aspectRatio, input.aspectRatio || '', '');
  if (String(input.aspectRatio || '').trim()) {
    if (String(els.aspectRatio.value || '').trim() === String(input.aspectRatio || '').trim()) reuseTags.push({ text: String(input.aspectRatio).trim() });
    else reuseWarnings.push(`比例未恢复为 ${input.aspectRatio}`);
  }
  setSelectIfOptionExists(els.imageSize, input.imageSize || '', '');
  if (String(input.imageSize || '').trim()) {
    if (String(els.imageSize.value || '').trim() === String(input.imageSize || '').trim()) reuseTags.push({ text: String(input.imageSize).trim() });
    else reuseWarnings.push(`档位未恢复为 ${input.imageSize}`);
  }
  syncResolutionOptions();

  if (String(input.resolution || '').trim()) {
    const resolution = String(input.resolution || '').trim();
    setIfPresent(els.resolutionInput, resolution);
    const presetValues = Array.from(els.resolutionPreset?.options || []).map((item) => item.value);
    els.resolutionPreset.value = presetValues.includes(resolution) ? resolution : '__custom__';
    reuseTags.push({ text: resolution });
  } else {
    setIfPresent(els.resolutionInput, '');
  }

  syncDurationInputForModel();
  const durationValue = input.duration != null && String(input.duration).trim() ? String(input.duration).trim() : '';
  if (!els.durationSelect.classList.contains('hidden')) {
    setSelectIfOptionExists(els.durationSelect, durationValue, els.durationSelect.value || '');
  } else {
    setIfPresent(els.durationInput, durationValue);
  }
  syncDurationValueMirror();
  if (durationValue) {
    if (appliedCaps.supportsDuration) reuseTags.push({ text: `${durationValue}s` });
    else reuseWarnings.push('时长未恢复');
  }

  setImageToVideoInputSequence([]);
  setIfPresent(els.sourceImageUrl, input.sourceImageUrl || '');
  setIfPresent(els.sourceAssetSelect, input.sourceAssetId || '');
  const referenceAssetIds = Array.isArray(input.referenceAssetIds)
    ? input.referenceAssetIds.map((item) => String(item).trim()).filter(Boolean)
    : [String(input.referenceAssetId || '').trim()].filter(Boolean);
  const referenceImageUrls = Array.isArray(input.referenceImageUrls)
    ? input.referenceImageUrls
    : String(input.referenceImageUrl || '')
      .split(/\r?\n|,/)
      .map((item) => item.trim())
      .filter(Boolean);
  setIfPresent(els.referenceImageUrl, referenceImageUrls.join('\n'));
  if (els.referenceAssetSelect?.multiple) {
    const selected = new Set(referenceAssetIds);
    Array.from(els.referenceAssetSelect.options || []).forEach((option) => {
      option.selected = selected.has(option.value);
    });
  } else {
    setIfPresent(els.referenceAssetSelect, referenceAssetIds[0] || '');
  }
  setIfPresent(els.endFrameImageUrl, input.endFrameImageUrl || '');
  setIfPresent(els.endFrameAssetSelect, input.endFrameAssetId || '');
  if (taskType === 'image_to_video') {
    if (String(input.sourceImageUrl || '').trim() || String(input.sourceAssetId || '').trim()) {
      reuseTags.push({ text: '首帧已复用' });
    } else {
      reuseWarnings.push('首帧未恢复');
    }
    if (referenceAssetIds.length || referenceImageUrls.length) {
      if (appliedCaps.supportsImageToVideoReferenceImages) reuseTags.push({ text: `参考图 ${referenceAssetIds.length + referenceImageUrls.length} 张` });
      else reuseWarnings.push('参考图未恢复');
    }
    if (String(input.endFrameImageUrl || '').trim() || String(input.endFrameAssetId || '').trim()) {
      if (appliedCaps.supportsImageToVideoEndFrame) reuseTags.push({ text: '尾帧已复用' });
      else reuseWarnings.push('尾帧未恢复');
    }
  }

  syncImageToVideoAssetStateFromForm();
  syncImageToVideoUrlStateFromForm();
  refreshImageToVideoInputSummaryFromCurrentSelection();
  applyCreateFormRulesV2();
  persistUiState();
  const summary = reuseWarnings.length
    ? `已复用 ${task.input?.model || '该任务'}，但有 ${reuseWarnings.length} 项按当前模型降级。`
    : `已复用 ${task.input?.model || '该任务'} 的输入配置。`;
  setReuseSummary(summary, reuseTags.concat(reuseWarnings.map((text) => ({ text, warning: true }))));
  setStatus(summary);
  els.createForm?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function taskAction(action, id) {
  if (action === 'task-compare') {
    const current = Array.isArray(state.compareTaskIds) ? state.compareTaskIds.slice(0, 2) : [];
    if (current.includes(id)) {
      state.compareTaskIds = current.filter((item) => item !== id);
    } else {
      state.compareTaskIds = current.concat(id).slice(-2);
    }
    renderTasks();
    persistUiState();
    return;
  }
  if (action === 'task-reuse') {
    await reuseTaskInput(id);
    return;
  }
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
    state.compareTaskIds = state.compareTaskIds.filter((item) => item !== id);
    await loadTasks(false);
  }
}

async function assetAction(action, id) {
  if (action === 'delete-asset') {
    await api(`/api/v1/assets/${id}`, { method: 'DELETE' });
    await loadAssets();
    return;
  }
  if (action === 'use-source') {
    els.sourceAssetSelect.value = id;
    state.imageToVideoSourceAssetId = String(id || '').trim();
  }
  if (action === 'use-ref') {
    if (els.referenceAssetSelect?.multiple) {
      appendImageToVideoReferenceAssets([id]);
    } else if (els.referenceAssetSelect) {
      els.referenceAssetSelect.value = id;
    }
  }
  if (action === 'use-end') els.endFrameAssetSelect.value = id;
  refreshImageToVideoInputSummaryFromCurrentSelection();
  persistUiState();
}

function bindEvents() {
  initQuickJumpBar();
  initKeyboardShortcuts();
  els.modeCreator?.addEventListener('click', () => applyProductMode('creator'));
  els.modeOps?.addEventListener('click', () => applyProductMode('ops'));
  els.modeAdmin?.addEventListener('click', () => applyProductMode('admin'));
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
  els.topConnectivityIndicator?.addEventListener('click', () => {
    runDiagnostics().catch((error) => alert(error.message));
  });
  els.topRunDiagnostics?.addEventListener('click', () => {
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
    if (!String(currentTaskType() || '').includes('video')) rememberModelSelection(currentTaskType());
    renderModelPanel();
    applyCreateFormRulesV2();
    persistUiState();
  });
  els.videoModel.addEventListener('change', () => {
    if (String(currentTaskType() || '').includes('video')) rememberModelSelection(currentTaskType());
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
    syncImageToVideoAssetStateFromForm();
    syncImageToVideoUrlStateFromForm();
    refreshImageToVideoInputSummaryFromCurrentSelection();
    persistUiState();
  });
  els.createForm.addEventListener('change', () => {
    syncImageToVideoAssetStateFromForm();
    syncImageToVideoUrlStateFromForm();
    refreshImageToVideoInputSummaryFromCurrentSelection();
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
  els.optimizePromptWithModel?.addEventListener('click', async () => {
    const model = currentModel();
    const taskType = String(els.optimizePromptWithModel?.dataset.taskType || currentTaskType()).trim();
    const optimizePath = String(els.optimizePromptWithModel?.dataset.optimizePath || '').trim();
    const prompt = String(els.prompt?.value || '').trim();
    if (!model?.id) {
      alert('请先选择模型。');
      return;
    }
    if (!prompt) {
      alert('请先填写提示词。');
      return;
    }
    els.optimizePromptWithModel.disabled = true;
    els.optimizePromptWithModel.textContent = '优化中...';
    els.promptOptimizeStatus.textContent = '正在按当前模型优化提示词...';
    showElement(els.promptOptimizeStatus, true);
    try {
      const result = await api('/api/v1/prompt/optimize-model', {
        method: 'POST',
        body: JSON.stringify({
          model: model.id,
          taskType,
          prompt,
          optimizePath
        }),
        timeoutMs: 120000
      });
      const optimizedPrompt = String(result.optimizedPrompt || '').trim();
      if (optimizedPrompt) {
        els.prompt.value = optimizedPrompt;
        persistUiState();
      }
      els.promptOptimizeStatus.textContent = optimizedPrompt ? '提示词已按当前模型优化并回填。' : '优化完成，但未返回新的提示词。';
    } catch (error) {
      els.promptOptimizeStatus.textContent = error.message || '提示词优化失败。';
    } finally {
      showElement(els.promptOptimizeStatus, true);
      els.optimizePromptWithModel.disabled = false;
      els.optimizePromptWithModel.textContent = '按当前模型优化提示词';
    }
  });

  els.tasks.addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (!target) return;
    const action = target.dataset.action;
    const id = target.dataset.id;
    if (!action || !id) return;
    taskAction(action, id).catch((error) => alert(error.message));
  });
  els.taskComparePanel?.addEventListener('click', (event) => {
    const target = event.target.closest('[data-action="task-compare-clear"]');
    if (!target) return;
    state.compareTaskIds = [];
    renderTasks();
    persistUiState();
  });

  els.assetLibrary.addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (!target) return;
    const action = target.dataset.action;
    const id = target.dataset.id;
    if (!action || !id) return;
    assetAction(action, id).catch((error) => alert(error.message));
  });
  els.imageToVideoSequenceWorkspace?.addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (!target) return;
    const action = String(target.dataset.action || '');
    const key = String(target.dataset.sequenceKey || '').trim();
    const caps = getModelCapabilities(currentModel(), currentTaskType());
    const allowsReferenceInputs = supportsImageToVideoReferenceInputs(caps);
    if (action === 'sequence-upload-primary') {
      els.sourceUploadInput?.click();
      return;
    }
    if (action === 'sequence-upload-reference') {
      if (!allowsReferenceInputs) {
        alert('当前模型不支持附加参考图，只会提交第 1 张输入图。');
        return;
      }
      els.referenceUploadInput?.click();
      return;
    }
    if (action === 'sequence-add-url') {
      if (!allowsReferenceInputs && getImageToVideoInputSequenceSummary().primary) {
        alert('当前模型不支持附加参考图。请替换第 1 张输入图，而不是继续添加参考图。');
        return;
      }
      const value = window.prompt('输入图片 URL，可一次粘贴多行或逗号分隔');
      if (value != null && String(value || '').trim()) {
        const urls = String(value || '')
          .split(/\r?\n|,/)
          .map((item) => item.trim())
          .filter(Boolean)
          .map((url) => ({ kind: 'url', value: url }));
        appendImageToVideoInputSequence(!allowsReferenceInputs ? urls.slice(0, 1) : urls, !allowsReferenceInputs ? 'replace-primary' : 'append');
        refreshImageToVideoInputSummaryFromCurrentSelection();
        persistUiState();
      }
      return;
    }
    if (action === 'sequence-clear-all') {
      setImageToVideoInputSequence([]);
      refreshImageToVideoInputSummaryFromCurrentSelection();
      persistUiState();
      return;
    }
    if (key) {
      if (action === 'sequence-set-end') {
        const sequence = getImageToVideoInputSequence();
        const item = sequence.find((entry) => sequenceKeyForImageToVideoItem(entry) === key);
        if (item) {
          setImageToVideoEndFrameFromSequenceItem(item);
          applyCreateFormRulesV2();
        }
      }
      if (action === 'sequence-promote') updateImageToVideoInputSequenceItem('promote', key);
      if (action === 'sequence-move-up') updateImageToVideoInputSequenceItem('move-up', key);
      if (action === 'sequence-move-down') updateImageToVideoInputSequenceItem('move-down', key);
      if (action === 'sequence-remove') updateImageToVideoInputSequenceItem('remove', key);
      if (action === 'sequence-edit-url') updateImageToVideoInputSequenceItem('edit-url', key);
      refreshImageToVideoInputSummaryFromCurrentSelection();
      persistUiState();
    }
  });
  els.imageToVideoSequenceWorkspace?.addEventListener('dragstart', (event) => {
    const card = event.target.closest('[data-sequence-key]');
    if (!card || !(event.dataTransfer instanceof DataTransfer)) return;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', String(card.dataset.sequenceKey || ''));
    card.classList.add('local-image-card-dragging');
  });
  els.imageToVideoSequenceWorkspace?.addEventListener('dragover', (event) => {
    const card = event.target.closest('[data-sequence-key]');
    if (!card) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    Array.from(els.imageToVideoSequenceWorkspace.querySelectorAll('.local-image-card-drop-target')).forEach((item) => {
      item.classList.remove('local-image-card-drop-target');
    });
    card.classList.add('local-image-card-drop-target');
  });
  els.imageToVideoSequenceWorkspace?.addEventListener('dragleave', (event) => {
    const card = event.target.closest('[data-sequence-key]');
    if (card) card.classList.remove('local-image-card-drop-target');
  });
  els.imageToVideoSequenceWorkspace?.addEventListener('dragend', () => {
    Array.from(els.imageToVideoSequenceWorkspace.querySelectorAll('.local-image-card-dragging, .local-image-card-drop-target')).forEach((item) => {
      item.classList.remove('local-image-card-dragging', 'local-image-card-drop-target');
    });
  });
  els.imageToVideoSequenceWorkspace?.addEventListener('drop', (event) => {
    const card = event.target.closest('[data-sequence-key]');
    if (!card || !(event.dataTransfer instanceof DataTransfer)) return;
    event.preventDefault();
    const dragKey = String(event.dataTransfer.getData('text/plain') || '').trim();
    const targetKey = String(card.dataset.sequenceKey || '').trim();
    moveImageToVideoInputSequenceItemBefore(dragKey, targetKey);
    refreshImageToVideoInputSummaryFromCurrentSelection();
    persistUiState();
    Array.from(els.imageToVideoSequenceWorkspace.querySelectorAll('.local-image-card-dragging, .local-image-card-drop-target')).forEach((item) => {
      item.classList.remove('local-image-card-dragging', 'local-image-card-drop-target');
    });
  });
  els.imageToVideoLocalWorkspace?.addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (!target) return;
    const action = String(target.dataset.action || '');
    const id = String(target.dataset.id || '');
    if (action === 'workspace-upload-source') {
      els.sourceUploadInput?.click();
      return;
    }
    if (action === 'workspace-upload-reference') {
      els.referenceUploadInput?.click();
      return;
    }
    if (action === 'workspace-clear-source') {
      if (els.sourceAssetSelect) els.sourceAssetSelect.value = '';
      state.imageToVideoSourceAssetId = '';
      refreshImageToVideoInputSummaryFromCurrentSelection();
      persistUiState();
      return;
    }
    if (action === 'workspace-clear-reference') {
      state.imageToVideoReferenceAssetOrder = [];
      applyImageToVideoAssetStateToForm();
      refreshImageToVideoInputSummaryFromCurrentSelection();
      persistUiState();
      return;
    }
    if (action === 'workspace-remove-source' && id) {
      if (els.sourceAssetSelect?.value === id) els.sourceAssetSelect.value = '';
      if (state.imageToVideoSourceAssetId === id) state.imageToVideoSourceAssetId = '';
      refreshImageToVideoInputSummaryFromCurrentSelection();
      persistUiState();
      return;
    }
    if (action === 'workspace-remove-reference' && id) {
      state.imageToVideoReferenceAssetOrder = state.imageToVideoReferenceAssetOrder.filter((item) => item !== id);
      applyImageToVideoAssetStateToForm();
      refreshImageToVideoInputSummaryFromCurrentSelection();
      persistUiState();
      return;
    }
    if (action === 'workspace-move-reference-up' && id) {
      const index = state.imageToVideoReferenceAssetOrder.indexOf(id);
      if (index > 0) {
        [state.imageToVideoReferenceAssetOrder[index - 1], state.imageToVideoReferenceAssetOrder[index]] = [state.imageToVideoReferenceAssetOrder[index], state.imageToVideoReferenceAssetOrder[index - 1]];
      }
      applyImageToVideoAssetStateToForm();
      refreshImageToVideoInputSummaryFromCurrentSelection();
      persistUiState();
      return;
    }
    if (action === 'workspace-move-reference-down' && id) {
      const index = state.imageToVideoReferenceAssetOrder.indexOf(id);
      if (index >= 0 && index < state.imageToVideoReferenceAssetOrder.length - 1) {
        [state.imageToVideoReferenceAssetOrder[index + 1], state.imageToVideoReferenceAssetOrder[index]] = [state.imageToVideoReferenceAssetOrder[index], state.imageToVideoReferenceAssetOrder[index + 1]];
      }
      applyImageToVideoAssetStateToForm();
      refreshImageToVideoInputSummaryFromCurrentSelection();
      persistUiState();
      return;
    }
    if (action === 'workspace-promote-reference' && id) {
      const previousSource = String(state.imageToVideoSourceAssetId || '').trim();
      state.imageToVideoSourceAssetId = id;
      state.imageToVideoReferenceAssetOrder = state.imageToVideoReferenceAssetOrder.filter((item) => item !== id);
      if (previousSource && previousSource !== id) {
        state.imageToVideoReferenceAssetOrder.unshift(previousSource);
      }
      applyImageToVideoAssetStateToForm();
      refreshImageToVideoInputSummaryFromCurrentSelection();
      persistUiState();
    }
  });
  els.imageToVideoLocalWorkspace?.addEventListener('dragstart', (event) => {
    const card = event.target.closest('[data-reference-id]');
    if (!card || !(event.dataTransfer instanceof DataTransfer)) return;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', String(card.dataset.referenceId || ''));
    card.classList.add('local-image-card-dragging');
  });
  els.imageToVideoLocalWorkspace?.addEventListener('dragover', (event) => {
    const card = event.target.closest('[data-reference-id]');
    if (!card) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    Array.from(els.imageToVideoLocalWorkspace.querySelectorAll('.local-image-card-drop-target')).forEach((item) => {
      item.classList.remove('local-image-card-drop-target');
    });
    card.classList.add('local-image-card-drop-target');
  });
  els.imageToVideoLocalWorkspace?.addEventListener('dragleave', (event) => {
    const card = event.target.closest('[data-reference-id]');
    if (card) card.classList.remove('local-image-card-drop-target');
  });
  els.imageToVideoLocalWorkspace?.addEventListener('dragend', () => {
    Array.from(els.imageToVideoLocalWorkspace.querySelectorAll('.local-image-card-dragging, .local-image-card-drop-target')).forEach((item) => {
      item.classList.remove('local-image-card-dragging', 'local-image-card-drop-target');
    });
  });
  els.imageToVideoLocalWorkspace?.addEventListener('drop', (event) => {
    const card = event.target.closest('[data-reference-id]');
    if (!card || !(event.dataTransfer instanceof DataTransfer)) return;
    event.preventDefault();
    const dragId = String(event.dataTransfer.getData('text/plain') || '').trim();
    const targetId = String(card.dataset.referenceId || '').trim();
    moveImageToVideoReferenceAssetBefore(dragId, targetId);
    refreshImageToVideoInputSummaryFromCurrentSelection();
    persistUiState();
    Array.from(els.imageToVideoLocalWorkspace.querySelectorAll('.local-image-card-dragging, .local-image-card-drop-target')).forEach((item) => {
      item.classList.remove('local-image-card-dragging', 'local-image-card-drop-target');
    });
  });
  els.imageToVideoUrlWorkspace?.addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (!target) return;
    const action = String(target.dataset.action || '');
    const url = String(target.dataset.url || '').trim();
    if (action === 'workspace-set-source-url') {
      const value = window.prompt('输入主图 URL');
      if (value != null) {
        state.imageToVideoSourceUrlValue = String(value || '').trim();
        applyImageToVideoUrlStateToForm();
        refreshImageToVideoInputSummaryFromCurrentSelection();
        persistUiState();
      }
      return;
    }
    if (action === 'workspace-clear-source-url') {
      state.imageToVideoSourceUrlValue = '';
      applyImageToVideoUrlStateToForm();
      refreshImageToVideoInputSummaryFromCurrentSelection();
      persistUiState();
      return;
    }
    if (action === 'workspace-add-reference-url') {
      const value = window.prompt('输入附加参考图 URL，可一次输入 1 条');
      if (value != null && String(value || '').trim()) {
        appendImageToVideoReferenceUrls([String(value || '').trim()]);
        refreshImageToVideoInputSummaryFromCurrentSelection();
        persistUiState();
      }
      return;
    }
    if (action === 'workspace-clear-reference-url') {
      state.imageToVideoReferenceUrlOrder = [];
      applyImageToVideoUrlStateToForm();
      refreshImageToVideoInputSummaryFromCurrentSelection();
      persistUiState();
      return;
    }
    if (action === 'workspace-remove-source-url' && url) {
      if (state.imageToVideoSourceUrlValue === url) state.imageToVideoSourceUrlValue = '';
      applyImageToVideoUrlStateToForm();
      refreshImageToVideoInputSummaryFromCurrentSelection();
      persistUiState();
      return;
    }
    if (action === 'workspace-remove-reference-url' && url) {
      state.imageToVideoReferenceUrlOrder = state.imageToVideoReferenceUrlOrder.filter((item) => item !== url);
      applyImageToVideoUrlStateToForm();
      refreshImageToVideoInputSummaryFromCurrentSelection();
      persistUiState();
      return;
    }
    if (action === 'workspace-move-reference-url-up' && url) {
      const index = state.imageToVideoReferenceUrlOrder.indexOf(url);
      if (index > 0) {
        [state.imageToVideoReferenceUrlOrder[index - 1], state.imageToVideoReferenceUrlOrder[index]] = [state.imageToVideoReferenceUrlOrder[index], state.imageToVideoReferenceUrlOrder[index - 1]];
      }
      applyImageToVideoUrlStateToForm();
      refreshImageToVideoInputSummaryFromCurrentSelection();
      persistUiState();
      return;
    }
    if (action === 'workspace-move-reference-url-down' && url) {
      const index = state.imageToVideoReferenceUrlOrder.indexOf(url);
      if (index >= 0 && index < state.imageToVideoReferenceUrlOrder.length - 1) {
        [state.imageToVideoReferenceUrlOrder[index + 1], state.imageToVideoReferenceUrlOrder[index]] = [state.imageToVideoReferenceUrlOrder[index], state.imageToVideoReferenceUrlOrder[index + 1]];
      }
      applyImageToVideoUrlStateToForm();
      refreshImageToVideoInputSummaryFromCurrentSelection();
      persistUiState();
      return;
    }
    if (action === 'workspace-promote-reference-url' && url) {
      const previousSource = String(state.imageToVideoSourceUrlValue || '').trim();
      state.imageToVideoSourceUrlValue = url;
      state.imageToVideoReferenceUrlOrder = state.imageToVideoReferenceUrlOrder.filter((item) => item !== url);
      if (previousSource && previousSource !== url) state.imageToVideoReferenceUrlOrder.unshift(previousSource);
      applyImageToVideoUrlStateToForm();
      refreshImageToVideoInputSummaryFromCurrentSelection();
      persistUiState();
    }
  });
  els.imageToVideoUrlWorkspace?.addEventListener('dragstart', (event) => {
    const card = event.target.closest('[data-reference-url]');
    if (!card || !(event.dataTransfer instanceof DataTransfer)) return;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', String(card.dataset.referenceUrl || ''));
    card.classList.add('local-image-card-dragging');
  });
  els.imageToVideoUrlWorkspace?.addEventListener('dragover', (event) => {
    const card = event.target.closest('[data-reference-url]');
    if (!card) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    Array.from(els.imageToVideoUrlWorkspace.querySelectorAll('.local-image-card-drop-target')).forEach((item) => {
      item.classList.remove('local-image-card-drop-target');
    });
    card.classList.add('local-image-card-drop-target');
  });
  els.imageToVideoUrlWorkspace?.addEventListener('dragleave', (event) => {
    const card = event.target.closest('[data-reference-url]');
    if (card) card.classList.remove('local-image-card-drop-target');
  });
  els.imageToVideoUrlWorkspace?.addEventListener('dragend', () => {
    Array.from(els.imageToVideoUrlWorkspace.querySelectorAll('.local-image-card-dragging, .local-image-card-drop-target')).forEach((item) => {
      item.classList.remove('local-image-card-dragging', 'local-image-card-drop-target');
    });
  });
  els.imageToVideoUrlWorkspace?.addEventListener('drop', (event) => {
    const card = event.target.closest('[data-reference-url]');
    if (!card || !(event.dataTransfer instanceof DataTransfer)) return;
    event.preventDefault();
    const dragUrl = String(event.dataTransfer.getData('text/plain') || '').trim();
    const targetUrl = String(card.dataset.referenceUrl || '').trim();
    moveImageToVideoReferenceUrlBefore(dragUrl, targetUrl);
    refreshImageToVideoInputSummaryFromCurrentSelection();
    persistUiState();
    Array.from(els.imageToVideoUrlWorkspace.querySelectorAll('.local-image-card-dragging, .local-image-card-drop-target')).forEach((item) => {
      item.classList.remove('local-image-card-dragging', 'local-image-card-drop-target');
    });
  });

  function setLabelCaption(label, text) {
    if (!label) return;
    const firstTextNode = Array.from(label.childNodes || []).find((node) => node.nodeType === Node.TEXT_NODE);
    if (firstTextNode) {
      firstTextNode.nodeValue = `${text}\n`;
      return;
    }
    label.insertBefore(document.createTextNode(`${text}\n`), label.firstChild || null);
  }

  function applyCompactBridgeCopy(filteredCount = 0) {
    document.title = 'Bridge Studio';
    const eyebrow = document.querySelector('.eyebrow');
    if (eyebrow) eyebrow.textContent = 'Bridge Studio';
    const heroTitle = document.querySelector('.hero-main h1');
    if (heroTitle) heroTitle.textContent = 'Bridge Studio';
    const heroCopy = document.querySelector('.hero-copy');
    if (heroCopy) heroCopy.textContent = '视频围绕 Sora / Veo，图片围绕 Nano Banana。';
    const heroNote = document.querySelector('.hero-note');
    if (heroNote) heroNote.textContent = filteredCount > 0 ? `已隐藏 ${filteredCount} 个非焦点模型。` : '只显示当前可提交能力。';
    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) heroBadge.textContent = 'Bridge';
    const heroPills = Array.from(document.querySelectorAll('.hero-pill'));
    if (heroPills[0]) heroPills[0].textContent = '模型驱动 UI';
    if (heroPills[1]) heroPills[1].textContent = '任务持久化';
    if (heroPills[2]) heroPills[2].textContent = '素材复用';
    const metricLabels = Array.from(document.querySelectorAll('.metric-label'));
    if (metricLabels[0]) metricLabels[0].textContent = '焦点模型';
    if (metricLabels[1]) metricLabels[1].textContent = '工作方式';
    const metricValues = Array.from(document.querySelectorAll('.metric-card strong'));
    if (metricValues[0]) metricValues[0].textContent = 'Sora / Veo / Nano Banana';
    if (metricValues[1]) metricValues[1].textContent = '模型驱动 UI';
    const builderHint = els.createForm?.querySelector('.inline-hint.inline-hint-strong');
    if (builderHint) builderHint.textContent = '先看模型能力，再提交。';
    const workflowTitle = els.soraWorkflowPanel?.querySelector('strong');
    if (workflowTitle) workflowTitle.textContent = '创建';
    const submitTitle = els.soraSubmitPanel?.querySelector('strong');
    if (submitTitle) submitTitle.textContent = '提交';
  }

  function syncCompactResolutionLabels() {
    const taskType = currentTaskType();
    const model = currentModel();
    const caps = getModelCapabilities(model, taskType);
    const isVideoTask = taskType === 'text_to_video' || taskType === 'image_to_video';
    const isVeoVideo = isVideoTask && isVeoFamilyModel(model);
    const tierSizeMode = isTierSizeModel(taskType, model, caps);
    const usesImageSizeField = String(caps.sizeField || '').trim() === 'image_size';
    const resolutionPresetWrap = els.resolutionPreset?.closest('label');
    const resolutionInputWrap = els.resolutionInput?.closest('label');

    setLabelCaption(els.aspectRatioWrap, '画幅比例');
    setLabelCaption(els.imageSizeWrap, isVeoVideo && (tierSizeMode || usesImageSizeField) ? '分辨率档位' : '尺寸档位');
    setLabelCaption(resolutionPresetWrap, isVeoVideo ? '分辨率' : '分辨率预设');
    setLabelCaption(resolutionInputWrap, '自定义分辨率');
    setLabelCaption(els.durationWrap, '时长（秒）');
  }

  function compactCapabilityStatusText() {
    const compressStatus = (value = '', prefix = '') => {
      const raw = String(value || '').trim();
      if (!raw) return '';
      const normalized = raw.replace(/^模型能力：/, '').replace(/^输入矩阵：/, '').replace(/^能力：/, '').replace(/^输入：/, '');
      const parts = normalized.split('/').map((part) => String(part || '').trim()).filter(Boolean).slice(0, 4);
      return parts.length ? `${prefix}${parts.join(' / ')}` : '';
    };
    if (els.modelCapabilityHint) {
      els.modelCapabilityHint.textContent = compressStatus(els.modelCapabilityHint.textContent, '能力：');
    }
    if (els.modelRoleHint) {
      els.modelRoleHint.textContent = compressStatus(els.modelRoleHint.textContent, '输入：');
    }
  }

  function applyFocusedVideoModePanel() {
    const taskType = currentTaskType();
    const model = currentModel();
    const caps = getModelCapabilities(model, taskType);
    const isVeoModel = isVeoFamilyModel(model);
    const isSoraModel = isSoraFamilyModel(model);
    const hasStructuredModes = taskType === 'text_to_video' && (caps.supportsStoryboardPrompt || caps.supportsIntelligentStoryboard);
    const modeWrap = document.querySelector('label[for="videoGenerationMode"]');
    const kicker = els.storyboardPanel?.querySelector('.storyboard-kicker');
    const title = els.storyboardPanel?.querySelector('.storyboard-heading h3');
    const copy = els.storyboardPanel?.querySelector('.storyboard-heading .storyboard-copy');
    const note = els.storyboardPanel?.querySelector('.storyboard-note');
    const previewHeadCopy = els.storyboardPanel?.querySelector('.storyboard-preview-head .storyboard-copy');

    if (modeWrap) showElement(modeWrap, hasStructuredModes);
    if (taskType !== 'text_to_video') return;

    if (kicker) kicker.textContent = isVeoModel ? 'Veo' : (isSoraModel ? 'Sora' : 'Video');
    if (title) title.textContent = hasStructuredModes ? '分镜模式' : (isVeoModel ? 'Veo 创建' : '视频创建');
    if (copy) copy.textContent = hasStructuredModes ? '只显示当前模型支持的模式。' : (isVeoModel ? '以 Prompt、比例和分辨率为主。' : '按当前模型能力创建。');
    if (note) note.textContent = hasStructuredModes ? '这里只处理结构化分镜。' : '当前模型没有额外分镜模式。';
    if (previewHeadCopy) previewHeadCopy.textContent = hasStructuredModes ? '右侧是最终提交结构。' : '';
    if (els.videoModeHint && !hasStructuredModes) {
      els.videoModeHint.textContent = isVeoModel ? 'Veo 当前走标准视频模式。' : '当前走标准视频模式。';
    }
  }

  function applyFocusedPromptPlaceholder() {
    if (!els.prompt) return;
    const taskType = currentTaskType();
    const model = currentModel();
    const isVeoModel = isVeoFamilyModel(model);
    const isSoraModel = isSoraFamilyModel(model);
    if (taskType === 'text_to_video') {
      els.prompt.placeholder = isVeoModel
        ? '写清主体、动作、镜头和节奏'
        : (isSoraModel ? '写清主体、动作、镜头和时序' : '描述你想生成的视频');
      return;
    }
    if (taskType === 'image_to_video') {
      els.prompt.placeholder = isVeoModel
        ? '补充首帧如何动、镜头如何走、结尾如何停'
        : '描述首帧之后的动作、镜头和节奏';
      return;
    }
    if (taskType === 'text_to_image') {
      els.prompt.placeholder = '描述你想生成的图片';
      return;
    }
    if (taskType === 'image_edit') {
      els.prompt.placeholder = '描述你想如何修改原图';
    }
  }

  function applyFocusedImageToVideoPanel() {
    const taskType = currentTaskType();
    if (taskType !== 'image_to_video') return;
    const model = currentModel();
    const caps = getModelCapabilities(model, taskType);
    const family = getBridgeVideoModelFamilyLabel(model);
    const inputCards = Array.from(els.imageToVideoInputPanel?.querySelectorAll('.image-input-card') || []);
    if (inputCards[0]) {
      const title = inputCards[0].querySelector('strong');
      const copy = inputCards[0].querySelector('p');
      if (title) title.textContent = '第 1 张 / 首帧';
      if (copy) copy.textContent = caps.supportsImageToVideoEndFrame
        ? `${family} 会把它当作起始画面，可再补尾帧。`
        : `${family} 会把它当作起始画面。`;
    }
    if (inputCards[1]) {
      const title = inputCards[1].querySelector('strong');
      const copy = inputCards[1].querySelector('p');
      if (title) title.textContent = '参考图';
      if (copy) {
        copy.textContent = caps.supportsImageToVideoReferenceImages
          ? `其余图片只作约束，${formatReferenceLimit(caps, { singular: '仅 1 张', pluralPrefix: '最多 ' })}。`
          : '当前模型不提交参考图。';
      }
    }

    const sequenceHeadCopy = els.imageToVideoSequenceWorkspace?.querySelector('.image-sequence-head span');
    if (sequenceHeadCopy) {
      sequenceHeadCopy.textContent = caps.supportsImageToVideoReferenceImages
        ? '第 1 张定开始，后续按顺序作参考。'
        : '只保留第 1 张作为起始画面。';
    }

    const localHeads = Array.from(els.imageToVideoLocalWorkspace?.querySelectorAll('.local-image-lane-head span') || []);
    if (localHeads[0]) localHeads[0].textContent = '这里只保留 1 张。';
    if (localHeads[1]) {
      localHeads[1].textContent = caps.supportsImageToVideoReferenceImages
        ? '支持多张、排序、设为第 1 张。'
        : '当前模型不提交本地参考图。';
    }

    const urlHeads = Array.from(els.imageToVideoUrlWorkspace?.querySelectorAll('.local-image-lane-head span') || []);
    if (urlHeads[0]) urlHeads[0].textContent = '也可以直接用 URL 作为第 1 张。';
    if (urlHeads[1]) {
      urlHeads[1].textContent = caps.supportsImageToVideoReferenceImages
        ? 'URL 参考图也按当前顺序提交。'
        : '当前模型不提交 URL 参考图。';
    }
  }

  buildInputRoleSummary = function buildInputRoleSummary(taskType, caps, generationMode) {
    const tags = [];
    if (taskType === 'image_to_video') {
      if (caps.supportsImageToVideoFirstFrame) tags.push('首帧');
      if (caps.supportsImageToVideoReferenceImages) tags.push(caps.supportsMultipleReferenceImages ? formatReferenceLimit(caps, { singular: '参考图 1 张', pluralPrefix: '参考图最多 ' }) : '参考图');
      if (caps.supportsImageToVideoEndFrame) tags.push('尾帧');
    } else if (taskType === 'text_to_video') {
      tags.push('Prompt');
      if (caps.supportsTextToVideoReferenceImages) tags.push(caps.supportsMultipleReferenceImages ? formatReferenceLimit(caps, { singular: '参考图 1 张', pluralPrefix: '参考图最多 ' }) : '参考图');
      if (generationMode === 'storyboard') tags.push('Storyboard');
    } else if (taskType === 'image_edit') {
      tags.push('原图');
      if (caps.supportsReferenceImage) tags.push('参考图');
    } else if (taskType === 'text_to_image') {
      tags.push('Prompt');
      if (caps.supportsTextToImageReferenceImages) tags.push(caps.supportsMultipleReferenceImages ? formatReferenceLimit(caps, { singular: '参考图 1 张', pluralPrefix: '参考图最多 ' }) : '参考图');
    }
    return tags.length ? `输入：${tags.join(' / ')}` : '';
  };

  buildTaskTypeGuide = function buildTaskTypeGuide(taskType, caps, generationMode) {
    const isVeoModel = isVeoTaskModel(currentModel());
    if (taskType === 'text_to_video') {
      if (generationMode === 'storyboard') return 'Storyboard 模式，只提交分镜文本。';
      if (generationMode === 'intelligent') return '智能分镜模式，主输入是 Prompt。';
      if (isVeoModel) return caps.supportsTextToVideoReferenceImages ? 'Veo 文生视频，参考图不是首帧。' : 'Veo 文生视频，以 Prompt 为主。';
      return caps.supportsTextToVideoReferenceImages ? '文生视频，参考图不是首帧。' : '文生视频，以 Prompt 为主。';
    }
    if (taskType === 'image_to_video') {
      return caps.supportsImageToVideoEndFrame ? '图生视频，第 1 张是首帧，可选尾帧。' : '图生视频，第 1 张是首帧。';
    }
    if (taskType === 'image_edit') return '图片编辑，原图必需。';
    if (taskType === 'text_to_image') return caps.supportsTextToImageReferenceImages ? '文生图，可加参考图。' : '文生图，以 Prompt 为主。';
    return '';
  };

  applyFocusedBridgeBranding = function applyFocusedBridgeBranding(filteredCount = 0) {
    applyCompactBridgeCopy(filteredCount);
    const providerType = document.getElementById('providerType');
    if (providerType?.value === 'compatible') {
      const providerLabel = document.getElementById('providerLabel');
      if (providerLabel && !String(providerLabel.value || '').trim()) providerLabel.value = 'BLTCY';
    }
  };

  const originalSyncResolutionOptions = syncResolutionOptions;
  syncResolutionOptions = function syncResolutionOptions() {
    originalSyncResolutionOptions.apply(this, arguments);
    syncCompactResolutionLabels();
  };

  const originalApplyCreateFormRulesV2 = applyCreateFormRulesV2;
  applyCreateFormRulesV2 = function applyCreateFormRulesV2() {
    const result = originalApplyCreateFormRulesV2.apply(this, arguments);
    applyCompactBridgeCopy();
    syncCompactResolutionLabels();
    compactCapabilityStatusText();
    applyFocusedVideoModePanel();
    applyFocusedPromptPlaceholder();
    applyFocusedImageToVideoPanel();
    return result;
  };

  applyCompactBridgeCopy();
  syncCompactResolutionLabels();
  compactCapabilityStatusText();
  applyFocusedVideoModePanel();
  applyFocusedPromptPlaceholder();
  applyFocusedImageToVideoPanel();
  els.soraWorkflowPanel?.addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (!target) return;
    const action = String(target.dataset.action || '');
    if (action === 'workflow-task-text-image' && els.typeSelect) {
      els.typeSelect.value = 'text_to_image';
      applyCreateFormRulesV2();
      persistUiState();
      return;
    }
    if (action === 'workflow-task-image-edit' && els.typeSelect) {
      els.typeSelect.value = 'image_edit';
      applyCreateFormRulesV2();
      persistUiState();
      return;
    }
    if (action === 'workflow-task-text-video' && els.typeSelect) {
      els.typeSelect.value = 'text_to_video';
      applyCreateFormRulesV2();
      persistUiState();
      return;
    }
    if (action === 'workflow-task-image-video' && els.typeSelect) {
      els.typeSelect.value = 'image_to_video';
      applyCreateFormRulesV2();
      persistUiState();
      return;
    }
    if (action === 'workflow-mode-standard' && els.videoGenerationMode) {
      els.videoGenerationMode.value = 'standard';
      applyCreateFormRulesV2();
      persistUiState();
      return;
    }
    if (action === 'workflow-mode-storyboard' && els.videoGenerationMode) {
      els.typeSelect.value = 'text_to_video';
      applyCreateFormRulesV2();
      els.videoGenerationMode.value = Array.from(els.videoGenerationMode.options || []).some((item) => item.value === 'storyboard')
        ? 'storyboard'
        : 'standard';
      applyCreateFormRulesV2();
      if (els.videoGenerationMode.value === 'storyboard' && !String(els.storyboardText?.value || '').trim()) {
        renderStoryboardEditor(defaultStoryboardShots());
      }
      persistUiState();
      return;
    }
    if (action === 'workflow-seed-prompt' && els.prompt) {
        els.prompt.value = bridgePromptSeed(currentTaskType());
      persistUiState();
      return;
    }
    if (action === 'workflow-optimize-prompt') {
      if (els.optimizePromptWithModel && !els.optimizePromptWithModel.disabled && !els.optimizePromptWithModel.closest('.hidden')) {
        els.optimizePromptWithModel.click();
      }
      return;
    }
    if (action === 'workflow-seed-storyboard') {
      els.typeSelect.value = 'text_to_video';
      applyCreateFormRulesV2();
      els.videoGenerationMode.value = Array.from(els.videoGenerationMode.options || []).some((item) => item.value === 'storyboard')
        ? 'storyboard'
        : 'standard';
      applyCreateFormRulesV2();
      renderStoryboardEditor(defaultStoryboardShots());
      persistUiState();
    }
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
  initRevealAnimations();
  ensureVisualInputEnhancements();
  bindEvents();
  try {
    await loadMeta();
    if (els.providerPreset.options.length) {
      els.providerPreset.value = els.providerPreset.options[0].value;
      applyPreset(els.providerPreset.value);
    }

    await Promise.all([loadProfiles(), loadRuntimeConfig(), loadStudioTasks()]);
    initTopConfigMirror();
    restoreUiPreferences();
    await Promise.all([loadAssets(), loadTasks(true)]);
    updateTopRunningStatus();
    renderTopConnectivity();
    checkConnectivity({ silent: true }).catch(() => {});
    startConnectivityPolling();
    restoreCreateDraft();
    ensureImageToVideoSequenceState();
    applyCreateFormRulesV2();
    setStatus('初始化完成，可开始配置和创建任务。');
  } catch (error) {
    writeLog('INIT_ERROR', { message: error.message });
    setStatus(`初始化失败：${error.message}`);
  }
}

init();
