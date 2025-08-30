import { Global, Module } from '@nestjs/common';

import { AsyncLocalStorage } from 'async_hooks';

import { RequestContextProvider } from '@modules/request-context/context/request-context';
import { RequestContextMiddleware } from '@modules/request-context/middleware/request-context.middleware';
import { ALS, RequestContext } from '@modules/request-context/reqeust-context.constants';

const alsProvider = {
  provide: ALS,
  useValue: new AsyncLocalStorage<RequestContext>(),
};

@Global() // 모든 모듈에서 RequestContextProvider를 주입할 수 있도록 설정
@Module({
  providers: [alsProvider, RequestContextProvider, RequestContextMiddleware],
  exports: [RequestContextProvider, alsProvider],
})
export class AlsModule {}
