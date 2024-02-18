"use client";
import AboutContent from "@/components/about-page/AboutContent";
import LifeTimeline from "@/components/about-page/LifeTimeline";
import OtherSite from "@/components/about-page/OtherSite";
import TechStack from "@/components/about-page/TechStack";
import H1Title from "@/components/ui/H1Title";
import H2Title from "@/components/ui/H2Title";
import { techStacks } from "@/config/tech-stacks";
import { Divider } from "@nextui-org/react";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "About",
// };

export default function AboutPage() {
  return (
    <section className="flex flex-col items-start justify-center gap-4 lg:mx-0 mx-7 animate-slide-in-from-right-800">
      <H1Title>About me</H1Title>
      <AboutContent />
      <Divider />
      <H2Title>Other site</H2Title>
      <OtherSite />
      <Divider />
      <H2Title>Life timeline</H2Title>
      <LifeTimeline />
      <Divider />
      <H2Title>Tech stack</H2Title>
      <TechStack techStacks={techStacks} />
    </section>
  );
}
