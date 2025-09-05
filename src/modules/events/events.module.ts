import { Module } from '@nestjs/common';

import { EventsController } from '@modules/events/events.controller';
import { EventsCommandService } from '@modules/events/services/events.command.service';
import { EventsQueryService } from '@modules/events/services/events.query.service';
import { PrismaModule } from '@modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EventsController],
  providers: [EventsQueryService, EventsCommandService],
})
export class EventsModule {}
