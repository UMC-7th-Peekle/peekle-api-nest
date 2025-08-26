import { Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { RefreshJwtConfig } from '@modules/auth/config/refresh-jwt.config';
import { PrismaService } from '@modules/prisma/prisma.service';

export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    @Inject(RefreshJwtConfig.KEY)
    private refreshJwtConfig: ConfigType<typeof RefreshJwtConfig>,
  ) {}

  async authenticateWithUserId(userId: bigint) {
    const { accessToken, refreshToken } = await this.generateToken(userId);

    return { accessToken, refreshToken };
  }

  async generateToken(userId: bigint) {
    const payload = {
      userId: userId.toString(),
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload, this.refreshJwtConfig),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  verifyToken(token: string): boolean {
    // Logic to verify JWT token
    return true;
  }
}
