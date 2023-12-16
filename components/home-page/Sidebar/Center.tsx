import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { cn } from "@nextui-org/system";
import { usePathname } from "next/navigation";

export default function Center() {
  const pathname = usePathname();
  const itemActiveClass = (path: string): object => {
    return {
      "bg-[#eeeeef] dark:bg-neutral-800": pathname === path,
    };
  };

  return (
    <div className="flex flex-col gap-1">
      {siteConfig.sidebar.navItems.map((item) => (
        <Button
          as={Link}
          key={item.label.toLowerCase()}
          variant="light"
          radius="sm"
          href={item.href}
          className={cn("flex justify-start gap-2 w-full", itemActiveClass(item.href))}
        >
          {item.icon}
          <span className="font-semibold dark:text-neutral-300">{item.label}</span>
        </Button>
      ))}
    </div>
  );
}
