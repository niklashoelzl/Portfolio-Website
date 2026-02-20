import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

/* === About Section === */
export function AboutSection() {
    return (
        <section id="About" className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#1f2937_20%,#000000_100%,transparent_80%)] flex items-center justify-center px-4">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 py-24">

                {/* === Left - Intro + Motivation === */}
                <div className="flex flex-col justify-center space-y-8">
                    <div>
                        <h2 className="text-5xl font-bold text-white mb-4">About <span className="text-blue-500">Me</span></h2>
                        <p className="text-gray-400 leading-relaxed">
                            Hey, i'm Niklas — from Stralsund, Germany.
                        </p>
                    </div>

                    {/* === Motivation === */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">What drives me</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Placeholder
                        </p>
                    </div>

                    {/* === Status + Avalability === */}
                    <div className="flex flex-col gap-3">

                        <div className="flex items-center gap-3 text-sm text-gray-400">
                            <div className="w-10 h-10 rounded-full bg-[#273449] flex items-center justify-center">
                                🎓
                            </div>
                            <div className="flex flex-col">
                                <span>
                                    Student @{" "}
                                    <a href="https://www.hochschule-stralsund.de" target="_blank" className="underline hover:text-white transition-colors duration-200">
                                        Hochschule Stralsund
                                    </a>
                                </span>
                                <span>Software Development and Artificial Intelligence (B.Sc.)</span>
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                            <div className="w-10 h-10 rounded-full bg-[#273449] flex items-center justify-center">
                                🌍
                            </div>
                            <span>German (Nativ Language) · English (fluent)</span>
                        </div>

                        {/* Avalability */}
                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-10 h-10 rounded-full bg-[#273449] flex items-center justify-center">
                                {/* Green dot, if available */}
                                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"/>
                            </div>
                            <span className="text-green-400 font-medium">Open for work</span>
                        </div>

                    </div>
                </div>

                {/* === Right - Tech Stack === */}
                <div className="flex flex-col justify-center space-y-8">
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Tech Stack</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: <SiNextdotjs size={20} />,      label: "Next.js",       color: "text-white" },
                                { icon: <FaReact size={20} />,          label: "React",         color: "text-[#61DAFB]" },
                                { icon: <SiTypescript size={20} />,     label: "TypeScript",    color: "text-[#3178C6]" },
                                { icon: <SiTailwindcss size={20} />,    label: "Tailwind",      color: "text-[#38BDF8]" },
                                { icon: <FaNodeJs size={20} />,         label: "Node.js",       color: "text-[#539E43]" },
                                { icon: <FaGitAlt size={20} />,         label: "Git",           color: "text-[#F05032]" },
                            ].map(({ icon, label, color }, i) => (
                                <div key={i} className="flex items-center gap-3 bg-[#273449]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-400 hover:text-white hover:border-white/30 transition-all duration-200">
                                    <span className={color}>{icon}</span>
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}