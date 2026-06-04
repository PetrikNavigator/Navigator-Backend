import { Test, TestingModule } from '@nestjs/testing'
import { NotFoundException, UnauthorizedException } from '@nestjs/common'

import { ClassroomsService } from './classrooms.service'
import { BuildingsService } from '../buildings/buildings.service'
import { PrismaService } from 'src/other/prisma/prisma.service'
import { createMockPrisma, MockPrisma } from 'src/test-utils/mock-prisma'
import {
    premiseAdminUser,
    premiseOwnedByPremiseAdmin,
    building,
    classroom,
    otherBuilding,
} from 'src/test-utils/fixtures'

describe('ClassroomsService', () => {
    let service: ClassroomsService
    let prisma: MockPrisma
    let buildings: {
        getBuildings: jest.Mock
        getBuildingsPublic: jest.Mock
        canAccessBuilding: jest.Mock
    }

    beforeEach(async () => {
        prisma = createMockPrisma()
        buildings = {
            getBuildings: jest.fn(),
            getBuildingsPublic: jest.fn(),
            canAccessBuilding: jest.fn(),
        }

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ClassroomsService,
                { provide: PrismaService, useValue: prisma },
                { provide: BuildingsService, useValue: buildings },
            ],
        }).compile()

        service = module.get(ClassroomsService)
    })

    describe('getClassroomsPublic', () => {
        it('flattens classrooms across all buildings of the premise', async () => {
            buildings.getBuildingsPublic.mockResolvedValueOnce([building, otherBuilding])
            prisma.classrooms.findMany
                .mockResolvedValueOnce([classroom])
                .mockResolvedValueOnce([{ ...classroom, id: 201n }])

            const result = await service.getClassroomsPublic(premiseOwnedByPremiseAdmin.id)

            expect(result).toHaveLength(2)
            expect(prisma.classrooms.findMany).toHaveBeenNthCalledWith(1, {
                where: { building_id: building.id },
            })
            expect(prisma.classrooms.findMany).toHaveBeenNthCalledWith(2, {
                where: { building_id: otherBuilding.id },
            })
        })

        it('returns an empty array when premise has no buildings', async () => {
            buildings.getBuildingsPublic.mockResolvedValueOnce([])
            await expect(service.getClassroomsPublic(99n)).resolves.toEqual([])
            expect(prisma.classrooms.findMany).not.toHaveBeenCalled()
        })
    })

    describe('getClassrooms (authed)', () => {
        it('uses the authed buildings query', async () => {
            buildings.getBuildings.mockResolvedValueOnce([building])
            prisma.classrooms.findMany.mockResolvedValueOnce([classroom])

            const result = await service.getClassrooms(
                premiseAdminUser.id,
                premiseOwnedByPremiseAdmin.id,
            )

            expect(buildings.getBuildings).toHaveBeenCalledWith(
                premiseAdminUser.id,
                premiseOwnedByPremiseAdmin.id,
            )
            expect(result).toEqual([classroom])
        })

        it('bubbles up access errors', async () => {
            buildings.getBuildings.mockRejectedValueOnce(new UnauthorizedException())
            await expect(
                service.getClassrooms(premiseAdminUser.id, 99n),
            ).rejects.toBeInstanceOf(UnauthorizedException)
        })
    })

    describe('addClassrooms', () => {
        it('checks building access then creates', async () => {
            buildings.canAccessBuilding.mockResolvedValueOnce(building)
            prisma.classrooms.create.mockResolvedValueOnce(classroom)

            const dto = {
                name: classroom.name,
                capacity: classroom.capacity,
                storey: classroom.storey,
                x: classroom.x,
                y: classroom.y,
                rotation: classroom.rotation,
                size_x: classroom.size_x,
                size_y: classroom.size_y,
                size_z: classroom.size_z,
                description: classroom.description,
                building_id: building.id,
            }

            const result = await service.addClassrooms(premiseAdminUser.id, dto)

            expect(buildings.canAccessBuilding).toHaveBeenCalledWith(
                premiseAdminUser.id,
                building.id,
            )
            expect(prisma.classrooms.create).toHaveBeenCalledWith({ data: dto })
            expect(result).toEqual(classroom)
        })

        it('rejects when caller cannot access the building', async () => {
            buildings.canAccessBuilding.mockRejectedValueOnce(new UnauthorizedException())

            await expect(
                service.addClassrooms(premiseAdminUser.id, {
                    name: 'X', capacity: 1, storey: 0, x: 0, y: 0, rotation: 0,
                    size_x: 1, size_y: 1, size_z: 1, description: 'd',
                    building_id: 999n,
                }),
            ).rejects.toBeInstanceOf(UnauthorizedException)
            expect(prisma.classrooms.create).not.toHaveBeenCalled()
        })
    })

    describe('modifyClassrooms', () => {
        it('verifies classroom, then updates without re-checking building when building_id not changed', async () => {
            prisma.classrooms.findFirst.mockResolvedValueOnce(classroom)
            buildings.canAccessBuilding
                // first call from private verifyClassroom for the current building
                .mockResolvedValueOnce(building)
            prisma.classrooms.update.mockResolvedValueOnce({ ...classroom, capacity: 99 })

            const result = await service.modifyClassrooms(
                premiseAdminUser.id,
                { capacity: 99 },
                classroom.id,
            )

            expect(buildings.canAccessBuilding).toHaveBeenCalledTimes(1)
            expect(buildings.canAccessBuilding).toHaveBeenCalledWith(
                premiseAdminUser.id,
                building.id,
            )
            expect(result).toMatchObject({ capacity: 99 })
        })

        it('re-checks the target building when building_id is provided in body', async () => {
            prisma.classrooms.findFirst.mockResolvedValueOnce(classroom)
            buildings.canAccessBuilding.mockResolvedValue(building)
            prisma.classrooms.update.mockResolvedValueOnce({
                ...classroom,
                building_id: 555n,
            })

            await service.modifyClassrooms(
                premiseAdminUser.id,
                { building_id: 555n },
                classroom.id,
            )

            expect(buildings.canAccessBuilding).toHaveBeenCalledTimes(2)
            expect(buildings.canAccessBuilding).toHaveBeenNthCalledWith(
                1,
                premiseAdminUser.id,
                building.id,
            )
            expect(buildings.canAccessBuilding).toHaveBeenNthCalledWith(
                2,
                premiseAdminUser.id,
                555n,
            )
        })

        it('throws NotFoundException for unknown classroom id', async () => {
            prisma.classrooms.findFirst.mockResolvedValueOnce(null)
            await expect(
                service.modifyClassrooms(premiseAdminUser.id, { name: 'x' }, 999n),
            ).rejects.toBeInstanceOf(NotFoundException)
        })
    })

    describe('removeClassrooms', () => {
        it('deletes when access checks pass', async () => {
            prisma.classrooms.findFirst.mockResolvedValueOnce(classroom)
            buildings.canAccessBuilding.mockResolvedValueOnce(building)
            prisma.classrooms.delete.mockResolvedValueOnce(classroom)

            await service.removeClassrooms(premiseAdminUser.id, classroom.id)

            expect(prisma.classrooms.delete).toHaveBeenCalledWith({
                where: { id: classroom.id },
            })
        })

        it('throws NotFoundException for missing classroom', async () => {
            prisma.classrooms.findFirst.mockResolvedValueOnce(null)
            await expect(
                service.removeClassrooms(premiseAdminUser.id, 999n),
            ).rejects.toBeInstanceOf(NotFoundException)
            expect(prisma.classrooms.delete).not.toHaveBeenCalled()
        })
    })
})
