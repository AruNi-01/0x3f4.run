"use client";
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
    return (
      <>
        <h1 className="text-3xl font-bold text-start mb-4">Project Not Found</h1>
        <Button variant="light" onClick={() => router.replace("/project")}>
          {"< Back Project"}
        </Button>
      </>
    );
  }

  return (
    <section className="flex flex-col items-start justify-center gap-6 lg:mx-0 mx-7">
      <Button
        variant="light"
        size="sm"
        onClick={() => router.back()}
        startContent={<BackIcon className="transition-all duration-500 group-hover/icon:-translate-x-1" />}
        endContent={<span className="-ml-1 font-bold">Back</span>}
        className="group/icon hidden lg:flex"
      />
      <ProjectDetail {...project} />
    </section>
  );
}
