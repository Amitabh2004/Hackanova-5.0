"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { CLD_ASSETS } from "@/utils/cloudinary";
const timelineData = [
  {
    date: "1st February 2026",
    event: "Registration Commences",
    status: "Latest",
    description:
      "Official portal opens for team registrations and individual sign-ups.",
  },
  {
    date: "23rd February 2026",
    event: "Deadline for Online Idea Submission",
    status: "Latest",
    description:
      "Submit your initial prototypes and project documentation for review.",
  },
  {
    date: "24th February 2026",
    event: "Round 1 - Virtual Screening of Submissions",
    status: "Upcoming",
    description: "First technical screening for the software & hardware track.",
  },
  {
    date: "25th February 2026",
    event: "Shortlisted Teams Announced",
    status: "Upcoming",
    description: "List of qualified teams for the grand finale revealed.",
  },
  {
    date: "27th February 2026",
    event: "Final Round of Competition",
    status: "Upcoming",
    description:
      "Grand finale hosted at Thakur College of Engineering & Technology.",
  },
];

// --- Timer Component ---
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("February 27, 2026 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 justify-center items-center py-10">
      {[
        { label: "Days", val: timeLeft.days },
        { label: "Hours", val: timeLeft.hours },
        { label: "Mins", val: timeLeft.minutes },
        { label: "Secs", val: timeLeft.seconds },
      ].map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-cyan-500/20 blur-lg group-hover:bg-cyan-500/40 transition-all" />
            <div className="relative bg-white/5 border border-white/10 w-16 h-20 md:w-28 md:h-32 flex items-center justify-center rounded-lg backdrop-blur-md">
              <span className="text-2xl md:text-6xl font-black text-white tracking-tighter">
                {String(unit.val).padStart(2, "0")}
              </span>
            </div>
          </div>
          <span className="mt-2 text-[8px] md:text-xs font-mono uppercase tracking-[0.3em] text-cyan-400">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const TimelineNode = ({
  item,
  index,
}: {
  item: (typeof timelineData)[0];
  index: number;
}) => (
  <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 gap-12 group mb-24">
    {/* Central Vertical Line */}
    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 group-last:bottom-full group-last:h-0" />

    {/* Data Point Node */}
    <div
      className={`absolute left-6 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-all duration-500 z-10 
      ${item.status === "Latest" ? "bg-cyan-400 border-white shadow-[0_0_15px_#22d3ee]" : "bg-black border-white/30 group-hover:border-white"}`}
    />

    {/* DATE SIDE */}
    <div
      className={`flex flex-col justify-start md:pt-0 ${
        index % 2 === 0
          ? "md:text-right md:order-1 md:pr-16"
          : "md:text-left md:order-2 md:pl-16"
      }`}
    >
      <span
        className={`text-xl md:text-2xl font-bold font-mono tracking-tighter transition-colors duration-300 ${
          item.status === "Latest" ? "text-cyan-400" : "text-white/60"
        }`}
      >
        {item.date}
      </span>
    </div>

    {/* CARD SIDE */}
    <div
      className={`flex flex-col ${
        index % 2 === 0
          ? "md:order-2 md:pl-16"
          : "md:order-1 md:text-right md:pr-16 md:items-end"
      }`}
    >
      <div className="max-w-md p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
          {item.event}
          {item.status === "Latest" && (
            <span className="text-[10px] bg-cyan-400 text-black px-2 py-0.5 rounded-full animate-pulse">
              LIVE
            </span>
          )}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed font-mono">
          {item.description}
        </p>
      </div>
    </div>
  </div>
);

export default function Timeline() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!hasMounted) return <div className="min-h-screen bg-black" />;

  return (
    <main className="relative w-full min-h-screen bg-black pt-40 pb-40 px-6 overflow-hidden">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <Image
          src={CLD_ASSETS.TIMELINE_BG}
          alt="Chronology Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10 space-y-4">
          <div className="flex items-center justify-center gap-2 text-cyan-400 font-mono text-xs tracking-[0.6em]">
            <Clock size={16} className="animate-spin-slow" />{" "}
            SYSTEM_CHRONOLOGY_ACTIVE
          </div>
          <h1
            style={{ fontFamily: "var(--font-boston)" }}
            className="text-6xl md:text-9xl text-white uppercase italic tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Chronology
          </h1>
          <CountdownTimer />
        </div>

        {/* Timeline Items */}
        <div className="relative pt-20">
          {timelineData.map((item, index) => (
            <TimelineNode key={index} item={item} index={index} />
          ))}
        </div>

        {/* Finale Location Badge */}
        <div className="mt-20 flex flex-col items-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Thakur+College+of+Engineering+and+Technology&query_place_id=ChIJnVZHduWw5zsRVTUtyCnDrsA"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="p-8 bg-gradient-to-r from-cyan-900/40 to-fuchsia-900/40 border border-white/20 rounded-2xl backdrop-blur-xl flex flex-col md:flex-row items-center gap-8 group-hover:border-cyan-400 transition-all duration-500 max-w-2xl cursor-pointer">
              <div className="p-4 bg-white/10 rounded-full">
                <MapPin
                  className="text-cyan-400 group-hover:scale-110 transition-transform"
                  size={32}
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-1">
                  Final Destination
                </p>
                <h4 className="text-xl font-bold text-white uppercase tracking-tight">
                  Thakur College of Engineering & Technology
                </h4>
                <p className="text-sm text-white/40 mt-1">
                  Ground Floor, Lobby Area.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
