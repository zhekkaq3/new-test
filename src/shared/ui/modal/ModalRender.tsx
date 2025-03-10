"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/shared/ui/dialog/Dialog";
import {
  ReactNode,
  useState,
} from "react";

type ModalProps = {
  trigger: ReactNode;
  closeButton?: ReactNode;
  title?: string;
  description?: string;
  children: (props: { onClose: () => void }) => ReactNode;
};

export const Modal = ({
  trigger,
  closeButton,
  title,
  description,
  children,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false); 

  return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          {children({onClose})}
          <DialogClose>{closeButton}</DialogClose>
        </DialogContent>
      </Dialog>
  );
};
