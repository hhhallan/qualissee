"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  name: string;
  type: string;
  placeholder?: string;
  label: string;
  message?: boolean;
};

export const LInput = ({ type, name, placeholder, label, message }: Props) => {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      {message ? (
        <Textarea placeholder={placeholder || label} id={name} />
      ) : (
        <Input type={type} id={name} placeholder={placeholder || label} />
      )}
    </div>
  );
};
