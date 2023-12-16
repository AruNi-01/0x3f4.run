import { User } from "@nextui-org/react";
import Link from "../../ui/Link";
import { siteConfig } from "@/config/site";

export default function Header({ className }: { className?: string }) {
  return (
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
  );
}
