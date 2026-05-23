import { SectionHeading } from "../shared/SectionHeading";

export function AboutSection() {
  return (
    <section className="space-y-6 py-24">
      <SectionHeading
        title="About Me"
        description="Cá nhân hoá câu chuyện và vị thế nghề nghiệp với cách trình bày rõ ràng."
      />
      <div className="grid gap-6 text-slate-600 dark:text-slate-300 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Kinh nghiệm
          </h3>
          <p className="mt-4 leading-7">
            Thiết kế và xây dựng các trang landing page, portfolio và case study
            bằng Next.js, chú trọng trải nghiệm người dùng và hiệu suất.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Phương pháp
          </h3>
          <p className="mt-4 leading-7">
            Ưu tiên thiết kế reusable component, route rõ ràng và data-first
            content để dễ mở rộng trong tương lai.
          </p>
        </div>
      </div>
    </section>
  );
}
