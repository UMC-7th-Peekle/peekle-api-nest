import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { GlobalExceptionFilter } from '@common/filters/http-exception.filter';
import { ResponseInterceptor } from '@common/interceptors/response.interceptor';

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
      transform: true,
      // DTO에 정의되지 않은 속성은 자동으로 제거합니다.
      whitelist: true,
      // DTO에 정의되지 않은 속성이 들어오면 에러를 발생시킵니다.
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalInterceptors(app.get(ResponseInterceptor));

  // console.log(`[App Start] Current NODE_ENV: ${JSON.stringify(process.env, null, 2)}`);

  await app.listen(process.env.PORT ?? 7777, () => {
    console.log(
      `🚀 NEST.JS RUNNING IN PORT ${process.env.PORT ?? '[UNDEFINED IN ENV]'}, NODE_ENV=${process.env.NODE_ENV}`,
    );
  });
}

bootstrap();
