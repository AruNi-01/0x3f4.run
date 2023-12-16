import { ProjectCard } from "@/components/project-page/ProjectCard";
import AnimateLink from "@/components/ui/AnimateLink";
import H1Title from "@/components/ui/H1Title";

export default function BlogPage() {
  return (
    <section className="flex flex-col items-start justify-center gap-4 lg:mx-0 mx-7">
      <H1Title>Project & Open Source</H1Title>
      <div className="font-medium opacity-80">
        Here are some of my projects and open source, welcome{" "}
        <AnimateLink href="/contact" className="text-primary">
          contact me
        </AnimateLink>{" "}
        if you are interested in them.
      </div>
			<div className="flex justify-start gap-5 flex-wrap mt-12 gap-y-12">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
    </section>
  );
}
