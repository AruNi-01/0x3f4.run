"use client";
import { siteConfig } from "@/config/site";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarBrand,
  NavbarContent,
  Navbar as NextUINavbar,
  cn,
} from "@nextui-org/react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MoreIcon, MoreOpenIcon } from "../icons";
import { ThemeSwitch } from "./theme-switch";
import { useState } from "react";

export const MobileNavbar = ({ className }: { className: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const itemActiveClass = (path: string): object => {
    return {
      "bg-[#eeeeef] dark:bg-neutral-800": path !== "/" ? pathname.startsWith(path) : pathname === path,
    };
  };

  const [dropIsOpen, setDropIsOpen] = useState(false);

  return (
    <NextUINavbar shouldHideOnScroll className={className}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-5 text-2xl" href="/">
            <Avatar isBordered src={siteConfig.avatar} size="sm" />
            <p className="font-bold text-[#71717A]">{siteConfig.mobile.headerTitle}</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4 flex gap-1" justify="end">
        <ThemeSwitch />
        <Dropdown
          backdrop="opaque"
          isOpen={dropIsOpen}
          onOpenChange={() => {
            setDropIsOpen(!dropIsOpen);
          }}
        >
          <DropdownTrigger>
            <Button isIconOnly variant="flat" size="sm">
              {dropIsOpen ? <MoreOpenIcon /> : <MoreIcon />}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Dynamic Actions" items={siteConfig.sidebar.navItems} variant="flat">
            {(item) => (
              <DropdownItem
                key={item.label.toLowerCase()}
                onClick={() => {
                  router.push(item.href);
                }}
                color="default"
                className={cn("", itemActiveClass(item.href))}
              >
                <div className="flex justify-start gap-2">
                  {(item.href !== "/" ? pathname.startsWith(item.href) : pathname === item.href)
                    ? item.solidIcon
                    : item.outlineIcon}
                  <span className="font-semibold dark:text-neutral-300">{item.label}</span>
                </div>
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </NextUINavbar>
  );
};
