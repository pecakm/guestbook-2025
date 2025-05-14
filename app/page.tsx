import { getMessages, addMessage } from '@/lib/mongodb';
import { Message } from '@/types';

import { Form, MessagesList, PageContent } from './components';

export default async function Home() {
  const messages = await getMessages();

  const sendMessage = async (message: Partial<Message>) => {
    'use server';

    const newMessage = await addMessage(message);

    return JSON.parse(JSON.stringify(newMessage));
  };

  return (
    <PageContent>
      <Form sendMessage={sendMessage} />
      <MessagesList messages={messages} />
    </PageContent>
  );
}
