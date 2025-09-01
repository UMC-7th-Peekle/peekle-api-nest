import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const corsOptions: CorsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:7777', 'https://peekle.kr'],
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'], // 허용할 HTTP 메서드
  // allowedHeaders: ["Content-Type", "Authorization"], // 허용할 헤더
  optionsSuccessStatus: 204, // Preflight 응답 상태 코드 (IE 호환성 이슈 방지)
};
