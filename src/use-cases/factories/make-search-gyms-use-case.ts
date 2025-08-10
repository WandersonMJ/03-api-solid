import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository.ts'
import { SearchGymsUseCase } from '../search-gyms.ts'

export function makeSearchGymsUseCase() {
  const prismaGymsRepository = new PrismaGymsRepository()
  const useCase = new SearchGymsUseCase(prismaGymsRepository)

  return useCase
}
