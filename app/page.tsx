import MottoTyped from "@/components/home-page/MottoTyped";
import NavCard from "@/components/home-page/NavCard";
import { Footer } from "@/components/home-page/Sidebar/Footer";
import TitleAnimation from "@/components/home-page/TitleAnimation";
import TopTip from "@/components/home-page/TopTip";
import { navCards } from "@/config/nav-cards";
import { siteConfig } from "@/config/site";
import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

  icons: {
    icon: siteConfig.browserIcon,
    shortcut: siteConfig.browserIcon,
    apple: siteConfig.browserIcon,
  },
};

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
      <div className="grid place-items-start gap-5 lg:grid-cols-2 mx-4">
        {navCards.map(
          ({ animateIcon, animationStopFrame, firstPlayTime, title, description, buttonText, buttonLink }) => (
            <NavCard
              key={title}
              animateIcon={animateIcon}
              animationStopFrame={animationStopFrame}
              firstPlayTime={firstPlayTime}
              title={title}
              description={description}
              buttonText={buttonText}
              buttonLink={buttonLink}
            />
          )
        )}
      </div>
      <Footer className="lg:hidden" />
    </section>
  );
}
