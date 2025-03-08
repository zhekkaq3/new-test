'use client';

import { Button } from '@/shared/ui/button/Button';
import { Form } from '@/shared/ui/form/Form';
import { FormInput } from '@/shared/ui/form/FormField';
import { CreateUserFormData, createUserSchema } from '../model/schema';
import { useCreateUser } from '../lib/useCreateUser';

export const CreateUserForm = () => {
  const { handleFormSubmit, isSubmitting } = useCreateUser();

  const onSubmit = async (data: CreateUserFormData) => {
    await handleFormSubmit(data);
    window.location.href = '/';
  };
  return (
    <Form onSubmit={onSubmit} schema={createUserSchema} className="space-y-4">
      <FormInput
        name="name"
        label="Имя"
        placeholder="Введите ваше имя"
        disabled={isSubmitting}
      />
      <FormInput
        name="email"
        label="Email"
        placeholder="Введите ваш email"
        disabled={isSubmitting}
      />
      <FormInput
        name="password"
        label="Пароль"
        placeholder="Введите пароль"
        disabled={isSubmitting}
        isPassword
      />
      <FormInput
        name="confirmPassword"
        label="Подтверждение пароля"
        placeholder="Подтвердите пароль"
        disabled={isSubmitting}
        isPassword
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Отправка...' : 'Создать пользователя'}
      </Button>
    </Form>
  );
};
