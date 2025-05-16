import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

import { User } from '@/models';
import { findUser } from '@/lib/mongodb';

export async function POST(req: NextRequest) {
  const { nickname, password } = await req.json();
  const exists = await findUser(nickname);

  if (exists) {
    return NextResponse.json({ error: 'Nickname taken' }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);
  await User.create({ nickname, password: hashed });

  return NextResponse.json({ message: 'Registered' });
}
