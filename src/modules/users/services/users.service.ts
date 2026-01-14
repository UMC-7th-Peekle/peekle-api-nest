import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import dayjs from 'dayjs';

import { PrismaService } from '@modules/prisma/prisma.service';
import { UpdateNicknameRequestDto } from '@modules/users/dto/nickname.dto';
import { UpdateProfileImageRequestDto } from '@modules/users/dto/profile.dto';
import {
  GetAllTermsResponseDto,
  GetTermsHistoryResponseDto,
  UpdateTermsAgreementRequestDto,
} from '@modules/users/dto/terms.dto';
import { CreateUserRequestDto } from '@modules/users/dto/user.dto';

import { Prisma } from '@/generated/prisma';

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

    return { id: newUser.id.toString() };
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
      birthdate: profileOwner?.birthdate?.toISOString().slice(0, 10),
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
   * 모든 약관 조회 (content 포함)
   */
  async getAllTerms(): Promise<GetAllTermsResponseDto> {
    const terms = await this.prisma.term.findMany({
      orderBy: { id: 'asc' },
    });

    return {
      items: terms.map((term) => ({
        id: term.id.toString(),
        title: term.title,
        content: term.content,
        isRequired: term.isRequired,
      })),
    };
  }

  /**
   * 약관 동의 상태 업데이트
   */
  async updateTermsAgreement(userId: bigint, body: UpdateTermsAgreementRequestDto) {
    if (!body.updates || body.updates.length === 0) {
      // 클라이언트가 잘못된 요청 보냈을 때 400 에러 반환
      throw new BadRequestException('업데이트할 약관 동의 내역이 없습니다.');
    }

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

  /**
   * 닉네임 사용 가능 여부 확인
   * - 중복 존재 시 available=false
   */
  async checkNicknameAvailability(nickname: string) {
    const trimmed = nickname.trim();
    if (!trimmed) {
      throw new BadRequestException('닉네임을 입력해 주세요.');
    }

    const exists = await this.prisma.user.findFirst({
      where: { nickname: trimmed },
      select: { id: true },
    });

    return { available: !exists };
  }

  /**
   * 내 닉네임 변경
   * - 자기 자신 제외 중복 방지
   * - TODO: Prisma에 @unique 제약 추가해야 함
   */
  async updateNickname(userId: bigint, dto: UpdateNicknameRequestDto) {
    const nickname = dto.nickname.trim();

    // 닉네임 최근 변경일자 조회
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { nicknameUpdatedAt: true },
    });

    if (user?.nicknameUpdatedAt) {
      const diffDays = dayjs().diff(user.nicknameUpdatedAt, 'day');

      if (diffDays < 30) {
        throw new BadRequestException({
          message: `닉네임은 ${30 - diffDays}일 후에 변경할 수 있습니다.`,
          nextAvailableAt: dayjs(user.nicknameUpdatedAt).add(30, 'day').toISOString(),
        });
      }
    }

    const nicknameAlreadyExists = await this.prisma.user.findFirst({
      where: { nickname, NOT: { id: userId } },
      select: { id: true },
    });
    if (nicknameAlreadyExists) {
      throw new ConflictException('이미 사용 중인 닉네임입니다.');
    }

    try {
      await this.prisma.user.update({
        where: { id: userId },
        data: { nickname, nicknameUpdatedAt: new Date() }, // 닉네임 변경일자 갱신
      });
    } catch (e: unknown) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // P2002: Prisma unique constraint violation (중복 닉네임)
        if (e?.code === 'P2002') {
          throw new ConflictException('이미 사용 중인 닉네임입니다.');
        }
      }
      throw e;
    }

    return { message: '닉네임이 변경되었습니다.' };
  }

  /**
   * 내 프로필 이미지 수정/삭제
   * - null → 삭제
   */
  async updateProfileImage(userId: bigint, dto: UpdateProfileImageRequestDto) {
    if (!('profileImage' in dto)) {
      return { message: '변경 사항이 없습니다.' };
    }

    // null → 삭제, string → trim 후 저장
    const next =
      dto.profileImage === null
        ? null
        : typeof dto.profileImage === 'string'
          ? dto.profileImage.trim()
          : dto.profileImage;

    await this.prisma.user.update({
      where: { id: userId },
      data: { profileImage: next },
    });

    return {
      message: next ? '프로필 이미지가 업데이트되었습니다.' : '프로필 이미지가 삭제되었습니다.',
    };
  }
}
