'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import { api } from '@/lib/axios';
import { Path } from '@/enums';

import { FormFields } from './form.types';
import { schema } from './form.schema';
import { Button, Container, Input } from './form.styled';

export default function Form() {
  const t = useTranslations('register.form');
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
    router.push(`${Path.Login}?success=true`);
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
      <Button type="submit">{t('signUp')}</Button>
    </Container>
  );
}
