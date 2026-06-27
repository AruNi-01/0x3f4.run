"use client";

import NotFoundPage from "@/app/not-found";
import { BackIcon } from "@/components/icons";
import ProjectDetail from "@/components/project-page/ProjectDetail";
import { projects } from "@/config/projects";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const t = useTranslations("project");
  const { slug } = params;

  const project = projects.find((project) => project.slug === slug);
  if (!project) {
    return <NotFoundPage pathname="project" />;
  }

  return (
    <section className="flex flex-col items-start justify-center gap-6 lg:mx-0 mx-7">
      <Button
        as={Link}
        href="/project"
        variant="light"
        size="sm"
        startContent={
          <BackIcon className="transition-all group-hover/icon:duration-1000 ease-in-out group-hover/icon:-translate-x-1" />
        }
        endContent={<span className="-ml-1 font-bold">{t("detailBack")}</span>}
        className="group/icon hidden lg:flex"
      />
      <ProjectDetail {...project} />
    </section>
  );
}
