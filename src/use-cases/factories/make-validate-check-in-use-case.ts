import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository.ts'
import { ValidateCheckInUseCase } from '../validate-check-in.ts'

export function makeValidateCheckInUseCase() {
  const prismaCheckInsRepository = new PrismaCheckInsRepository()
  const useCase = new ValidateCheckInUseCase(prismaCheckInsRepository)

  return useCase
}
