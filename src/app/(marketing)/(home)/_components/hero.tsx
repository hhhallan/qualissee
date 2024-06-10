import { FlipWords } from "@/components/ui/flip-words";

export const Hero = () => {
  const words = [
    "performance",
    "stratégie",
    "optimisation",
    "conseil",
    "excellence",
  ];

  return (
    <section
      id="home"
      className="flex h-[65vh] w-full items-center justify-center"
    >
      <div className="container px-4 text-center md:px-6">
        <h1 className="text-5xl font-normal leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          Boostez votre entreprise avec notre expertise en{" "}
          <FlipWords words={words} className="text-primary" />
        </h1>
        <p className="description mx-auto mt-6 max-w-3xl">
          Simplifiez vos opérations et concentrez-vous sur ce qui compte
          vraiment. Notre équipe de consultants est là pour vous aider à
          atteindre l&apos;excellence.
        </p>
      </div>
    </section>
  );
};
