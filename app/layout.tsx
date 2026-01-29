"use client";
import { useState, useEffect } from "react";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Home, Info, Heart, Mail, HelpCircle, Menu, X } from "lucide-react";
import { CLD_ASSETS } from "@/utils/cloudinary";

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

  // ✅ DEVFOLIO SDK - Load once globally
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY <= 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sidebarItems = [
    { name: "Home", icon: <Home size={24} />, href: "/" },
    { name: "About Us", icon: <Info size={24} />, href: "/about-us" },
    { name: "Sponsors", icon: <Heart size={24} />, href: "/sponsors" },
    { name: "Contact", icon: <Mail size={24} />, href: "/contact" },
    { name: "FAQ", icon: <HelpCircle size={24} />, href: "/faqs" },
  ];

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <title>Hackanova 5.0</title>
      </head>
      <body
        className={`${bostonCaps.variable} antialiased text-white selection:bg-neon-cyan/30 bg-black min-h-screen flex flex-col`}
      >
        {/* ✅ DEVFOLIO VERIFICATION - Hidden logo with exact ALT tag required */}
        <div style={{ display: "none" }} aria-hidden="true">
          <img src="/devfolio1.png" alt="DEVFOLIO LOGO" />
        </div>

        <header
          className={`fixed top-0 left-0 w-full z-50 pt-4 md:pt-0 px-6 md:px-0 pointer-events-none transition-transform duration-500 ease-in-out ${
            showHeader ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex md:grid md:grid-cols-3 items-center justify-between w-full mx-auto relative px-4">
            <div className="flex items-center justify-start pointer-events-auto">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white p-2 hover:text-neon-cyan transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
              <div className="hidden md:block">
                <Link href="/" className="group block">
                  <Image
                    src={CLD_ASSETS.FAVICON}
                    alt="Hackanova Logo"
                    width={200}
                    height={200}
                    priority
                    className="h-17 w-auto ml-3 object-contain pl-5 transition-all duration-300 group-hover:scale-105"
                  />
                </Link>
              </div>
            </div>

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
              <Image
                src={CLD_ASSETS.TSDW_LOGO}
                alt="TSDW Logo"
                width={400}
                height={150}
                className="w-24 h-auto md:w-40 md:pt-5 object-contain"
              />
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
              <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl flex flex-col items-center py-10 gap-8 pointer-events-auto border-b border-white/10 shadow-2xl">
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
                className="text-[8px] md:text-[10px] uppercase tracking-wider text-white/70"
              >
                {item.name}
              </span>
            </Link>
          ))}
        </aside>

        <main className="flex-grow">{children}</main>

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
