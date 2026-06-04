import { Test, TestingModule } from '@nestjs/testing'
import { NotFoundException, UnauthorizedException } from '@nestjs/common'

import { CorridorsService } from './corridors.service'
import { BuildingsService } from '../buildings/buildings.service'
import { PrismaService } from 'src/other/prisma/prisma.service'
import { createMockPrisma, MockPrisma } from 'src/test-utils/mock-prisma'
import {
    building,
    corridor,
    premiseAdminUser,
    premiseOwnedByPremiseAdmin,
} from 'src/test-utils/fixtures'

describe('CorridorsService', () => {
    let service: CorridorsService
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
                CorridorsService,
                { provide: PrismaService, useValue: prisma },
                { provide: BuildingsService, useValue: buildings },
            ],
        }).compile()

        service = module.get(CorridorsService)
    })

    it('getCorridorsPublic flattens across buildings', async () => {
        buildings.getBuildingsPublic.mockResolvedValueOnce([building])
        prisma.corridors.findMany.mockResolvedValueOnce([corridor])

        await expect(
            service.getCorridorsPublic(premiseOwnedByPremiseAdmin.id),
        ).resolves.toEqual([corridor])
    })

    it('getCorridors uses authed buildings query', async () => {
        buildings.getBuildings.mockResolvedValueOnce([building])
        prisma.corridors.findMany.mockResolvedValueOnce([corridor])

        await service.getCorridors(premiseAdminUser.id, premiseOwnedByPremiseAdmin.id)
        expect(buildings.getBuildings).toHaveBeenCalledWith(
            premiseAdminUser.id,
            premiseOwnedByPremiseAdmin.id,
        )
    })

    it('addCorridor creates after building access check', async () => {
        buildings.canAccessBuilding.mockResolvedValueOnce(building)
        prisma.corridors.create.mockResolvedValueOnce(corridor)

        const dto: any = { ...corridor }
        await service.addCorridor(premiseAdminUser.id, dto)

        expect(buildings.canAccessBuilding).toHaveBeenCalledWith(
            premiseAdminUser.id,
            corridor.building_id,
        )
        expect(prisma.corridors.create).toHaveBeenCalledWith({ data: dto })
    })

    it('addCorridor does not call create if building access fails', async () => {
        buildings.canAccessBuilding.mockRejectedValueOnce(new UnauthorizedException())
        await expect(
            service.addCorridor(premiseAdminUser.id, { ...corridor } as any),
        ).rejects.toBeInstanceOf(UnauthorizedException)
        expect(prisma.corridors.create).not.toHaveBeenCalled()
    })

    it('modifyCorridor updates after validation', async () => {
        prisma.corridors.findFirst.mockResolvedValueOnce(corridor)
        buildings.canAccessBuilding.mockResolvedValueOnce(building)
        prisma.corridors.update.mockResolvedValueOnce({ ...corridor, name: 'r' })

        const result = await service.modifyCorridor(
            premiseAdminUser.id,
            { name: 'r' } as any,
            corridor.id,
        )

        expect(result).toMatchObject({ name: 'r' })
    })

    it('modifyCorridor throws NotFoundException for missing id', async () => {
        prisma.corridors.findFirst.mockResolvedValueOnce(null)
        await expect(
            service.modifyCorridor(premiseAdminUser.id, {} as any, 1n),
        ).rejects.toBeInstanceOf(NotFoundException)
    })

    it('removeCorridor deletes after validation', async () => {
        prisma.corridors.findFirst.mockResolvedValueOnce(corridor)
        buildings.canAccessBuilding.mockResolvedValueOnce(building)
        prisma.corridors.delete.mockResolvedValueOnce(corridor)

        await service.removeCorridor(premiseAdminUser.id, corridor.id)
        expect(prisma.corridors.delete).toHaveBeenCalledWith({ where: { id: corridor.id } })
    })

    it('removeCorridor refuses missing id', async () => {
        prisma.corridors.findFirst.mockResolvedValueOnce(null)
        await expect(
            service.removeCorridor(premiseAdminUser.id, 999n),
        ).rejects.toBeInstanceOf(NotFoundException)
    })
})
