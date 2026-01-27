"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CLD_ASSETS } from "@/utils/cloudinary";

const ScrambleText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    let frame = 0;
    const totalFrames = 30;
    const interval = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < (frame / totalFrames) * text.length) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplayText(scrambled);
      frame++;
      if (frame > totalFrames) {
        setDisplayText(text);
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

const STATIC_STARS = Array.from({ length: 150 }).map(() => ({
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: 0.5 + Math.random() * 3,
  duration: 2 + Math.random() * 6,
  delay: Math.random() * 10,
  glow: Math.random() > 0.8 ? "0 0 15px #00f3ff" : "0 0 8px white",
}));

export default function Sponsors() {
  const [hasMounted, setHasMounted] = useState(false);
  const sponsorLogos = CLD_ASSETS.SPONSOR_LOGOS;

  useEffect(() => {
    const timer = setTimeout(() => setHasMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!hasMounted) return <div className="min-h-screen bg-black" />;

  return (
    <main className="relative w-full min-h-screen bg-black flex flex-col items-center pt-32 pb-20 overflow-hidden">
      {/* --- BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,243,255,0.05)_0%,_transparent_70%)]" />
        <div className="stars-container absolute inset-0">
          {STATIC_STARS.map((star, i) => (
            <div
              key={i}
              className="star absolute bg-white rounded-full opacity-0"
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                boxShadow: star.glow,
                animation: `twinkle ${star.duration}s infinite ${star.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center">
        <h1
          style={{ fontFamily: "var(--font-boston)" }}
          className="text-5xl md:text-8xl text-neon-cyan text-center mb-24 tracking-tighter drop-shadow-[0_0_20px_#00f3ff]"
        >
          <ScrambleText text="Past Partners" />
        </h1>

        {/* --- FULL-BLEED SPONSOR GRID --- */}
        <div className="grid grid-cols-2 gap-6 md:gap-16 w-full max-w-4xl">
          {sponsorLogos.map((url, i) => (
            <div
              key={i}
              className="group relative aspect-video bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-neon-cyan/50 hover:bg-white/10 rounded-sm"
            >
              {/* Internal neon accents - moved inside overflow-hidden to clip at corners if desired, 
                  or you can keep them outside for a 'floating' feel */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-neon-cyan z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-neon-cyan z-20 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* No padding here ensures image reaches the borders */}
              <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-110">
                <Image
                  src={url}
                  alt={`Sponsor Partner ${i + 1}`}
                  fill
                  className="object-cover brightness-90 group-hover:brightness-110 transition-all"
                  sizes="(max-width: 768px) 50vw, 400px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
