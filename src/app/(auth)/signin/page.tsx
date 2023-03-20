import { AuthCard } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatterBox | Sing In',
  description: 'Sign into your account'
}

export default function SignInPage() {
  return (
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-3xl font-bold mb-12">Welcome to ChatterBox</h1>
      <AuthCard />
    </div>
  )
}
