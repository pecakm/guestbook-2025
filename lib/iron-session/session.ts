import { cookies } from 'next/headers';
import { SessionOptions, getIronSession } from 'iron-session';

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: 'auth_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

export async function getSession() {
  const session = await getIronSession<{ id?: string, nickname?: string }>(await cookies(), sessionOptions);
  return session;
}
