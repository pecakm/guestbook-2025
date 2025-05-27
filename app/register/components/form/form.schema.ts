import { z } from 'zod';

export const schema = z.object({
  nickname: z.string()
    .min(1, 'nickname.required')
    .max(32, 'nickname.maxLength')
    .regex(/^[^\s]+$/, 'nickname.noSpaces'),
  password: z.string()
    .min(8, 'password.minLength')
    .regex(/[A-Z]/, 'password.uppercase')
    .regex(/[a-z]/, 'password.lowercase')
    .regex(/[0-9]/, 'password.number')
    .regex(/[^A-Za-z0-9]/, 'password.specialCharacter'),
});
