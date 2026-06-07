"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experiences = [
  {
    num: "01",
    title: "UI/UX Designer & Frontend Developer",
    desc: "01/2025 - 04/2025",
    location: "FPT Software Academy | Ho Chi Minh City, Vietnam",
    project: "Claim Request System | Team Size: 5",
    details: [
      <span key="1">
        <strong className="text-white font-semibold">User Problem:</strong>{" "}
        Inefficient, paper-heavy claim submission and approval processes causing
        administrative delays and fragmented workflows within the organization.
      </span>,
      <span key="2">
        <strong className="text-white font-semibold">Solution:</strong>{" "}
        Formulated clear multi-role approval paths via wireframes and developed
        a centralized web application using ReactJS and TypeScript.
      </span>,
      <span key="3">
        <strong className="text-white font-semibold">Result:</strong> Eliminated
        fragmented paperwork, ensured strict type safety with reusable
        components, and significantly reduced overall approval turnaround time.
      </span>,
    ],
  },
  {
    num: "02",
    title: "UI/UX Designer",
    desc: "06/2025 - 01/2026",
    location: "MindX Technology School | Ho Chi Minh City, Vietnam",
    project: "Murror AI Companion App Revamp | UI/UX Case Study | Team Size: 5",
    details: [
      <span key="1">
        <strong className="text-white font-semibold">
          Target User & Pain Point:
        </strong>{" "}
        Gen Z and Millennials (ages 18-32) experiencing sudden stress or panic
        attacks need immediate mental health support, but manually opening and
        navigating an app during an emotional crisis causes cognitive overload.
      </span>,
      <span key="2">
        <strong className="text-white font-semibold">
          Design Decisions & Solution:
        </strong>{" "}
        Architected a watchOS &quot;Crisis Support&quot; ecosystem leveraging
        Apple HealthKit (Heart Rate & HRV) for passive anomaly detection. Mapped
        a frictionless 4-step intervention flow (Detect - Analyze - Gentle Alert
        - Guide), utilizing high-contrast UI and haptic vibrations to ensure
        extreme usability without requiring visual focus.
      </span>,
      <span key="3">
        <strong className="text-white font-semibold">Final Impact:</strong>{" "}
        Delivered an end-to-end, empathetic emergency journey that successfully
        minimized user cognitive load, transforming complex biometric data into
        safe, automated psychological interventions.
      </span>,
    ],
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Divider line animation (scale width from 0 to 1)
      gsap.fromTo(
        ".skills-divider",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-divider",
            start: "top 90%",
          },
        }
      );

      // Title animation (fade in and move up)
      gsap.fromTo(
        ".skills-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-title",
            start: "top 90%",
          },
        }
      );

      // Rows and badges animation
      const rows = gsap.utils.toArray<HTMLElement>(".skills-row");
      rows.forEach((row) => {
        const category = row.querySelector(".skills-category");
        const badges = row.querySelectorAll(".skills-badge");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 95%",
          },
        });

        if (category) {
          tl.fromTo(
            category,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
          );
        }

        if (badges.length > 0) {
          tl.fromTo(
            badges,
            { opacity: 0, scale: 0.8, y: 10 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: "back.out(1.2)",
            },
            "-=0.4"
          );
        }
      });

      // Experience Title & Dividers
      gsap.fromTo(
        ".exp-divider",
        { scaleX: 0, transformOrigin: "center center" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".exp-title",
            start: "top 90%",
          },
        }
      );

      gsap.fromTo(
        ".exp-title",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-title",
            start: "top 90%",
          },
        }
      );

      // Stagger circles when exp-title enters viewport
      gsap.fromTo(
        ".exp-circle",
        { opacity: 0, y: 40, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".exp-title",
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
      className="relative w-full bg-[#0e0e0e] px-6 pt-4 pb-12 md:px-12 text-[#fffff1] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* SKILLS & TOOLS section */}
        <div className="mb-24 mt-10">
          <div className="skills-divider mb-16 h-px w-full bg-white/20"></div>

          <h2
            className="skills-title mb-12 flex flex-wrap justify-center text-center text-5xl leading-tight text-[#d6300c] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="inline-block">
              <span
                className="italic font-light"
                style={{ fontFamily: '"Noto Serif Display", serif' }}
              >
                S
              </span>
              kills &amp; Tools
            </span>
          </h2>

          <div className="mx-auto max-w-4xl space-y-8">
            <div className="skills-row flex flex-col md:flex-row md:items-start gap-4">
              <h3 className="skills-category w-36 shrink-0 text-xl font-semibold tracking-wide text-[#fffff1] md:pt-2">
                UX Skills:
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "User Flow",
                  "Usability Testing",
                  "Interaction Design",
                  "Wireframing",
                  "Problem Solving",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="skills-badge rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors px-4 py-2 text-sm font-light tracking-wide text-[#fffff1]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills-row flex flex-col md:flex-row md:items-start gap-4">
              <h3 className="skills-category w-36 shrink-0 text-xl font-semibold tracking-wide text-[#fffff1] md:pt-2">
                UI Skills:
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "High-Fidelity Design",
                  "Prototyping",
                  "Design Systems",
                  "Responsive Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="skills-badge rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors px-4 py-2 text-sm font-light tracking-wide text-[#fffff1]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills-row flex flex-col md:flex-row md:items-start gap-4">
              <h3 className="skills-category w-36 shrink-0 text-xl font-semibold tracking-wide text-[#fffff1] md:pt-2">
                Frontend:
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Design-to-Code Translation",
                  "Responsive Web Development",
                  "UI Component Building",
                  "ReactJS",
                  "Next.js",
                  "TypeScript",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="skills-badge rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors px-4 py-2 text-sm font-light tracking-wide text-[#fffff1]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills-row flex flex-col md:flex-row md:items-start gap-4">
              <h3 className="skills-category w-36 shrink-0 text-xl font-semibold tracking-wide text-[#fffff1] md:pt-2">
                Tools:
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Figma", "VS Code", "Git/GitHub", "Jira"].map((skill) => (
                  <span
                    key={skill}
                    className="skills-badge rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors px-4 py-2 text-sm font-light tracking-wide text-[#fffff1]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="exp-divider mb-16 h-px w-full bg-white/20"></div>

        <h1
          className="exp-title mb-10 flex flex-wrap justify-center text-center text-6xl leading-tight text-[#d6300c] sm:text-6xl md:mb-2 md:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="inline-block">
            <span
              className="italic font-light"
              style={{ fontFamily: '"Noto Serif Display", serif' }}
            >
              M
            </span>
            y
          </span>
          <span className="inline-block w-4" aria-hidden="true" />
          <span className="inline-block">
            <span
              className="italic font-light"
              style={{ fontFamily: '"Noto Serif Display", serif' }}
            >
              E
            </span>
            xperience
          </span>
        </h1>

        {/* Desktop Layout */}
        <div className="relative mx-auto hidden md:flex items-center justify-center min-h-100 w-full max-w-6xl pb-20">
          {/* Details 2 (Left of Circle 2) */}
          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out flex items-center ${
              expandedId === 1
                ? "max-w-2xl opacity-100! mr-12"
                : "max-w-0 opacity-0 mr-0"
            }`}
          >
            <div className="w-150 shrink-0">
              <h4 className="text-3xl font-bold mb-2 text-[#d6300c]">
                {experiences[1].title}
              </h4>
              <p className="text-sm text-white/70 mb-6 font-light tracking-wide">
                <span>{experiences[1].desc}</span>
                <span className="mx-2 text-white/40">|</span>
                <span>{experiences[1].location}</span>
                {experiences[1].project && (
                  <>
                    <br />
                    <span className="mt-2 inline-block">
                      <strong className="text-white font-semibold">
                        {experiences[1].project.split(" | ")[0]}
                      </strong>{" "}
                      |{" "}
                      {experiences[1].project.split(" | ").slice(1).join(" | ")}
                    </span>
                  </>
                )}
              </p>
              <ul className="text-base text-white/90 leading-relaxed list-disc pl-5 space-y-3">
                {experiences[1].details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Circle 1 */}
          <div
            className={`exp-circle flex flex-col items-center cursor-pointer z-10 shrink-0 transition-all duration-700 ${
              expandedId === 1
                ? "w-0 opacity-0! scale-50! pointer-events-none absolute"
                : "w-52 opacity-100 scale-100 relative"
            }`}
            onClick={() => setExpandedId(expandedId === 0 ? null : 0)}
          >
            <div className="flex w-52 h-52 flex-col items-center justify-center rounded-full border border-white/20 bg-[#000000] shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-105 group">
              <span
                className="text-5xl text-[#d6300c] mb-2 group-hover:scale-110 transition-transform duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {experiences[0].num}
              </span>
              <h3 className="text-center text-lg font-bold tracking-wide text-white">
                {experiences[0].title}
              </h3>
              <p className="text-center text-sm font-light text-white/50 mt-1">
                {experiences[0].desc}
              </p>
            </div>
          </div>

          {/* Line between */}
          <div
            className={`h-px bg-white/30 transition-all duration-700 shrink-0 relative ${
              expandedId === null
                ? "w-32 lg:w-48 opacity-100 mx-4"
                : "w-0 opacity-0 mx-0"
            }`}
          ></div>

          {/* Circle 2 */}
          <div
            className={`exp-circle flex flex-col items-center cursor-pointer z-10 shrink-0 transition-all duration-700 ${
              expandedId === 0
                ? "w-0 opacity-0! scale-50! pointer-events-none absolute"
                : "w-52 opacity-100 scale-100 relative"
            }`}
            onClick={() => setExpandedId(expandedId === 1 ? null : 1)}
          >
            <div className="flex w-52 h-52 flex-col items-center justify-center rounded-full border border-white/20 bg-[#000000] shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-105 group">
              <span
                className="text-5xl text-[#d6300c] mb-2 group-hover:scale-110 transition-transform duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {experiences[1].num}
              </span>
              <h3 className="text-center text-lg font-bold tracking-wide text-white">
                {experiences[1].title}
              </h3>
              <p className="text-center text-sm font-light text-white/50 mt-1">
                {experiences[1].desc}
              </p>
            </div>
          </div>

          {/* Details 1 (Right of Circle 1) */}
          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out flex items-center ${
              expandedId === 0
                ? "max-w-2xl opacity-100! ml-12"
                : "max-w-0 opacity-0 ml-0"
            }`}
          >
            <div className="w-150 shrink-0">
              <h4 className="text-3xl font-bold mb-2 text-[#d6300c]">
                {experiences[0].title}
              </h4>
              <p className="text-sm text-white/70 mb-6 font-light tracking-wide">
                <span>{experiences[0].desc}</span>
                <span className="mx-2 text-white/40">|</span>
                <span>{experiences[0].location}</span>
                {experiences[0].project && (
                  <>
                    <br />
                    <span className="mt-2 inline-block">
                      <strong className="text-white font-semibold">
                        {experiences[0].project.split(" | ")[0]}
                      </strong>{" "}
                      |{" "}
                      {experiences[0].project.split(" | ").slice(1).join(" | ")}
                    </span>
                  </>
                )}
              </p>
              <ul className="text-base text-white/90 leading-relaxed list-disc pl-5 space-y-3">
                {experiences[0].details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center gap-12">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === index;

            return (
              <div
                key={index}
                className="exp-circle flex flex-col items-center w-full max-w-70 cursor-pointer"
                onClick={() => setExpandedId(isExpanded ? null : index)}
              >
                <div className="flex h-64 w-64 flex-col shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#0a0a0a]">
                  <span className="text-5xl text-[#d6300c] mb-2 font-light">
                    {exp.num}
                  </span>
                  <h3 className="text-center text-xl font-semibold tracking-wide px-4">
                    {exp.title}
                  </h3>
                  <p className="text-center text-sm text-white/70 mt-1">
                    {exp.desc}
                  </p>
                </div>

                {/* Expanded Details Mobile */}
                <div
                  className={`overflow-hidden transition-all duration-500 w-full ${
                    isExpanded
                      ? "max-h-120 opacity-100! mt-6"
                      : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <div className="text-sm font-light leading-relaxed text-white/80 pb-5 text-left">
                    <p className="mb-4 text-white/60 italic">
                      {exp.location}
                      {exp.project && (
                        <>
                          <br />
                          <span className="not-italic mt-2 inline-block">
                            <strong className="text-white font-semibold">
                              {exp.project.split(" | ")[0]}
                            </strong>{" "}
                            | {exp.project.split(" | ").slice(1).join(" | ")}
                          </span>
                        </>
                      )}
                    </p>
                    <ul className="list-disc pl-5 space-y-3">
                      {exp.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Line */}
        <div className="mx-auto mt-16 flex w-full max-w-3xl items-center relative opacity-60 md:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 153 153"
            width={16}
            height={16}
            className="absolute left-1/2 -translate-x-1/2 bg-[#0e0e0e] px-1 box-content"
          >
            <path
              fill="#fffff1"
              d="M 76.5 152.007812 C 76.5 101.328125 51.175781 76.003906 0.496094 76.003906 C 51.175781 76.003906 76.5 50.679688 76.5 0 C 76.5 50.679688 101.824219 76.003906 152.503906 76.003906 C 101.824219 76.003906 76.5 101.328125 76.5 152.007812 Z M 76.5 152.007812 "
            />
          </svg>
          <div className="exp-divider w-full h-px bg-white/50"></div>
        </div>
      </div>
    </section>
  );
}
