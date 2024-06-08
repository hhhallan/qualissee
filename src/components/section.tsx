"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

type CTA = {
  label: string;
  href: string;
};

type Props = {
  children: React.ReactNode;
  reverse?: boolean;
  mediaSrc?: string;
  cta?: CTA;
};

const SectionTitle = ({ children }: Props) => {
  return (
    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
      {children}
    </h2>
  );
};
const SectionDescription = ({ children }: Props) => {
  return (
    <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
      {children}
    </p>
  );
};

// TODO: ajouter si c'est une vidéo
const Section = ({
  reverse,
  children,
  mediaSrc = "placeholder.svg",
  cta,
}: Props) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className={cn("space-y-6", { "lg:order-last": reverse })}>
          <div className="space-y-2">{children}</div>
          {cta && (
            <Button
              asChild
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <Link
                href={`/${cta?.href}` || "#"}
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                {cta.label || "Label"}
              </Link>
            </Button>
          )}
        </div>
        <Image
          src={`/${mediaSrc}`}
          width="550"
          height="310"
          alt="Image"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      </div>
    </section>
  );
};

export { SectionTitle, Section, SectionDescription };
