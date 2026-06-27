"use client";
import { BackIcon } from "@/components/icons";
import notFoundIcon from "@/public/lottie/not-found.json";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function NotFoundPage({ pathname }: { pathname?: string }) {
  const t = useTranslations("errors");
  const navT = useTranslations("navigation");

  const pageLabel = pathname
    ? pathname === "project"
      ? navT("project")
      : pathname === "about"
      ? navT("about")
      : pathname === "contact"
      ? navT("contact")
      : pathname === "website"
      ? navT("website")
      : navT("home")
    : navT("home");

  return (
    <section className="flex flex-col md:flex-row md:mx-0 mx-5 items-center justify-center mt-10">
      <Lottie animationData={notFoundIcon} className="md:w-2/3" />
      <div className="flex flex-col gap-3 md:w-1/3">
        <span className="font-bold text-4xl animate-slide-in-to-up-500">{t("oops")}</span>
        <span className="pathname-neutral-500 pathname-lg animate-slide-in-to-up-1000">
          {t("notFoundTitle")} <p className="font-bold inline-block">{pathname ? pageLabel : navT("home")}</p> {t("lookingFor")}
        </span>
        <Button
          as={Link}
          href={pathname ? "/" + pathname : "/"}
          color="primary"
          startContent={
            <BackIcon className="transition-all group-hover/icon:duration-1000 ease-in-out group-hover/icon:-translate-x-2" />
          }
          className="group/icon font-bold mt-6 animate-slide-in-to-up-1500"
        >
          {t("takeMePrefix")} {pathname ? pageLabel : navT("home")}
        </Button>
      </div>
    </section>
  );
}
