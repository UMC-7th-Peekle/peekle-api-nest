import { ApiProperty } from '@nestjs/swagger';

/**
 * GetMeResponseDto (Response DTO)
 * - 서버 → 클라이언트 응답을 내보낼 때 사용
 * - 이 값들은 이미 서버(우리 코드)에서 DB → 서비스 → DTO 변환을 거쳐 나온 값이므로,
 *   다시 유효성 검증을 할 필요가 없어서 @IsString(), 등으로 검증하지 않음
 */

export class GetMeResponseDto {
  @ApiProperty({
    description: '사용자 ID (서버 → 클라이언트: JSON은 BigInt 그대로 직렬화 불가해서 string으로)',
  })
  id!: string;

  @ApiProperty({
    description: '사용자 이름',
  })
  name?: string | null;

  @ApiProperty({
    description: '사용자 닉네임',
  })
  nickname!: string;

  @ApiProperty({
    description: '사용자 생년월일 (DB DATE → YYYY-MM-DD 문자열)',
    required: false,
    format: 'date',
  })
  birthdate?: string;

  @ApiProperty({
    description: '사용자 성별',
    required: false,
  })
  gender?: string;

  @ApiProperty({
    description: '사용자 전화번호',
    required: false,
  })
  phoneNumber?: string;

  @ApiProperty({
    description: '사용자 프로필 이미지 URL',
    required: false,
  })
  profileImage?: string;

  @ApiProperty({
    description: '사용자 역할 (예: admin, user)',
  })
  role!: string;

  @ApiProperty({
    description: '계정 생성 일시 (DB TIMESTAMP(6) → ISO8601 문자열)',
    format: 'date-time',
    example: '2025-08-21T04:12:33.123Z',
  })
  createdAt!: string;

  @ApiProperty({
    description: '계정 수정 일시 (DB TIMESTAMP(6) → ISO8601 문자열)',
    format: 'date-time',
    example: '2025-08-21T05:10:01.987Z',
  })
  updatedAt!: string;
}
