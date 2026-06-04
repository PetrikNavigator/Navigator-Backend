import 'reflect-metadata'
import { plainToInstance } from 'class-transformer'
import { RemoveXss } from './to-remove-xss.transformer'

class Body {
    @RemoveXss()
    text: any
}

const sanitize = (v: any) => plainToInstance(Body, { text: v }).text

describe('RemoveXss transformer', () => {
    it('strips disallowed tags', () => {
        expect(sanitize('<script>alert(1)</script>safe')).toBe('safe')
    })

    it('strips dangerous attributes from allowed <p> tags', () => {
        expect(sanitize('<p onclick="x">hi</p>')).toBe('<p>hi</p>')
    })

    it('keeps <p> wrapper but drops <img>', () => {
        expect(sanitize('<p>hi <img src=x onerror=alert(1)></p>')).toBe('<p>hi </p>')
    })

    it('returns non-string values untouched', () => {
        expect(sanitize(42)).toBe(42)
        expect(sanitize(null)).toBeNull()
        expect(sanitize(undefined)).toBeUndefined()
    })

    it('passes through clean text', () => {
        expect(sanitize('plain text')).toBe('plain text')
    })
})
