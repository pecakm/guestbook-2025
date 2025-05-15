'use client';

import { useTranslations } from 'next-intl';
import { useQuery } from '@tanstack/react-query';

import { Message as MessageType } from '@/types';
import { api } from '@/lib/axios';

import Message from '../message/message';

import { Container, Error, Loading, Title } from './messagesList.styled';

export default function MessagesList() {
  const t = useTranslations('home.messagesList');

  const { data, error, isLoading } = useQuery({
    queryKey: ['messages'],
    queryFn: () => api.get('/messages').then((res) => res.data),
  });

  return (
    <Container>
      <Title>{t('title')}</Title>
      {isLoading && <Loading>{t('loading')}</Loading>}
      {error && <Error>{error.message}</Error>}
      {data?.map((message: MessageType) => (
        <Message key={message._id} message={message} />
      ))}
    </Container>
  );
}
