import Image from "next/image";

/* === Hero Section === */
export function HeroSection() {
    return (
        <section id="Home" className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#1f2937_20%,#000000_100%,transparent_80%)] flex items-start px-96 gap-8">
            {/* LEFT – Text */}
            <div className="flex flex-col space-y-6 flex-1 mt-40">
                <h1 className="text-7xl font-bold">
                    Hello, I'm{" "}
                    <span className="text-blue-500 animate-text inline-block">
                        Niklas Hölzl
                    </span>
                </h1>
                <div className="flex flex-col space-y-3 text-gray-400 max-w-lg">
                    <p>I am an inquisitive student pursuing a B.Sc. in Software Development and Artificial Intelligence at the University of Applied Sciences Stralsund.</p>
                    <p>My goal is to become an AI Engineer, building intelligent systems that solve real-world problems and create measurable impact.</p>
                    <p>Driven by curiosity and a strong growth mindset, I constantly strive to improve both myself and the products I work on. Excellence is my standard - not just competence.</p>
                </div>
            </div>

            {/* RIGHT – Picture */}
            <div className="relative w-100 h-100 rounded-4xl overflow-hidden shrink-0 mt-40">
                <Image src="/Placeholder.png" alt="Niklas Hölzl" fill className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"/>
            </div>
        </section>
    );
}

