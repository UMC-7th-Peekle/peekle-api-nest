import {
  BadRequestException,
  ExecutionContext,
  UnauthorizedException,
  createParamDecorator,
} from '@nestjs/common';

/**
 * @UserId()
 * - 컨트롤러 파라미터에 userId(bigint)를 자동 주입하는 커스텀 데코레이터
 * - JWT 인증 완료 후, req.user.userId 값을 BigInt로 변환하여 반환
 */
export const UserId = createParamDecorator((_: unknown, context: ExecutionContext): bigint => {
  const req = context.switchToHttp().getRequest();

  const userId = req.user?.userId;

  if (!userId) {
    throw new UnauthorizedException('사용자 인증이 필요합니다.');
  }

  try {
    return BigInt(userId);
  } catch {
    throw new BadRequestException('유효하지 않은 사용자 ID입니다.');
  }
});
