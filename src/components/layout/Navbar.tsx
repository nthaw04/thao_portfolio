"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "../../constants/routes";
import { siteConfig } from "../../constants/siteConfig";
import { useNavbarScroll } from "../../hooks/useNavbarScroll";
import { Button } from "../ui/button";

export function Navbar() {
  const pathname = usePathname();
  const { hasScrolled } = useNavbarScroll();
  const isProjectDetail =
    pathname?.startsWith("/projects/") && pathname !== "/projects";

  return (
    <header
      className={`sticky top-0 z-30 transition duration-300 ${hasScrolled ? "border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95" : "bg-transparent"} `}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href={routes.home}
          className="text-lg font-semibold tracking-tight"
        >
          {siteConfig.title}
        </Link>

        <div className="flex items-center gap-4">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          {isProjectDetail ? (
            <Link href={routes.projects} legacyBehavior>
              <a>
                <Button variant="secondary">Back to Projects</Button>
              </a>
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
}
