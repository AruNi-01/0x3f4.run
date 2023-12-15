"use client";
import MottoTyped from "@/components/home-page/MottoTyped";
import TitleAnimation from "@/components/home-page/TitleAnimation";
import TopTip from "@/components/home-page/TopTip";
import AnimateArrow from "@/components/ui/AnimateArrow";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

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

      <div className="flex gap-3">
        <Button onClick={() => router.push("/about")} size="lg" radius="md" variant="flat">
          <AnimateArrow text="Know more about me" size={24} arrowColor="text-primary" />
        </Button>
      </div>
    </section>
  );
}
