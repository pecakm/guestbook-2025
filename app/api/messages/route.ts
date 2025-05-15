import { getMessages } from '@/lib/mongodb';

export async function GET() {
  const messages = await getMessages();
  
  return Response.json(messages);
}
