import { siteConfig } from "../../constants/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {siteConfig.author}. All rights reserved.
        </span>
        <span className="text-sm">Built with Next.js App Router.</span>
      </div>
    </footer>
  );
}
