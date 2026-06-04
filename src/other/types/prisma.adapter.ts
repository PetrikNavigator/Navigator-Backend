import 'dotenv/config';
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const dbHost = process.env.DB_HOST
const dbPortRaw = process.env.DB_PORT
const dbPort = dbPortRaw ? Number(dbPortRaw) : 3306
const dbUser = process.env.DB_USER
let dbPassword = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME

if (!dbUser)
    throw new Error("Missing DB_USER environment variable. Check your .env")
if (!dbPassword)
    dbPassword = ""
if (!dbName)
    throw new Error("Missing DB_NAME environment variable. Check your .env")

export const adapter = new PrismaMariaDb({
    port: dbPort,
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbName,
})