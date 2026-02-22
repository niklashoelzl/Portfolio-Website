"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

/* === NavItem Component === */
function NavItem({ href, label, activeSection, onClick }: { href: string; label: string; activeSection: string; onClick?: () => void }) {
    const sectionId = href.replace("#", "");
    const isActive = activeSection === sectionId;

    return (
        <a href={href} onClick={onClick} className={`px-4 py-2 text-sm rounded-full font-medium transition-all duration-200 ${isActive ? "bg-blue-50 text-black" : "text-gray-400 hover:text-white hover:bg-white/5 hover:ring-1 hover:ring-white/20"}`}>
            {label}
        </a>
    );
}

const NAV_LINKS = [
    { href: "#Home",    label: "Home"    },
    { href: "#Projects", label: "Projects" },
    { href: "#About",   label: "About"   },
    { href: "#Contact", label: "Contact" },
];

export function Navbar() {

    const [showNav,       setShowNav]       = useState(true);
    const [scrolled,      setScrolled]      = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    const [mobileOpen,    setMobileOpen]    = useState(false);
    const lastY = useRef(0);

    /* === Scroll Behavior (Stale-Closure-Safe via useRef) === */
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setScrolled(currentY > 50);
            if (currentY > lastY.current + 10)      setShowNav(false);
            else if (currentY < lastY.current - 10) setShowNav(true);
            lastY.current = currentY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* === Active Section Highlighting === */
    useEffect(() => {
        const observers = NAV_LINKS.map(({ href }) => {
            const id = href.replace("#", "");
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

    /* === Close mobile menu on resize to desktop === */
    useEffect(() => {
        const handleResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <nav aria-label="Hauptnavigation" className={`w-full sticky top-0 z-50 bg-[#1f2937] backdrop-blur-md nav-glow-base transition-transform duration-300 ${showNav ? "translate-y-0" : "-translate-y-full"} ${scrolled ? "nav-glow" : ""}`}>
                <div className="lg:px-8 max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex h-21 justify-between items-center">

                        {/* === Left - Logo + Name === */}
                        <div className="flex-1">
                            <a href="#Home" className="flex items-center space-x-3">
                                <div className="relative w-10 h-10">
                                    <Image src="/Placeholder.png" alt="Niklas Hölzl" fill className="rounded-full object-cover" />
                                </div>
                                <span className="text-2xl font-bold text-white">Niklas Hölzl</span>
                            </a>
                        </div>

                        {/* === Center - Desktop Navigation === */}
                        <div className="hidden md:flex flex-1 justify-center">
                            <div className="flex items-center bg-[#273449]/80 rounded-full p-2 space-x-2">
                                {NAV_LINKS.map(({ href, label }) => (
                                    <NavItem key={href} href={href} label={label} activeSection={activeSection} />
                                ))}
                            </div>
                        </div>

                        {/* === Right - CTA (Desktop) + Hamburger (Mobile) === */}
                        <div className="flex flex-1 justify-end items-center gap-4">
                            <a href="#Contact" className="hidden md:inline-flex px-5 py-2 text-sm font-medium rounded-full bg-[#273449]/80 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-50 hover:text-black">
                                Let's Talk ➜
                            </a>

                            {/* Hamburger Button (Mobile only) */}
                            <button
                                aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
                                onClick={() => setMobileOpen((prev) => !prev)} className="md:hidden text-gray-400 hover:text-white transition-colors duration-200 p-2">
                                {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                            </button>
                        </div>

                    </div>
                </div>

                {/* === Mobile Menu Dropdown === */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="flex flex-col items-start gap-1 px-6 pb-6 pt-2 bg-[#1f2937] border-t border-white/10">
                        {NAV_LINKS.map(({ href, label }) => (
                            <NavItem
                                key={href}
                                href={href}
                                label={label}
                                activeSection={activeSection}
                                onClick={() => setMobileOpen(false)}
                            />
                        ))}
                        <a href="#Contact" onClick={() => setMobileOpen(false)} className="mt-3 w-full text-center px-5 py-2 text-sm font-medium rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200">
                            Let's Talk ➜
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}