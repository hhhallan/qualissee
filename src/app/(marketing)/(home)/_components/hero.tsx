import { Container, Section } from "@/components/craft";
import WordRotate from "@/components/magicui/word-rotate";
import { DATA } from "@/constants/resume";

export const Hero = () => {
  const data = DATA.landing.hero;
  const words: string[] = Array.from(data.title.words);
  const words2: string[] = Array.from(data.title.words2);

  return (
    <Section id="home">
      <Container className="container text-center">
        <h1 className="text-5xl font-normal leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          {data.title.t}
          <WordRotate className="text-primary" words={words} />
        </h1>
        {/* <h1 className="text-5xl font-normal leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          {data.title.t2}
          <WordRotate className="text-primary" words={words2} />
        </h1> */}
        <p className="description mx-auto mt-6 max-w-3xl">{data.description}</p>
      </Container>
    </Section>
  );
};
