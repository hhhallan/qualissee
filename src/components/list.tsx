"use client";

import { Container, Section } from "./craft";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  id?: string;
  secondary?: boolean;
};
export const List = ({ children, title, description, id }: Props) => {
  return (
    <Section id={id} className="section">
      <Container className="container text-center">
        <div className="space-y-3 text-center">
          <h2 className="title">{title}</h2>
          <p className="description mx-auto max-w-[700px]">{description}</p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {children}
        </div>
      </Container>
    </Section>
  );
};
