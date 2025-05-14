'use client';

import { useTranslations } from 'next-intl';

import Form from '../form/form';
import MessagesList from '../messagesList/messagesList';

import { Container, Title } from './pageContent.styled';
import { Props } from './pageContent.types';

export default function PageContent({ messages }: Props) {
  const t = useTranslations('home');

  console.log(messages);

  return (
    <Container>
      <Title>{t('title')}</Title>
      <Form />
      <MessagesList />
    </Container>
  );
}
