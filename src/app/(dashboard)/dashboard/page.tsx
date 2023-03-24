import { PostForm } from '@/components/post-form'
import { PostList } from '@/components/post-list'
import { Card } from '@/components/ui'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  return (
    <div className="">
      <Card>
        <PostForm
          name={session?.user.name ?? ''}
          image={session?.user.image ?? ''}
        />
      </Card>
      {/* @ts-ignore-errors */}
      <PostList />
    </div>
  )
}
