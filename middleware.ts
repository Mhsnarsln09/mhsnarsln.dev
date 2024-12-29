import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = ['/tr', '/en'].every(
    (locale) => !pathname.startsWith(locale) && pathname !== locale
  )
 
  if (pathnameIsMissingLocale) {
    const locale = request.cookies.get('NEXT_LOCALE')?.value || 'tr'
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}
 
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 