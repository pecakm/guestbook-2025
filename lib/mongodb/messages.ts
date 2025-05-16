import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';

import { Message } from '@/models';
import { Message as MessageType } from '@/types';

import { sessionOptions } from '../iron-session';

import connectDB from './connect';

export async function getMessages() {
  await connectDB();
  const messages = await Message.find().sort({ createdAt: -1 });

  if (!messages) {
    return [];
  }

  return JSON.parse(JSON.stringify(messages));
}

export async function createMessage(messageData: Partial<MessageType>) {
  const session = await getIronSession<{ nickname?: string }>(await cookies(), sessionOptions);
  await connectDB();

  const messageToCreate = session?.nickname
    ? { content: messageData.content, userId: session.nickname }
    : messageData;

  const newMessage = await Message.create(messageToCreate);
  
  return newMessage;
}
