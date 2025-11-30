import { Module } from '@nestjs/common';

import { AuthModule } from '@modules/auth/auth.module';
import { EventsController } from '@modules/events/controllers/events.v1.controller';
import { EventsCommandService } from '@modules/events/services/events.command.service';
import { EventsQueryService } from '@modules/events/services/events.query.service';
import { EventsScrapService } from '@modules/events/services/events.scrap.command.service';
import { EventsScrapQueryService } from '@modules/events/services/events.scrap.query.service';
import { EventsSeederService } from '@modules/events/services/events.seeder.service';
import { PrismaModule } from '@modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [EventsController],
  providers: [
    EventsCommandService,
    EventsQueryService,
    EventsScrapService,
    EventsScrapQueryService,
    EventsSeederService,
  ],
  exports: [EventsSeederService],
})
export class EventsModule {}
