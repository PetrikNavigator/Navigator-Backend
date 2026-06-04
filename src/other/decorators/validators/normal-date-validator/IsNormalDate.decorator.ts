import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsNormalDateConstraint } from './IsNormalDate.validator';

export function IsNormalDate(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string | symbol) {
        registerDecorator({
            name: 'isNormalDateOnly',
            target: object.constructor,
            propertyName: propertyName.toString(),
            options: validationOptions,
            validator: IsNormalDateConstraint,
        })
    }
}