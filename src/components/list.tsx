"use client";

import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  id?: string;
  secondary?: boolean;
};
export const List = ({
  children,
  title,
  description,
  id,
  secondary,
}: Props) => {
  const activeClass = secondary
    ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
    : "md:grid-cols-2 lg:grid-cols-4";

  return (
    <section id={id || ""} className="section">
      <div className="container px-4 text-center md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="title">{title}</h2>
          <p className="description mx-auto max-w-[700px]">{description}</p>
        </div>
        <div className={cn("mt-12 grid grid-cols-1 gap-6", activeClass)}>
          {children}
        </div>
      </div>
    </section>
  );
};
