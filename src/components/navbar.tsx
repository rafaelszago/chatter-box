import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth/next'
import Link from 'next/link'
import { Button, Logo } from './ui'
import { UserMenu } from './user-menu'

export async function Navbar() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return (
      <nav className="flex items-center justify-between py-4 w-full px-8 border-b border-gray-300 bg-white">
        <Link href="/">
          <Logo />
        </Link>
        <Link href="/signin">
          <Button>Sign In</Button>
        </Link>
      </nav>
    )
  }

  return (
    <nav className="flex items-center justify-between py-4 px-8 w-full border-b border-gray-300 bg-white">
      <Link href="/dashboard">
        <Logo />
      </Link>
      <UserMenu
        user={{
          name: session.user.name ?? '',
          image: session.user.image ?? ''
        }}
      />
    </nav>
  )
}
