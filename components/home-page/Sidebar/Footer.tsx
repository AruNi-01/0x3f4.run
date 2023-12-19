import { siteConfig } from "@/config/site";
import { VercelIcon } from "../../icons";
import Link from "../../ui/Link";
import { cn } from "@nextui-org/system";

export const Footer = ({ className }: { className?: string }) => {
  return (
    <div className={cn("text-sm text-[#71717A] animate-slide-in-to-up-1000", className)}>
      <div className="flex justify-center gap-2">
        <p className="font-normal">© 2023 -</p>
        <Link href={siteConfig.links.repo} className="text-sm">
          AarynLu
        </Link>
      </div>
      <div className="flex justify-center gap-2 mt-0">
        <p className="font-normal">Deployed on</p>
        <Link href={siteConfig.links.vercel}>
          <VercelIcon className="" height={16} />
        </Link>
      </div>
    </div>
  );
};
