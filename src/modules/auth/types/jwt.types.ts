import { GoogleOAuthUserData, OAuthUserInfo } from '@modules/users/types/oauth.users.types';

export interface JwtPayload {
  userId: string;
  accessToken: string;
  refreshToken: string;
}

export interface RegisterJwtPayload extends OAuthUserInfo {
  userData: GoogleOAuthUserData;
}
