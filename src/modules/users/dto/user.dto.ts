import { ApiProperty } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserRequestDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '사용자 이름',
  })
  name!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '사용자 닉네임',
  })
  nickname!: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  @ApiProperty({
    description: '사용자 생년월일',
  })
  birthdate!: Date;

  @IsString()
  @ApiProperty({
    description: '사용자 성별',
  })
  gender?: string;

  @IsString()
  @ApiProperty({
    description: '사용자 전화번호',
  })
  phoneNumber?: string;

  @IsString()
  @ApiProperty({
    description: '사용자 프로필 이미지',
  })
  profileImage?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '관리자 여부',
  })
  role!: string;
}

export class CreateUserResponseDto {}

export class LoginRequestDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '사용자 이름',
  })
  name!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '사용자 닉네임',
  })
  nickname!: string;
}
