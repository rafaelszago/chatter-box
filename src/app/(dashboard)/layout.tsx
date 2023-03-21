import { Navbar } from '@/components'

type DashboardLayoutProps = {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* @ts-ignore-error */}
      <Navbar />
      <div className="max-w-4xl mx-auto py-8">{children}</div>
    </div>
  )
}
