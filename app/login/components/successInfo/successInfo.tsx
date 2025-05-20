'use client';

import { useTranslations } from 'next-intl';

import { Container } from './successInfo.styled';

export default function SuccessInfo() {
  const t = useTranslations('login.successInfo');

  return (
    <Container>
      {t('success')}
    </Container>
  );
}
