import { ApiProperty } from '@nestjs/swagger';

import { Transform } from 'class-transformer';
import { IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdateProfileImageRequestDto {
  @ApiProperty({
    description: '새 프로필 이미지 URL. null이면 삭제로 처리',
    required: false,
    nullable: true,
  })
  @Transform(({ value }) => (value === null ? null : value))
  @IsOptional() // undefined는 검증 제외
  @IsString()
  @IsUrl({}, { message: '유효한 URL이어야 합니다.' })
  profileImage?: string | null;
}

export class UpdateProfileImageResponseDto {
  @ApiProperty({ example: '프로필 이미지가 업데이트되었습니다.' })
  message!: string;
}
