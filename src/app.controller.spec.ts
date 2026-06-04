import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller'
import { AppService } from './app.service'

describe('AppController', () => {
    let controller: AppController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService],
        }).compile()

        controller = module.get<AppController>(AppController)
    })

    it('returns the welcome message wrapped in { message }', () => {
        expect(controller.getHello()).toEqual({
            message: 'Welcome to the Petrik Navigator Backend!',
        })
    })
})

describe('AppService', () => {
    it('exposes the literal hello string', () => {
        expect(new AppService().getHello()).toBe('Welcome to the Petrik Navigator Backend!')
    })
})
