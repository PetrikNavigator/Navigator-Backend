import { Request } from "express"

export type LoggedInAdmin = {
    id: bigint
    email: string
}

export interface AuthenticatedRequest extends Request {
    user: LoggedInAdmin
}