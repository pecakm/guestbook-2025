import { Message } from '@/models';
import { Message as MessageType } from '@/types';

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
  await connectDB();
  const newMessage = await Message.create(messageData);
  
  return newMessage;
}
