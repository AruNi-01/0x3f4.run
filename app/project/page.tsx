import { ProjectCard } from "@/components/project-page/ProjectCard";
import AnimateLink from "@/components/ui/AnimateLink";
import H1Title from "@/components/ui/H1Title";
import { projects } from "@/config/projects";

export default function BlogPage() {
  return (
    <section className="flex flex-col items-start justify-center gap-6 lg:mx-0 mx-7 animate-slide-in-from-right-800">
      <H1Title>Project & Open Source</H1Title>
      <div className="font-medium opacity-80">
        Here are some of my projects and open source, welcome{" "}
        <AnimateLink href="/contact" className="text-primary">
          contact me
        </AnimateLink>{" "}
        if you are interested in them.
      </div>
      <ul className="grid place-items-start gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug} className="mt-6">
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
