import { Inject, Injectable, Scope } from '@nestjs/common';

import {
  ALS,
  AlsInstance,
  RequestContext,
} from '@modules/request-context/reqeust-context.constants';

// 요청 스코프의 프로바이더로 컨텍스트를 제공
@Injectable({ scope: Scope.REQUEST })
export class RequestContextProvider {
  constructor(@Inject(ALS) private readonly als: AlsInstance) {}

  get context(): RequestContext {
    const context = this.als.getStore();

    // 컨텍스트가 존재하지 않을 때 에러를 발생시켜 문제를 조기에 발견
    if (context === undefined) {
      throw new Error('RequestContext NOT AVAILABLE in the current async scope.');
    }

    return context;
  }
}
