import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const BLTCY_PRICE_ENDPOINT = 'https://api.bltcy.ai/api/models/price?version=v1';
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;
const CACHE_DIR = resolve(process.cwd(), '.sora2studio', 'catalog');
const CACHE_FILE = join(CACHE_DIR, 'bltcy-apifox-catalog.json');
const DOC_CACHE_DIR = join(CACHE_DIR, 'docs');
const DOC_FETCH_CONCURRENCY = 8;

let catalogCache = {
  fetchedAt: 0,
  data: null
};

function normalizeModelIdSet(modelIds) {
  if (!Array.isArray(modelIds)) return null;
  const values = modelIds.map((item) => normalizeKey(item)).filter(Boolean);
  return values.length ? new Set(values) : null;
}

function hasCatalogCoverage(catalog, targetIds) {
  if (!catalog || !targetIds) return Boolean(catalog);
  for (const id of targetIds) {
    if (!catalog.models.has(id)) return false;
  }
  return true;
}

function normalizeKey(value) {
  return String(value || '').trim().toLowerCase();
}

function positiveNumberOrNull(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) && numeric > 0 ? numeric : null;
}

function pickPrimaryPrice(groupPrice = {}) {
  if (!groupPrice || typeof groupPrice !== 'object') return null;
  return groupPrice.default
    || groupPrice.origin
    || Object.values(groupPrice)[0]
    || null;
}

function inferPriceLabel(model, entry) {
  if (!entry) return '';
  const amount = Number(entry.price);
  if (!Number.isFinite(amount)) return '';
  if (entry.units === 'seconds') return `$${amount.toFixed(2)}/s`;
  const tags = String(model.tags || '');
  if (tags.includes('视频')) return `$${amount.toFixed(2)}/run`;
  if (tags.includes('绘图') || tags.includes('图像编辑')) return `$${amount.toFixed(2)}/image`;
  return `$${amount.toFixed(2)}`;
}

async function ensureCacheDir() {
  await mkdir(CACHE_DIR, { recursive: true });
  await mkdir(DOC_CACHE_DIR, { recursive: true });
}

function docFileName(url) {
  return String(url || '')
    .replace(/^https?:\/\//i, '')
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase() || 'doc';
}

async function loadDiskCache() {
  if (!existsSync(CACHE_FILE)) return null;
  try {
    const raw = await readFile(CACHE_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function saveDiskCache(data) {
  await ensureCacheDir();
  await writeFile(CACHE_FILE, JSON.stringify(data, null, 2), 'utf8');
  const docs = data?.docs || {};
  await Promise.all(Object.entries(docs).map(([url, entry]) => {
    const filePath = join(DOC_CACHE_DIR, `${docFileName(url)}.json`);
    return writeFile(filePath, JSON.stringify({ url, ...entry }, null, 2), 'utf8');
  }));
}

function decodeHtml(text) {
  return String(text || '')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ');
}

function stripHtml(html) {
  return decodeHtml(
    String(html || '')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
  ).trim();
}

function extractRelevantSection(text, titleHint = '') {
  let source = String(text || '');
  const hint = String(titleHint || '').trim();
  if (hint) {
    const idx = source.indexOf(hint);
    if (idx >= 0) source = source.slice(idx);
  }
  const match = source.match(/(?:请求参数|Body 参数)([\s\S]*?)(?:返回响应|修改于|上一页|下一页|Built with)/i);
  return (match?.[1] || source).trim();
}

function extractTitle(html, fallback = '') {
  const match = String(html || '').match(/<title>([^<]+)<\/title>/i);
  return decodeHtml(match?.[1] || fallback).trim();
}

function taskTypeFromApiName(name) {
  const text = String(name || '').toLowerCase();
  if (text.includes('文生图')) return 'text_to_image';
  if (text.includes('图像编辑') || text.includes('图生图') || text.includes('编辑')) return 'image_edit';
  if (text.includes('首尾帧图生视频')) return 'image_to_video';
  if (text.includes('图生视频')) return 'image_to_video';
  if (text.includes('文生视频')) return 'text_to_video';
  return null;
}

function parseAspectRatioOptions(input) {
  const source = `${input || ''}`;
  const ratios = source.match(/\b\d{1,2}:\d{1,2}\b/g) || [];
  return [...new Set(ratios.filter((item) => {
    const [w, h] = String(item).split(':').map((part) => Number(part));
    return Number.isFinite(w) && Number.isFinite(h) && w > 0 && h > 0 && w <= 32 && h <= 32;
  }))];
}

function parseDurationOptions(input) {
  const source = `${input || ''}`;
  const exact = source.match(/支持秒数[^0-9]{0,20}([0-9s\s/、,]+)/i);
  const generic = source.match(/(?:duration|时长|生成时长)[^0-9]{0,40}([0-9s\s/、,]+)/i);
  const pool = `${exact?.[1] || ''} ${generic?.[1] || ''} ${(source.match(/\b\d{1,2}s\b/g) || []).join(' ')}`;
  const values = pool
    .match(/\b\d{1,2}\b/g) || [];
  return [...new Set(values.map((item) => Number(item)).filter((item) => Number.isFinite(item) && item > 0))].sort((a, b) => a - b);
}

function parseResolutionOptions(input) {
  const source = `${input || ''}`;
  const values = source.match(/\b\d{3,5}x\d{3,5}\b/g) || [];
  return [...new Set(values)];
}

function uniqueStrings(values) {
  return [...new Set((values || []).map((item) => String(item || '').trim()).filter(Boolean))];
}

function uniqueNumbers(values) {
  return [...new Set((values || []).map((item) => Number(item)).filter((item) => Number.isFinite(item) && item > 0))].sort((a, b) => a - b);
}

function parseImageSizeOptions(input) {
  const source = String(input || '').toUpperCase();
  const options = [];
  if (/\b512(?:PX)?\b/.test(source)) options.push('512px');
  if (/\b1K\b/.test(source)) options.push('1K');
  if (/\b2K\b/.test(source) || /\bHD\b/.test(source)) options.push('2K');
  if (/\b4K\b/.test(source)) options.push('4K');
  return uniqueStrings(options);
}

function inferAspectRatioOptionsFromId(modelId) {
  const id = String(modelId || '');
  return uniqueStrings((id.match(/(?:\d{1,2}:\d{1,2})/g) || []));
}

function inferDurationOptionsFromId(modelId) {
  const id = String(modelId || '').toLowerCase();
  const hits = [...id.matchAll(/(?:^|[-_])(\d{1,2})s(?:$|[-_])/g)].map((item) => Number(item[1]));
  return uniqueNumbers(hits);
}

function resolutionFromRatioAndHeight(ratio, height) {
  const h = Number(height);
  if (!Number.isFinite(h) || h <= 0) return null;
  const mapping = {
    '21:9': `${Math.round((21 / 9) * h)}x${h}`,
    '16:9': `${Math.round((16 / 9) * h)}x${h}`,
    '9:16': `${h}x${Math.round((16 / 9) * h)}`,
    '4:3': `${Math.round((4 / 3) * h)}x${h}`,
    '3:4': `${h}x${Math.round((4 / 3) * h)}`,
    '1:1': `${h}x${h}`
  };
  return mapping[ratio] || null;
}

function inferResolutionPresetsFromId(modelId) {
  const id = String(modelId || '').toLowerCase();
  const ratios = inferAspectRatioOptionsFromId(modelId);
  const heights = [...id.matchAll(/(?:^|[-_])(\d{3,4})p(?:$|[-_])/g)].map((item) => Number(item[1]));
  const values = [];
  for (const ratio of ratios) {
    for (const height of heights) {
      const derived = resolutionFromRatioAndHeight(ratio, height);
      if (derived) values.push(derived);
    }
  }
  return uniqueStrings(values);
}

function inferTasksFromModelIdentity(modelLike) {
  const id = `${modelLike?.key || modelLike?.name || modelLike?.id || ''}`.toLowerCase();
  const text = `${id} ${modelLike?.desc || ''} ${modelLike?.tags || ''}`.toLowerCase();
  if (id.includes('sora_image')) return ['text_to_image', 'image_edit'];
  const hasImageSignals = /(gpt-image|dall-e|banana|seedream|recraft|ideogram|qwen|绘图|图像编辑|图片编辑|文生图)/.test(text);
  const hasVideoSignals = /(gpt-video|seedance|kling|veo|wan|pixverse|vidu|hailuo|视频|文生视频|图生视频)/.test(text);
  const tasks = [];
  if (hasVideoSignals || (/(sora|veo|gpt-video|kling|seedance|wan|pixverse|vidu|hailuo)/.test(id) && !hasImageSignals)) {
    tasks.push('text_to_video', 'image_to_video');
  }
  if (hasImageSignals || (/(image)/.test(id) && !hasVideoSignals)) {
    tasks.push('text_to_image', 'image_edit');
  }
  return uniqueStrings(tasks);
}

function inferTasksFromModelIdentityPrecise(modelLike) {
  const id = `${modelLike?.key || modelLike?.name || modelLike?.id || ''}`.toLowerCase();
  const text = `${id} ${modelLike?.desc || ''} ${modelLike?.tags || ''}`.toLowerCase();
  if (id.includes('sora_image')) return ['text_to_image', 'image_edit'];

  const explicitImageOnly = /(gpt-image|dall-e|banana|seedream|recraft|ideogram|qwen-image|midjourney|mj|(^|[-_])image($|[-_])|image2image|\bi2i\b|inpaint|outpaint|edit)/.test(id);
  const explicitImageToVideo = /(image[_-]?to[_-]?video|image2video|\bi2v\b|start.?frame|end.?frame)/.test(text);
  const explicitTextToVideo = /(text[_-]?to[_-]?video|text2video|\bt2v\b)/.test(text);
  const generalVideoFamily = /(sora|veo|gpt-video|seedance|kling-video|wan|pixverse|vidu|hailuo|(^|[-_])video($|[-_]))/.test(id);
  const hasImageSignals = explicitImageOnly || /缁樺浘|鍥惧儚缂栬緫|鍥剧墖缂栬緫|鏂囩敓鍥?/.test(text);
  const hasVideoSignals = explicitImageToVideo || explicitTextToVideo || generalVideoFamily || /瑙嗛|鏂囩敓瑙嗛|鍥剧敓瑙嗛/.test(text);
  const tasks = [];

  if (explicitTextToVideo && !explicitImageToVideo) {
    tasks.push('text_to_video');
  } else if (explicitImageToVideo && !explicitTextToVideo) {
    tasks.push('image_to_video');
  } else if (hasVideoSignals || (generalVideoFamily && !explicitImageOnly)) {
    tasks.push('text_to_video', 'image_to_video');
  }

  if (hasImageSignals || (/(image)/.test(id) && !hasVideoSignals)) {
    tasks.push('text_to_image', 'image_edit');
  }

  return uniqueStrings(tasks);
}

function mergeTasksWithIdentity(existingTasks = [], inferredTasks = []) {
  const normalizedExisting = Array.isArray(existingTasks) ? existingTasks.filter(Boolean) : [];
  const normalizedInferred = Array.isArray(inferredTasks) ? inferredTasks.filter(Boolean) : [];
  if (!normalizedInferred.length) return uniqueStrings(normalizedExisting);

  const taskKind = (task) => (String(task).includes('video') ? 'video' : 'image');
  const inferredKinds = new Set(normalizedInferred.map((task) => taskKind(task)));
  if (inferredKinds.size === 1) {
    const onlyKind = [...inferredKinds][0];
    const compatibleExisting = normalizedExisting.filter((task) => taskKind(task) === onlyKind);
    return uniqueStrings([...compatibleExisting, ...normalizedInferred]);
  }

  return uniqueStrings([...normalizedExisting, ...normalizedInferred]);
}

function inferTaskCapabilityFallback(model, apiRecords, taskType) {
  const modelId = String(model?.key || model?.name || '').trim();
  const id = modelId.toLowerCase();
  const provider = String(model?.provider || '').trim();
  const desc = String(model?.desc || '');
  const tags = String(model?.tags || '');
  const apiText = (apiRecords || []).map((item) => `${item?.name || ''} ${item?.url || ''}`).join(' ');
  const text = `${modelId} ${provider} ${desc} ${tags} ${apiText}`;
  const lower = text.toLowerCase();
  const isImageTask = taskType === 'text_to_image' || taskType === 'image_edit';
  const isVideoTask = taskType === 'text_to_video' || taskType === 'image_to_video';

  const aspectRatioOptions = uniqueStrings([
    ...parseAspectRatioOptions(text),
    ...inferAspectRatioOptionsFromId(modelId),
    ...(isVideoTask && /^veo3\.1/.test(id) ? ['16:9', '9:16', '1:1', '4:3', '3:4', '1:4', '4:1', '1:8', '8:1'] : []),
    ...(isVideoTask && /(sora|veo|kling|seedance|wan|vidu|pixverse|hailuo|video)/.test(id) ? ['16:9', '9:16', '1:1'] : []),
    ...(isImageTask && (/(aspect_ratio|比例|ratio)/.test(lower) || /(banana|gpt-image|dall-e|seedream)/.test(id)) ? ['1:1', '16:9', '9:16', '4:3', '3:4'] : [])
  ]);
  const durationOptions = uniqueNumbers([
    ...parseDurationOptions(text),
    ...inferDurationOptionsFromId(modelId)
  ]);
  const resolutionPresets = uniqueStrings([
    ...parseResolutionOptions(text),
    ...inferResolutionPresetsFromId(modelId)
  ]);
  const imageSizeOptions = uniqueStrings([
    ...parseImageSizeOptions(text),
    ...(id.includes('nano-banana-2-4k') ? ['1K', '2K', '4K'] : []),
    ...(id.includes('nano-banana-2-2k') || id.includes('nano-banana-hd') ? ['1K', '2K'] : []),
    ...(id.includes('nano-banana-2') ? ['1K', '2K', '4K'] : []),
    ...(id.includes('4k') && isImageTask ? ['4K'] : []),
    ...(id.includes('2k') && isImageTask ? ['2K'] : [])
  ]);

  const supportsReferenceImage = (() => {
    if (taskType === 'image_edit') return /reference|参考|多图|multi-image|multi image|图像编辑|image edit|banana/.test(lower);
    if (taskType === 'text_to_image') return /reference|参考|多图|multi-image|multi image|banana/.test(lower);
    if (taskType === 'image_to_video') return /reference|input_reference|reference image/.test(lower);
    if (taskType === 'text_to_video') return /reference|input_reference|component|reference image/.test(lower);
    return false;
  })();
  const supportsMultipleReferenceImages = supportsReferenceImage && (
    /1\s*-\s*4\s*张|多图|multi-image|multi image|multiple reference|multiple images|1-4/.test(lower)
    || /banana/.test(id)
  );
  const maxReferenceImages = supportsMultipleReferenceImages
    ? (/1\s*-\s*4\s*张|1-4/.test(lower) ? 4 : null)
    : 1;

  const supportsSourceImage = taskType === 'image_edit' || taskType === 'image_to_video';
  const supportsStoryboardPrompt = taskType === 'text_to_video'
    && /^sora-2$/i.test(modelId);
  const supportsIntelligentStoryboard = taskType === 'text_to_video'
    && (
      /\bshot_type\b|\bintelligence\b|智能分镜|多镜头/.test(lower)
      || /(^|[-_])omni($|[-_])/.test(id)
      || /^kling-video-v3/i.test(modelId)
    );
  const supportsEndFrame = taskType === 'image_to_video'
    && /end.?frame|尾帧|首尾帧/.test(lower);
  const supportsStoryboard = taskType === 'text_to_video'
    && /storyboard|故事板|分镜/.test(lower);
  const supportsImageCount = taskType === 'text_to_image'
    && (/\bn\b|生成数量|图片数量|一次生成|multiple outputs|multi output/.test(lower) || /^gpt-image/.test(id) || /^dall-e/.test(id));
  const maxImageCount = supportsImageCount ? (/^gpt-image/.test(id) ? 10 : 4) : null;
  const qualityOptions = uniqueStrings([
    ...(isImageTask && /^gpt-image/.test(id) ? ['low', 'medium', 'high', 'hd'] : []),
    ...(isImageTask && /hd|高清/.test(lower) ? ['hd'] : [])
  ]);
  const explicitDurationSignal = /\bduration\b|时长|秒数|seconds?/.test(lower);
  const supportsDuration = isVideoTask && (
    durationOptions.length > 0
    || explicitDurationSignal
    || /^sora/.test(id)
    || /seedance/.test(id)
  );
  const supportsAspectRatio = aspectRatioOptions.length > 0;
  const videoTierOnly = isVideoTask && imageSizeOptions.length > 0 && resolutionPresets.length === 0;
  const sizeField = (imageSizeOptions.length > 0 || /image_size/.test(lower)) ? 'image_size' : 'size';
  const defaultImageSize = imageSizeOptions.find((item) => id.includes(item.toLowerCase())) || imageSizeOptions[0] || '';
  const defaultResolution = resolutionPresets[0] || '';
  const defaultAspectRatio = aspectRatioOptions[0] || '';
  const roleCaps = deriveTaskRoleCapabilityFields(taskType, {
    supportsSourceImage,
    supportsReferenceImage,
    supportsStoryboardPrompt,
    supportsIntelligentStoryboard,
    supportsEndFrame,
    supportsElements: false,
    supportsOmniImageList: false,
    supportsOmniVideoList: false
  });

  return {
    taskType,
    title: modelId,
    endpoint: '',
    method: 'POST',
    docsUrl: '',
    requestFormat: 'json',
    supportsDuration,
    durationOptions,
    minDuration: durationOptions[0] ?? null,
    maxDuration: durationOptions[durationOptions.length - 1] ?? null,
    supportsAspectRatio,
    aspectRatioOptions,
    resolutionOptions: resolutionPresets,
    resolutionPresets,
    imageSizeOptions,
    sizeField,
    allowCustomResolution: videoTierOnly ? false : sizeField !== 'image_size',
    defaultResolution,
    defaultImageSize,
    defaultAspectRatio,
    supportsNegativePrompt: isVideoTask || /negative_prompt|反向提示/.test(lower),
    supportsCameraControl: isVideoTask && /(camera_control|镜头|motion control|kling)/.test(lower),
    supportsEnhancePrompt: /enhance_prompt|优化提示|prompt optimize/.test(lower),
    supportsMovementAmplitude: /movement_amplitude|运动幅度/.test(lower),
    supportsBgm: /\bbgm\b|背景音乐/.test(lower),
    supportsSourceImage,
    supportsReferenceImage,
    supportsMultipleReferenceImages,
    maxReferenceImages,
    supportsStoryboardPrompt,
    supportsIntelligentStoryboard,
    supportsStoryboard,
    supportsEndFrame,
    ...roleCaps,
    supportsImageCount,
    maxImageCount,
    qualityOptions,
    notes: desc || tags || '',
    rawSignals: {
      inferredFromMetadata: true
    }
  };
}

function deriveTaskRoleCapabilityFields(taskType, capability = {}) {
  const isTextToImage = taskType === 'text_to_image';
  const isImageEdit = taskType === 'image_edit';
  const isTextToVideo = taskType === 'text_to_video';
  const isImageToVideo = taskType === 'image_to_video';

  return {
    supportsPrimaryImageInput: Boolean(
      (isImageEdit && capability.supportsSourceImage)
      || (isImageToVideo && (capability.supportsSourceImage || capability.supportsReferenceImage))
      || (!isTextToImage && !isTextToVideo && capability.supportsSourceImage)
    ),
    supportsImageEditSourceImage: Boolean(isImageEdit && capability.supportsSourceImage),
    supportsImageToVideoFirstFrame: Boolean(isImageToVideo && (capability.supportsSourceImage || capability.supportsReferenceImage)),
    supportsImageToVideoReferenceImages: Boolean(isImageToVideo && capability.supportsReferenceImage),
    supportsImageToVideoEndFrame: Boolean(isImageToVideo && capability.supportsEndFrame),
    supportsTextToImageReferenceImages: Boolean(isTextToImage && capability.supportsReferenceImage),
    supportsTextToVideoReferenceImages: Boolean(isTextToVideo && capability.supportsReferenceImage),
    supportsOmniInputs: Boolean(isTextToVideo && (capability.supportsElements || capability.supportsOmniImageList || capability.supportsOmniVideoList)),
    supportsStructuredVideoMode: Boolean(isTextToVideo && (capability.supportsStoryboardPrompt || capability.supportsIntelligentStoryboard))
  };
}

function hasExplicitEndFrameSignal(apiRecords = [], model = {}) {
  const source = [
    String(model?.key || model?.name || ''),
    String(model?.desc || ''),
    String(model?.tags || ''),
    ...apiRecords.map((item) => `${item?.name || ''} ${item?.url || ''} ${item?.link || ''}`)
  ].join(' ').toLowerCase();
  return /end.?frame|尾帧|首尾帧|kf2v/.test(source);
}

function mergeCapabilityDetail(primary = {}, fallback = {}) {
  const supportedTasks = uniqueStrings([...(fallback.supportedTasks || []), ...(primary.supportedTasks || [])]);
  const durationOptions = uniqueNumbers([...(fallback.durationOptions || []), ...(primary.durationOptions || [])]);
  const aspectRatioOptions = uniqueStrings([...(fallback.aspectRatioOptions || []), ...(primary.aspectRatioOptions || [])]);
  const resolutionPresets = uniqueStrings([
    ...(fallback.resolutionOptions || []),
    ...(fallback.resolutionPresets || []),
    ...(primary.resolutionOptions || []),
    ...(primary.resolutionPresets || [])
  ]);
  const imageSizeOptions = uniqueStrings([...(fallback.imageSizeOptions || []), ...(primary.imageSizeOptions || [])]);
  const qualityOptions = uniqueStrings([...(fallback.qualityOptions || []), ...(primary.qualityOptions || [])]);
  const providerModeOptions = uniqueStrings([...(fallback.providerModeOptions || []), ...(primary.providerModeOptions || [])]);
  const providerModeLabel = String(primary.providerModeLabel || fallback.providerModeLabel || '');
  const supportsDuration = Boolean(primary.supportsDuration || fallback.supportsDuration || durationOptions.length);
  const supportsAspectRatio = Boolean(primary.supportsAspectRatio || fallback.supportsAspectRatio || aspectRatioOptions.length);
  const normalizedSizeField = imageSizeOptions.length > 0
    ? 'image_size'
    : (primary.sizeField || fallback.sizeField || 'size');

  const merged = {
    ...fallback,
    ...primary,
    supportedTasks,
    supportsSourceImage: Boolean(primary.supportsSourceImage || fallback.supportsSourceImage),
    supportsReferenceImage: Boolean(primary.supportsReferenceImage || fallback.supportsReferenceImage),
    supportsMultipleReferenceImages: Boolean(primary.supportsMultipleReferenceImages || fallback.supportsMultipleReferenceImages),
    maxReferenceImages: Math.max(Number(primary.maxReferenceImages || 0), Number(fallback.maxReferenceImages || 0)) || null,
    supportsStoryboardPrompt: Boolean(primary.supportsStoryboardPrompt || fallback.supportsStoryboardPrompt),
    supportsIntelligentStoryboard: Boolean(primary.supportsIntelligentStoryboard || fallback.supportsIntelligentStoryboard),
    supportsStoryboard: Boolean(primary.supportsStoryboard || fallback.supportsStoryboard),
    supportsEndFrame: Boolean(primary.supportsEndFrame || fallback.supportsEndFrame),
    supportsNegativePrompt: Boolean(primary.supportsNegativePrompt || fallback.supportsNegativePrompt),
    supportsProviderMode: Boolean(primary.supportsProviderMode || fallback.supportsProviderMode || providerModeOptions.length),
    providerModeOptions,
    providerModeLabel,
    supportsCfgScale: Boolean(primary.supportsCfgScale || fallback.supportsCfgScale),
    promptMaxLength: positiveNumberOrNull(primary.promptMaxLength) ?? positiveNumberOrNull(fallback.promptMaxLength),
    supportsElements: Boolean(primary.supportsElements || fallback.supportsElements),
    supportsOmniImageList: Boolean(primary.supportsOmniImageList || fallback.supportsOmniImageList),
    supportsOmniVideoList: Boolean(primary.supportsOmniVideoList || fallback.supportsOmniVideoList),
    supportsImageCount: Boolean(primary.supportsImageCount || fallback.supportsImageCount),
    maxImageCount: Math.max(Number(primary.maxImageCount || 0), Number(fallback.maxImageCount || 0)) || null,
    supportsCameraControl: Boolean(primary.supportsCameraControl || fallback.supportsCameraControl),
    supportsDirectionalCameraControls: Boolean(primary.supportsDirectionalCameraControls || fallback.supportsDirectionalCameraControls),
    supportsEnhancePrompt: Boolean(primary.supportsEnhancePrompt || fallback.supportsEnhancePrompt),
    supportsMovementAmplitude: Boolean(primary.supportsMovementAmplitude || fallback.supportsMovementAmplitude),
    supportsBgm: Boolean(primary.supportsBgm || fallback.supportsBgm),
    supportsDuration,
    durationOptions,
    minDuration: durationOptions[0] ?? (Number.isFinite(Number(primary.minDuration)) ? Number(primary.minDuration) : (Number.isFinite(Number(fallback.minDuration)) ? Number(fallback.minDuration) : null)),
    maxDuration: durationOptions[durationOptions.length - 1] ?? (Number.isFinite(Number(primary.maxDuration)) ? Number(primary.maxDuration) : (Number.isFinite(Number(fallback.maxDuration)) ? Number(fallback.maxDuration) : null)),
    supportsAspectRatio,
    aspectRatioOptions,
    resolutionOptions: resolutionPresets,
    resolutionPresets,
    imageSizeOptions,
    sizeField: normalizedSizeField,
    allowCustomResolution: primary.allowCustomResolution ?? fallback.allowCustomResolution ?? true,
    defaultResolution: primary.defaultResolution || fallback.defaultResolution || resolutionPresets[0] || '',
    defaultImageSize: primary.defaultImageSize || fallback.defaultImageSize || imageSizeOptions[0] || '',
    defaultAspectRatio: primary.defaultAspectRatio || fallback.defaultAspectRatio || aspectRatioOptions[0] || '',
    qualityOptions,
    requestFormat: primary.requestFormat || fallback.requestFormat || 'json',
    notes: primary.notes && !String(primary.notes).startsWith('Failed to load') ? primary.notes : (fallback.notes || primary.notes || '')
  };
  return {
    ...merged,
    ...deriveTaskRoleCapabilityFields(primary.taskType || fallback.taskType, merged)
  };
}

export function upgradeCatalogEntry(entry = {}) {
  const sourceModel = {
    key: entry.id,
    name: entry.id,
    provider: entry.provider,
    desc: entry.desc,
    tags: entry.tags
  };
  const apiRecords = Array.isArray(entry.apis) ? entry.apis : [];
  const existingTaskCapabilities = entry.taskCapabilities && typeof entry.taskCapabilities === 'object'
    ? entry.taskCapabilities
    : {};
  const existingTasks = uniqueStrings([
    ...Object.keys(existingTaskCapabilities),
    ...(Array.isArray(entry.capabilities?.supportedTasks) ? entry.capabilities.supportedTasks : [])
  ]);
  const inferredTasks = uniqueStrings([
    ...inferTasksFromApis(apiRecords),
    ...inferTasksFromModelIdentityPrecise(sourceModel)
  ]);
  const tasks = mergeTasksWithIdentity(existingTasks, inferredTasks);
  const nextTaskCapabilities = {};
  const explicitEndFrame = hasExplicitEndFrameSignal(apiRecords, sourceModel);
  for (const taskType of tasks) {
    nextTaskCapabilities[taskType] = mergeCapabilityDetail(
      existingTaskCapabilities[taskType] || {},
      inferTaskCapabilityFallback(sourceModel, apiRecords, taskType)
    );
    if (taskType === 'image_to_video' && !explicitEndFrame) {
      nextTaskCapabilities[taskType].supportsEndFrame = false;
    }
  }
  if (/^kling-video/i.test(String(sourceModel.key || ''))) {
    for (const [taskType, capability] of Object.entries(nextTaskCapabilities)) {
      if (!capability) continue;
      capability.requestFormat = 'json';
      capability.promptMaxLength = capability.promptMaxLength || 2500;
      capability.supportsProviderMode = true;
      capability.providerModeOptions = Array.isArray(capability.providerModeOptions) && capability.providerModeOptions.length
        ? capability.providerModeOptions
        : ['std', 'pro'];
      capability.providerModeLabel = '生成等级';
      capability.supportsCfgScale = false;
      capability.supportsNegativePrompt = true;
      if (taskType === 'text_to_video') {
        capability.supportsReferenceImage = false;
        capability.supportsCameraControl = true;
        capability.supportsDirectionalCameraControls = !/-omni/i.test(String(sourceModel.key || ''));
      }
      if (taskType === 'image_to_video') {
        capability.supportsSourceImage = true;
        capability.supportsReferenceImage = true;
        capability.supportsMultipleReferenceImages = true;
        capability.maxReferenceImages = Math.max(Number(capability.maxReferenceImages || 0), 4) || 4;
        capability.supportsEndFrame = !/v1-5/i.test(String(sourceModel.key || ''));
        capability.supportsDirectionalCameraControls = false;
      }
      if (/-omni|multi-elements/i.test(String(sourceModel.key || ''))) {
        capability.supportsElements = true;
        capability.supportsOmniImageList = true;
        capability.supportsOmniVideoList = true;
      }
      if (taskType === 'text_to_video' && (/^kling-video-v3/i.test(String(sourceModel.key || '')) || /(^|[-_])omni($|[-_])/i.test(String(sourceModel.key || '')))) {
        capability.supportsIntelligentStoryboard = true;
      }
    }
  }
  for (const [taskType, capability] of Object.entries(nextTaskCapabilities)) {
    if (!capability) continue;
    if ((taskType === 'text_to_video' || taskType === 'image_to_video') && capability.supportsDuration !== true) {
      const sourceKey = String(sourceModel.key || '');
      const endpoint = String(capability.endpoint || '');
      if (
        /^kling-video/i.test(sourceKey)
        || /^sora/i.test(sourceKey)
        || /seedance/i.test(sourceKey)
        || /^volcv-v1$/i.test(sourceKey)
        || /\/videos\//i.test(endpoint)
      ) {
        capability.supportsDuration = true;
      }
    }
    Object.assign(capability, deriveTaskRoleCapabilityFields(taskType, capability));
  }
  const mergedCapabilities = mergeTaskCapabilities(Object.values(nextTaskCapabilities));
  if (!mergedCapabilities.supportedTasks.length) mergedCapabilities.supportedTasks = tasks;
  return {
    ...entry,
    taskCapabilities: nextTaskCapabilities,
    capabilities: mergeCapabilityDetail({
      ...(entry.capabilities || {}),
      supportedTasks: tasks
    }, mergedCapabilities),
    resolutionPresets: mergedCapabilities.resolutionPresets
  };
}

function detectRequestFormat(html) {
  const source = String(html || '').toLowerCase();
  if (source.includes('multipart/form-data') || source.includes('failed to parse multipart form')) return 'multipart';
  return 'json';
}

function buildTaskCapability(apiRecord, html) {
  const taskType = taskTypeFromApiName(apiRecord?.name);
  if (!taskType) return null;
  const apiName = String(apiRecord?.name || '');
  const apiNameLower = apiName.toLowerCase();

  const htmlSource = String(html || '');
  const text = stripHtml(htmlSource);
  const relevantText = extractRelevantSection(text, apiRecord?.name || '');
  const relevantHtml = extractRelevantSection(htmlSource, apiRecord?.name || '');
  const lowerHtml = relevantHtml.toLowerCase();
  const lowerText = relevantText.toLowerCase();

  const explicitDuration = /生成时长|支持秒数|\bduration\b|时长|seconds?/.test(lowerText) && taskType.includes('video');
  const familyDurationHint = /(seedance|sora)/.test(apiNameLower);
  const supportsDuration = taskType.includes('video') && (explicitDuration || familyDurationHint);
  const supportsAspectRatio = /aspect_ratio|比例|画幅/.test(lowerText) && (taskType.includes('video') || taskType.includes('image'));
  const supportsNegativePrompt = /negative_prompt|反向提示词/.test(lowerText);
  const supportsCameraControl = /camera_control|镜头控制/.test(lowerText);
  const supportsEnhancePrompt = /enhance_prompt|优化提示词|增强提示词/.test(lowerText);
  const supportsMovementAmplitude = /movement_amplitude|运动幅度/.test(lowerText);
  const supportsBgm = /\bbgm\b|背景音乐/.test(lowerText);
  const supportsReferenceImage = /reference_image|input_reference|参考图|主体参考/.test(lowerText);
  const supportsSourceImage = taskType === 'image_edit' || taskType === 'image_to_video';
  const supportsStoryboard = taskType === 'text_to_video' && /storyboard|故事板|分镜/.test(lowerText + ' ' + apiNameLower);
  const supportsEndFrame = apiName.includes('首尾帧');
  const supportsImageCount = /\bn\b|生成数量|图片数量/.test(lowerText) && taskType === 'text_to_image';

  const supportsStoryboardPrompt = taskType === 'text_to_video'
    && /storyboard|故事板/.test(lowerText + ' ' + apiNameLower)
    && /sora/.test(lowerText + ' ' + apiNameLower);
  const supportsIntelligentStoryboard = taskType === 'text_to_video'
    && /shot_type|intelligence|智能分镜|多镜头/.test(lowerText + ' ' + apiNameLower);
  const durationOptions = parseDurationOptions(`${relevantHtml} ${relevantText}`);
  const aspectRatioOptions = parseAspectRatioOptions(`${relevantHtml} ${relevantText}`);
  const resolutionOptions = parseResolutionOptions(`${relevantHtml} ${relevantText}`);
  const roleCaps = deriveTaskRoleCapabilityFields(taskType, {
    supportsSourceImage,
    supportsReferenceImage,
    supportsStoryboardPrompt,
    supportsIntelligentStoryboard,
    supportsEndFrame,
    supportsElements: false,
    supportsOmniImageList: false,
    supportsOmniVideoList: false
  });

  return {
    taskType,
    title: extractTitle(htmlSource, apiRecord?.name || ''),
    endpoint: apiRecord?.url || '',
    method: apiRecord?.method || 'POST',
    docsUrl: apiRecord?.link || '',
    requestFormat: detectRequestFormat(htmlSource),
    supportsDuration,
    durationOptions,
    minDuration: durationOptions[0] ?? null,
    maxDuration: durationOptions[durationOptions.length - 1] ?? null,
    supportsAspectRatio,
    aspectRatioOptions,
    resolutionOptions,
    supportsNegativePrompt,
    supportsCameraControl,
    supportsEnhancePrompt,
    supportsMovementAmplitude,
    supportsBgm,
    supportsSourceImage,
    supportsReferenceImage,
    supportsStoryboardPrompt,
    supportsIntelligentStoryboard,
    supportsStoryboard,
    supportsEndFrame,
    ...roleCaps,
    supportsImageCount,
    maxImageCount: supportsImageCount ? 8 : null,
    notes: relevantText.slice(0, 1200),
    rawSignals: {
      hasDurationKeyword: /duration|时长/.test(lowerText),
      hasAspectRatioKeyword: /aspect_ratio|比例/.test(lowerText)
    }
  };
}

function mergeTaskCapabilities(capabilities) {
  const merged = {
    supportedTasks: [],
    supportsSourceImage: false,
    supportsReferenceImage: false,
    supportsPrimaryImageInput: false,
    supportsImageEditSourceImage: false,
    supportsImageToVideoFirstFrame: false,
    supportsImageToVideoReferenceImages: false,
    supportsImageToVideoEndFrame: false,
    supportsTextToImageReferenceImages: false,
    supportsTextToVideoReferenceImages: false,
    supportsStoryboardPrompt: false,
    supportsIntelligentStoryboard: false,
    supportsStructuredVideoMode: false,
    supportsStoryboard: false,
    supportsEndFrame: false,
    supportsNegativePrompt: false,
    supportsProviderMode: false,
    providerModeOptions: [],
    providerModeLabel: '',
    supportsCfgScale: false,
    promptMaxLength: null,
    supportsElements: false,
    supportsOmniImageList: false,
    supportsOmniVideoList: false,
    supportsOmniInputs: false,
    supportsImageCount: false,
    maxImageCount: null,
    supportsCameraControls: false,
    supportsDirectionalCameraControls: false,
    supportsPromptOptimize: false,
    supportsDuration: false,
    durationOptions: [],
    minDuration: null,
    maxDuration: null,
    supportsAspectRatio: false,
    aspectRatioOptions: [],
    resolutionPresets: [],
    imageSizeOptions: [],
    sizeField: 'size',
    allowCustomResolution: true,
    defaultResolution: '',
    defaultImageSize: '',
    defaultAspectRatio: '',
    qualityOptions: [],
    requestFormat: 'json',
    inputReferenceFormat: 'object',
    docsLinks: [],
    notes: ''
  };

  for (const capability of capabilities) {
    merged.supportedTasks.push(capability.taskType);
    merged.supportsSourceImage ||= capability.supportsSourceImage;
    merged.supportsReferenceImage ||= capability.supportsReferenceImage;
    merged.supportsPrimaryImageInput ||= capability.supportsPrimaryImageInput;
    merged.supportsImageEditSourceImage ||= capability.supportsImageEditSourceImage;
    merged.supportsImageToVideoFirstFrame ||= capability.supportsImageToVideoFirstFrame;
    merged.supportsImageToVideoReferenceImages ||= capability.supportsImageToVideoReferenceImages;
    merged.supportsImageToVideoEndFrame ||= capability.supportsImageToVideoEndFrame;
    merged.supportsTextToImageReferenceImages ||= capability.supportsTextToImageReferenceImages;
    merged.supportsTextToVideoReferenceImages ||= capability.supportsTextToVideoReferenceImages;
    merged.supportsStoryboardPrompt ||= capability.supportsStoryboardPrompt;
    merged.supportsIntelligentStoryboard ||= capability.supportsIntelligentStoryboard;
    merged.supportsStructuredVideoMode ||= capability.supportsStructuredVideoMode;
    merged.supportsStoryboard ||= capability.supportsStoryboard;
    merged.supportsEndFrame ||= capability.supportsEndFrame;
    merged.supportsNegativePrompt ||= capability.supportsNegativePrompt;
    merged.supportsProviderMode ||= capability.supportsProviderMode;
    merged.supportsCfgScale ||= capability.supportsCfgScale;
    merged.supportsElements ||= capability.supportsElements;
    merged.supportsOmniImageList ||= capability.supportsOmniImageList;
    merged.supportsOmniVideoList ||= capability.supportsOmniVideoList;
    merged.supportsOmniInputs ||= capability.supportsOmniInputs;
    merged.supportsImageCount ||= capability.supportsImageCount;
    merged.supportsCameraControls ||= capability.supportsCameraControl;
    merged.supportsDirectionalCameraControls ||= capability.supportsDirectionalCameraControls;
    merged.supportsPromptOptimize ||= capability.supportsEnhancePrompt;
    merged.supportsDuration ||= capability.supportsDuration;
    merged.supportsAspectRatio ||= capability.supportsAspectRatio;
    merged.requestFormat = capability.requestFormat === 'multipart' ? 'multipart' : merged.requestFormat;
    if (capability.supportsEndFrame) merged.inputReferenceFormat = 'object';
    if (capability.maxImageCount) {
      merged.maxImageCount = Math.max(merged.maxImageCount || 0, capability.maxImageCount);
    }
    merged.durationOptions = [...new Set(merged.durationOptions.concat(capability.durationOptions || []))].sort((a, b) => a - b);
    merged.providerModeOptions = [...new Set(merged.providerModeOptions.concat(capability.providerModeOptions || []))];
    merged.aspectRatioOptions = [...new Set(merged.aspectRatioOptions.concat(capability.aspectRatioOptions || []))];
    merged.resolutionPresets = [...new Set(merged.resolutionPresets.concat(capability.resolutionOptions || []))];
    merged.imageSizeOptions = [...new Set(merged.imageSizeOptions.concat(capability.imageSizeOptions || []))];
    if (capability.sizeField === 'image_size') merged.sizeField = 'image_size';
    if (capability.allowCustomResolution === false) merged.allowCustomResolution = false;
    if (!merged.defaultResolution && capability.defaultResolution) merged.defaultResolution = capability.defaultResolution;
    if (!merged.defaultImageSize && capability.defaultImageSize) merged.defaultImageSize = capability.defaultImageSize;
    if (!merged.defaultAspectRatio && capability.defaultAspectRatio) merged.defaultAspectRatio = capability.defaultAspectRatio;
    if (!merged.promptMaxLength && capability.promptMaxLength) merged.promptMaxLength = capability.promptMaxLength;
    merged.docsLinks = [...new Set(merged.docsLinks.concat(capability.docsUrl ? [capability.docsUrl] : []))];
    if (!merged.notes && capability.notes) merged.notes = capability.notes;
  }

  if (merged.durationOptions.length) {
    merged.minDuration = merged.durationOptions[0];
    merged.maxDuration = merged.durationOptions[merged.durationOptions.length - 1];
  }

  merged.supportedTasks = [...new Set(merged.supportedTasks)];
  return merged;
}

async function fetchText(url) {
  const response = await fetch(url, { headers: { accept: 'text/html,application/json' } });
  if (!response.ok) {
    throw new Error(`Failed to load ${url}: ${response.status}`);
  }
  return response.text();
}

async function fetchPricePayload() {
  const response = await fetch(BLTCY_PRICE_ENDPOINT, { headers: { accept: 'application/json' } });
  if (!response.ok) {
    throw new Error(`Failed to load BLTCY model catalog: ${response.status}`);
  }
  return response.json();
}

async function parseApiDocs(apiRecords, existingDocs = {}, forceRefresh = false, onProgress = null) {
  const docs = { ...existingDocs };
  let processed = 0;
  const total = apiRecords.length;
  let cursor = 0;

  async function worker() {
    while (cursor < apiRecords.length) {
      const apiRecord = apiRecords[cursor++];
      const docUrl = String(apiRecord?.link || '').trim();
      if (!docUrl) {
        processed += 1;
        if (onProgress) onProgress({ stage: 'parsing_docs', processed, total, current: apiRecord?.name || '' });
        continue;
      }
      const cached = docs[docUrl];
      if (!forceRefresh && cached && Date.now() - Number(cached.fetchedAt || 0) < CACHE_TTL_MS) {
        processed += 1;
        if (onProgress) onProgress({ stage: 'parsing_docs', processed, total, current: apiRecord?.name || '', cached: true });
        continue;
      }

      try {
        const html = await fetchText(docUrl);
        docs[docUrl] = {
          fetchedAt: Date.now(),
          title: extractTitle(html, apiRecord?.name || ''),
          parsed: buildTaskCapability(apiRecord, html)
        };
      } catch (error) {
        docs[docUrl] = {
          fetchedAt: Date.now(),
          title: apiRecord?.name || docUrl,
          parsed: {
            taskType: taskTypeFromApiName(apiRecord?.name),
            title: apiRecord?.name || docUrl,
            endpoint: apiRecord?.url || '',
            method: apiRecord?.method || 'POST',
            docsUrl: docUrl,
            requestFormat: 'json',
            supportsDuration: false,
            durationOptions: [],
            minDuration: null,
            maxDuration: null,
            supportsAspectRatio: false,
            aspectRatioOptions: [],
            resolutionOptions: [],
            supportsNegativePrompt: false,
            supportsCameraControl: false,
            supportsEnhancePrompt: false,
            supportsMovementAmplitude: false,
            supportsBgm: false,
            supportsSourceImage: false,
            supportsReferenceImage: false,
            supportsEndFrame: false,
            supportsImageCount: false,
            maxImageCount: null,
            notes: error.message,
            rawSignals: {}
          }
        };
      } finally {
        processed += 1;
        if (onProgress) onProgress({ stage: 'parsing_docs', processed, total, current: apiRecord?.name || '' });
      }
    }
  }

  const workers = Array.from({ length: Math.min(DOC_FETCH_CONCURRENCY, Math.max(apiRecords.length, 1)) }, () => worker());
  await Promise.all(workers);

  return docs;
}

function inferTasksFromApis(apiRecords) {
  return [...new Set(apiRecords.map((api) => taskTypeFromApiName(api?.name)).filter(Boolean))];
}

function buildCatalogPayload(payload, docs = {}) {
  const apiMap = payload?.data?.apis || {};
  const models = Array.isArray(payload?.data?.models) ? payload.data.models : [];
  const catalog = new Map();

  for (const model of models) {
    const apiRecords = Array.isArray(model.apis)
      ? model.apis.map((apiKey) => apiMap[apiKey]).filter(Boolean)
      : [];

    const taskCapabilities = {};
    for (const apiRecord of apiRecords) {
      const docUrl = String(apiRecord?.link || '').trim();
      const parsed = docs[docUrl]?.parsed || null;
      if (parsed?.taskType) {
        taskCapabilities[parsed.taskType] = {
          ...(taskCapabilities[parsed.taskType] || {}),
          ...parsed
        };
      }
    }
    const tasks = uniqueStrings([
      ...inferTasksFromApis(apiRecords),
      ...inferTasksFromModelIdentityPrecise(model)
    ]);
    const allTasks = uniqueStrings([...Object.keys(taskCapabilities), ...tasks]);
    for (const taskType of allTasks) {
      const fallbackCapability = inferTaskCapabilityFallback(model, apiRecords, taskType);
      taskCapabilities[taskType] = mergeCapabilityDetail(taskCapabilities[taskType] || {}, fallbackCapability);
    }
    const mergedCapabilities = mergeTaskCapabilities(Object.values(taskCapabilities));
    if (!mergedCapabilities.supportedTasks.length) {
      mergedCapabilities.supportedTasks = allTasks;
    }

    const primaryPrice = pickPrimaryPrice(model.group_price);
    const pricing = primaryPrice ? {
      amount: Number(primaryPrice.price),
      type: primaryPrice.type,
      units: primaryPrice.units || '',
      label: inferPriceLabel(model, primaryPrice)
    } : null;

    const entry = upgradeCatalogEntry({
      id: model.key || model.name,
      provider: model.provider || '',
      desc: model.desc || '',
      tags: model.tags || '',
      pricing,
      apis: apiRecords.map((apiRecord) => ({
        name: apiRecord?.name || '',
        method: apiRecord?.method || '',
        url: apiRecord?.url || '',
        link: apiRecord?.link || ''
      })),
      taskCapabilities,
      capabilities: mergedCapabilities,
      resolutionPresets: mergedCapabilities.resolutionPresets
    });

    catalog.set(normalizeKey(entry.id), entry);
    catalog.set(normalizeKey(model.name), entry);
  }

  return {
    version: payload?.data?.version || '',
    docs,
    models: catalog
  };
}

async function fetchCatalog(targetModelIds = null, forceRefresh = false, onProgress = null) {
  if (onProgress) onProgress({ stage: 'fetching_catalog', processed: 0, total: 1 });
  const payload = await fetchPricePayload();
  const apiMap = payload?.data?.apis || {};
  const targetIds = normalizeModelIdSet(targetModelIds);
  const allModels = Array.isArray(payload?.data?.models) ? payload.data.models : [];
  const models = targetIds
    ? allModels.filter((model) => targetIds.has(normalizeKey(model.key || model.name)))
    : allModels;
  if (onProgress) onProgress({ stage: 'catalog_loaded', processed: models.length, total: allModels.length });
  const neededApiRecords = [];
  for (const model of models) {
    if (!Array.isArray(model.apis)) continue;
    for (const apiKey of model.apis) {
      const apiRecord = apiMap[apiKey];
      if (apiRecord?.link) neededApiRecords.push(apiRecord);
    }
  }

  const previous = await loadDiskCache();
  const docs = await parseApiDocs(neededApiRecords, previous?.docs || {}, forceRefresh, onProgress);
  const built = buildCatalogPayload(payload, docs);

  const persistable = {
    fetchedAt: Date.now(),
    version: built.version,
    docs,
    entries: Array.from(new Set(Array.from(built.models.values()))).map((entry) => ({
      ...entry
    }))
  };
  if (onProgress) onProgress({ stage: 'writing_cache', processed: 0, total: 1 });
  await saveDiskCache(persistable);
  if (onProgress) onProgress({ stage: 'completed', processed: neededApiRecords.length, total: neededApiRecords.length });
  return built;
}

function rebuildCatalogFromDisk(payload) {
  const models = new Map();
  for (const rawEntry of payload?.entries || []) {
    const entry = upgradeCatalogEntry(rawEntry);
    models.set(normalizeKey(entry.id), entry);
    models.set(normalizeKey(entry.id), entry);
  }
  return {
    version: payload?.version || '',
    docs: payload?.docs || {},
    models
  };
}

export async function getBltcyModelCatalogFromDisk(modelIds = null) {
  const disk = await loadDiskCache();
  if (!disk) return null;
  const rebuilt = rebuildCatalogFromDisk(disk);
  const targetIds = normalizeModelIdSet(modelIds);
  if (!hasCatalogCoverage(rebuilt, targetIds)) return rebuilt;
  return rebuilt;
}

export async function getBltcyModelCatalog(modelIds = null) {
  const now = Date.now();
  const targetIds = normalizeModelIdSet(modelIds);
  if (catalogCache.data && now - catalogCache.fetchedAt < CACHE_TTL_MS) {
    if (hasCatalogCoverage(catalogCache.data, targetIds)) return catalogCache.data;
  }

  const disk = await loadDiskCache();
  if (disk && now - Number(disk.fetchedAt || 0) < CACHE_TTL_MS) {
    const rebuilt = rebuildCatalogFromDisk(disk);
    if (hasCatalogCoverage(rebuilt, targetIds)) {
      catalogCache = {
        fetchedAt: Number(disk.fetchedAt || now),
        data: rebuilt
      };
      return rebuilt;
    }
  }

  const data = await fetchCatalog(targetIds ? [...targetIds] : null);
  catalogCache = {
    fetchedAt: now,
    data
  };
  return data;
}

export async function refreshBltcyModelCatalog(modelIds = null, options = {}) {
  const data = await fetchCatalog(modelIds, true, typeof options.onProgress === 'function' ? options.onProgress : null);
  catalogCache = {
    fetchedAt: Date.now(),
    data
  };
  return data;
}

export async function enrichModelsWithBltcyCatalog(models) {
  try {
    const targetIds = models.map((model) => model.id);
    const catalog = await getBltcyModelCatalog(targetIds);
    return models.map((model) => {
      const entry = catalog.models.get(normalizeKey(model.id));
      if (!entry) return model;
      return {
        ...model,
        provider: model.provider || entry.provider,
        pricing: entry.pricing,
        catalog: {
          desc: entry.desc,
          tags: entry.tags,
          apis: entry.apis,
          taskCapabilities: entry.taskCapabilities,
          capabilities: entry.capabilities,
          resolutionPresets: entry.resolutionPresets
        }
      };
    });
  } catch {
    return models;
  }
}

export async function getBltcyCatalogEntry(modelId) {
  try {
    const catalog = await getBltcyModelCatalog([modelId]);
    return catalog.models.get(normalizeKey(modelId)) || null;
  } catch {
    return null;
  }
}
