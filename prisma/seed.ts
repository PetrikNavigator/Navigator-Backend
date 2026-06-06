import { PrismaClient } from 'generated/prisma/client';
import { SeedUsers } from 'src/other/seed/SeedUsers';
import { SeedBuildings } from 'src/other/seed/SeedBuildings';
import { SeedClassrooms } from 'src/other/seed/SeedClassrooms';
import { SeedClassroomTypes } from 'src/other/seed/SeedClassroomTypes';
import { SeedCorridors } from 'src/other/seed/SeedCorridors';
import { SeedLifts } from 'src/other/seed/SeedLifts';
import { SeedStairs } from 'src/other/seed/SeedStairs';
import { adapter } from 'src/other/types/prisma.adapter';

const prisma = new PrismaClient({ adapter })

async function main() {
    console.log('\n🌱 Starting database seeding...\n')

    // ADMINS
    const users = await SeedUsers()
    const usersResult = await prisma.users.createMany({
        data: users,
        skipDuplicates: true,
    })
    console.log(`✓ Users: ${usersResult.count} inserted`)

    // BUILDINGS
    const buildings = SeedBuildings()
    const buildingsResult = await prisma.buildings.createMany({
        data: buildings,
        skipDuplicates: true,
    })
    console.log(`✓ Buildings: ${buildingsResult.count} inserted`)

    // CLASSROOM TYPES
    const classroom_types = SeedClassroomTypes()
    const classroom_typesResult = await prisma.classroom_types.createMany({
        data: classroom_types,
        skipDuplicates: true,
    })
    console.log(`✓ Classroom Types: ${classroom_typesResult.count} inserted`)

    // CLASSROOMS
    const classrooms = SeedClassrooms()
    const classroomsResult = await prisma.classrooms.createMany({
        data: classrooms,
        skipDuplicates: true,
    })
    console.log(`✓ Classrooms: ${classroomsResult.count} inserted`)

    // CORRIDORS
    const corridors = SeedCorridors()
    const corridorsResult = await prisma.corridors.createMany({
        data: corridors,
        skipDuplicates: true,
    })
    console.log(`✓ Corridors: ${corridorsResult.count} inserted`)

    // LIFTS
    const lifts = SeedLifts()
    const liftsResult = await prisma.lifts.createMany({
        data: lifts,
        skipDuplicates: true,
    })
    console.log(`✓ Lifts: ${liftsResult.count} inserted`)

    // STAIRS
    const stairs = SeedStairs()
    const stairsResult = await prisma.stairs.createMany({
        data: stairs,
        skipDuplicates: true,
    })
    console.log(`✓ Stairs: ${stairsResult.count} inserted`)

    console.log('\n--- Substitution Domain Seeds ---\n')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error('❌ Seeding failed:', e)
        await prisma.$disconnect()
        process.exit(1)
    });