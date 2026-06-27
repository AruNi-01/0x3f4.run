import { siteConfig } from "@/config/site";
import { VercelIcon } from "../../icons";
import Link from "../../ui/Link";
import { cn } from "@nextui-org/system";
import { useTranslations } from "next-intl";

export const Footer = ({ className }: { className?: string }) => {
  const t = useTranslations("sidebar");

  return (
    <div className={cn("text-sm text-[#71717A] animate-slide-in-to-up-1000", className)}>
      <div className="flex justify-center gap-2">
        <p className="font-normal">© {new Date().getFullYear()} -</p>
        <Link href={siteConfig.links.repo} className="text-sm">
          AarynLu
        </Link>
      </div>
      <div className="flex justify-center gap-2 mt-0">
        <p className="font-normal">{t("deployedOn")}</p>
        <Link href={siteConfig.links.vercel}>
          <VercelIcon className="" height={16} />
        </Link>
      </div>
    </div>
  );
};
