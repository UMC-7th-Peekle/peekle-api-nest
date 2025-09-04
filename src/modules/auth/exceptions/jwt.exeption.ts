import { HttpException, HttpStatus } from '@nestjs/common';

export class JwtTokenExpiredException extends HttpException {
  constructor() {
    super(
      {
        message: `JWT 토큰이 만료되었습니다.`, // 로깅이나 클라이언트 분기 처리에 사용할 추가 데이터
        errorCode: 'AUTH_0001',
      },
      HttpStatus.UNAUTHORIZED, // 400
    );
  }
}
export class JwtTokenInvalidException extends HttpException {
  constructor() {
    super(
      {
        message: `유효하지 않은 JWT 토큰입니다.`, // 로깅이나 클라이언트 분기 처리에 사용할 추가 데이터
        errorCode: 'AUTH_0002',
      },
      HttpStatus.UNAUTHORIZED, // 400
    );
  }
}

export class JwtTokenNotActivatedException extends HttpException {
  constructor() {
    super(
      {
        message: `JWT 토큰이 아직 활성화되지 않았습니다`, // 로깅이나 클라이언트 분기 처리에 사용할 추가 데이터
        errorCode: 'AUTH_0003',
      },
      HttpStatus.UNAUTHORIZED, // 400
    );
  }
}
export class NoJwtTokenException extends HttpException {
  constructor() {
    super(
      {
        message: `JWT 토큰이 존재하지 않습니다.`, // 로깅이나 클라이언트 분기 처리에 사용할 추가 데이터
        errorCode: 'AUTH_0004',
      },
      HttpStatus.UNAUTHORIZED, // 400
    );
  }
}

export class JwtSecretLeakException extends HttpException {
  constructor() {
    super(
      {
        message: `FATAL ERROR: JWT SECRET LEAK`, // 로깅이나 클라이언트 분기 처리에 사용할 추가 데이터
        errorCode: 'AUTH_FATAL',
      },
      HttpStatus.UNAUTHORIZED, // 400
    );
  }
}
