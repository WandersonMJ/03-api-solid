import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository.ts'
import { FetchNearbyGymsUseCase } from '../fetch-nearby-gyms.ts'

export function makeFetchNearbyGymsUseCase() {
  const prismaGymsRepository = new PrismaGymsRepository()
  const useCase = new FetchNearbyGymsUseCase(prismaGymsRepository)

  return useCase
}
