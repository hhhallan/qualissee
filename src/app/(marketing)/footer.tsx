import { Logo } from "@/components/logo";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

type Link = {
  text: string;
  url: string;
};

const links: Link[] = [
  { text: "Mentions légales", url: "/legal/mentions-legales" },
  {
    text: "Politique de confidentialité",
    url: "/legal/politique-de-confidentialite",
  },
];

interface Icon {
  icon: JSX.Element;
  url: string;
}

// TODO: mettre les bons réseaux
const icons: Icon[] = [
  { icon: <Instagram className="size-5" />, url: "https://www.instagram.com" },
  { icon: <Linkedin className="size-5" />, url: "https://www.linkedin.com" },
  { icon: <Twitter className="size-5" />, url: "https://www.twitter.com" },
];

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1400px] p-5 px-5 lg:px-6">
      <div className="flex w-full flex-col items-center justify-between gap-x-5 gap-y-5 md:flex-row md:items-center">
        <div className="flex items-center gap-x-2">
          <Logo size="s" />
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-5">
          {links.map((link, index) => (
            <li
              key={index}
              className="text-[15px]/normal font-medium text-neutral-400 transition-all duration-100 ease-linear hover:text-neutral-900 hover:underline hover:underline-offset-4"
            >
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-x-4">
          {icons.map((icon, index) => (
            <Link
              key={index}
              href={icon.url}
              className="text-base text-neutral-500 hover:text-neutral-900 hover:dark:text-white"
            >
              {icon.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
