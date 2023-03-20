import { SiGithub, SiGoogle } from '@icons-pack/react-simple-icons'
import { Button } from './ui'

export function AuthCard() {
  return (
    <div className="rounded-md shadow bg-white border border-gray-100 p-12">
      <h1 className="text-xl font-bold mb-1">Sign in to your account</h1>
      <p className="text-gray-500">Select your method to sign in</p>
      <div className="space-y-3 mt-6">
        <Button size="lg" fluid>
          <SiGoogle size={18} className="mr-3" />
          Continue with Google
        </Button>
        <Button size="lg" fluid>
          <SiGithub size={18} className="mr-3" />
          Continue with Github
        </Button>
      </div>
    </div>
  )
}
