'use client';

import { useTranslations } from 'next-intl';
import { useQuery } from '@tanstack/react-query';

import { Message as MessageType } from '@/types';
import { api } from '@/lib/axios';
import { QueryKey } from '@/lib/react-query';

import Message from '../message/message';

import { Container, Error, Loading, Title } from './messagesList.styled';
import { containerVariants } from './messagesList.variants';

export default function MessagesList() {
  const t = useTranslations('home.messagesList');

  const { data, error, isLoading } = useQuery({
    queryKey: [QueryKey.Messages],
    queryFn: () => api.get('/messages').then((res) => res.data),
  });

  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Title>{t('title')}</Title>
      {isLoading && <Loading>{t('loading')}</Loading>}
      {error && <Error>{error.message}</Error>}
      {data?.map((message: MessageType) => (
        <Message key={message._id} message={message} />
      ))}
    </Container>
  );
}
