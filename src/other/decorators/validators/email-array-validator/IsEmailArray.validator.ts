import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
    isEmail,
} from 'class-validator';

@ValidatorConstraint({ name: "isEmailArray", async: false })
export class IsEmailArrayConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): boolean {
        if (!Array.isArray(value)) return false

        return value.every((item) => typeof item === "string" && isEmail(item))
    }

    defaultMessage(args: ValidationArguments): string {
        return `${args.property} must be an array of valid email addresses`
    }
}
