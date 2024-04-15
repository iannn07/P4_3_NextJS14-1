import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  // let session;

  // setTimeout(async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  // session = currentSession;
  // }, 3600000);

  console.log(session);

  if (!session) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/auth-client/:path*'],
};
