import { Test, TestingModule } from '@nestjs/testing'
import { NotFoundException, UnauthorizedException } from '@nestjs/common'

import { LiftsService } from './lifts.service'
import { BuildingsService } from '../buildings/buildings.service'
import { PrismaService } from 'src/other/prisma/prisma.service'
import { createMockPrisma, MockPrisma } from 'src/test-utils/mock-prisma'
import {
    building,
    lift,
    premiseAdminUser,
    premiseOwnedByPremiseAdmin,
} from 'src/test-utils/fixtures'

describe('LiftsService', () => {
    let service: LiftsService
    let prisma: MockPrisma
    let buildings: any

    beforeEach(async () => {
        prisma = createMockPrisma()
        buildings = {
            getBuildings: jest.fn(),
            getBuildingsPublic: jest.fn(),
            canAccessBuilding: jest.fn(),
        }

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                LiftsService,
                { provide: PrismaService, useValue: prisma },
                { provide: BuildingsService, useValue: buildings },
            ],
        }).compile()

        service = module.get(LiftsService)
    })

    it('getLiftsPublic flattens across all buildings of the premise', async () => {
        buildings.getBuildingsPublic.mockResolvedValueOnce([building, { ...building, id: 999n }])
        prisma.lifts.findMany
            .mockResolvedValueOnce([lift])
            .mockResolvedValueOnce([])

        const result = await service.getLiftsPublic(premiseOwnedByPremiseAdmin.id)
        expect(result).toEqual([lift])
        expect(prisma.lifts.findMany).toHaveBeenCalledTimes(2)
    })

    it('getLifts uses authed buildings query', async () => {
        buildings.getBuildings.mockResolvedValueOnce([building])
        prisma.lifts.findMany.mockResolvedValueOnce([lift])
        await service.getLifts(premiseAdminUser.id, premiseOwnedByPremiseAdmin.id)
        expect(buildings.getBuildings).toHaveBeenCalledWith(
            premiseAdminUser.id,
            premiseOwnedByPremiseAdmin.id,
        )
    })

    it('addLifts validates min_storey vs max_storey only via DB (no service-level check) and forwards', async () => {
        buildings.canAccessBuilding.mockResolvedValueOnce(building)
        prisma.lifts.create.mockResolvedValueOnce(lift)
        const dto: any = { ...lift }
        await service.addLifts(premiseAdminUser.id, dto)
        expect(prisma.lifts.create).toHaveBeenCalledWith({ data: dto })
    })

    it('modifyLifts rejects unknown id', async () => {
        prisma.lifts.findFirst.mockResolvedValueOnce(null)
        await expect(
            service.modifyLifts(premiseAdminUser.id, 999n, {} as any),
        ).rejects.toBeInstanceOf(NotFoundException)
    })

    it('modifyLifts updates after access check', async () => {
        prisma.lifts.findFirst.mockResolvedValueOnce(lift)
        buildings.canAccessBuilding.mockResolvedValueOnce(building)
        prisma.lifts.update.mockResolvedValueOnce({ ...lift, max_storey: 9 })

        const result = await service.modifyLifts(premiseAdminUser.id, lift.id, {
            max_storey: 9,
        } as any)

        expect(result).toMatchObject({ max_storey: 9 })
    })

    it('removeLifts deletes after access check', async () => {
        prisma.lifts.findFirst.mockResolvedValueOnce(lift)
        buildings.canAccessBuilding.mockResolvedValueOnce(building)
        prisma.lifts.delete.mockResolvedValueOnce(lift)
        await service.removeLifts(premiseAdminUser.id, lift.id)
        expect(prisma.lifts.delete).toHaveBeenCalledWith({ where: { id: lift.id } })
    })

    it('removeLifts rejects unknown id', async () => {
        prisma.lifts.findFirst.mockResolvedValueOnce(null)
        await expect(
            service.removeLifts(premiseAdminUser.id, 1n),
        ).rejects.toBeInstanceOf(NotFoundException)
    })

    it('addLifts surfaces building access failure', async () => {
        buildings.canAccessBuilding.mockRejectedValueOnce(new UnauthorizedException())
        await expect(
            service.addLifts(premiseAdminUser.id, { ...lift } as any),
        ).rejects.toBeInstanceOf(UnauthorizedException)
    })
})
