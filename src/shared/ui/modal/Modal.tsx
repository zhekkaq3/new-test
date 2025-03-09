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
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type ModalProps = {
  trigger: ReactNode;
  closeButton?: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode;
};

type ModalContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export const Modal = ({
  trigger,
  closeButton,
  title,
  description,
  children,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          {children}
          <DialogClose>{closeButton}</DialogClose>
        </DialogContent>
      </Dialog>
    </ModalContext.Provider>
  );
};
