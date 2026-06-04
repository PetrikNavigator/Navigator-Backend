import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
} from 'class-validator';
import { isUnsignedBigIntValue } from '../bigint-validator/IsBigInt.validator';

@ValidatorConstraint({ name: "isBigIntArray", async: false })
export class IsBigIntArrayConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): boolean {
        if (!Array.isArray(value)) return false;

        return value.every(isUnsignedBigIntValue);
    }

    defaultMessage(args: ValidationArguments): string {
        return `${args.property} must be an array of unsigned BigInts in range [0, 2^64 - 1]`;
    }
}