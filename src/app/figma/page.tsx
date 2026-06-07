"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import folderIcon1 from "../../assets/elements/folder.svg";
import folderIcon2 from "../../assets/elements/folder_2.svg";
import folderIcon3 from "../../assets/elements/folder_3.svg";

// Import all 17 case study images
import Tho1 from "../../assets/thooi/Tho1.png";
import Tho2 from "../../assets/thooi/Tho2.png";
import Tho3 from "../../assets/thooi/Tho3.png";
import Tho4 from "../../assets/thooi/Tho4.png";
import Tho5 from "../../assets/thooi/Tho5.png";
import Tho6 from "../../assets/thooi/Tho6.png";
import Tho7 from "../../assets/thooi/Tho7.png";
import Tho8 from "../../assets/thooi/Tho8.png";
import Tho9 from "../../assets/thooi/Tho9.png";
import Tho10 from "../../assets/thooi/Tho10.png";
import Tho11 from "../../assets/thooi/Tho11.png";
import Tho12 from "../../assets/thooi/Tho12.png";
import Tho13 from "../../assets/thooi/Tho13.png";
import Tho14 from "../../assets/thooi/Tho14.png";
import Tho15 from "../../assets/thooi/Tho15.png";
import Tho16 from "../../assets/thooi/Tho16.png";
import Tho17 from "../../assets/thooi/Tho17.png";

const folders = [
  { id: 1, title: "(01) THOOI", icon: folderIcon1 },
  { id: 2, title: "(02) PROJECT 2", icon: folderIcon2 },
  { id: 3, title: "(03) PROJECT 3", icon: folderIcon3 },
  { id: 4, title: "(04) PROJECT 4", icon: folderIcon1 }, // Fallback to folderIcon1
];

const thooiImages = [
  Tho1, Tho2, Tho3, Tho4, Tho5, Tho6, Tho7, Tho8, Tho9, Tho10,
  Tho11, Tho12, Tho13, Tho14, Tho15, Tho16, Tho17
];

export default function FigmaPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);

  useEffect(() => {
    if (selectedFolderId !== null) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".details-container",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      }, containerRef);
      return () => ctx.revert();
    }

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

        // Add a small bit of randomness for position so they look natural but organized
        const randomX = base.x + (Math.random() * 20 - 10);
        const randomY = base.y + (Math.random() * 20 - 10);

        // Folders 1 (index 0) and 3 (index 2) tilt left (-10 deg), folders 2 and 4 tilt right (10 deg)
        const rotation = (i === 0 || i === 2) ? -10 : 10;

        gsap.to(item, {
          x: randomX,
          y: randomY,
          scale: 1.2, // same size, scaled up a bit
          opacity: 1,
          rotation: rotation,
          duration: 1.5,
          ease: "back.out(1.2)",
          delay: i * 0.15, // stagger effect
        });
      });

      gsap.fromTo(
        ".header-container",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [selectedFolderId]);

  const handleFolderClick = (id: number) => {
    const tl = gsap.timeline({
      onComplete: () => {
        setSelectedFolderId(id);
      },
    });

    tl.to(".folder-item", {
      scale: 0,
      opacity: 0,
      rotation: 0,
      duration: 0.5,
      ease: "power2.inOut",
      stagger: 0.05,
    }, 0)
    .to(".header-container", {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.out",
    }, 0);
  };

  const handleBackToFolders = () => {
    gsap.to(".details-container", {
      opacity: 0,
      y: 30,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setSelectedFolderId(null);
      },
    });
  };

  return (
    <main
      className={`min-h-screen bg-[#151515] relative text-white ${
        selectedFolderId === null ? "overflow-hidden" : "overflow-y-auto"
      }`}
      ref={containerRef}
    >
      {/* Background layer if needed */}
      <div
        className="fixed inset-0 z-0 mix-blend-multiply pointer-events-none opacity-20"
        style={{
          backgroundImage: "url('/images/backgrounds/figma_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {selectedFolderId === null ? (
        <>
          <div className="header-container absolute top-8 left-8 right-8 z-50 grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-0 pointer-events-none">
            <div className="justify-self-center md:justify-self-start pointer-events-auto">
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

            <div className="text-center pointer-events-none">
              <h1
                className="text-4xl md:text-5xl font-serif text-[#e23614] leading-none"
                style={{ fontFamily: '"Noto Serif Display", serif' }}
              >
                <span className="italic">projects</span> on Figma.
              </h1>
              <p className="text-gray-400 font-light text-xs md:text-sm tracking-wider uppercase mt-2">
                Select a folder to view details
              </p>
            </div>

            <div className="hidden md:block pointer-events-none" />
          </div>

          {/* Draggable/Interactive Area */}
          <div className="absolute inset-0 w-full h-full z-10 flex items-center justify-center pointer-events-none">
            {folders.map((folder) => (
              <div
                key={folder.id}
                onClick={() => handleFolderClick(folder.id)}
                className="folder-item absolute flex flex-col items-center justify-center cursor-pointer group pointer-events-auto"
              >
                <div className="w-40 h-40 md:w-48 md:h-48 relative group-hover:-translate-y-2 transition-transform duration-300">
                  <Image
                    src={folder.icon}
                    alt={folder.title}
                    fill
                    className="object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="details-container w-full z-50 relative flex flex-col items-center">
          {selectedFolderId === 1 ? (
            <div className="w-full flex flex-col items-center">
              {/* Back button overlay at the top-left of the first image */}
              <div className="absolute top-8 left-8 md:left-12 z-50 pointer-events-auto">
                <button
                  onClick={handleBackToFolders}
                  className="text-white hover:text-gray-300 transition-colors uppercase text-sm tracking-widest flex items-center gap-2 cursor-pointer border-none bg-transparent p-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
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
                  <span>Back to Folders</span>
                </button>
              </div>

              {/* Render all 17 images vertically */}
              {thooiImages.map((img, index) => (
                <div key={index} className="w-full relative bg-[#151515]">
                  <Image
                    src={img}
                    alt={`Tho Detail ${index + 1}`}
                    className="w-full h-auto object-contain"
                    priority={index < 2} // Eager load the first 2 images
                  />
                  {/* Embed Vimeo video right after Tho7 (index 6, between Tho7 and Tho8) */}
                  {index === 6 && (
                    <div className="w-full relative aspect-video bg-[#151515]">
                      <iframe
                        src="https://player.vimeo.com/video/1196414490?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Untitled"
                      />
                    </div>
                  )}
                  {/* Embed Vimeo video right after Tho10 (index 9, between Tho10 and Tho11) */}
                  {index === 9 && (
                    <div className="w-full relative aspect-video bg-[#151515]">
                      <iframe
                        src="https://player.vimeo.com/video/1196920557?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Done"
                      />
                    </div>
                  )}
                </div>
              ))}

              {/* Helper Back to Folders Button at the bottom */}
              <div className="py-16 w-full flex justify-center bg-[#151515] border-t border-neutral-900">
                <button
                  onClick={handleBackToFolders}
                  className="text-white hover:text-gray-300 transition-colors uppercase text-sm tracking-widest flex items-center gap-2 cursor-pointer border border-neutral-700 bg-neutral-800/40 hover:bg-neutral-800/80 px-8 py-3 rounded-full"
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
                  <span>Back to Folders</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-6xl px-6 pt-12 flex flex-col items-center gap-12">
              <div className="w-full flex justify-start">
                <button
                  onClick={handleBackToFolders}
                  className="text-white hover:text-gray-300 transition-colors uppercase text-sm tracking-widest flex items-center gap-2 cursor-pointer border-none bg-transparent p-0"
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
                  <span>Back to Folders</span>
                </button>
              </div>

              <div className="w-full text-center py-20 flex flex-col items-center gap-6">
                <h2 className="text-3xl font-serif text-white">Project Details Coming Soon</h2>
                <p className="text-neutral-400 font-light max-w-md">
                  We are currently preparing the case study and design assets for this folder. Check back soon!
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
