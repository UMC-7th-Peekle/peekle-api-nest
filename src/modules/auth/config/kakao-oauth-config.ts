import { registerAs } from '@nestjs/config';

export const KakaoOAuthConfig = registerAs('kakao-oauth', () => ({
  restApiKey: process.env.KAKAO_REST_API_KEY,
  clientSecret: process.env.KAKAO_CLIENT_SECRET,
  redirectUrl: process.env.KAKAO_REDIRECT_URI,
  redirectFailure: process.env.KAKAO_REDIRECT_FAILURE,
}));
