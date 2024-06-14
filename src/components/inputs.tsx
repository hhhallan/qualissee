"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type InputProps = {
  name: string;
  type: string;
  placeholder?: string;
  label: string;
  message?: boolean;
};

type Choices = {
  value: string;
  label: string;
};

type SelectProps = {
  label: string;
  choices: Choices[];
};

export const LSelect = ({ label, choices }: SelectProps) => {
  return (
    <div>
      <Label>{label}</Label>
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          {choices.map((choice, index) => (
            <SelectItem key={index} value={choice.value}>
              {choice.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

// TODO: Créer un composant Textarea, etc
const LInput = ({ type, name, placeholder, label, message }: InputProps) => {
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

export { LInput };
