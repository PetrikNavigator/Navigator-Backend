import { ArgumentMetadata, BadRequestException, Injectable, ValidationPipe } from "@nestjs/common";

const UNSIGNED_BIGINT_MAX = 18446744073709551615n;

@Injectable()
export class ParseBigIntPipe extends ValidationPipe {
    protected toValidate(metadata: ArgumentMetadata): boolean {
        if ((metadata.metatype as unknown) === BigInt) return false
        return super.toValidate(metadata)
    }

    transform(value: any, metadata: ArgumentMetadata): any {
        if (typeof value === 'bigint') {
            if (value < 0n || value > UNSIGNED_BIGINT_MAX) {
                throw new BadRequestException(`"${value}" is out of range for an unsigned BigInt`);
            }
            return value;
        }

        if ((metadata.metatype as unknown) === BigInt) {
            if (typeof value === 'string' && /^-?\d+$/.test(value.trim())) {
                let parsed: bigint;
                try {
                    parsed = BigInt(value.trim());
                } catch (e) {
                    throw new BadRequestException(`"${value}" is not a valid BigInt`);
                }
                if (parsed < 0n || parsed > UNSIGNED_BIGINT_MAX) {
                    throw new BadRequestException(`"${value}" is out of range for an unsigned BigInt`);
                }
                return parsed;
            }
            throw new BadRequestException(`"${value}" is not a valid BigInt`);
        }

        return super.transform(value, metadata);
    }
}
