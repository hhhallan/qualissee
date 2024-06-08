import Image from "next/image";
import Link from "next/link";

type Props = {
  image?: string;
  title: string;
};

export const ListItem = ({ image = "placeholder.svg", title }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <Image
        src={`/${image}`}
        alt={title}
        width={500}
        height={400}
        className="h-64 w-full object-cover"
      />
      <div className="bg-white p-4 dark:bg-gray-950">
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
    </div>
  );
};
