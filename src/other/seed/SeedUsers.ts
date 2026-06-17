import { Prisma } from "generated/prisma/client";
import * as bcrypt from "bcrypt"

export async function SeedUsers(): Promise<Prisma.usersCreateManyInput[]> {
    const p = process.env.ADMIN_PASSWORD
    if (p == "" || !p)
        throw new Error("You must set the ADMIN_PASSWORD in the env file")

    const default_password = await bcrypt.hash(p, 10)

    const users: Prisma.usersCreateManyInput[] = [
        {
            email: "petrik@petrik.petrik",
            password_hash: default_password,
        },
    ]

    return users
}