import { Modal } from "@/shared/ui/modal/Modal";
import { Button } from "@/shared/ui/button/Button";
import { CreateUserForm } from "./CreateUserForm";
import { XIcon } from "lucide-react";

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
        closeButton={
          <Button type="button" className="text-accent-foreground bg-transparent hover:bg-accent hover:text-accent-foreground absolute top-4 right-4 rounded-xs transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
            <XIcon />
            <span className="sr-only">Close</span>
          </Button>
        }
      >
        {({ onClose }) => (
          <>
            <CreateUserForm onClose={onClose} />
          </>
        )}
      </Modal>
    </>
  );
};
