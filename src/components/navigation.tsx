"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

type Props = {
  children: React.ReactNode;
};

export const Navigation = ({ children }: Props) => {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>{children}</NavigationMenuList>
    </NavigationMenu>
  );
};
