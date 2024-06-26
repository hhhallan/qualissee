import WordRotate from "@/components/magicui/word-rotate";

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
      className="flex h-[50vh] w-full items-center justify-center md:h-[65vh]"
    >
      <div className="container px-4 text-center md:px-6">
        <h1 className="text-5xl font-normal leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          Boostez votre entreprise avec notre expertise en{" "}
          <WordRotate className="text-primary" words={words} />
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
