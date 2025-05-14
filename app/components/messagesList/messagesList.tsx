'use client';

import { useTranslations } from 'next-intl';

import { Container, Title } from './messagesList.styled';

export default function MessagesList() {
  const t = useTranslations('home.messagesList');

  return (
    <Container>
      <Title>{t('title')}</Title>
    </Container>
  );
}
