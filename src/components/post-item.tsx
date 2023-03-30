import { Post } from '@prisma/client'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Link from 'next/link'
import { LikeButton } from './like-button'
import { HoverCard } from './ui'
import { Card } from './ui/card'

dayjs.extend(relativeTime)

type PostItemProps = {
  post: Post & {
    user: {
      id: string
      name?: string | null
      image?: string | null
    }
  }
}

export function PostItem({ post }: PostItemProps) {
  return (
    <Card>
      <div className="flex justify-between">
        <div className="flex items-center gap-x-4">
          <Link href={`/profiles/${post.userId}`}>
            <HoverCard
              id={post.userId}
              image={post.user.image ?? ''}
              name={post.user.name ?? ''}
            />
          </Link>
          <div className="-mt-1">
            <p className="text-gray-700">{post.user.name}</p>
            <p className="text-xs text-gray-500">
              {dayjs(post.createdAt).fromNow()}
            </p>
          </div>
        </div>
        <LikeButton postId={post.id} likes={post.likes} />
      </div>
      <div className="ml-14 mt-4">
        <p className="text-gray-700 flex-wrap break-all">{post.content}</p>
      </div>
    </Card>
  )
}
