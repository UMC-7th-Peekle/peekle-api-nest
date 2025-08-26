import { BadRequestException, ExecutionContext, createParamDecorator } from '@nestjs/common';

/**
 * @UserId()
 * - 컨트롤러 파라미터에 userId(bigint)를 자동 주입하는 커스텀 데코레이터
 * - 현재는 헤더 `x-mock-user-id` 값을 BigInt로 변환하여 반환
 * - 추후 Auth 파트 하면서 JWT 인증 도입 시 req.user.id로 교체 예정
 */
export const UserId = createParamDecorator(
  (_: unknown, executionContext: ExecutionContext): bigint => {
    // 현재 실행 컨텍스트에서 HTTP 요청 객체 추출
    const req = executionContext.switchToHttp().getRequest();

    const rawUserId = req.headers['x-mock-user-id'] as string | undefined;

    // 헤더가 없을 경우: 일단 기본값 BigInt 1을 반환하도록 설정, 추후에는 UnauthorizedException으로 처리할 듯
    if (!rawUserId) return 1n;

    try {
      return BigInt(rawUserId); // 문자열을 BigInt로 변환
    } catch {
      throw new BadRequestException('유효하지 않은 사용자 ID 헤더입니다.');
    }
  },
);
