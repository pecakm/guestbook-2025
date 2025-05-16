'use client';

import { useTranslations } from 'next-intl';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { api } from '@/lib/axios';
import { QueryKey } from '@/lib/react-query';

import { Button, Container, Name, Title } from './header.styled';

export default function Header() {
  const t = useTranslations('header');
  const queryClient = useQueryClient();

  const { data: session } = useQuery({
    queryKey: [QueryKey.Session],
    queryFn: async () => {
      const res = await api.get('/session');
      return res.data;
    },
  });

  const handleLogout = async () => {
    await api.post('/logout');
    queryClient.setQueryData([QueryKey.Session], null);
  };

  return (
    <Container>
      <Title>{t('title')}</Title>
      {session?.nickname && (
        <>
          <Name>{session.nickname}</Name>
          <Button onClick={handleLogout}>{t('logout')}</Button>
        </>
      )}
    </Container>
  );
}
