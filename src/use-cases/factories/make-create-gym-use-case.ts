import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository.ts'
import { CreateGymUseCase } from '../create-gym.ts'

export function makeCreateGymUseCase() {
  const prismaGymsRepository = new PrismaGymsRepository()
  const useCase = new CreateGymUseCase(prismaGymsRepository)

  return useCase
}
