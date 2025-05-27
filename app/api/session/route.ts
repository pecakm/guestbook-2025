import { NextResponse } from 'next/server';

import { getSession } from '@/lib/iron-session';

export async function GET() {
  try {
    const session = await getSession();
    const response = NextResponse.json(
      session?.id ? { id: session.id, nickname: session.nickname } : { id: null, nickname: null }
    );

    return response;
  } catch (error) {
    console.error('Session error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
