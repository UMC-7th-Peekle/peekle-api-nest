import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

import { Request, Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status: number;
    let message: string | object;

    if (exception instanceof HttpException) {
      console.log(exception);
      // 1. HttpException인 경우
      status = exception.getStatus();
      const errorResponse = exception.getResponse();

      message =
        typeof errorResponse === 'object' && errorResponse !== null
          ? // Object일 경우 message / meesage가 없으면 그냥 객체 그 자체 반환
            (errorResponse as any).message || errorResponse
          : // string 일 경우 그대로 반환
            errorResponse;

      this.logger.error(
        `[${request.method} ${request.url}] - Status: ${status} - Message: ${JSON.stringify(message)}`,
        exception.stack,
      );
    } else {
      // 2. 그 외 모든 알 수 없는 에러인 경우
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = '서버 내부 오류가 발생했습니다. 관리자에게 문의하세요.';

      this.logger.error(
        `[${request.method} ${request.url}] - Unhandled Exception`,
        exception instanceof Error ? exception.stack : JSON.stringify(exception),
      );
    }

    // 응답이 전송되지 않은 경우에만 Response 전송
    if (!response.headersSent) {
      response.status(status).json({
        status: false,
        statusCode: status.toString(),
        message,
        data: `REQUEST URL : ${request.url}`,
      });
    }
  }
}
