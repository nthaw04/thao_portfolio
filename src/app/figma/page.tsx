"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useLanguage } from "../../context/LanguageContext";
import folderIcon1 from "../../assets/elements/folder.svg";
import folderIcon2 from "../../assets/elements/folder_2.svg";
import folderIcon3 from "../../assets/elements/folder_3.svg";

const folders = [
  { id: 1, title: "(01) THOOI", icon: folderIcon1 },
  { id: 2, title: "(02) MURROR", icon: folderIcon2 },
  { id: 3, title: "(03) TIKTOK", icon: folderIcon3 },
  { id: 4, title: "(01) THOOI", icon: folderIcon1 }, // Fallback to folderIcon1
];

const thooiImages = [
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812273/Tho1_s5gbzw.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812258/Tho2_eqsx3s.png", // Tho2
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812255/Tho3_coiwx8.png", // Tho3
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812270/Tho4_xv3ask.png", // Tho4
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812244/Tho5_avr8bj.png", // Tho5
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812244/Tho6_la2hmc.png", // Tho6
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812273/Tho7_z4wqzz.png", // Tho7
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812258/Tho8_mwpfve.png", // Tho8
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780813817/Tho9_kvxswe.png", // Tho9
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812251/Tho10_rvfqic.png", // Tho10
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812273/Tho11_emfhna.png", // Tho11
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780813877/Tho12_lv7rri.png", // Tho12
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812284/Tho13_oqnkm7.png", // Tho13
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812280/Tho14_ccgdky.png", // Tho14
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812317/Tho15_zwz2b0.png", // Tho15
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812305/Tho16_gyv1jz.png", // Tho16
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812296/Tho17_ojbcdj.png", // Tho17
];

const murrorImages = [
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780818846/1_iyrdob.png", // Murror1
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780818845/2_bv7ouu.png", // Murror2
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780818843/3_i7xbrn.png", // Murror3
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780818843/4_wdzhm5.png", // Murror4
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780818846/5_aebduz.png", // Murror5
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780818841/6_gr1txi.png", // Murror6
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780818858/7_b7id63.png", // Murror7
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780818845/8_fib9z9.png", // Murror8
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780818855/9_n39846.png", // Murror9
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780818842/10_ly2mow.png", // Murror10
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780818842/11_v2w2eg.png", // Murror11
];

const tiktokImages = [
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780821679/1_d4d4co.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780821428/2_s5v11g.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780820476/3_vbr7lq.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780820414/4_glvygv.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780820351/5_vmxsz0.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780822750/6_1_optimized_10000_jjhg4q.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780822750/7_optimized_10000_c43vhp.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780820224/8_apxbxi.png",
];

const thooi2Images = [
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812273/Tho2_1_placeholder.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812273/Tho2_2_placeholder.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812273/Tho2_3_placeholder.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812273/Tho2_4_placeholder.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812273/Tho2_5_placeholder.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812273/Tho2_6_placeholder.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812273/Tho2_7_placeholder.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812273/Tho2_8_placeholder.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812273/Tho2_9_placeholder.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812273/Tho2_10_placeholder.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812273/Tho2_11_placeholder.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812273/Tho2_12_placeholder.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812273/Tho2_13_placeholder.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812273/Tho2_14_placeholder.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812273/Tho2_15_placeholder.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812273/Tho2_16_placeholder.png",
  "https://res.cloudinary.com/duwlxwvhw/image/upload/v1780812273/Tho2_17_placeholder.png",
];

export default function FigmaPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const { language } = useLanguage();

  // Sync selectedFolderId from URL query parameters on initial page load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const folderParam = params.get("folder");
    if (folderParam) {
      setTimeout(() => {
        setSelectedFolderId(parseInt(folderParam));
      }, 0);
    }
  }, []);

  // Listen to browser back/forward buttons (popstate events)
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const folderParam = params.get("folder");
      const folderId = folderParam ? parseInt(folderParam) : null;
      setSelectedFolderId(folderId);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

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

      const isMobile = window.innerWidth < 768;
      // Points for 4 corners of a rectangle (Top-Left, Top-Right, Bottom-Left, Bottom-Right)
      const basePositions = isMobile
        ? [
            { x: -90, y: -130 },
            { x: 90, y: -130 },
            { x: -90, y: 130 },
            { x: 90, y: 130 },
          ]
        : [
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
          scale: isMobile ? 0.95 : 1.2, // scale down a bit on mobile
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
        // Push folder ID to URL history stack
        window.history.pushState({ folderId: id }, "", `/figma?folder=${id}`);
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
        // Push back to default figma route without query params
        window.history.pushState(null, "", "/figma");
        setSelectedFolderId(null);
      },
    });
  };

  return (
    <main
      className={`min-h-screen bg-[#151515] relative text-white figma-page-custom-cursor ${selectedFolderId === null ? "overflow-hidden" : "overflow-y-auto"
        }`}
      ref={containerRef}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .figma-page-custom-cursor,
            .figma-page-custom-cursor * {
              cursor: url("/mouse.svg?v=3") 2 6, auto !important;
            }
          `,
        }}
      />
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
                <span>{language === "vi" ? "Trở về trang chủ" : "Back to Home"}</span>
              </Link>
            </div>

            <div className="text-center pointer-events-none">
              <h1
                className="text-4xl md:text-5xl font-serif text-[#e23614] leading-none"
                style={{ fontFamily: '"Noto Serif Display", serif' }}
              >
                <span className="italic">{language === "vi" ? "dự án" : "projects"}</span> {language === "vi" ? "trên" : "on"} Figma.
              </h1>
              <p className="text-gray-400 font-light text-xs md:text-sm tracking-wider uppercase mt-2">
                {language === "vi" ? "Chọn một thư mục để xem chi tiết" : "Select a folder to view details"}
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
                <div className="w-32 h-32 md:w-48 md:h-48 relative group-hover:-translate-y-2 transition-transform duration-300">
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
                <span>{language === "vi" ? "Trở lại" : "Back to Folders"}</span>
                </button>
              </div>

              {/* Render all 17 images vertically */}
              {thooiImages.map((img, index) => (
                <div key={index} className="w-full relative bg-transparent">
                  {img && (
                    <img
                      src={img}
                      alt={`Tho Detail ${index + 1}`}
                      className="w-full h-auto block"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  )}
                  {/* Embed Vimeo video right after Tho7 (index 6, between Tho7 and Tho8) */}
                  {index === 6 && (
                    <div className="w-full relative aspect-video bg-white">
                      <iframe
                        src="https://player.vimeo.com/video/1196414490?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0"
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
                    <div className="w-full relative aspect-video bg-white">
                      <iframe
                        src="https://player.vimeo.com/video/1196920557?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0"
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
                <span>{language === "vi" ? "Trở lại" : "Back to Folders"}</span>
                </button>
              </div>
            </div>
          ) : selectedFolderId === 2 ? (
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
                <span>{language === "vi" ? "Trở lại" : "Back to Folders"}</span>
                </button>
              </div>

              {/* Render all 17 images vertically */}
              {murrorImages.map((img, index) => (
                <div key={index} className="w-full relative bg-transparent">
                  {img && (
                    <img
                      src={img}
                      alt={`Murror Detail ${index + 1}`}
                      className="w-full h-auto block"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
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
                <span>{language === "vi" ? "Trở lại" : "Back to Folders"}</span>
                </button>
              </div>
            </div>
          ) : selectedFolderId === 3 ? (
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
                <span>{language === "vi" ? "Trở lại" : "Back to Folders"}</span>
                </button>
              </div>

              {/* Render all 17 images vertically */}
              {tiktokImages.map((img, index) => (
                <div key={index} className="w-full relative bg-transparent">
                  {img && (
                    <img
                      src={img}
                      alt={`Tiktok Detail ${index + 1}`}
                      className="w-full h-auto block"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
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
                <span>{language === "vi" ? "Trở lại" : "Back to Folders"}</span>
                </button>
              </div>
            </div>
          ) : selectedFolderId === 4 ? (
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
                <span>{language === "vi" ? "Trở lại" : "Back to Folders"}</span>
                </button>
              </div>

              {/* Render all 17 images vertically */}
              {thooi2Images.map((img, index) => (
                <div key={index} className="w-full relative bg-transparent">
                  {img && (
                    <img
                      src={img}
                      alt={`Tho2 Detail ${index + 1}`}
                      className="w-full h-auto block"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
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
                <span>{language === "vi" ? "Trở lại" : "Back to Folders"}</span>
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
                <span>{language === "vi" ? "Trở lại" : "Back to Folders"}</span>
                </button>
              </div>

              <div className="w-full text-center py-20 flex flex-col items-center gap-6">
                <h2 className="text-3xl font-serif text-white">
                  {language === "vi" ? "Chi tiết dự án sắp ra mắt" : "Project Details Coming Soon"}
                </h2>
                <p className="text-neutral-400 font-light max-w-md">
                  {language === "vi" ? "Chúng tôi đang chuẩn bị case study và tài sản thiết kế cho thư mục này. Hãy quay lại sau nhé!" : "We are currently preparing the case study and design assets for this folder. Check back soon!"}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
