"use client";

import { useEffect, useRef } from "react";
import { Project } from "../../types/project";
import Image from "next/image";
import { ClientIcon as Icon } from "../shared/ClientIcon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".proj-fade-in",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-12 pb-16 bg-[#fffff1]"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "url('/images/backgrounds/project_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="max-w-7xl mx-auto w-full">
        <div className="proj-fade-in relative z-10 mb-8 px-8 flex items-center justify-between text-zinc-900">
          <h2
            className="text-4xl md:text-5xl font-light tracking-tight"
            style={{ fontFamily: '"Noto Serif Display", serif' }}
          >
            <span className="italic">projects</span> on Github
          </h2>
          {/* <Link
            href="/projects"
            className="text-sm uppercase tracking-widest text-[#AF1611] hover:text-black transition-colors"
            style={{ fontFamily: "var(--font-season-sans)" }}
          >
            View all
          </Link> */}
        </div>

        <div className="proj-fade-in relative z-10 w-full">
          <style
            dangerouslySetInnerHTML={{
              __html: `
          .carousel-track {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            width: 100%;
            padding: 2rem 0;
          }
          .carousel-item {
            flex: 1;
            height: 480px;
            transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
            position: relative;
            cursor: default;
            z-index: 1;
            min-width: 0;
          }
          .carousel-item:hover {
            flex: 1.5;
            height: 500px;
            z-index: 10;
            transform: scale(1.02);
          }
          .carousel-item-inner {
            width: 100%;
            flex: 1; /* Automatically take remaining height */
            transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          }
          .carousel-item:hover .carousel-item-inner {
            box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.4);
          }
          .carousel-item-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.8s ease;
          }
          .carousel-item:hover .carousel-item-img {
            transform: scale(1.08); /* slight inner image zoom */
          }
        `,
            }}
          />

          <div className="carousel-track">
            {projects.map((project, idx) => (
              <div
                key={`${project.slug}-${idx}`}
                className="carousel-item group flex flex-col justify-between focus:outline-none"
              >
                <div className="carousel-item-inner relative overflow-hidden shrink-0 bg-zinc-800">
                  {/* Fallback image style in case heroImage is empty or 404 */}
                  <Image
                    src={
                      project.heroImage ||
                      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                    }
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="carousel-item-img object-cover"
                    unoptimized={project.heroImage?.endsWith(".png")}
                  />

                  {/* Dark Overlay with Information */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center z-10 pointer-events-none">
                    <p
                      className="text-white text-base md:text-lg mb-4 line-clamp-3 leading-relaxed"
                      style={{ fontFamily: "var(--font-season-sans)" }}
                    >
                      {project.description}
                    </p>
                    <div
                      className="flex flex-wrap justify-center gap-2"
                      style={{ fontFamily: "var(--font-season-sans)" }}
                    >
                      {project.tags?.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/20 text-white text-xs rounded-full font-medium tracking-wide border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Top Left Icons (Live URLs) */}
                  <div className="absolute top-4 left-4 z-30 flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0 p-2.5 bg-white/10 hover:bg-[#AF1611] rounded-full text-white backdrop-blur-md"
                        aria-label="Landing Page URL"
                        title="Landing Page"
                      >
                        <Icon icon="lucide:external-link" width="20" />
                      </a>
                    )}
                    {project.liveUrlClient && (
                      <a
                        href={project.liveUrlClient}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0 p-2.5 bg-white/10 hover:bg-[#AF1611] rounded-full text-white backdrop-blur-md delay-50"
                        aria-label="Web Client URL"
                        title="Web Client"
                      >
                        <Icon icon="lucide:layout-template" width="20" />
                      </a>
                    )}
                  </div>

                  {/* Top Right Icons (Multiple GitHub Repos) */}
                  <div className="absolute top-4 right-4 z-30 flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 p-2.5 bg-white/10 hover:bg-[#AF1611] rounded-full text-white backdrop-blur-md"
                        aria-label="Web Repository"
                        title="Web Repository"
                      >
                        <Icon icon="lucide:github" width="20" />
                      </a>
                    )}
                    {project.githubUrlClient && (
                      <a
                        href={project.githubUrlClient}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 p-2.5 bg-white/10 hover:bg-[#AF1611] rounded-full text-white backdrop-blur-md delay-50"
                        aria-label="Web Client Repository"
                        title="Web Client Repository"
                      >
                        <Icon icon="lucide:monitor" width="20" />
                      </a>
                    )}
                    {project.githubUrlMobile && (
                      <a
                        href={project.githubUrlMobile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 p-2.5 bg-white/10 hover:bg-[#AF1611] rounded-full text-white backdrop-blur-md delay-75"
                        aria-label="Mobile Repository"
                        title="Mobile App Repository"
                      >
                        <Icon icon="lucide:smartphone" width="20" />
                      </a>
                    )}
                  </div>

                  {/* Removed main detail Link so clicking the card does not navigate */}
                </div>

                <div
                  className="flex justify-between items-start text-zinc-600 transition-colors mt-4"
                  style={{ fontFamily: "var(--font-season-sans)" }}
                >
                  <span className="text-sm md:text-base pr-4 leading-snug max-w-full">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
