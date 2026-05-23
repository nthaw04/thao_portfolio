import Image from "next/image";

export function ContactSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] text-white flex bg-[#9C1C17] overflow-hidden">
      {/* Black Background Split */}
      <div className="absolute top-0 left-0 bottom-0 w-[45%] bg-[#111111] z-0" />

      {/* Main Content wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {/* Content */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-between px-8 md:px-20 lg:px-28">
          {/* Left Text */}
          <div className="w-full md:w-[35%] flex flex-col justify-center text-white mb-10 md:mb-0 pt-10 md:pt-0">
            <h2
              className="text-7xl md:text-8xl lg:text-[8rem] text-[#D82A24] mb-8 md:mb-12"
              style={{
                fontFamily: '"Noto Serif Display", serif',
                lineHeight: "1",
              }}
            >
              <span className="italic font-light">C</span>
              <span className="tracking-tight lowercase">ontact</span>
            </h2>

            <p
              className="text-white/80 mb-10 md:mb-16 text-lg"
              style={{ fontFamily: "var(--font-season-sans)" }}
            >
              Thank you for viewing this portfolio!
            </p>

            <div
              className="border-l-[1.5px] border-white pl-6 space-y-6 text-white/90 font-light text-base tracking-wide"
              style={{ fontFamily: "var(--font-season-sans)" }}
            >
              <p>(+84) 964 648 530</p>
              <p>thaonguyenngoc23122004@gmail.com</p>
              <p>linkedin.com/in/ngsthaw</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[58%] h-[50vh] md:h-[75%] lg:h-[80%] relative shadow-2xl">
            <Image
              src="/images/contact/contact.jpeg"
              alt="UX/UI Designer working"
              fill
              className="object-cover object-[center_70%]"
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
