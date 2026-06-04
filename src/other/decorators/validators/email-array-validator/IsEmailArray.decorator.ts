import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsEmailArrayConstraint } from './IsEmailArray.validator';

export function IsEmailArray(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string | symbol) {
        registerDecorator({
            name: 'isEmailArray',
            target: object.constructor,
            propertyName: propertyName.toString(),
            options: validationOptions,
            validator: IsEmailArrayConstraint,
        })
    }
}