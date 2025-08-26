import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

import { Strategy, VerifyCallback } from 'passport-google-oauth20';

import { GoogleOAuthConfig } from '@modules/auth/config/google-oauth-config';

@Injectable()
export class GoogleOAuthStrategy extends PassportStrategy(Strategy, 'google-oauth') {
  constructor(
    @Inject(GoogleOAuthConfig.KEY)
    private readonly googleOAuthConfig: ConfigType<typeof GoogleOAuthConfig>,
  ) {
    super({
      clientID: googleOAuthConfig.clientId as string,
      clientSecret: googleOAuthConfig.clientSecret as string,
      callbackURL: googleOAuthConfig.callbackURL,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: {
      id: string;
      displayName: string;
      emails: { value: string }[];
      photos: { value: string }[];
    },
    done: VerifyCallback,
  ) {
    const user = {
      provider: 'google',
      providerId: profile.id,
      email: profile.emails[0].value,
      name: profile.displayName,
      picture: profile.photos[0].value,
      accessToken,
    };

    console.log('Google OAuth user:', user);

    // ✅ done(에러, 사용자_객체) 형태로 호출합니다.
    done(null, user);
    //  http://localhost:7777/auth/google/login
  }
}
