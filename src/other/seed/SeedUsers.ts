import { Prisma } from "generated/prisma/client";
import * as bcrypt from "bcrypt"

export async function SeedUsers(): Promise<Prisma.usersCreateManyInput[]> {
    const default_password = await bcrypt.hash("petrik123", 10)

    const users: Prisma.usersCreateManyInput[] = [
        {
            email: "petrik@petrik.petrik",
            password_hash: default_password,
        },
        {
            email: "dami@dami.dami",
            password_hash: default_password,
        },
        {
            email: "admin@admin.admin",
            password_hash: default_password,
        },
        {
            email: "student@student.student",
            password_hash: default_password,
        }
    ]

    return users
}