import { Test, TestingModule } from '@nestjs/testing'
import { StairsController } from './stairs.controller'
import { StairsService } from './stairs.service'
import { AuthGuard } from 'src/users/auth/auth.guard'
import { RolesGuard } from 'src/users/auth/roles.guard'

import { stair, premiseAdminUser, premiseOwnedByPremiseAdmin } from 'src/test-utils/fixtures'

describe('StairsController', () => {
    let controller: StairsController
    let service: any
    beforeEach(async () => {
        service = {
            getStairs: jest.fn(),
            addStairs: jest.fn(),
            modifyStairs: jest.fn(),
            removeStairs: jest.fn(),
        }
        const module: TestingModule = await Test.createTestingModule({
            controllers: [StairsController],
            providers: [{ provide: StairsService, useValue: service }],
        })
            .overrideGuard(AuthGuard).useValue({ canActivate: () => true })
            .overrideGuard(RolesGuard).useValue({ canActivate: () => true })
            .compile()
        controller = module.get(StairsController)
    })

    const req: any = { user: { id: premiseAdminUser.id, email: 'x', role: "PREMISE_ADMIN" } }

    it('getStairs', () => {
        controller.getStairs(req, premiseOwnedByPremiseAdmin.id)
        expect(service.getStairs).toHaveBeenCalledWith(premiseAdminUser.id, premiseOwnedByPremiseAdmin.id)
    })
    it('addStairs', () => {
        const dto: any = { ...stair }
        controller.addStairs(req, dto)
        expect(service.addStairs).toHaveBeenCalledWith(premiseAdminUser.id, dto)
    })
    it('modifyStairs', () => {
        controller.modifyStairs(req, { name: 'n' } as any, stair.id)
        expect(service.modifyStairs).toHaveBeenCalledWith(premiseAdminUser.id, stair.id, { name: 'n' })
    })
    it('removeStairs', () => {
        controller.removeStairs(req, stair.id)
        expect(service.removeStairs).toHaveBeenCalledWith(premiseAdminUser.id, stair.id)
    })
})
