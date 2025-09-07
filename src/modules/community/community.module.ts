import { Module } from '@nestjs/common';

import { CommunityV1Controller } from '@modules/community/controllers/v1/community.v1.controller';
import { CommunityService } from '@modules/community/services/community.service';
import { PrismaModule } from '@modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CommunityV1Controller],
  providers: [CommunityService],
})
export class CommunityModule {}
