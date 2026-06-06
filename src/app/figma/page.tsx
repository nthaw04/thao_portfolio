"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import folderIcon from "../../assets/elements/folder.svg";

const folders = [
  { id: 1, title: "(01) THOOI" },
  { id: 2, title: "(02) PROJECT 2" },
  { id: 3, title: "(03) PROJECT 3" },
  { id: 4, title: "(04) PROJECT 4" },
];

export default function FigmaPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".folder-item");

      // Set initial state at the center of the screen
      gsap.set(items, {
        xPercent: -50,
        yPercent: -50,
        left: "50%",
        top: "50%",
        scale: 0,
        opacity: 0,
        rotation: 0,
      });

      // Points for 4 corners of a rectangle (Top-Left, Top-Right, Bottom-Left, Bottom-Right)
      const basePositions = [
        { x: -300, y: -100 },
        { x: 300, y: -100 },
        { x: -300, y: 180 },
        { x: 300, y: 180 },
      ];

      items.forEach((item, i) => {
        const base = basePositions[i % basePositions.length];

        // Add just a tiny bit of randomness so they don't look awkwardly perfect
        const randomX = base.x + (Math.random() * 40 - 20);
        const randomY = base.y + (Math.random() * 40 - 20);

        // Random tilt (-15 to 15 degrees)
        const randomRotation = -15 + Math.random() * 30;

        gsap.to(item, {
          x: randomX,
          y: randomY,
          scale: 1 + Math.random() * 0.3, // slight random scaling for variety
          opacity: 1,
          rotation: randomRotation,
          duration: 1.5,
          ease: "back.out(1.2)",
          delay: i * 0.15, // stagger effect
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      className="min-h-screen bg-[#151515] relative overflow-hidden text-white"
      ref={containerRef}
    >
      {/* Background layer if needed */}
      <div
        className="absolute inset-0 z-0 mix-blend-multiply pointer-events-none opacity-20"
        style={{
          backgroundImage: "url('/images/backgrounds/figma_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute top-8 left-8 z-50">
        <Link
          href="/#figma"
          className="text-white hover:text-gray-300 transition-colors uppercase text-sm tracking-widest flex items-center gap-2"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="mt-8 absolute top-8 w-full text-center z-40 pointer-events-none">
        <h1
          className="text-4xl md:text-5xl font-serif text-[#e23614] mb-2"
          style={{ fontFamily: '"Noto Serif Display", serif' }}
        >
          <span className="italic">projects</span> on Figma.
        </h1>
        <p className="text-gray-400 font-light text-sm tracking-wider uppercase">
          Select a folder to view details
        </p>
      </div>

      {/* Draggable/Interactive Area */}
      <div className="absolute inset-0 w-full h-full z-10 flex items-center justify-center pointer-events-none">
        {folders.map((folder) => (
          <div
            key={folder.id}
            className="folder-item absolute flex flex-col items-center justify-center cursor-pointer group pointer-events-auto"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 relative group-hover:-translate-y-2 transition-transform duration-300">
              <Image
                src={folderIcon}
                alt={folder.title}
                fill
                className="object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
