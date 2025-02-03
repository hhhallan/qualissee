import {
  SectionC,
  SectionCDescription,
  SectionCTitle,
} from "@/components/reusable/section";
import { DATA } from "@/constants/resume";
import { ExcellenceCTA } from "./excellence";

export const Info = () => {
  const data = DATA.landing.info;

  return (
    <SectionC
      id="info"
      cta={{ label: data.cta.label, href: data.cta.href }}
      media={<ExcellenceCTA />}
      // media={{ src: data.image.src, alt: data.image.alt }}
    >
      <SectionCTitle>{data.title}</SectionCTitle>
      <SectionCDescription>{data.description}</SectionCDescription>      
    </SectionC>
  );
};
