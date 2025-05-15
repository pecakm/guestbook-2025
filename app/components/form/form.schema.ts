import { z } from 'zod';

export const schema = z.object({
  name: z.string().min(1, 'name.required').max(32, 'name.maxLength'),
  message: z.string().min(1, 'message.required').max(512, 'message.maxLength'),
});
