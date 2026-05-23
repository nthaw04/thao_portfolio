import { getAllProjects } from "../../lib/content";
import { ProjectCard } from "../../components/shared/ProjectCard";
import { SectionHeading } from "../../components/shared/SectionHeading";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        title="All projects"
        description="Danh sách các dự án hiện tại, mỗi dự án có trang case study riêng để mở rộng nội dung nhanh chóng."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </main>
  );
}
