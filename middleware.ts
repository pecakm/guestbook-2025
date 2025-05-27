import { NextRequest, NextResponse } from 'next/server';

import { getSession } from '@/lib/iron-session';
import { Path } from '@/enums';

export async function middleware(req: NextRequest) {
  const session = await getSession();
  const isLoggedIn = !!session.id;

  if (isLoggedIn) {
    return NextResponse.redirect(new URL(Path.Home, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/register'],
};
