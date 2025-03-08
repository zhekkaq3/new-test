'use client';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/shared/ui/dialog/Dialog';
import { ReactNode, useState } from 'react';

type ModalProps = {
  trigger: ReactNode;
  title?: string;
  description?: string;
  children: ReactNode;
};

export const Modal = ({
  trigger,
  title,
  description,
  children,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <Dialog open={isOpen} onOpenChange={(op) => (op ? open() : close())}>
      <DialogTrigger asChild onClick={open}>
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
