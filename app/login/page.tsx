'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { Button, TextField } from '@mui/material';

import { api } from '@/lib/axios';
import { Path } from '@/enums';

import { FormFields } from './page.types';
import { schema } from './page.schema';
import { Container } from './page.styled';

export default function LoginPage() {
  const t = useTranslations('login');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormFields) => {
    try {
      await api.post('/login', data);
      router.push(Path.Home);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label={t('nickname.label')}
        error={!!errors.nickname}
        helperText={errors.nickname?.message && t(errors.nickname.message)}
        {...register('nickname')}
      />
      <TextField
        type="password"
        label={t('password.label')}
        error={!!errors.password}
        helperText={errors.password?.message && t(errors.password.message)}
        {...register('password')}
      />
      <Button type="submit">{t('login')}</Button>
    </Container>
  );
}
