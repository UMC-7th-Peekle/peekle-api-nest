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
    return next.handle().pipe(
      map((res: unknown) => this.responseHandler(res, context)),
      catchError((err: HttpException) => {
        if (!err.getResponse()) {
          return throwError(() => this.errorHandler(err, context));
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
      message,
      statusCode,
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
