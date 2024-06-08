import { FlipWords } from "@/components/ui/flip-words";

export const Hero = () => {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <section
      id="home"
      className="flex h-[75vh] w-full items-center justify-center"
    >
      <div className="container px-4 text-center md:px-6">
        <h1 className="text-5xl font-normal leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          Découvrez notre <br className="hidden md:block" />
          <FlipWords words={words} className="text-green-500" /> solution.
        </h1>
        <p className="description mx-auto mt-6 max-w-3xl">
          Simplifiez votre workflow et concentrez-vous sur ce qui compte
          vraiment. Notre nouvelle solution est là pour vous aider.
        </p>
      </div>
    </section>
  );
};
