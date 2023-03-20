import { Button, HeaderIllustration } from '@/components'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <nav className="flex items-center justify-between py-4 px-8 border-b border-gray-300">
        <div className="flex items-center justify-between">
          <MessageCircle size={18} />
          <span className="font-bold text-lg ml-2">ChatterBox</span>
        </div>
        <Button>Sign In</Button>
      </nav>
      <section className="max-w-2xl mx-auto text-center my-14 space-y-6">
        <h1 className="text-7xl font-bold leading-none">
          Just a Next 13 experiment
        </h1>
        <p className="text-xl text-gray-700 tracking-wider">
          This project is just for testing Next 13 new functionalities
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button variant="outlined" size="lg">
            Repository
          </Button>
          <Link href="/signin">
            <Button size="lg">Sign In</Button>
          </Link>
        </div>
      </section>
      <HeaderIllustration />

      <footer className="flex items-center justify-between py-4 px-8 max-w-7xl mx-auto border-t border-gray-300">
        <div className="flex items-center justify-between">
          <MessageCircle size={16} />
          <span className="text-gray-700 text-sm ml-2">
            Built by @rafaelszago
          </span>
        </div>
      </footer>
    </main>
  )
}
