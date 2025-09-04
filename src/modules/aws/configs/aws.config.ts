import { registerAs } from '@nestjs/config';

export const AwsConfig = registerAs('aws', () => ({
  region: process.env.AWS_REGION as string,
  bucket: process.env.AWS_S3_BUCKET_NAME as string,
  cdnBaseUrl: process.env.CLOUDFRONT_URL as string,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
}));
