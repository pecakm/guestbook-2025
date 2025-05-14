import { Message } from '@/models';

import connectDB from './connect';

export async function getMessages() {
  await connectDB();
  const messages = await Message.find();

  if (!messages) {
    return { error: 'noMessageFound' };
  }

  return messages;
}

export async function createMessage(content: string) {
  await connectDB();
  const newMessage = await Message.create({ content });
  
  return newMessage;
}
