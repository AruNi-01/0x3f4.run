import TechStack from "@/components/about-page/TechStack";
import H1Title from "@/components/ui/H1Title";
import H2Title from "@/components/ui/H2Title";
import Link from "@/components/ui/Link";
import { Divider } from "@nextui-org/react";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-start justify-center gap-4 lg:mx-0 mx-7">
      <H1Title>About me</H1Title>
      <div className="font-mono opacity-80">
        <div>
          Hello, I'm <b>AarynLu</b>, a college student based in Wuhan-China.
          This website is coded by myself, and I will update it from time to
          time. If you think it's okay, you can <b>star</b> it on{" "}
          <Link href="https://github.com/AruNi-01/0x3f4.run">GitHub</Link>,
          thanks!
        </div>
        <div className="mt-3">
          Now I trend to full-stack web developer, priority in backend. For the
          front-end, I'm fans of <Link href="https://react.dev/">React.js</Link>{" "}
          and <Link href="https://nextjs.org">Next.js</Link>,{" "}
          <Link href="https://tailwindcss.com">Tailwind CSS</Link>.
        </div>
      </div>
      <Divider />
      <H2Title>Tech stack</H2Title>
      <TechStack />
    </section>
  );
}
