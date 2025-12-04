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
            Book Your <span className="text-gradient">AI Consultancy Intro Call</span>
          </DialogTitle>
          <DialogDescription className="text-base">
            A free 60-minute call to understand your goals and challenges, introduce you to Damonte&apos;s consultancy approach, and explore how a part-time AI consultant could integrate into your business to drive strategic improvements across all departments.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border/50">
          <p className="text-sm font-medium text-foreground mb-2">During this call, you&apos;ll get:</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• A clear overview of how part-time AI consultancy works</li>
            <li>• Guidance on whether consultancy is the right fit</li>
            <li>• An outline of strategic improvements AI could bring to your operations</li>
          </ul>
        </div>
        <div className="mt-6">
          <BookingForm onSuccess={handleSuccess} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
