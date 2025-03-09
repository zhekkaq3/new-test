"use client";

import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/shared/ui/input/Input";

type FormInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  isPassword?: boolean;
  className?: string;
};

export const FormInput = ({
  name,
  label,
  placeholder,
  disabled,
  isPassword,
  className,
}: FormInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Input
          {...field}
          label={label}
          placeholder={placeholder}
          error={errors[name]?.message as string}
          disabled={disabled}
          isPassword={isPassword}
          className={className}
        />
      )}
    />
  );
};
