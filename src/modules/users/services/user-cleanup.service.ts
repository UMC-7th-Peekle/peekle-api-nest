import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import dayjs from 'dayjs';

import { PrismaService } from '@modules/prisma/prisma.service';

@Injectable()
export class UserCleanupService {
  private readonly logger = new Logger(UserCleanupService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * 매일 새벽 4시에 실행
   * deletedAt 기준 7일이 지난 isActive=false 사용자 영구 삭제
   */
  @Cron('0 4 * * *', {
    name: 'deleteWithdrawnUsers',
    timeZone: 'Asia/Seoul',
  })
  async deleteWithdrawnUsers() {
    this.logger.log('탈퇴 사용자 정리 작업 시작');

    try {
      // 7일 전 날짜 계산
      const sevenDaysAgo = dayjs().subtract(7, 'day').toDate();

      // deletedAt이 7일 이전이고 isActive가 false인 사용자 삭제
      const result = await this.prisma.user.deleteMany({
        where: {
          isActive: false,
          deletedAt: {
            lte: sevenDaysAgo, // less than or equal (이하)
          },
        },
      });

      this.logger.log(`탈퇴 사용자 정리 완료: ${result.count}명의 사용자가 영구 삭제되었습니다.`);
    } catch (error) {
      this.logger.error('탈퇴 사용자 정리 중 오류 발생', error);
    }
  }
}
