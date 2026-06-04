import { Prisma } from "generated/prisma/client";

export function SeedClassroomTypes(count: number): Prisma.classroom_typesCreateManyInput[] {
    const classroom_types: Prisma.classroom_typesCreateManyInput[] = [
        { id: 1, name: "tanterem", colorhex: "#447e64ff" },
        { id: 2, name: "előadó", colorhex: "#52f2ffff" },
        { id: 3, name: "laboratórium", colorhex: "#554c94ff" },
        { id: 4, name: "informatika terem", colorhex: "#73a6ffff" },
        { id: 5, name: "tanári szoba", colorhex: "#ffb34dff" },
        { id: 6, name: "előkészítő", colorhex: "#d9ff4dff" },
        { id: 7, name: "csoport szoba", colorhex: "#b3ff73ff" },
        { id: 8, name: "iroda", colorhex: "#a6bfd9ff" },
        { id: 9, name: "testnevelés terem", colorhex: "#ff734dff" },
        { id: 10, name: "öltöző", colorhex: "#d98cffff" },
        { id: 11, name: "wc", colorhex: "#a6bfd9ff" },
        { id: 12, name: "egyéb", colorhex: "#99b3ccff" },
        { id: 15, name: "kémia labor", colorhex: "#8cff66ff" },
        { id: 16, name: "fizika labor", colorhex: "#b3ff73ff" },
        { id: 18, name: "nyelvi labor", colorhex: "#d9ff4dff" },
        { id: 19, name: "tanári", colorhex: "#ffb34dff" },
        { id: 23, name: "étkező", colorhex: "#ff73a6ff" },
        { id: 25, name: "könyvtár", colorhex: "#d98cffff" },
        { id: 26, name: "férfi wc", colorhex: "#ff0000ff" },
        { id: 27, name: "igazgató helyettes", colorhex: "#d400ffff" },
        { id: 28, name: "női wc", colorhex: "#00e1ffff" },
        { id: 29, name: "akadálymentes wc", colorhex: "#66ff00ff" },
        { id: 30, name: "porta", colorhex: "#8f3838ff" },
        { id: 31, name: "tornatermi öltöző", colorhex: "#b69a9aff" },
        { id: 32, name: "tornaterem", colorhex: "#a16886ff" },
        { id: 33, name: "tanári wc", colorhex: "#590303ff" },
    ]

    return classroom_types
}