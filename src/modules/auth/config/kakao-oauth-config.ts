import { registerAs } from '@nestjs/config';

export const KakaoOAuthConfig = registerAs('kakao-oauth', () => ({
  restApiKey: process.env.KAKAO_REST_API_KEY as string,
  clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
  redirectUrl:
    process.env.NODE_ENV == 'production'
      ? (process.env.KAKAO_REDIRECT_URI as string)
      : process.env.NODE_ENV == 'development'
        ? (process.env.DEVELOPMENT_KAKAO_REDIRECT_URI as string)
        : process.env.NODE_ENV == 'local'
          ? (process.env.LOCAL_KAKAO_REDIRECT_URI as string)
          : '',
  redirectFailure: process.env.KAKAO_REDIRECT_FAILURE as string,
}));
