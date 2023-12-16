import { User } from "@nextui-org/react";
import Link from "../../ui/Link";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "../theme-switch";
import EmploymentState from "./EmploymentState";

export default function Header({ className }: { className?: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <User
          className={className}
          classNames={{
            name: "text-[17px] font-bold",
          }}
          name="AarynLu"
          description={<Link href={siteConfig.links.authGitHub}>@AruNi-01</Link>}
          avatarProps={{
            src: "/logo.png",
          }}
        />
        <ThemeSwitch />
      </div>
      <EmploymentState />
    </div>
  );
}
