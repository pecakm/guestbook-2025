'use client';

import { useTranslations } from 'next-intl';

import Message from '../message/message';

import { Container, Title } from './messagesList.styled';
import { Props } from './messagesList.types';

export default function MessagesList({ messages }: Props) {
  const t = useTranslations('home.messagesList');

  const sortedMessages = [...messages].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <Container>
      <Title>{t('title')}</Title>
      {sortedMessages.map((message) => (
        <Message key={message._id} message={message} />
      ))}
    </Container>
  );
}
