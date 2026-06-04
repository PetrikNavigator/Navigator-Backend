import request from 'supertest'
import { createTestApp, TestApp } from 'src/test-utils/test-app'

describe('AppController (e2e)', () => {
    let testApp: TestApp

    beforeAll(async () => {
        testApp = await createTestApp()
    })

    afterAll(async () => {
        await testApp.close()
    })

    it('GET / returns the welcome message wrapped in { message }', async () => {
        const res = await request(testApp.app.getHttpServer()).get('/').expect(200)
        expect(res.body).toEqual({ message: 'Welcome to the Petrik Navigator Backend!' })
    })

    it('an unknown route returns 404', async () => {
        await request(testApp.app.getHttpServer()).get('/does-not-exist').expect(404)
    })
})
