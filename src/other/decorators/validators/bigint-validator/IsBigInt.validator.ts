import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
} from 'class-validator';

const UNSIGNED_BIGINT_MAX = 18446744073709551615n;

export function isUnsignedBigIntValue(value: unknown): boolean {
    if (typeof value === "bigint") {
        return value >= 0n && value <= UNSIGNED_BIGINT_MAX
    }

    if (typeof value === "number") {
        if (!Number.isInteger(value)) return false
        if (value < 0) return false
        return true
    }

    if (typeof value === "string" && /^\d+$/.test(value.trim())) {
        try {
            const parsed = BigInt(value.trim())
            return parsed >= 0n && parsed <= UNSIGNED_BIGINT_MAX
        } catch {
            return false
        }
    }

    return false
}

@ValidatorConstraint({ name: "isBigInt", async: false })
export class IsBigIntConstraint implements ValidatorConstraintInterface {
    validate(value: unknown, _args: ValidationArguments): boolean {
        return isUnsignedBigIntValue(value)
    }

    defaultMessage(args: ValidationArguments): string {
        return `${args.property} must be an unsigned BigInt in range [0, 2^64 - 1]`
    }
}
