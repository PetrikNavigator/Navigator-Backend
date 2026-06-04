import { CallHandler, ExecutionContext } from '@nestjs/common'
import { lastValueFrom, of } from 'rxjs'

import { BigIntSerializationInterceptor } from './BigIntSerialInterceptor.interceptor'

async function run(input: unknown) {
    const interceptor = new BigIntSerializationInterceptor()
    const handler: CallHandler = { handle: () => of(input) }
    return lastValueFrom(interceptor.intercept({} as ExecutionContext, handler))
}

describe('BigIntSerializationInterceptor', () => {
    it('serialises a top-level bigint', async () => {
        await expect(run(123n)).resolves.toBe('123')
    })

    it('serialises bigints inside an object', async () => {
        await expect(run({ id: 1n, n: 5 })).resolves.toEqual({ id: '1', n: 5 })
    })

    it('walks arrays', async () => {
        await expect(run([{ id: 1n }, { id: 2n }])).resolves.toEqual([
            { id: '1' },
            { id: '2' },
        ])
    })

    it('preserves Date instances', async () => {
        const d = new Date('2030-01-01')
        await expect(run({ when: d })).resolves.toEqual({ when: d })
    })

    it('converts Map entries', async () => {
        const map = new Map<string, any>([['a', 1n], ['b', 2]])
        await expect(run({ m: map })).resolves.toEqual({ m: { a: '1', b: 2 } })
    })

    it('converts Set entries to an array', async () => {
        const set = new Set([1n, 2n])
        await expect(run({ s: set })).resolves.toEqual({ s: ['1', '2'] })
    })

    it('passes through primitives and null', async () => {
        await expect(run('hello')).resolves.toBe('hello')
        await expect(run(7)).resolves.toBe(7)
        await expect(run(null)).resolves.toBeNull()
    })

    it('does not infinite-loop on circular references', async () => {
        const a: any = { id: 1n }
        a.self = a
        const result = (await run(a)) as any
        expect(result.id).toBe('1')
        expect(result.self).toBe(a) // returned the seen value as-is
    })
})
