import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ValidationOptions, registerDecorator } from 'class-validator';

@ValidatorConstraint({ name: 'isBigInt', async: false })
class IsBigIntConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    return typeof value === 'bigint';
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} must be a BigInt`;
  }
}

export function IsBigInt(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsBigIntConstraint,
    });
  };
}
