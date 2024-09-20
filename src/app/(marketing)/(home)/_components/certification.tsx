"use client";

import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
import { Container, Section } from "../../../../components/craft";
import { DATA } from "@/constants/resume";

export function Certification() {
  const data = DATA.landing.certif;

  return (
    <Section className="section">
      <Container className="container text-center">
        <h2 className="title">{data.title}</h2>
        <div className="relative mt-16">
          <Marquee className="max-w-full [--duration:40s]">
            {data.items.map((item, idx) => (
              <Image
                key={idx}
                src={`https://cdn.magicui.design/companies/${item}.svg`}
                className="h-10 w-28 dark:brightness-0 dark:invert"
                alt={item}
                width={500}
                height={500}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
        </div>
      </Container>
    </Section>
  );
}
