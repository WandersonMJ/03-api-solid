import type { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/middlewares/verify-jwt.ts'
import { search } from './search.ts'
import { nearby } from './nearby.ts'
import { create } from './create.ts'
import { verifyUserRole } from '@/http/middlewares/verify-user-role.ts'

export async function gymsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/gyms/search', search)
  app.get('/gyms/nearby', nearby)

  app.post('/gyms', { onRequest: [verifyUserRole('ADMIN')] }, create)
}
