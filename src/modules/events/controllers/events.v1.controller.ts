import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCookieAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { CreateEventDto } from '@modules/events/dto/create-event.dto';
import { EventIdParamDto } from '@modules/events/dto/event-id.param';
import {
  GetEventDetailParamsDto,
  GetEventDetailResponseDto,
} from '@modules/events/dto/get-event-detail.dto';
import { GetEventsQueryDto } from '@modules/events/dto/get-events.dto';
import { GetMyScrappedEventsQueryDto } from '@modules/events/dto/get-scrapped-events.dto';
import { UpdateEventDto } from '@modules/events/dto/update-event.dto';
import { EventsCommandService } from '@modules/events/services/events.command.service';
import { EventsQueryService } from '@modules/events/services/events.query.service';
import { EventsScrapService } from '@modules/events/services/events.scrap.command.service';
import { EventsScrapQueryService } from '@modules/events/services/events.scrap.query.service';
import { EventsSeederService } from '@modules/events/services/events.seeder.service';

import { ResponseMessage } from '@/common/decorators/response-message-decorator';
import { Public } from '@/modules/auth/decorators/public.decorator';

@ApiTags('events')
@Controller({
  version: '1',
  path: 'events',
})
export class EventsController {
  constructor(
    private readonly eventsQuery: EventsQueryService,
    private readonly eventsCommand: EventsCommandService,
    private readonly eventScrap: EventsScrapService,
    private readonly eventsScrapQuery: EventsScrapQueryService,
    private readonly eventsSeederService: EventsSeederService,
  ) {}

  @Public()
  @Get()
  @ApiOperation({
    summary: '이벤트 목록 조회 API',
    description: '커서 기반 페이지네이션',
  })
  @ApiBearerAuth()
  @ApiOkResponse({ description: '이벤트 목록 조회 성공' })
  @ResponseMessage('이벤트 목록을 조회했습니다.')
  async list(@Query() q: GetEventsQueryDto, @Req() req: any) {
    const userId: bigint = req.user?.userId;
    const { events, nextCursor, hasNextPage } = await this.eventsQuery.getEventsList(q, userId);

    return { events, nextCursor, hasNextPage };
  }

  @ApiBearerAuth()
  @Get('scraps')
  @ApiOperation({ summary: '내가 찜한 이벤트 목록 조회 API' })
  @ApiOkResponse({ description: '스크랩 목록 조회 성공' })
  @ResponseMessage('찜한 이벤트 목록을 조회했습니다.')
  async myScraps(@Query() q: GetMyScrappedEventsQueryDto, @Req() req: any) {
    const userId: bigint = req.user?.userId;
    const { events, nextCursor, hasNextPage } = await this.eventsScrapQuery.getMyScrappedList(
      userId,
      q,
    );
    return { events, nextCursor, hasNextPage };
  }

  @ApiBearerAuth()
  @Public()
  @Get(':id')
  @ApiOperation({ summary: '이벤트 상세 조회 API' })
  @ApiOkResponse({ type: GetEventDetailResponseDto })
  @ResponseMessage('이벤트 상세 내용을 조회했습니다.')
  async detail(@Param() { id }: GetEventDetailParamsDto, @Req() req: any) {
    const userId: bigint = req.user?.userId;
    const event = await this.eventsQuery.getEventDetail(id, userId);
    return { event };
  }

  @ApiBearerAuth()
  @Post()
  @ApiOperation({ summary: '이벤트 생성 API' })
  @ApiCreatedResponse({ description: '이벤트 생성 성공', schema: { example: { id: '123' } } })
  @ResponseMessage('이벤트를 생성했습니다.')
  async create(@Body() dto: CreateEventDto, @Req() req: any) {
    const authorId: bigint = req.user?.userId;
    const result = await this.eventsCommand.createEvent(authorId, dto);
    return result;
  }

  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: '이벤트 수정 API' })
  @ApiOkResponse({ description: '이벤트 수정 성공', schema: { example: { id: '123' } } })
  @ResponseMessage('이벤트를 수정했습니다.')
  async update(@Param() { id }: EventIdParamDto, @Body() dto: UpdateEventDto, @Req() req: any) {
    const userId: bigint = req.user?.userId;
    const result = await this.eventsCommand.updateEvent(id, userId, dto);
    return result;
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: '이벤트 삭제 API' })
  @ApiOkResponse({ description: '이벤트 삭제 성공', schema: { example: { id: '123' } } })
  @ResponseMessage('이벤트를 삭제했습니다.')
  async remove(@Param() { id }: EventIdParamDto, @Req() req: any) {
    const userId: bigint = req.user?.userId;
    const result = await this.eventsCommand.deleteEvent(id, userId);
    return result;
  }

  @ApiBearerAuth()
  @Post(':id/scrap')
  @ApiOperation({ summary: '이벤트 찜하기 API' })
  @ApiOkResponse({ description: '이벤트 찜 성공' })
  @ResponseMessage('이벤트를 찜했습니다.')
  async scrap(@Param('id') id: string, @Req() req: any) {
    const userId: bigint = req.user?.userId;
    const result = await this.eventScrap.scrapEvent(userId, BigInt(id));
    return result;
  }

  @ApiBearerAuth()
  @Delete(':id/scrap')
  @ApiOperation({ summary: '이벤트 찜 취소 API' })
  @ApiOkResponse({ description: '이벤트 찜 취소 성공' })
  @ResponseMessage('이벤트 찜을 취소했습니다.')
  async unscrap(@Param('id') id: string, @Req() req: any) {
    const userId: bigint = req.user?.userId;
    const result = await this.eventScrap.unscrapEvent(userId, BigInt(id));

    return result;
  }

  @ApiBearerAuth()
  @Post('seed')
  @ApiOperation({ summary: '서울시 Open API 이벤트 시딩 API' })
  @ApiOkResponse({ description: '서울시 Open API 이벤트 시딩 성공' })
  @ResponseMessage('서울시 Open API 이벤트를 DB에 저장했습니다.')
  async seedEvents(@Req() req: any) {
    const userId: bigint = req.user?.userId;
    await this.eventsSeederService.seedSeoulRun4050(userId);
    await this.eventsSeederService.seedSeoul50Plus(userId);
    return { message: 'Seeding 성공' };
  }
}
