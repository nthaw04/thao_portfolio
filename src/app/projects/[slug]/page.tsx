import { notFound } from "next/navigation";
import {
  fetchProjectDetail,
  fetchProjects,
} from "../../../services/projectService";

export async function generateStaticParams() {
  return fetchProjects().map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = fetchProjectDetail(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.35em] text-blue-600">
          {project.category}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">
          {project.title}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-slate-700 dark:text-slate-300">
            Đây là phần giới thiệu chi tiết về case study. Bạn có thể mở rộng
            bằng nội dung Markdown hoặc MDX bên trong thư mục{" "}
            <code>src/data/case-studies</code>.
          </p>
        </div>
        <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="text-sm text-slate-500 dark:text-slate-400">Tags</div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
