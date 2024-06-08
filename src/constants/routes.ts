export const routes = [
  {
    label: "Accueil",
    href: "/#home",
  },
  {
    label: "Services",
    href: "",
    sublinks: [
      { title: "Audit", desc: "desc1", href: "/services/audit" },
      { title: "Conseil", desc: "desc1", href: "/services/conseil" },
      {
        title: "Accompagnement",
        desc: "desc1",
        href: "/services/accompagnement",
      },
      { title: "Formation", desc: "desc1", href: "/services/formation" },
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
