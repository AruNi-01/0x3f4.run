import { Button } from "@nextui-org/button";
import style from "./index.module.scss";
import { SiteIcon } from "@/components/icons";
import { Link, Image } from "@nextui-org/react";
import { otherSites } from "@/config/other-sites";
import AnimateArrow from "@/components/ui/AnimateArrow";

export default function OtherSite() {
  return (
    <div
      className={`${style.borderLight} w-full max-w-sm p-4 bg-[#F5F5F5] border border-gray-200 rounded-xl shadow sm:p-6 dark:bg-[#171717] dark:border-gray-700`}
    >
      <div className="flex items-center gap-3 mb-3 text-lg font-semibold text-gray-900 dark:text-white">
        <SiteIcon />
        Welcome focus my other sites.
      </div>
      <ul className="my-4 space-y-3">
        {otherSites.map((site) => (
          <li key={site.name}>
            <Button
              variant="flat"
              color="default"
              as={Link}
              isExternal={true}
              href={site.url}
              className="flex justify-start gap-3 h-20 w-full"
            >
              <Image src={site.icon} width={30} height={30} alt={site.name} radius="none" />
              <div className="flex flex-col gap-0">
                <h5 className="text-base">{site.name}</h5>
                <p className="text-sm text-default-500 block whitespace-normal leading-4">{site.description}</p>
              </div>
              <AnimateArrow size={24} arrowColor="text-primary" className="absolute right-4" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
