'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Path } from '@/enums';

import { Form } from './components';
import { Container, Text } from './page.styled';

export default function Login() {
  const t = useTranslations('login');

  return (
    <Container>
      <Link href={Path.Home}>{t('back')}</Link>
      <Form />
      <Text>
        {t('noAccount')}
        <Link href={Path.Register}>{t('signUp')}</Link>
      </Text>
    </Container>
  );
}
