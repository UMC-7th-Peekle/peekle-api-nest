import { ApiProperty } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { IsArray, IsDate, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

import { SingleTermAgreeStateDto } from '@modules/users/dto/terms.dto';

/**
 * CreateUserRequestDto (Request DTO)
 * - 클라이언트 → 서버 요청을 받을 때 사용
 * - 사용자가 보내는 JSON 바디를 런타임에서 유효성 검사해야 함
 * - 따라서 @IsString(), @IsDateString(), @IsNotEmpty() 같은 데코레이터를 붙여서
 *   들어오는 값이 의도한 타입/형식인지 검증하는 게 필수
 */

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

  @ApiProperty({
    description: '약관 동의 상태',
    type: () => SingleTermAgreeStateDto,
  })
  @ValidateNested()
  @Type(() => SingleTermAgreeStateDto)
  @IsNotEmpty()
  terms!: SingleTermAgreeStateDto;
}

export class CreateUserResponseDto {}

export class CreateOAuthUserRequestDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '사용자 닉네임',
  })
  nickname!: string;

  @ApiProperty({
    description: '약관 동의 상태',
    type: () => SingleTermAgreeStateDto,
    isArray: true,
  })
  @ValidateNested({ each: true })
  @Type(() => SingleTermAgreeStateDto)
  @IsArray()
  terms!: SingleTermAgreeStateDto[];
}

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
