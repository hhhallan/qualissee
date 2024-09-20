import {
  SectionC,
  SectionCDescription,
  SectionCTitle,
} from "@/components/reusable/section";
import { DATA } from "@/constants/resume";

type Props = {
  params: { serviceDetail: string };
};

const ServiceDetailPage = async ({ params }: Props) => {
  const data = DATA.presta;
  const service = data.find((s) => s.id === params.serviceDetail);

  if (!service) {
    return <div className="text-center">Service detail not found</div>;
  }

  return (
    <>
      <div className="space-y-3 px-4 text-center md:px-6">
        <h1 className="title">{service.title}</h1>
        <p className="description mx-auto max-w-[700px]">
          {service.description}
        </p>
      </div>
      <ul className="flex flex-col">
        {service.sections.map((c, index) => (
          <SectionC
            key={index}
            reverse={index % 2 === 1}
            // cta={c.cta}
            media={{ src: c.mediaSrc, alt: c.title }}
          >
            <SectionCTitle>{c.title}</SectionCTitle>
            <SectionCDescription>{c.description}</SectionCDescription>
          </SectionC>
        ))}
      </ul>
    </>
  );
};

export default ServiceDetailPage;
