import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JsonWebTokenError, TokenExpiredError } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class RegisterJwtGuard extends AuthGuard('register-jwt') {
  handleRequest(err, user, info: Error, context: ExecutionContext) {
    // 👇 여기서 실패 동작을 커스터마이징합니다.
    if (err || !user) {
      // 'info' 객체를 분석하여 실패 원인에 따라 다른 에러를 던질 수 있습니다.
      if (info instanceof TokenExpiredError) {
        // 1. 토큰이 만료된 경우
        throw new UnauthorizedException('토큰이 만료되었습니다.');
      }

      if (info instanceof JsonWebTokenError) {
        console.log(info.message);
        // 2. 토큰 서명이 유효하지 않거나 형식이 잘못된 경우
        throw new UnauthorizedException('유효하지 않은 토큰입니다.');
      }

      // 3. 그 외의 모든 인증 실패 (예: 헤더에 토큰이 없는 경우)
      throw new UnauthorizedException(info?.message || '인증에 실패했습니다.');
    }

    // 인증에 성공하면 user 객체를 반환합니다.
    return user;
  }
}
