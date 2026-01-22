import Image from "next/image";

export default function Home() {
  return (
    /* We keep the container simple for the Home view. 
       Since scrolling is now handled in globals.css, this will 
       perfectly frame your hero content.
    */
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* --- BACKGROUND LAYER --- */}
      <div className="fixed inset-0 -z-50 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bg-video2.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlay to help the logo and button pop */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* --- MAIN HERO CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center justify-center p-4">
        {/* Center Logo: Sized for the 'Simulated Paradigm' aesthetic */}
        <Image
          src="/logo-date4.png"
          alt="HackAnnova 5.0 Hero Logo"
          width={1000}
          height={600}
          priority
          className="w-[90vw] md:w-[70vw] lg:w-[60vw] max-w-[600px] h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-4"
        />

        {/* --- REGISTRATION SECTION --- */}
        <div className="flex flex-col items-center gap-4 mt-6">
          {/* Label: Using Boston Caps via CSS variable */}
          <span
            style={{ fontFamily: "var(--font-boston)" }}
            className="text-white/90 text-sm md:text-2xl uppercase tracking-[0.2em] animate-pulse"
          >
            Register for Free
          </span>

          {/* Devfolio Logo Button: Perfected Shape with White Background */}
          <a
            href="YOUR_DEVFOLIO_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center 
                       px-8 py-3 md:px-12 md:py-4 
                       bg-white 
                       border border-neon-cyan/50 
                       transition-all duration-300 
                       hover:border-neon-cyan 
                       hover:shadow-[0_0_40px_rgba(0,243,255,0.4)] 
                       rounded-none"
          >
            {/* Devfolio Logo: Scaled up as requested */}
            <Image
              src="/devfolio1.png"
              alt="Devfolio"
              width={200}
              height={100}
              className="h-7 md:h-10 w-auto object-contain brightness-110"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
