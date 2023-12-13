"use client";
import LifeTimeline from "@/components/about-page/LifeTimeline";
import TechStack from "@/components/about-page/TechStack";
import H1Title from "@/components/ui/H1Title";
import H2Title from "@/components/ui/H2Title";
import AnimateLink from "@/components/ui/AnimateLink";
import { Divider } from "@nextui-org/react";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-start justify-center gap-4 lg:mx-0 mx-7">
      <H1Title>About me</H1Title>
      <div className="font-medium opacity-80">
        <div>
          Hello, I&apos;m <b>AarynLu</b>, a college student based in Wuhan-China. This website is coded by myself, and I
          will update it from time to time. If you think it&apos;s okay, you can <b>star</b> it on{" "}
          <AnimateLink href="https://github.com/AruNi-01/0x3f4.run" isExternal={true} className="text-primary">
            GitHub
          </AnimateLink>
          , thanks!
        </div>
        <div className="mt-3">
          Now I trend to full-stack web developer, priority in backend. For the front-end, I&apos;m fans of{" "}
          <AnimateLink href="https://react.dev/" isExternal={true} className="text-primary">
            React.js
          </AnimateLink>
          ,{" "}
          <AnimateLink href="https://nextjs.org" isExternal={true} className="text-primary">
            Next.js
          </AnimateLink>{" "}
          and{" "}
          <AnimateLink href="https://tailwindcss.com" isExternal={true} className="text-primary">
            Tailwind CSS
          </AnimateLink>
          .
        </div>
      </div>
      <Divider />
      <H2Title>Life timeline</H2Title>
      <LifeTimeline />
      <Divider />
      <H2Title>Tech stack</H2Title>
      <TechStack />
    </section>
  );
}
