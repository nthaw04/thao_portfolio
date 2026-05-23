import Link from "next/link";
import { Project } from "../../types/project";
import { routes } from "../../constants/routes";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-4 flex items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
        <span>{project.category}</span>
        <span>{project.tags.join(" • ")}</span>
      </div>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
        {project.title}
      </h3>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        {project.preview}
      </p>
      <Link
        href={routes.projectDetail(project.slug)}
        className="mt-6 inline-flex text-sm font-semibold text-blue-600 transition hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      >
        View case study →
      </Link>
    </article>
  );
}
