import { User } from "@nextui-org/react";
import Link from "../../ui/Link";

export default function Header({ className }: { className?: string }) {
  return (
    <User
      className={className}
      classNames={{
        name: "text-[17px] font-bold",
      }}
      name="AarynLu"
      description={<Link href="https://github.com/AruNi-01">@AruNi-01</Link>}
      avatarProps={{
        src: "/logo.png",
      }}
    />
  );
}
