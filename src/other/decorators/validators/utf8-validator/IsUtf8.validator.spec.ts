import { IsUtf8Constraint } from './IsUtf8.validator'

describe('IsUtf8Constraint', () => {
    const c = new IsUtf8Constraint()

    it('accepts ascii strings', () => {
        expect(c.validate('hello', {} as any)).toBe(true)
    })

    it('accepts unicode strings (Hungarian)', () => {
        expect(c.validate('árvíztűrő tükörfúrógép', {} as any)).toBe(true)
    })

    it('accepts emoji', () => {
        expect(c.validate('🎉🚀✨', {} as any)).toBe(true)
    })

    it('rejects non-string input', () => {
        expect(c.validate(123 as any, {} as any)).toBe(false)
        expect(c.validate(null as any, {} as any)).toBe(false)
        expect(c.validate(undefined as any, {} as any)).toBe(false)
        expect(c.validate({} as any, {} as any)).toBe(false)
    })

    it('rejects strings containing unpaired surrogates', () => {
        // \uD800 is a high surrogate with no following low surrogate
        expect(c.validate('bad\uD800char', {} as any)).toBe(false)
    })

    it('defaultMessage mentions property name', () => {
        expect(c.defaultMessage({ property: 'desc' } as any)).toContain('desc')
    })
})
