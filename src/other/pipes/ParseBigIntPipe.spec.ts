import { ArgumentMetadata, BadRequestException } from '@nestjs/common'
import { IsString } from 'class-validator'
import { ParseBigIntPipe } from './ParseBigIntPipe'

const pipe = new ParseBigIntPipe({ transform: true })
const meta = (mt: any = BigInt, type: ArgumentMetadata['type'] = 'param'): ArgumentMetadata => ({
    type,
    metatype: mt,
    data: 'id',
})

describe('ParseBigIntPipe', () => {
    it('parses a numeric string into a BigInt', () => {
        expect(pipe.transform('42', meta())).toBe(42n)
    })

    it('passes through an already-bigint value', () => {
        expect(pipe.transform(99n, meta())).toBe(99n)
    })

    it('rejects negative bigint values', () => {
        expect(() => pipe.transform(-1n, meta())).toThrow(BadRequestException)
    })

    it('rejects bigint above 2^64 - 1', () => {
        const tooBig = 18446744073709551616n
        expect(() => pipe.transform(tooBig, meta())).toThrow(BadRequestException)
    })

    it('rejects non-numeric strings', () => {
        expect(() => pipe.transform('abc', meta())).toThrow(BadRequestException)
    })

    it('rejects negative numeric strings', () => {
        // Negative strings don't match the /^-?\d+$/ test? Actually the regex is /^-?\d+$/, so -5 matches…
        // …but BigInt('-5') < 0n -> BadRequestException via range check.
        expect(() => pipe.transform('-5', meta())).toThrow(BadRequestException)
    })

    it('trims surrounding whitespace before parsing', () => {
        expect(pipe.transform('  7  ', meta())).toBe(7n)
    })

    it('delegates non-BigInt metatypes to the parent ValidationPipe', async () => {
        class Body {
            @IsString()
            x: string
        }

        // string with @IsString passes
        await expect(
            pipe.transform({ x: 'hi' }, meta(Body, 'body')),
        ).resolves.toMatchObject({ x: 'hi' })

        // non-string fails validation
        await expect(
            pipe.transform({ x: 123 }, meta(Body, 'body')),
        ).rejects.toBeInstanceOf(BadRequestException)
    })
})
