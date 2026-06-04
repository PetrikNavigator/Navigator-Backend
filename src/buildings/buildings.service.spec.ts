import { Test, TestingModule } from '@nestjs/testing'
import { NotFoundException, UnauthorizedException } from '@nestjs/common'

import { BuildingsService } from './buildings.service'
import { PrismaService } from 'src/other/prisma/prisma.service'
import { AdminsService } from 'src/users/admins/admins.service'
import { createMockPrisma, MockPrisma } from 'src/test-utils/mock-prisma'
import {
    premiseAdminUser,
    premiseOwnedByPremiseAdmin,
    building,
    otherBuilding,
} from 'src/test-utils/fixtures'

describe('BuildingsService', () => {
    let service: BuildingsService
    let prisma: MockPrisma
    let admins: { getPremise: jest.Mock }

    beforeEach(async () => {
        prisma = createMockPrisma()
        admins = { getPremise: jest.fn() }

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                BuildingsService,
                { provide: PrismaService, useValue: prisma },
                { provide: AdminsService, useValue: admins },
            ],
        }).compile()

        service = module.get(BuildingsService)
    })

    describe('getBuildingsPublic', () => {
        it('returns all buildings of a premise ordered by premise_id', async () => {
            prisma.buildings.findMany.mockResolvedValueOnce([building])

            const result = await service.getBuildingsPublic(premiseOwnedByPremiseAdmin.id)

            expect(result).toEqual([building])
            expect(prisma.buildings.findMany).toHaveBeenCalledWith({
                where: { premise_id: premiseOwnedByPremiseAdmin.id },
                orderBy: { premise_id: 'asc' },
            })
        })

        it('does NOT call AdminsService (public method)', async () => {
            prisma.buildings.findMany.mockResolvedValueOnce([])
            await service.getBuildingsPublic(1n)
            expect(admins.getPremise).not.toHaveBeenCalled()
        })
    })

    describe('getBuildings (authed)', () => {
        it('checks premise access first, then queries', async () => {
            admins.getPremise.mockResolvedValueOnce(premiseOwnedByPremiseAdmin)
            prisma.buildings.findMany.mockResolvedValueOnce([building])

            const result = await service.getBuildings(
                premiseAdminUser.id,
                premiseOwnedByPremiseAdmin.id,
            )

            expect(admins.getPremise).toHaveBeenCalledWith(
                premiseOwnedByPremiseAdmin.id,
                premiseAdminUser.id,
                ['', 'You are not allowed to get places from this premise!'],
            )
            expect(result).toEqual([building])
        })

        it('does not run the DB query when access fails', async () => {
            admins.getPremise.mockRejectedValueOnce(new UnauthorizedException())

            await expect(
                service.getBuildings(premiseAdminUser.id, 99n),
            ).rejects.toBeInstanceOf(UnauthorizedException)

            expect(prisma.buildings.findMany).not.toHaveBeenCalled()
        })
    })

    describe('addBuildings', () => {
        it('creates after verifying access to the parent premise', async () => {
            admins.getPremise.mockResolvedValueOnce(premiseOwnedByPremiseAdmin)
            prisma.buildings.create.mockResolvedValueOnce(building)

            const result = await service.addBuildings(premiseAdminUser.id, {
                name: building.name,
                description: building.description,
                x: building.x,
                y: building.y,
                premise_id: building.premise_id,
            })

            expect(admins.getPremise).toHaveBeenCalledWith(
                building.premise_id,
                premiseAdminUser.id,
                ['', 'You are not allowed to add buildings to this premise!'],
            )
            expect(prisma.buildings.create).toHaveBeenCalledWith({
                data: expect.objectContaining({ name: building.name }),
            })
            expect(result).toEqual(building)
        })

        it('does not create when caller is unauthorised for the target premise', async () => {
            admins.getPremise.mockRejectedValueOnce(new UnauthorizedException())

            await expect(
                service.addBuildings(premiseAdminUser.id, {
                    name: 'N',
                    description: 'D',
                    x: 0,
                    y: 0,
                    premise_id: otherBuilding.premise_id,
                }),
            ).rejects.toBeInstanceOf(UnauthorizedException)

            expect(prisma.buildings.create).not.toHaveBeenCalled()
        })
    })

    describe('modifyBuildings', () => {
        it('updates when the user can access the building', async () => {
            prisma.buildings.findFirst.mockResolvedValueOnce(building)
            admins.getPremise.mockResolvedValueOnce(premiseOwnedByPremiseAdmin)
            prisma.buildings.update.mockResolvedValueOnce({ ...building, name: 'Updated' })

            const result = await service.modifyBuildings(
                premiseAdminUser.id,
                building.id,
                { name: 'Updated' },
            )

            expect(result.name).toBe('Updated')
            expect(prisma.buildings.update).toHaveBeenCalledWith({
                where: { id: building.id },
                data: { name: 'Updated' },
            })
        })

        it('throws NotFoundException when the building does not exist', async () => {
            prisma.buildings.findFirst.mockResolvedValueOnce(null)

            await expect(
                service.modifyBuildings(premiseAdminUser.id, 999n, { name: 'x' }),
            ).rejects.toBeInstanceOf(NotFoundException)

            expect(prisma.buildings.update).not.toHaveBeenCalled()
        })

        it('throws when premise check fails for an existing building', async () => {
            prisma.buildings.findFirst.mockResolvedValueOnce(otherBuilding)
            admins.getPremise.mockRejectedValueOnce(new UnauthorizedException())

            await expect(
                service.modifyBuildings(premiseAdminUser.id, otherBuilding.id, { name: 'x' }),
            ).rejects.toBeInstanceOf(UnauthorizedException)
        })
    })

    describe('removeBuildings', () => {
        it('deletes when authorised', async () => {
            prisma.buildings.findFirst.mockResolvedValueOnce(building)
            admins.getPremise.mockResolvedValueOnce(premiseOwnedByPremiseAdmin)
            prisma.buildings.delete.mockResolvedValueOnce(building)

            await service.removeBuildings(premiseAdminUser.id, building.id)

            expect(prisma.buildings.delete).toHaveBeenCalledWith({ where: { id: building.id } })
        })

        it('does not delete when building is missing', async () => {
            prisma.buildings.findFirst.mockResolvedValueOnce(null)

            await expect(
                service.removeBuildings(premiseAdminUser.id, 999n),
            ).rejects.toBeInstanceOf(NotFoundException)

            expect(prisma.buildings.delete).not.toHaveBeenCalled()
        })
    })

    describe('canAccessBuilding', () => {
        it('returns the building when accessible', async () => {
            prisma.buildings.findFirst.mockResolvedValueOnce(building)
            admins.getPremise.mockResolvedValueOnce(premiseOwnedByPremiseAdmin)

            const result = await service.canAccessBuilding(premiseAdminUser.id, building.id)

            expect(result).toEqual(building)
        })

        it('throws NotFoundException when not found', async () => {
            prisma.buildings.findFirst.mockResolvedValueOnce(null)
            await expect(
                service.canAccessBuilding(premiseAdminUser.id, 404n),
            ).rejects.toBeInstanceOf(NotFoundException)
        })
    })
})
