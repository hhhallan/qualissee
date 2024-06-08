"use client";

type Props = {};

import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
];

export function Certification() {
  return (
    <section className="section">
      <div className="container px-4 text-center md:px-6">
        <h2 className="title">Nos certifications</h2>
        <div className="relative mt-16">
          <Marquee className="max-w-full [--duration:40s]">
            {companies.map((logo, idx) => (
              <Image
                key={idx}
                src={`https://cdn.magicui.design/companies/${logo}.svg`}
                className="h-10 w-28 dark:brightness-0 dark:invert"
                alt={logo}
                width={500}
                height={500}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
        </div>
      </div>
    </section>
  );
}
