import {
  Section,
  SectionDescription,
  SectionTitle,
} from "@/components/section";
import {
  audit,
  conseil,
  accompagnement,
  formation,
} from "@/constants/services";

type Props = {
  params: { serviceDetail: string };
};

const ServiceDetailPage = async ({ params }: Props) => {
  let content;
  let title;

  switch (params.serviceDetail) {
    case "audit":
      content = audit;
      title = "Audit";
      break;
    case "conseil":
      content = conseil;
      title = "Conseil";
      break;
    case "formation":
      content = formation;
      title = "Formation";
      break;
    case "accompagnement":
      content = accompagnement;
      title = "Accompagnement";
      break;
    default:
      content = null;
  }

  if (!content) {
    return <div className="text-center">Service detail not found</div>;
  }

  return (
    <>
      <h1 className="py-10 text-4xl font-medium md:text-5xl">{title}</h1>
      <ul className="flex flex-col">
        {content.map((c, index) => (
          <Section
            key={index}
            reverse={index % 2 === 1}
            cta={c.cta}
            mediaSrc={c.mediaSrc}
          >
            <SectionTitle>{c.title}</SectionTitle>
            <SectionDescription>{c.description}</SectionDescription>
          </Section>
        ))}
      </ul>
    </>
  );
};

export default ServiceDetailPage;
