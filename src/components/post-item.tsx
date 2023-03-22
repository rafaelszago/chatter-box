import { Post } from '@prisma/client'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { LikeButton } from './like-button'
import { Avatar } from './ui/avatar'
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
        <div className="flex items-center gap-x-3">
          <Avatar
            src={post.user.image ?? ''}
            alt={post.user.name ?? ''}
            fallback={post.user.name ?? ''}
          />
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
