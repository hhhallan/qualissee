export const ROUTES = [
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
        title: "Externalisation",
        desc: "Externalisez votre gestion QHSE pour vous concentrer sur votre cœur de métier et améliorer la performance globale de votre entreprise.",
        href: "/services/externalisation",
      },
    ],
  },
  {
    label: "Formation",
    href: "/services/formation",
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
