import { Modal } from '@/shared/ui/modal/Modal';
import { Button } from '@/shared/ui/button/Button';
import { CreateUserForm } from './CreateUserForm';

export const CreateUserModal = () => {
  return (
    <>
      <Modal
        trigger={
          <Button className="text-accent-foreground bg-transparent hover:bg-accent hover:text-accent-foreground">
            Создать пользователя
          </Button>
        }
        title="Создание пользователя"
        description="Заполните форму, чтобы создать нового пользователя."
      >
        <CreateUserForm />
      </Modal>
    </>
  );
};
