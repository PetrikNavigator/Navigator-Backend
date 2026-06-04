import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common"
import { Observable } from "rxjs"
import { map } from "rxjs/operators"

function serializeBigInt(value: any, seen = new WeakSet()): any {
    if (typeof value === 'bigint') {
        return value.toString();
    }

    if (value === null || typeof value !== 'object') {
        return value;
    }

    if (seen.has(value)) {
        return value;
    }
    seen.add(value);

    if (Array.isArray(value)) {
        return value.map((v) => serializeBigInt(v, seen));
    }

    if (value instanceof Date) {
        return value;
    }

    if (value instanceof Map) {
        return Object.fromEntries(
            Array.from(value.entries()).map(([k, v]) => [k, serializeBigInt(v, seen)])
        );
    }

    if (value instanceof Set) {
        return Array.from(value).map((v) => serializeBigInt(v, seen));
    }

    const entries = Object.entries(value);

    return Object.fromEntries(
        entries.map(([k, v]) => [k, serializeBigInt(v, seen)])
    );
}

@Injectable()
export class BigIntSerializationInterceptor implements NestInterceptor {
    intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(map((data) => serializeBigInt(data)))
    }
}
