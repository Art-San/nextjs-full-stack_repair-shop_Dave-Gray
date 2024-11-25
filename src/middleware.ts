import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware'
import { NextRequest } from 'next/server'

export default withAuth(
  async function middleware(request: NextRequest) {
    //console.log(request)
  },
  {
    isReturnToCurrentPage: true
  }
)

export const config = {
  matcher: [
    /*
     * Сопоставьте все пути запроса, кроме тех, которые начинаются с:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - auth
     * - favicon.ico (favicon file)
     * - robots.txt
     * - images
     * - login
     * - homepage (представлено знаком $ после начала /)
     */
    '/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|login|$).*)'
  ]
}
