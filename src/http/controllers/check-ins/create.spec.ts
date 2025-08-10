import request from 'supertest'
import { app } from '@/app.ts'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/tests/create-and-authenticate-user.ts'
import { prisma } from '@/lib/prisma.ts'

describe('Create Check In (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a check in', async () => {
    const { token } = await createAndAuthenticateUser(app)

    const gym = await prisma.gym.create({
      data: {
        title: 'Javascript Gym',
        description: 'Some Description',
        phone: '134123123',
        latitude: -23.590718,
        longitude: -48.0431256,
      },
    })

    const response = await request(app.server)
      .post(`/gyms/${gym.id}/checkIn`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        latitude: -23.590718,
        longitude: -48.0431256,
      })

    expect(response.statusCode).toEqual(201)
  })
})
