'use client';

import { createContext, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';

import { api } from '@/lib/axios';
import { QueryKey } from '@/lib/react-query';

import { Props, Session } from './useSession.types';

const SessionContext = createContext<Session | undefined>(undefined);

export function useSession() {
  const context = useContext(SessionContext);
  return context;
}

export function SessionProvider({ children }: Props) {
  const { data: session } = useQuery({
    queryKey: [QueryKey.Session],
    queryFn: async () => {
      const res = await api.get('/session');
      return res.data;
    },
  });

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}
