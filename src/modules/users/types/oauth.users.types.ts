export interface OAuthUserInfo {
  oauthProvider: OAuthProvider;
  oauthId: string;
}

export enum OAuthProvider {
  GOOGLE = 'google',
  KAKAO = 'kakao',
}

export interface GoogleOAuthUserData {
  name: string;
  profileImage: string;
}
