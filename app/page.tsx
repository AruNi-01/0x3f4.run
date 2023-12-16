import MoreAboutMe from "@/components/home-page/MoreAboutMe";
import MottoTyped from "@/components/home-page/MottoTyped";
import { Footer } from "@/components/home-page/Sidebar/Footer";
import TitleAnimation from "@/components/home-page/TitleAnimation";
import TopTip from "@/components/home-page/TopTip";
import { siteConfig } from "@/config/site";

export default function Home() {
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
      <MoreAboutMe />
      <Footer className="lg:hidden absolute bottom-3" />
    </section>
  );
}
