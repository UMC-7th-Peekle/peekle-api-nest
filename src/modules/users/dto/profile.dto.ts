import { ApiProperty } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { IsArray, IsInt, IsString, IsUrl, ValidateNested } from 'class-validator';

export interface ProfileImageData {
  imageUrl: string;
  order: number;
}

export class UpdateProfileImageRequestDto {
  @ApiProperty({
    description: '프로필 이미지 배열',
    type: [Object],
    example: [
      { imageUrl: 'https://cdn.peekle.kr/profile/example1.png', order: 1 },
      { imageUrl: 'https://cdn.peekle.kr/profile/example2.png', order: 2 },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProfileImageItem)
  profileImages!: ProfileImageItem[];
}

export class ProfileImageItem {
  @ApiProperty({
    description: '프로필 이미지 URL',
    example: 'https://cdn.peekle.kr/profile/example.png',
  })
  @IsString()
  @IsUrl({}, { message: '유효한 URL이어야 합니다.' })
  imageUrl!: string;

  @ApiProperty({
    description: '이미지 순서',
    example: 1,
  })
  @IsInt()
  order!: number;
}

export class UpdateProfileImageResponseDto {
  @ApiProperty({ example: '프로필 이미지가 업데이트되었습니다.' })
  message!: string;
}
