import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';

import { sessionOptions } from '@/lib/iron-session';

export async function POST() {
  const session = await getIronSession(await cookies(), sessionOptions);
  session.destroy();
  
  return NextResponse.json({ message: 'Logged out' });
}
