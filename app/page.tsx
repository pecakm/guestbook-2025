import { Form, MessagesList, PageContent } from './components';

export default async function Home() {
  return (
    <PageContent>
      <Form />
      <MessagesList />
    </PageContent>
  );
}
