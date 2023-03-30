import { PostList } from '@/components/post-list'
import { Avatar } from '@/components/ui'
import { getUser } from '@/lib/get-user'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatterBox | Profile'
}

export default async function Profile({ params }: { params: { id: string } }) {
  const user = await getUser(params.id)

  if (!user) {
    return <h2>Cannot find user</h2>
  }

  return (
    <div>
      <div className="flex items-center gap-4">
        <Avatar
          src={user?.image ?? ''}
          alt={user?.name ?? ''}
          fallback={user?.name ?? ''}
          size="lg"
        />
        <div>
          <h1 className="text-xl font-bold">{user?.name}</h1>
          <p className="text-gray-700 text-sm">
            <span className="font-bold">{user._count.posts}</span> posts
          </p>
        </div>
      </div>
      {/* @ts-ignore-error */}
      <PostList userId={params.id} />
    </div>
  )
}
