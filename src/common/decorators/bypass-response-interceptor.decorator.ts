// src/common/decorators/bypass-response-interceptor.decorator.ts
import { SetMetadata } from '@nestjs/common';

export const BYPASS_RESPONSE_INTERCEPTOR = 'bypassResponseInterceptor';

export const BypassResponseInterceptor = () => SetMetadata(BYPASS_RESPONSE_INTERCEPTOR, true);
