import { Prisma } from "generated/prisma/client";

export function SeedClassroomTypes(): Prisma.classroom_typesCreateManyInput[] {
    const classroom_types: Prisma.classroom_typesCreateManyInput[] = [
        { name: 'tanterem', colorhex: '#447e64ff' },
        { name: 'fizika előadó', colorhex: '#52f2ffff' },
        { name: 'laboratórium', colorhex: '#554c94ff' },
        { name: 'informatika terem', colorhex: '#73a6ffff' },
        { name: 'tanári szoba', colorhex: '#ffb34dff' },
        { name: 'előkészítő', colorhex: '#d9ff4dff' },
        { name: 'csoport szoba', colorhex: '#b3ff73ff' },
        { name: 'iroda', colorhex: '#a6bfd9ff' },
        { name: 'öltöző', colorhex: '#d98cffff' },
        { name: 'tanári', colorhex: '#ffb34dff' },
        { name: 'könyvtár', colorhex: '#d98cffff' },
        { name: 'férfi wc', colorhex: '#ff0000ff' },
        { name: 'igazgató helyettes', colorhex: '#d400ffff' },
        { name: 'női wc', colorhex: '#00e1ffff' },
        { name: 'akadálymentes wc', colorhex: '#66ff00ff' },
        { name: 'porta', colorhex: '#8f3838ff' },
        { name: 'tornatermi öltöző', colorhex: '#b69a9aff' },
        { name: 'tornaterem', colorhex: '#a16886ff' },
        { name: 'tanári wc', colorhex: '#590303ff' },
        { name: 'dohányzó', colorhex: '#4f4f4fff' },
        { name: 'büfé', colorhex: '#ff932eff' },
        { name: 'diákközpont', colorhex: '#00ff4cff' },
        { name: 'orvosi szoba', colorhex: '#ea8b8bff' },
        { name: 'személyzeti wc', colorhex: '#ffffffff' },
        { name: 'könyvtáros', colorhex: '#b68949ff' },
        { name: 'diákönkormányzat', colorhex: '#f99effff' },
        { name: 'pszichológus', colorhex: '#39f3deff' },
        { name: 'előadó terem', colorhex: '#792f83ff' },
        { name: 'titkárság', colorhex: '#327167ff' },
        { name: 'igazgató', colorhex: '#fa0000ff' },
        { name: 'gazdasági vezető', colorhex: '#49ab55ff' },
        { name: 'gazdasági iroda', colorhex: '#a9b234ff' },
        { name: 'tárgyaló', colorhex: '#6c007aff' },
    ]

    return classroom_types
}