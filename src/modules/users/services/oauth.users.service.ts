import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import { Prisma } from '@peekle/prisma/client';

import { FrontendUrlConfig } from '@modules/auth/config/frontend-url.config';
import { AuthService } from '@modules/auth/services/auth.service';
import { RegisterJwtPayload } from '@modules/auth/types/jwt.types';
import { PrismaService } from '@modules/prisma/prisma.service';
import { CreateOAuthUserRequestDto } from '@modules/users/dto/user.dto';
import {
  GoogleOAuthUserData,
  KakaoUserData,
  OAuthLoginOrRegisterResult,
} from '@modules/users/types/oauth.users.types';

@Injectable()
export class OAuthUserService {
  constructor(
    private readonly authService: AuthService,
    private readonly prismaService: PrismaService,
    @Inject(FrontendUrlConfig.KEY)
    private readonly frontendUrlConfig: ConfigType<typeof FrontendUrlConfig>,
  ) {}

  async oauthLoginOrRegister(
    oauthData: GoogleOAuthUserData | KakaoUserData,
  ): Promise<OAuthLoginOrRegisterResult> {
    const { oauthProvider, oauthId } = oauthData;
    const user = await this.prismaService.user.findFirst({
      where: {
        oauthProvider: oauthProvider,
        oauthId: oauthId,
      },
    });

    console.log('OAuthUserService ~ user:', user);

    if (user) {
      const tokens = await this.authService.generateTokens(user.id);
      return { type: 'login', oauthProvider: oauthData.oauthProvider, tokens };
    } else {
      const registerToken = await this.authService.generateRegisterToken(oauthData);
      return {
        type: 'register',
        oauthProvider: oauthData.oauthProvider,
        tokens: { registerToken },
      };
    }
  }

  async createOAuthUser(user: CreateOAuthUserRequestDto & RegisterJwtPayload) {
    const newUser = await this.prismaService.$transaction(async (txPrisma) => {
      const createdUser = await txPrisma.user.create({
        data: {
          name: user.name ?? null,
          nickname: user.nickname,
          profileImage: user.profileImage ?? null,
          oauthProvider: user.oauthProvider,
          oauthId: user.oauthId,
        },
        select: { id: true },
      });

      // TODO: 필수 약관 동의 여부 인증 필요
      try {
        await txPrisma.userTerm.createMany({
          data: user.terms.map((term) => ({
            userId: createdUser.id,
            termId: BigInt(term.termId),
            isAccepted: term.isAccepted,
          })),
        });
      } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
          if (err.code === 'P2003') {
            console.error('Foreign key constraint failed:', err.message);
            throw new BadRequestException('존재하지 않는 약관입니다.');
          }
        }
        throw err;
      }

      return createdUser;
    });

    return { id: newUser.id.toString() };
  }
}
