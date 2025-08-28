import { Transform, TransformFnParams } from 'class-transformer';

/**
 * DTO의 문자열 속성을 bigint로 변환하는 커스텀 데코레이터입니다.
 * 값이 undefined, null인 경우 변환하지 않습니다.
 */
export function TransformToBigint(): (target: any, key: string) => void {
  return Transform(({ value }: TransformFnParams) => {
    // 값이 null 또는 undefined인 경우, 그대로 반환하여
    // @IsOptional 같은 다른 데코레이터가 제대로 동작하도록 합니다.
    if (value === null || value === undefined) {
      return value;
    }

    // BigInt로 변환 시도
    try {
      return BigInt(value);
    } catch (error) {
      // 변환에 실패할 경우 원래 값을 반환하여
      // @IsNumberString 같은 유효성 검사 데코레이터가 오류를 처리하도록 위임합니다.
      return value;
    }
  });
}
