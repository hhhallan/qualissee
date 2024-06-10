type Props = {
  children: React.ReactNode;
};

const ServiceLayout = ({ children }: Props) => {
  return (
    <div className="mt-11 flex min-h-[80vh] flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default ServiceLayout;
