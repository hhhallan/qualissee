"use client";

import { Container, Section } from "@/components/craft";
import { LInput, LSelect } from "@/components/inputs";
import { Button } from "@/components/ui/button";
import { DATA } from "@/constants/resume";

export const Contact = () => {
  const data = DATA.landing.contact;

  return (
    <Section id="contact" className="section bg-gray-100">
      <Container className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div className="lg:col-span-2 lg:py-12">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            {data.title}
          </h3>
          <p className="description mt-3 max-w-xl">{data.description}</p>

          <div className="mt-8">
            <a href="#" className="text-2xl font-bold text-pink-600">
              {data.number}
            </a>

            <address className="mt-2 not-italic">{data.address}</address>
          </div>
        </div>

        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          {/* TODO: Créer un composant FormContact */}
          {/* TODO: Ajout de l'obligation de certains champs */}
          <form action="#" className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <LInput
                name="name"
                type="text"
                label="Nom de l'entreprise*"
                placeholder="Qualissee"
              />
              <LInput
                name="email"
                type="email"
                label="Email*"
                placeholder="qualissee@ql.com"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <LInput name="address" type="text" label="Adresse" />
              <LInput name="tel" type="tel" label="Tél." />
            </div>

            <LSelect
              label="Objet de la demande"
              choices={[
                { label: "Devis Audit", value: "audit" },
                { label: "Devis Conseil", value: "conseil" },
                { label: "Devis Formation", value: "formation" },
              ]}
            />

            <LInput
              label="Message"
              type="textarea"
              name="message"
              placeholder="Ecrivez votre message ici..."
              message
            />

            <div className="mt-4">
              <Button type="submit">Envoyer</Button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
};
