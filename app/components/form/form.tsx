'use client';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/lib/axios';
import { QueryKey } from '@/lib/react-query';

import { Container, Input, Button } from './form.styled';
import { schema } from './form.schema';
import { FormFields } from './form.types';

export default function Form() {
  const t = useTranslations('home.form');
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });
  const { mutate: createMessage, isPending } = useMutation({
    mutationFn: (message: FormFields) => api.post('/messages', message),
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
        label={t('message.label')}
        {...register('message')}
        error={!!errors.message}
        helperText={errors.message?.message && t(errors.message.message)}
        multiline
        minRows={3}
        autoFocus
      />
      <Button type="submit" disabled={isPending}>{t('button')}</Button>
    </Container>
  );
}
