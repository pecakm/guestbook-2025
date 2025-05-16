'use client';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import { api } from '@/lib/axios';
import { QueryKey } from '@/lib/react-query';

import { Container, Input, Button } from './form.styled';
import { schema } from './form.schema';
import { FormFields } from './form.types';

export default function Form() {
  const t = useTranslations('home.form');
  const queryClient = useQueryClient();
  const { data: session } = useQuery({
    queryKey: [QueryKey.Session],
    queryFn: async () => {
      const res = await api.get('/session');
      return res.data;
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    reset({ name: session?.nickname });
  }, [session, reset]);

  const { mutate: createMessage, isPending } = useMutation({
    mutationFn: (messageData: FormFields) => api.post('/messages', messageData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.Messages] });
      reset();
    },
  });

  const onSubmit = async (data: FormFields) => {
    createMessage(data);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('message')}
        label={t('message.label')}
        error={!!errors.message}
        helperText={errors.message?.message && t(errors.message.message)}
        multiline
        minRows={3}
        autoFocus
      />
      <Input
        {...register('name')}
        label={session?.nickname ? '' : t('name.label')}
        error={!!errors.name}
        helperText={errors.name?.message && t(errors.name.message)}
        disabled={session?.nickname}
        defaultValue={session?.nickname}
      />
      <Button type="submit" disabled={isPending}>{t('button')}</Button>
    </Container>
  );
}
