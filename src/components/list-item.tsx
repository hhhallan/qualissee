"use client";

import { useQHSEModal } from "@/store/use-qhse-modal";
import Image from "next/image";

type Props = {
  mediaSrc?: string;
  title: string;
  modalId: string;
};

export const ListItem = ({ mediaSrc, title, modalId }: Props) => {
  const { open } = useQHSEModal();
  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
      onClick={() => open(modalId)}
    >
      <Image
        src={`/${mediaSrc || "placeholder.svg"}`}
        alt={title}
        width={500}
        height={400}
        className="h-64 w-full object-cover"
      />
      <div className="bg-white p-4 dark:bg-gray-950">
        <h3 className="text-center text-xl font-medium">{title}</h3>
      </div>
    </div>
  );
};
