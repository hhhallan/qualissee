"use client";

import { Container, Section } from "@/components/craft";
import { DATA } from "@/constants/resume";

export const SeeMore = () => {
  const data = DATA.landing.voirPlus;

  return (
    <Section className="section">
      <Container className="container">
        <div className="space-y-4 text-center">
          <h2 className="title">{data.title}</h2>
          <p className="description mx-auto max-w-[700px]">
            {data.description}
          </p>
        </div>
        <div className="mt-12">
          <div className="grid gap-6 md:grid-cols-2">
            {data.items.map((i, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <video className="aspect-video w-full" controls>
                  <source src={i.src} type="video/mp4" />
                </video>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{i.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {i.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
