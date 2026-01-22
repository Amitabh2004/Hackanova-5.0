"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Terminal,
  ShieldCheck,
  Activity,
  Zap,
  Send,
  CheckCircle2,
} from "lucide-react";

// --- Sub-component for the "Decryption" Scramble Effect ---
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

// --- FAQ Component ---
const FAQNode = ({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="relative group mb-8 cursor-pointer"
    >
      <div
        className={`absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 transition-all duration-300 ${active ? "border-neon-cyan w-8 h-8" : "border-white/20"}`}
      />
      <div
        className={`absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 transition-all duration-300 ${active ? "border-neon-cyan w-8 h-8" : "border-white/20"}`}
      />

      <div
        className={`relative overflow-hidden bg-black/70 backdrop-blur-sm border border-white/10 p-6 transition-all duration-500 ${active ? "shadow-[0_0_30px_rgba(0,243,255,0.2)] border-neon-cyan/50" : ""}`}
      >
        <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
          <div className="flex items-center gap-2">
            <Activity
              size={14}
              className={
                active ? "text-neon-cyan animate-pulse" : "text-white/20"
              }
            />
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
              Query_Node_0{index + 1}
            </span>
          </div>
          <span className="text-[10px] font-mono text-neon-cyan/60">
            STATUS: {active ? "DECRYPTING..." : "LOCKED"}
          </span>
        </div>

        <h3
          className={`text-xl md:text-2xl transition-all duration-300 ${active ? "text-neon-cyan translate-x-2" : "text-white"}`}
        >
          {active ? <DecryptText text={question} /> : question}
        </h3>

        <div
          className={`grid transition-all duration-500 ease-in-out ${active ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="overflow-hidden">
            <div className="bg-white/5 p-4 border-l-2 border-neon-cyan font-mono text-sm text-white/80 leading-relaxed">
              <div className="flex items-start gap-3">
                <Terminal size={16} className="text-neon-cyan mt-1 shrink-0" />
                <p>{active ? <DecryptText text={answer} /> : ""}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
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
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdaajdbp", {
        // REPLACE WITH YOUR ID
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  const faqData = [
    {
      question: "What is provided?",
      answer:
        "High-speed Wi-Fi, food, sleeping zones, and Agentic AI mentor support.",
    },
    {
      question: "Who can join?",
      answer: "Students and professionals. All skill levels are welcome.",
    },
    {
      question: "Is it free?",
      answer: "Yes, HackAnnova 5.0 is completely free for shortlisted teams.",
    },
    {
      question: "How to get updates?",
      answer: "Follow our TSDW social handles and join our Discord.",
    },
    {
      question: "What are the prizes?",
      answer: "Cash prizes, exclusive swags, and industry networking.",
    },
    {
      question: "Team size?",
      answer: "A minimum of 2 and a maximum of 4 members per team.",
    },
    {
      question: "Where is the venue?",
      answer: "At the TCET Campus, transformed for Industry 5.0 simulation.",
    },
    {
      question: "Is food included?",
      answer:
        "Full meals and refreshments are provided throughout the 24 hours.",
    },
  ];

  if (!hasMounted) return <div className="min-h-screen bg-black" />;

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden pt-32 pb-32 px-6">
      <div className="fixed inset-0 z-0">
        <Image
          src="/cosmic-bg.jpg"
          alt="Cosmic HUD"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-20 flex flex-col items-center text-center">
          <ShieldCheck
            className="text-neon-cyan mb-4 animate-pulse"
            size={32}
          />
          <h1
            style={{ fontFamily: "var(--font-boston)" }}
            className="text-6xl md:text-9xl text-white tracking-tighter drop-shadow-[0_0_15px_rgba(0,243,255,0.6)]"
          >
            THE INTEL
          </h1>
          <p className="text-neon-cyan font-mono text-xs uppercase tracking-[0.8em] mt-4 opacity-70">
            HackAnnova 5.0 // FAQ Database
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {faqData.map((item, i) => (
            <FAQNode
              key={i}
              index={i}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>

        {/* --- QUERY FORM SECTION --- */}
        <section className="mt-40 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: "var(--font-boston)" }}
              className="text-5xl text-white tracking-widest uppercase mb-2"
            >
              UNRESOLVED QUERIES
            </h2>
            <p className="text-neon-cyan/60 font-mono text-[10px] tracking-[0.4em]">
              INITIATING DIRECT UPLINK...
            </p>
          </div>

          <div className="relative group">
            {status === "SUCCESS" ? (
              <div className="bg-neon-cyan/10 border border-neon-cyan p-12 text-center backdrop-blur-md animate-in fade-in zoom-in duration-500">
                <CheckCircle2
                  className="mx-auto text-neon-cyan mb-4"
                  size={48}
                />
                <h3 className="text-2xl text-white font-mono mb-2">
                  TRANSMISSION COMPLETE
                </h3>
                <p className="text-neon-cyan/70 text-sm font-mono tracking-tighter">
                  Your query has been logged in the Archive. Expect a response
                  soon.
                </p>
                <button
                  onClick={() => setStatus("IDLE")}
                  className="mt-8 text-[10px] text-white border-b border-white hover:text-neon-cyan transition-colors"
                >
                  SEND ANOTHER DATA PACKET
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-black/80 backdrop-blur-md border border-white/10 p-8 md:p-12 relative overflow-hidden transition-all shadow-2xl"
              >
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neon-cyan/40 group-focus-within:border-neon-cyan transition-all" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neon-cyan/40 group-focus-within:border-neon-cyan transition-all" />

                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-mono text-neon-cyan uppercase mb-2 opacity-70">
                      User_Identity
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="FULL NAME"
                      className="w-full bg-white/5 border border-white/10 p-4 text-white font-mono focus:outline-none focus:border-neon-cyan transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-neon-cyan uppercase mb-2 opacity-70">
                      Comms_Channel
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="EMAIL ADDRESS"
                      className="w-full bg-white/5 border border-white/10 p-4 text-white font-mono focus:outline-none focus:border-neon-cyan transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-neon-cyan uppercase mb-2 opacity-70">
                      Data_Payload
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="TYPE QUERY..."
                      className="w-full bg-white/5 border border-white/10 p-4 text-white font-mono focus:outline-none focus:border-neon-cyan transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "SENDING"}
                    className="w-full py-4 bg-neon-cyan text-black font-bold uppercase tracking-[0.3em] hover:bg-white hover:shadow-[0_0_30px_#00f3ff] transition-all flex items-center justify-center gap-3"
                  >
                    {status === "SENDING" ? (
                      "TRANSMITTING..."
                    ) : (
                      <>
                        <Send size={18} /> Transmit Query
                      </>
                    )}
                  </button>
                  {status === "ERROR" && (
                    <p className="text-red-500 font-mono text-[10px] text-center mt-2">
                      UPLINK FAILED. PLEASE TRY AGAIN.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
