import {
  Section,
  SectionDescription,
  SectionTitle,
} from "@/components/section";
import { Hero } from "./_components/hero";
import { PrestaCard } from "./_components/prestaCard";
import { PrestaList } from "./_components/prestaList";
import { ExcellenceCTA } from "./_components/excellence";
import { List } from "@/components/list";
import { ListItem } from "@/components/list-item";
import { SeeMore } from "./_components/see-more";
import { SeeMoreItem } from "./_components/see-more-item";
import { Certification } from "@/components/certification";
import { LInput } from "@/components/form/l-input";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <>
      <Hero />

      {/* INFOS */}
      <Section cta={{ label: "Label", href: "#" }}>
        <SectionTitle>Section 1 - normale</SectionTitle>
        <SectionDescription>
          The platform for rapid progress. Let your team focus on shipping
          features instead of managing infrastructure with automated CI/CD,
          built-in testing, and integrated collaboration.
        </SectionDescription>
      </Section>

      {/* PRESTA */}
      <PrestaList>
        <PrestaCard
          title="Audit"
          description={"petite description d'un audit"}
        />
        <PrestaCard
          title="Audit"
          description={"petite description d'un audit"}
        />
        <PrestaCard
          title="Audit"
          description={"petite description d'un audit"}
        />
        <PrestaCard
          title="Audit"
          description={"petite description d'un audit"}
        />
      </PrestaList>

      {/* EXCELLENCE */}
      <ExcellenceCTA />

      {/* QHSE */}
      <List title={"QHSE"} description={"description qhse"}>
        <ListItem title={"Qualité"} />
        <ListItem title={"Hygiène"} />
        <ListItem title={"Sécurité"} />
        <ListItem title={"Environnement"} />
      </List>

      {/* En savoir + */}
      <SeeMore>
        <SeeMoreItem />
      </SeeMore>

      {/* Certifications */}
      <Certification />

      {/* Contact */}
      {/* TODO: refacto le comp (reusable) */}
      <section id="contact" className="section bg-gray-100">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-16 gap-y-8 px-4 md:px-6 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Nous contacter
            </h3>
            <p className="description mt-3 max-w-xl">
              At the same time, the fact that we are wholly owned and totally
              independent from manufacturer and other group control gives you
              confidence that we will only recommend what is right for you.
            </p>

            <div className="mt-8">
              <a href="#" className="text-2xl font-bold text-pink-600">
                {" "}
                0151 475 4450{" "}
              </a>

              <address className="mt-2 not-italic">
                282 Kevin Brook, Imogeneborough, CA 58517
              </address>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-4">
              <LInput name="email" type="email" label="Email" />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <LInput name="Nom" type="text" label="Nom" />
                <LInput name="Prénom" type="text" label="Prénom" />
              </div>

              <LInput
                label="Message"
                type="textarea"
                name="message"
                placeholder="Ecrivez votre message ici..."
                message
              />

              <div className="mt-4">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
