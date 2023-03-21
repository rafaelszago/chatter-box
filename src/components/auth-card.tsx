'use client'

import { AuthErrors, authErrors } from '@/lib/errors/auth-errors'
import { SiGithub, SiGoogle } from '@icons-pack/react-simple-icons'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Button, Card } from './ui'

type HandleSignInParams = {
  method: 'github' | 'google'
}

export function AuthCard() {
  const [loading, setLoading] = useState<boolean>(false)
  const searchParams = useSearchParams()
  const errorType = searchParams?.get('error') as AuthErrors

  const handleSignIn = async ({ method }: HandleSignInParams) => {
    setLoading(true)

    await signIn(method, { redirect: false })

    setLoading(false)
  }

  return (
    <Card className="p-12">
      <h1 className="text-xl font-bold mb-1">Sign in to your account</h1>
      <p className="text-gray-500">Select your method to sign in</p>
      <div className="space-y-3 mt-6">
        <Button
          onClick={() => handleSignIn({ method: 'google' })}
          disabled={loading}
          size="lg"
          fluid
        >
          <SiGoogle size={18} className="mr-3" />
          Continue with Google
        </Button>
        <Button
          onClick={() => handleSignIn({ method: 'github' })}
          disabled={loading}
          size="lg"
          fluid
        >
          <SiGithub size={18} className="mr-3" />
          Continue with Github
        </Button>
      </div>
      <p className="text-red-500 text-sm mt-4 font-medium">
        {errorType && authErrors[errorType]}
      </p>
    </Card>
  )
}
