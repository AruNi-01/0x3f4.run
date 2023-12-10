"use client";
import {
  Button,
  Listbox,
  ListboxItem,
  cn
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { AddNoteIcon, HomeIcon } from "../icons";
import { ThemeSwitch } from "../theme-switch";
import EmploymentState from "./EmploymentState";
import Header from "./Header";
import { Footer } from "./Footer";

export default function Sidebar() {
  const pathname = usePathname();

  const iconClass =
    "text-xl text-default-400 pointer-events-none flex-shrink-0 h-8 w-8";
  const itemActiveClass = (path: string) => {
    return {
      "bg-[#eeeeef] dark:bg-[#19191c]": pathname === path,
    };
  };

  const router = useRouter();

  function handleHomeButton() {
    router.push("/");
  }

  return (
    <Listbox
      className="hidden lg:flex flex-col gap-3 justify-around w-1/5 max-w-2xl"
      variant="flat"
      aria-label="Actions"
    >
      <ListboxItem
        key="header"
        startContent={<Header />}
        endContent={
          <Button
            onClick={handleHomeButton}
            isIconOnly
            color="primary"
            variant="flat"
            size="sm"
          >
            <HomeIcon />
          </Button>
        }
        variant="light"
        isReadOnly={true}
      />
      <ListboxItem
        key="theme-switch"
        startContent={<EmploymentState />}
        endContent={<ThemeSwitch />}
        variant="light"
        showDivider={true}
      />
      <ListboxItem
        key="docs"
        title="Docs"
        href="/docs"
        className={cn(itemActiveClass("/docs"))}
        startContent={<AddNoteIcon className={iconClass} />}
      />
      <ListboxItem
        key="blog"
        title="Blog"
        href="/blog"
        className={cn(itemActiveClass("/blog"))}
        startContent={<AddNoteIcon className={iconClass} />}
      />
      <ListboxItem
        key="about"
        title="About"
        href="/about"
        className={cn(itemActiveClass("/about"))}
        startContent={<AddNoteIcon className={iconClass} />}
        showDivider={true}
      />
      <ListboxItem
        key="footer"
        variant="light"
        children={<Footer />}
        isReadOnly={true}
      />
    </Listbox>
  );
}
