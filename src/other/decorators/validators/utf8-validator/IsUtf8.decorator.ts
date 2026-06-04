import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsUtf8Constraint } from './IsUtf8.validator';

/** 
 * Checks if the string is a valid utf-8 string.
 */
export function IsUtf8(validationOptions?: ValidationOptions): PropertyDecorator {
    return function (object: Object, propertyName: string | symbol) {
        registerDecorator({
            name: "isUtf8",
            target: object.constructor,
            propertyName: propertyName.toString(),
            options: validationOptions,
            validator: IsUtf8Constraint,
        })
    }
}