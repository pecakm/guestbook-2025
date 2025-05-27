import { User } from '@/models';
import { User as UserType } from '@/types';

import connectDB from './connect';

export async function findUser(nickname: string, returnWithPassword: boolean = false) {
  await connectDB();
  const user = await User.findOne({ nickname }).select(
    returnWithPassword ? '+password' : ''
  );

  if (!user) {
    return null;
  }

  return JSON.parse(JSON.stringify(user));
}

export async function createUser(userData: UserType) {
  await connectDB();
  await User.create(userData);
}
