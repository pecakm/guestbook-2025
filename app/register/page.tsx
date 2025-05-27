'use client';

import { useTranslations } from 'next-intl';
import { ArrowLeft } from 'lucide-react';

import { Path } from '@/enums';

import { Form } from './components';
import { Container, Text, BackLink, Link } from './page.styled';

export default function Register() {
  const t = useTranslations('register');

  return (
    <Container>
      <BackLink href={Path.Home}><ArrowLeft /> {t('back')}</BackLink>
      <Form />
      <Text>
        {t('haveAccount')}
        <Link href={Path.Login}>{t('signIn')}</Link>
      </Text>
    </Container>
  );
}
