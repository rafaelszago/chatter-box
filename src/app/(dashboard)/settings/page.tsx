import { Card } from '@/components/ui'
import UserForm from '@/components/user-form'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

export default async function Settings() {
  const session = await getServerSession(authOptions)

  return (
    <div>
      <h1 className="text-xl font-bold mb-6">Settings</h1>
      <div className="space-y-8">
        <div className="grid grid-cols-3">
          <div>
            <p className="font-bold">User settings</p>
            <p className="text-sm text-gray-700">Edit your user settings</p>
          </div>
          <div className="col-span-2">
            <Card>
              <UserForm user={session?.user} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
