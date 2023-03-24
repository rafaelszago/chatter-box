import { listPosts } from '@/lib/list-posts'
import { PostItem } from './post-item'

type PostListProps = {
  userId?: string
}

export async function PostList({ userId }: PostListProps) {
  const posts = await listPosts(userId)

  return (
    <div className="space-y-6 mt-6">
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
}
