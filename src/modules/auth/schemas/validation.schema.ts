import { z } from 'zod';

export const configValidationSchema = z.object({
  // Node.js 환경 설정
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(7777),

  DATABASE_URL: z.url(),

  KAKAO_REST_API_KEY: z.string(),
  KAKAO_CLIENT_SECRET: z.string(),

  JWT_SECRET: z.string(),
  JWT_EXPIRES_IN: z.string(),

  REFRESH_JWT_SECRET: z.string(),
  REFRESH_JWT_EXPIRES_IN: z.string(),

  REGISTER_JWT_SECRET: z.string(),
  REGISTER_JWT_EXPIRES_IN: z.string(),

  // Google OAuth
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GOOGLE_CALLBACK_URL: z.url(),

  // AWS
  AWS_REGION: z.string(),
  AWS_S3_BUCKET_NAME: z.string(),
  CLOUDFRONT_URL: z.string(),
  AWS_ACCESS_KEY_ID: z.string(),
  AWS_SECRET_ACCESS_KEY: z.string(),
});

// 스키마로부터 타입 추론
export type ConfigValidationSchema = z.infer<typeof configValidationSchema>;
