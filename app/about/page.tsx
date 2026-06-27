"use client";
import AboutContent from "@/components/about-page/AboutContent";
import LifeTimeline from "@/components/about-page/LifeTimeline";
import LocalTimeStatusCard from "@/components/about-page/LocalTimeStatusCard";
import LocationGlobe from "@/components/about-page/LocationGlobe";
import OtherSite from "@/components/about-page/OtherSite";
import H1Title from "@/components/ui/H1Title";
import H2Title from "@/components/ui/H2Title";
import { Divider } from "@nextui-org/react";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "About",
// };

export default function AboutPage() {
  return (
    <section className="flex flex-col items-start justify-center gap-4 lg:mx-0 mx-7 animate-slide-in-from-right-800">
      <title>About | 0x3f4.run</title>
      <H1Title>About me</H1Title>
      <AboutContent />
      <Divider />
      <H2Title>Other site</H2Title>
      <OtherSite />
      <Divider />
      <H2Title>Life timeline</H2Title>
      <LifeTimeline />
      <Divider />
      <H2Title>What I&apos;m Doing Now</H2Title>
      <LocalTimeStatusCard timeZone="Asia/Shanghai" locationLabel="Shanghai, China" />
      <LocationGlobe coordinates={[31.2304, 121.4737]} className="w-full" />
    </section>
  );
}
