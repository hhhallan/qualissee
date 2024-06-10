import Image from "next/image";

type Props = {
  mediaSrc?: string;
  title: string;
};

export const ListItem = ({ mediaSrc, title }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <Image
        src={`/${mediaSrc || "placeholder.svg"}`}
        alt={title}
        width={500}
        height={400}
        className="h-64 w-full object-cover"
      />
      <div className="bg-white p-4 dark:bg-gray-950">
        <h3 className="text-center text-xl font-medium">{title}</h3>
      </div>
    </div>
  );
};
