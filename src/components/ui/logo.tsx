import { MessageCircle } from 'lucide-react'

export function Logo() {
  return (
    <div className="flex items-center justify-between">
      <MessageCircle size={18} />
      <span className="font-bold text-lg ml-2">ChatterBox</span>
    </div>
  )
}
