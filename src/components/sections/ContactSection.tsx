"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-item",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        },
      );
      gsap.fromTo(
        ".contact-img",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full h-[80vh] min-h-[600px] text-white flex bg-[#9C1C17] overflow-hidden"
    >
      {/* Black Background Split */}
      <div className="absolute bottom-0 left-0 top-0 z-0 w-[85%] bg-[#111111] md:w-[60%]" />

      {/* Main Content wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {/* Content */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-between px-8 md:px-20 lg:px-28">
          {/* Left Text */}
          <div className="w-full md:w-[35%] flex flex-col justify-center text-white mb-10 md:mb-0 pt-10 md:pt-0">
            <h2
              className="contact-item text-7xl md:text-8xl lg:text-[8rem] text-[#D82A24] mb-8 md:mb-12"
              style={{
                fontFamily: '"Noto Serif Display", serif',
                lineHeight: "1",
              }}
            >
              <span className="italic font-light">C</span>
              <span className="tracking-tight lowercase">ontact</span>
            </h2>

            <p
              className="contact-item text-white/80 mb-10 md:mb-16 text-lg"
              style={{ fontFamily: "var(--font-season-sans)" }}
            >
              Thank you for viewing this portfolio!
            </p>

            <div
              className="contact-item border-l-[1.5px] border-white pl-6 space-y-6 text-white/90 font-light text-base tracking-wide"
              style={{ fontFamily: "var(--font-season-sans)" }}
            >
              <p>(+84) 964 648 530</p>
              <p>thaonguyenngoc23122004@gmail.com</p>
              <p>linkedin.com/in/ngsthaw</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="contact-img w-full md:w-[60%] h-[50vh] md:h-[75%] lg:h-[80%] relative shadow-2xl">
            <Image
              src="/images/contact/contact.jpeg"
              alt="UX/UI Designer working"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-[center_50%] md:object-[center_40%]"
            />
          </div>
        </div>

        {/* Footer Info */}
        <div
          className="w-full px-8 md:px-20 lg:px-28 pb-8 flex justify-between items-center text-white/70 text-base"
          style={{ fontFamily: "var(--font-season-sans)" }}
        >
          <span>UX/UI Designer</span>
          <span>2026</span>
        </div>
      </div>
    </section>
  );
}
