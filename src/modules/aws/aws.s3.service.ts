import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { randomUUID } from 'crypto';

type Domain = 'events' | 'community';
type Kind = 'image' | 'video';

const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 이미지 1장 최대 10MB
const MAX_TOTAL_IMAGE_SIZE = 30 * 1024 * 1024; // 한 번 요청 시 총 이미지 용량 30MB
const MAX_VIDEO_SIZE = 2 * 1024 * 1024 * 1024; // 동영상 2GB

const ALLOWED_IMAGE_MIME = new Set([
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/bmp',
  'image/webp',
  'image/heic',
  'image/heif',
]);

const ALLOWED_VIDEO_MIME = new Set([
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

@Injectable()
export class AwsS3Service {
  private readonly s3: S3Client;
  private readonly bucket: string;
  private readonly cdn: string;

  constructor(private readonly config: ConfigService) {
    this.bucket = this.config.get<string>('aws.bucket')!;
    this.cdn = this.config.get<string>('aws.cdnBaseUrl')!;

    const region = this.config.get<string>('aws.region')!;
    const accessKeyId = this.config.get<string>('aws.accessKeyId');
    const secretAccessKey = this.config.get<string>('aws.secretAccessKey');

    this.s3 = new S3Client({
      region,
      credentials: accessKeyId && secretAccessKey ? { accessKeyId, secretAccessKey } : undefined,
    });
  }

  async getPresignedPutUrl(opts: {
    domain: Domain; // events나 community
    kind: Kind; // image나 video
    contentType: string;
    size?: number; // 현재 파일 용량
    totalSize?: number; // 배치 업로드 총합
    ext?: string; // 확장자 (직접 전달 안 하면 mimeToExt로 자동 결정)
    expiresIn?: number; // Presigned URL 유효 시간
  }) {
    const { domain, kind, contentType, size, totalSize, ext, expiresIn = 600 } = opts;

    // MIME 정책
    if (kind === 'image' && !ALLOWED_IMAGE_MIME.has(contentType)) {
      throw new BadRequestException(
        `Unsupported image type. Allowed: ${[...ALLOWED_IMAGE_MIME].join(', ')}`,
      );
    }
    if (kind === 'video' && !ALLOWED_VIDEO_MIME.has(contentType)) {
      throw new BadRequestException(
        `Unsupported video type. Allowed: ${[...ALLOWED_VIDEO_MIME].join(', ')}`,
      );
    }

    // 용량 정책
    if (kind === 'image') {
      if (typeof size === 'number' && size > MAX_IMAGE_SIZE) {
        throw new BadRequestException('이미지 1장 최대 10MB를 초과했습니다.');
      }
      if (typeof totalSize === 'number' && totalSize > MAX_TOTAL_IMAGE_SIZE) {
        throw new BadRequestException('이미지 총합이 30MB를 초과했습니다.');
      }
    } else if (kind === 'video' && typeof size === 'number' && size > MAX_VIDEO_SIZE) {
      throw new BadRequestException('동영상은 최대 2GB까지 업로드할 수 있습니다.');
    }

    const now = new Date();
    const yyyy = String(now.getUTCFullYear());
    const mm = String(now.getUTCMonth() + 1).padStart(2, '0');
    const dd = String(now.getUTCDate()).padStart(2, '0');

    const extension = (ext ?? mimeToExt(contentType)).toLowerCase();
    const folder = kind === 'image' ? 'images' : 'videos';
    const key = `uploads/${domain}/${folder}/${yyyy}/${mm}/${dd}/${randomUUID()}.${extension}`;

    const cmd = new PutObjectCommand({
      Bucket: this.bucket,
      Key: key,
      ContentType: contentType,
    });

    const uploadUrl = await getSignedUrl(this.s3, cmd, { expiresIn });
    const publicUrl = `${this.cdn.replace(/\/+$/, '')}/${key}`;

    return { uploadUrl, key, publicUrl, expiresIn };
  }
}

function mimeToExt(mime: string) {
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
}
