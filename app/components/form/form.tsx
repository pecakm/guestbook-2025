'use client';

import { useTranslations } from 'next-intl';

import { Container, Input, Button } from './form.styled';

export default function Form() {
  const t = useTranslations('home.form');

  return (
    <Container>
      <Input />
      <Button>{t('button')}</Button>
    </Container>
  );
}
