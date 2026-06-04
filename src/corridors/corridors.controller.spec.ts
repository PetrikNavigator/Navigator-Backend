import { Test, TestingModule } from '@nestjs/testing'
import { CorridorsController } from './corridors.controller'
import { CorridorsService } from './corridors.service'
import { AuthGuard } from 'src/users/auth/auth.guard'
import { RolesGuard } from 'src/users/auth/roles.guard'

import { premiseAdminUser, premiseOwnedByPremiseAdmin, corridor } from 'src/test-utils/fixtures'

describe('CorridorsController', () => {
    let controller: CorridorsController
    let service: any

    beforeEach(async () => {
        service = {
            getCorridors: jest.fn(),
            addCorridor: jest.fn(),
            modifyCorridor: jest.fn(),
            removeCorridor: jest.fn(),
        }

        const module: TestingModule = await Test.createTestingModule({
            controllers: [CorridorsController],
            providers: [{ provide: CorridorsService, useValue: service }],
        })
            .overrideGuard(AuthGuard).useValue({ canActivate: () => true })
            .overrideGuard(RolesGuard).useValue({ canActivate: () => true })
            .compile()

        controller = module.get(CorridorsController)
    })

    const req: any = { user: { id: premiseAdminUser.id, email: 'x', role: "PREMISE_ADMIN" } }

    it('forwards getCorridors', () => {
        controller.getCorridors(req, premiseOwnedByPremiseAdmin.id)
        expect(service.getCorridors).toHaveBeenCalledWith(premiseAdminUser.id, premiseOwnedByPremiseAdmin.id)
    })

    it('forwards addCorridor', () => {
        const dto: any = { ...corridor }
        controller.addCorridor(req, dto)
        expect(service.addCorridor).toHaveBeenCalledWith(premiseAdminUser.id, dto)
    })

    it('forwards modifyCorridor', () => {
        controller.modifyCorridor(req, { name: 'n' } as any, corridor.id)
        expect(service.modifyCorridor).toHaveBeenCalledWith(premiseAdminUser.id, { name: 'n' }, corridor.id)
    })

    it('forwards removeCorridor', () => {
        controller.removeCorridor(req, corridor.id)
        expect(service.removeCorridor).toHaveBeenCalledWith(premiseAdminUser.id, corridor.id)
    })
})
