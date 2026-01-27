"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  Link as LinkIcon,
  MapPin,
  Send,
  CheckCircle2,
  Activity,
  Globe,
  LucideIcon,
} from "lucide-react";
import { CLD_ASSETS } from "@/utils/cloudinary";

// --- Decryption Effect ---
const DecryptText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%@$#&*";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 2;
    }, 25);
    return () => clearInterval(interval);
  }, [text]);

  return <span className="font-mono">{displayText}</span>;
};

// --- FIX: Updated Type Definition to allow Lucide props like className ---
const ContactModule = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon; // Using the correct LucideIcon type
  label: string;
  value: string;
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative bg-black/60 border border-white/10 p-4 md:p-6 flex items-center gap-4 md:gap-6 transition-all hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(0,243,255,0.1)] rounded-sm"
  >
    <div className="p-2 md:p-3 bg-white/5 text-neon-cyan group-hover:bg-neon-cyan group-hover:text-black transition-all shrink-0">
      <Icon size={20} className="md:w-6 md:h-6" />
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-[8px] md:text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1 truncate">
        {label}
      </p>
      <p className="text-sm md:text-lg text-white group-hover:text-neon-cyan transition-colors truncate">
        {value}
      </p>
    </div>
  </a>
);

export default function Contact() {
  const [hasMounted, setHasMounted] = useState(false);
  const [status, setStatus] = useState<
    "IDLE" | "SENDING" | "SUCCESS" | "ERROR"
  >("IDLE");

  useEffect(() => {
    const timer = setTimeout(() => setHasMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://formspree.io/f/mdaajdbp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) setStatus("SUCCESS");
      else setStatus("ERROR");
    } catch {
      setStatus("ERROR");
    }
  };

  if (!hasMounted) return <div className="min-h-screen bg-black" />;

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden pt-24 md:pt-32 pb-32 px-4 md:px-6">
      <div className="fixed inset-0 z-0">
        <Image
          src={CLD_ASSETS.CHRONOLOGY_BG}
          alt="Cosmic Background"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_95%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <Globe className="text-neon-cyan mb-4 animate-[spin_12s_linear_infinite] w-8 h-8 md:w-10 md:h-10" />
          <h1
            style={{ fontFamily: "var(--font-boston)" }}
            className="text-2xl sm:text-4xl md:text-8xl text-white tracking-normal md:tracking-tighter drop-shadow-[0_0_15px_rgba(0,243,255,0.6)] leading-tight uppercase"
          >
            <DecryptText text="ESTABLISH UPLINK" />
          </h1>
          <p className="text-neon-cyan font-mono text-[8px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.8em] mt-2 md:mt-4 opacity-70 px-4">
            Hackanova 5.0 // Base Station Comms
          </p>
        </div>

        {/* --- 1. CONTACT DETAILS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16 md:mb-20">
          <ContactModule
            icon={Phone}
            label="Voice_Uplink"
            value="+91 84290 51078"
            href="tel:+910000000000"
          />
          <ContactModule
            icon={Mail}
            label="Data_Mail"
            value="tcet.hackanova@gmail.com"
            href="mailto:tcet.hackanova@gmail.com"
          />
          <ContactModule
            icon={LinkIcon}
            label="Neural_Archive"
            value="Linktree/Hackanova5.0"
            href="https://linktr.ee/Hackanova5.0"
          />
          <ContactModule
            icon={MapPin}
            label="Base_Station"
            value="TCET, Mumbai, India"
            href="https://www.google.com/maps/place/Thakur+College+of+Engineering+and+Technology/@19.2063,72.8643058,15z/data=!3m1!4b1!4m6!3m5!1s0x3be7b0e57647569d:0xc0aec329c82d3555!8m2!3d19.2063003!4d72.8746056!16s%2Fm%2F0fqs6yw?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D"
          />
        </div>

        {/* --- 2. LOCATION RADAR SECTION --- */}
        <div className="mb-20 md:mb-24 flex flex-col items-center overflow-hidden">
          <div className="text-center mb-6 md:mb-8 w-full max-w-full overflow-hidden">
            <h2
              style={{ fontFamily: "var(--font-boston)" }}
              className="text-lg sm:text-2xl md:text-4xl text-white tracking-widest uppercase truncate px-2"
            >
              <DecryptText text="GEOSPATIAL COORDINATES" />
            </h2>
            <p className="text-neon-cyan/50 font-mono text-[7px] md:text-[10px] mt-2 tracking-widest uppercase">
              Pinpointing Simulation Nexus...
            </p>
          </div>

          <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[350px] md:max-w-[500px] group">
            <div className="absolute inset-0 border-2 border-neon-cyan/20 rounded-full z-20 pointer-events-none overflow-hidden">
              <div className="absolute top-1/2 left-1/2 w-full h-[1px] md:h-[2px] bg-neon-cyan/50 -translate-y-1/2 origin-left animate-[spin_5s_linear_infinite]" />
            </div>

            {/* The Map */}
            <div className="absolute inset-4 md:inset-6 overflow-hidden rounded-full border border-white/20 z-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.123456789!2d72.8724169!3d19.2063003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aecb29c82d3555!2sThakur+College+of+Engineering+and+Technology!5e0!3m2!1sen!2sin!4v1706285640000!5m2!1sen!2sin"
                className="w-full h-full scale-110" // Removed grayscale, invert, opacity, and contrast
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-[6px] md:border-[15px] border-black z-[15] pointer-events-none" />
          </div>
        </div>

        {/* --- 3. DATA TRANSMISSION FORM --- */}
        <section className="max-w-3xl mx-auto w-full">
          <div className="text-center mb-10">
            <h2
              style={{ fontFamily: "var(--font-boston)" }}
              className="text-xl md:text-4xl text-white tracking-widest uppercase mb-2"
            >
              <DecryptText text="DATA PAYLOAD UPLINK" />
            </h2>
            <p className="text-neon-cyan/60 font-mono text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.4em]">
              INITIATING SECURE TRANSFER PROTOCOL...
            </p>
          </div>

          <div className="relative group">
            {status === "SUCCESS" ? (
              <div className="bg-neon-cyan/10 border border-neon-cyan p-8 md:p-12 text-center backdrop-blur-md animate-in fade-in zoom-in duration-500">
                <CheckCircle2 className="mx-auto text-neon-cyan mb-4 w-10 h-10 md:w-12 md:h-12" />
                <h3 className="text-lg md:text-2xl text-white font-mono mb-2 uppercase">
                  Uplink Successful
                </h3>
                <p className="text-neon-cyan/70 text-[10px] md:text-sm font-mono tracking-tighter">
                  Your data packet has been successfully integrated into the
                  archive.
                </p>
                <button
                  onClick={() => setStatus("IDLE")}
                  className="mt-6 md:mt-8 text-[10px] text-white border-b border-white hover:text-neon-cyan transition-colors"
                >
                  INITIATE_NEW_STREAM
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-black/80 backdrop-blur-md border border-white/10 p-6 md:p-12 relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neon-cyan" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neon-cyan" />

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                    <Activity
                      size={12}
                      className="text-neon-cyan animate-pulse md:w-4 md:h-4"
                    />
                    <span className="text-[8px] md:text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] md:tracking-[0.4em]">
                      Encrypted_Channel_A7
                    </span>
                  </div>
                  <div>
                    <label className="block text-[8px] md:text-[10px] font-mono text-neon-cyan uppercase mb-2">
                      User_Identity
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="IDENTIFY YOURSELF"
                      className="w-full bg-white/5 border border-white/10 p-3 md:p-4 text-xs md:text-sm text-white font-mono focus:outline-none focus:border-neon-cyan transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[8px] md:text-[10px] font-mono text-neon-cyan uppercase mb-2">
                      Comms_Channel
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="UPLINK EMAIL"
                      className="w-full bg-white/5 border border-white/10 p-3 md:p-4 text-xs md:text-sm text-white font-mono focus:outline-none focus:border-neon-cyan transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[8px] md:text-[10px] font-mono text-neon-cyan uppercase mb-2">
                      Message_Payload
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="TYPE DATA..."
                      className="w-full bg-white/5 border border-white/10 p-3 md:p-4 text-xs md:text-sm text-white font-mono focus:outline-none focus:border-neon-cyan transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "SENDING"}
                    className="w-full py-3 md:py-4 bg-neon-cyan text-black text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-white hover:shadow-[0_0_40px_rgba(0,243,255,0.4)] transition-all flex items-center justify-center gap-2 md:gap-3"
                  >
                    {status === "SENDING" ? (
                      "SYNCHRONIZING..."
                    ) : (
                      <>
                        <Send size={16} /> Transmit Query
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
