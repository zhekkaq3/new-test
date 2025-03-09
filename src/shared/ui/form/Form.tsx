"use client";

import {
  useForm,
  FormProvider,
  UseFormProps,
  FieldValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { ZodSchema } from "zod";

type FormProps<T extends FieldValues> = {
  children: ReactNode;
  onSubmit: (data: T) => Promise<void>;
  schema?: ZodSchema<T>;
  defaultValues?: UseFormProps<T>["defaultValues"];
  className?: string;
};

export const Form = <T extends FieldValues>({
  children,
  onSubmit,
  schema,
  defaultValues,
  className,
}: FormProps<T>) => {

  const methods = useForm<T>({
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues,
  });

  const submit = methods.handleSubmit(async (data) => {
    await onSubmit(data); 
    methods.reset(); 
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={submit} className={className}>
        {children}
      </form>
    </FormProvider>
  );
};
