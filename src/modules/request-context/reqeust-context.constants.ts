import { AsyncLocalStorage } from 'async_hooks';

/**
 * Request 마다 가지고 있는 Context를 가지고 있는 Class 입니다.
 *
 * 현재는 traceId를 관리하는 용도로 사용합니다.
 */
export class RequestContext {
  public readonly traceId: string;

  constructor(traceId: string) {
    this.traceId = traceId;
  }
}

// DI를 위한 토큰(심볼) 정의
export const ALS = Symbol('AsyncLocalStorage');

// AsyncLocalStorage의 타입 정의 (선택적이지만 권장)
export type AlsInstance = AsyncLocalStorage<RequestContext>;
