"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { CLD_ASSETS } from "../utils/cloudinary";

export default function Home() {
  const cloudName = "dnbv1ezf3";
  const videoPublicId = "bg-video2_br1xof";
  const videoUrl = `https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto/${videoPublicId}.mp4`;

  // --- DEVFOLIO SDK INTEGRATION ---
  // This hook injects the official script needed to render the button
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
        {/* Main Event Logo */}
        <Image
          src={CLD_ASSETS.HERO_LOGO}
          alt="HackAnnova 5.0 Hero Logo"
          width={1000}
          height={600}
          priority
          className="w-[90vw] md:w-[70vw] lg:w-[60vw] max-w-[600px] h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-4"
        />

        <div className="flex flex-col items-center gap-4 mt-6">
          {/* Animated Call to Action */}
          <span
            style={{ fontFamily: "var(--font-boston)" }}
            className="text-white/90 text-sm md:text-2xl uppercase tracking-[0.2em] animate-pulse"
          >
            Register for Free
          </span>

          {/* --- DEVFOLIO LOGO (Mandatory for Verification) --- */}
          {/* The alt tag MUST be "DEVFOLIO LOGO" in all caps */}
          <div className="hidden">
             <Image
              src={CLD_ASSETS.DEVFOLIO_LOGO}
              alt="DEVFOLIO LOGO" 
              width={200}
              height={100}
            />
          </div>

          {/* --- OFFICIAL DEVFOLIO BUTTON --- */}
          {/* Ensure 'data-hackathon-slug' matches your Devfolio dashboard */}
          <div 
            className="apply-button" 
            data-hackathon-slug="hackanova-5-0" 
            data-button-theme="light"
            style={{ height: '44px', width: '312px' }}
          ></div>
          
          {/* Branding Logo for Visibility */}
          <div className="mt-2">
            <Image
              src={CLD_ASSETS.DEVFOLIO_LOGO}
              alt="DEVFOLIO LOGO"
              width={150}
              height={80}
              className="h-6 md:h-8 w-auto object-contain brightness-110"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
