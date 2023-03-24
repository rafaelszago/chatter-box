import { cache } from 'react'
import { db } from './database'

export const getUser = cache(async (id: string) => {
  return await db.user.findUnique({
    where: {
      id
    },
    select: {
      id: true,
      name: true,
      image: true,
      _count: {
        select: {
          posts: true
        }
      }
    }
  })
})
