import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: "isUtf8", async: false })
export class IsUtf8Constraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): boolean {
        if (typeof value !== "string") return false

        try {
            return Buffer.from(value, "utf8").toString("utf8") === value
        } catch {
            return false
        }
    }

    defaultMessage(args: ValidationArguments): string {
        return `${args.property} must be a valid UTF-8 string`
    }
}