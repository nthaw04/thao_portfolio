"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ProjectsCoverSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cover-text",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full min-h-[60vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#AF1611]"
    >
      {/* Halftone Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "radial-gradient(circle, #000 30%, transparent 31%)",
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start px-4">
        <div className="-mb-8 pl-12 md:-mb-16 md:pl-40">
          <span
            className="cover-text text-4xl md:text-8xl text-white tracking-normal lowercase inline-block"
            style={{ fontFamily: '"Noto Serif Display", serif' }}
          >
            my
          </span>
        </div>
        <h2
          className="cover-text text-[6rem] md:text-[14rem] text-white tracking-tighter lowercase italic"
          style={{ fontFamily: '"Noto Serif Display", serif', lineHeight: "1" }}
        >
          projects
        </h2>
      </div>
    </section>
  );
}
