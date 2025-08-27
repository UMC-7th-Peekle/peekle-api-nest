import { Module } from '@nestjs/common';

import { PrismaModule } from '@modules/prisma/prisma.module';

import { EventsController } from './events.controller';
import { EventsQueryService } from './services/events.query.service';

@Module({
  imports: [PrismaModule],
  controllers: [EventsController],
  providers: [EventsQueryService],
})
export class EventsModule {}
