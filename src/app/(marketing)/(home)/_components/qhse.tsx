import { List } from "@/components/list";
import { ListItem } from "@/components/list-item";
import { DATA } from "@/constants/resume";

export const QHSE = () => {
  const data = DATA.landing.qhse;

  return (
    <List title={data.title} description={data.description}>
      {data.items.map((i, index) => (
        <ListItem
          key={index}
          title={i.title}
          mediaSrc={`qhse/${i.mediaSrc}`}
          modalId={i.id}
        />
      ))}
    </List>
  );
};
