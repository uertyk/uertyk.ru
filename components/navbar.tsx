"use client"

import React from "react";

import {Divider} from "@heroui/divider";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Домой",
    "Портфолио",
  ];

  return (
      <HeroUINavbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">uertyk_</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">uertyk_</p>
          </NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="/">
              Домой
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/portfolio">
              Портфолио
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="danger" href="https://boosty.to/uertyyt" variant="flat">
              ❤ Поддержать
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                    className="w-full"
                    color={
                      index === 2 ? "foreground" : index === menuItems.length - 1 ? "foreground" : "foreground"
                    }
                    href={index === 2 ? "/portfolio" : index === 1 ? "/portfolio" : "/"}
                    size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </HeroUINavbar>
  );
};
