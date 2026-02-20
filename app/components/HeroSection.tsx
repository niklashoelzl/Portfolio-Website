import Image from "next/image";

/* === Hero Section === */
export function HeroSection() {
    return (
        <section id="Home" className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#1f2937_20%,#000000_100%,transparent_80%)]">
            <h1 className="absolute top-75 left-97.5 w-lg text-7xl font-bold mb-4">
                Hello, I'm <span className="text-blue-500 animate-text inline-block">Niklas Hölzl</span>
            </h1>
            <div className="absolute top-60 left-260 w-100 h-100 rounded-4xl overflow-hidden">
                <Image src="/Placeholder.png" alt="Niklas Hölzl" fill className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"/>
            </div>
        </section>
    );
}

