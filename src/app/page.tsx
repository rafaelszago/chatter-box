import { Button, HeaderIllustration, Navbar } from '@/components'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* @ts-ignore-error */}
      <Navbar />
      <section className="max-w-2xl mx-auto text-center my-14 space-y-6">
        <h1 className="text-7xl font-bold leading-none">
          Express Yourself in Short Messages
        </h1>
        <p className="text-xl text-gray-700 tracking-wider">
          Share short and sweet messages like Twitter! Stay connected with
          friends and family while expressing yourself.
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
