import {
  ArgumentMetadata,
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  PipeTransform,
} from '@nestjs/common';

import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { inspect } from 'node:util';

import { LOG_LEVELS } from '@common/constants/log-levels.constants';
import { inspectObject } from '@common/utils/inspect-object.utils';

@Injectable()
export class ParseJsonPipe implements PipeTransform {
  constructor(@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {}
  async transform(value: string, metadata: ArgumentMetadata) {
    // metadata.metatype에 DTO 클래스가 들어옵니다.
    const metatype = metadata.metatype;
    if (!metatype) {
      throw new InternalServerErrorException('메타타입이 정의되지 않았습니다.');
    }

    const object = JSON.parse(value);

    // DTO 인스턴스로 변환하고 검증합니다.
    const dtoInstance = plainToInstance(metatype, object);
    const errors = await validate(dtoInstance);

    this.logger.log(LOG_LEVELS.VERBOSE, `PARSE_JSON_PIPE: ${inspectObject(dtoInstance)}`);

    if (errors.length > 0) {
      throw new BadRequestException(`Validation failed: ${errors}`);
    }
    return dtoInstance;
  }
}
