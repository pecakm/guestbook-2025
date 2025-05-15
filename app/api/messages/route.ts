import { NextRequest, NextResponse } from 'next/server';

import { getMessages, createMessage } from '@/lib/mongodb';

export async function GET() {
  const messages = await getMessages();
  
  return NextResponse.json(messages);
}

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ error: 'api.messages.post.error.message' }, { status: 400 });
  }

  const newMessage = await createMessage({ content:message });

  return NextResponse.json(newMessage);
}
