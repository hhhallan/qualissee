import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  mediaSrc?: string;
  href: string;
};

export const PrestaCard = ({ title, description, mediaSrc, href }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <Link href={href} className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View</span>
      </Link>
      <Image
        src={`/${mediaSrc || "placeholder.svg"}`}
        alt={title}
        width={500}
        height={400}
        className="h-64 w-full object-cover"
      />
      <div className="bg-white p-4 dark:bg-gray-950">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <Button size="sm" className="mt-4">
          J&apos;opte pour &quot;{title}&quot;
        </Button>
      </div>
    </div>
  );
};
