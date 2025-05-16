'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { api } from '@/lib/axios';

import { Container, Title } from './header.styled';

export default function Header() {
  const t = useTranslations('header');
  const [nickname, setNickname] = useState<string | null>(null);

  useEffect(() => {
    api.get('/session').then((res) => setNickname(res.data.nickname));
  }, []);

  const handleLogout = () => {
    api.post('/logout');
  };

  return (
    <Container>
      <Title>{t('title')}</Title>
      {nickname ? (
        <>
          <p>{nickname}</p>
          <button onClick={handleLogout}>{t('logout')}</button>
        </>
      ) : (
        <p>Not logged in</p>
      )}
    </Container>
  );
}
