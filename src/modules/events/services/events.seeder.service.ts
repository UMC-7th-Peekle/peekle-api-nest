import { Injectable, Logger } from '@nestjs/common';

import axios from 'axios';

import { PrismaService } from '@modules/prisma/prisma.service';

@Injectable()
export class EventsSeederService {
  private readonly logger = new Logger(EventsSeederService.name);

  constructor(private readonly prisma: PrismaService) {}

  async seedOfflineCourses() {
    const apiKey = process.env.SEOUL_OPEN_API_KEY;
    const baseUrl = `http://openapi.seoul.go.kr:8088/${apiKey}/json/OfflineCourse`;
    let start = 1;
    const pageSize = 100;
    let total = 0;

    while (true) {
      const end = start + pageSize - 1;
      const url = `${baseUrl}/${start}/${end}/`;
      this.logger.log(`Fetching: ${url}`);

      const { data } = await axios.get(url);
      const rows = data?.OfflineCourse?.row ?? [];
      if (rows.length === 0) break;

      for (const row of rows) {
        try {
          await this.prisma.event.create({
            data: {
              title: row.LCTR_NM,
              startDate: new Date(
                `${row.LCTR_BGNG_YMD.slice(0, 4)}-${row.LCTR_BGNG_YMD.slice(4, 6)}-${row.LCTR_BGNG_YMD.slice(6, 8)}`,
              ),
              endDate: new Date(
                `${row.LCTR_END_YMD.slice(0, 4)}-${row.LCTR_END_YMD.slice(4, 6)}-${row.LCTR_END_YMD.slice(6, 8)}`,
              ),
              venueName: row.EDNST_NM,
              price: 0,
              link: row.ATNLC_APLY_URL,
              description: row.LCTR_TRGT || null,
              authorId: 1, // 관리자 계정
              category: row.LCTR_SE || '기타',
              latitude: row.EDNST_LAT_CRD ? parseFloat(row.EDNST_LAT_CRD) : null,
              longitude: row.EDNST_LOT_CRD ? parseFloat(row.EDNST_LOT_CRD) : null,
              eventImage: {
                create: {
                  imageUrl: '/default-event.png',
                  order: 0,
                },
              },
            },
          });
        } catch (e) {
          this.logger.error(`Insert failed for course ${row.LCTR_ID}`, e);
        }
      }

      total += rows.length;
      if (rows.length < pageSize) break; // 마지막 페이지 도달
      start += pageSize;
    }

    this.logger.log(`Inserted total ${total} OfflineCourse events`);
  }
}
