"use client";
import Image from "next/image";
import { CLD_ASSETS } from "../utils/cloudinary"; // Import your new links

export default function Home() {
  const cloudName = "dnbv1ezf3";
  const videoPublicId = "bg-video2_br1xof";
  const videoUrl = `https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto/${videoPublicId}.mp4`;

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* --- BACKGROUND VIDEO LAYER --- */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* --- HERO CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center justify-center p-4">
        <Image
          src={CLD_ASSETS.HERO_LOGO} // Now using Cloudinary
          alt="HackAnnova 5.0 Hero Logo"
          width={1000}
          height={600}
          priority // Prioritizing the LCP element
          className="w-[90vw] md:w-[70vw] lg:w-[60vw] max-w-[600px] h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-4"
        />

        <div className="flex flex-col items-center gap-4 mt-6">
          <span
            style={{ fontFamily: "var(--font-boston)" }}
            className="text-white/90 text-sm md:text-2xl uppercase tracking-[0.2em] animate-pulse"
          >
            Register for Free
          </span>

          <a
            href="YOUR_DEVFOLIO_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center px-8 py-3 md:px-12 md:py-4 bg-white border border-neon-cyan/50 transition-all duration-300 hover:border-neon-cyan hover:shadow-[0_0_40px_rgba(0,243,255,0.4)] rounded-none"
          >
            <Image
              src={CLD_ASSETS.DEVFOLIO_LOGO} // Optimized Devfolio Logo from Cloudinary
              alt="DEVFOLIO LOGO"
              width={200}
              height={100}
              className="h-7 md:h-10 w-auto object-contain brightness-110"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
