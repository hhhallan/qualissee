export const routes = [
  {
    label: "Accueil",
    href: "/#home",
  },
  {
    label: "Services",
    href: "/#services",
    sublinks: [
      {
        title: "Audit",
        desc: "Évaluez vos processus et performances actuels, mettez en place des correctifs et obtenez un rapport final détaillé.",
        href: "/services/audit",
      },
      {
        title: "Conseil",
        desc: "Nous vous aidons à optimiser vos processus, réduire vos coûts et augmenter votre productivité.",
        href: "/services/conseil",
      },
      {
        title: "Accompagnement",
        desc: "Bénéficiez d'une consultation personnalisée, d'un plan de mise en œuvre et d'un soutien continu pour réussir à long terme.",
        href: "/services/accompagnement",
      },
      {
        title: "Formation",
        desc: "Recevez une formation de base, participez à des ateliers pratiques et obtenez une certification reconnue.",
        href: "/services/formation",
      },
    ],
  },
  {
    label: "Formations",
    href: "/formations",
  },
  {
    label: "À propos",
    href: "/a-propos",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];
