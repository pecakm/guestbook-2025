import { z } from 'zod';

export const schema = z.object({
  message: z.string().min(1, 'message.required').max(512, 'message.maxLength'),
});
