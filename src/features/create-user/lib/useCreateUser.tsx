"use client";

import { useState } from "react";
import { CreateUserFormData } from "../model/schema";
import { toast } from "sonner";

export type UseCreateUserReturn = {
  handleFormSubmit: (data: CreateUserFormData) => Promise<void>;
  isSubmitting: boolean;
};


export const useCreateUser = (): UseCreateUserReturn => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (data: CreateUserFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Пользователь успешно создан", {
        description: (
          <ul>
            <li>Имя: {data.name}</li>
            <li>Email: {data.email}</li>
          </ul>
        ),
      });
    } catch (error: unknown) {
      console.error("Ошибка при отправке формы:", error);
      toast.error("Ошибка при создании пользователя", {
        description: "Пожалуйста, попробуйте ещё раз.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleFormSubmit, isSubmitting };
};
