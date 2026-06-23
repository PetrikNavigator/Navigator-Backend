import { PrismaClient } from 'generated/prisma/client';
import { SeedUsers } from 'src/other/seed/SeedUsers';
import { adapter } from 'src/other/types/prisma.adapter';
import { TranslationCollector } from 'src/other/seed/translations/TranslationCollector';
import { buildEntitySeeds } from 'src/other/seed/translations/SeedEntityTranslations';
import { SeedUiTranslations } from 'src/other/seed/translations/SeedUiTranslations';

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

    // TRANSLATIONS
    // The collector gathers every translation row while the entity seeds below
    // are rewritten so their name/description columns hold codenames instead of
    // human-readable text. UI strings are registered up front.
    const collector = new TranslationCollector()
    SeedUiTranslations(collector)
    const entities = buildEntitySeeds(collector)

    // BUILDINGS
    const buildingsResult = await prisma.buildings.createMany({
        data: entities.buildings,
        skipDuplicates: true,
    })
    console.log(`✓ Buildings: ${buildingsResult.count} inserted`)

    // CLASSROOM TYPES
    const classroom_typesResult = await prisma.classroom_types.createMany({
        data: entities.classroom_types,
        skipDuplicates: true,
    })
    console.log(`✓ Classroom Types: ${classroom_typesResult.count} inserted`)

    // CLASSROOMS
    const classroomsResult = await prisma.classrooms.createMany({
        data: entities.classrooms,
        skipDuplicates: true,
    })
    console.log(`✓ Classrooms: ${classroomsResult.count} inserted`)

    // CORRIDORS
    const corridorsResult = await prisma.corridors.createMany({
        data: entities.corridors,
        skipDuplicates: true,
    })
    console.log(`✓ Corridors: ${corridorsResult.count} inserted`)

    // LIFTS
    const liftsResult = await prisma.lifts.createMany({
        data: entities.lifts,
        skipDuplicates: true,
    })
    console.log(`✓ Lifts: ${liftsResult.count} inserted`)

    // STAIRS
    const stairsResult = await prisma.stairs.createMany({
        data: entities.stairs,
        skipDuplicates: true,
    })
    console.log(`✓ Stairs: ${stairsResult.count} inserted`)

    // TRANSLATIONS (insert after the entity codenames have been collected)
    const translations = collector.toRows()
    const translationsResult = await prisma.translations.createMany({
        data: translations,
        skipDuplicates: true,
    })
    console.log(`✓ Translations: ${translationsResult.count} inserted`)

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
