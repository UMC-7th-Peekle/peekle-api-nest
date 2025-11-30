export const mimeToExt = (mime: string) => {
  const map: Record<string, string> = {
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif',
    'image/bmp': 'bmp',
    'image/webp': 'webp',
    'image/heic': 'heic',
    'image/heif': 'heif',
    'video/mp4': 'mp4',
    'video/mpeg': 'mpeg',
    'video/mpg': 'mpeg',
    'video/quicktime': 'mov',
    'video/x-msvideo': 'avi',
    'video/x-ms-wmv': 'wmv',
    'video/x-matroska': 'mkv',
    'video/x-flv': 'flv',
    'video/3gpp': '3gp',
    'video/3gpp2': '3gp',
    'video/x-ms-asf': 'asf',
  };

  return map[mime] ?? 'bin';
};
