import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";

export function HeroSection() {
  return (
    <section
      id="Home"
      aria-label="Hero"
      className="flex min-h-screen items-start gap-8 bg-[radial-gradient(circle_at_20%_20%,#1f2937_20%,#000000_100%,transparent_80%)] px-8 sm:px-16 xl:px-96"
    >
      {/* LEFT – Text */}
      <div className="mt-40 flex flex-1 flex-col space-y-6">
        <h1 className="text-7xl font-bold text-white">
          Hello, I&#39;m{" "}
          <span className="animate-text inline-block text-blue-500">Niklas Hölzl</span>
        </h1>

        {/* === Location + Open to Work === */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <IoLocationSharp size={16} className="shrink-0 text-blue-500" />
            <span>Stralsund, Germany</span>
          </div>

          {/* Divider */}
          <span className="hidden h-4 w-px bg-white/20 sm:block" />

          {/* Open to Work Badge */}
          <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-400" />
            <span className="text-xs font-medium text-green-400">Open to Work</span>
          </div>
        </div>

        {/* Description */}
        <div className="flex max-w-lg flex-col space-y-3 text-gray-400">
          <p>
            I am an inquisitive student pursuing a B.Sc. in Software Development and Artificial
            Intelligence at the University of Applied Sciences Stralsund.
          </p>
          <p>
            My goal is to become an AI Engineer, building intelligent systems that solve real-world
            problems and create measurable impact.
          </p>
          <p>
            Driven by curiosity and a strong growth mindset, I constantly strive to improve both
            myself and the products I work on. I want to understand how things work, and use that
            understanding to build better products and solve real-world problems.
          </p>
        </div>
      </div>

      {/* RIGHT – Picture */}
      <div className="relative mt-40 h-100 w-100 shrink-0 overflow-hidden rounded-4xl">
        <Image
          src="/Placeholder.png"
          alt="Niklas Hölzl"
          fill
          className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </section>
  );
}
