import { Module } from '@nestjs/common';

import { EventsScrapService } from '@modules/events/services/events.scrap.command.service';
import { PrismaModule } from '@modules/prisma/prisma.module';

import { EventsController } from './events.controller';
import { EventsQueryService } from './services/events.query.service';

@Module({
  imports: [PrismaModule],
  controllers: [EventsController],
  providers: [EventsQueryService, EventsScrapService],
})
export class EventsModule {}
