import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import localFont from "next/font/local";
import { Home, Info, Heart, Mail, HelpCircle } from "lucide-react"; // Ensure 'npm install lucide-react' is run

// Load the Boston Caps font from public/fonts/
const bostonCaps = localFont({
  src: "../public/fonts/BostonCaps-nqZJ.ttf",
  variable: "--font-boston",
});

export const metadata: Metadata = {
  title: "HackAnnova 5.0",
  description: "A Simulated Paradigm",
  icons: {
    icon: "/faviconn.png?v=1",
    apple: "/faviconn.png?v=1",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarItems = [
    { name: "Home", icon: <Home size={24} />, href: "/" },
    { name: "About Us", icon: <Info size={24} />, href: "#about" },
    { name: "Sponsors", icon: <Heart size={24} />, href: "#sponsors" },
    { name: "Contact", icon: <Mail size={24} />, href: "#contact" },
    { name: "FAQ", icon: <HelpCircle size={24} />, href: "#faq" },
  ];

  return (
    <html lang="en">
      <body
        className={`${bostonCaps.variable} antialiased text-white selection:bg-neon-cyan/30`}
      >
        {/* --- Top Header --- */}
        <header className="fixed top-0 left-0 w-full z-50 pt-0 px-0 pointer-events-none">
          <div className="grid grid-cols-3 items-center w-full mx-auto">
            {/* Left Logo */}
            <div className="flex justify-start pointer-events-auto">
              <Image
                src="/faviconn.png"
                alt="HackAnnova Logo"
                width={200}
                height={200}
                className="h-16 w-auto md:h-20 md:ml-3 object-contain ml-0"
              />
            </div>

            {/* Centered Navigation */}
            <nav className="flex justify-center gap-6 md:gap-23 pointer-events-auto">
              {["Tracks", "Prizes", "Timeline"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{ fontFamily: "var(--font-boston)" }}
                  className="text-sm md:text-2xl uppercase tracking-[0.25em] hover:text-neon-cyan transition-all"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Right Logo */}
            <div className="flex justify-end pointer-events-auto">
              <Image
                src="/tsdw2-logo.png"
                alt="TSDW Logo"
                width={400}
                height={150}
                className="w-24 h-auto md:w-40 md:pt-5 object-contain mt-0 mr-0"
              />
            </div>
          </div>
        </header>

        {/* --- Transparent Sidebar --- */}
        <aside className="fixed left-0 top-1/2 -translate-y-1/2 z-40 ml-4 hidden md:flex flex-col items-center bg-black/10 backdrop-blur-sm border border-white/5 rounded-2xl py-8 px-3 gap-8 shadow-2xl">
          {sidebarItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group flex flex-col items-center gap-1 transition-all hover:scale-110"
            >
              <div className="text-white group-hover:text-neon-cyan transition-colors">
                {item.icon}
              </div>
              <span
                style={{ fontFamily: "var(--font-boston)" }}
                className="text-[10px] uppercase tracking-wider text-white/70 group-hover:text-white transition-colors"
              >
                {item.name}
              </span>
            </a>
          ))}
        </aside>

        {children}
      </body>
    </html>
  );
}
