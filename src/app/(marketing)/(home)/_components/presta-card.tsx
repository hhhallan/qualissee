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
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
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
      <div className="flex-grow bg-white p-4 dark:bg-gray-950">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="p-4">
        <Button size="sm" className="w-full" asChild>
          <span className="py-4 xl:py-6">
            J&apos;opte pour <br className="hidden xl:block" />
            &quot;{title}&quot;
          </span>
        </Button>
      </div>
    </div>
  );
};
