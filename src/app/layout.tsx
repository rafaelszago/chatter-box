import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChatterBox',
  description: 'Next 13 example app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
