import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { NavigationMenu, NavigationMenuList } from "./ui/navigation-menu";

type Props = {
  children: React.ReactNode;
};
export const MobileNav = ({ children }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="lg:hidden" size="icon" variant="outline">
          <MenuIcon className="size-6" />
          <span className="sr-only">Ouvrir le menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <ul className="grid gap-2 py-6">{children}</ul>
      </SheetContent>
    </Sheet>
  );
};
