import { Module } from '@nestjs/common';

import { PrismaModule } from '@modules/prisma/prisma.module';

import { CommunityController } from './community.controller';
import { CommunityService } from './services/community.service';

@Module({
  imports: [PrismaModule],
  controllers: [CommunityController],
  providers: [CommunityService],
})
export class CommunityModule {}
