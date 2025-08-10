import { z } from 'zod'
import { type FastifyRequest, type FastifyReply } from 'fastify'
import { makeValidateCheckInUseCase } from '@/use-cases/factories/make-validate-check-in-use-case.ts'

export async function validate(request: FastifyRequest, reply: FastifyReply) {
  const createCheckInParamsSchema = z.object({
    checkInId: z.string().uuid(),
  })

  const { checkInId } = createCheckInParamsSchema.parse(request.params)

  const validateCheckInUseCase = makeValidateCheckInUseCase()

  await validateCheckInUseCase.execute({
    checkInId,
  })

  return reply.status(204).send()
}
