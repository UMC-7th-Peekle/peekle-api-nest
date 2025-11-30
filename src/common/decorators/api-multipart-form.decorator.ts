import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { getSchemaPath } from '@nestjs/swagger';

/**
 * Swagger에서 여러 파일(배열)과 JSON 형태의 DTO를 함께 받기 위한 커스텀 데코레이터
 * @param fileField - FormData에서 파일을 담는 필드 이름 (예: 'images')
 * @param dto - 참조할 DTO 클래스
 * @param dtoField - FormData에서 JSON 문자열을 담는 필드 이름 (예: 'data')
 */
export function ApiMultiFileAndJson(fileField: string, dto: any, dtoField: string = 'data') {
  return applyDecorators(
    ApiConsumes('multipart/form-data'),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          [fileField]: {
            // 동적으로 파일 필드 이름 설정
            type: 'array',
            items: {
              type: 'string',
              format: 'binary',
            },
            description: `업로드할 파일들 (${fileField})`,
          },
          [dtoField]: {
            // 동적으로 DTO 필드 이름 설정
            $ref: getSchemaPath(dto),
            description: `데이터 (${dtoField}, JSON 문자열)`,
          },
        },
      },
    }),
  );
}
