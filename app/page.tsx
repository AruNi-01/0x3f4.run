import MottoTyped from "@/components/home-page/MottoTyped";
import NavCard from "@/components/home-page/NavCard";
import { Footer } from "@/components/home-page/Sidebar/Footer";
import TitleAnimation from "@/components/home-page/TitleAnimation";
import TopTip from "@/components/home-page/TopTip";
import { navCards } from "@/config/nav-cards";
import { siteConfig } from "@/config/site";
import { Metadata, Viewport } from "next";
import { getTranslations } from "next-intl/server";
import { isSupportedLocale } from "@/i18n/locale";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export async function generateMetadata({
  params,
}: {
  params?: { locale?: string };
}): Promise<Metadata> {
  const locale = params?.locale && isSupportedLocale(params.locale) ? params.locale : undefined;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: {
      default: t("title"),
      template: `%s - ${t("title")}`,
    },
    description: t("description"),
    icons: {
      icon: siteConfig.browserIcon,
      shortcut: siteConfig.browserIcon,
      apple: siteConfig.browserIcon,
    },
  };
}

export default async function Home() {
  const t = await getTranslations();

  return (
    <section className="flex flex-col justify-around w-full items-center gap-10">
      <TopTip />
      <div className="inline-block w-full text-center justify-center animate-slide-in-from-right-1000">
        <div className="hidden lg:block min-w-[538px]">
          <TitleAnimation titleText={t(siteConfig.homePage.titleAnimationStr)} />
        </div>
        <div className="lg:hidden">
          <TitleAnimation titleText={siteConfig.mobile.titleAnimationStr} />
        </div>
        <br />
        <h2 className="my-2 text-3xl text-default-500">
          <MottoTyped motto={t(siteConfig.homePage.mottoStr)} />
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
