"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function FigmaProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Add optional animations here if desired later
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-auto flex flex-col md:flex-row bg-[#151515] overflow-hidden"
    >
      {/* Left Panel */}
      <div className="w-full md:w-[35%] bg-[#121212] text-white p-12 md:p-16 flex flex-col justify-center relative z-10 min-h-[50vh] md:h-auto">
        <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
          <h2
            className="text-[#e23614] text-5xl md:text-[5rem] font-serif mb-10 tracking-tight"
            style={{ fontFamily: '"Noto Serif Display", serif' }}
          >
            <span className="italic">projects</span>
            <br />
            <span className="not-italic">
              on
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
            A showcase of my personal and team projects—built throughout my
            continuous journey of learning and mastering UX/UI.
          </p>

          <div className="flex items-center gap-6 group cursor-pointer hover:opacity-80 transition-opacity w-max mt-auto">
            <span className="text-sm font-light tracking-wide uppercase">
              See more
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
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-[65%] relative bg-[#fffff1] p-8 md:p-12 lg:py-16 lg:px-20 flex items-center justify-center min-h-[50vh]">
        {/* Soft shadow overlay for the leafy effect */}
        <div
          className="absolute inset-0 z-0 mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: "url('/images/backgrounds/figma_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Grid Container matching the image */}
        <div className="relative z-10 w-full max-w-3xl grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-0 gap-y-12 md:gap-y-0 text-black items-center">
          {/* ROW 1 */}
          <div className="col-span-1 md:col-start-1 md:row-start-1 flex justify-center p-4">
            <div className="w-full aspect-4/5 overflow-hidden shadow-sm relative">
              <Image
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800"
                alt="Couple"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>

          <div className="col-span-1 md:col-start-2 md:row-start-1 flex flex-col justify-center items-center text-center px-2 py-4">
            <h3 className="text-sm md:text-lg font-bold uppercase tracking-widest text-[#1a1a1a] mb-1 leading-tight">
              Commercial
              <br />
              Photography
            </h3>
            <p className="text-gray-500 text-xs md:text-sm font-light">
              Short description here
            </p>
          </div>

          <div className="col-span-1 md:col-start-3 md:row-start-1 flex justify-center p-4">
            <div className="w-full aspect-square bg-gray-200 overflow-hidden shadow-sm relative">
              <Image
                src="https://images.unsplash.com/photo-1592247350064-5147be0a6845?auto=format&fit=crop&q=80&w=800"
                alt="Vase"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="col-span-1 md:col-start-1 md:row-start-2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-2 py-4 md:pl-8">
            <h3 className="text-sm md:text-lg font-bold uppercase tracking-widest text-[#1a1a1a] mb-1 leading-tight">
              Portrait
              <br />
              Photography
            </h3>
            <p className="text-gray-500 text-xs md:text-sm font-light">
              Short description here
            </p>
          </div>

          <div className="col-span-2 md:col-span-1 md:col-start-2 md:row-start-2 flex justify-center p-0 md:transform md:scale-[1.15] md:z-20">
            <div className="w-full aspect-square md:aspect-4/3 bg-gray-200 overflow-hidden shadow-lg mx-4 md:mx-0 relative">
              <Image
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800"
                alt="Mountains"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>

          {/* ROW 3 */}
          <div className="col-span-1 md:col-start-2 md:row-start-3 flex flex-col justify-center items-center text-center px-2 py-8 md:py-4">
            <h3 className="text-sm md:text-lg font-bold uppercase tracking-widest text-[#1a1a1a] mb-1 leading-tight">
              Event
              <br />
              Photography
            </h3>
            <p className="text-gray-500 text-xs md:text-sm font-light">
              Short description here
            </p>
          </div>

          <div className="col-span-1 md:col-start-3 md:row-start-3 flex justify-center p-4">
            <div className="w-full aspect-4/3 bg-gray-200 overflow-hidden shadow-sm mt-4 md:mt-0 relative">
              <Image
                src="https://images.unsplash.com/photo-1627582522502-d922a901fd5a?auto=format&fit=crop&q=80&w=800"
                alt="Rings"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
