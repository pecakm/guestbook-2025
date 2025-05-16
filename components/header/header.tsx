'use client';

import { useTranslations } from 'next-intl';

import LanguageButton from '../languageButton/languageButton';
import LoginStatus from '../loginStatus/loginStatus';

import { Container, Title } from './header.styled';

export default function Header() {
  const t = useTranslations('components.header');

  return (
    <Container>
      <Title>{t('title')}</Title>
      <LanguageButton />
      <LoginStatus />
    </Container>
  );
}
