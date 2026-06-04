import { IsBigIntConstraint, isUnsignedBigIntValue } from './IsBigInt.validator'

describe('isUnsignedBigIntValue', () => {
    it('accepts non-negative bigints', () => {
        expect(isUnsignedBigIntValue(0n)).toBe(true)
        expect(isUnsignedBigIntValue(123456789012345678901234567890n)).toBe(false) // beyond 2^64-1
        expect(isUnsignedBigIntValue(18446744073709551615n)).toBe(true)
    })

    it('rejects negative bigints', () => {
        expect(isUnsignedBigIntValue(-1n)).toBe(false)
    })

    it('accepts non-negative integers', () => {
        expect(isUnsignedBigIntValue(0)).toBe(true)
        expect(isUnsignedBigIntValue(42)).toBe(true)
    })

    it('rejects negative numbers', () => {
        expect(isUnsignedBigIntValue(-5)).toBe(false)
    })

    it('rejects floats', () => {
        expect(isUnsignedBigIntValue(1.5)).toBe(false)
    })

    it('accepts numeric strings', () => {
        expect(isUnsignedBigIntValue('123')).toBe(true)
    })

    it('rejects non-numeric strings', () => {
        expect(isUnsignedBigIntValue('abc')).toBe(false)
        expect(isUnsignedBigIntValue('1.5')).toBe(false)
        expect(isUnsignedBigIntValue('-1')).toBe(false)
    })

    it('rejects other types', () => {
        expect(isUnsignedBigIntValue(null)).toBe(false)
        expect(isUnsignedBigIntValue(undefined)).toBe(false)
        expect(isUnsignedBigIntValue({})).toBe(false)
        expect(isUnsignedBigIntValue([])).toBe(false)
    })
})

describe('IsBigIntConstraint', () => {
    const c = new IsBigIntConstraint()

    it('validate delegates to isUnsignedBigIntValue', () => {
        expect(c.validate('1', {} as any)).toBe(true)
        expect(c.validate('x', {} as any)).toBe(false)
    })

    it('defaultMessage mentions the property name', () => {
        expect(c.defaultMessage({ property: 'foo' } as any)).toContain('foo')
    })
})
