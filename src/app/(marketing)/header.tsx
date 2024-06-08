"use client";

import * as React from "react";

import { NavItem } from "@/components/nav-item";
import { Navigation } from "@/components/navigation";
import { routes } from "@/constants/routes";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-navigation";
import Link from "next/link";
import { SheetClose } from "@/components/ui/sheet";

export function Header() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-white py-4 shadow-sm">
      <div className="container flex items-center justify-between px-6">
        <Logo size="l" />

        {/* TODO: créer un composant mobile-nav-item ? */}
        <Navigation>
          {routes.map((route, index) => (
            <NavItem route={route} index={index} key={index} />
          ))}
        </Navigation>
        <MobileNav>
          {routes.map((route, index) => (
            <li key={index}>
              <Link
                href={route.href}
                className="flex w-full items-center py-2 text-lg font-semibold"
              >
                <SheetClose>{route.label}</SheetClose>
              </Link>
              {route.sublinks && (
                <ul className="pl-6">
                  {route.sublinks.map((sub) => (
                    <li key={sub.title}>
                      <Link
                        href={sub.href}
                        className="text-l flex w-full items-center py-2 font-medium"
                      >
                        <SheetClose>{sub.title}</SheetClose>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </MobileNav>
      </div>
    </nav>
  );
}
