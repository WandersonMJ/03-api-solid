import { FetchUserCheckInsHistoryUseCase } from '../fetch-user-check-in-history.ts'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository.ts'

export function makeFetchUserCheckInsHistoryUseCase() {
  const prismaCheckInsRepository = new PrismaCheckInsRepository()
  const useCase = new FetchUserCheckInsHistoryUseCase(prismaCheckInsRepository)

  return useCase
}
