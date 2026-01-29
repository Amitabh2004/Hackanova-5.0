import "./globals.css";
import localFont from "next/font/local";
import ClientLayout from "./ClientLayout";
import { CLD_ASSETS } from "@/utils/cloudinary";

const bostonCaps = localFont({
  src: "../public/fonts/BostonCaps-nqZJ.ttf",
  variable: "--font-boston",
});

export const metadata = {
  title: "Hackanova 5.0",
  description: "Hackathon by TSDW",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        {/* Devfolio logo visible for crawlers */}
        <div style={{ display: "none" }} aria-hidden="true">
          <img src="/devfolio1.png" alt="DEVFOLIO LOGO" />
        </div>

        {/* Client interactive layout */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
