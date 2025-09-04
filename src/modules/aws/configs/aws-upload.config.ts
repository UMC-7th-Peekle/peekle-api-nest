export const ALLOWED_IMAGE_MIME = new Set([
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/bmp',
  'image/webp',
  'image/heic',
  'image/heif',
]);

export const ALLOWED_VIDEO_MIME = new Set([
  'video/mp4',
  'video/mpeg',
  'video/mpg',
  'video/quicktime',
  'video/x-msvideo',
  'video/x-ms-wmv',
  'video/x-matroska',
  'video/x-flv',
  'video/3gpp',
  'video/3gpp2',
  'video/x-ms-asf',
]);

const ONE_MB = 1024 * 1024;
const ONE_GB = ONE_MB * 1024;

export const MAX_IMAGE_SIZE_MB = 10; // 이미지 1장 최대 10MB
export const MAX_IMAGE_SIZE = MAX_IMAGE_SIZE_MB * ONE_MB; // 이미지 1장 최대 10MB

export const MAX_TOTAL_IMAGE_SIZE_MB = 30; // 한 번 요청 시 총 이미지 용량 30MB
export const MAX_TOTAL_IMAGE_SIZE = MAX_TOTAL_IMAGE_SIZE_MB * ONE_MB; // 한 번 요청 시 총 이미지 용량 30MB

export const MAX_BATCH_IMAGES = 30; // 한 번 요청 시 최대 이미지 장수

export const MAX_VIDEO_SIZE_GB = 2; // 동영상 2GB
export const MAX_VIDEO_SIZE = MAX_VIDEO_SIZE_GB * ONE_GB; // 동영상 2GB
