import { getMessages } from '@/lib/mongodb';

import { PageContent } from './components';

export default async function Home() {
  const messages = await getMessages();

  return <PageContent messages={messages} />;
}
