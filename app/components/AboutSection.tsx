import { FaGitAlt, FaPython, FaJava  } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiIntellijidea  } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

/* === Skill Categories === */
const categories = [
    {
        title:      "Frontend",
        accent:     "rgba(59,130,246,0.15)",
        ring:       "rgba(59,130,246,0.25)",
        labelColor: "text-blue-400",
        skills: [
            { icon: <SiNextdotjs size={18} />,   label: "Next.js",    color: "text-white"      },
            { icon: <SiTypescript size={18} />,   label: "TypeScript", color: "text-[#3178C6]"  },
            { icon: <SiTailwindcss size={18} />,  label: "Tailwind",   color: "text-[#38BDF8]"  },
        ],
    },
    {
        title:      "Backend",
        accent:     "rgba(139,92,246,0.15)",
        ring:       "rgba(139,92,246,0.25)",
        labelColor: "text-violet-400",
        skills: [
            { icon: <FaPython   size={18} />,       label: "Python",                color: "text-[#F7CC42]"  },
            { icon: <FaJava     size={18} />,       label: "Java / JavaFX",         color: "text-[#ED8B00]"  },
        ],
    },
    {
        title:      "AI & Data",
        accent:     "rgba(6,182,212,0.15)",
        ring:       "rgba(6,182,212,0.25)",
        labelColor: "text-cyan-400",
        skills: [
        ],
    },
    {
        title:      "Tools",
        accent:     "rgba(255,255,255,0.05)",
        ring:       "rgba(255,255,255,0.12)",
        labelColor: "text-gray-300",
        skills: [
            { icon: <FaGitAlt       size={18} />,           label: "Git",                   color: "text-[#F05032]"  },
            { icon: <SiIntellijidea size={18} />,           label: "IntelliJ IDEA",         color: "text-[#000000]"  },
            { icon: <VscVscode      size={18} />,           label: "VS Code",               color: "text-[#007ACC]"  },
        ],
    },
] as const;

/* === Category Card – Glassmorphism === */
function CategoryCard({ cat }: { cat: typeof categories[number] }) {
    return (
        <div className="relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            style={{
                background:           "rgba(255,255,255,0.04)",
                backdropFilter:       "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border:               `1px solid ${cat.ring}`,
                boxShadow:            `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 40px ${cat.accent}`,
            }}
        >
            {/* Bottom inner glow */}
            <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none rounded-b-3xl"
                style={{ background: `radial-gradient(ellipse at 50% 100%, ${cat.accent}, transparent 70%)` }}
            />

            {/* Top inner shine */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

            {/* Card Content */}
            <div className="relative p-6 flex flex-col gap-5">

                {/* Category Label */}
                <h3 className={`text-xs font-semibold uppercase tracking-widest ${cat.labelColor}`}>
                    {cat.title}
                </h3>

                {/* 2-column horizontal skill rows (like AboutSection before) */}
                <div className="grid grid-cols-2 gap-3">
                    {cat.skills.map(({ icon, label, color }) => (
                        <div key={label} className="flex items-center gap-3 bg-white/5 border border-white/8 rounded-xl px-3 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200">
                            <span className={`${color} shrink-0`}>{icon}</span>
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* === Skills Section === */
export function SkillsSection() {
    return (
        <section id="About" aria-label="Skills" className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#1f2937_20%,#000000_100%,transparent_80%)] flex flex-col items-center justify-center px-8 sm:px-16 py-24 relative overflow-hidden">
            {/* Ambient blobs */}
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Section Header */}
            <div className="flex flex-col items-center mb-16 z-10 text-center">
                <h2 className="text-6xl font-bold text-white">
                    Tech Stack &amp; <span className="text-blue-500">Skills</span>
                </h2>
                <p className="text-gray-400 text-sm mt-4 max-w-md">
                    Technologies and tools I use to bring ideas to life — from interface to intelligence.
                </p>
            </div>

            {/* 2×2 Category Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl z-10">
                {categories.map((cat) => (
                    <CategoryCard key={cat.title} cat={cat} />
                ))}
            </div>
        </section>
    );
}