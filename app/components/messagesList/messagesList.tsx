'use client';

import { useTranslations } from 'next-intl';

import Message from '../message/message';

import { Container, Title } from './messagesList.styled';
import { Props } from './messagesList.types';

export default function MessagesList({ messages }: Props) {
  const t = useTranslations('home.messagesList');

  return (
    <Container>
      <Title>{t('title')}</Title>
      {messages.map((message) => (
        <Message key={message._id} message={message} />
      ))}
    </Container>
  );
}
