"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {

    const [showNav, setShowNav] = useState(true);
    const [lastY, setLastY] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    /* === Scroll Behavior === */
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setScrolled(currentY > 50);
            if (currentY > lastY + 10) setShowNav(false);
            else if (currentY < lastY - 10) setShowNav(true);
            setLastY(currentY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastY]);

    /* === Active Section Highlighting === */
    useEffect(() => {
        const sections = ["Home", "Projects", "About", "Contact"];
        const observers = sections.map((id) => {
            const el = document.getElementById(id);
            if (!el) return null;
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { threshold: 0.4 }
            );
            observer.observe(el);
            return observer;
        });
        return () => observers.forEach((o) => o?.disconnect());
    }, []);

    /* === NavItem Component === */
    function NavItem({ href, label }: { href: string; label: string }) {
        const sectionId = href.replace("#", "");
        const isActive = activeSection === sectionId;

        return (
            <a
                href={href}
                className={`
                    px-4 py-2 text-sm rounded-full font-medium transition-all duration-200
                    ${isActive
                        ? "bg-blue-50 text-black"
                        : "text-gray-400 hover:text-white hover:bg-white/5 hover:ring-1 hover:ring-white/20"
                    }
                `}
            >
                {label}
            </a>
        );
    }

    /* === Navbar === */
    return (
        <nav className={`w-full sticky top-0 z-50 bg-[#1f2937] backdrop-blur-md nav-glow-base transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'} ${scrolled ? 'nav-glow' : ''}`}>
            <div className="lg:px-8 max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex h-21 justify-between items-center">

                    {/* === Left - Logo + Name === */}
                    <div className="flex-1">
                        <a href="#Home" className="flex items-center space-x-3">
                            <div className="relative w-10 h-10">
                                <Image src="/Placeholder.png" alt="Niklas Hölzl" fill className="rounded-full object-cover" />
                            </div>
                            <span className="text-2xl font-['Pacifico'] text-primary">Niklas Hölzl</span>
                        </a>
                    </div>

                    {/* === Center - Navigation === */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <div className="flex items-center bg-[#273449]/80 rounded-full p-2 space-x-2">
                            <NavItem href="#Home" label="Home" />
                            <NavItem href="#Projects" label="Projects" />
                            <NavItem href="#About" label="About" />
                            <NavItem href="#Contact" label="Contact" />
                        </div>
                    </div>

                    {/* === Right - CTA Button === */}
                    <div className="hidden md:flex flex-1 justify-end">
                        <a href="#Contact" className="px-5 py-2 text-sm font-medium rounded-full bg-[#273449]/80 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-50 hover:text-black">
                            Let's Talk ➜
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
}

