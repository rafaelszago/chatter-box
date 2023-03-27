import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req })
    const isAuthenticated = !!token
    const isAuthPage = req.nextUrl.pathname.startsWith('/signin')

    if (isAuthPage) {
      if (isAuthenticated) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
      }

      return null
    }

    if (!isAuthenticated) {
      let from = req.nextUrl.pathname
      if (req.nextUrl.search) {
        from += req.nextUrl.search
      }

      return NextResponse.redirect(
        new URL(`/signin?from=${encodeURIComponent(from)}`, req.url)
      )
    }
  },
  {
    callbacks: {
      async authorized() {
        return true
      }
    }
  }
)

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/signin',
    '/signup',
    '/profiles/:path*',
    '/settings'
  ]
}
