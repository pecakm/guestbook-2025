'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { AxiosError } from 'axios';

import { api } from '@/lib/axios';
import { Path } from '@/enums';
import { QueryKey } from '@/lib/react-query';

import { FormFields } from './form.types';
import { schema } from './form.schema';
import { Button, Container, Input, ErrorText } from './form.styled';

export default function Form() {
  const t = useTranslations('login.form');
  const router = useRouter();
  const queryClient = useQueryClient();
  const [authError, setAuthError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormFields) => {
    try {
      setAuthError(null);
      await api.post('/login', data);
      queryClient.setQueryData([QueryKey.Session], { nickname: data.nickname });
      router.push(Path.Home);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        setAuthError('invalidCredentials');
      } else {
        setAuthError('error');
      }
    }
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('nickname')}
        label={t('nickname.label')}
        error={!!errors.nickname}
        helperText={errors.nickname?.message && t(errors.nickname.message)}
      />
      <Input
        {...register('password')}
        type="password"
        label={t('password.label')}
        error={!!errors.password}
        helperText={errors.password?.message && t(errors.password.message)}
      />
      {authError && <ErrorText>{t(authError)}</ErrorText>}
      <Button type="submit">{t('signIn')}</Button>
    </Container>
  );
}
