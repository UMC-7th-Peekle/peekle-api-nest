import { Inject, Injectable, InternalServerErrorException, LoggerService } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';

import { OAuth2Client } from 'google-auth-library';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { GOOGLE_OAUTH_CONFIG, GoogleOAuthConfig } from '@modules/auth/config/google-oauth-config';
import { OAuthUserService } from '@modules/users/services/oauth.users.service';
import { GoogleOAuthUserData, OAuthProvider } from '@modules/users/types/oauth.users.types';

@Injectable()
export class GoogleOAuthService {
  private readonly client: OAuth2Client;
  private readonly googleConfig: ConfigType<typeof GoogleOAuthConfig>;

  constructor(
    private readonly configService: ConfigService,
    private readonly oauthUserService: OAuthUserService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService,
  ) {
    this.googleConfig =
      this.configService.getOrThrow<ConfigType<typeof GoogleOAuthConfig>>(GOOGLE_OAUTH_CONFIG);
    this.client = new OAuth2Client({
      clientId: this.googleConfig.clientId,
      clientSecret: this.googleConfig.clientSecret,
      redirectUri: this.googleConfig.callbackURL,
    });
  }

  async verifyGoogleToken(idToken: string) {
    const client = new OAuth2Client(this.googleConfig.clientId);

    const ticket = await client.verifyIdToken({ idToken });

    const payload = ticket.getPayload();
    if (!payload) throw new InternalServerErrorException('Google ID 토큰이 잘못되었습니다.');

    const user: GoogleOAuthUserData = {
      oauthProvider: OAuthProvider.GOOGLE,
      oauthId: payload.sub,
      name: `${payload.family_name ?? ''} ${payload.given_name ?? ''}`.trim() ?? '알수없음',
      profileImage: payload.picture ?? '',
    };

    // TODO: 제거 바람
    this.logger.log(payload);

    return user;
  }

  getGoogleOAuthUrlV2(state: string, redirectUri?: string) {
    // this.client.getToken()
    return this.client.generateAuthUrl({
      redirect_uri: redirectUri ?? undefined,
      scope: ['profile', 'email'],
      access_type: 'offline',
      prompt: 'consent',
      state,
    });
  }

  getGoogleTokenV2(code: string, redirectUri?: string) {
    return this.client.getToken({
      code: code,
      redirect_uri: redirectUri ?? undefined,
    });
  }
}
