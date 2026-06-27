"use client";

import AboutContent from "@/components/about-page/AboutContent";
import LifeTimeline from "@/components/about-page/LifeTimeline";
import LocalTimeStatusCard from "@/components/about-page/LocalTimeStatusCard";
import LocationGlobe from "@/components/about-page/LocationGlobe";
import OtherSite from "@/components/about-page/OtherSite";
import H1Title from "@/components/ui/H1Title";
import H2Title from "@/components/ui/H2Title";
import { Divider } from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <section className="flex flex-col items-start justify-center gap-4 lg:mx-0 mx-7 animate-slide-in-from-right-800">
      <H1Title>{t("title")}</H1Title>
      <AboutContent />
      <Divider />
      <H2Title>{t("otherSiteTitle")}</H2Title>
      <OtherSite />
      <Divider />
      <H2Title>{t("timelineTitle")}</H2Title>
      <LifeTimeline />
      <Divider />
      <H2Title>{t("doingNow")}</H2Title>
      <LocalTimeStatusCard timeZone="Asia/Shanghai" locationLabel={t("locationLabel")} />
      <LocationGlobe coordinates={[31.2304, 121.4737]} className="w-full" />
    </section>
  );
}
