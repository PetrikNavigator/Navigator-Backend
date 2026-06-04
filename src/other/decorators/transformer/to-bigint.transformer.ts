import { Transform } from 'class-transformer';

const UNSIGNED_BIGINT_MAX = 18446744073709551615n;

/**
 * Parses a string number value to BigInt. 
 * If the given value is not a string returns the value.
 */
export function ToBigInt() {
    return Transform(({ value }) => {
        if (value === null || value === undefined) {
            return value
        }

        if (typeof value === "bigint") {
            return value
        }

        if (typeof value === "string" && /^\d+$/.test(value.trim())) {
            const parsed = BigInt(value.trim())

            if (parsed < 0n || parsed > UNSIGNED_BIGINT_MAX) {
                throw new Error("BigInt out of range")
            }

            return parsed
        }

        return value
    })
}