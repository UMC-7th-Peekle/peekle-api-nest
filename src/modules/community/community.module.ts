import { Module } from '@nestjs/common';

import { PrismaModule } from '@modules/prisma/prisma.module';

import { CommunityControllerV1 } from './community.controller';
import { CommunityService } from './services/community.service';

@Module({
  imports: [PrismaModule],
  controllers: [CommunityControllerV1],
  providers: [CommunityService],
})
export class CommunityModule {}
