"use client";

import React from "react";

export function ProjectsCoverSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-[#AF1611]">
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
        <div className="pl-28 md:pl-40 -mb-8 md:-mb-16">
          <span
            className="text-4xl md:text-8xl text-white tracking-normal lowercase"
            style={{ fontFamily: '"Noto Serif Display", serif' }}
          >
            my
          </span>
        </div>
        <h2
          className="text-[6rem] md:text-[14rem] text-white tracking-tighter lowercase italic"
          style={{ fontFamily: '"Noto Serif Display", serif', lineHeight: "1" }}
        >
          projects
        </h2>
      </div>
    </section>
  );
}
