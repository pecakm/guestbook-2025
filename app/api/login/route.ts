import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { getIronSession } from 'iron-session';

import { sessionOptions } from '@/lib/iron-session';
import { findUser } from '@/lib/mongodb';

export async function POST(req: NextRequest) {
  const session = await getIronSession<{ id?: string, nickname?: string }>(await cookies(), sessionOptions);
  const { nickname, password } = await req.json();
  const user = await findUser(nickname, true);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  session.id = user._id;
  session.nickname = user.nickname;
  await session.save();
  const response = NextResponse.json({ message: 'Logged in' });

  return response;
}
