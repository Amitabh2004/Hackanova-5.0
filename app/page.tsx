"use client";
import React from "react";
import Image from "next/image";
import { CLD_ASSETS } from "../utils/cloudinary";

export default function Home() {
  const videoUrl = `https://res.cloudinary.com/dnbv1ezf3/video/upload/q_auto,f_auto/bg-video2_br1xof.mp4`;

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
          src="/logo-date5.png"
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

          {/* --- CUSTOM APPLY BUTTON --- */}
          {/* Replace 'YOUR_LINK_HERE' with your actual registration link */}
          <a
            href="https://hackanova-5-0.devfolio.co/overview?slug=hackanova-5-0.devfolio.co"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Image
              src="/apply-btn.png"
              alt="Apply Button"
              width={312}
              height={44}
              className="w-64 md:w-80 h-auto object-contain mix-blend-screen drop-shadow-[0_0_15px_rgba(0,243,255,0.4)]"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
