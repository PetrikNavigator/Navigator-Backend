import { Prisma } from "generated/prisma/client";
import * as bcrypt from "bcrypt"

export async function SeedUsers(count: number): Promise<Prisma.usersCreateManyInput[]> {
    const default_password = await bcrypt.hash("petrik123", 10)

    const users: Prisma.usersCreateManyInput[] = [
        {
            id: 1,
            email: "petrik@petrik.petrik",
            password_hash: default_password,
        },
        {
            id: 2,
            email: "dami@dami.dami",
            password_hash: default_password,
        },
        {
            id: 3,
            email: "admin@admin.admin",
            password_hash: default_password,
        },
        {
            id: 4,
            email: "student@student.student",
            password_hash: default_password,
        }
    ]

    return users
}