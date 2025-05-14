'use client';

import { useTranslations } from 'next-intl';

import Form from '../form/form';
import MessagesList from '../messagesList/messagesList';

import { Container, Title } from './pageContent.styled';

export default function PageContent() {
  const t = useTranslations('home');

  return (
    <Container>
      <Title>{t('title')}</Title>
      <Form />
      <MessagesList />
    </Container>
  );
}
