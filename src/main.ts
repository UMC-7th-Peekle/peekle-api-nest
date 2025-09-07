import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { CookieName } from '@common/constants/cookie.constants';

import { AppModule } from '@modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    // logger: WinstonModule.createLogger(winstonLoggerOptions),
  });

  app.enableVersioning({
    type: VersioningType.URI,
  });

  // DocumentBuilder를 이용해 Swagger 문서 기본 정보 구성
  const config = new DocumentBuilder()
    .setTitle('Peekle Nest API Documentation')
    .setDescription('Team Peekle Backend의 API 문서입니다. 야호!')
    .setVersion('0.1.0')
    .addBearerAuth()
    .addCookieAuth(CookieName.ACCESS_TOKEN)
    .addServer('http://localhost:7777', 'Local server')
    .addServer('https://api.peekle.kr', 'Development server')
    .setLicense('MIT', 'https://opensource.org/license/mit/')
    .build();

  // 설정을 바탕으로 문서 생성
  const document = SwaggerModule.createDocument(app, config);

  // Swagger UI 경로 지정, 예: /api-docs
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  // PIPE, INTERCEPTOR, FILTER 모두 app.module.ts 로 이동되었습니다. Nest.js에서 권장되는 구조를 따라 봅시다!

  await app.listen(process.env.PORT ?? 7777);
}

bootstrap().then(() => {
  console.log(
    `🚀 NEST.JS SERVER RUNNING!\n` +
      `──────────────────────────────\n` +
      `📦 PORT      : ${process.env.PORT ?? '[ENV에 PORT 미설정]'}\n` +
      `🌱 NODE_ENV  : ${process.env.NODE_ENV ?? '[ENV에 NODE_ENV 미설정]'}\n` +
      `──────────────────────────────`,
  );
});
