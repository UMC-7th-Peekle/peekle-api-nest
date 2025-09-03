import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { RefreshJwtConfig } from '@modules/auth/config/refresh-jwt.config';
import { RegisterJwtConfig } from '@modules/auth/config/register-jwt.config';
import { JwtPayload, RegisterJwtPayload } from '@modules/auth/types/jwt.types';
import { UsersService } from '@modules/users/services/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(RefreshJwtConfig.KEY)
    private refreshJwtConfig: ConfigType<typeof RefreshJwtConfig>,
    @Inject(RegisterJwtConfig.KEY)
    private registerJwtConfig: ConfigType<typeof RegisterJwtConfig>,
    private readonly userService: UsersService,
  ) {}

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
}
