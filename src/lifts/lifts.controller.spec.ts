import { Test, TestingModule } from '@nestjs/testing'
import { LiftsController } from './lifts.controller'
import { LiftsService } from './lifts.service'
import { AuthGuard } from 'src/users/auth/auth.guard'
import { RolesGuard } from 'src/users/auth/roles.guard'

import { lift, premiseAdminUser, premiseOwnedByPremiseAdmin } from 'src/test-utils/fixtures'

describe('LiftsController', () => {
    let controller: LiftsController
    let service: any

    beforeEach(async () => {
        service = {
            getLifts: jest.fn(),
            addLifts: jest.fn(),
            modifyLifts: jest.fn(),
            removeLifts: jest.fn(),
        }
        const module: TestingModule = await Test.createTestingModule({
            controllers: [LiftsController],
            providers: [{ provide: LiftsService, useValue: service }],
        })
            .overrideGuard(AuthGuard).useValue({ canActivate: () => true })
            .overrideGuard(RolesGuard).useValue({ canActivate: () => true })
            .compile()

        controller = module.get(LiftsController)
    })

    const req: any = { user: { id: premiseAdminUser.id, email: 'x', role: "PREMISE_ADMIN" } }

    it('getLifts', () => {
        controller.getLifts(req, premiseOwnedByPremiseAdmin.id)
        expect(service.getLifts).toHaveBeenCalledWith(premiseAdminUser.id, premiseOwnedByPremiseAdmin.id)
    })
    it('addLifts', () => {
        const dto: any = { ...lift }
        controller.addLifts(req, dto)
        expect(service.addLifts).toHaveBeenCalledWith(premiseAdminUser.id, dto)
    })
    it('modifyLifts', () => {
        controller.modifyLifts(req, { name: 'x' } as any, lift.id)
        expect(service.modifyLifts).toHaveBeenCalledWith(premiseAdminUser.id, lift.id, { name: 'x' })
    })
    it('removeLifts', () => {
        controller.removeLifts(req, lift.id)
        expect(service.removeLifts).toHaveBeenCalledWith(premiseAdminUser.id, lift.id)
    })
})
