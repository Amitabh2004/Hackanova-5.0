"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// --- Binary Glitch Effect ---
const BinaryGlitch = ({ amount }: { amount: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayValue, setDisplayValue] = useState(amount);

  useEffect(() => {
    // If not hovering, we do not start the interval.
    if (!isHovered) return;

    const interval = setInterval(() => {
      const binary = amount
        .split("")
        .map(() => Math.round(Math.random()))
        .join("");
      setDisplayValue(binary);
    }, 80);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setDisplayValue(amount);
    }, 600);

    // CLEANUP: Reset state here instead of synchronously in the effect body
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      setDisplayValue(amount);
    };
  }, [isHovered, amount]);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-crosshair transition-all duration-300 group-hover:text-cyan-400"
    >
      ₹{displayValue}
    </span>
  );
};

const PrizeCard = ({
  rank,
  amount,
  label,
  isMain = false,
}: {
  rank: number;
  amount: string;
  label: string;
  isMain?: boolean;
}) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center rounded-2xl transition-all duration-700 ease-out group backdrop-blur-sm
      ${
        isMain
          ? "w-64 h-80 md:w-80 md:h-96 bg-gradient-to-br from-purple-900/40 via-fuchsia-900/40 to-black/60 border border-fuchsia-500/30 shadow-[0_0_30px_rgba(217,70,239,0.1)] z-10 scale-110 hover:shadow-[0_0_60px_rgba(217,70,239,0.4)]"
          : "w-56 h-72 md:w-64 md:h-80 bg-black/40 border border-white/10 hover:border-white/30"
      } hover:-translate-y-4 hover:rotate-1`}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div
          className={`absolute inset-[-1px] rounded-2xl bg-gradient-to-r ${
            isMain ? "from-fuchsia-500 to-cyan-500" : "from-white/20 to-white/5"
          } blur-sm`}
        />
      </div>

      <div className="relative mb-6 z-10">
        <div
          className={`absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-blue-600 via-white to-red-600 rounded-b-sm opacity-80 group-hover:opacity-100 transition-opacity`}
        />
        <div
          className={`relative p-4 rounded-full bg-black/60 backdrop-blur-md border border-white/10 ${
            rank === 1 ? "text-yellow-400" : "text-white"
          }`}
        >
          <span className="text-2xl font-bold font-mono">{rank}</span>
        </div>
      </div>

      <div className="text-center px-4 z-10">
        <h3 className="text-white text-3xl md:text-5xl font-extrabold tracking-tighter mb-2">
          <BinaryGlitch amount={amount} />
        </h3>
        <p className="text-white/40 group-hover:text-white/80 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] transition-colors">
          {label}
        </p>
      </div>

      <div className="absolute inset-0 w-full h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent top-0 animate-[scan_3s_linear_infinite] opacity-0 group-hover:opacity-100" />
    </div>
  );
};

export default function Prizes() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Ensuring client-side mount to avoid hydration errors
    const timer = setTimeout(() => setHasMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!hasMounted) return <div className="min-h-screen bg-black" />;

  return (
    <main className="relative w-full min-h-screen bg-black pt-32 pb-20 px-6 overflow-hidden">
      {/* --- BACKGROUND LAYER --- */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/prize-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="max-w-7xl mx-auto space-y-32 relative z-10">
        {/* Software: Agentic AI */}
        <section className="flex flex-col items-center">
          <h2 className="text-white text-3xl md:text-6xl font-black mb-16 uppercase tracking-tighter italic drop-shadow-2xl">
            Software Pool
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <PrizeCard rank={2} amount="20000" label="Elite Scout" />
            <PrizeCard
              rank={1}
              amount="30000"
              label="Grand Architect"
              isMain={true}
            />
            <PrizeCard rank={3} amount="10000" label="Rising Node" />
          </div>
        </section>

        {/* Hardware: Industry 5.0 */}
        <section className="flex flex-col items-center">
          <h2 className="text-white text-3xl md:text-6xl font-black mb-16 uppercase tracking-tighter italic drop-shadow-2xl">
            Hardware Pool
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <PrizeCard
              rank={1}
              amount="15000"
              label="Master Integrator"
              isMain={true}
            />
            <PrizeCard rank={2} amount="8000" label="Circuit Lead" />
          </div>
        </section>
      </div>

      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
    </main>
  );
}
