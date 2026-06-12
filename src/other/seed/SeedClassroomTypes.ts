import { Prisma } from "generated/prisma/client";

export function SeedClassroomTypes(): Prisma.classroom_typesCreateManyInput[] {
    const classroom_types: Prisma.classroom_typesCreateManyInput[] = [
        { name: 'tanterem', colorhex: '#00C853FF' },
        { name: 'fizika előadó', colorhex: '#00E5FFFF' },
        { name: 'laboratórium', colorhex: '#651FFFFF' },
        { name: 'informatika terem', colorhex: '#2979FFFF' },
        { name: 'tanári szoba', colorhex: '#FF9100FF' },
        { name: 'előkészítő', colorhex: '#C6FF00FF' },
        { name: 'csoport szoba', colorhex: '#76FF03FF' },
        { name: 'iroda', colorhex: '#607D8BFF' },
        { name: 'öltöző', colorhex: '#E040FBFF' },
        { name: 'tanári', colorhex: '#FF6D00FF' },
        { name: 'könyvtár', colorhex: '#AA00FFFF' },
        { name: 'férfi wc', colorhex: '#FF0000FF' },
        { name: 'igazgató helyettes', colorhex: '#D500F9FF' },
        { name: 'női wc', colorhex: '#00B8D4FF' },
        { name: 'akadálymentes wc', colorhex: '#64DD17FF' },
        { name: 'porta', colorhex: '#8D1B1BFF' },
        { name: 'tornatermi öltöző', colorhex: '#A1887FFF' },
        { name: 'tornaterem', colorhex: '#C2185BFF' },
        { name: 'tanári wc', colorhex: '#B71C1CFF' },
        { name: 'dohányzó', colorhex: '#424242FF' },
        { name: 'büfé', colorhex: '#FF6F00FF' },
        { name: 'diákközpont', colorhex: '#00E676FF' },
        { name: 'orvosi szoba', colorhex: '#FF5252FF' },
        { name: 'személyzeti wc', colorhex: '#ECECECFF' },
        { name: 'könyvtáros', colorhex: '#BF8F00FF' },
        { name: 'diákönkormányzat', colorhex: '#FF4081FF' },
        { name: 'pszichológus', colorhex: '#00E5CFFF' },
        { name: 'előadó terem', colorhex: '#7B1FA2FF' },
        { name: 'titkárság', colorhex: '#009688FF' },
        { name: 'igazgató', colorhex: '#D50000FF' },
        { name: 'gazdasági vezető', colorhex: '#2E7D32FF' },
        { name: 'gazdasági iroda', colorhex: '#AEEA00FF' },
        { name: 'tárgyaló', colorhex: '#9C27B0FF' },
        { name: 'kazánház', colorhex: '#4E342EFF' },
        { name: 'tornaterem II.', colorhex: '#512DA8FF' }
    ]

    return classroom_types
}