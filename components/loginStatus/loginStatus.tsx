'use client';

import Link from 'next/link';
import { useQueryClient } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';

import { api } from '@/lib/axios';
import { QueryKey } from '@/lib/react-query';
import { Path } from '@/enums';
import { useSession } from '@/context/useSession';

import { Container, Name, Button } from './loginStatus.styled';

export default function LoginStatus() {
  const t = useTranslations('components.loginStatus');
  const queryClient = useQueryClient();
  const session = useSession();

  const handleLogout = async () => {
    await api.post('/logout');
    queryClient.setQueryData([QueryKey.Session], null);
  };

  return (
    <Container>
      {session?.nickname ? (
        <>
          <Name>{session.nickname}</Name>
          <Button onClick={handleLogout}>{t('logout')}</Button>
        </>
      ) : (
        <Link href={Path.Login}>{t('signIn')}</Link>
      )}
    </Container>
  );
}
