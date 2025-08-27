import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { ResponseMessage } from '@/common/decorators/response-message-decorator';
import { Public } from '@/modules/auth/decorators/public.decorator';

import { GetEventsQueryDto } from './dto/get-events.dto';
import { EventsQueryService } from './services/events.query.service';

@ApiTags('events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsQuery: EventsQueryService) {}

  @Public()
  @Get()
  @ApiOperation({
    summary: '이벤트 목록 조회 API',
    description: '무한 스크롤 기반, 정렬(order=asc|desc), limit(1~50) 지원',
  })
  @ApiOkResponse({ description: '이벤트 목록 조회 성공' })
  @ResponseMessage('이벤트 목록을 조회했습니다.')
  async list(@Query() q: GetEventsQueryDto) {
    const { items, pageInfo } = await this.eventsQuery.getEventsList(q);
    return { items, pageInfo };
  }
}
