"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import heroBg from "../../assets/backgrounds/hero/Black and White Minimalist Aesthetic Photography Collage Portfolio Presentation.png";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <nav className="hero-fade-in relative flex items-center justify-between text-[0.65rem] font-medium uppercase tracking-[0.32em]">
            <span className="relative z-20">THAO NGUYEN</span>

            {/* Desktop Menu */}
            <ul className="hidden items-center gap-6 md:flex">
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
                  About
                </a>
              </li>
              <li>
                <a
                  className="transition-opacity hover:opacity-70"
                  href="#about"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="transition-opacity hover:opacity-70"
                  href="https://drive.google.com/file/d/16clsoRooBAj8SQXjnMtLurCuIhwbEcZk/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
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

            {/* Mobile Menu Toggle */}
            <button
              className="relative z-20 text-lg md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <Icon icon="heroicons:x-mark-solid" width="24" height="24" />
              ) : (
                <Icon icon="heroicons:bars-3-solid" width="24" height="24" />
              )}
            </button>

            {/* Mobile Menu Dropdown */}
            <div
              className={`absolute left-0 top-full z-10 flex w-full flex-col gap-6 bg-[#f8f8f8]/95 py-8 text-center shadow-sm backdrop-blur-md transition-all duration-300 md:hidden ${
                isMobileMenuOpen
                  ? "visible mt-2 translate-y-0 opacity-100"
                  : "invisible mt-2 -translate-y-4 opacity-0"
              }`}
            >
              <a
                className="block transition-opacity hover:opacity-70"
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                className="block transition-opacity hover:opacity-70"
                href="#projects"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                className="block transition-opacity hover:opacity-70"
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                className="block transition-opacity hover:opacity-70"
                href="https://drive.google.com/file/d/16clsoRooBAj8SQXjnMtLurCuIhwbEcZk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resume
              </a>
              <a
                className="block transition-opacity hover:opacity-70"
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
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
