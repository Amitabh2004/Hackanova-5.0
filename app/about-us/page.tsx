"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CLD_ASSETS } from "@/utils/cloudinary";

// --- Team Member Interface ---
interface TeamMember {
  name: string;
  role: string;
  img: string;
  phone: string;
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
      if (frame > totalFrames) {
        setDisplayText(text);
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

// --- Updated Cyber Team Card (Name, Role, Phone Only) ---
const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="group relative transition-all duration-500 [perspective:1000px] hover:[transform:rotateX(5deg)_rotateY(5deg)_translateZ(50px)] w-[45%] md:w-64 shrink-0">
    <div className="relative p-[1px] md:p-[2px] bg-gradient-to-br from-cyan-400 via-purple-500 to-cyan-400 [clip-path:polygon(15%_0%,_85%_0%,_100%_15%,_100%_85%,_85%_100%,_15%_100%,_0%_85%,_0%_15%)]">
      <div className="bg-[#0a0a0c]/95 backdrop-blur-2xl p-3 md:p-6 flex flex-col items-center [clip-path:polygon(15%_0%,_85%_0%,_100%_15%,_100%_85%,_85%_100%,_15%_100%,_0%_85%,_0%_15%)]">
        {/* Name and Role Section */}
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

        {/* Profile Image */}
        <div className="relative w-full aspect-[3/4] mb-2 md:mb-4 overflow-hidden border border-white/5">
          <Image
            src={member.img}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 45vw, 250px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60" />
        </div>

        {/* Phone Number Section */}
        <div className="w-full py-1 md:py-2 px-1 md:px-3 border border-cyan-400/30 bg-cyan-400/5 rounded-sm text-center">
          <p className="text-[7px] md:text-[11px] text-white font-mono tracking-widest uppercase opacity-70 mb-0.5">
            Contact
          </p>
          <p className="text-[8px] md:text-[12px] text-cyan-400 font-mono font-bold tracking-wider">
            {member.phone}
          </p>
        </div>
      </div>
    </div>
    {/* Hover Glow Effect */}
    <div className="absolute inset-0 -z-10 bg-cyan-400/20 blur-2xl md:blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
);

export default function AboutUs() {
  const marqueeImages = CLD_ASSETS.MARQUEE_IMAGES;

  // Re-organized hierarchical data for 3-2-3 Desktop layout
  const team = {
    // Row 1: Technical Advisory, Technical Secretary & Associate Tech Secretary
    row1: [
      {
        name: "TISHA",
        role: "Technical Secretary",
        img: CLD_ASSETS.TISHA,
        phone: "+91 9321551512",
      },
      {
        name: "PIYUSH",
        role: "Associate Tech Secretary",
        img: CLD_ASSETS.PIYUSH,
        phone: "+91 9321679469",
      },
      {
        name: "AMITABH",
        role: "Technical Advisory",
        img: CLD_ASSETS.AMITABH,
        phone: "+91 8429051078",
      },
    ],
    // Row 2: Two Technical Coordinators
    row2: [
      {
        name: "SATISH",
        role: "Technical Coordinator",
        img: CLD_ASSETS.SATISH,
        phone: "+91 9967142376",
      },
      {
        name: "PRAFUL",
        role: "Technical Coordinator",
        img: CLD_ASSETS.PRAFUL,
        phone: "+91 9004377151",
      },
    ],
    // Row 3: Joint Tech Secretaries
    row3: [
      {
        name: "SOURISH",
        role: "Joint Tech Secretary",
        img: CLD_ASSETS.SOURISH,
        phone: "+91 7506317359",
      },
      {
        name: "SMITA",
        role: "Joint Tech Secretary",
        img: CLD_ASSETS.SMITA,
        phone: "+91 8451950320",
      },
      {
        name: "SIDDHESH",
        role: "Joint Tech Secretary",
        img: CLD_ASSETS.SIDDHESH,
        phone: "+91 9372985036",
      },
    ],
  };

  return (
    <main className="relative w-full min-h-screen bg-black pt-24 pb-20">
      {/* Background Layer */}
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
              className="text-3xl md:text-5xl text-white mb-6 uppercase"
            >
              Hackanova 5.0
            </h2>
            <p className="text-white leading-relaxed font-light">
              Under the theme{" "}
              <span className="text-blue-300 font-semibold">
                &quot; Break the Loop, Create the Future.&quot;
              </span>
              , Hackanova 5.0 challenges participants to transcend traditional
              boundaries. We are shifting the focus toward the dual pillars of
              modern innovation:{" "}
              <span className="text-orange-400 font-semibold">
                Agentic AI for software and Industry 5.0 for hardware
              </span>
              . This is where collaboration meets creativity to foster advanced
              tech solutions that don&apos;t just solve problems but create
              entirely new futures.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-xl hover:border-cyan-400/50 transition-colors">
            <h2
              style={{ fontFamily: "var(--font-boston)" }}
              className="text-3xl md:text-5xl text-white mb-6 uppercase"
            >
              TSDW Council
            </h2>
            <p className="text-white leading-relaxed font-light">
              The{" "}
              <span className="text-blue-300 font-semibold">
                TCET Student Development and Welfare Association (TSDW)
              </span>
              , established in 2004-05 under the guidelines of Mumbai
              University, serves as a dynamic platform for creativity,
              innovation, and holistic growth. Commonly known as the{" "}
              <span className="text-orange-400 font-semibold">
                Student Council
              </span>
              , TSDW represents the student body and spearheads flagship events
              such as Hackanova. These events beautifully merge technology, art,
              and community engagement.
            </p>
          </div>
        </div>

        {/* Gallery Marquee */}
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
                  sizes="(max-width: 768px) 300px, 400px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hierarchical Team Section */}
        <div className="space-y-16 md:space-y-32">
          <h2
            style={{ fontFamily: "var(--font-boston)" }}
            className="text-4xl md:text-7xl text-center text-white uppercase italic tracking-widest"
          >
            <ScrambleText text="TSDW TECHNICAL TEAM" />
          </h2>

          {/* Row 1: 3 members desktop / 2 members mobile */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-16">
            {team.row1.map((m, i) => (
              <TeamCard key={i} member={m} />
            ))}
          </div>

          {/* Row 2: 2 members desktop / 1 member mobile */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-16">
            {team.row2.map((m, i) => (
              <TeamCard key={i} member={m} />
            ))}
          </div>

          {/* Row 3: 3 members desktop / 2-2-1 mobile logic via flex-wrap */}
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
