"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Container, Section } from "../craft";

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
  media?: Media | React.ReactNode;
  cta?: CTA;
  id?: string;
};

const SectionCTitle = ({ children }: Props) => {
  return (
    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
      {children}
    </h2>
  );
};

const SectionCDescription = ({ children }: Props) => {
  return (
    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed">
      {children}
    </p>
  );
};

const SectionC = ({ reverse, children, media, cta, id }: Props) => {
  const renderMedia = () => {
    if (!media) {
      return (
        <Image
          src="/placeholder.svg"
          width="1280"
          height="720"
          alt="Placeholder"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      );
    }

    if (typeof media === 'object' && 'src' in media && 'alt' in media) {
      return (
        <Image
          src={`/${media.src}`}
          width="1280"
          height="720"
          alt={media.alt}
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      );
    }

    return (
      <div className="mx-auto aspect-video overflow-hidden rounded-xl sm:w-full">
        {media}
      </div>
    );
  };

  return (
    <Section id={id}>
      <Container className="container grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
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
        {renderMedia()}
      </Container>
    </Section>
  );
};

export { SectionCTitle, SectionC, SectionCDescription };