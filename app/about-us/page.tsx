"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CLD_ASSETS } from "@/utils/cloudinary";

// --- Team Member Interface ---
interface TeamMember {
  name: string;
  role: string;
  img: string;
}

// --- Scramble Text Effect ---
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
      if (frame > totalFrames) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

// --- Cyber Team Card ---
const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="group relative transition-all duration-500 [perspective:1000px] hover:[transform:rotateX(5deg)_rotateY(5deg)_translateZ(50px)] w-[45%] md:w-64 shrink-0">
    <div className="relative p-[1px] md:p-[2px] bg-gradient-to-br from-cyan-400 via-purple-500 to-cyan-400 [clip-path:polygon(15%_0%,_85%_0%,_100%_15%,_100%_85%,_85%_100%,_15%_100%,_0%_85%,_0%_15%)]">
      <div className="bg-[#0a0a0c]/95 backdrop-blur-2xl p-3 md:p-6 flex flex-col items-center [clip-path:polygon(15%_0%,_85%_0%,_100%_15%,_100%_85%,_85%_100%,_15%_100%,_0%_85%,_0%_15%)]">
        <div className="text-center mb-2 md:mb-4 space-y-1">
          <h3
            style={{ fontFamily: "var(--font-boston)" }}
            className="text-xs md:text-xl text-white tracking-wider truncate px-1"
          >
            <ScrambleText text={member.name} />
          </h3>
          <p className="text-[7px] md:text-[10px] uppercase text-cyan-400 tracking-[0.2em] md:tracking-[0.3em] font-bold">
            {member.role}
          </p>
        </div>

        <div className="relative w-full aspect-[3/4] mb-2 md:mb-4 overflow-hidden border border-white/5">
          <Image
            src={member.img}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60" />
        </div>

        <div className="w-full py-1 md:py-2 px-1 md:px-3 border border-cyan-400/30 bg-cyan-400/5 rounded-sm text-center">
          <p className="text-[6px] md:text-[9px] text-cyan-400 font-mono tracking-tighter truncate">
            architect@hackannova.in
          </p>
          <p className="text-[6px] md:text-[9px] text-white font-mono mt-0.5 md:mt-1">
            +91 00000 00000
          </p>
        </div>
      </div>
    </div>
    <div className="absolute inset-0 -z-10 bg-cyan-400/20 blur-2xl md:blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
);

export default function AboutUs() {
  const marqueeImages = CLD_ASSETS.MARQUEE_IMAGES;

  const team = {
    row1: [
      {
        name: "ARCHITECT 1",
        role: "Technical Secretary",
        img: "/dummy-img.png",
      },
      {
        name: "ARCHITECT 2",
        role: "Associate Tech Secretary",
        img: "/dummy-img.png",
      },
      {
        name: "ARCHITECT 3",
        role: "Technical Advisory",
        img: "/dummy-img.png",
      },
    ],
    row2: [
      {
        name: "ARCHITECT 4",
        role: "Technical Coordinator",
        img: "/dummy-img.png",
      },
      {
        name: "ARCHITECT 5",
        role: "Technical Coordinator",
        img: "/dummy-img.png",
      },
    ],
    row3: [
      {
        name: "ARCHITECT 6",
        role: "Joint Tech Secretary",
        img: "/dummy-img.png",
      },
      {
        name: "ARCHITECT 7",
        role: "Joint Tech Secretary",
        img: "/dummy-img.png",
      },
      {
        name: "ARCHITECT 8",
        role: "Joint Tech Secretary",
        img: "/dummy-img.png",
      },
    ],
  };

  return (
    <main className="relative w-full min-h-screen bg-black pt-24 pb-20">
      {/* --- BACKGROUND LAYER --- */}
      <div className="fixed inset-0 z-0">
        <Image
          src={CLD_ASSETS.ABOUT_US_BG}
          alt="Background"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h1
          style={{ fontFamily: "var(--font-boston)" }}
          className="text-5xl md:text-9xl text-white text-center mb-20 tracking-tighter italic"
        >
          <ScrambleText text="ABOUT US" />
        </h1>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-xl hover:border-cyan-400/50 transition-colors">
            <h2
              style={{ fontFamily: "var(--font-boston)" }}
              className="text-2xl md:text-4xl text-white mb-6 uppercase"
            >
              HackAnnova 5.0
            </h2>
            <p className="text-white/60 leading-relaxed font-light">
              HackAnnova 5.0, organized by TSDW, is a 24-hour innovation sprint
              focusing on{" "}
              <span className="text-cyan-400">Agentic AI and Industry 5.0</span>
              . Hosted at TCET, it provides a platform for engineers to solve
              real-world problems under the theme &quot;A Simulated
              Paradigm&quot;.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-xl hover:border-cyan-400/50 transition-colors">
            <h2
              style={{ fontFamily: "var(--font-boston)" }}
              className="text-2xl md:text-4xl text-white mb-6 uppercase"
            >
              TSDW Council
            </h2>
            <p className="text-white/60 leading-relaxed font-light">
              The TCET Student Development and Welfare Association (TSDW) is the
              apex student body of TCET Mumbai. Since 2004, we have dedicated
              ourselves to fostering technical growth and student welfare
              through high-impact events.
            </p>
          </div>
        </div>

        {/* --- CLOUDINARY INFINITY MARQUEE --- */}
        <div className="overflow-hidden py-10 mb-32 border-y border-white/5 relative">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...marqueeImages, ...marqueeImages].map((url, i) => (
              <div
                key={i}
                className="min-w-[300px] md:min-w-[400px] h-[200px] md:h-[250px] relative rounded-xl overflow-hidden border border-white/10 group"
              >
                <Image
                  src={url}
                  alt={`Gallery ${i}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- HIERARCHICAL TEAM SECTION --- */}
        <div className="space-y-16 md:space-y-32">
          <h2
            style={{ fontFamily: "var(--font-boston)" }}
            className="text-4xl md:text-7xl text-center text-white uppercase italic tracking-widest"
          >
            <ScrambleText text="MEET THE ARCHITECTS" />
          </h2>

          <div className="flex flex-wrap justify-center gap-6 md:gap-16">
            {team.row1.map((m, i) => (
              <TeamCard key={i} member={m} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-16">
            {team.row2.map((m, i) => (
              <TeamCard key={i} member={m} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-16">
            {team.row3.map((m, i) => (
              <TeamCard key={i} member={m} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
