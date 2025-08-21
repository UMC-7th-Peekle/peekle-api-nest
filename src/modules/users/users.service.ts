import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '@modules/prisma/prisma.service';
import { CreateUserRequestDto } from '@modules/users/dto/create-user';
import {
  GetTermsHistoryResponseDto,
  UpdateTermsAgreementRequestDto,
} from '@modules/users/dto/terms';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * 사용자 생성
   */
  async createUser(user: CreateUserRequestDto) {
    const newUser = await this.prisma.user.create({
      data: {
        name: user.name,
        nickname: user.nickname,
        birthdate: new Date(user.birthdate),
        gender: user.gender ?? null,
        phoneNumber: user.phoneNumber ?? null,
        profileImage: user.profileImage ?? null,
        role: user.role || 'USER',
      },
      select: { id: true },
    });

    return { message: '사용자가 생성되었습니다.', id: newUser.id.toString() };
  }

  /**
   * 내 정보 조회
   */
  async getUserInfo(userId: bigint) {
    const profileOwner = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!profileOwner) {
      throw new NotFoundException('해당 사용자를 찾을 수 없습니다.');
    }

    return {
      id: profileOwner.id.toString(),
      name: profileOwner.name,
      nickname: profileOwner.nickname,
      birthdate: profileOwner.birthdate.toISOString().slice(0, 10),
      gender: profileOwner.gender ?? undefined,
      phoneNumber: profileOwner.phoneNumber ?? undefined,
      profileImage: profileOwner.profileImage ?? undefined,
      role: profileOwner.role,
      createdAt: profileOwner.createdAt.toISOString(),
      updatedAt: profileOwner.updatedAt.toISOString(),
    };
  }

  /**
   * 약관 동의 이력 조회
   */
  async getTermsHistory(userId: bigint): Promise<GetTermsHistoryResponseDto> {
    const terms = await this.prisma.term.findMany({
      include: {
        userTerm: {
          where: { userId },
          select: { isAccepted: true },
        },
      },
      orderBy: { id: 'asc' },
    });

    return {
      items: terms.map((term) => ({
        termId: term.id.toString(),
        title: term.title,
        isRequired: term.isRequired,
        isAccepted: term.userTerm[0]?.isAccepted ?? false,
      })),
    };
  }

  /**
   * 약관 동의 상태 업데이트
   */
  async updateTermsAgreement(userId: bigint, body: UpdateTermsAgreementRequestDto) {
    // 여러 약관 동의 변경을 하나의 트랜잭션으로 처리
    await this.prisma.$transaction(
      body.updates.map(({ termId, isAccepted }) =>
        // upsert: 있으면 업데이트, 없으면 생성
        this.prisma.userTerm.upsert({
          // userId_termId: Prisma가 @@id([userId, termId]) 복합키 기반으로 생성
          where: { userId_termId: { userId, termId: BigInt(termId) } },
          create: {
            userId,
            termId: BigInt(termId),
            isAccepted,
          },
          update: { isAccepted },
        }),
      ),
    );

    return { message: '약관 동의 내역이 업데이트되었습니다.' };
  }
}
