import Link from "next/link";
import { Button } from "../shared/Button";
import { routes } from "../../constants/routes";

export function HeroSection() {
  return (
    <section className="space-y-8 py-24">
      <div className="max-w-3xl space-y-6">
        <p className="text-sm uppercase tracking-[0.28em] text-blue-600">
          Frontend Architect
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
          Thiết kế portfolio cá nhân theo hướng hybrid landing + case study.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Landing page chính cung cấp cái nhìn tổng quan, kết hợp với dynamic
          route cho từng dự án, giúp nội dung có cấu trúc và dễ mở rộng.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href={routes.projects} className="w-fit">
            <Button>View Projects</Button>
          </Link>
          <Link href={routes.resume} className="w-fit">
            <Button variant="secondary">See Resume</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
