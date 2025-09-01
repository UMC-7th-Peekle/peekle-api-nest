import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { BYPASS_RESPONSE_INTERCEPTOR } from '@common/decorators/bypass-response-interceptor.decorator';
import { RESPONSE_MESSAGE_METADATA } from '@common/decorators/response-message-decorator';

export type Response<T> = {
  status: boolean;
  statusCode: number;
  message: string;
  data: T;
};

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  constructor(private readonly reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    const bypass = this.reflector.get<boolean>(BYPASS_RESPONSE_INTERCEPTOR, context.getHandler());

    // 👇 bypass 데코레이터가 있으면, map을 적용하지 않고 그대로 반환
    if (bypass) {
      return next.handle();
    }

    return next.handle().pipe(
      map((res: any) => this.responseHandler(res, context)),
      catchError((err: unknown) => {
        if (err instanceof HttpException) {
          if (!err.getResponse()) {
            return throwError(() => this.errorHandler(err, context));
          }
        }
        return throwError(() => err);
      }),
    );
  }

  responseHandler(res: any, context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const statusCode = response.statusCode;

    const message =
      this.reflector.get<string>(RESPONSE_MESSAGE_METADATA, context.getHandler()) ||
      '요청이 성공했습니다.';

    return {
      status: true,
      statusCode,
      message,
      data: res,
    };
  }

  errorHandler(exception: HttpException, context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus() ?? HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      status: false,
      statusCode: status,
      message: exception.message,
      data: exception,
    });
  }
}
