import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video Layer */}
      <div className="fixed inset-0 -z-50 w-full h-full ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bg-video2.mp4" type="video/mp4" />
        </video>

        {/* Optional: Add a subtle overlay if the video makes the logo hard to see */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* --- Main Hero Logo Section --- */}
      <div className="relative z-10 flex flex-col items-center justify-center p-4">
        <Image
          src="/logo-date4.png"
          alt="HackAnnova 5.0 Hero Logo"
          width={1200} // Increased base width for higher quality scaling
          height={600}
          priority // Ensures the logo loads immediately
          className="w-[90vw] md:w-[50vw] lg:w-[50vw] max-w-[1000px] h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        />
      </div>
    </main>
  );
}
