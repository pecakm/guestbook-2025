import { NextResponse } from 'next/server';

import { getSession } from '@/lib/iron-session';

export async function POST() {
  const session = await getSession();
  session.destroy();
  
  return NextResponse.json({ message: 'Logged out' });
}
