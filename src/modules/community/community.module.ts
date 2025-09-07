import { Module } from '@nestjs/common';

import { PrismaModule } from '@modules/prisma/prisma.module';

import { CommunityV1Controller } from './community.controller';
import { CommunityService } from './services/community.service';

@Module({
  imports: [PrismaModule],
  controllers: [CommunityV1Controller],
  providers: [CommunityService],
})
export class CommunityModule {}
