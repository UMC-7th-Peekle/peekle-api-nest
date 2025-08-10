import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from '@modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // DocumentBuilder를 이용해 Swagger 문서 기본 정보 구성
  const config = new DocumentBuilder()
    .setTitle('Peekle Nest API Documentation')
    .setDescription('야호')
    .setVersion('0.1.0')
    .addBearerAuth() // JWT 인증 등도 설정 가능
    .build();

  // 설정을 바탕으로 문서 생성
  const document = SwaggerModule.createDocument(app, config);

  // Swagger UI 경로 지정, 예: /api-docs
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 7777);
}

bootstrap();
