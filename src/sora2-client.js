import { DEFAULT_GENERATION_PARAMS, DEFAULT_OUTPUT_DIR, PROVIDER_PRESETS } from './app-config.js';
import { enrichModelsWithBltcyCatalog, getBltcyCatalogEntry, refreshBltcyModelCatalog } from './bltcy-model-catalog.js';

const OPENAI_DEFAULT_BASE_URL = process.env.OPENAI_BASE_URL || PROVIDER_PRESETS.bltcy.baseUrl;
const OPENAI_DEFAULT_PROXY_URL = process.env.OPENAI_PROXY_URL || process.env.HTTPS_PROXY || process.env.HTTP_PROXY || '';
const BILLING_ERROR_CODES = new Set(['billing_hard_limit_reached', 'insufficient_quota']);
const AUTH_ERROR_CODES = new Set(['invalid_api_key', 'organization_deactivated', 'insufficient_permissions']);
const STUDIO_ALLOWED_PROVIDERS = new Set(['openai', 'google', 'mid-journey', '快手可灵', '火山豆包']);
const STUDIO_SUPPORTED_TASKS = new Set(['text_to_image', 'image_edit', 'text_to_video', 'image_to_video']);

const DEFAULT_RUNTIME_CONFIG = {
  providerLabel: PROVIDER_PRESETS.bltcy.providerLabel,
  providerType: PROVIDER_PRESETS.bltcy.providerType,
  apiKey: process.env.SORA2_API_KEY || process.env.OPENAI_API_KEY || '',
  baseUrl: OPENAI_DEFAULT_BASE_URL,
  proxyUrl: OPENAI_DEFAULT_PROXY_URL,
  imageEnabled: PROVIDER_PRESETS.bltcy.imageEnabled,
  videoEnabled: PROVIDER_PRESETS.bltcy.videoEnabled,
  videoRequestFormat: PROVIDER_PRESETS.bltcy.videoRequestFormat,
  inputReferenceFormat: PROVIDER_PRESETS.bltcy.inputReferenceFormat,
  outputDir: DEFAULT_OUTPUT_DIR,
  modelsPath: PROVIDER_PRESETS.bltcy.modelsPath,
  imageGeneratePath: PROVIDER_PRESETS.bltcy.imageGeneratePath,
  imageEditPath: PROVIDER_PRESETS.bltcy.imageEditPath,
  videoCreatePath: PROVIDER_PRESETS.bltcy.videoCreatePath,
  videoRetrievePathTemplate: PROVIDER_PRESETS.bltcy.videoRetrievePathTemplate,
  videoCancelPathTemplate: PROVIDER_PRESETS.bltcy.videoCancelPathTemplate,
  videoContentPathTemplate: PROVIDER_PRESETS.bltcy.videoContentPathTemplate,
  providerCapabilities: { ...(PROVIDER_PRESETS.bltcy.providerCapabilities || {}) }
};

let runtimeConfig = { ...DEFAULT_RUNTIME_CONFIG };

function normalizePath(value) {
  if (typeof value !== 'string') return '';
  const raw = value.trim();
  if (!raw) return '';
  if (raw.startsWith('http://') || raw.startsWith('https://')) return raw;
  return raw.startsWith('/') ? raw : `/${raw}`;
}

function normalizeBaseUrl(value) {
  return (value || '').trim().replace(/\/$/, '');
}

function withLeadingV1(baseUrl, tail) {
  return /\/v1$/i.test(baseUrl) ? `/${tail}` : `/v1/${tail}`;
}

function inferDefaultPaths(baseUrl) {
  return {
    modelsPath: withLeadingV1(baseUrl, 'models'),
    imageGeneratePath: withLeadingV1(baseUrl, 'images/generations'),
    imageEditPath: withLeadingV1(baseUrl, 'images/edits'),
    videoCreatePath: withLeadingV1(baseUrl, 'videos'),
    videoRetrievePathTemplate: withLeadingV1(baseUrl, 'videos/{id}'),
    videoCancelPathTemplate: withLeadingV1(baseUrl, 'videos/{id}/cancel'),
    videoContentPathTemplate: withLeadingV1(baseUrl, 'videos/{id}/content')
  };
}

function inferInputReferenceFormat(baseUrl, providerLabel, explicitValue, providerType) {
  if (explicitValue === 'string' || explicitValue === 'object') return explicitValue;
  return 'object';
}

function asBoolean(value, fallback) {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    if (value === 'true') return true;
    if (value === 'false') return false;
  }
  return fallback;
}

function applyProviderPreset(type) {
  const preset = PROVIDER_PRESETS[type];
  if (!preset) return;
  runtimeConfig = {
    ...runtimeConfig,
    ...preset,
    providerCapabilities: { ...(preset.providerCapabilities || {}) }
  };
}

function normalizeKlingFileValue(value) {
  const normalized = String(value || '').trim();
  if (!normalized) return '';
  const match = normalized.match(/^data:([^;]+);base64,(.+)$/);
  return match ? match[2] : normalized;
}

function resolveKlingModelName(modelId) {
  const normalized = String(modelId || '').trim();
  if (!normalized) return normalized;
  if (normalized === 'kling-video-v3-omni') return 'kling-v3';
  if (/^kling-video-v\d/i.test(normalized)) {
    return normalized.replace(/^kling-video-/, 'kling-').replace(/-omni$/i, '');
  }
  return normalized;
}

export function setSora2RuntimeConfig(next = {}) {
  if (typeof next.providerType === 'string' && PROVIDER_PRESETS[next.providerType]) {
    applyProviderPreset(next.providerType);
  }

  const nextBaseUrl = typeof next.baseUrl === 'string' && next.baseUrl.trim()
    ? normalizeBaseUrl(next.baseUrl)
    : runtimeConfig.baseUrl;
  const inferred = inferDefaultPaths(nextBaseUrl);

  runtimeConfig.providerLabel = typeof next.providerLabel === 'string' && next.providerLabel.trim()
    ? next.providerLabel.trim()
    : runtimeConfig.providerLabel;
  runtimeConfig.providerType = typeof next.providerType === 'string' && next.providerType.trim()
    ? next.providerType.trim()
    : runtimeConfig.providerType;
  runtimeConfig.baseUrl = nextBaseUrl;

  if (typeof next.apiKey === 'string' && next.apiKey.trim()) runtimeConfig.apiKey = next.apiKey.trim();
  if (typeof next.proxyUrl === 'string') runtimeConfig.proxyUrl = next.proxyUrl.trim();
  if (typeof next.outputDir === 'string' && next.outputDir.trim()) runtimeConfig.outputDir = next.outputDir.trim();

  runtimeConfig.modelsPath = normalizePath(next.modelsPath) || inferred.modelsPath;
  runtimeConfig.imageGeneratePath = normalizePath(next.imageGeneratePath) || inferred.imageGeneratePath;
  runtimeConfig.imageEditPath = normalizePath(next.imageEditPath) || inferred.imageEditPath;
  runtimeConfig.videoCreatePath = normalizePath(next.videoCreatePath) || inferred.videoCreatePath;
  runtimeConfig.videoRetrievePathTemplate = normalizePath(next.videoRetrievePathTemplate) || inferred.videoRetrievePathTemplate;
  runtimeConfig.videoCancelPathTemplate = normalizePath(next.videoCancelPathTemplate) || inferred.videoCancelPathTemplate;
  runtimeConfig.videoContentPathTemplate = normalizePath(next.videoContentPathTemplate) || inferred.videoContentPathTemplate;

  runtimeConfig.videoRequestFormat = typeof next.videoRequestFormat === 'string' && ['json', 'multipart'].includes(next.videoRequestFormat)
    ? next.videoRequestFormat
    : runtimeConfig.videoRequestFormat;
  runtimeConfig.inputReferenceFormat = inferInputReferenceFormat(
    runtimeConfig.baseUrl,
    runtimeConfig.providerLabel,
    next.inputReferenceFormat,
    runtimeConfig.providerType
  );
  runtimeConfig.imageEnabled = asBoolean(next.imageEnabled, runtimeConfig.imageEnabled);
  runtimeConfig.videoEnabled = asBoolean(next.videoEnabled, runtimeConfig.videoEnabled);
  runtimeConfig.providerCapabilities = {
    ...(runtimeConfig.providerCapabilities || {}),
    ...((PROVIDER_PRESETS[runtimeConfig.providerType] || {}).providerCapabilities || {})
  };
}

export function getSora2RuntimeConfig() {
  return {
    hasBaseUrl: Boolean(runtimeConfig.baseUrl),
    hasApiKey: Boolean(runtimeConfig.apiKey),
    hasProxyUrl: Boolean(runtimeConfig.proxyUrl),
    apiKey: runtimeConfig.apiKey || '',
    providerLabel: runtimeConfig.providerLabel,
    providerType: runtimeConfig.providerType,
    baseUrl: runtimeConfig.baseUrl,
    proxyUrl: runtimeConfig.proxyUrl,
    maskedApiKey: runtimeConfig.apiKey ? `${runtimeConfig.apiKey.slice(0, 6)}***` : '',
    outputDir: runtimeConfig.outputDir,
    capabilities: {
      imageEnabled: Boolean(runtimeConfig.imageEnabled),
      videoEnabled: Boolean(runtimeConfig.videoEnabled)
    },
    endpoints: {
      modelsPath: runtimeConfig.modelsPath,
      imageGeneratePath: runtimeConfig.imageGeneratePath,
      imageEditPath: runtimeConfig.imageEditPath,
      videoCreatePath: runtimeConfig.videoCreatePath,
      videoRetrievePathTemplate: runtimeConfig.videoRetrievePathTemplate,
      videoCancelPathTemplate: runtimeConfig.videoCancelPathTemplate,
      videoContentPathTemplate: runtimeConfig.videoContentPathTemplate,
      videoRequestFormat: runtimeConfig.videoRequestFormat,
      inputReferenceFormat: runtimeConfig.inputReferenceFormat
    },
    providerCapabilities: { ...(runtimeConfig.providerCapabilities || {}) }
  };
}

export function getPublicRuntimeConfig() {
  const config = getSora2RuntimeConfig();
  return {
    hasBaseUrl: config.hasBaseUrl,
    hasApiKey: config.hasApiKey,
    hasProxyUrl: config.hasProxyUrl,
    providerLabel: config.providerLabel,
    providerType: config.providerType,
    baseUrl: config.baseUrl,
    proxyUrl: config.proxyUrl,
    maskedApiKey: config.maskedApiKey,
    outputDir: config.outputDir,
    capabilities: { ...(config.capabilities || {}) },
    endpoints: { ...(config.endpoints || {}) },
    providerCapabilities: { ...(config.providerCapabilities || {}) }
  };
}

export function getPersistableRuntimeConfig() {
  return {
    providerLabel: runtimeConfig.providerLabel,
    providerType: runtimeConfig.providerType,
    apiKey: runtimeConfig.apiKey,
    baseUrl: runtimeConfig.baseUrl,
    proxyUrl: runtimeConfig.proxyUrl,
    outputDir: runtimeConfig.outputDir,
    modelsPath: runtimeConfig.modelsPath,
    imageGeneratePath: runtimeConfig.imageGeneratePath,
    imageEditPath: runtimeConfig.imageEditPath,
    videoCreatePath: runtimeConfig.videoCreatePath,
    videoRetrievePathTemplate: runtimeConfig.videoRetrievePathTemplate,
    videoCancelPathTemplate: runtimeConfig.videoCancelPathTemplate,
    videoContentPathTemplate: runtimeConfig.videoContentPathTemplate,
    videoRequestFormat: runtimeConfig.videoRequestFormat,
    inputReferenceFormat: runtimeConfig.inputReferenceFormat,
    imageEnabled: runtimeConfig.imageEnabled,
    videoEnabled: runtimeConfig.videoEnabled,
    providerCapabilities: { ...(runtimeConfig.providerCapabilities || {}) }
  };
}

function buildPath(template, id) {
  return (template || '').replace('{id}', id);
}

function getProxyWarnings() {
  if (!runtimeConfig.proxyUrl) return [];
  const warnings = [];
  const lowered = runtimeConfig.proxyUrl.toLowerCase();
  if (lowered.includes('127.0.0.1') || lowered.includes('localhost')) {
    warnings.push('Current proxy uses localhost/127.0.0.1. If you run inside a container or WSL, host proxy access may fail.');
  }
  return warnings;
}

function ensureConfigured() {
  if (!runtimeConfig.baseUrl || !runtimeConfig.apiKey) {
    throw new Error('Please fill in Base URL and API Key first.');
  }
}

function ensureFeatureEnabled(featureKey, label, path) {
  if (!runtimeConfig[featureKey]) {
    const error = new Error(`${label} is disabled in the current provider profile.`);
    error.code = 'FEATURE_DISABLED';
    error.statusCode = 422;
    throw error;
  }
  if (!path) {
    const error = new Error(`${label} is missing an endpoint path.`);
    error.code = 'ENDPOINT_NOT_CONFIGURED';
    error.statusCode = 422;
    throw error;
  }
}

async function withProxyEnv(fn) {
  const previous = {
    HTTP_PROXY: process.env.HTTP_PROXY,
    HTTPS_PROXY: process.env.HTTPS_PROXY,
    http_proxy: process.env.http_proxy,
    https_proxy: process.env.https_proxy,
    NO_PROXY: process.env.NO_PROXY,
    no_proxy: process.env.no_proxy
  };

  if (runtimeConfig.proxyUrl) {
    process.env.HTTP_PROXY = runtimeConfig.proxyUrl;
    process.env.HTTPS_PROXY = runtimeConfig.proxyUrl;
    process.env.http_proxy = runtimeConfig.proxyUrl;
    process.env.https_proxy = runtimeConfig.proxyUrl;
    delete process.env.NO_PROXY;
    delete process.env.no_proxy;
  } else {
    delete process.env.HTTP_PROXY;
    delete process.env.HTTPS_PROXY;
    delete process.env.http_proxy;
    delete process.env.https_proxy;
    process.env.NO_PROXY = '*';
    process.env.no_proxy = '*';
  }

  try {
    return await fn();
  } finally {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
}

function makeNetworkError(url, reason) {
  const suffix = runtimeConfig.proxyUrl ? `, via proxy ${runtimeConfig.proxyUrl}` : ', direct mode';
  const error = new Error(`Network request failed: ${url}${suffix}. ${reason || 'Unknown network error'}`);
  error.code = 'UPSTREAM_NETWORK_UNREACHABLE';
  error.statusCode = 502;
  return error;
}

function makeHttpError(status, data) {
  const message = data?.error?.message || data?.message || `Upstream request failed: ${status || 'unknown'}`;
  const error = new Error(message);
  error.code = 'OPENAI_HTTP_ERROR';
  error.statusCode = status || 500;
  error.providerCode = data?.error?.code || data?.code || null;
  error.providerType = data?.error?.type || null;
  error.payload = data;
  return error;
}

function summarizeVideoRequest(body, format) {
  const inputReference = body?.input_reference;
  let inputReferenceType = null;
  if (typeof inputReference === 'string' && inputReference) inputReferenceType = 'string';
  else if (inputReference && typeof inputReference === 'object') inputReferenceType = 'object';

  return {
    endpoint: runtimeConfig.videoCreatePath,
    requestFormat: format,
    model: String(body?.model || body?.model_name || ''),
    fields: Object.keys(body || {}).sort(),
    promptLength: typeof body?.prompt === 'string' ? body.prompt.length : 0,
    size: body?.size || null,
    image_size: body?.image_size || null,
    aspect_ratio: body?.aspect_ratio || null,
    seconds: body?.seconds || null,
    seed: body?.seed ?? null,
    has_negative_prompt: Boolean(String(body?.negative_prompt || '').trim()),
    images_count: Array.isArray(body?.images) ? body.images.length : (body?.images ? 1 : 0),
    has_input_reference: inputReference !== undefined,
    input_reference_type: inputReferenceType,
    has_end_frame_image: Boolean(body?.end_frame_image)
  };
}

function normalizeProviderVideoTaskResponse(data, providerMeta = null) {
  const taskId = data?.id || data?.task_id || data?.taskId || data?.data?.task_id || data?.data?.id || null;
  const rawStatus = data?.status || data?.task_status || data?.taskStatus || data?.data?.task_status || data?.data?.status || '';
  const statusMap = {
    submitted: 'queued',
    processing: 'running',
    succeed: 'completed',
    success: 'completed',
    failed: 'failed'
  };
  const normalizedStatus = statusMap[String(rawStatus || '').toLowerCase()] || rawStatus || 'queued';
  const videoUrl = data?.video_url
    || data?.output?.video_url
    || data?.output?.url
    || data?.data?.task_result?.videos?.[0]?.url
    || data?.data?.video_url
    || '';
  return {
    id: taskId,
    task_id: taskId,
    status: normalizedStatus,
    output: videoUrl ? { video_url: videoUrl, url: videoUrl } : null,
    error: normalizedStatus === 'failed'
      ? { message: data?.message || data?.data?.task_status_msg || 'Upstream task failed' }
      : null,
    providerMeta
  };
}

function summarizeImageRequest(body, path) {
  const inputReference = body?.input_reference;
  let inputReferenceType = null;
  if (typeof inputReference === 'string' && inputReference) inputReferenceType = 'string';
  else if (inputReference && typeof inputReference === 'object') inputReferenceType = 'object';

  return {
    endpoint: path,
    model: String(body?.model || ''),
    fields: Object.keys(body || {}).sort(),
    promptLength: typeof body?.prompt === 'string' ? body.prompt.length : 0,
    size: body?.size || null,
    image_size: body?.image_size || null,
    aspect_ratio: body?.aspect_ratio || null,
    quality: body?.quality || null,
    n: body?.n ?? null,
    has_image: Boolean(body?.image),
    has_reference_image: Boolean(body?.reference_image),
    has_input_reference: inputReference !== undefined,
    input_reference_type: inputReferenceType
  };
}

async function parseJsonResponse(response) {
  const text = await response.text();
  try {
    return text ? JSON.parse(text) : {};
  } catch {
    return { raw: text };
  }
}

async function apiRequest(path, { method = 'GET', body, maxTime = 20 } = {}) {
  ensureConfigured();
  const url = path.startsWith('http://') || path.startsWith('https://') ? path : `${runtimeConfig.baseUrl}${path}`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), maxTime * 1000);

  try {
    const response = await withProxyEnv(() => fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${runtimeConfig.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal
    }));

    const data = await parseJsonResponse(response);
    if (!response.ok) throw makeHttpError(response.status, data);
    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      if (runtimeConfig.proxyUrl) {
        const previousProxy = runtimeConfig.proxyUrl;
        runtimeConfig.proxyUrl = '';
        try {
          return await apiRequest(path, { method, body, maxTime });
        } finally {
          runtimeConfig.proxyUrl = previousProxy;
        }
      }
      throw makeNetworkError(url, `Request timed out after ${maxTime}s`);
    }
    if (error.code === 'OPENAI_HTTP_ERROR') throw error;
    throw makeNetworkError(url, error.message);
  } finally {
    clearTimeout(timer);
  }
}

async function multipartRequest(path, fields, { maxTime = 60 } = {}) {
  ensureConfigured();
  const url = path.startsWith('http://') || path.startsWith('https://') ? path : `${runtimeConfig.baseUrl}${path}`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), maxTime * 1000);
  const form = new FormData();

  const fileFieldNames = new Set(['input_reference', 'end_frame_image', 'image', 'images']);

  const appendField = (name, value) => {
    if (value === undefined || value === null || value === '') return;
    if (Array.isArray(value)) {
      for (const item of value) appendField(name, item);
      return;
    }
    if (typeof value === 'string' && value.startsWith('data:') && fileFieldNames.has(name)) {
      const match = value.match(/^data:([^;]+);base64,(.+)$/);
      if (match) {
        const mimeType = match[1];
        const extension = mimeType.includes('png') ? 'png' : mimeType.includes('jpeg') ? 'jpg' : mimeType.includes('webp') ? 'webp' : 'bin';
        const blob = new Blob([Buffer.from(match[2], 'base64')], { type: mimeType });
        form.append(name, blob, `${name}.${extension}`);
        return;
      }
    }
    if (typeof value === 'object') {
      form.append(name, JSON.stringify(value));
      return;
    }
    form.append(name, String(value));
  };

  for (const [name, value] of Object.entries(fields)) {
    appendField(name, value);
  }

  try {
    const response = await withProxyEnv(() => fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${runtimeConfig.apiKey}`
      },
      body: form,
      signal: controller.signal
    }));

    const data = await parseJsonResponse(response);
    if (!response.ok) throw makeHttpError(response.status, data);
    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      if (runtimeConfig.proxyUrl) {
        const previousProxy = runtimeConfig.proxyUrl;
        runtimeConfig.proxyUrl = '';
        try {
          return await multipartRequest(path, fields, { maxTime });
        } finally {
          runtimeConfig.proxyUrl = previousProxy;
        }
      }
      throw makeNetworkError(url, `Request timed out after ${maxTime}s`);
    }
    if (error.code === 'OPENAI_HTTP_ERROR') throw error;
    throw makeNetworkError(url, error.message);
  } finally {
    clearTimeout(timer);
  }
}

function modelNameHasAny(modelId, keywords) {
  const lowered = String(modelId || '').toLowerCase();
  return keywords.some((keyword) => lowered.includes(keyword));
}

function inferModelCategory(model) {
  const id = typeof model === 'string' ? model : model?.id || '';
  const endpointTypes = Array.isArray(model?.supported_endpoint_types) ? model.supported_endpoint_types.map((item) => String(item).toLowerCase()) : [];
  const loweredId = String(id || '').toLowerCase();

  const imageHints = ['image-generation', 'image-edit', 'images'];
  const videoHints = ['openai-video', 'videos', 'video-generation'];
  const imageIdentity = /(gpt-image|dall-e|banana|seedream|recraft|ideogram|qwen-image|midjourney|mj|(^|[-_])image($|[-_])|image2image|\bi2i\b|inpaint|outpaint|edit)/.test(loweredId);
  const videoIdentity = /(sora|veo|gpt-video|seedance|kling-video|wan|pixverse|vidu|hailuo|(^|[-_])video($|[-_])|\bt2v\b|\bi2v\b|\bv2v\b|\br2v\b)/.test(loweredId);

  const isImage = endpointTypes.some((type) => imageHints.includes(type))
    || imageIdentity;
  const isVideo = endpointTypes.some((type) => videoHints.includes(type))
    || videoIdentity;

  if (isImage && !isVideo) return 'image';
  if (isVideo && !isImage) return 'video';
  if (isImage && isVideo) return 'hybrid';
  return 'other';
}

function filterModelsByTask(taskType, models) {
  const narrowed = models.filter((model) => {
    const provider = String(model?.provider || '').trim().toLowerCase();
    if (!STUDIO_ALLOWED_PROVIDERS.has(provider)) return false;

    const supportedTasks = Array.isArray(model?.catalog?.capabilities?.supportedTasks)
      ? model.catalog.capabilities.supportedTasks
      : [];
    if (supportedTasks.length) {
      return supportedTasks.some((item) => STUDIO_SUPPORTED_TASKS.has(item));
    }

    const category = inferModelCategory(model);
    return category === 'image' || category === 'video' || category === 'hybrid';
  });

  if (!taskType) return narrowed;
  const wantVideo = taskType === 'text_to_video' || taskType === 'image_to_video';
  const wantImage = taskType === 'text_to_image' || taskType === 'image_edit';

  return narrowed.filter((model) => {
    const supportedTasks = Array.isArray(model?.catalog?.capabilities?.supportedTasks)
      ? model.catalog.capabilities.supportedTasks
      : [];
    if (supportedTasks.length) return supportedTasks.includes(taskType);

    const category = inferModelCategory(model);
    if (wantVideo) return category === 'video' || category === 'hybrid';
    if (wantImage) return category === 'image' || category === 'hybrid';
    return true;
  });
}

function summarizeModelCapabilities(models) {
  const summary = {
    image: [],
    video: [],
    hybrid: [],
    other: []
  };

  for (const model of models) {
    const id = typeof model === 'string' ? model : model?.id || '';
    summary[inferModelCategory(model)].push(id);
  }

  return summary;
}

export async function listModels(taskType, options = {}) {
  ensureConfigured();
  const includeCatalog = Boolean(options.includeCatalog);
  const data = await apiRequest(runtimeConfig.modelsPath);
  const raw = Array.isArray(data?.data) ? data.data : [];
  const normalized = raw
    .map((item) => (typeof item === 'string' ? { id: item } : item))
    .filter((item) => item?.id);
  const refreshCatalog = Boolean(options.refreshCatalog);
  if (includeCatalog && refreshCatalog && runtimeConfig.baseUrl.includes('api.bltcy.ai')) {
    await refreshBltcyModelCatalog(normalized.map((item) => item.id), {
      onProgress: typeof options.onCatalogProgress === 'function' ? options.onCatalogProgress : null
    });
  }
  const enriched = includeCatalog && runtimeConfig.baseUrl.includes('api.bltcy.ai')
    ? await enrichModelsWithBltcyCatalog(normalized)
    : normalized;
  const filtered = filterModelsByTask(taskType, enriched);

  return {
    taskType: taskType || null,
    data: filtered,
    total: filtered.length,
    source: runtimeConfig.providerLabel,
    summary: summarizeModelCapabilities(enriched)
  };
}

function extractOptimizedPromptText(data) {
  if (!data || typeof data !== 'object') return '';
  const direct = [
    data.optimized_prompt,
    data.optimizedPrompt,
    data.rewritten_prompt,
    data.rewrittenPrompt,
    data.prompt
  ].find((item) => typeof item === 'string' && item.trim());
  if (direct) return direct.trim();

  const nested = [
    data.output?.optimized_prompt,
    data.output?.optimizedPrompt,
    data.output?.prompt,
    data.data?.optimized_prompt,
    data.data?.optimizedPrompt,
    data.data?.prompt,
    data.result?.optimized_prompt,
    data.result?.optimizedPrompt,
    data.result?.prompt
  ].find((item) => typeof item === 'string' && item.trim());
  if (nested) return nested.trim();

  if (Array.isArray(data.data)) {
    const arrayItem = data.data.find((item) => item && typeof item === 'object'
      && typeof (item.optimized_prompt || item.optimizedPrompt || item.prompt) === 'string');
    const text = arrayItem?.optimized_prompt || arrayItem?.optimizedPrompt || arrayItem?.prompt || '';
    if (typeof text === 'string' && text.trim()) return text.trim();
  }

  return '';
}

function extractChatCompletionText(data) {
  if (!data || typeof data !== 'object') return '';
  const choice = Array.isArray(data.choices) ? data.choices[0] : null;
  const text = choice?.message?.content || choice?.text || '';
  if (typeof text === 'string' && text.trim()) return text.trim();
  return '';
}

export async function optimizePromptWithModel(payload = {}) {
  ensureConfigured();
  const model = String(payload.model || '').trim();
  const prompt = String(payload.prompt || '').trim();
  if (!model) {
    const error = new Error('A model must be selected.');
    error.code = 'VALIDATION_ERROR';
    error.statusCode = 400;
    throw error;
  }
  if (!prompt) {
    const error = new Error('Prompt is required.');
    error.code = 'VALIDATION_ERROR';
    error.statusCode = 400;
    throw error;
  }

  let optimizePath = String(payload.optimizePath || '').trim();
  let chatPath = '';
  if (!optimizePath && runtimeConfig.baseUrl.includes('api.bltcy.ai')) {
    const catalogEntry = await getBltcyCatalogEntry(model);
    optimizePath = String(catalogEntry?.capabilities?.promptOptimizePath || '').trim();
    chatPath = String(catalogEntry?.capabilities?.chatCompletionsPath || '').trim();
  }

  const pathCandidates = [];
  if (optimizePath) pathCandidates.push(optimizePath);
  if (!optimizePath && model.toLowerCase().includes('veo')) {
    pathCandidates.push(
      '/v1/videos/prompts/optimize',
      '/v1/videos/prompt-optimize',
      '/v1/videos/prompt_optimize',
      '/v1/video/prompts/optimize',
      '/v1/veo/prompts/optimize'
    );
  }
  if (!pathCandidates.length && !chatPath) {
    const error = new Error(`Model ${model} does not expose a prompt optimization endpoint.`);
    error.code = 'MODEL_PROMPT_OPTIMIZE_UNSUPPORTED';
    error.statusCode = 422;
    throw error;
  }

  const bodyCandidates = [
    { model, prompt, task_type: payload.taskType || '' },
    { model, input: prompt, task_type: payload.taskType || '' },
    { model, prompt }
  ];

  let lastError = null;
  for (const path of pathCandidates) {
    for (const body of bodyCandidates) {
      try {
        const data = await apiRequest(path, { method: 'POST', body, maxTime: 60 });
        const optimizedPrompt = extractOptimizedPromptText(data) || prompt;
        return {
          optimizedPrompt,
          usedPath: path,
          response: data
        };
      } catch (error) {
        lastError = error;
        if (error.code !== 'OPENAI_HTTP_ERROR') throw error;
      }
    }
  }

  if (chatPath) {
    try {
      const chatBody = {
        model,
        temperature: 0.2,
        messages: [
          {
            role: 'system',
            content: 'You are a prompt optimizer for image/video generation. Rewrite the user prompt to be clearer, cinematic, and production-ready. Keep identity/constraints and do not add unsafe content.'
          },
          {
            role: 'user',
            content: prompt
          }
        ]
      };
      const data = await apiRequest(chatPath, { method: 'POST', body: chatBody, maxTime: 60 });
      const optimizedPrompt = extractChatCompletionText(data) || prompt;
      return {
        optimizedPrompt,
        usedPath: chatPath,
        response: data
      };
    } catch (error) {
      lastError = error;
    }
  }

  if (lastError && lastError.code === 'OPENAI_HTTP_ERROR') {
    const attempted = [...pathCandidates];
    if (chatPath) attempted.push(chatPath);
    const unsupported = new Error(`Model ${model} prompt optimization endpoint is unavailable. Tried: ${attempted.join(', ')}`);
    unsupported.code = 'MODEL_PROMPT_OPTIMIZE_UNSUPPORTED';
    unsupported.statusCode = 422;
    throw unsupported;
  }

  throw lastError || new Error('Prompt optimization failed.');
}

export async function createVideoTask(payload) {
  ensureFeatureEnabled('videoEnabled', 'Video generation', runtimeConfig.videoCreatePath);
  if (!payload.model) throw new Error('A video model must be selected.');
  const catalogEntry = runtimeConfig.baseUrl.includes('api.bltcy.ai')
    ? await getBltcyCatalogEntry(payload.model)
    : null;
  const taskCapability = catalogEntry?.taskCapabilities?.[payload.type] || catalogEntry?.capabilities || {};
  const modelId = String(payload.model || '').trim().toLowerCase();
  const isKlingVideo = /^kling-video/.test(modelId);
  const sizeField = String(taskCapability.sizeField || 'size');
  const resolutionValue = String(payload.size || payload.resolution || '').trim();
  const imageSizeValue = String(payload.image_size || '').trim();

  const buildInputReference = (sourceImage, referenceImages, format) => {
    const items = []
      .concat(sourceImage ? [sourceImage] : [])
      .concat(Array.isArray(referenceImages) ? referenceImages : [])
      .filter(Boolean);
    if (!items.length) return undefined;
    if (format === 'string') return taskCapability.supportsMultipleReferenceImages ? items : items[0];
    return taskCapability.supportsMultipleReferenceImages
      ? items.map((item) => ({ image_url: item }))
      : { image_url: items[0] };
  };

  const body = {
    model: payload.model,
    prompt: payload.prompt || ''
  };
  let requestPath = runtimeConfig.videoCreatePath;
  let providerMeta = null;
  let createTimeoutSeconds = 90;
  const defaultResolutionValue = String(taskCapability.defaultResolution || '').trim();
  const defaultImageSizeValue = String(taskCapability.defaultImageSize || '').trim();
  const supportedResolutionValues = Array.isArray(taskCapability.resolutionPresets)
    ? taskCapability.resolutionPresets.map((item) => String(item || '').trim()).filter(Boolean)
    : [];
  const supportedImageSizeValues = Array.isArray(taskCapability.imageSizeOptions)
    ? taskCapability.imageSizeOptions.map((item) => String(item || '').trim()).filter(Boolean)
    : [];
  const hasResolutionCapability = supportedResolutionValues.length > 0 || defaultResolutionValue;
  const hasImageSizeCapability = supportedImageSizeValues.length > 0 || defaultImageSizeValue;
  const hasExplicitSizeCapability = Boolean(hasResolutionCapability || hasImageSizeCapability);
  const normalizedImageSizeValue = imageSizeValue || (/^\dK$/i.test(resolutionValue) ? resolutionValue.toUpperCase() : '');

  if (hasExplicitSizeCapability && sizeField === 'image_size') {
    if (normalizedImageSizeValue) body.image_size = normalizedImageSizeValue;
    else if (defaultImageSizeValue) body.image_size = defaultImageSizeValue;
  } else if (hasExplicitSizeCapability) {
    if (resolutionValue) body.size = resolutionValue;
    else if (defaultResolutionValue) body.size = defaultResolutionValue;
  }

  if (!body.size && !body.image_size) {
    if (hasImageSizeCapability && defaultImageSizeValue) body.image_size = defaultImageSizeValue;
    else if (hasResolutionCapability && defaultResolutionValue) body.size = defaultResolutionValue;
  }

  if (payload.aspect_ratio && taskCapability.supportsAspectRatio !== false) body.aspect_ratio = payload.aspect_ratio;
  const durationOptions = Array.isArray(taskCapability.durationOptions) ? taskCapability.durationOptions : [];
  const hasExplicitDurationCapability = taskCapability.supportsDuration !== false
    && (
      durationOptions.length > 0
      || Number.isFinite(Number(taskCapability.minDuration))
      || Number.isFinite(Number(taskCapability.maxDuration))
    );
  const requestedSeconds = payload.seconds ?? payload.duration;
  if (hasExplicitDurationCapability && requestedSeconds !== undefined && requestedSeconds !== null && requestedSeconds !== '') {
    body.seconds = String(requestedSeconds);
  }
  if (payload.seed !== undefined) body.seed = payload.seed;
  if (payload.negative_prompt && taskCapability.supportsNegativePrompt !== false) body.negative_prompt = payload.negative_prompt;
  const sourceImage = payload.source_image_data_url || payload.source_image_url;
  const referenceImages = []
    .concat(payload.reference_image_data_url || payload.reference_image_url || [])
    .concat(Array.isArray(payload.reference_image_data_urls) ? payload.reference_image_data_urls : [])
    .concat(Array.isArray(payload.reference_image_urls) ? payload.reference_image_urls : [])
    .map((item) => String(item || '').trim())
    .filter(Boolean);
  const endFrameImage = payload.end_frame_image_data_url || payload.end_frame_image_url;
  const primaryImage = sourceImage || referenceImages[0] || '';
  const shouldUseImagesArray = payload.type === 'image_to_video' && Boolean(primaryImage);
  const modelRequestFormat = taskCapability.requestFormat || catalogEntry?.capabilities?.requestFormat || '';
  const modelInputReferenceFormat = taskCapability.inputReferenceFormat || catalogEntry?.capabilities?.inputReferenceFormat || '';
  const shouldUseMultipart = (modelRequestFormat || runtimeConfig.videoRequestFormat) === 'multipart';
  const shouldUploadReferenceAsField = shouldUseMultipart && taskCapability.supportsReferenceImage !== false && (sourceImage || referenceImages.length > 0);
  const initialInputReferenceFormat = modelInputReferenceFormat || runtimeConfig.inputReferenceFormat;
  const alternateInputReferenceFormat = initialInputReferenceFormat === 'string' ? 'object' : 'string';
  const initialInputReference = buildInputReference(sourceImage, referenceImages, initialInputReferenceFormat);
  if (shouldUseImagesArray) {
    body.images = [primaryImage];
    if (taskCapability.supportsEndFrame === true && endFrameImage) {
      body.images.push(endFrameImage);
    }
  } else if (taskCapability.supportsReferenceImage !== false && initialInputReference !== undefined) {
    body.input_reference = shouldUploadReferenceAsField
      ? (taskCapability.supportsMultipleReferenceImages ? [sourceImage, ...referenceImages].filter(Boolean) : (sourceImage || referenceImages[0]))
      : initialInputReference;
  }
  if (!shouldUseImagesArray && taskCapability.supportsEndFrame !== false && endFrameImage) {
    body.end_frame_image = endFrameImage;
  }

  if (payload.provider_mode) body.mode = payload.provider_mode;
  if (payload.cfg_scale !== undefined && payload.cfg_scale !== null && payload.cfg_scale !== '') body.cfg_scale = payload.cfg_scale;
  if (payload.camera_control && payload.camera_control.type) {
    body.camera_control = payload.camera_control;
  }
  if (payload.shot_type) {
    body.shot_type = payload.shot_type;
  }
  if (isKlingVideo && runtimeConfig.providerCapabilities?.supportsNativeKlingVideoRoutes) {
    body.model_name = resolveKlingModelName(payload.model);
    delete body.model;
    delete body.size;
    delete body.image_size;
    delete body.seconds;
    createTimeoutSeconds = payload.type === 'image_to_video' ? 240 : 180;
    if (requestedSeconds !== undefined && requestedSeconds !== null && requestedSeconds !== '') body.duration = String(requestedSeconds);
    if (payload.type === 'text_to_video') {
      requestPath = '/kling/v1/videos/text2video';
      if (runtimeConfig.providerCapabilities?.supportsKlingOmniVideo && Array.isArray(payload.element_list) && payload.element_list.length) {
        requestPath = '/kling/v1/videos/omni-video';
        body.element_list = payload.element_list;
      }
      if (runtimeConfig.providerCapabilities?.supportsKlingOmniVideo && Array.isArray(payload.omni_image_urls) && payload.omni_image_urls.length) {
        requestPath = '/kling/v1/videos/omni-video';
        body.image_list = payload.omni_image_urls.map((item) => normalizeKlingFileValue(item)).filter(Boolean);
      }
      if (runtimeConfig.providerCapabilities?.supportsKlingOmniVideo && Array.isArray(payload.omni_video_urls) && payload.omni_video_urls.length) {
        requestPath = '/kling/v1/videos/omni-video';
        body.video_list = payload.omni_video_urls;
      }
    } else if (payload.type === 'image_to_video') {
      const allImages = []
        .concat(sourceImage ? [sourceImage] : [])
        .concat(referenceImages)
        .map((item) => normalizeKlingFileValue(item))
        .filter(Boolean);
      if (runtimeConfig.providerCapabilities?.supportsKlingMultiImageToVideo && allImages.length > 1) {
        requestPath = '/kling/v1/videos/multi-image2video';
        body.image_list = allImages;
      } else if (allImages[0]) {
        requestPath = '/kling/v1/videos/image2video';
        body.image = allImages[0];
      }
      if (endFrameImage) body.image_tail = normalizeKlingFileValue(endFrameImage);
      delete body.images;
      delete body.input_reference;
      delete body.end_frame_image;
    }
    providerMeta = {
      retrievePathTemplate: `${requestPath}/{id}`
    };
  }

  const requestWithFormat = (format) => (
    (async () => {
      try {
        return format === 'multipart'
          ? await multipartRequest(requestPath, body, { maxTime: createTimeoutSeconds })
          : await apiRequest(requestPath, { method: 'POST', body, maxTime: createTimeoutSeconds });
      } catch (error) {
        if (!error.requestSummary) error.requestSummary = summarizeVideoRequest(body, format);
        throw error;
      }
    })()
  );

  try {
    return normalizeProviderVideoTaskResponse(await requestWithFormat(shouldUseMultipart ? 'multipart' : 'json'), providerMeta);
  } catch (error) {
    const errorText = JSON.stringify({
      message: error.message || '',
      providerCode: error.providerCode || '',
      details: error.payload || null
    });
    const shouldRetryMultipart = error.code === 'OPENAI_HTTP_ERROR'
      && (
        errorText.includes('Unsupported content type: application/json')
        || errorText.includes('failed to parse multipart form')
        || error.providerCode === 'build_request_failed'
      );
    const shouldRetryInputReference = error.code === 'OPENAI_HTTP_ERROR'
      && (sourceImage || referenceImages.length > 0)
      && errorText.includes('input_reference')
      && (
        errorText.includes('expected an object')
        || errorText.includes('got a string')
        || errorText.includes('expected a string')
        || errorText.includes('cannot unmarshal object')
        || error.providerCode === 'invalid_json'
      );

    if (shouldRetryMultipart) {
      return normalizeProviderVideoTaskResponse(await requestWithFormat('multipart'), providerMeta);
    }
    if (!shouldRetryInputReference) throw error;

    body.input_reference = buildInputReference(sourceImage, referenceImages, alternateInputReferenceFormat);
    try {
      return normalizeProviderVideoTaskResponse(await requestWithFormat(runtimeConfig.videoRequestFormat === 'multipart' ? 'multipart' : 'json'), providerMeta);
    } catch (retryError) {
      const retryText = JSON.stringify({
        message: retryError.message || '',
        providerCode: retryError.providerCode || '',
        details: retryError.payload || null
      });
      const shouldRetryMultipartAfterReferenceRetry = retryError.code === 'OPENAI_HTTP_ERROR'
        && (
          retryText.includes('Unsupported content type: application/json')
          || retryText.includes('failed to parse multipart form')
          || retryError.providerCode === 'build_request_failed'
        );

      if (!shouldRetryMultipartAfterReferenceRetry) throw retryError;
      return normalizeProviderVideoTaskResponse(await requestWithFormat('multipart'), providerMeta);
    }
  }
}

export async function getVideoTask(videoId, options = {}) {
  const template = options.retrievePathTemplate || runtimeConfig.videoRetrievePathTemplate;
  ensureFeatureEnabled('videoEnabled', 'Video generation', template);
  const data = await apiRequest(buildPath(template, videoId), { maxTime: 40 });
  return normalizeProviderVideoTaskResponse(data, options.providerMeta || null);
}

export async function cancelVideoTask(videoId) {
  ensureFeatureEnabled('videoEnabled', 'Video generation', runtimeConfig.videoCancelPathTemplate);
  return apiRequest(buildPath(runtimeConfig.videoCancelPathTemplate, videoId), { method: 'POST', maxTime: 20 });
}

export async function createImage(payload) {
  const requestPath = payload.type === 'image_edit' ? runtimeConfig.imageEditPath : runtimeConfig.imageGeneratePath;
  ensureFeatureEnabled('imageEnabled', 'Image generation', requestPath);
  if (!payload.model) throw new Error('An image model must be selected.');
  const catalogEntry = runtimeConfig.baseUrl.includes('api.bltcy.ai')
    ? await getBltcyCatalogEntry(payload.model)
    : null;
  const taskCapability = catalogEntry?.taskCapabilities?.[payload.type] || catalogEntry?.capabilities || {};
  const sizeField = String(taskCapability.sizeField || 'size');
  const resolutionValue = String(payload.size || payload.resolution || '').trim();
  const imageSizeValue = String(payload.image_size || payload.imageSize || '').trim();

  const buildInputReference = (referenceImages, format) => {
    const items = (Array.isArray(referenceImages) ? referenceImages : []).filter(Boolean);
    if (!items.length) return undefined;
    if (format === 'string') return taskCapability.supportsMultipleReferenceImages ? items : items[0];
    return taskCapability.supportsMultipleReferenceImages
      ? items.map((item) => ({ image_url: item }))
      : { image_url: items[0] };
  };

  const body = {
    model: payload.model,
    prompt: payload.prompt || ''
  };
  if (sizeField === 'image_size') {
    body.image_size = imageSizeValue || (/^\dK$/i.test(resolutionValue) ? resolutionValue.toUpperCase() : '') || '1K';
    if (taskCapability.allowCustomResolution !== false && resolutionValue && !/^\dK$/i.test(resolutionValue)) body.size = resolutionValue;
  } else {
    body.size = resolutionValue || DEFAULT_GENERATION_PARAMS.imageSize;
    if (imageSizeValue) body.image_size = imageSizeValue;
  }
  if (taskCapability.supportsImageCount !== false && payload.n !== undefined && payload.n !== null && payload.n !== '') body.n = Number(payload.n);
  if (payload.quality) body.quality = payload.quality;
  if (payload.aspect_ratio && taskCapability.supportsAspectRatio !== false) body.aspect_ratio = payload.aspect_ratio;
  if (payload.output_format) body.output_format = payload.output_format;
  if (payload.source_image_data_url || payload.source_image_url) {
    body.image = payload.source_image_data_url || payload.source_image_url;
  }
  const referenceImages = []
    .concat(payload.reference_image_data_url || payload.reference_image_url || [])
    .concat(Array.isArray(payload.reference_image_data_urls) ? payload.reference_image_data_urls : [])
    .concat(Array.isArray(payload.reference_image_urls) ? payload.reference_image_urls : [])
    .map((item) => String(item || '').trim())
    .filter(Boolean);
  const initialInputReferenceFormat = taskCapability.inputReferenceFormat || catalogEntry?.capabilities?.inputReferenceFormat || runtimeConfig.inputReferenceFormat;
  const alternateInputReferenceFormat = initialInputReferenceFormat === 'string' ? 'object' : 'string';
  const initialInputReference = buildInputReference(referenceImages, initialInputReferenceFormat);
  if (taskCapability.supportsReferenceImage !== false && referenceImages.length > 0) {
    body.reference_image = taskCapability.supportsMultipleReferenceImages ? referenceImages : referenceImages[0];
    body.input_reference = initialInputReference;
  }

  let data;
  try {
    data = await apiRequest(requestPath, { method: 'POST', body, maxTime: 180 });
  } catch (error) {
    if (!error.requestSummary) error.requestSummary = summarizeImageRequest(body, requestPath);
    const errorText = JSON.stringify({
      message: error.message || '',
      providerCode: error.providerCode || '',
      details: error.payload || null
    });
    const shouldRetryInputReference = error.code === 'OPENAI_HTTP_ERROR'
      && referenceImages.length > 0
      && errorText.includes('input_reference')
      && (
        errorText.includes('expected an object')
        || errorText.includes('got a string')
        || errorText.includes('expected a string')
        || errorText.includes('cannot unmarshal object')
        || error.providerCode === 'invalid_json'
        || error.providerCode === 'invalid_type'
      );

    if (!shouldRetryInputReference || shouldUseImagesArray) throw error;

    body.input_reference = buildInputReference(referenceImages, alternateInputReferenceFormat);
    data = await apiRequest(requestPath, { method: 'POST', body, maxTime: 180 });
  }

  return {
    id: data.id || data.created || data.request_id || `img-${Date.now()}`,
    status: 'completed',
    output: {
      data: Array.isArray(data?.data) ? data.data : [],
      image_url: data?.output?.image_url || data?.image_url || data?.data?.[0]?.url || ''
    }
  };
}

export async function getVideoContent(videoId) {
  ensureFeatureEnabled('videoEnabled', 'Video generation', runtimeConfig.videoContentPathTemplate);
  const path = buildPath(runtimeConfig.videoContentPathTemplate, videoId);
  const url = path.startsWith('http://') || path.startsWith('https://') ? path : `${runtimeConfig.baseUrl}${path}`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 60 * 1000);

  try {
    const response = await withProxyEnv(() => fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${runtimeConfig.apiKey}`
      },
      signal: controller.signal
    }));

    if (!response.ok) {
      const data = await parseJsonResponse(response);
      throw makeHttpError(response.status, data);
    }

    return {
      contentType: response.headers.get('content-type') || 'application/octet-stream',
      buffer: Buffer.from(await response.arrayBuffer())
    };
  } catch (error) {
    if (error.name === 'AbortError') throw makeNetworkError(url, 'Request timed out after 60s');
    if (error.code === 'OPENAI_HTTP_ERROR') throw error;
    throw makeNetworkError(url, error.message);
  } finally {
    clearTimeout(timer);
  }
}

function classifyProbeError(error) {
  if (error.code === 'FEATURE_DISABLED' || error.code === 'ENDPOINT_NOT_CONFIGURED') {
    return { ok: false, reachable: false, generationReady: false, blocker: 'disabled', code: error.code, message: error.message };
  }
  if (error.code === 'UPSTREAM_NETWORK_UNREACHABLE') {
    return { ok: false, reachable: false, generationReady: false, blocker: 'network', code: error.code, message: error.message };
  }
  if (error.code !== 'OPENAI_HTTP_ERROR') {
    return { ok: false, reachable: false, generationReady: false, blocker: 'unknown', code: error.code || 'UPSTREAM_ERROR', message: error.message };
  }

  const providerCode = error.providerCode || error.code;
  const statusCode = error.statusCode || 500;
  if (BILLING_ERROR_CODES.has(providerCode)) return { ok: false, reachable: true, generationReady: false, blocker: 'billing', code: providerCode, statusCode, message: error.message };
  if (AUTH_ERROR_CODES.has(providerCode) || statusCode === 401 || statusCode === 403) return { ok: false, reachable: true, generationReady: false, blocker: 'auth', code: providerCode, statusCode, message: error.message };
  if (statusCode === 404) return { ok: false, reachable: false, generationReady: false, blocker: 'endpoint_mismatch', code: providerCode || 'ENDPOINT_MISMATCH', statusCode, message: error.message };
  if (statusCode === 429) return { ok: false, reachable: true, generationReady: false, blocker: 'rate_limit', code: providerCode, statusCode, message: error.message };
  return { ok: true, reachable: true, generationReady: true, blocker: null, code: providerCode, statusCode, message: error.message };
}

async function probeImageEndpoint() {
  try {
    ensureFeatureEnabled('imageEnabled', 'Image generation', runtimeConfig.imageGeneratePath);
    await apiRequest(runtimeConfig.imageGeneratePath, {
      method: 'POST',
      body: { model: '__probe_invalid_model__', prompt: 'connectivity probe', size: '1024x1024' },
      maxTime: 30
    });
    return { ok: true, reachable: true, generationReady: true, blocker: null, code: 'UNEXPECTED_SUCCESS', message: 'Image endpoint responded.' };
  } catch (error) {
    return classifyProbeError(error);
  }
}

async function probeVideoEndpoint() {
  try {
    ensureFeatureEnabled('videoEnabled', 'Video generation', runtimeConfig.videoCreatePath);
    const body = { model: '__probe_invalid_model__', prompt: 'connectivity probe', seconds: '4', size: '1280x720' };
    if (runtimeConfig.videoRequestFormat === 'multipart') {
      await multipartRequest(runtimeConfig.videoCreatePath, body, { maxTime: 30 });
    } else {
      await apiRequest(runtimeConfig.videoCreatePath, { method: 'POST', body, maxTime: 30 });
    }
    return { ok: true, reachable: true, generationReady: true, blocker: null, code: 'UNEXPECTED_SUCCESS', message: 'Video endpoint responded.' };
  } catch (error) {
    return classifyProbeError(error);
  }
}

function buildConnectivitySummary({ modelsCount, imageProbe, videoProbe }) {
  if (!modelsCount) return 'Connected upstream, but no models were returned.';
  const blockers = [imageProbe, videoProbe].map((item) => item.blocker).filter(Boolean);
  if (blockers.includes('billing')) return 'Connected upstream, but current account or relay has no available quota.';
  if (blockers.includes('auth')) return 'Connected upstream, but the API key or permissions are invalid.';
  if (blockers.includes('endpoint_mismatch')) return 'Model listing works, but image or video endpoint paths do not match this provider.';
  if (blockers.includes('disabled')) return 'Some capabilities are disabled in the current provider profile.';
  if (blockers.includes('network')) return 'Model listing works, but image or video endpoints are not reachable.';
  if (blockers.includes('rate_limit')) return 'Upstream is reachable, but the current requests are being rate limited.';
  return `Connection looks healthy. Visible models: ${modelsCount}. Image and video endpoints both responded.`;
}

export async function checkConnectivity() {
  ensureConfigured();
  const mode = runtimeConfig.proxyUrl ? 'proxy' : 'direct';
  const via = runtimeConfig.proxyUrl || 'direct';

  const modelListing = await listModels(undefined, { includeCatalog: false });
  const imageProbe = await probeImageEndpoint();
  const videoProbe = await probeVideoEndpoint();

  return {
    ok: Boolean(modelListing.total),
    reachable: Boolean(modelListing.total),
    generationReady: imageProbe.generationReady && (!runtimeConfig.videoEnabled || videoProbe.generationReady),
    provider: runtimeConfig.providerLabel,
    mode,
    via,
    modelsCount: modelListing.total,
    warnings: getProxyWarnings(),
    endpointStatus: {
      images: imageProbe,
      videos: videoProbe
    },
    message: buildConnectivitySummary({
      modelsCount: modelListing.total,
      imageProbe,
      videoProbe
    })
  };
}
