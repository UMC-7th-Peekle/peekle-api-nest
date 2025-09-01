import { Inject, Injectable, Logger, NestMiddleware } from '@nestjs/common';

import { NextFunction, Request, Response } from 'express';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

import { LOG_LEVELS } from '@common/constants/log-levels.constants';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // 다른 방법인데, 이렇게 하면 안되요
  // constructor(@Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService) {}
  // 이게 맞습니다. 어떤 Logger 객체를 사용하는지를 결정해주는데 우린 아래꺼로 통일 !
  constructor(@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {}

  use(req: Request, res: Response, next: NextFunction) {
    // 요청 객체로부터 ip, http method, url, user-agent를 받아온다.
    const { ip, method, originalUrl } = req;
    const userAgent = req.get('user-agent');
    const startTime = Date.now();

    // 응답이 끝났을 때의 이벤트 리스너를 등록한다.
    res.on('finish', () => {
      const { statusCode } = res;
      const duration = Date.now() - startTime;

      // 로그 메시지를 구조화하여 winston 로거로 기록한다.
      const message = `${method} ${originalUrl} ${statusCode} ${duration}ms - ${userAgent} ${ip}`;

      const meta = { context: LoggerMiddleware.name };

      if (statusCode >= 400) {
        // this.logger.debug('warn', message, meta);
        // this.logger.warn('warn', message, meta);
      } else {
        // this.logger.log(LOG_LEVELS.ERROR, message);
        // this.logger.log(LOG_LEVELS.WARN, message);
        this.logger.log(LOG_LEVELS.INFO, message);
        // this.logger.log(LOG_LEVELS.HTTP, message);
        // this.logger.log(LOG_LEVELS.VERBOSE, message);
        // this.logger.log(LOG_LEVELS.DEBUG, message);
        // this.logger.log(LOG_LEVELS.SILLY, message);
      }
    });

    next();
  }
}
