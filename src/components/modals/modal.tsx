"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useQHSEModal } from "@/store/use-qhse-modal";
import { useEffect, useState } from "react";

const QHSE_DATA = {
  items: [
    {
      title: "Qualité",
      mediaSrc: "quality.png",
      id: "quality",
      modal: {
        title:
          "Transformez la qualité en un levier d'innovation et de performance.",
        content: [
          `Chez QUALISSEE, notre approche du Management de la Qualité vous permet de prendre
            des décisions éclairées et d'optimiser vos processus avec une efficacité accrue. Nous
            identifions et gérons les risques pour vous, vous aidant ainsi à adopter une stratégie
            proactive, innovante et ancrée dans la réalité de votre entreprise.`,
          `Pour répondre aux exigences variées et complexes de vos clients, nous maîtrisons une
            multitude de référentiels sectoriels ainsi que les outils vous amenant vers l’optimisation de
            vos pratiques et procédures. Notre expertise vous permet de naviguer sereinement à travers
            ces exigences, même les plus spécifiques et pointues.`,
          `QUALISSEE vous propose des solutions personnalisées pour gérer votre démarche qualité,
            qu’elle soit normative ou réglementaire. Nos consultants, experts, réalisent des audits sur
            mesure, offrent du conseil stratégique et dispensent des formations adaptées à vos besoins.
            Simplifiez la gestion de la qualité et donnez à votre entreprise les moyens de ses ambitions.`,
        ],
      },
    },
    {
      title: "Hygiène",
      mediaSrc: "hygiene.png",
      id: "hygiene",
      modal: {
        title:
          "L’hygiène : un pilier essentiel pour une sécurité et une santé durables",
        content: [
          `L’hygiène est un pilier fondamental pour la santé et la sécurité dans tous les secteurs
d&#39;activité. Elle joue un rôle crucial dans la protection de la santé des collaborateurs, des
clients et de leur environnement, renforçant ainsi la confiance de l’ensemble des parties
prenantes.`,
          `Chaque entreprise a la responsabilité de mettre en œuvre un système de gestion de
l’hygiène efficace, basé sur la formation continue du personnel, l’autocontrôle, et des
méthodes rigoureuses comme le HACCP, complétées par des guides de bonnes pratiques
et des Plans de Maîtrise Sanitaire.`,
          `Chez QUALISSEE, nous accompagnons les entreprises avec des solutions sur mesure pour
répondre à leurs besoins spécifiques : audits, diagnostics, plans d’action hygiéniques,
formations, et suivi régulier. Notre mission est d’aider chaque entreprise à transformer
l’hygiène en un véritable atout stratégique et sociétal, contribuant à une démarche de
sécurité et de confiance durable`,
        ],
      },
    },
    {
      title: "Sécurité",
      mediaSrc: "securite.png",
      id: "security",
      modal: {
        title: "La sécurité : votre levier de performance",
        content: [
          `La santé et la sécurité au travail sont plus que jamais des priorités pour les entreprises, face
          à des attentes sociétales en constante évolution. Ces enjeux impactent non seulement
          l'économie et l'image de votre entreprise. Chez QUALISSEE, nous vous proposons des
          solutions concrètes et innovantes pour maîtriser vos risques. Nous vous accompagnons
          dans l’évaluation des risques (RPS, QVCT, Gestes et postures, etc.) et la mise en place de
          mesures correctives et préventives.`,
          `Grâce à un système de gestion de la santé et de la sécurité au travail, vous pouvez :
 Assurer la santé de vos collaborateurs et prévenir les accidents, évitant ainsi des
interruptions coûteuses ;
 Respecter rigoureusement les obligations légales en matière de sécurité, réduisant
les risques de problèmes juridiques pour votre entreprise ;
 Optimiser la productivité en offrant un environnement de travail sécurisé ;
 Diminuer les coûts liés aux assurances, aux cotisations et aux recrutements.`,
          `QUALISSEE adapte ses services à vos besoins spécifiques avec des audits sur mesure, des
conseils précis et des formations ciblées, garantissant des conditions de travail optimales et
sécurisées pour votre entreprise.`,
        ],
      },
    },
    {
      title: "Environnement",
      mediaSrc: "environnement.png",
      id: "environment",
      modal: {
        title: "L’environnement : moteur de votre performance durable",
        content: [
          `Les attentes des investisseurs ont évolué, intégrant désormais la Responsabilité Sociétale 
des Entreprises (RSE) et le développement durable comme critères essentiels de succès.
Face à des consommateurs et des marchés de plus en plus sensibles à ces enjeux, les
audits environnementaux et RSE deviennent incontournables pour toute entreprise
souhaitant rester compétitive.`,
          `Aujourd’hui, la réussite d’une entreprise ne se mesure plus uniquement à sa rentabilité et à
sa croissance. Elle doit également prendre en compte son impact environnemental et sa
responsabilité sociétale, sous l’impulsion des législations européennes et françaises, ainsi
que des exigences des partenaires et clients engagés dans le développement durable.`,
          `QUALISSEE accompagne les entreprises de tous secteurs — industriels, commerçants,
artisans — ainsi que les institutions publiques et collectivités, dans l’adoption de pratiques
exemplaires en matière d’environnement et de RSE.`,
          `Nos consultations vous offrent des solutions sur mesure pour maximiser les bénéfices de
votre démarche :
 Relever les défis environnementaux et sociaux à l’échelle internationale ;
 Répondre aux enjeux locaux et aux attentes grandissantes des consommateurs en
matière de responsabilités sociétales ;
 Optimiser vos consommations et réduire vos coûts ;
 Renforcer la motivation de vos équipes ;
 Accroître votre compétitivité.
Chez QUALISSEE, nous vous proposons des solutions globales et personnalisées pour
piloter efficacement votre stratégie environnementale et RSE.`,
        ],
      },
    },
  ],
};

export const QHSEModal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { isOpen, modalId, close } = useQHSEModal();

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  const currentItem = QHSE_DATA.items.find((item) => item.id === modalId);

  if (!currentItem) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            {currentItem.title}
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            {currentItem.modal.title}
          </DialogDescription>
        </DialogHeader>
        <DialogDescription>
          {currentItem.modal.content.map((content, index) => (
            <p key={index} className="mb-4">
              {content}
            </p>
          ))}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
