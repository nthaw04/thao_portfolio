import { getFeaturedProjects } from "../../lib/content";
import { ProjectCard } from "../shared/ProjectCard";
import { SectionHeading } from "../shared/SectionHeading";

export function ProjectsSection() {
  const projects = getFeaturedProjects(3);

  return (
    <section className="space-y-8 py-24">
      <SectionHeading
        title="Featured Case Studies"
        description="Những dự án nổi bật được trình bày dưới dạng case study và page chi tiết."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </section>
  );
}
