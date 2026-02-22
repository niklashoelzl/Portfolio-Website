import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";

/* === Hero Section === */
export function HeroSection() {
    return (
        <section
            id="Home"
            aria-label="Hero"
            className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#1f2937_20%,#000000_100%,transparent_80%)] flex items-start px-8 sm:px-16 xl:px-96 gap-8"
        >
            {/* LEFT – Text */}
            <div className="flex flex-col space-y-6 flex-1 mt-40">

                <h1 className="text-7xl font-bold text-white">
                    Hello, I'm{" "}
                    <span className="text-blue-500 animate-text inline-block">
                        Niklas Hölzl
                    </span>
                </h1>

                {/* === Location + Open to Work === */}
                <div className="flex flex-wrap items-center gap-4">

                    {/* Location */}
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <IoLocationSharp size={16} className="text-blue-500 shrink-0" />
                        <span>Stralsund, Germany</span>
                    </div>

                    {/* Divider */}
                    <span className="w-px h-4 bg-white/20 hidden sm:block" />

                    {/* Open to Work Badge */}
                    <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                        <span className="text-green-400 text-xs font-medium">Open to Work</span>
                    </div>

                </div>

                {/* Description */}
                <div className="flex flex-col space-y-3 text-gray-400 max-w-lg">
                    <p>I am an inquisitive student pursuing a B.Sc. in Software Development and Artificial Intelligence at the University of Applied Sciences Stralsund.</p>
                    <p>My goal is to become an AI Engineer, building intelligent systems that solve real-world problems and create measurable impact.</p>
                    <p>Driven by curiosity and a strong growth mindset, I constantly strive to improve both myself and the products I work on. I want to understand how things work, and use that understanding to build better products and solve real-world problems.</p>
                </div>

            </div>

            {/* RIGHT – Picture */}
            <div className="relative w-[400px] h-[400px] rounded-[2rem] overflow-hidden shrink-0 mt-40">
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

