import { List } from "@/components/list";
import { PrestaCard } from "@/components/presta-card";
import { DATA } from "@/constants/resume";

export const Presta = () => {
  const data = DATA.landing.presta;
  const prestas = DATA.presta;

  return (
    <List
      title={data.title}
      description={data.description}
      id="services"
      secondary
    >
      {prestas.map((presta, index) => (
        <PrestaCard
          key={index}
          title={presta.title}
          description={presta.description}
          mediaSrc={presta.mediaSrc}
          href={`/services/${presta.id}`}
        />
      ))}
    </List>
  );
};
