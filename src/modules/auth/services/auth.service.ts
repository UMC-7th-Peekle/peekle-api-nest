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
import { FrontEnvironment } from '@modules/auth/types/oauth.types';
import { PrismaService } from '@modules/prisma/prisma.service';
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
    private readonly prisma: PrismaService,
  ) {}

  getFrontendOAuthCallbackUrl(frontEnv: FrontEnvironment): string {
    let baseUrl: string;
    const WEB_REDIRECT_PATH = '/auth/oauth/callback';

    if (frontEnv === FrontEnvironment.PRODUCTION) {
      baseUrl = this.frontendUrlConfig.prodUrl;
    } else if (frontEnv === FrontEnvironment.DEVELOPMENT) {
      baseUrl = this.frontendUrlConfig.devUrl;
    } else if (frontEnv === FrontEnvironment.LOCAL) {
      baseUrl = this.frontendUrlConfig.localUrl;
    } else throw new InternalServerErrorException('Invalid frontEnv value.');

    return baseUrl + WEB_REDIRECT_PATH;
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
  // getUserInfo 사용 시 Auth - User간 순환 참조 문제가 발생하여 직접 prisma 접근으로 변경
  async validateJwtUser(userId: bigint) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        nickname: true,
        deletedAt: true,
        isActive: true,
      },
    });

    if (!user) throw new UnauthorizedException('INVALID_TOKEN : 존재하지 않는 사용자입니다.');

    if (user.deletedAt || user.isActive === false) {
      throw new UnauthorizedException('WITHDRAWN_USER : 탈퇴한 사용자입니다.');
    }

    return {
      userId: user.id,
      name: user.name,
      nickname: user.nickname,
    };
  }

  generateOAuthRedirectUrl(
    result: OAuthLoginOrRegisterResult,
    frontEnv: FrontEnvironment = FrontEnvironment.PRODUCTION,
    frontendUrl?: string,
  ) {
    const redirectUrl = frontendUrl ?? this.getFrontendOAuthCallbackUrl(frontEnv);

    let res: string;
    if (result.type === 'login') {
      res = `${redirectUrl}?type=login&oauthProvider=${result.oauthProvider}&accessToken=${result.tokens.accessToken}&refreshToken=${result.tokens.refreshToken}`;
    } else if (result.type === 'register') {
      res = `${redirectUrl}?type=register&oauthProvider=${result.oauthProvider}&registerToken=${result.tokens.registerToken}`;
    } else throw new InternalServerErrorException('Something Got Wrong.');

    return res;
  }
}
