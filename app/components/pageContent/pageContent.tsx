'use client';

import { useTranslations } from 'next-intl';

import { Container, Title } from './pageContent.styled';
import { Props } from './pageContent.types';

export default function PageContent({ children }: Props) {
  const t = useTranslations('home');

  return (
    <Container>
      <Title>{t('title')}</Title>
      {children}
    </Container>
  );
}
