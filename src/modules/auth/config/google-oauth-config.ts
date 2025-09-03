import { registerAs } from '@nestjs/config';

export const GoogleOAuthConfig = registerAs('google-oauth', () => ({
  clientId: process.env.GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  callbackURL: process.env.GOOGLE_CALLBACK_URL as string,
}));
