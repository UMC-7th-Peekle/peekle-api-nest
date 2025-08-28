import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { GetPresignedUrlDto } from '@modules/aws/dto/get-presigned-url.dto';
import { AwsS3Service } from '@modules/aws/services/aws.s3.service';

import { Public } from '@/modules/auth/decorators/public.decorator';

@ApiTags('uploads')
@Controller('uploads')
export class AwsController {
  constructor(private readonly awsS3: AwsS3Service) {}

  @Public() // 테스트 할 때 사용
  @Post('presigned')
  @ApiOperation({
    summary: 'S3 Presigned URL 발급',
    description: '클라이언트가 S3로 직접 업로드할 수 있도록 PUT presigned URL을 발급합니다.',
  })
  @ApiOkResponse({
    schema: {
      example: {
        uploadUrl: 'https://s3.ap-northeast-2.amazonaws.com/your-bucket/...',
        key: 'uploads/events/images/2025/08/28/uuid.jpg',
        publicUrl: 'https://cdn.example.com/uploads/events/images/2025/08/28/uuid.jpg',
        expiresIn: 600,
      },
    },
  })
  async getPresigned(@Body() dto: GetPresignedUrlDto) {
    const { domain, kind, contentType, size, totalSize, batchCount } = dto;

    // batchCount는 현재 서버 검증에 사용하지 않지만 Swagger/FE 참고용으로 DTO에 두었습니다.
    return this.awsS3.getPresignedPutUrl({
      domain,
      kind,
      contentType,
      size,
      totalSize,
      batchCount,
    });
  }
}
