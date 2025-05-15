'use client';

import { useTranslations } from 'next-intl';

import { Container, Title } from './header.styled';

export default function Header() {
  const t = useTranslations('header');

  return (
    <Container>
      <Title>{t('title')}</Title>
    </Container>
  );
}
