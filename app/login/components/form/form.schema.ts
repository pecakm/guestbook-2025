import { z } from 'zod';

export const schema = z.object({
  nickname: z.string().min(1, 'nickname.required'),
  password: z.string().min(1, 'password.required'),
});
