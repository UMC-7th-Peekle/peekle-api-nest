import { registerAs } from '@nestjs/config';

export const AwsConfig = registerAs('aws', () => ({
  region: process.env.AWS_REGION,
  bucket: process.env.AWS_S3_BUCKET_NAME,
  cdnBaseUrl: process.env.CLOUDFRONT_URL,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
}));
