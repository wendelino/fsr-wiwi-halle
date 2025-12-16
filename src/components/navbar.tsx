"use client";
import { useState } from "react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavbarButton,
  NavbarLogo,
  NavItems,
  Navbar as RNavbar,
} from "@/components/ui/resizable-navbar";
import { ThemeToggle } from "@/lnio/components/theme";

export function Navbar() {
  const navItems = [
    {
      name: "Geschäftsstelle",
      link: "/go",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <RNavbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="z-10 flex items-center gap-4">
          <NavbarButton variant="primary">Kontakt</NavbarButton>
          <ThemeToggle />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item) => (
            <a
              className="relative text-neutral-600 dark:text-neutral-300"
              href={item.link}
              key={item.name}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
            >
              Login
            </NavbarButton>
            <NavbarButton
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
            >
              Book a call
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </RNavbar>
  );
}
