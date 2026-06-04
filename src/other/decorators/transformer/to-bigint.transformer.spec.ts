import 'reflect-metadata'
import { plainToInstance } from 'class-transformer'
import { ToBigInt } from './to-bigint.transformer'

class Wrapper {
    @ToBigInt()
    id: any
}

function transform(value: any): any {
    return plainToInstance(Wrapper, { id: value }).id
}

describe('ToBigInt transformer', () => {
    it('keeps existing bigint as-is', () => {
        expect(transform(7n)).toBe(7n)
    })
    it('parses numeric strings to bigint', () => {
        expect(transform('42')).toBe(42n)
    })
    it('returns null/undefined unchanged', () => {
        expect(transform(null)).toBeNull()
        expect(transform(undefined)).toBeUndefined()
    })
    it('passes through non-matching values for downstream validators to reject', () => {
        expect(transform('not-a-number')).toBe('not-a-number')
        expect(transform(3.14)).toBe(3.14)
        expect(transform({})).toEqual({})
    })
    it('trims surrounding whitespace before parsing', () => {
        expect(transform('  9  ')).toBe(9n)
    })
    it('throws when value exceeds unsigned 64-bit range', () => {
        const tooBig = '18446744073709551616'
        expect(() => transform(tooBig)).toThrow('BigInt out of range')
    })
})
