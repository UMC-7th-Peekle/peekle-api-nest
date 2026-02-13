import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import { PrismaService } from '@modules/prisma/prisma.service';

// dayjs timezone 플러그인 활성화
dayjs.extend(utc);
dayjs.extend(timezone);

@Injectable()
export class UserCleanupService {
  private readonly logger = new Logger(UserCleanupService.name);
  private readonly BATCH_SIZE = 100; // 배치당 삭제할 최대 사용자 수

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
      // P2: Asia/Seoul 기준으로 7일 전 날짜 계산
      const sevenDaysAgo = dayjs().tz('Asia/Seoul').subtract(7, 'day').toDate();

      let totalDeletedCount = 0;
      let batchNumber = 1;

      while (true) {
        // P3: 배치 단위로 삭제 대상 조회 (id만 조회)
        const usersToDelete = await this.prisma.user.findMany({
          where: {
            isActive: false,
            deletedAt: {
              not: null, // P1: NULL 명시적 제외
              lte: sevenDaysAgo,
            },
          },
          select: { id: true },
          take: this.BATCH_SIZE,
        });

        // 더 이상 삭제할 사용자가 없으면 종료
        if (usersToDelete.length === 0) {
          break;
        }

        // 조회된 사용자 ID 목록으로 삭제 실행
        const userIds = usersToDelete.map((user) => user.id);
        const result = await this.prisma.user.deleteMany({
          where: {
            id: { in: userIds },
          },
        });

        totalDeletedCount += result.count;

        this.logger.log(
          `배치 #${batchNumber}: ${result.count}명 삭제 (누적: ${totalDeletedCount}명)`,
        );

        batchNumber++;

        // 조회된 개수가 BATCH_SIZE보다 적으면 마지막 배치
        if (usersToDelete.length < this.BATCH_SIZE) {
          break;
        }
      }

      this.logger.log(
        `탈퇴 사용자 정리 완료: 총 ${totalDeletedCount}명의 사용자가 영구 삭제되었습니다.`,
      );
    } catch (error) {
      this.logger.error('탈퇴 사용자 정리 중 오류 발생', error);
    }
  }
}
