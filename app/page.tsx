import { getMessages, addMessage } from '@/lib/mongodb';
import { Message } from '@/types';

import { Form, MessagesList, PageContent } from './components';

export default async function Home() {
  const messages = await getMessages();

  const sendMessage = async (message: Partial<Message>) => {
    'use server';

    await addMessage(message);
  };

  return (
    <PageContent>
      <Form sendMessage={sendMessage} />
      <MessagesList messages={messages} />
    </PageContent>
  );
}
