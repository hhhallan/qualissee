"use client";

type Props = {
  children: React.ReactNode;
};

export const SeeMore = ({ children }: Props) => {
  return (
    <section className="section">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="title">En savoir +</h2>
          <p className="description mx-auto max-w-[700px]">
            Découvrez-en plus sur notre entreprise et nos produits.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid gap-6 md:grid-cols-2">{children}</div>
        </div>
      </div>
    </section>
  );
};
