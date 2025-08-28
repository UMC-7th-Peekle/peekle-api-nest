import { Inject, UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { RefreshJwtConfig } from '@modules/auth/config/refresh-jwt.config';
import { RegisterJwtConfig } from '@modules/auth/config/register-jwt.config';
import { JwtPayload, RegisterJwtPayload } from '@modules/auth/types/jwt.types';
import { PrismaService } from '@modules/prisma/prisma.service';
import { UsersService } from '@modules/users/services/users.service';
import { GoogleOAuthUserData } from '@modules/users/types/oauth.users.types';

export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    @Inject(RefreshJwtConfig.KEY)
    private refreshJwtConfig: ConfigType<typeof RefreshJwtConfig>,
    @Inject(RegisterJwtConfig.KEY)
    private registerJwtConfig: ConfigType<typeof RegisterJwtConfig>,
    private readonly userService: UsersService,
  ) {}

  async authenticateWithUserId(userId: bigint) {
    const { accessToken, refreshToken } = await this.generateTokens(userId);

    return { accessToken, refreshToken };
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

  verifyToken(token: string): boolean {
    // Logic to verify JWT token
    return true;
  }

  /**
   * JWT Guard에서 사용합니다. JWT payload 내의 userId를 받아서 사용자 정보를 반환합니다.
   * @param userId
   */
  async validateJwtUser(userId: bigint) {
    const user = await this.userService.getUserInfo(userId);

    if (!user) throw new UnauthorizedException('존재하지 않는 사용자입니다.');

    return {
      userId: user.id,
      name: user.name,
      nickname: user.nickname,
    };
  }
}
