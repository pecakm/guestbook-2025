'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import { api } from '@/lib/axios';
import { Path } from '@/enums';

import { FormFields } from './page.types';
import { schema } from './page.schema';
import { Button, Input } from './page.styled';

export default function RegisterPage() {
  const t = useTranslations('register');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormFields) => {
    await api.post('/register', data);
    router.push(Path.Login);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label={t('nickname.label')}
        error={!!errors.nickname}
        helperText={errors.nickname?.message && t(errors.nickname.message)}
        {...register('nickname')}
      />
      <Input
        type="password"
        label={t('password.label')}
        error={!!errors.password}
        helperText={errors.password?.message && t(errors.password.message)}
        {...register('password')}
      />
      <Button type="submit">{t('signUp')}</Button>
    </form>
  );
}
