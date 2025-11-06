"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { type ReactNode, useState } from "react";

interface FormDialogProps {
  title: string;
  description: string;
  trigger: ReactNode;
  children: (closeDialog: () => void, onFormSuccess: () => void) => ReactNode;
  onSuccess: () => void;
}

export function FormDialog({
  title,
  description,
  trigger,
  children,
  onSuccess,
}: FormDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => {
    setIsOpen(false);
  };

  const handleFormSuccess = () => {
    onSuccess();
    closeDialog();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children(closeDialog, handleFormSuccess)}
      </DialogContent>
    </Dialog>
  );
}
