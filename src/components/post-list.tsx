import { db } from '@/lib/database'
import { cache } from 'react'
import { PostItem } from './post-item'

const getPosts = cache(async () => {
  return await db.post.findMany({
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

export async function PostList() {
  const posts = await getPosts()

  return (
    <div className="space-y-6 mt-6">
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
}
