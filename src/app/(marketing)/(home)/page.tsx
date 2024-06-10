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
import { services } from "@/constants/services";
import { qhse } from "@/constants/qhse";

const HomePage = () => {
  return (
    <>
      <Hero />

      {/* INFOS */}
      <Section
        cta={{ label: "En savoir plus", href: "#" }}
        media={{ src: "info.png", alt: "Informations" }}
      >
        <SectionTitle>Qualissee - Votre Partenaire de Confiance</SectionTitle>
        <SectionDescription>
          Chez Qualissee, nous offrons une expertise inégalée dans
          l&apos;amélioration des processus opérationnels, la gestion de la
          qualité et la conformité réglementaire. Nos solutions sont conçues
          pour identifier les opportunités d&apos;amélioration et mettre en
          œuvre des stratégies efficaces pour vous aider à atteindre vos
          objectifs commerciaux.
        </SectionDescription>
      </Section>

      {/* PRESTA */}
      <PrestaList>
        {services.map((service, index) => (
          <PrestaCard
            key={index}
            title={service.title}
            description={service.description}
            mediaSrc={service.mediaSrc}
          />
        ))}
      </PrestaList>

      {/* EXCELLENCE */}
      <ExcellenceCTA />

      {/* QHSE */}
      <List
        title={"QHSE"}
        description={
          "Nous vous accompagnons dans la mise en place de systèmes QHSE robustes qui garantissent la conformité aux normes réglementaires et favorisent une culture d'entreprise durable."
        }
      >
        {qhse.map((i, index) => (
          <ListItem key={index} title={i.title} mediaSrc={i.mediaSrc} />
        ))}
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
              Vous avez des questions ou besoin d&apos;une consultation
              personnalisée? Contactez-nous dès aujourd&apos;hui pour discuter
              de vos besoins et découvrir comment Qualissee peut vous aider à
              atteindre vos objectifs.
            </p>

            <div className="mt-8">
              <a href="#" className="text-2xl font-bold text-pink-600">
                +33 1 23 45 67 89
              </a>

              <address className="mt-2 not-italic">
                123 Rue Fictive, 75001 Paris, France
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
