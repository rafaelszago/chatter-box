import { cache } from 'react'
import { db } from './database'

export const listPosts = cache(async (userId?: string) => {
  return await db.post.findMany({
    where: {
      userId
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
})
