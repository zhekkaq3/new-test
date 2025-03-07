import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input, Button } from '@/shared/ui';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
});

type FormData = z.infer<typeof schema>;

export const CreateUserForm = ({ onSubmit }: { onSubmit: (data: FormData) => void }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input {...field} label="Name" error={errors.name?.message} />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input {...field} label="Email" error={errors.email?.message} />
        )}
      />
      <Button type="submit">Create User</Button>
    </form>
  );
};