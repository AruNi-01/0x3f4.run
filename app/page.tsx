"use client";
import MottoTyped from "@/components/home-page/MottoTyped";
import TitleAnimation from "@/components/home-page/TitleAnimation";
import TopTip from "@/components/home-page/TopTip";
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
        <Button
          onClick={() => router.push("/about")}
          size="lg"
          radius="md"
          variant="flat"
        >
          <div className="group transition-all duration-1000 inline-flex items-center justify-center text-base font-medium">
            <span className="w-full">Know more about me</span>
            <span className="transition-transform delay-100 duration-1000 group-hover:translate-x-2">
              {/* prettier-ignore */}
              <svg className="text-primary  rtl:rotate-180" fill="none" width="24" height="24" viewBox="0 0 72 72" aria-hidden="true">
                <path className="transition-transform ease-in-out delay-200 duration-1000 translate-x-[-8px] group-hover:translate-x-[8px]" fillRule="evenodd" clipRule="evenodd" d="M40.0001 19.0245C41.0912 17.7776 42.9864 17.6513 44.2334 18.7423L58.9758 33.768C59.6268 34.3377 60.0002 35.1607 60.0002 36.0257C60.0002 36.8908 59.6268 37.7138 58.9758 38.2835L44.2335 53.3078C42.9865 54.3988 41.0913 54.2725 40.0002 53.0256C38.9092 51.7786 39.0355 49.8835 40.2824 48.7924L52.4445 36.0257L40.2823 23.2578C39.0354 22.1667 38.9091 20.2714 40.0001 19.0245Z" fill="currentColor"></path>
                <path className="opacity-0 ease-in-out delay-200 duration-1000 transition-opacity group-hover:opacity-100" d="M60 36.0273C60 37.6842 58.6569 39.0273 57 39.0273H15C13.3431 39.0273 12 37.6842 12 36.0273C12 34.3704 13.3431 33.0273 15 33.0273H57C58.6569 33.0273 60 34.3704 60 36.0273Z" fill="currentColor"></path>
              </svg>
            </span>
          </div>
        </Button>
      </div>
    </section>
  );
}
