import { Module } from '@nestjs/common';

import { EventsController } from '@modules/events/events.controller';
import { EventsCommandService } from '@modules/events/services/events.command.service';
import { EventsQueryService } from '@modules/events/services/events.query.service';
import { EventsScrapService } from '@modules/events/services/events.scrap.command.service';
import { EventsScrapQueryService } from '@modules/events/services/events.scrap.query.service';
import { PrismaModule } from '@modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EventsController],
  providers: [EventsCommandService, EventsQueryService, EventsScrapService, EventsScrapQueryService],

})
export class EventsModule {}
