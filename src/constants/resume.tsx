export const DATA = {
  landing: {
    hero: {
      title: {
        t: `Boostez votre entreprise en vous accompagnant d'experts en `,
        t2: `Allons ensemble vers `,
        words: ["stratégie", "conseil"],
        words2: ["l'excellence opérationnelle", "un avenir radieux"],
      },
      description: `Simplifiez vos opérations et concentrez-vous sur ce qui compte vraiment. Notre équipe de consultants est là pour vous aider à atteindre l'excellence.`,
    },
    info: {
      title: "Qualissee - Votre Partenaire de Confiance",
      description:
        "Chez Qualissee, nous offrons une expertise inégalée dans l'amélioration des processus opérationnels, la gestion QHSE et la conformité réglementaire. Nos solutions sont conçues pour identifier les opportunités d'amélioration et mettre en œuvre des stratégies efficaces pour vous aider à atteindre vos objectifs.",
      cta: { label: "Qui sommes nous ?", href: "a-propos" },
      image: { src: "info.png", alt: "Informations" },
    },
    presta: {
      title: "Nos prestations",
      description:
        "Découvrez nos différentes prestations pour répondre à tous vos besoins.",
    },
    excellence: {
      title: "Excellence opérationnelle",
      description:
        " Nos services optimisent vos processus internes, augmentent votre efficacité, réduisent vos coûts et améliorent la satisfaction client grâce à des méthodologies éprouvées.",
      link: { label: "En savoir plus", href: "#" },
    },
    qhse: {
      title: "QHSE",
      description:
        "Nous vous accompagnons dans la mise en place de systèmes QHSE robustes qui garantissent la conformité aux normes réglementaires et favorisent une culture d'entreprise durable.",
      items: [
        {
          title: "Qualité",
          mediaSrc: "quality.png",
          id: "quality",
        },
        {
          title: "Hygiène",
          mediaSrc: "hygiene.png",
          id: "hygiene",
        },
        {
          title: "Sécurité",
          mediaSrc: "securite.png",
          id: "security",
        },
        {
          title: "Environnement",
          mediaSrc: "environnement.png",
          id: "environment",
        },
      ],
    },
    voirPlus: {
      title: "En savoir +",
      description: "Découvrez-en plus sur notre entreprise et nos produits.",
      items: [
        {
          title: "Présentation de l'entreprise",
          description:
            "Découvrez notre histoire et notre vision pour l'avenir.",
          src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
        {
          title: "Nos produits phares",
          description: "Découvrez nos produits les plus populaires.",
          src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        },
      ],
    },
    certif: {
      title: "Nos certifications",
      items: [
        "Google",
        "Microsoft",
        "Amazon",
        "Netflix",
        "YouTube",
        "Instagram",
        "Uber",
        "Spotify",
      ],
    },
    contact: {
      title: "Nous contacter",
      description:
        "Vous avez des questions ou besoin d'une consultation personnalisée ? Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment Qualissee peut vous aider à atteindre vos objectifs.",
      number: "+33 6 77 25 80 96",
      number2: "+33 7 62 37 53 23",
      address: "123 Rue Fictive, 75001 Paris, France",
    },
  },
  presta: [
    {
      id: "conseil",
      title: "Conseil",
      description:
        "Nous vous aidons à optimiser vos processus, réduire vos coûts et augmenter votre productivité.",
      mediaSrc: "presta/conseil.png",
      sections: [
        {
          title: "Optimisation des Processus",
          description:
            "Améliorez l'efficacité de vos flux de travail en identifiant et en résolvant les goulets d'étranglement. Nous proposons des solutions pratiques pour rationaliser les opérations et améliorer la productivité globale.",
          cta: { label: "Voir plus", href: "#" },
          mediaSrc: "placeholder.svg",
        },
        {
          title: "Réduction des Coûts",
          description:
            "Identifiez les domaines de réduction des coûts en analysant vos dépenses actuelles. Nous vous proposons des stratégies pour minimiser les coûts sans compromettre la qualité des services ou des produits.",
          mediaSrc: "placeholder.svg",
        },
        {
          title: "Augmentation de la Productivité",
          description:
            "Maximisez la productivité de vos équipes en utilisant des techniques éprouvées. Nous aidons vos équipes à travailler de manière plus efficace et efficiente, ce qui se traduit par une augmentation des performances et des résultats.",
          cta: { label: "Voir plus", href: "#" },
          mediaSrc: "placeholder.svg",
        },
      ],
    },
    {
      id: "audit",
      title: "Audit",
      description:
        "Évaluez vos processus et performances actuels, mettez en place des correctifs et obtenez un rapport final détaillé.",
      mediaSrc: "presta/audit.png",
      sections: [
        {
          title: "Évaluation Initiale",
          description:
            "Effectuez un examen complet de vos processus et de vos performances actuelles. Nous identifions vos points forts et vos faiblesses pour proposer des améliorations ciblées.",
          cta: { label: "En savoir plus", href: "#" },
          mediaSrc: "placeholder.svg",
        },
        {
          title: "Mise en Place des Correctifs",
          description:
            "Appliquez les mesures correctives identifiées lors de l'audit. Nous collaborons avec votre équipe pour mettre en œuvre les changements nécessaires de manière efficace et sans interruption majeure des opérations.",
          mediaSrc: "placeholder.svg",
        },
        {
          title: "Rapport Final",
          description:
            "Présentation des résultats et des recommandations finales. Nous fournissons un rapport détaillé qui inclut des recommandations pratiques et des actions à entreprendre pour améliorer les performances et atteindre vos objectifs commerciaux.",
          cta: { label: "En savoir plus", href: "#" },
          mediaSrc: "placeholder.svg",
        },
      ],
    },
    {
      id: "formation",
      title: "Formation",
      description:
        "Recevez une formation de base, participez à des ateliers pratiques et obtenez une certification reconnue.",
      mediaSrc: "presta/formation.png",
      sections: [
        {
          title: "Cours Introductifs",
          description:
            "Acquérez une compréhension des concepts fondamentaux avec nos cours introductifs. Ces cours sont conçus pour vous donner une solide base de connaissances.",
          cta: { label: "Inscription", href: "#" },
          mediaSrc: "placeholder.svg",
        },
        {
          title: "Ateliers Pratiques",
          description:
            "Appliquez ce que vous avez appris lors de nos ateliers interactifs. Avec l'aide de formateurs expérimentés, vous pourrez mettre en pratique les connaissances acquises.",
          mediaSrc: "placeholder.svg",
        },
        {
          title: "Certification",
          description:
            "Validez vos compétences avec une certification reconnue. Nos programmes de certification sont rigoureusement conçus pour évaluer et valider les compétences des participants, leur donnant un avantage concurrentiel sur le marché du travail.",
          cta: { label: "Inscription", href: "#" },
          mediaSrc: "placeholder.svg",
        },
      ],
    },
    {
      id: "accompagnement",
      title: "Accompagnement",
      description:
        "Bénéficiez d'une consultation personnalisée, d'un plan de mise en œuvre et d'un soutien continu pour réussir à long terme.",
      mediaSrc: "presta/accompagnement.png",
      sections: [
        {
          title: "Consultation Personnalisée",
          description:
            "Rencontrez nos experts pour évaluer vos besoins spécifiques. Nous offrons des consultations personnalisées pour comprendre vos objectifs et défis uniques, et élaborer des solutions adaptées à votre situation.",
          cta: { label: "Contactez-nous", href: "#" },
          mediaSrc: "placeholder.svg",
        },
        {
          title: "Plan de Mise en Œuvre",
          description:
            "Développez un plan détaillé pour atteindre vos objectifs. Nous créons des plans d'action spécifiques et réalisables qui vous guident à chaque étape du processus, assurant une mise en œuvre réussie.",
          mediaSrc: "placeholder.svg",
        },
        {
          title: "Suivi et Support",
          description:
            "Bénéficiez d'une assistance continue pour garantir le succès à long terme. Nous offrons un soutien continu pour vous aider à surmonter les obstacles et à ajuster vos stratégies au fur et à mesure que vos besoins évoluent.",
          cta: { label: "Contactez-nous", href: "#" },
          mediaSrc: "placeholder.svg",
        },
      ],
    },
    {
      id: "externalisation",
      title: "Externalisation",
      description:
        "Externalisez votre gestion QHSE pour vous concentrer sur votre cœur de métier et améliorer la performance globale de votre entreprise.",
      mediaSrc: "presta/externalisation.png",
      sections: [
        {
          title: "Gestion QHSE Externalisée",
          description:
            "Déléguez la gestion de la qualité, de la santé, de la sécurité et de l&apos;environnement à nos experts. Nous nous assurons que vos normes QHSE sont maintenues au plus haut niveau, vous permettant de vous concentrer sur vos activités principales.",
          cta: { label: "En savoir plus", href: "#" },
          mediaSrc: "placeholder.svg",
        },
        {
          title: "Réduction des Risques",
          description:
            "Minimisez les risques liés à la conformité QHSE grâce à notre expertise. Nous identifions les potentiels de non-conformité et mettons en place des stratégies pour garantir une gestion proactive des risques.",
          mediaSrc: "placeholder.svg",
        },
        {
          title: "Amélioration Continue",
          description:
            "Engagez-vous dans un processus d&apos;amélioration continue avec nos services d&apos;externalisation. Nous analysons régulièrement vos performances QHSE et apportons des améliorations pour une meilleure efficacité et conformité.",
          cta: { label: "En savoir plus", href: "#" },
          mediaSrc: "placeholder.svg",
        },
      ],
    },
  ],
} as const;
