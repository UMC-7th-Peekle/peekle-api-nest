import { registerAs } from '@nestjs/config';

export const FrontendUrlConfig = registerAs('frontend-url', () => ({
  localUrl: process.env.FRONTEND_LOCAL_URL as string,
  devUrl: process.env.FRONTEND_DEVELOPMENT_URL as string,
  prodUrl: process.env.FRONTEND_PROD_URL as string,
}));
