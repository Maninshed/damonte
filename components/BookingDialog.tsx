"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BookingForm } from "./BookingForm";

interface BookingDialogProps {
  children: React.ReactNode;
}

export function BookingDialog({ children }: BookingDialogProps) {
  const [open, setOpen] = useState(false);

  const handleSuccess = () => {
    // Close dialog after successful booking
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            Book Your <span className="text-gradient">Discovery Call</span>
          </DialogTitle>
          <DialogDescription className="text-base">
            Schedule a free 30-minute consultation to discuss your AI strategy and 
            get expert guidance. We&apos;ll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6">
          <BookingForm onSuccess={handleSuccess} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
