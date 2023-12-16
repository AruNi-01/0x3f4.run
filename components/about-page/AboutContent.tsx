import { siteConfig } from "@/config/site";
import AnimateLink from "../ui/AnimateLink";

export default function AboutContent() {
  return (
    <div className="font-medium opacity-80">
      <div>
        Hello, I&apos;m <b>AarynLu</b>, a college student based in Wuhan-China. This website is coded by myself, and I
        will update it from time to time. If you think it&apos;s okay, you can <b>star</b> it on{" "}
        <AnimateLink href={siteConfig.links.repo} isExternal={true} className="text-primary">
          GitHub
        </AnimateLink>
        , thanks!
      </div>
      <div className="mt-3">
        Now I trend to full-stack web developer, priority in backend. For the front-end, I&apos;m fans of{" "}
        <AnimateLink href={siteConfig.links.react} isExternal={true} className="text-primary">
          React.js
        </AnimateLink>
        ,{" "}
        <AnimateLink href={siteConfig.links.nextjs} isExternal={true} className="text-primary">
          Next.js
        </AnimateLink>{" "}
        and{" "}
        <AnimateLink href={siteConfig.links.tailwindcss} isExternal={true} className="text-primary">
          Tailwind CSS
        </AnimateLink>
        .
      </div>
    </div>
  );
}
