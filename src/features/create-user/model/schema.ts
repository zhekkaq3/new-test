import { z } from "zod";

export const createUserSchema = z
  .object({
    name: z
      .string()
      .min(1, "Имя обязательно для заполнения")
      .min(2, "Имя должно содержать минимум 2 символа")
      .max(50, "Имя должно быть не длиннее 50 символов")
      .regex(
        /^[a-zA-Zа-яА-Я\s]+$/,
        "Имя может содержать только буквы и пробелы"
      ),

    email: z
      .string()
      .min(1, "Email обязателен для заполнения")
      .email("Некорректный формат email")
      .max(100, "Email должен быть не длиннее 100 символов"),

    password: z
      .string()
      .min(1, "Пароль обязателен для заполнения")
      .min(8, "Пароль должен содержать минимум 8 символов")
      .max(50, "Пароль должен быть не длиннее 50 символов")
      .regex(
        /^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[A-Za-zА-Яа-я\d!@#$%^&*()_+]+$/,
        "Пароль должен содержать хотя бы одну букву и одну цифру"
      ),

    confirmPassword: z
      .string()
      .min(1, "Подтверждение пароля обязательно для заполнения"),
  })

  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export type CreateUserFormData = z.infer<typeof createUserSchema>;
