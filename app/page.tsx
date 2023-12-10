"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import TitleAnimation from "@/components/TitleAnimation";
import MottoType from "@/components/MottoType";

export default function Home() {
  return (
    <section className="flex flex-col justify-around w-full items-center gap-4">
      <div className="inline-block w-full text-center justify-center">
        <div className="hidden lg:block">
          <TitleAnimation titleText="AarynLu | 0x3f4.run" />
        </div>
        <div className="lg:hidden">
          <TitleAnimation titleText="AarynLu" />
        </div>
        <br />
        <h2 className="my-2 text-3xl text-default-500">
          <MottoType />
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
