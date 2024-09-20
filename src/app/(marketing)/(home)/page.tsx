import { Hero } from "./_components/hero";
import { ExcellenceCTA } from "./_components/excellence";
import { SeeMore } from "./_components/see-more";
import { Certification } from "./_components/certification";
import { Contact } from "./_components/contact";
import { Info } from "./_components/info";
import { Presta } from "./_components/presta";
import { QHSE } from "./_components/qhse";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Info />
      <Presta />
      <ExcellenceCTA />
      <QHSE />
      <SeeMore />
      <Certification />
      <Contact />
    </>
  );
};

export default HomePage;
