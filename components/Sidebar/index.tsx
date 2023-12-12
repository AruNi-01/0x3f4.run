"use client";
import { siteConfig } from "@/config/site";
import { Listbox, ListboxItem, cn } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { AddNoteIcon } from "../icons";
import { ThemeSwitch } from "../theme-switch";
import EmploymentState from "./EmploymentState";
import { Footer } from "./Footer";
import Header from "./Header";

export default function Sidebar() {
  const pathname = usePathname();

  const iconClass =
    "text-xl text-default-400 pointer-events-none flex-shrink-0 h-8 w-8";
  const itemActiveClass = (path: string): object => {
    return {
      "bg-[#eeeeef] dark:bg-[#19191c]": pathname === path,
    };
  };

  return (
    <div className="hidden lg:flex flex-col gap-3 w-1/3 max-w-[285px]">
      <div className="fixed w-1/6 ml-16 max-w-[285px]">
        <Listbox
          items={siteConfig.sidebar.navItems}
          variant="flat"
          aria-label="Actions"
        >
          <ListboxItem
            key="header"
            startContent={<Header className="" />}
            endContent={<ThemeSwitch />}
            variant="light"
            isReadOnly={true}
            className="cursor-default"
          />
          <ListboxItem
            key="state"
            startContent={<EmploymentState />}
            variant="light"
            showDivider={true}
            className="cursor-default"
          />

          {/* dynamic items, want to replace below ListboxItem */}
          {/* {(item) => (
        <ListboxItem
          key={item.label}
          title={item.label}
          href={item.href}
          className={cn(itemActiveClass(item.href))}
          startContent={<AddNoteIcon className={iconClass} />}
        />
      )} */}

          <ListboxItem
            key="home"
            title="Home"
            href="/"
            className={cn(itemActiveClass("/"))}
            startContent={<AddNoteIcon className={iconClass} />}
          />
          <ListboxItem
            key="project"
            title="Project"
            href="/project"
            className={cn(itemActiveClass("/project"))}
            startContent={<AddNoteIcon className={iconClass} />}
          />
          <ListboxItem
            key="about"
            title="About"
            href="/about"
            className={cn(itemActiveClass("/about"))}
            startContent={<AddNoteIcon className={iconClass} />}
          />
          <ListboxItem
            key="contact"
            title="Contact"
            href="/contact"
            className={cn(itemActiveClass("/contact"))}
            startContent={<AddNoteIcon className={iconClass} />}
            showDivider={true}
          />

          <ListboxItem key="footer" variant="light" isReadOnly={true} className="cursor-default">
            <Footer />
          </ListboxItem>
        </Listbox>
      </div>
    </div>
  );
}
