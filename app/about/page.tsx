"use client";
import LifeTimeline from "@/components/about-page/LifeTimeline";
import TechStack from "@/components/about-page/TechStack";
import H1Title from "@/components/ui/H1Title";
import H2Title from "@/components/ui/H2Title";
import Link from "@/components/ui/Link";
import { Divider } from "@nextui-org/react";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-start justify-center gap-4 lg:mx-0 mx-7">
      <H1Title>About me</H1Title>
      <div className="font-medium opacity-80">
        <div>
          Hello, I&apos;m <b>AarynLu</b>, a college student based in
          Wuhan-China. This website is coded by myself, and I will update it
          from time to time. If you think it&apos;s okay, you can <b>star</b> it
          on{" "}
          <Link
            href="https://github.com/AruNi-01/0x3f4.run"
            className="text-primary underline"
          >
            GitHub
          </Link>
          , thanks!
        </div>
        <div className="mt-3">
          Now I trend to full-stack web developer, priority in backend. For the
          front-end, I&apos;m fans of{" "}
          <Link href="https://react.dev/" className="text-primary underline">
            React.js
          </Link>
          ,{" "}
          <Link href="https://nextjs.org" className="text-primary underline">
            Next.js
          </Link>{" "}
          and{" "}
          <Link
            href="https://tailwindcss.com"
            className="text-primary underline"
          >
            Tailwind CSS
          </Link>
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
