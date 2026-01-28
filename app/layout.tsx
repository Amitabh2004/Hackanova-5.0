"use client";
import { useState, useEffect } from "react";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Home, Info, Heart, Mail, HelpCircle, Menu, X } from "lucide-react";
// Import Brand Icons for the right sidebar
import {
  SiDiscord,
  SiInstagram,
  SiWhatsapp,
  SiYoutube,
  SiGmail,
} from "react-icons/si";
import { CLD_ASSETS } from "@/utils/cloudinary";

// --- CUSTOM FONT CONFIGURATION ---
const bostonCaps = localFont({
  src: "../public/fonts/BostonCaps-nqZJ.ttf",
  variable: "--font-boston",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  // --- SCROLL LOGIC FOR HEADER ---
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- SIDEBAR NAVIGATION ITEMS ---
  const sidebarItems = [
    { name: "Home", icon: <Home size={24} />, href: "/" },
    { name: "About Us", icon: <Info size={24} />, href: "/about-us" },
    { name: "Sponsors", icon: <Heart size={24} />, href: "/sponsors" },
    { name: "Contact", icon: <Mail size={24} />, href: "/contact" },
    { name: "FAQ", icon: <HelpCircle size={24} />, href: "/faqs" },
  ];

  // --- RIGHT SOCIAL SIDEBAR ITEMS ---
  const socialItems = [
    {
      name: "Discord",
      icon: <SiDiscord size={20} />,
      href: "https://discord.gg/FN9WVwfvdF",
    },
    {
      name: "Instagram",
      icon: <SiInstagram size={20} />,
      href: "https://instagram.com/tcet_tsdw",
    },
    {
      name: "WhatsApp",
      icon: <SiWhatsapp size={20} />,
      href: "https://wa.me/918429051078?text=Hi%20HackAnnova%20Team!",
    },
    {
      name: "YouTube",
      icon: <SiYoutube size={20} />,
      href: "https://youtube.com/@tcet_tsdw",
    },
    {
      name: "Gmail",
      icon: <SiGmail size={20} />,
      href: "mailto:tcet.hackanova@gmail.com",
    },
  ];

  return (
    <html lang="en">
      <head>
        {/* Standard tab icon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />

        {/* Larger icon for taskbars and bookmarks */}
        <link rel="icon" href="/favicon.ico" sizes="192x192" />

        {/* Apple Touch Icon (shows up larger on phone home screens) */}
        <link rel="apple-touch-icon" href="/favicon.ico" />

        <title>Hackanova 5.0</title>
      </head>
      <body
        className={`${bostonCaps.variable} antialiased text-white selection:bg-neon-cyan/30 bg-black min-h-screen flex flex-col`}
      >
        {/* --- TOP HEADER --- */}
        <header
          className={`fixed top-0 left-0 w-full z-50 pt-4 md:pt-0 px-6 md:px-0 pointer-events-none transition-transform duration-500 ease-in-out
          ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
        >
          <div className="flex md:grid md:grid-cols-3 items-center justify-between w-full mx-auto relative">
            <div className="flex items-center justify-start pointer-events-auto">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white p-2 hover:text-neon-cyan transition-colors"
              >
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
              <div className="hidden md:block">
                <Link href="/" className="group block">
                  <Image
                    src={CLD_ASSETS.FAVICON}
                    alt="HackAnnova Logo"
                    width={200}
                    height={200}
                    priority
                    className="h-17 w-auto ml-3 object-contain pl-5 transition-all duration-300 group-hover:scale-105"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex justify-center items-center pointer-events-auto">
              <nav className="flex gap-6 md:gap-23">
                {["Tracks", "Prizes", "Timeline"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    style={{ fontFamily: "var(--font-boston)" }}
                    className="text-sm md:text-2xl uppercase tracking-[0.25em] hover:text-neon-cyan transition-all"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex justify-end pointer-events-auto pr-4">
              <div className="relative group flex items-center justify-center">
                <div className="md:hidden">
                  <Image
                    src={CLD_ASSETS.TSDW_LOGO}
                    alt="TSDW Logo"
                    width={180}
                    height={80}
                    className="h-16 w-auto object-contain pt-3"
                  />
                </div>
                <div className="hidden md:block">
                  <Image
                    src={CLD_ASSETS.TSDW_LOGO}
                    alt="TSDW Logo"
                    width={400}
                    height={150}
                    className="w-24 h-auto md:w-40 md:pt-5 object-contain transition-all duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
              <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl flex flex-col items-center py-10 gap-8 pointer-events-auto border-b border-white/10">
                {["Tracks", "Prizes", "Timeline"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ fontFamily: "var(--font-boston)" }}
                    className="text-2xl uppercase tracking-[0.2em] text-white hover:text-neon-cyan"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* --- LEFT SIDEBAR --- */}
        <aside className="fixed z-40 flex items-center bg-black/5 backdrop-blur-sm border border-white/5 shadow-2xl pointer-events-auto md:h-fit md:left-0 md:top-1/2 md:-translate-y-1/2 md:ml-4 md:flex-col md:rounded-2xl md:py-10 md:px-3 md:gap-5 bottom-0 left-0 w-full md:w-auto flex-row justify-around py-3 rounded-t-2xl md:rounded-2xl">
          {sidebarItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex flex-col items-center gap-1 transition-all hover:scale-110"
            >
              <div className="text-white group-hover:text-neon-cyan transition-colors">
                {item.icon}
              </div>
              <span
                style={{ fontFamily: "var(--font-boston)" }}
                className="text-[8px] md:text-[10px] uppercase tracking-wider text-white/70 group-hover:text-white transition-colors"
              >
                {item.name}
              </span>
            </Link>
          ))}
        </aside>

        {/* --- RIGHT SOCIAL SIDEBAR --- */}
        <aside className="hidden md:flex fixed z-40 right-4 top-1/2 -translate-y-1/2 flex-col items-center gap-6 bg-white/5 backdrop-blur-md border border-white/10 py-8 px-3 rounded-full pointer-events-auto">
          {socialItems.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center transition-all hover:scale-125"
            >
              <span
                style={{ fontFamily: "var(--font-boston)" }}
                className="absolute right-full mr-4 px-2 py-1 bg-neon-cyan text-black text-[10px] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
              >
                {social.name}
              </span>

              <div className="text-white/60 group-hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(0,243,255,0.8)]">
                {social.icon}
              </div>
            </a>
          ))}
          <div className="w-[1px] h-12 bg-gradient-to-b from-neon-cyan to-transparent mt-2 opacity-50" />
        </aside>

        {/* --- MAIN CONTENT AREA --- */}
        <main className="flex-grow">{children}</main>

        {/* --- FOOTER --- */}
        <footer className="w-full py-4 bg-black border-t border-white/5 z-10">
          <p className="text-center text-[9px] md:text-[11px] text-white/40 uppercase tracking-[0.2em] font-mono">
            © 2026 All rights reserved | Made with{" "}
            <span className="text-neon-cyan">❤</span> by the Hackanova Team
          </p>
        </footer>
      </body>
    </html>
  );
}
