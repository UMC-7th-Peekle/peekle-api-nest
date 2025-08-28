import { Module } from '@nestjs/common';

import { AwsController } from '@modules/aws/aws.controller';
import { AwsS3Service } from '@modules/aws/services/aws.s3.service';

@Module({
  controllers: [AwsController],
  providers: [AwsS3Service],
  exports: [AwsS3Service],
})
export class AwsModule {}
