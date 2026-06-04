import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsBigIntConstraint } from './IsBigInt.validator';

export function IsBigInt(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string | symbol) {
        registerDecorator({
            name: "isBigInt",
            target: object.constructor,
            propertyName: propertyName.toString(),
            options: validationOptions,
            validator: IsBigIntConstraint,
        })
    }
}