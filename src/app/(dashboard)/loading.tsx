import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="absolute top-0 right-0 flex h-screen w-screen items-center justify-center">
      <Loader2 className="animate-spin" />
    </div>
  )
}
