import { useEffect } from "react";

const NAV_LINKS = ["Features", "Plans", "Security", "About"];

const HERO_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260714_113715_c7e0daa0-8bdd-4486-a2da-040901f8f0ea.mp4";

function AxonLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 256 256"
      fill="#1B133C"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z" />
      <path d="M 256 128 L 128 128 L 0 0 L 128 0 Z" />
    </svg>
  );
}

export function AxonPage() {
  useEffect(() => {
    document.title = "Axon — Digital Workers for Mundane Workflows";
  }, []);

  return (
    <div className="font-['Inter'] text-[#1B133C]">
      <section className="relative h-screen w-full overflow-hidden flex flex-col">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 w-full h-[130%] object-cover object-top"
          src={HERO_VIDEO_URL}
        />

        <nav className="relative z-10 flex justify-center pt-4 md:pt-6 px-4">
          <div className="flex items-center gap-6 md:gap-10 bg-white/70 backdrop-blur-md rounded-xl px-4 md:px-6 py-3 shadow-sm">
            <AxonLogo />
            <div className="hidden sm:flex items-center gap-6 md:gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm font-medium text-[#1B133C]/80 hover:text-[#1B133C] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center text-center px-4 mt-8 md:mt-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-[#1B133C]/10 bg-white/70 backdrop-blur-sm px-4 py-2 text-sm font-medium">
            <span className="flex items-center justify-center bg-orange-500 rounded w-5 h-5 text-white font-bold text-xs">
              Y
            </span>
            <span>Funded by Y Combinator</span>
          </div>

          <h1 className="font-['Instrument_Serif'] text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-[#1B133C] max-w-4xl">
            Deploy digital workers
            <br />
            for mundane workflows
          </h1>

          <p className="mt-5 sm:mt-6 max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed text-[#1B133C]/70">
            Eliminate your tedious browser work and 10x your team's capacity.
            Put intelligent agents on every routine process so you grow
            faster and deliver more for clients — effortlessly.
          </p>

          <button
            type="button"
            className="mt-7 sm:mt-8 rounded-xl bg-[#FEFEFE] px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold text-[#1B133C] shadow-[0px_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0px_6px_16px_rgba(0,0,0,0.2)] transition-all duration-300"
          >
            Get Early Access
          </button>
        </div>
      </section>
    </div>
  );
}
