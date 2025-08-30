import { AsyncLocalStorage } from 'async_hooks';

/**
 * Request 마다 가지고 있는 Context를 가지고 있는 Class 입니다.
 *
 * 현재는 traceId를 관리하는 용도로 사용합니다.
 */
export class RequestContext {
  private static readonly als = new AsyncLocalStorage<RequestContext>();

  public readonly traceId: string;

  constructor(traceId: string) {
    this.traceId = traceId;
  }

  public static get current(): RequestContext | undefined {
    const context = this.als.getStore();
    // 컨텍스트가 존재하지 않을 때 에러를 발생시켜 문제를 조기에 발견
    // if (context === undefined) {
    //   throw new Error('RequestContext NOT AVAILABLE in the current async scope.');
    // }

    return context;
  }

  public static run(context: RequestContext, fn: () => any): any {
    return this.als.run(context, fn);
  }
}

// DI를 위한 토큰(심볼) 정의
export const ALS = Symbol('AsyncLocalStorage');

// AsyncLocalStorage의 타입 정의 (선택적이지만 권장)
export type AlsInstance = AsyncLocalStorage<RequestContext>;
