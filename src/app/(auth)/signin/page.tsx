import { AuthCard } from '@/components/auth-card'
import { ChevronLeft } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ChatterBox | Sing In',
  description: 'Sign into your account'
}

export default function SignInPage() {
  return (
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-3xl font-bold mb-12">Welcome to ChatterBox 👋</h1>
      <AuthCard />
      <div className="w-full inline-flex justify-center mt-6">
        <Link href="/">
          <span className="text-sm flex items-center hover:underline hover:underline-offset-2">
            <ChevronLeft size={14} className="mr-1" />
            Back to home
          </span>
        </Link>
      </div>
    </div>
  )
}
