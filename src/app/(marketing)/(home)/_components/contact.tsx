"use client";

import { FormContact } from "@/components/form-contact";
import { LInput, LSelect } from "@/components/inputs";
import { Button } from "@/components/ui/button";

type Props = {};

export const Contact = ({}: Props) => {
  return (
    <section id="contact" className="section bg-gray-100">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-16 gap-y-8 px-4 md:px-6 lg:grid-cols-5">
        <div className="lg:col-span-2 lg:py-12">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            Nous contacter
          </h3>
          <p className="description mt-3 max-w-xl">
            Vous avez des questions ou besoin d&apos;une consultation
            personnalisée? Contactez-nous dès aujourd&apos;hui pour discuter de
            vos besoins et découvrir comment Qualissee peut vous aider à
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
          {/* TODO: Créer un composant FormContact */}
          {/* TODO: Ajout de l'obligation de certains champs */}
          {/* <form action="#" className="space-y-4">
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
          </form> */}

          <FormContact />
        </div>
      </div>
    </section>
  );
};
