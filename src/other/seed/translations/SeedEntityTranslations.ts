import { Prisma } from "generated/prisma/client";
import { TranslationCollector } from "./TranslationCollector";
import { SeedBuildings } from "../SeedBuildings";
import { SeedClassroomTypes } from "../SeedClassroomTypes";
import { SeedClassrooms } from "../SeedClassrooms";
import { SeedCorridors } from "../SeedCorridors";
import { SeedLifts } from "../SeedLifts";
import { SeedStairs } from "../SeedStairs";

/** English names for the building catalog (keyed by original Hungarian name). */
const BUILDING_EN: Record<string, string> = {
    "A épület": "Building A",
    "B épület": "Building B",
}

/** English descriptions for the building catalog (keyed by original Hungarian text). */
const BUILDING_DESC_EN: Record<string, string> = {
    "Informatikusok épülete": "Building of the IT students",
    "Vegyészek és környezetvédők épülete": "Building of the chemists and environmentalists",
}

/** English names for every classroom type (keyed by original Hungarian name). */
const CLASSROOM_TYPE_EN: Record<string, string> = {
    "tanterem": "Classroom",
    "fizika előadó": "Physics lecture hall",
    "laboratórium": "Laboratory",
    "informatika terem": "Computer room",
    "tanári szoba": "Teachers' room",
    "előkészítő": "Prep room",
    "csoport szoba": "Group room",
    "iroda": "Office",
    "öltöző": "Changing room",
    "tanári": "Staff room",
    "könyvtár": "Library",
    "férfi wc": "Men's restroom",
    "igazgató helyettes": "Deputy principal",
    "női wc": "Women's restroom",
    "akadálymentes wc": "Accessible restroom",
    "porta": "Reception",
    "tornatermi öltöző": "Gym changing room",
    "tornaterem": "Gymnasium",
    "tanári wc": "Staff restroom",
    "dohányzó": "Smoking area",
    "büfé": "Buffet",
    "diákközpont": "Student center",
    "orvosi szoba": "Medical room",
    "személyzeti wc": "Personnel restroom",
    "könyvtáros": "Librarian",
    "diákönkormányzat": "Student council",
    "pszichológus": "Psychologist",
    "előadó terem": "Lecture hall",
    "titkárság": "Secretariat",
    "igazgató": "Principal",
    "gazdasági vezető": "Financial manager",
    "gazdasági iroda": "Finance office",
    "tárgyaló": "Meeting room",
    "kazánház": "Boiler room",
    "tornaterem II.": "Gymnasium II",
}

export type TransformedEntitySeeds = {
    buildings: Prisma.buildingsCreateManyInput[]
    classroom_types: Prisma.classroom_typesCreateManyInput[]
    classrooms: Prisma.classroomsCreateManyInput[]
    corridors: Prisma.corridorsCreateManyInput[]
    lifts: Prisma.liftsCreateManyInput[]
    stairs: Prisma.stairsCreateManyInput[]
}

/**
 * Reads the original entity seeds, registers a translation for every name and
 * description on the given collector, and returns copies of the seeds where the
 * human text has been replaced by the generated codename. Room codes and
 * informal labels with no curated English fall back to the Hungarian text.
 */
export function buildEntitySeeds(collector: TranslationCollector): TransformedEntitySeeds {
    const buildings = SeedBuildings().map((b) => ({
        ...b,
        name: collector.add("building", b.name, BUILDING_EN[b.name]),
        description: collector.add("building.desc", b.description, BUILDING_DESC_EN[b.description]),
    }))

    const classroom_types = SeedClassroomTypes().map((t) => ({
        ...t,
        name: collector.add("classroom_type", t.name, CLASSROOM_TYPE_EN[t.name]),
    }))

    const classrooms = SeedClassrooms().map((c) => ({
        ...c,
        name: collector.add(`classroom.b${c.building_id}`, c.name),
        description: collector.add(`classroom.b${c.building_id}.desc`, c.description),
    }))

    const corridors = SeedCorridors().map((c) => ({
        ...c,
        name: collector.add(`corridor.b${c.building_id}`, c.name),
    }))

    const lifts = SeedLifts().map((l) => ({
        ...l,
        name: collector.add(`lift.b${l.building_id}`, l.name),
    }))

    const stairs = SeedStairs().map((s) => ({
        ...s,
        name: collector.add(`stair.b${s.building_id}`, s.name),
    }))

    return { buildings, classroom_types, classrooms, corridors, lifts, stairs }
}
