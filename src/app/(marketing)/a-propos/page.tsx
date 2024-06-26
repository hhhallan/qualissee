import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <section className="section">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                L&apos;entreprise
              </h3>
              <p className="description max-w-[600px]">
                Qualissee est une entreprise de consulting spécialisée dans
                l&apos;amélioration des processus opérationnels et la gestion de
                la qualité. Fondée avec la mission d&apos;aider les entreprises
                à atteindre l&apos;excellence, nous offrons une gamme complète
                de services pour optimiser vos opérations et garantir la
                conformité aux normes.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Les fondateurs
              </h3>
              <p className="description max-w-[600px]">
                The platform for rapid progress. Let your team focus on shipping
                features instead of managing infrastructure with automated
                CI/CD, built-in testing, and integrated collaboration.
              </p>
            </div>
          </div>
          <Image
            src="/fondateurs.png"
            width="550"
            height="310"
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
