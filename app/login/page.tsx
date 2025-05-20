'use client';

import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

import { Path } from '@/enums';

import { Form, SuccessInfo } from './components';
import { Container, Text, Link, BackLink } from './page.styled';

export default function Login() {
  const t = useTranslations('login');
  const searchParams = useSearchParams();
  const success = searchParams.get('success') === 'true';

  return (
    <Container>
      <BackLink href={Path.Home}><ArrowLeft /> {t('back')}</BackLink>
      {success && <SuccessInfo />}
      <Form />
      <Text>
        {t('noAccount')}
        <Link href={Path.Register}>{t('signUp')}</Link>
      </Text>
    </Container>
  );
}
