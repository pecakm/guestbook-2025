'use client';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { Container, Input, Button } from './form.styled';
import { schema } from './form.schema';
import { FormFields, Props } from './form.types';

export default function Form({ sendMessage }: Props) {
  const t = useTranslations('home.form');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormFields) => {
    const newMessage = await sendMessage({ content: data.message });

    if (newMessage) {
      reset();
      router.refresh();
    }
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
      <Button type="submit">{t('button')}</Button>
    </Container>
  );
}
