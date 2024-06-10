type Props = {
  children: React.ReactNode;
};

// TODO: modifier le contenu
const LegalLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-md">{children}</div>
      </div>
    </div>
  );
};

export default LegalLayout;
