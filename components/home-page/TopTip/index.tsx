"use client";
import AnimateArrow from "@/components/ui/AnimateArrow";
import { siteConfig } from "@/config/site";
import selebrationIcon from "@/public/lottie/celebration.json";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Lottie from "lottie-react";
import { useRef } from "react";
import { CongratulationIcon } from "../../icons";
import style from "./index.module.scss";

export default function TopTip() {
  const selebrationRef = useRef<any>();

  let timer: NodeJS.Timeout;
  const mouseEnterHandle = () => {
    selebrationRef.current?.play();
    timer = setTimeout(() => {
      selebrationRef.current?.goToAndStop(0, true);
    }, 1800);
  };
  const mouseLeaveHandle = () => {
    selebrationRef.current?.stop();
    clearTimeout(timer);
  };

  return (
    <div className={`px-4 mx-auto max-w-screen-xl text-center mt-3 ${style.floatingY}`}>
      <Button
        as={Link}
        href={siteConfig.links.repo}
        onMouseEnter={mouseEnterHandle}
        onMouseLeave={mouseLeaveHandle}
        className="flex group py-1 px-1 pe-4 text-sm text-black/80 bg-blue-100 rounded-full dark:bg-blue-800 dark:text-white/80 hover:bg-blue-200 dark:hover:bg-blue-900 animate-slide-in-to-down-1000"
      >
        <span className="text-xs bg-blue-500 dark:bg-blue-950 rounded-full flex gap-2 text-white/80 px-4 py-1.5 me-3">
          <CongratulationIcon />
        </span>
        <span className="text-sm font-medium block whitespace-normal line-clamp-2 overflow-ellipsis">
          This website is open source on GitHub! Clone/Fork Now
        </span>
        <AnimateArrow size={18} />
      </Button>
      <Lottie
        className="absolute top-1/2 -translate-y-2/3 left-[9%] -translate-x-1/2 w-28 h-28"
        animationData={selebrationIcon}
        lottieRef={selebrationRef}
        autoplay={false}
      />
    </div>
  );
}
