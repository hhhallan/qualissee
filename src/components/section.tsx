"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

type Media = {
  src: string;
  alt: string;
};

type CTA = {
  label: string;
  href: string;
};

type Props = {
  children: React.ReactNode;
  reverse?: boolean;
  media?: Media;
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
const Section = ({ reverse, children, media, cta }: Props) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className={cn("space-y-6", { "lg:order-last": reverse })}>
          <div className="space-y-2">{children}</div>
          {cta && (
            <Button asChild size="lg">
              <Link href={`/${cta?.href}` || "#"} prefetch={false}>
                {cta.label || "Label"}
              </Link>
            </Button>
          )}
        </div>
        <Image
          src={`/${media?.src || "placeholder.svg"}`}
          width="1280"
          height="720"
          alt={media?.alt || "Image"}
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      </div>
    </section>
  );
};

export { SectionTitle, Section, SectionDescription };
