"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CLD_ASSETS } from "@/utils/cloudinary";

const ScrambleText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      setDisplayText(text.split("").map((char, i) => (char === " " ? " " : i < (frame / 30) * text.length ? text[i] : "!<>-_\\/[]{}—=+*^?#________"[Math.floor(Math.random() * 26)])).join(""));
      if (frame++ > 30) { setDisplayText(text); clearInterval(interval); }
    }, 40);
    return () => clearInterval(interval);
  }, [text]);
  return <span>{displayText}</span>;
};

export default function Sponsors() {
  const [hasMounted, setHasMounted] = useState(false);
  // Manual Grid: Devfolio first, then Cloudinary others
  const sponsorLogos = ["/devfolio1.png", ...CLD_ASSETS.SPONSOR_LOGOS];

  useEffect(() => { setHasMounted(true); }, []);
  if (!hasMounted) return <div className="min-h-screen bg-black" />;

  return (
    <main className="relative w-full min-h-screen bg-black flex flex-col items-center pt-32 pb-20 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center">
        <h1 style={{ fontFamily: "var(--font-boston)" }} className="text-5xl md:text-8xl text-neon-cyan text-center mb-24 tracking-tighter drop-shadow-[0_0_20px_#00f3ff]">
          <ScrambleText text="Sponsors & Partners" />
        </h1>

        <div className="grid grid-cols-2 gap-6 md:gap-16 w-full max-w-4xl">
          {sponsorLogos.map((url, i) => (
            <div key={i} className="group relative aspect-video bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-neon-cyan/50 hover:bg-white/10 rounded-sm">
              <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-110">
                <Image
                  src={url}
                  // Verification: EXACT alt tag for the first index
                  alt={i === 0 ? "DEVFOLIO LOGO" : `Sponsor Partner ${i}`}
                  fill
                  unoptimized={i === 0} 
                  className="object-contain p-4 brightness-90 group-hover:brightness-110"
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
