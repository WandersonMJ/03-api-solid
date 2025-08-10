import { expect, describe, it, beforeEach } from 'vitest'
import { CreateGymUseCase } from './create-gym.ts'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository.ts'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gyms Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should be able to create a gym', async () => {
    const { gym } = await sut.execute({
      title: 'gym-01',
      description: 'gym-01',
      phone: '123',
      latitude: 0,
      longitude: 0,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
