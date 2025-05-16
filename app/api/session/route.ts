import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';

import { sessionOptions } from '@/lib/iron-session';

export async function GET() {
  try {
    const session = await getIronSession<{ nickname?: string }>(await cookies(), sessionOptions);

    const response = NextResponse.json(
      session.nickname ? { nickname: session.nickname } : { nickname: null }
    );

    return response;
  } catch (error) {
    console.error('Session error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
