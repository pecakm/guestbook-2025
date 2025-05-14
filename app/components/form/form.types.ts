import { z } from 'zod';

import { Message } from '@/types';

import { schema } from './form.schema';

export type FormFields = z.infer<typeof schema>;

export type Props = {
  sendMessage: (message: Partial<Message>) => Promise<Message>;
};
