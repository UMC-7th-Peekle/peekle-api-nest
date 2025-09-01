import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  PipeTransform,
} from '@nestjs/common';

import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ParseJsonPipe implements PipeTransform {
  async transform(value: string, metadata: ArgumentMetadata) {
    // metadata.metatype에 DTO 클래스가 들어옵니다.
    const metatype = metadata.metatype;
    if (!metatype) {
      throw new InternalServerErrorException('메타타입이 정의되지 않았습니다.');
    }

    const object = JSON.parse(value);
    const dtoInstance = plainToInstance(metatype, object);
    const errors = await validate(dtoInstance);

    if (errors.length > 0) {
      throw new BadRequestException(`Validation failed: ${errors}`);
    }
    return dtoInstance;
  }
}
