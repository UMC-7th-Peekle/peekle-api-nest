import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCommunityDto {
  @ApiProperty({
    example: '코딩 커뮤니티',
    description: '커뮤니티 이름',
    maxLength: 100,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name!: string;
}
