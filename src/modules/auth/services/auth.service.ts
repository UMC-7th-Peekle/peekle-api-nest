import {
  Inject,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { FrontendUrlConfig } from '@modules/auth/config/frontend-url.config';
import { RefreshJwtConfig } from '@modules/auth/config/refresh-jwt.config';
import { RegisterJwtConfig } from '@modules/auth/config/register-jwt.config';
import { JwtPayload, RegisterJwtPayload } from '@modules/auth/types/jwt.types';
import { OAuthUserService } from '@modules/users/services/oauth.users.service';
import { UsersService } from '@modules/users/services/users.service';
import { OAuthLoginOrRegisterResult } from '@modules/users/types/oauth.users.types';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(RefreshJwtConfig.KEY)
    private refreshJwtConfig: ConfigType<typeof RefreshJwtConfig>,
    @Inject(RegisterJwtConfig.KEY)
    private registerJwtConfig: ConfigType<typeof RegisterJwtConfig>,
    private readonly userService: UsersService,
    @Inject(FrontendUrlConfig.KEY)
    private readonly frontendUrlConfig: ConfigType<typeof FrontendUrlConfig>,
  ) {}

  getFrontendOAuthCallbackUrl() {
    let baseUrl: string;
    if (process.env.NODE_ENV === 'production') {
      baseUrl = this.frontendUrlConfig.prodUrl;
    } else if (process.env.NODE_ENV === 'development') {
      baseUrl = this.frontendUrlConfig.devUrl;
    } else {
      baseUrl = this.frontendUrlConfig.localUrl;
    }

    return baseUrl + '/auth/oauth/callback';
    //  return 'http://localhost:3000/auth/oauth/callback';
  }

  async generateTokens(userId: bigint): Promise<JwtPayload> {
    const payload = {
      userId: userId.toString(),
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload, this.refreshJwtConfig),
    ]);

    return {
      userId: userId.toString(),
      accessToken,
      refreshToken,
    };
  }

  async generateRegisterToken(payload: RegisterJwtPayload) {
    const registerToken = await this.jwtService.signAsync(payload, this.registerJwtConfig);

    return registerToken;
  }

  /**
   * JWT Guard에서 사용합니다. JWT payload 내의 userId를 받아서 사용자 정보를 반환합니다.
   * @param userId
   */
  async validateJwtUser(userId: bigint) {
    const user = await this.userService.getUserInfo(userId);

    if (!user) throw new UnauthorizedException('INVALID_TOKEN : 존재하지 않는 사용자입니다.');

    return {
      userId: user.id,
      name: user.name,
      nickname: user.nickname,
    };
  }

  generateOAuthRedirectUrl(result: OAuthLoginOrRegisterResult, frontendUrl?: string) {
    const redirectUrl = frontendUrl ?? this.getFrontendOAuthCallbackUrl();

    let res: string;
    if (result.type === 'login') {
      res = `${redirectUrl}?type=login&oauthProvider=${result.oauthProvider}&accessToken=${result.tokens.accessToken}&refreshToken=${result.tokens.refreshToken}`;
    } else if (result.type === 'register') {
      res = `${redirectUrl}?type=register&oauthProvider=${result.oauthProvider}&registerToken=${result.tokens.registerToken}`;
    } else throw new InternalServerErrorException('Something Got Wrong.');

    return res;
  }
}
