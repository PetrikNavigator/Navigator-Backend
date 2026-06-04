import { Test, TestingModule } from '@nestjs/testing'
import { ClassroomsController } from './classrooms.controller'
import { ClassroomsService } from './classrooms.service'
import { AuthGuard } from 'src/users/auth/auth.guard'
import { RolesGuard } from 'src/users/auth/roles.guard'

import {
    premiseAdminUser,
    premiseOwnedByPremiseAdmin,
    classroom,
} from 'src/test-utils/fixtures'

describe('ClassroomsController', () => {
    let controller: ClassroomsController
    let service: {
        getClassrooms: jest.Mock
        addClassrooms: jest.Mock
        modifyClassrooms: jest.Mock
        removeClassrooms: jest.Mock
    }

    beforeEach(async () => {
        service = {
            getClassrooms: jest.fn(),
            addClassrooms: jest.fn(),
            modifyClassrooms: jest.fn(),
            removeClassrooms: jest.fn(),
        }

        const module: TestingModule = await Test.createTestingModule({
            controllers: [ClassroomsController],
            providers: [{ provide: ClassroomsService, useValue: service }],
        })
            .overrideGuard(AuthGuard).useValue({ canActivate: () => true })
            .overrideGuard(RolesGuard).useValue({ canActivate: () => true })
            .compile()

        controller = module.get(ClassroomsController)
    })

    const req: any = {
        user: { id: premiseAdminUser.id, email: 'x', role: "PREMISE_ADMIN" },
    }

    it('getClassrooms forwards (userId, premiseId)', () => {
        controller.getClassrooms(req, premiseOwnedByPremiseAdmin.id)
        expect(service.getClassrooms).toHaveBeenCalledWith(
            premiseAdminUser.id,
            premiseOwnedByPremiseAdmin.id,
        )
    })

    it('addClassrooms forwards (userId, body)', () => {
        const dto: any = { name: 'A1', capacity: 10, building_id: classroom.building_id }
        controller.addClassrooms(req, dto)
        expect(service.addClassrooms).toHaveBeenCalledWith(premiseAdminUser.id, dto)
    })

    it('modifyClassrooms forwards (userId, body, id)', () => {
        controller.modifyClassrooms(req, { capacity: 50 }, classroom.id)
        expect(service.modifyClassrooms).toHaveBeenCalledWith(
            premiseAdminUser.id,
            { capacity: 50 },
            classroom.id,
        )
    })

    it('removeClassrooms forwards (userId, id)', () => {
        controller.removeClassrooms(req, classroom.id)
        expect(service.removeClassrooms).toHaveBeenCalledWith(
            premiseAdminUser.id,
            classroom.id,
        )
    })
})
