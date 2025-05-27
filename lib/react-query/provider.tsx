'use client';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './client';
import { Props } from './provider.types';

export function ReactQueryProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
