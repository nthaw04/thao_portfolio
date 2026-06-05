"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutPhotoPlaceholder from "../../assets/about/about-photo-placeholder.jpeg";
import diamondSparkle from "../../assets/elements/diamond-sparkle.svg";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animation chữ "About Me"
      gsap.fromTo(
        ".about-title-1",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".trigger-1",
            start: "top 80%",
          },
        },
      );

      // Animation chữ "Education"
      gsap.fromTo(
        ".about-title-2",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".trigger-2",
            start: "top 85%",
          },
        },
      );

      // Fade in text block
      gsap.fromTo(
        ".about-fade-in",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );

      // Fade in Image
      gsap.fromTo(
        ".about-img",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#0e0e0e] text-[#1b1b1b]">
      <div className="pointer-events-none absolute left-10 right-10 top-10 h-px bg-[#fffff1]/60" />
      <div className="pointer-events-none absolute right-10 top-2 h-[calc(100%-80px)] w-px translate-x-1/2 bg-[#fffff1]/60 md:left-[58%] md:right-auto md:-translate-x-1/2" />
      <div className="pointer-events-none absolute right-10 top-7 translate-x-1/2 md:left-[58%] md:right-auto md:-translate-x-1/2">
        <Image src={diamondSparkle} alt="" width={26} height={26} />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-10 pt-20 pb-24 md:grid-cols-12">
        <div className="space-y-8 pr-6 md:col-span-7 mt-8">
          <div className="trigger-1 overflow-hidden">
            <h1
              className="about-title-1 flex flex-wrap text-6xl leading-tight text-[#d6300c] sm:text-7xl md:text-8xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="inline-block">
                <span
                  className="italic font-light"
                  style={{ fontFamily: '"Noto Serif Display", serif' }}
                >
                  A
                </span>
                bout
              </span>
              <span className="inline-block w-4" aria-hidden="true" />
              <span className="inline-block">
                <span
                  className="italic font-light"
                  style={{ fontFamily: '"Noto Serif Display", serif' }}
                >
                  M
                </span>
                e
              </span>
            </h1>

            <h2
              className="about-fade-in text-lg font-light uppercase text-[#fffff1] tracking-wider"
              style={{ fontFamily: "var(--font-season-sans)" }}
            >
              UX/UI Designer
            </h2>
          </div>
          <p className="about-fade-in max-w-2xl text-lg leading-7 text-[#fffff1]">
            With a dual background in Software Engineering and UX/UI Design, I
            combine my design strengths with a deep understanding of frontend
            constraints and implementation. This allows me to deliver
            user-centered, technically feasible interfaces. I meticulously
            validate requirements and collaborate effectively with developers,
            ensuring a seamless, optimized workflow from prototype to
            production.
          </p>

          <div className="trigger-2">
            <div className="overflow-hidden">
              <h1
                className="about-title-2 flex text-6xl leading-tight text-[#d6300c] sm:text-7xl md:text-8xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="inline-block">
                  <span
                    className="italic font-light"
                    style={{ fontFamily: '"Noto Serif Display", serif' }}
                  >
                    E
                  </span>
                  ducation
                </span>
              </h1>
            </div>
            <div className="about-fade-in">
              <h3
                className="text-lg font-light text-[#fffff1]"
                style={{ fontFamily: "var(--font-season-sans)" }}
              >
                Bachelor of Software Engineering
              </h3>
              <div className="mt-4 flex flex-col border-l-[3px] border-[#fffff1] pl-6">
                <p className="text-lg font-light tracking-wide text-[#fffff1]">
                  FPT University
                </p>
                <p className="text-lg font-light tracking-wide text-[#fffff1]">
                  2022
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:col-span-5 md:justify-end mt-8">
          <div className="about-img w-full h-full max-w-xs lg:max-w-sm">
            <Image
              src={aboutPhotoPlaceholder}
              alt=""
              className="w-full h-full object-cover object-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
