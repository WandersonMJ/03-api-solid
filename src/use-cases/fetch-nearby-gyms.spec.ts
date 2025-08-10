import { expect, describe, it, beforeEach } from 'vitest'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms.ts'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository.ts'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Near gym',
      description: 'gym-01',
      phone: '123',
      latitude: -23.5741151,
      longitude: -48.0112243,
    })

    await gymsRepository.create({
      title: 'Far Gym',
      description: 'gym-02',
      phone: '123',
      latitude: -23.4644614,
      longitude: -47.7319275,
    })

    const { gyms } = await sut.execute({
      userLatitude: -23.590718,
      userLongitude: -48.0431256,
    })

    expect(gyms).toHaveLength(1)
  })
})
