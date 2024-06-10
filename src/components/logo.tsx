import { Search } from "lucide-react";
import Link from "next/link";

type Props = {
  size?: "s" | "l";
};

export const Logo = ({ size }: Props) => {
  let iconSize;
  let textSize;

  switch (size) {
    case "s":
      iconSize = "size-4";
      textSize = "text-sm";
      break;
    case "l":
      iconSize = "size-6";
      textSize = "text-2xl";
      break;
    default:
      iconSize = "size-5";
      textSize = "text-xl";
  }

  return (
    <Link className="flex items-center gap-2 text-primary" href="/#">
      <Search className={iconSize} />
      <span className={`${textSize} font-semibold`}>Qualissee</span>
    </Link>
  );
};
