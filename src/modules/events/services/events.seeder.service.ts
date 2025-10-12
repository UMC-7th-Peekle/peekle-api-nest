import { ForbiddenException, Injectable, Logger } from '@nestjs/common';

import axios from 'axios';

import { KakaoLocalUtil } from '@common/utils/kakao-local.utils';

import { PrismaService } from '@modules/prisma/prisma.service';

@Injectable()
export class EventsSeederService {
  private readonly logger = new Logger(EventsSeederService.name);

  constructor(private readonly prisma: PrismaService) {}

  private classifyCategory(title: string): string {
    if (!title) return '기타';
    const t = title.toLowerCase();

    // 1. 자격증
    const certKeywords = [
      '자격증',
      '자격',
      '자격과정',
      '자격취득',
      '필기',
      '실기',
      '1급',
      '2급',
      '3급',
      '전산회계',
      '전산세무',
      'itq',
      '컴퓨터활용능력',
      '정리수납',
      '소믈리에',
      '바리스타',
      '플로리스트',
      '요양보호사',
      '사회복지사',
      '베이비시터',
    ];
    const certSuffixes = [
      '지도사',
      '전문가',
      '관리사',
      '기능사',
      '강사',
      '상담사',
      '지원사',
      '코치',
      '트레이너',
      '컨설턴트',
    ];
    if (
      certKeywords.some((k) => t.includes(k.toLowerCase())) ||
      certSuffixes.some((s) => title.endsWith(s))
    ) {
      return '자격증';
    }

    // 2. 취·창업
    const jobKeywords = [
      '취업',
      '재취업',
      '구직',
      '일자리',
      '이직',
      '전직',
      '직업',
      '진로',
      '이력서',
      '면접',
      '창업',
      '사업',
      '프랜차이즈',
      '부업',
      '실무',
      '실전',
      '실습',
      '양성',
      '양성과정',
      '쇼핑몰',
      '스마트스토어',
      '온라인몰',
      '아마존',
      '쿠팡',
      '셀러',
      '직업캠프',
      '취창업',
    ];
    if (jobKeywords.some((k) => t.includes(k.toLowerCase()))) {
      return '취·창업';
    }

    // 3. 디지털 역량
    const digitalKeywords = [
      '컴퓨터',
      '오피스',
      '엑셀',
      '한글',
      '워드',
      '파워포인트',
      '포토샵',
      '일러스트',
      '프리미어',
      '영상편집',
      '사진편집',
      '스마트폰',
      '모바일',
      '앱',
      '웹',
      '온라인',
      '블로그',
      '유튜브',
      '인스타그램',
      'sns',
      '콘텐츠',
      '크리에이터',
      'ai',
      '인공지능',
      '챗gpt',
      '코딩',
      '파이썬',
      '데이터',
      '빅데이터',
      '3d',
      '로봇',
      '드론',
      '메타버스',
      'vr',
      'ar',
      'ux',
      'ui',
      '클라우드',
      '보안',
      '네트워크',
      'iot',
      '디지털 마케팅',
    ];
    if (digitalKeywords.some((k) => t.includes(k.toLowerCase()))) {
      return '디지털 역량';
    }

    // 4. 경제
    const economyKeywords = [
      '재테크',
      '재무',
      '재무설계',
      '자산',
      '소득',
      '지출',
      '노후',
      '투자',
      '금융',
      '주식',
      '펀드',
      '채권',
      '보험',
      '연금',
      '부동산',
      '경매',
      '경제',
      '경제학',
    ];
    if (economyKeywords.some((k) => t.includes(k.toLowerCase()))) {
      return '경제';
    }

    // 5. 기타
    return '기타';
  }

  async seedSeoulRun4050(userId: bigint) {
    // 관리자 권한 확인
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    if (user?.role !== 'ADMIN') {
      throw new ForbiddenException('관리자만 접근할 수 있습니다.');
    }

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
          // 기본 위치 정보
          const latitude = row.EDNST_LAT_CRD ? parseFloat(row.EDNST_LAT_CRD) : null;
          const longitude = row.EDNST_LOT_CRD ? parseFloat(row.EDNST_LOT_CRD) : null;

          // 지역 정보 추출
          let region1: string | null = null;
          let region2: string | null = null;
          let region3: string | null = null;

          if (latitude && longitude) {
            // 좌표 기반 역지오코딩
            const regionInfo = await KakaoLocalUtil.getRegionByCoords(latitude, longitude);
            region1 = regionInfo?.region1 ?? null;
            region2 = regionInfo?.region2 ?? null;
            region3 = regionInfo?.region3 ?? null;
          } else if (row.EDNST_NM) {
            // 장소명으로 검색 (좌표가 없을 경우)
            const regionInfo = await KakaoLocalUtil.getAddressInfo(row.EDNST_NM);
            region1 = regionInfo?.region1 ?? null;
            region2 = regionInfo?.region2 ?? null;
            region3 = regionInfo?.region3 ?? null;
          }

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
              authorId: userId,
              category: this.classifyCategory(row.LCTR_NM),

              // 위치 정보
              latitude,
              longitude,
              region1,
              region2,
              region3,

              // 기본 이미지
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

  async seedSeoul50Plus(userId: bigint) {
    // 관리자 권한 확인
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    if (user?.role !== 'ADMIN') {
      throw new ForbiddenException('관리자만 접근할 수 있습니다.');
    }

    const apiKey = process.env.SEOUL_OPEN_API_KEY;
    const baseUrl = `http://openapi.seoul.go.kr:8088/${apiKey}/json/FiftyPotalEduInfo`;
    let start = 1;
    const pageSize = 100;
    let total = 0;

    while (true) {
      const end = start + pageSize - 1;
      const url = `${baseUrl}/${start}/${end}/`;
      this.logger.log(`Fetching: ${url}`);

      const { data } = await axios.get(url);
      const rows = data?.FiftyPotalEduInfo?.row ?? [];
      if (rows.length === 0) break;

      for (const row of rows) {
        try {
          await this.prisma.event.create({
            data: {
              title: row.LCT_NM,
              startDate: new Date(
                `${row.CR_STDE.slice(0, 4)}-${row.CR_STDE.slice(4, 6)}-${row.CR_STDE.slice(6, 8)}`,
              ),
              endDate: new Date(
                `${row.CR_EDDE.slice(0, 4)}-${row.CR_EDDE.slice(4, 6)}-${row.CR_EDDE.slice(6, 8)}`,
              ),
              venueName: '서울50+포털', // 얘는 장소 정보가 없음
              price: row.LCT_COST && row.LCT_COST !== '0' ? parseInt(row.LCT_COST) : 0,
              link: row.CR_URL,
              description: `상태: ${row.LCT_STAT}, 정원: ${row.CR_PPL_STAT}, 시간: ${row.HR}`,
              authorId: userId,
              category: this.classifyCategory(row.LCT_NM),
              latitude: null,
              longitude: null,
              // 일단 사진 정보가 없으니 기본 이미지로 대체
              eventImage: {
                create: {
                  imageUrl: '/default-event.png',
                  order: 0,
                },
              },
            },
          });
        } catch (e) {
          this.logger.error(`Insert failed for course ${row.LCT_NO}`, e);
        }
      }

      total += rows.length;
      if (rows.length < pageSize) break; // 마지막 페이지 도달
      start += pageSize;
    }

    this.logger.log(`Inserted total ${total} FiftyPotalEduInfo events`);
  }
}
