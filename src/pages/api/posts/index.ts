import { authOptions } from '@/lib/auth'
import { db } from '@/lib/database'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'

const postCreateValidation = z.object({
  content: z.string()
})

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(403).end()
  }

  const { user } = session

  if (req.method === 'POST') {
    try {
      const data = postCreateValidation.parse(req.body)

      const post = await db.post.create({
        data: {
          content: data.content,
          userId: user.id
        }
      })

      return res.json(post)
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(422).json(error.issues)
      }

      return res.status(500).end()
    }
  }
}

export default handler
