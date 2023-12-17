import AnimateArrow from "@/components/ui/AnimateArrow";
import { otherSites } from "@/config/other-sites";
import infinity from "@/public/lottie/infinity.json";
import { Button } from "@nextui-org/button";
import { Image, Link } from "@nextui-org/react";
import Lottie from "lottie-react";
import { useRef } from "react";
import style from "./index.module.scss";

export default function OtherSite() {
  const infinityRef = useRef<any>();
  infinityRef.current?.setSpeed(0.7);

  return (
    <div
      className={`${style.borderLight} w-full max-w-sm p-4 bg-[#F5F5F5] border border-gray-200 rounded-xl shadow sm:p-6 dark:bg-neutral-900 dark:border-gray-800`}
    >
      <div className="flex items-center gap-2 mb-3 text-lg font-semibold text-gray-900 dark:text-neutral-400">
        <Lottie animationData={infinity} lottieRef={infinityRef} style={{ width: 32, height: 32 }} />
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
