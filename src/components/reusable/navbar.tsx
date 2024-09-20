import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "../ui/sheet";
import { Container } from "../craft";
import Image from "next/image";
import { ROUTES } from "@/constants/routing";
import React from "react";
import { Logo } from "./logo";

export const Navbar = () => {
  return (
    <Container className="w-full !py-0">
      <header className="flex h-20 w-full shrink-0 items-center justify-between">
        {/* MOBILE NAVIGATION */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="">
            <Link href="#" prefetch={false}>
              <Image
                height={1200}
                width={1200}
                alt="Logo"
                src={"/logo.svg"}
                className="size-[48px]"
              />
              <span className="sr-only">Qualissee</span>
            </Link>
            <div className="grid gap-2 py-6">
              {ROUTES.map((route, i) => (
                <React.Fragment key={i}>
                  <Link
                    href={route.href}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    prefetch={false}
                  >
                    {route.label}
                  </Link>
                  {route.sublinks && (
                    <div className="ml-4">
                      {route.sublinks.map((sublink, j) => (
                        <Link
                          key={j}
                          href={sublink.href}
                          className="flex w-full items-center py-2 text-base font-medium text-gray-500"
                          prefetch={false}
                        >
                          {sublink.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        {/* LARGE NAVIGATION */}
        <Logo size="l" />
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {ROUTES.map((route, i) => (
              <NavigationMenuItem key={i}>
                {route.sublinks ? (
                  <>
                    <NavigationMenuTrigger>{route.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {route.sublinks.map((presta, i) => (
                          <Link
                            href={presta.href}
                            key={i}
                            className="p-4 hover:bg-accent hover:text-accent-foreground"
                          >
                            <NavigationMenuLink>
                              <div className="text-sm font-medium leading-none">
                                {presta.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {presta.desc}
                              </p>
                            </NavigationMenuLink>
                          </Link>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={route.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {route.label}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </Container>
  );
};
