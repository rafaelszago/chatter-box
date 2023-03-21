import { Card } from '@/components'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  return (
    <div className="">
      <h1 className="text-xl font-bold">
        Hi {session?.user.name}, whats happening?
      </h1>

      <div className="space-y-6 mt-6">
        <Card>Hello World!</Card>
        <Card>Hello World!</Card>
        <Card>Hello World!</Card>
        <Card>Hello World!</Card>
      </div>
    </div>
  )
}
