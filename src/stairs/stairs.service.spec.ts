import { Test, TestingModule } from '@nestjs/testing'
import { NotFoundException, UnauthorizedException } from '@nestjs/common'

import { StairsService } from './stairs.service'
import { BuildingsService } from '../buildings/buildings.service'
import { PrismaService } from 'src/other/prisma/prisma.service'
import { createMockPrisma, MockPrisma } from 'src/test-utils/mock-prisma'
import {
    building,
    stair,
    premiseAdminUser,
    premiseOwnedByPremiseAdmin,
} from 'src/test-utils/fixtures'

describe('StairsService', () => {
    let service: StairsService
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
                StairsService,
                { provide: PrismaService, useValue: prisma },
                { provide: BuildingsService, useValue: buildings },
            ],
        }).compile()
        service = module.get(StairsService)
    })

    it('getStairsPublic flattens results', async () => {
        buildings.getBuildingsPublic.mockResolvedValueOnce([building])
        prisma.stairs.findMany.mockResolvedValueOnce([stair])
        await expect(service.getStairsPublic(premiseOwnedByPremiseAdmin.id)).resolves.toEqual([stair])
    })

    it('getStairs uses authed buildings', async () => {
        buildings.getBuildings.mockResolvedValueOnce([building])
        prisma.stairs.findMany.mockResolvedValueOnce([stair])
        await service.getStairs(premiseAdminUser.id, premiseOwnedByPremiseAdmin.id)
        expect(buildings.getBuildings).toHaveBeenCalledWith(
            premiseAdminUser.id,
            premiseOwnedByPremiseAdmin.id,
        )
    })

    it('addStairs creates after building access check', async () => {
        buildings.canAccessBuilding.mockResolvedValueOnce(building)
        prisma.stairs.create.mockResolvedValueOnce(stair)
        await service.addStairs(premiseAdminUser.id, { ...stair } as any)
        expect(prisma.stairs.create).toHaveBeenCalled()
    })

    it('addStairs surfaces access failure', async () => {
        buildings.canAccessBuilding.mockRejectedValueOnce(new UnauthorizedException())
        await expect(
            service.addStairs(premiseAdminUser.id, { ...stair } as any),
        ).rejects.toBeInstanceOf(UnauthorizedException)
    })

    it('modifyStairs throws for unknown id', async () => {
        prisma.stairs.findFirst.mockResolvedValueOnce(null)
        await expect(
            service.modifyStairs(premiseAdminUser.id, 1n, {} as any),
        ).rejects.toBeInstanceOf(NotFoundException)
    })

    it('modifyStairs updates after access check', async () => {
        prisma.stairs.findFirst.mockResolvedValueOnce(stair)
        buildings.canAccessBuilding.mockResolvedValueOnce(building)
        prisma.stairs.update.mockResolvedValueOnce({ ...stair, name: 'x' })
        const r = await service.modifyStairs(premiseAdminUser.id, stair.id, { name: 'x' } as any)
        expect(r).toMatchObject({ name: 'x' })
    })

    it('removeStairs deletes', async () => {
        prisma.stairs.findFirst.mockResolvedValueOnce(stair)
        buildings.canAccessBuilding.mockResolvedValueOnce(building)
        prisma.stairs.delete.mockResolvedValueOnce(stair)
        await service.removeStairs(premiseAdminUser.id, stair.id)
        expect(prisma.stairs.delete).toHaveBeenCalledWith({ where: { id: stair.id } })
    })
})
