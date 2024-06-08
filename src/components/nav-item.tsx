import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

type Sublink = {
  title: string;
  desc: string;
  href: string;
};

type Route = {
  label: string;
  href: string;
  sublinks?: Sublink[];
};

type Props = {
  route: Route;
  index: number;
};

export const NavItem = ({ route, index }: Props) => {
  return (
    <>
      <NavigationMenuItem key={index}>
        {route.sublinks ? (
          <>
            <NavigationMenuTrigger>{route.label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {route.sublinks.map((presta) => (
                  <ListItem
                    key={presta.title}
                    title={presta.title}
                    href={presta.href}
                  >
                    {presta.desc}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </>
        ) : (
          <Link href={route.href} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {route.label}
            </NavigationMenuLink>
          </Link>
        )}
      </NavigationMenuItem>
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
