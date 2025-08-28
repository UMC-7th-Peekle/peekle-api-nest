import { registerAs } from '@nestjs/config';

export const GoogleOAuthConfig = registerAs('google-oauth', () => ({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
}));
