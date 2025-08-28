export interface OAuthUserInfo {
  oauthProvider: OAuthProvider;
  oauthId: string;
}

export enum OAuthProvider {
  GOOGLE = 'google',
  KAKAO = 'kakao',
}

export interface GoogleOAuthUserData extends OAuthUserInfo {
  name: string;
  profileImage: string;
}

export interface KakaoUserData extends OAuthUserInfo {
  name: string;
  nickname: string;
  email?: string;
  profileImage: string;
}

export interface OAuthLoginResult {
  type: 'login';
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface OAuthRegisterResult {
  type: 'register';
  tokens: {
    registerToken: string;
  };
}

export type OAuthLoginOrRegisterResult = OAuthLoginResult | OAuthRegisterResult;
