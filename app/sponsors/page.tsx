"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// --- Sub-component for the "Word Juggle" Scramble Effect ---
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

// --- INCREASED STAR DENSITY (150 STARS) ---
// Defining outside prevents cascading render and "impure function" errors.
const STATIC_STARS = Array.from({ length: 150 }).map(() => ({
  top: Math.random() * 100,
  left: Math.random() * 100,
  // Varying sizes for depth (0.5px to 3.5px)
  size: 0.5 + Math.random() * 3,
  duration: 2 + Math.random() * 6,
  delay: Math.random() * 10,
  // Adding a "glow" variation
  glow: Math.random() > 0.8 ? "0 0 15px #00f3ff" : "0 0 8px white",
}));

export default function Sponsors() {
  const [hasMounted, setHasMounted] = useState(false);
  const sponsorLogos = Array.from(
    { length: 8 },
    (_, i) => `/sponsor/img${i + 1}.png`,
  );

  useEffect(() => {
    const timer = setTimeout(() => setHasMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!hasMounted) return <div className="min-h-screen bg-black" />;

  return (
    <main className="relative w-full min-h-screen bg-black flex flex-col items-center pt-32 pb-20 overflow-hidden">
      {/* --- ENHANCED GALAXY BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black" />

        {/* Subtle Radial Gradient to give the center some "nebula" depth */}
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
          <ScrambleText text="OUR PARTNERS" />
        </h1>

        {/* --- SPONSOR GRID: Locked to 2 columns --- */}
        <div className="grid grid-cols-2 gap-6 md:gap-16 w-full max-w-4xl">
          {sponsorLogos.map((path, i) => (
            <div
              key={i}
              className="group relative aspect-video bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center md:p-0 transition-all duration-500 hover:border-neon-cyan/50 hover:bg-white/10 rounded-sm"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={path}
                  alt={`Sponsor ${i + 1}`}
                  fill
                  className="object-cover filter brightness-90 group-hover:brightness-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
