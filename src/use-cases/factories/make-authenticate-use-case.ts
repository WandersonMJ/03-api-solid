import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository.ts'
import { AuthenticateUseCase } from '../authenticate.ts'

export function makeAuthenticateUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const authenticateUseCase = new AuthenticateUseCase(prismaUsersRepository)

  return authenticateUseCase
}
