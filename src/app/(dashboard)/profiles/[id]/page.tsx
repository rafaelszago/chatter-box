import { PostList } from '@/components/post-list'
import { Avatar } from '@/components/ui'
import { getUser } from '@/lib/get-user'
import { Metadata } from 'next'

type PageParams = {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params
}: PageParams): Promise<Metadata> {
  const user = await getUser(params.id)
  return { title: `ChatterBox | ${user?.name}` }
}

export default async function Profile({ params }: PageParams) {
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
