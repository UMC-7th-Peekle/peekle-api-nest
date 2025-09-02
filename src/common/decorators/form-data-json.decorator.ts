import { ExecutionContext, createParamDecorator } from '@nestjs/common';

/**
 * multipart/form-data 요청에서 JSON 문자열로 전송된 필드를 추출하는 커스텀 데코레이터.
 * @param fieldName - form-data에서 JSON 문자열을 담고 있는 필드의 이름.
 */
export const FormDataJson = createParamDecorator((fieldName: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const jsonString = request.body[fieldName];

  if (!jsonString) {
    // 필드가 존재하지 않을 경우를 대비한 방어 코드
    return null;
  }

  return jsonString;
});
