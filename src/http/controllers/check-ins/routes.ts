import type { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/middlewares/verify-jwt.ts'
import { create } from './create.ts'
import { validate } from './validate.ts'
import { metrics } from './metrics.ts'
import { history } from './history.ts'
import { verifyUserRole } from '@/http/middlewares/verify-user-role.ts'

export async function checkInRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/check-ins/history', history)
  app.get('/check-ins/metrics', metrics)

  app.post('/gyms/:gymId/checkIn', create)
  app.patch(
    '/check-ins/:checkInId/validate',
    { onRequest: [verifyUserRole('ADMIN')] },
    validate,
  )
}
