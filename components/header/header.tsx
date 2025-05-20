'use client';

import { useTranslations } from 'next-intl';

import LanguageButton from '../languageButton/languageButton';
import LoginStatus from '../loginStatus/loginStatus';

import { Container, Title, RightSection } from './header.styled';

export default function Header() {
  const t = useTranslations('components.header');

  return (
    <Container>
      <Title>{t('title')}</Title>
      <RightSection>
        <LanguageButton />
        <LoginStatus />
      </RightSection>
    </Container>
  );
}
