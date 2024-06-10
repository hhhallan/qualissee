import {
  Section,
  SectionDescription,
  SectionTitle,
} from "@/components/section";
import { services } from "@/constants/services";

type Props = {
  params: { serviceDetail: string };
};

const ServiceDetailPage = async ({ params }: Props) => {
  const service = services.find((s) => s.id === params.serviceDetail);

  if (!service) {
    return <div className="text-center">Service detail not found</div>;
  }

  return (
    <>
      <div className="space-y-3 text-center">
        <h1 className="title">{service.title}</h1>
        <p className="description mx-auto max-w-[700px]">
          {service.description}
        </p>
      </div>
      <ul className="flex flex-col">
        {service.sections.map((c, index) => (
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
