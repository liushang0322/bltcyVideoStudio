export const BASE_PORT = Number(process.env.PORT || 3000);

export const TASK_TYPE_DEFINITIONS = [
  { value: 'text_to_image', label: '\u6587\u751f\u56fe', kind: 'image', requiresPrompt: true, requiresSourceImage: false, supportsReferenceImage: true },
  { value: 'image_edit', label: '\u56fe\u7247\u7f16\u8f91', kind: 'image', requiresPrompt: true, requiresSourceImage: true, supportsReferenceImage: true },
  { value: 'text_to_video', label: '\u6587\u751f\u89c6\u9891', kind: 'video', requiresPrompt: true, requiresSourceImage: false, supportsReferenceImage: true },
  { value: 'image_to_video', label: '\u56fe\u751f\u89c6\u9891', kind: 'video', requiresPrompt: false, requiresSourceImage: false, supportsReferenceImage: true }
];

export const TASK_TYPE_SET = new Set(TASK_TYPE_DEFINITIONS.map((item) => item.value));

export const DEFAULT_GENERATION_PARAMS = {
  videoSize: process.env.DEFAULT_VIDEO_SIZE || '1280x720',
  imageSize: process.env.DEFAULT_IMAGE_SIZE || '1024x1024',
  videoSeconds: Number(process.env.DEFAULT_VIDEO_SECONDS || 4)
};

export const DEFAULT_OUTPUT_DIR = process.env.DEFAULT_OUTPUT_DIR || 'workspace-output';

export const PROVIDER_PRESETS = {
  bltcy: {
    key: 'bltcy',
    providerLabel: 'BLTCY',
    providerType: 'compatible',
    baseUrl: 'https://api.bltcy.ai',
    imageEnabled: true,
    videoEnabled: true,
    videoRequestFormat: 'multipart',
    inputReferenceFormat: 'object',
    modelsPath: '/v1/models',
    imageGeneratePath: '/v1/images/generations',
    imageEditPath: '/v1/images/edits',
    videoCreatePath: '/v1/videos',
    videoRetrievePathTemplate: '/v1/videos/{id}',
    videoCancelPathTemplate: '/v1/videos/{id}/cancel',
    videoContentPathTemplate: '/v1/videos/{id}/content'
  }
};
