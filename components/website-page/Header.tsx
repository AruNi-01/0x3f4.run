"use client";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Navbar } from "@nextui-org/navbar";
import { ThemeSwitch } from "../home-page/theme-switch";
import { BackIcon } from "../icons";

export default function Header() {
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
      <h1 className="text-3xl font-bold hidden md:block">About Website</h1>
      <ThemeSwitch />
    </Navbar>
  );
}
