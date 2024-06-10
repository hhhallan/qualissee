type Props = {
  children: React.ReactNode;
};

const ServiceLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center md:mt-0 lg:mt-11">
      {children}
    </div>
  );
};

export default ServiceLayout;
