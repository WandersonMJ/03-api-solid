import { GetUserMetricsUseCase } from '../get-user-metrics.ts'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository.ts'

export function makeGetUserMetricsUseCase() {
  const prismaCheckInsRepository = new PrismaCheckInsRepository()
  const useCase = new GetUserMetricsUseCase(prismaCheckInsRepository)

  return useCase
}
