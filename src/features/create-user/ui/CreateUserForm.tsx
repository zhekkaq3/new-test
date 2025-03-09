"use client";

import { Button } from "@/shared/ui/button/Button";
import { Form } from "@/shared/ui/form/Form";
import { FormInput } from "@/shared/ui/form/FormField";
import { CreateUserFormData, createUserSchema } from "../model/schema";
import { useCreateUser } from "../lib/useCreateUser";

export const CreateUserForm = () => {
  const { handleFormSubmit, isSubmitting } = useCreateUser();

  const onSubmit = async (data: CreateUserFormData) => {
    await handleFormSubmit(data);
  };

  return (
    <Form
      onSubmit={onSubmit}
      schema={createUserSchema}
      className="flex flex-col rounded-xl border bg-card text-card-foreground shadow w-[350px] gap-3 p-6"
    >
      <div className="flex flex-col space-y-1.5">
        <div className="font-semibold leading-none tracking-tight">
          Создание пользователя
        </div>
        <div className="text-sm text-muted-foreground">
          Заполните форму, чтобы создать нового пользователя.
        </div>
      </div>
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
        {isSubmitting ? "Отправка..." : "Создать пользователя"}
      </Button>
    </Form>
  );
};
