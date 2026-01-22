"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// --- Type definition for team member ---
interface TeamMember {
  name: string;
  role: string;
  img: string;
}

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
      if (frame > totalFrames) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

// --- Specialized Cyber Team Card: Responsive with 2 per row on mobile ---
const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="group relative transition-all duration-500 [perspective:1000px] hover:[transform:rotateX(5deg)_rotateY(5deg)_translateZ(50px)] w-[45%] md:w-64">
    <div className="relative p-[1px] md:p-[2px] bg-gradient-to-br from-neon-cyan via-purple-500 to-neon-cyan [clip-path:polygon(15%_0%,_85%_0%,_100%_15%,_100%_85%,_85%_100%,_15%_100%,_0%_85%,_0%_15%)]">
      <div className="bg-[#0a0a0c]/95 backdrop-blur-2xl p-3 md:p-6 flex flex-col items-center [clip-path:polygon(15%_0%,_85%_0%,_100%_15%,_100%_85%,_85%_100%,_15%_100%,_0%_85%,_0%_15%)]">
        <div className="text-center mb-2 md:mb-4 space-y-1">
          <h3
            style={{ fontFamily: "var(--font-boston)" }}
            className="text-xs md:text-xl text-white tracking-wider truncate px-1"
          >
            <ScrambleText text={member.name} />
          </h3>
          <p className="text-[7px] md:text-[10px] uppercase text-neon-cyan tracking-[0.2em] md:tracking-[0.3em] font-bold">
            {member.role}
          </p>
        </div>

        {/* Grayscale removed - always color */}
        <div className="relative w-full aspect-[3/4] mb-2 md:mb-4 overflow-hidden border border-white/5">
          <Image
            src={member.img}
            alt={member.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60" />
        </div>

        <div className="w-full py-1 md:py-2 px-1 md:px-3 border border-neon-cyan/30 bg-neon-cyan/5 rounded-sm text-center">
          <p className="text-[6px] md:text-[9px] text-neon-cyan font-mono tracking-tighter truncate">
            architect@hackannova.in
          </p>
          <p className="text-[6px] md:text-[9px] text-white font-mono mt-0.5 md:mt-1">
            +91 00000 00000
          </p>
        </div>
      </div>
    </div>
    <div className="absolute inset-0 -z-10 bg-neon-cyan/20 blur-2xl md:blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
);

export default function AboutUs() {
  const marqueeImages = Array.from(
    { length: 15 },
    (_, i) => `/scroller/img${i + 1}.png`,
  );

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
    <main className="relative w-full min-h-screen bg-transparent pt-24 pb-20">
      <div className="fixed inset-0 z-0 w-full h-full overflow-hidden">
        <Image
          src="/about-bg.png"
          alt="Cyberpunk City Background"
          fill
          priority
          className="object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h1
          style={{ fontFamily: "var(--font-boston)" }}
          className="text-4xl md:text-8xl text-neon-cyan text-center mb-12 md:mb-20 tracking-tighter drop-shadow-[0_0_20px_#00f3ff]"
        >
          <ScrambleText text="ABOUT US" />
        </h1>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-20 md:mb-32">
          <div className="group relative bg-black/40 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-lg overflow-hidden transition-all duration-500 hover:border-neon-cyan/50 hover:shadow-[0_0_40px_rgba(0,243,255,0.15)]">
            <div className="absolute top-0 left-0 w-1 h-full bg-neon-cyan/20 group-hover:bg-neon-cyan transition-all" />
            <h2
              style={{ fontFamily: "var(--font-boston)" }}
              className="text-xl md:text-3xl text-white uppercase tracking-widest mb-4 md:mb-6 flex items-center gap-4"
            >
              <ScrambleText text="HackAnnova 5.0" />
            </h2>
            <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
              HackAnnova 5.0, organized by TSDW, is a hackathon focused on{" "}
              <span className="text-neon-cyan font-bold">
                Agentic AI and Industry 5.0
              </span>
              . Challenging participants to create innovative solutions under
              the theme{" "}
              <span className="italic text-white">
                &quot;A Simulated Paradigm,&quot;
              </span>{" "}
              it promotes collaboration and creativity.
            </p>
          </div>

          <div className="group relative bg-black/40 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-lg overflow-hidden transition-all duration-500 hover:border-neon-cyan/50 hover:shadow-[0_0_40px_rgba(0,243,255,0.15)]">
            <div className="absolute top-0 left-0 w-1 h-full bg-neon-cyan/20 group-hover:bg-neon-cyan transition-all" />
            <h2
              style={{ fontFamily: "var(--font-boston)" }}
              className="text-xl md:text-3xl text-white uppercase tracking-widest mb-4 md:mb-6 flex items-center gap-4"
            >
              <ScrambleText text="TSDW Association" />
            </h2>
            <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
              The TCET Student Development and Welfare Association (TSDW),
              established in 2004-05, serves as a dynamic platform for
              innovation. Commonly known as the{" "}
              <span className="text-neon-cyan">Student Council</span>, TSDW
              spearheads flagship events beautifully merging{" "}
              <span className="text-white font-medium">
                technology and community
              </span>
              .
            </p>
          </div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden py-6 md:py-10 mb-20 md:mb-32 border-y border-white/5">
          <div className="flex gap-4 md:gap-8 animate-marquee">
            {[...marqueeImages, ...marqueeImages].map((path, i) => (
              <div
                key={i}
                className="min-w-[250px] md:min-w-[350px] h-[160px] md:h-[220px] relative border border-white/10 transition-all duration-500 hover:border-neon-cyan/30 overflow-hidden"
              >
                <Image
                  src={path}
                  alt={`Gallery ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- Hierarchical Team Section: Responsive Layout --- */}
        <div className="space-y-12 md:space-y-24">
          <h2
            style={{ fontFamily: "var(--font-boston)" }}
            className="text-3xl md:text-6xl text-center text-white uppercase tracking-widest"
          >
            <ScrambleText text="MEET THE TECH TEAM" />
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-20">
            {team.row1.map((m, i) => (
              <TeamCard key={i} member={m} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-12">
            {team.row2.map((m, i) => (
              <TeamCard key={i} member={m} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-12">
            {team.row3.map((m, i) => (
              <TeamCard key={i} member={m} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
