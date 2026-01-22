"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Construction, Zap } from "lucide-react";

export default function Tracks() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!hasMounted) return <div className="min-h-screen bg-black" />;

  return (
    <main className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden px-6">
      {/* --- COSMIC BACKGROUND LAYER --- */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/cosmic-bg.jpg"
          alt="Tracks Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* --- CENTRAL TERMINAL --- */}
      <div className="relative z-10 text-center max-w-2xl">
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-cyan-500/10 rounded-full border border-cyan-500/30 animate-pulse">
            <Construction className="text-cyan-400" size={48} />
          </div>
        </div>

        <div className="space-y-6">
          <h1
            style={{ fontFamily: "var(--font-boston)" }}
            className="text-5xl md:text-8xl text-white tracking-tighter uppercase italic drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          >
            Banana Bacha <br /> Hai Abhi
          </h1>

          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="text-cyan-400 font-mono text-xl tracking-[0.5em] uppercase animate-bounce">
              CHILL
            </span>
            <div className="h-[1px] w-12 bg-white/20" />
          </div>

          <p className="text-white/40 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] leading-relaxed max-w-md mx-auto">
            The neural link for domain specifications is currently under
            construction. Estimated time of arrival: T-Minus 24 Hours.
          </p>
        </div>

        {/* Decorative Grid */}
        <div className="mt-16 flex justify-center gap-2 opacity-30">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-8 h-1 bg-cyan-500 rounded-full" />
          ))}
        </div>
      </div>

      {/* Background HUD Detail */}
      <div className="fixed bottom-10 right-10 pointer-events-none opacity-20">
        <div className="flex items-center gap-2 text-white font-mono text-[8px] tracking-widest uppercase">
          <Zap size={10} className="text-cyan-400" /> System_Status:
          Pending_Upload
        </div>
      </div>
    </main>
  );
}
