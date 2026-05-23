import React from "react";

export function ThankYouSection() {
  return (
    <section className="relative w-full py-32 md:py-48 flex items-center justify-center bg-[#bd1e1a] overflow-hidden">
      {/* Halftone Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-15 mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle, #5a0907 35%, transparent 36%)",
          backgroundSize: "28px 28px",
          backgroundPosition: "0 0",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white select-none">
        <h2
          className="leading-[0.8] text-center font-bold tracking-tighter flex flex-col items-center"
          style={{ fontFamily: '"Noto Serif Display", serif' }}
        >
          <div className="flex items-baseline justify-center relative md:-left-4">
            <span className="text-[6rem] md:text-[12rem]">tha</span>
            <span className="text-[7rem] md:text-[14rem] font-light -ml-1 md:-ml-2">
              N
            </span>
            <span className="text-[6rem] md:text-[13rem] italic font-light -ml-3 md:-ml-6">
              k
            </span>
          </div>
          <div className="italic font-light text-[7rem] md:text-[14rem] -mt-6 md:-mt-12 ml-24 md:ml-40">
            you
          </div>
        </h2>
      </div>
    </section>
  );
}
