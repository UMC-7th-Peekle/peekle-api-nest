import { Injectable } from '@nestjs/common';

import { AuthService } from '@modules/auth/services/auth.service';
import { RegisterJwtPayload } from '@modules/auth/types/jwt.types';
import { PrismaService } from '@modules/prisma/prisma.service';
import { CreateOAuthUserRequestDto } from '@modules/users/dto/user.dto';
import {
  GoogleOAuthUserData,
  KakaoUserData,
  OAuthProvider,
} from '@modules/users/types/oauth.users.types';

@Injectable()
export class OAuthUserService {
  constructor(
    private readonly authService: AuthService,
    private readonly prismaService: PrismaService,
  ) {}

  async oauthLoginOrRegister(oauthData: GoogleOAuthUserData | KakaoUserData) {
    const { oauthProvider, oauthId, ...userData } = oauthData;
    const user = await this.prismaService.user.findFirst({
      where: {
        oauthProvider: oauthProvider,
        oauthId: oauthId,
      },
    });

    if (user) {
      const tokens = await this.authService.generateTokens(user.id);
      return { type: 'login', tokens };
    } else {
      const registerToken = await this.authService.generateRegisterToken(oauthData);
      return { type: 'register', tokens: { registerToken } };
    }
  }

  async createOAuthUser(user: CreateOAuthUserRequestDto & RegisterJwtPayload) {
    console.log(user.terms);
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

      const newUserTerms = await txPrisma.userTerm.createMany({
        data: user.terms.map((term) => ({
          userId: createdUser.id,
          termId: BigInt(term.termId),
          isAccepted: term.isAccepted,
        })),
      });

      return createdUser;
    });

    return { id: newUser.id.toString() };
  }
}
