"use client";

type Props = {
  children: React.ReactNode;
};

export const PrestaList = ({ children }: Props) => {
  return (
    <section id="services" className="section">
      <div className="container px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="title">Nos prestations</h2>
          <p className="description mx-auto max-w-[700px]">
            Découvrez nos différentes prestations pour répondre à tous vos
            besoins.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {children}
        </div>
      </div>
    </section>
  );
};
