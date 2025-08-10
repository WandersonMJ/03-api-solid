import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository.ts'
import { CheckInUseCase } from '../check-in.ts'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository.ts'

export function makeCheckInsUseCase() {
  const prismaCheckInsRepository = new PrismaCheckInsRepository()
  const prismaGymsRepository = new PrismaGymsRepository()
  const useCase = new CheckInUseCase(
    prismaCheckInsRepository,
    prismaGymsRepository,
  )

  return useCase
}
