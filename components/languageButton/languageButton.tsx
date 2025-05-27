'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import Cookies from 'js-cookie';

import { CookieName, CountryCode } from '@/enums';

import { Container } from './languageButton.styled';

export default function LanguageButton() {
  const locale = useLocale();
  const router = useRouter();
  const isPolish = locale === CountryCode.PL;

  const handleLanguageChange = () => {
    const newLocale = isPolish ? CountryCode.EN : CountryCode.PL;
    Cookies.set(CookieName.Language, newLocale, { path: '/', expires: 365 });
    router.refresh();
  };

  return (
    <Container onClick={handleLanguageChange}>
      {isPolish ? '🇵🇱' : '🇬🇧'}
    </Container>
  );
}
