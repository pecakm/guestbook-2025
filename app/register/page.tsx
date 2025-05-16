'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Path } from '@/enums';

import { Form } from './components';
import { Container, Text } from './page.styled';

export default function Register() {
  const t = useTranslations('register');

  return (
    <Container>
      <Link href={Path.Home}>{t('back')}</Link>
      <Form />
      <Text>
        {t('haveAccount')}
        <Link href={Path.Login}>{t('signIn')}</Link>
      </Text>
    </Container>
  );
}
