import { Test, TestingModule } from '@nestjs/testing'
import { ConflictException, NotFoundException, UnauthorizedException } from '@nestjs/common'

import { ClassroomsTypesService } from './classrooms_types.service'
import { PrismaService } from 'src/other/prisma/prisma.service'
import { AdminsService } from 'src/users/admins/admins.service'
import { createMockPrisma, MockPrisma } from 'src/test-utils/mock-prisma'
import {
    premiseAdminUser,
    premiseOwnedByPremiseAdmin,
    classroomType,
} from 'src/test-utils/fixtures'

describe('ClassroomsTypesService', () => {
    let service: ClassroomsTypesService
    let prisma: MockPrisma
    let admins: { getPremise: jest.Mock }

    beforeEach(async () => {
        prisma = createMockPrisma()
        admins = { getPremise: jest.fn() }

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ClassroomsTypesService,
                { provide: PrismaService, useValue: prisma },
                { provide: AdminsService, useValue: admins },
            ],
        }).compile()

        service = module.get(ClassroomsTypesService)
    })

    describe('getAll', () => {
        it('lists types scoped to the premise after authz check', async () => {
            admins.getPremise.mockResolvedValueOnce(premiseOwnedByPremiseAdmin)
            prisma.classroom_types.findMany.mockResolvedValueOnce([classroomType])

            const result = await service.getAll(premiseAdminUser.id, premiseOwnedByPremiseAdmin.id)

            expect(prisma.classroom_types.findMany).toHaveBeenCalledWith({
                where: { premise_id: premiseOwnedByPremiseAdmin.id },
            })
            expect(result).toEqual([classroomType])
        })

        it('bubbles unauthorised access', async () => {
            admins.getPremise.mockRejectedValueOnce(new UnauthorizedException())
            await expect(
                service.getAll(premiseAdminUser.id, 99n),
            ).rejects.toBeInstanceOf(UnauthorizedException)
        })
    })

    describe('create', () => {
        it('creates a new type', async () => {
            admins.getPremise.mockResolvedValueOnce(premiseOwnedByPremiseAdmin)
            prisma.classroom_types.findFirst.mockResolvedValueOnce(null)
            prisma.classroom_types.create.mockResolvedValueOnce(classroomType)

            const result = await service.create(premiseAdminUser.id, {
                name: classroomType.name,
                colorhex: classroomType.colorhex!,
                premise_id: classroomType.premise_id,
            })

            expect(prisma.classroom_types.create).toHaveBeenCalled()
            expect(result).toEqual(classroomType)
        })

        it('throws ConflictException when a type with the same name+premise exists', async () => {
            admins.getPremise.mockResolvedValueOnce(premiseOwnedByPremiseAdmin)
            prisma.classroom_types.findFirst.mockResolvedValueOnce(classroomType)

            await expect(
                service.create(premiseAdminUser.id, {
                    name: classroomType.name,
                    colorhex: classroomType.colorhex!,
                    premise_id: classroomType.premise_id,
                }),
            ).rejects.toBeInstanceOf(ConflictException)

            expect(prisma.classroom_types.create).not.toHaveBeenCalled()
        })
    })

    describe('update', () => {
        it('updates the type if owner', async () => {
            prisma.classroom_types.findFirst.mockResolvedValueOnce(classroomType)
            admins.getPremise.mockResolvedValueOnce(premiseOwnedByPremiseAdmin)
            prisma.classroom_types.update.mockResolvedValueOnce({
                ...classroomType,
                name: 'changed',
            })

            const result = await service.update(premiseAdminUser.id, classroomType.id, {
                name: 'changed',
            })

            expect(result.name).toBe('changed')
        })

        it('throws NotFoundException for unknown id', async () => {
            prisma.classroom_types.findFirst.mockResolvedValueOnce(null)
            await expect(
                service.update(premiseAdminUser.id, 999n, { name: 'x' }),
            ).rejects.toBeInstanceOf(NotFoundException)
        })
    })

    describe('remove', () => {
        it('removes the type after authz', async () => {
            prisma.classroom_types.findFirst.mockResolvedValueOnce(classroomType)
            admins.getPremise.mockResolvedValueOnce(premiseOwnedByPremiseAdmin)
            prisma.classroom_types.delete.mockResolvedValueOnce(classroomType)

            await service.remove(premiseAdminUser.id, classroomType.id)
            expect(prisma.classroom_types.delete).toHaveBeenCalledWith({
                where: { id: classroomType.id },
            })
        })
    })
})
