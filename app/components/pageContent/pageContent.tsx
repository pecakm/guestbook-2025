'use client';

import { useTranslations } from 'next-intl';

import { Container, Title } from './pageContent.styled';

export default function PageContent() {
  const t = useTranslations('home');

  return (
    <Container>
      <Title>{t('title')}</Title>
    </Container>
  );
}
