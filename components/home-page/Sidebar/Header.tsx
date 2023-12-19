import { User } from "@nextui-org/react";
import Link from "../../ui/Link";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "../theme-switch";
import EmploymentState from "./EmploymentState";

export default function Header({ className }: { className?: string }) {
  return (
    <div className="flex flex-col gap-3 animate-slide-in-to-down-1000">
      <div className="flex justify-between items-center">
        <User
          className={className}
          classNames={{
            name: "text-[17px] font-bold",
          }}
          name={siteConfig.sidebar.headTitle}
          description={<Link href={siteConfig.links.authGitHub}>@{siteConfig.sidebar.linkLabel}</Link>}
          avatarProps={{
            src: siteConfig.sidebar.headIcon,
          }}
        />
        <ThemeSwitch />
      </div>
      <EmploymentState />
    </div>
  );
}
