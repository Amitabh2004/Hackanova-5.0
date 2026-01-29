"use client";
import React from "react";
import Image from "next/image";
import { CLD_ASSETS } from "../utils/cloudinary";

export default function Home() {
  const videoUrl = `https://res.cloudinary.com/dnbv1ezf3/video/upload/q_auto,f_auto/bg-video2_br1xof.mp4`;

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
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

      <div className="relative z-10 flex flex-col items-center justify-center p-4">
        <Image
          src={CLD_ASSETS.HERO_LOGO}
          alt="HackAnnova 5.0 Hero Logo"
          width={1000}
          height={600}
          priority
          className="w-[90vw] md:w-[70vw] lg:w-[60vw] max-w-[600px] h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-4"
        />

        <div className="flex flex-col items-center gap-4 mt-6">
          <span
            style={{ fontFamily: "var(--font-boston)" }}
            className="text-white/90 text-sm md:text-2xl uppercase tracking-[0.2em] animate-pulse"
          >
            Register for Free
          </span>

          {/* Official Devfolio Button */}
          <div
            className="apply-button"
            data-hackathon-slug="hackanova-5-0"
            data-button-theme="light"
            style={{ height: "44px", width: "312px" }}
          ></div>

          {/* Visible Logo for Crawler */}
          <div className="mt-2 bg-white/10 p-2 rounded-lg">
            <img
              src="/devfolio1.png"
              alt="DEVFOLIO LOGO"
              width="150"
              height="80"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
