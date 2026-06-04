import { Test, TestingModule } from '@nestjs/testing'
import { ClassroomsTypesController } from './classrooms_types.controller'
import { ClassroomsTypesService } from './classrooms_types.service'
import { AuthGuard } from 'src/users/auth/auth.guard'
import { RolesGuard } from 'src/users/auth/roles.guard'

import {
    premiseAdminUser,
    premiseOwnedByPremiseAdmin,
    classroomType,
} from 'src/test-utils/fixtures'

describe('ClassroomsTypesController', () => {
    let controller: ClassroomsTypesController
    let service: {
        getAll: jest.Mock
        create: jest.Mock
        update: jest.Mock
        remove: jest.Mock
    }

    beforeEach(async () => {
        service = {
            getAll: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
        }
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ClassroomsTypesController],
            providers: [{ provide: ClassroomsTypesService, useValue: service }],
        })
            .overrideGuard(AuthGuard).useValue({ canActivate: () => true })
            .overrideGuard(RolesGuard).useValue({ canActivate: () => true })
            .compile()

        controller = module.get(ClassroomsTypesController)
    })

    const req: any = {
        user: { id: premiseAdminUser.id, email: 'x', role: "PREMISE_ADMIN" },
    }

    it('getAll forwards', () => {
        controller.getAll(req, premiseOwnedByPremiseAdmin.id)
        expect(service.getAll).toHaveBeenCalledWith(premiseAdminUser.id, premiseOwnedByPremiseAdmin.id)
    })

    it('create forwards', () => {
        const dto: any = { name: classroomType.name, colorhex: classroomType.colorhex, premise_id: classroomType.premise_id }
        controller.create(req, dto)
        expect(service.create).toHaveBeenCalledWith(premiseAdminUser.id, dto)
    })

    it('update forwards', () => {
        controller.update(req, classroomType.id, { name: 'x' })
        expect(service.update).toHaveBeenCalledWith(premiseAdminUser.id, classroomType.id, { name: 'x' })
    })

    it('remove forwards', () => {
        controller.remove(req, classroomType.id)
        expect(service.remove).toHaveBeenCalledWith(premiseAdminUser.id, classroomType.id)
    })
})
