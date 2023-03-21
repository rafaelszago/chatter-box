import { Card } from '@/components'
import { PostForm } from '@/components/post-form'
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

      <div className="space-y-4 mt-6">
        <Card>Hello World!</Card>
        <Card>Hello World!</Card>
        <Card>Hello World!</Card>
        <Card>Hello World!</Card>
      </div>
    </div>
  )
}
