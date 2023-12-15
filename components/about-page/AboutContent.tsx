import AnimateLink from "../ui/AnimateLink";

export default function AboutContent() {
  return (
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
  );
}
