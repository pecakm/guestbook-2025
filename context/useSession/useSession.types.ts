import { ReactNode } from 'react';

export type Session = {
  id: string | null;
  nickname: string | null;
};

export type Props = {
  children: ReactNode;
};
