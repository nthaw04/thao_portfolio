import { SectionHeading } from "../shared/SectionHeading";
import { Button } from "../shared/Button";

export function ContactSection() {
  return (
    <section className="space-y-8 py-24">
      <SectionHeading
        title="Let’s talk"
        description="Nối kết với khách hàng hoặc nhà tuyển dụng bằng một lời kêu gọi rõ ràng."
      />
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
          Tôi đang mở các cơ hội hợp tác mới cho dự án portfolio, sản phẩm
          digital và UI/UX.
        </p>
        <Button className="mt-6" type="button">
          Get in touch
        </Button>
      </div>
    </section>
  );
}
