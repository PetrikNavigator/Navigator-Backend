import { Prisma } from "generated/prisma/client";

export function SeedClassroomTypes(count: number): Prisma.classroom_typesCreateManyInput[] {
    const classroom_types: Prisma.classroom_typesCreateManyInput[] = [
        // Premise 1 types reflect the real room categories signposted in the
        // "A" building floor plans (földszint / 1. emelet / 2. emelet).
        { id: 1, name: "tanterem", colorhex: "#52d99cff" },
        { id: 2, name: "előadó", colorhex: "#52f2ffff" },
        { id: 3, name: "laboratórium", colorhex: "#8cff66ff" },
        { id: 4, name: "informatika terem", colorhex: "#73a6ffff" },
        { id: 5, name: "tanári szoba", colorhex: "#ffb34dff" },
        { id: 6, name: "előkészítő", colorhex: "#d9ff4dff" },
        { id: 7, name: "csoport szoba", colorhex: "#b3ff73ff" },
        { id: 8, name: "iroda", colorhex: "#a6bfd9ff" },
        { id: 9, name: "testnevelés terem", colorhex: "#ff734dff" },
        { id: 10, name: "öltöző", colorhex: "#d98cffff" },
        { id: 11, name: "wc", colorhex: "#a6bfd9ff" },
        { id: 12, name: "egyéb", colorhex: "#99b3ccff" },
        // "B" building introduces a library; kept out of the 1..12 block so the
        // premise-2 types below keep their ids.
        { id: 25, name: "könyvtár", colorhex: "#d98cffff" },

        { id: 13, name: "tanterem", colorhex: "#52d99cff" },
        { id: 14, name: "előadó", colorhex: "#52f2ffff" },
        { id: 15, name: "kémia labor", colorhex: "#8cff66ff" },
        { id: 16, name: "fizika labor", colorhex: "#b3ff73ff" },
        { id: 17, name: "informatika terem", colorhex: "#73a6ffff" },
        { id: 18, name: "nyelvi labor", colorhex: "#d9ff4dff" },
        { id: 19, name: "tanári", colorhex: "#ffb34dff" },
        { id: 20, name: "iroda", colorhex: "#a6bfd9ff" },
        { id: 21, name: "testnevelés terem", colorhex: "#ff734dff" },
        { id: 22, name: "könyvtár", colorhex: "#d98cffff" },
        { id: 23, name: "étkező", colorhex: "#ff73a6ff" },
        { id: 24, name: "egyéb", colorhex: "#99b3ccff" }
    ]

    return classroom_types
}