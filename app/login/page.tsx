'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import { Path } from '@/enums';

import { Form, SuccessInfo } from './components';
import { Container, Text } from './page.styled';

export default function Login() {
  const t = useTranslations('login');
  const searchParams = useSearchParams();
  const success = searchParams.get('success') === 'true';

  return (
    <Container>
      <Link href={Path.Home}>{t('back')}</Link>
      {success && <SuccessInfo />}
      <Form />
      <Text>
        {t('noAccount')}
        <Link href={Path.Register}>{t('signUp')}</Link>
      </Text>
    </Container>
  );
}
