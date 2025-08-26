import { ApiProperty } from '@nestjs/swagger';

import { Transform } from 'class-transformer';
import { IsString, Length, Matches } from 'class-validator';

// 허용 문자 셋: 숫자, 영문 대/소, 한글 자모(3131~318E) + 완성형(AC00~D7A3), 공백
const NICKNAME_CHARSET = /^[0-9A-Za-z\u3131-\u318E\uAC00-\uD7A3 ]+$/;

export class CheckNicknameQueryDto {
  @ApiProperty({
    description: '중복 확인할 닉네임 (앞/뒤 공백은 자동 제거, 중간 공백 허용, 1~10자)',
    maxLength: 10,
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) 
  @IsString()
  @Length(1, 10)
  @Matches(NICKNAME_CHARSET, {
    message: '닉네임은 한글(자모/완성형), 영문, 숫자, 공백만 사용할 수 있습니다.',
  })
  nickname!: string;
}

export class CheckNicknameResponseDto {
  @ApiProperty({ description: '사용 가능 여부', example: true })
  available!: boolean;
}

export class UpdateNicknameRequestDto {
  @ApiProperty({
    description: '변경할 닉네임 (앞/뒤 공백은 자동 제거, 중간 공백 허용, 1~10자)',
    maxLength: 10,
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @Length(1, 10)
  @Matches(NICKNAME_CHARSET, {
    message: '닉네임은 한글(자모/완성형), 영문, 숫자, 공백만 사용할 수 있습니다.',
  })
  nickname!: string;
}

export class UpdateNicknameResponseDto {
  @ApiProperty({ example: '닉네임이 변경되었습니다.' })
  message!: string;
}
