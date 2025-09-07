import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Inject,
  Logger,
  LoggerService,
} from '@nestjs/common';

import { Request, Response } from 'express';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { LOG_LEVELS } from '@common/constants/log-levels.constants';
import { inspectObject } from '@common/utils/inspect-object.utils';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(@Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status: number;
    let statusCode: string;
    let message: string | object;

    if (exception instanceof HttpException) {
      // this.logger.log(LOG_LEVELS.VERBOSE, exception);
      // 1. HttpException인 경우
      const errorResponse = exception.getResponse();

      status = exception.getStatus();
      statusCode = (errorResponse as any).errorCode ?? status.toString();

      // errorResponse가 string | object | any 형태로 올 수 있어서 분기 처리

      message =
        typeof errorResponse === 'object' && errorResponse !== null
          ? // Object일 경우 message / meesage가 없으면 그냥 객체 그 자체 반환
            (errorResponse as any).message || errorResponse
          : // string 일 경우 그대로 반환
            errorResponse;

      const logPayload = {
        // 1. 타임스탬프와 추적 ID 추가
        // timestamp: new Date().toISOString(),
        context: this.constructor.name,

        // 2. 에러 정보 구조화
        message: message,
        error: {
          name: exception.constructor.name,
          status: status,
          statusCode: statusCode,
          stack: exception.stack ?? undefined,
        },

        // 3. 요청 정보 상세화
        request: {
          method: request.method,
          url: request.originalUrl,
          ip: request.ip,
          userAgent: request.headers['user-agent'],
          referer: request.headers['referer'] || request.headers['referrer'],
        },
      };

      //   this.logger.log(
      //     LOG_LEVELS.VERBOSE,
      //     `[${request.method} ${request.url} ${status}]\nStack Trace: ${exception.stack}`,
      // );
      // this.logger.log(LOG_LEVELS.VERBOSE, logPayload);
      this.logger.log(logPayload);
    } else {
      // 2. 그 외 모든 알 수 없는 에러인 경우
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      statusCode = 'COMMON_0001'; // 공통_0001: 알 수 없는 서버 오류
      message = '서버 내부 오류가 발생했습니다. 관리자에게 문의하세요.';

      this.logger.log(
        LOG_LEVELS.ERROR,
        `[${request.method} ${request.url}] - Unhandled Exception - ${inspectObject(exception)}`,
        // exception instanceof Error ? exception.stack : JSON.stringify(exception),
      );
    }

    // 응답이 전송되지 않은 경우에만 Response 전송
    if (!response.headersSent) {
      response.status(status).json({
        status: false,
        statusCode: statusCode,
        message,
        data: `REQUEST URL : ${request.url}`,
        // traceId: response.traceId,
      });
    }
  }
}
