import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsBigIntArrayConstraint } from './IsBigIntArray.validator';

export function IsBigIntArray(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string | symbol) {
        registerDecorator({
            name: "isBigIntArray",
            target: object.constructor,
            propertyName: propertyName.toString(),
            options: validationOptions,
            validator: IsBigIntArrayConstraint,
        });
    };
}