"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import heroBg from "../../assets/backgrounds/hero/Black and White Minimalist Aesthetic Photography Collage Portfolio Presentation.png";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation cho từng chữ cái của "PORTfolio"
      gsap.fromTo(
        ".hero-letter",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.08,
          ease: "power4.out",
          delay: 0.2,
        },
      );

      // Animation mờ dần cho các thành phần khác
      gsap.fromTo(
        ".hero-fade-in",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          delay: 1,
        },
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup khi unmount
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen text-[#1c1c1c]">
      <div className="absolute inset-0">
        <Image src={heroBg} alt="" fill className="object-cover" priority />
      </div>
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 md:px-10">
        <div
          className="hero-frame flex min-h-[78vh] flex-1 flex-col px-6 py-6 md:px-12 md:py-10"
          style={{ fontFamily: "var(--font-season-sans)" }}
        >
          <nav className="hero-fade-in flex items-center justify-between text-[0.65rem] font-medium uppercase tracking-[0.32em]">
            <span>THAO NGUYEN</span>
            <ul className="flex items-center gap-6">
              <li>
                <a className="transition-opacity hover:opacity-70" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a
                  className="transition-opacity hover:opacity-70"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="transition-opacity hover:opacity-70"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="transition-opacity hover:opacity-70"
                  href="#resume"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  className="transition-opacity hover:opacity-70"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="hero-fade-in mt-4 h-px w-full bg-[#2c2c2c]/75" />

          <div className="flex flex-1 items-center justify-center py-20 md:py-28 overflow-hidden">
            <h1
              className="hero-title text-center text-[clamp(5.2rem,15vw,14.5rem)] leading-[0.75]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="tracking-[-0.03em] inline-block">
                {"PORT".split("").map((char, index) => (
                  <span key={index} className="hero-letter inline-block">
                    {char}
                  </span>
                ))}
              </span>
              <span
                className="-ml-2 inline-block align-baseline text-[0.9em] italic font-light tracking-[-0.01em]"
                style={{
                  fontFamily: '"Noto Serif Display", serif',
                  lineHeight: 1,
                }}
              >
                {"folio".split("").map((char, index) => (
                  <span key={index} className="hero-letter inline-block">
                    {char}
                  </span>
                ))}
              </span>
            </h1>
          </div>

          <div className="hero-fade-in h-px w-full bg-[#2c2c2c]/75" />
          <div className="hero-fade-in mt-4 flex items-center justify-between text-[0.65rem] font-medium uppercase tracking-[0.32em]">
            <span>UX/UI Designer</span>
            <span>@2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
