import { ApiProperty } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsNumber, ValidateNested } from 'class-validator';

export class SingleTermAgreeStateDto {
  @ApiProperty({
    description: '약관 ID (서버 → 클라이언트: JSON은 BigInt 그대로 직렬화 불가해서 string으로)',
  })
  termId!: string;

  @ApiProperty({
    description: '사용자가 해당 약관에 동의했는지 여부',
  })
  isAccepted!: boolean;
}

export class TermsHistoryItemDto {
  @ApiProperty({
    description: '약관 ID',
  })
  termId!: string;

  @ApiProperty({
    description: '약관 제목',
  })
  title!: string;

  @ApiProperty({
    description: '필수 약관 여부',
  })
  isRequired!: boolean;

  @ApiProperty({
    description: '사용자가 해당 약관에 동의했는지 여부',
  })
  isAccepted!: boolean;
}

export class GetTermsHistoryResponseDto {
  @ApiProperty({
    description: '약관 동의 이력 목록',
    type: [TermsHistoryItemDto],
  })
  items!: TermsHistoryItemDto[];
}

export class UpdateTermsAgreementItemDto {
  @IsNumber()
  @ApiProperty({
    description: '약관 ID',
    example: 1,
  })
  termId!: number;

  @IsBoolean()
  @ApiProperty({
    description: '동의 여부',
    example: true,
  })
  isAccepted!: boolean;
}

export class UpdateTermsAgreementRequestDto {
  @IsArray()
  @ValidateNested({ each: true }) // 배열의 각 요소도 DTO 구조에 맞게 유효성 검사 수행 (글로벌 ValidationPipe({ transform: true })여야 가능)
  @Type(() => UpdateTermsAgreementItemDto) // 검증을 위해 plain JSON 객체를 DTO 인스턴스로 변환
  @ApiProperty({
    description: '업데이트할 약관 동의 정보 배열',
    type: [UpdateTermsAgreementItemDto],
  })
  updates!: UpdateTermsAgreementItemDto[];
}
