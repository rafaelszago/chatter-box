import { authOptions } from '@/lib/auth'
import { db } from '@/lib/database'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(403).end()
  }

  if (req.method === 'POST') {
    try {
      const post = await db.post.update({
        where: {
          id: String(req.query.id)
        },
        data: {
          likes: {
            increment: 1
          }
        }
      })

      return res.json(post)
    } catch (error) {
      return res.status(500).end()
    }
  }
}

export default handler
