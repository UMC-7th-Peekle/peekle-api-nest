import { ExecutionContext, Inject, Injectable, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JsonWebTokenError, NotBeforeError, TokenExpiredError } from '@nestjs/jwt';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Observable } from 'rxjs';

import { LOG_LEVELS } from '@common/constants/log-levels.constants';
import { inspectObject } from '@common/utils/inspect-object.utils';

import { IS_PUBLIC_KEY } from '@modules/auth/decorators/public.decorator';
import {
  JwtSecretLeakException,
  JwtTokenExpiredException,
  JwtTokenInvalidException,
  JwtTokenNotActivatedException,
} from '@modules/auth/exceptions/jwt.exeption';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private reflector: Reflector,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private readonly jwtService: JwtService,
  ) {
    super();
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const request = context.switchToHttp().getRequest();

    // Public 라우트지만 Authorization 헤더가 있으면, user를 채워줌(이벤트 목록 API에서 찜한 이벤트 표시용)
    if (isPublic) {
      const authHeader = request.headers['authorization'];

      // Bearer 토큰이 포함된 경우만 처리
      if (authHeader?.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        try {
          const payload = this.jwtService.verify(token); // JWT 토큰 검증 및 payload 추출
          request.user = { userId: BigInt(payload.sub || payload.userId) }; // 토큰 payload에서 사용자 ID를 추출하여 request.user에 저장
          console.log('[JwtAuthGuard] user set:', request.user);
        } catch (e) {
          const err = e as Error;
          console.log('[JwtAuthGuard] invalid token:', err.message);
        }
      } else {
        console.log('[JwtAuthGuard] no authorization header');
      }

      // Public 라우트이므로 토큰 검증 실패 여부와 관계없이 항상 true 반환 (즉, 인증 실패해도 요청은 통과함)
      return true;
    }

    return super.canActivate(context);
  }

  handleRequest(err, user, info: Error, context: ExecutionContext) {
    // info: 토큰 자체에 대한 정보(예: 만료, 형식 오류)
    // err: Strategy의 validate 메소드에서 발생시킨 에러
    // user: validate 메소드가 성공적으로 유저 객체를 반환했을 때의 값

    // 1. 토큰 자체의 에러 확인 (만료, 잘못된 형식 등)
    if (info instanceof JsonWebTokenError) {
      // 만료된 토큰인 경우
      if (info instanceof TokenExpiredError) {
        throw new JwtTokenExpiredException();
      }
      // 아직 활성화되지 않은 토큰인 경우
      else if (info instanceof NotBeforeError) {
        throw new JwtTokenNotActivatedException();
      }
      // 그 외 : 토큰 서명이 잘못되었거나 형식이 잘못된 경우
      throw new JwtTokenInvalidException();
    }

    // 2. Strategy의 validate 메소드에서 발생시킨 에러 확인
    if (err) {
      this.logger.log(LOG_LEVELS.ERROR, `JWT AUTH GUARD ERROR: ${inspectObject(err)}`);
      throw err; // validate에서 던진 커스텀 에러를 그대로 다시 던짐
    }

    // 3. 유저 정보가 없는 경우 (가장 일반적인 인증 실패)
    if (!user) {
      this.logger.log(LOG_LEVELS.ERROR, 'FATAL ERROR: JWT SECRET LEAK');
      throw new JwtSecretLeakException();
    }

    // 모든 검증을 통과하면 user 객체를 반환
    return user;
  }
}
