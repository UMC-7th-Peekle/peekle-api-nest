import { ApiProperty } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

import { TermsAgreeStateDto } from '@modules/users/dto/terms.dto';

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
    type: () => TermsAgreeStateDto,
  })
  @ValidateNested()
  @Type(() => TermsAgreeStateDto)
  @IsNotEmpty()
  terms!: TermsAgreeStateDto;
}

export class CreateUserResponseDto {}

export class CreateOAuthUserResponseDto extends CreateUserResponseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'OAuth Provider 입니다. 현재는 google/kakao 둘 중 하나 입니다.',
  })
  oauthProvider!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'OAuth Provider 측에서 제공하는 UserID 입니다.',
  })
  oauthId!: string;
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
