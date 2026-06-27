"use client";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import LocaleSwitcher from "@/components/i18n/LocaleSwitcher";
import { Navbar } from "@nextui-org/navbar";
import { ThemeSwitch } from "../home-page/theme-switch";
import { BackIcon } from "../icons";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("website");

  return (
    <Navbar className="hidden lg:flex justify-around gap-3 items-center w-full animate-slide-in-to-down-1000">
      <Button
        isIconOnly
        as={Link}
        href="/"
        startContent={<BackIcon />}
        size="sm"
        variant="flat"
        className="font-bold text-sm dark:bg-primary"
      />
      <h1 className="text-3xl font-bold hidden md:block">{t("header")}</h1>
      <div className="flex items-center gap-2">
        <LocaleSwitcher variant="popover" />
        <ThemeSwitch />
      </div>
    </Navbar>
  );
}
