import { Controller, Delete, Get, Param, Post, Query, Req } from '@nestjs/common';
import { ApiCookieAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import {
  GetEventDetailParamsDto,
  GetEventDetailResponseDto,
} from '@modules/events/dto/get-event-detail.dto';
import { GetEventsQueryDto } from '@modules/events/dto/get-events.dto';
import { EventsQueryService } from '@modules/events/services/events.query.service';
import { EventsScrapService } from '@modules/events/services/events.scrap.service';

import { ResponseMessage } from '@/common/decorators/response-message-decorator';
import { Public } from '@/modules/auth/decorators/public.decorator';

@ApiTags('events')
@Controller('events')
export class EventsController {
  constructor(
    private readonly eventsQuery: EventsQueryService,
    private readonly eventScrap: EventsScrapService,
  ) {}

  @Public()
  @Get()
  @ApiOperation({
    summary: '이벤트 목록 조회 API',
    description: '커서 기반 페이지네이션',
  })
  @ApiOkResponse({ description: '이벤트 목록 조회 성공' })
  @ResponseMessage('이벤트 목록을 조회했습니다.')
  async list(@Query() q: GetEventsQueryDto) {
    const { events, nextCursor, hasNextPage } = await this.eventsQuery.getEventsList(q);

    return { events, nextCursor, hasNextPage };
  }

  @Public()
  @Get(':id')
  @ApiOperation({ summary: '이벤트 상세 조회 API' })
  @ApiOkResponse({ type: GetEventDetailResponseDto })
  @ResponseMessage('이벤트 상세 내용을 조회했습니다.')
  async detail(@Param() { id }: GetEventDetailParamsDto) {
    const event = await this.eventsQuery.getEventDetail(id);
    return { event };
  }

  @ApiCookieAuth('peekleAccessToken')
  @Post(':id/scrap')
  @ApiOperation({ summary: '이벤트 찜하기 API' })
  @ApiOkResponse({ description: '이벤트 찜 성공' })
  @ResponseMessage('이벤트를 찜했습니다.')
  async scrap(@Param('id') id: string, @Req() req: any) {
    const userId: bigint = 1n; // TODO: req.user.id로 변경 필요
    const result = await this.eventScrap.scrapEvent(userId, BigInt(id));
    return result;
  }

  // TODO: JWT 토큰 관련 문제 해결 시 테스트 후 수정 필요
  @ApiCookieAuth('peekleAccessToken')
  @Delete(':id/scrap')
  @ApiOperation({ summary: '이벤트 찜 취소 API' })
  @ApiOkResponse({ description: '이벤트 찜 취소 성공' })
  @ResponseMessage('이벤트 찜을 취소했습니다.')
  async unscrap(@Param('id') id: string, @Req() req: any) {
    const userId: bigint = 1n; // TODO: req.user.id로 변경 필요
    const result = await this.eventScrap.unscrapEvent(userId, BigInt(id));
    return result;
  }
}
