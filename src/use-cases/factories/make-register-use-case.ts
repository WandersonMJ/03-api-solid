import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository.ts'
import { RegisterUseCase } from '../register.ts'

export function makeRegisterUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const useCase = new RegisterUseCase(prismaUsersRepository)

  return useCase
}
