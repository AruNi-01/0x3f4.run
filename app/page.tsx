"use client";
import MottoTyped from "@/components/home-page/MottoTyped";
import { Footer } from "@/components/home-page/Sidebar/Footer";
import TitleAnimation from "@/components/home-page/TitleAnimation";
import TopTip from "@/components/home-page/TopTip";
import AnimateArrow from "@/components/ui/AnimateArrow";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import Lottie from "lottie-react";
import meIcon from "@/public/lottie/me.json";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const router = useRouter();

  const meRef = useRef<any>();
  useEffect(() => {
    meRef.current?.goToAndStop(285, true);
  }, []);

  return (
    <section className="flex flex-col justify-around w-full items-center gap-10">
      <TopTip />
      <div className="inline-block w-full text-center justify-center">
        <div className="hidden lg:block min-w-[538px]">
          <TitleAnimation titleText={siteConfig.homePage.titleAnimationStr} />
        </div>
        <div className="lg:hidden">
          <TitleAnimation titleText={siteConfig.mobile.titleAnimationStr} />
        </div>
        <br />
        <h2 className="my-2 text-3xl text-default-500">
          <MottoTyped motto={siteConfig.homePage.mottoStr} />
        </h2>
      </div>
      <Button
        onClick={() => router.push("/about")}
        onMouseEnter={() => {
          meRef.current?.play();
        }}
        onMouseLeave={() => {
          meRef.current?.stop();
          meRef.current?.goToAndStop(285, true);
        }}
        size="lg"
        radius="md"
        variant="flat"
        color="default"
        className="flex gap-2 border border-neutral-300 dark:border-neutral-800 shadow-sm shadow-neutral-300 dark:shadow-neutral-800"
      >
        <Lottie animationData={meIcon} lottieRef={meRef} style={{ width: 38, height: 38 }} />
        <AnimateArrow text="Know more about me" textSize="text-xl" textColor="text-primary" size={32} arrowColor="text-primary" />
      </Button>
      <Footer className="lg:hidden absolute bottom-3" />
    </section>
  );
}
