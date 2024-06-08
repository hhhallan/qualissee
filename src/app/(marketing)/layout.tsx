import { Footer } from "./footer";
import { Header } from "./header";

type Props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mt-[72px] flex flex-1 flex-col items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
