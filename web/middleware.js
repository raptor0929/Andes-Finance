// /middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { nextUrl } = request;
  const locale = nextUrl.locale || 'en';

  return NextResponse.rewrite(new URL(`/${locale}${nextUrl.pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!_next|static|favicon.ico).*)'],
};
