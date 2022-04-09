import {Express} from 'express'
import request from 'supertest'
import { createServer } from './app'

describe('GET /', () => {
  let server: Express

  beforeAll(() => {
    server = createServer()
  })

  it('should return 200 OK', async () => {
    const response = await request(server).get('/api/currentUser')
    expect(response.status).toBe(200)
  })
})
