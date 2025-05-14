import { Message } from '@/models';
import { Message as MessageType } from '@/types';

import connectDB from './connect';

export async function getMessages() {
  await connectDB();
  const messages = await Message.find();

  if (!messages) {
    return [];
  }

  return messages.map((msg) => ({
    _id: msg._id.toString(),
    content: msg.content,
    createdAt: msg.createdAt instanceof Date ? msg.createdAt.toISOString() : msg.createdAt,
  }));
}

export async function addMessage(message: Partial<MessageType>) {
  await connectDB();
  const newMessage = await Message.create(message);
  
  return newMessage;
}
