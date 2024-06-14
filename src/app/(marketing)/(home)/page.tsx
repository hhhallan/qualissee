import {
  Section,
  SectionDescription,
  SectionTitle,
} from "@/components/section";
import { Hero } from "./_components/hero";
import { PrestaCard } from "./_components/presta-card";
import { ExcellenceCTA } from "./_components/excellence";
import { List } from "@/components/list";
import { ListItem } from "@/components/list-item";
import { SeeMore } from "./_components/see-more";
import { SeeMoreItem } from "./_components/see-more-item";
import { Certification } from "@/components/certification";
import { services } from "@/constants/services";
import { qhse } from "@/constants/qhse";
import { Contact } from "./_components/contact";

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
      <List
        title="Nos prestations"
        description="Découvrez nos différentes prestations pour répondre à tous vos besoins."
        id="services"
        secondary
      >
        {services.map((service, index) => (
          <PrestaCard
            key={index}
            title={service.title}
            description={service.description}
            mediaSrc={service.mediaSrc}
            href={`/services/${service.id}`}
          />
        ))}
      </List>

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
          <ListItem
            key={index}
            title={i.title}
            mediaSrc={i.mediaSrc}
            modalId={i.id}
          />
        ))}
      </List>

      {/* En savoir + */}
      <SeeMore>
        <SeeMoreItem />
      </SeeMore>

      {/* Certifications */}
      <Certification />

      {/* Contact */}
      <Contact />
    </>
  );
};

export default HomePage;
