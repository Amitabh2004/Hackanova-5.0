"use client";
import React from "react";
import Image from "next/image";
import { CLD_ASSETS } from "../utils/cloudinary";

export default function Home() {
  const videoUrl = `https://res.cloudinary.com/dnbv1ezf3/video/upload/q_auto,f_auto/bg-video2_br1xof.mp4`;

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
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

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center p-4">
        <Image
          src={CLD_ASSETS.HERO_LOGO}
          alt="HackAnnova 5.0 Hero Logo"
          width={1000}
          height={600}
          priority
          className="w-[90vw] md:w-[70vw] lg:w-[60vw] max-w-[600px] h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-4"
        />

        {/* Registration Section */}
        <div className="flex flex-col items-center gap-6 mt-8">
          <span
            style={{ fontFamily: "var(--font-boston)" }}
            className="text-white/90 text-base md:text-2xl uppercase tracking-[0.3em] animate-pulse"
          >
            Register for Free
          </span>

          {/* ✅ DEVFOLIO APPLY BUTTON - Optimized size for your design */}
          <div className="flex flex-col items-center gap-4">
            {/* Button wrapper for better visual integration */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-2 border border-white/10 shadow-2xl">
              <div
                className="apply-button"
                data-hackathon-slug="hackanova-5-0"
                data-button-theme="light"
                style={{ height: "44px", width: "312px" }}
              ></div>
            </div>

            {/* ✅ DEVFOLIO LOGO - Visible with exact ALT tag for verification */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/5">
              <Image
                src="/devfolio.png"
                alt="DEVFOLIO LOGO"
                width={180}
                height={60}
                className="h-10 md:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
