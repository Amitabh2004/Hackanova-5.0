"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CLD_ASSETS } from "@/utils/cloudinary";

const SystemLink = ({ text, href }: { text: string; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-block px-1.5 font-bold text-white transition-all duration-300 group mx-1"
  >
    <span className="relative z-10">{text}</span>
    <span className="absolute inset-0 bg-cyan-600/60 group-hover:bg-cyan-500 transition-colors -skew-x-12" />
    <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
  </a>
);

export default function Tracks() {
  const [hovered, setHovered] = useState<"SOFT" | "HARD" | null>(null);

  return (
    <main className="relative w-full min-h-screenoverflow-x-hidden flex flex-col">
      {/* --- FIXED BACKGROUND LAYER --- */}
      <div className="fixed inset-0 z-0">
        <Image
          src={CLD_ASSETS.TRACK_BG}
          alt="Horizon Background"
          fill
          priority
          className="object-cover opacity-30" // Increased opacity from 10 to 30
        />
        {/* Subtle dark overlays to ensure text remains the priority */}
      </div>

      {/* --- RESPONSIVE DUAL PILLARS --- */}
      <div className="relative z-10 flex flex-col md:flex-row h-auto md:h-[60vh] w-full border-b border-white/5 pt-32 md:pt-20">
        {/* SOFTWARE PILLAR */}
        <div
          onMouseEnter={() => setHovered("SOFT")}
          onMouseLeave={() => setHovered(null)}
          className={`relative flex-1 flex flex-col items-center justify-center py-16 md:py-0 transition-all duration-700
          ${hovered === "HARD" ? "opacity-20 scale-95 blur-sm" : "opacity-100"}`}
        >
          <div
            className={`absolute inset-0 bg-cyan-500/10 transition-opacity duration-500 ${hovered === "SOFT" ? "opacity-100" : "opacity-0"}`}
          />
          <h2
            style={{ fontFamily: "var(--font-boston)" }}
            className="text-7xl md:text-[12rem] text-white/5 absolute select-none"
          >
            SOFT
          </h2>
          <div className="relative z-20 text-center">
            <h3 className="text-5xl md:text-8xl font-black text-cyan-400 tracking-tighter mb-2">
              SOFTWARE
            </h3>
            <p className="font-mono text-[10px] tracking-[0.5em] text-white/60 mb-8 uppercase">
              Agentic AI Paradigm
            </p>
            <a
              href="https://drive.google.com/file/d/1f2kKRQYnh1EkLKiaLYqM_aQDT0tuE2xS/view?usp=sharing"
              className="px-10 py-4 bg-cyan-500 text-black font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              Get Brochure
            </a>
          </div>
        </div>

        {/* HARDWARE PILLAR */}
        <div
          onMouseEnter={() => setHovered("HARD")}
          onMouseLeave={() => setHovered(null)}
          className={`relative flex-1 flex flex-col items-center justify-center py-16 md:py-0 transition-all duration-700 border-t md:border-t-0 md:border-l border-white/5
          ${hovered === "SOFT" ? "opacity-20 scale-95 blur-sm" : "opacity-100"}`}
        >
          <div
            className={`absolute inset-0 bg-orange-500/10 transition-opacity duration-500 ${hovered === "HARD" ? "opacity-100" : "opacity-0"}`}
          />
          <h2
            style={{ fontFamily: "var(--font-boston)" }}
            className="text-7xl md:text-[12rem] text-white/5 absolute select-none"
          >
            HARD
          </h2>
          <div className="relative z-20 text-center">
            <h3 className="text-5xl md:text-8xl font-black text-orange-500 tracking-tighter mb-2">
              HARDWARE
            </h3>
            <p className="font-mono text-[10px] tracking-[0.5em] text-white/60 mb-8 uppercase">
              Industry 5.0 Paradigm
            </p>
            <a
              href="https://drive.google.com/file/d/1nGuCY5-5k3Y8XE5sfQWb1Z-E177d7yWP/view?usp=sharing"
              className="px-10 py-4 bg-orange-500 text-black font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
            >
              Get Brochure
            </a>
          </div>
        </div>
      </div>

      {/* --- GUIDELINES SECTION --- */}
      <div className="relative z-10 flex-1 p-8 md:p-20backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-16 border-l-4 border-cyan-500 pl-6">
            <h4
              style={{ fontFamily: "var(--font-boston)" }}
              className="text-4xl md:text-6xl text-white italic tracking-tighter uppercase"
            >
              Participant Guidelines
            </h4>
            <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 pb-24">
            {[
              "TEAM SIZE: 2-4 MEMBERS ONLY.",
              "INDIVIDUAL APPLICATIONS WILL NOT BE ACCEPTED.",
              "REGISTRATION IS ABSOLUTELY FREE FOR ALL THE PARTICIPANTS.",
              <>
                REGISTER YOUR TEAMS ON GOOGLE FORMS FOR{" "}
                <SystemLink
                  text="SOFTWARE"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfxED0WfB9nTXuhDezSkb9do77uXBQ-pQf__SHrHxf1byAMhg/viewform?usp=sharing&ouid=110661469901935126710"
                />{" "}
                OR{" "}
                <SystemLink
                  text="HARDWARE"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeVx6p2Eu_oeZ8-W7QjAKMI7jBziTbct-p0uBAoBaDWdP_LBw/viewform?usp=sharing&ouid=110661469901935126710"
                />{" "}
                TRACK AND THEN FOLLOW THE STEPS FOR PLATFORM SUBMISSION.
              </>,
              <>
                ALL COMMUNICATION WILL TAKE PLACE VIA{" "}
                <SystemLink
                  text="DISCORD"
                  href="https://discord.gg/FN9WVwfvdF"
                />
                ; ENSURE ALL MEMBERS ARE ON THE CHANNEL.
              </>,
              "YOUR IDEA SHOULD ALIGN WITH THE GENERALIZED HACKATHON THEME.",
              <>
                USE THE PPT TEMPLATE TO PREPARE A PPT FOR YOUR IDEA OF{" "}
                <SystemLink
                  text="SOFTWARE"
                  href="https://drive.google.com/file/d/1JkfV826YoXujfCEzSP5TZTCKNyVcvaOA/view"
                />{" "}
                OR{" "}
                <SystemLink
                  text="HARDWARE"
                  href="https://drive.google.com/file/d/1oqeUhloN7_ugM3zW8569rEQDhTMl0FwD/view"
                />{" "}
                FOR{" "}
                <SystemLink
                  text="DEVFOLIO"
                  href="https://hackanova-5-0.devfolio.co/overview?slug=hackanova-5-0.devfolio.co"
                />
                .
              </>,
              "ALL THE TEAM MEMBERS MUST UPLOAD THE SAME PPT TO THE DEVFOLIO FORM.",
              "THE TEAM LEADER SHOULD CREATE A TEAM AND SHARE THE INVITE CODE.",
            ].map((content, i) => (
              <div key={i} className="flex gap-6 group">
                <span className="text-3xl font-black text-white/20 group-hover:text-cyan-500 transition-colors">
                  0{i + 1}
                </span>
                <p className="text-lg md:text-xl text-white/ leading-relaxed group-hover:text-white transition-colors">
                  {content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Scanline Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
    </main>
  );
}
