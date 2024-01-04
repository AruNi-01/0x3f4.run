"use client";
import NotFoundPage from "@/app/not-found";
import { BackIcon } from "@/components/icons";
import ProjectDetail from "@/components/project-page/ProjectDetail";
import { projects } from "@/config/projects";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function ProjectPage({ params }: { params: any }) {
  const { slug } = params;
  const router = useRouter();

  const project = projects.find((project) => project.slug === slug);
  if (!project) {
    return <NotFoundPage text="project" />;
  }

  return (
    <section className="flex flex-col items-start justify-center gap-6 lg:mx-0 mx-7">
      <Button
        variant="light"
        size="sm"
        onClick={() => router.back()}
        startContent={
          <BackIcon className="transition-all group-hover/icon:duration-1000 ease-in-out group-hover/icon:-translate-x-1" />
        }
        endContent={<span className="-ml-1 font-bold">Back</span>}
        className="group/icon hidden lg:flex"
      />
      <ProjectDetail {...project} />
    </section>
  );
}
