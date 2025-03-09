import { Modal } from "@/shared/ui/modal/Modal";
import { Button } from "@/shared/ui/button/Button";
import { CreateUserFormForModal } from "./CreateUserFormForModal";

export const CreateUserModal = () => {
  return (
    <>
      <Modal
        trigger={
          <Button size="lg" className="w-[350px] cursor-pointer">
            Создать пользователя Modal
          </Button>
        }
        title="Создание пользователя"
        description="Заполните форму, чтобы создать нового пользователя."
      >
        <CreateUserFormForModal />
      </Modal>
    </>
  );
};
