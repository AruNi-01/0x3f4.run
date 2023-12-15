"use client";
import React from "react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { GithubIcon, MoreIcon } from "../icons";
import { ThemeSwitch } from "./theme-switch";
import { useRouter } from "next/navigation";

export const MobileNavbar = ({ className }: { className: string }) => {
  const router = useRouter();

  return (
    <NextUINavbar shouldHideOnScroll className={className}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-5 text-2xl"
            href="/"
          >
            <Avatar isBordered src={siteConfig.avatar} size="sm" />
            <p className="font-bold text-[#71717A]">
              {siteConfig.mobile.headerTitle}
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4 flex gap-1" justify="end">
        <ThemeSwitch />
        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <Button isIconOnly variant="flat" size="sm">
              <MoreIcon />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Dynamic Actions"
            items={siteConfig.mobile.navMenuItems}
            variant="flat"
          >
            {(item) => (
              <DropdownItem
                key={item.label.toLowerCase()}
                onClick={() => {
                  router.push(item.href);
                }}
                color="default"
                className=""
              >
                {item.label}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </NextUINavbar>
  );
};
