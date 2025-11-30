import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

import { Strategy, VerifyCallback } from 'passport-google-oauth20';

import { GoogleOAuthConfig } from '@modules/auth/config/google-oauth-config';
import { GoogleOAuthUserData, OAuthProvider } from '@modules/users/types/oauth.users.types';

@Injectable()
export class GoogleOAuthStrategy extends PassportStrategy(Strategy, 'google-oauth') {
  constructor(
    @Inject(GoogleOAuthConfig.KEY)
    private readonly googleOAuthConfig: ConfigType<typeof GoogleOAuthConfig>,
  ) {
    super({
      clientID: googleOAuthConfig.clientId,
      clientSecret: googleOAuthConfig.clientSecret,
      callbackURL: googleOAuthConfig.callbackURL,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    __accessToken: string,
    __refreshToken: string,
    profile: {
      id: string;
      displayName: string;
      emails: { value: string }[];
      photos: { value: string }[];
    },
    done: VerifyCallback,
  ) {
    const user: GoogleOAuthUserData = {
      oauthProvider: OAuthProvider.GOOGLE,
      oauthId: profile.id,
      name: profile.displayName,
      profileImage: profile.photos[0].value,
    };

    // ✅ done(에러, 사용자_객체) 형태로 호출합니다.
    done(null, user);
    //  http://localhost:7777/auth/google/login
  }
}
