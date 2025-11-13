import { registerAs } from '@nestjs/config';

export const FrontendUrlConfig = registerAs('frontend-url', () => ({
  localUrl: process.env.LOCAL_FRONTEND_URL as string,
  devUrl: process.env.DEVELOPMENT_FRONTEND_URL as string,
  prodUrl: process.env.PROD_FRONTEND_URL as string,
}));
