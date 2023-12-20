"use client";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { ThemeSwitch } from "../home-page/theme-switch";
import { BackIcon } from "../icons";
import { Navbar } from "@nextui-org/navbar";

export default function Header() {
  return (
    <Navbar className="">
      <div className="flex lg:justify-around justify-start lg:gap-3 gap-24 items-center w-full">
        <Button
          isIconOnly
          as={Link}
          href="/"
          startContent={<BackIcon />}
          size="sm"
          variant="flat"
          className="font-bold text-sm dark:bg-primary"
        />
        <h1 className="text-5xl font-bold hidden md:block">Website Intro</h1>
        <h1 className="text-3xl font-bold md:hidden">Intro</h1>
        <ThemeSwitch className="hidden lg:block" />
      </div>
    </Navbar>
  );
}
