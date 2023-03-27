import { authOptions } from '@/lib/auth'
import { db } from '@/lib/database'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'

const userUpdateSchema = z.object({
  name: z.string()
})

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(403).end()
  }

  const { user } = session

  if (req.method === 'PUT') {
    try {
      const data = userUpdateSchema.parse(req.body)

      const userData = await db.user.update({
        where: {
          id: user.id
        },
        data: {
          name: data.name
        }
      })

      return res.json(userData)
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(422).json(error.issues)
      }

      return res.status(500).end()
    }
  }
}

export default handler
