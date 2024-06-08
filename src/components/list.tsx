"use client";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
};
export const List = ({ children, title, description }: Props) => {
  return (
    <section className="section">
      <div className="container px-4 md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="title">{title}</h2>
          <p className="description mx-auto max-w-[700px]">{description}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {children}
        </div>
      </div>
    </section>
  );
};
