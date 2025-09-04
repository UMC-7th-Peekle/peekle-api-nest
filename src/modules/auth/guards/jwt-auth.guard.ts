import {
  ExecutionContext,
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JsonWebTokenError, NotBeforeError, TokenExpiredError } from '@nestjs/jwt';
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
  NoJwtTokenException,
} from '@modules/auth/exceptions/jwt.exeption';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private reflector: Reflector,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {
    super();
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) return true;

    return super.canActivate(context);
  }

  handleRequest(err, user, info: Error, context: ExecutionContext) {
    // info: 토큰 자체에 대한 정보(예: 만료, 형식 오류)
    // err: Strategy의 validate 메소드에서 발생시킨 에러
    // user: validate 메소드가 성공적으로 유저 객체를 반환했을 때의 값

    // 1. 토큰 자체의 에러 확인 (만료, 잘못된 형식 등)
    if (info instanceof TokenExpiredError) {
      if (info.name === 'TokenExpiredError') {
        // 원하는 커스텀 에러 메시지나 코드로 예외를 발생시킵니다.
        throw new JwtTokenExpiredException();
      }
    } else if (info instanceof JsonWebTokenError) {
      // 토큰 서명이 잘못되었거나 형식이 잘못된 경우
      throw new JwtTokenInvalidException();
    } else if (info instanceof NotBeforeError) {
      throw new JwtTokenNotActivatedException();
    } else {
      this.logger.log(LOG_LEVELS.ERROR, inspectObject(info));
      throw new UnauthorizedException(info.message || 'UNAUTHORIZED');
    }

    // 2. Strategy의 validate 메소드에서 발생시킨 에러 확인
    if (err) {
      this.logger.log(LOG_LEVELS.ERROR, err);
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
