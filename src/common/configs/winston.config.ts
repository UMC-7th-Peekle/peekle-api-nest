import { utilities } from 'nest-winston';
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

import { RequestContext } from '@common/context/reqeust.context';

const isProduction = process.env.NODE_ENV === 'production';

const formatMessage = winston.format((info) => {
  const requestContext = RequestContext.current;

  if (requestContext) {
    info.traceId = requestContext.traceId;
  }

  // info.level = info.level.toUpperCase();
  return info;
});

// 콘솔 로그 전송기(Transport) 설정
const consoleTransport = new winston.transports.Console({
  level: isProduction ? 'info' : 'silly',
  format: winston.format.combine(
    // winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    // formatMessage(),
    // winston.format.colorize({ all: true }),
    // winston.format.printf(
    //   (info) => `[${info.timestamp}] [${info.traceId || 'APP'}] ${info.level}: ${info.message}`,
    // ),
    utilities.format.nestLike('peekle', {
      prettyPrint: true,
      colors: true,
      processId: true,
      appName: true,
    }),
  ),
});

// 파일 로그(Daily Rotate) 전송기 설정

const dailyRotateFileTransport = new DailyRotateFile({
  level: 'info',
  dirname: 'logs',
  filename: '%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  format: winston.format.combine(
    winston.format.timestamp(),
    formatMessage(),
    winston.format.json(),
  ),
});

// nest-winston에서 사용할 설정 객체
export const winstonLoggerOptions: winston.LoggerOptions = {
  transports: [
    consoleTransport,
    // 프로덕션 환경일 때만 파일 로그를 추가합니다.
    dailyRotateFileTransport,
  ],
};
