import { Test, TestingModule } from '@nestjs/testing'
import { BuildingsController } from './buildings.controller'
import { BuildingsService } from './buildings.service'
import { AuthGuard } from 'src/users/auth/auth.guard'
import { RolesGuard } from 'src/users/auth/roles.guard'

import { premiseAdminUser, building, premiseOwnedByPremiseAdmin } from 'src/test-utils/fixtures'

describe('BuildingsController', () => {
    let controller: BuildingsController
    let service: {
        getBuildings: jest.Mock
        addBuildings: jest.Mock
        modifyBuildings: jest.Mock
        removeBuildings: jest.Mock
    }

    beforeEach(async () => {
        service = {
            getBuildings: jest.fn(),
            addBuildings: jest.fn(),
            modifyBuildings: jest.fn(),
            removeBuildings: jest.fn(),
        }

        const module: TestingModule = await Test.createTestingModule({
            controllers: [BuildingsController],
            providers: [{ provide: BuildingsService, useValue: service }],
        })
            .overrideGuard(AuthGuard)
            .useValue({ canActivate: () => true })
            .overrideGuard(RolesGuard)
            .useValue({ canActivate: () => true })
            .compile()

        controller = module.get(BuildingsController)
    })

    const req: any = {
        user: {
            id: premiseAdminUser.id,
            email: premiseAdminUser.email,
            role: "PREMISE_ADMIN",
        },
    }

    it('forwards getBuildings with the JWT user id and premise', () => {
        controller.getBuildings(req, premiseOwnedByPremiseAdmin.id)
        expect(service.getBuildings).toHaveBeenCalledWith(
            premiseAdminUser.id,
            premiseOwnedByPremiseAdmin.id,
        )
    })

    it('forwards addBuildings', () => {
        const dto = {
            name: building.name,
            description: building.description,
            x: building.x,
            y: building.y,
            premise_id: building.premise_id,
        }
        controller.addBuildings(req, dto)
        expect(service.addBuildings).toHaveBeenCalledWith(premiseAdminUser.id, dto)
    })

    it('forwards modifyBuildings', () => {
        controller.modifyBuildings(req, building.id, { name: 'New' })
        expect(service.modifyBuildings).toHaveBeenCalledWith(
            premiseAdminUser.id,
            building.id,
            { name: 'New' },
        )
    })

    it('forwards removeBuildings', () => {
        controller.removeBuildings(req, building.id)
        expect(service.removeBuildings).toHaveBeenCalledWith(
            premiseAdminUser.id,
            building.id,
        )
    })
})
