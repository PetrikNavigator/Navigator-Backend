import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'isNormalDateOnly', async: false })
export class IsNormalDateConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): boolean {
        const date = value instanceof Date ? value : new Date(value)

        console.log(date.toLocaleDateString())

        return !isNaN(date.getTime())
    }

    defaultMessage(args: ValidationArguments): string {
        return `${args.property} must be a valid date in YYYY-MM-DD format`
    }
}