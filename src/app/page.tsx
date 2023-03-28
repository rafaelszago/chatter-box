import { Navbar } from '@/components/navbar'
import { Button, HeaderIllustration } from '@/components/ui'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* @ts-ignore-error */}
      <Navbar />
      <section className="px-6 md:px-0 max-w-2xl mx-auto text-center my-10 space-y-6">
        <h1 className="text-6xl md:text-7xl font-bold leading-none">
          Express Yourself in Short Messages
        </h1>
        <p className="text-lg md:text-xl text-gray-700 tracking-wider">
          Share short and sweet messages like Twitter! Stay connected with
          friends and family while expressing yourself.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button variant="outlined" size="lg">
            About
          </Button>
          <Link href="/signin">
            <Button size="lg">Start now</Button>
          </Link>
        </div>
      </section>

      <HeaderIllustration />

      <footer className="flex items-center justify-center md:justify-between py-4 px-8 max-w-7xl mx-auto border-t border-gray-300">
        <div className="flex items-center justify-between">
          <MessageCircle size={16} />
          <span className="text-gray-700 text-sm ml-2">
            Built by{' '}
            <Link
              href="https://github.com/rafaelszago"
              target="_blank"
              rel="noopenner noreferer"
            >
              @rafaelszago
            </Link>
          </span>
        </div>
      </footer>
    </main>
  )
}
