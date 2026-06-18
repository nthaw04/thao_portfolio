"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../context/LanguageContext";

export function FigmaProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Add optional animations here if desired later
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="figma"
      ref={sectionRef}
      className="relative w-full h-auto md:h-screen flex flex-col md:flex-row bg-[#151515] overflow-hidden"
    >
      {/* Left Panel */}
      <div className="w-full md:w-[35%] bg-[#121212] text-white p-12 md:p-16 flex flex-col justify-center relative z-10 min-h-[50vh] md:h-full">
        <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
          <h2
            className="text-[#e23614] text-5xl md:text-[5rem] font-serif mb-10 tracking-tight"
            style={{ fontFamily: '"Noto Serif Display", serif' }}
          >
            <span className="italic">{language === "vi" ? "dự án" : "projects"}</span>
            <br />
            <span className="not-italic">
              {language === "vi" ? "trên" : "on"}
              <br />
              Figma.
            </span>
          </h2>

          <p
            className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-12 font-light"
            style={{
              fontFamily: "var(--font-season-sans), sans-serif",
              color: "#d1d1d1",
            }}
          >
            {language === "vi" 
              ? "Tuyển tập các dự án cá nhân và làm việc nhóm của tôi—được xây dựng trong suốt quá trình học hỏi và hoàn thiện kỹ năng UX/UI." 
              : "A showcase of my personal and team projects—built throughout my continuous journey of learning and mastering UX/UI."}
          </p>

          <Link
            href="/figma"
            className="flex items-center gap-6 group cursor-pointer hover:opacity-80 transition-opacity w-max mt-auto"
          >
            <span className="text-sm font-light tracking-wide uppercase">
              {language === "vi" ? "Xem tất cả" : "See more"}
            </span>
            <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-[65%] relative bg-[#fffff1] py-4 px-2 md:px-4 lg:px-4 flex items-center justify-center min-h-[50vh] md:h-full">
        {/* Soft shadow overlay for the leafy effect */}
        <div
          className="absolute inset-0 z-0 mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: "url('/images/backgrounds/figma_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Asymmetric 5-Image Grid over Yellow Background */}
        <div
          className="relative z-10 w-full md:w-auto h-auto md:h-full md:max-h-[calc(100vh-40px)] max-w-full md:aspect-[1.25] flex flex-col md:grid md:grid-cols-12 gap-3 md:gap-4 text-black overflow-hidden bg-transparent p-0"
          style={{ gridTemplateRows: "repeat(11, minmax(0, 1fr))" }}
        >
          {/* Image 1 (Top-Left, Vertical) */}
          <div className="w-full aspect-[3/4] md:aspect-auto md:col-span-7 md:col-start-1 md:row-span-6 md:row-start-1 relative overflow-hidden group">
            <Image
              src="/images/figma/figma_grid_1.png"
              alt="Creative Moodboard"
              fill
              unoptimized
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Image 2 (Top-Right, Horizontal) */}
          <div className="w-full aspect-[4/3] md:aspect-auto md:col-span-5 md:col-start-8 md:row-span-3 md:row-start-1 relative overflow-hidden group">
            <Image
              src="/images/figma/figma_grid_2.png"
              alt="Team Collaboration"
              fill
              unoptimized
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Image 3 (Middle-Right, Horizontal) */}
          <div className="w-full aspect-[4/3] md:aspect-auto md:col-span-5 md:col-start-8 md:row-span-4 md:row-start-4 relative overflow-hidden group">
            <Image
              src="/images/figma/figma_grid_3.png"
              alt="Moodboard Work"
              fill
              unoptimized
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Image 4 (Bottom-Left, Vertical) */}
          <div className="w-full aspect-[3/4] md:aspect-auto md:col-span-7 md:col-start-1 md:row-span-5 md:row-start-7 relative overflow-hidden group">
            <Image
              src="/images/figma/figma_grid_4.png"
              alt="Creative Discussion"
              fill
              unoptimized
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Image 5 (Bottom-Right, Square) */}
          <div className="w-full aspect-square md:aspect-auto md:col-span-5 md:col-start-8 md:row-span-4 md:row-start-8 relative overflow-hidden group">
            <Image
              src="/images/figma/figma_grid_5.png"
              alt="Whiteboard Creativity"
              fill
              unoptimized
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
