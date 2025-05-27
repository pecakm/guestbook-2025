import { NextRequest, NextResponse } from 'next/server';

import { getMessages, createMessage } from '@/lib/mongodb';

export async function GET() {
  const messages = await getMessages();
  
  return NextResponse.json(messages);
}

export async function POST(req: NextRequest) {
  const { message, name } = await req.json();

  if (!message || !name) {
    return NextResponse.json({ error: 'Message and name are required' }, { status: 400 });
  }

  const newMessage = await createMessage({ content: message, name });

  return NextResponse.json(newMessage);
}
