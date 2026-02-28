import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";

/* === Shared Social Links === */
const socialLinks = [
    { icon: <FaGithub size={20} />,     href: "https://github.com/",                label: "GitHub"    },
    { icon: <FaLinkedin size={20} />,   href: "https://linkedin.com/",              label: "LinkedIn"  },
    { icon: <SiLeetcode size={20} />,   href: "https://leetcode.com/",              label: "LeetCode"   },
    { icon: <FaInstagram size={20} />,  href: "https://instagram.com/",             label: "Instagram" },
    { icon: <MdEmail size={20} />,      href: "mailto:niklashoelzl00@gmail.com",    label: "Email" },
];

const navLinks = [
    { href: "#Home",        label: "Home"     },
    { href: "#Projects",    label: "Projects" },
    { href: "#Skills",      label: "Skills"    },
    { href: "#Contact",     label: "Contact"  },
];

export function Footer() {
    return (
        <footer aria-label="Footer"className="bg-[#1f2937] border-t border-white/10 text-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* === Top - 3 Columns === */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

                    {/* === Column 1 - Name + Description === */}
                    <div className="space-y-3">
                        <span className="text-2xl font-bold text-white">Niklas Hölzl</span>
                        <p className="text-sm leading-relaxed">
                            Developer & Designer from Germany. I build modern web experiences with a focus on design and performance.
                        </p>
                    </div>

                    {/* === Column 2 - Navigation === */}
                    <nav aria-label="Footer Navigation">
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            {navLinks.map(({ href, label }) => (
                                <li key={label}>
                                    <a href={href} className="hover:text-white transition-colors duration-200">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* === Column 3 - Social Links === */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Connect</h3>
                        <ul className="space-y-3 text-sm">
                            {socialLinks.map(({ icon, href, label }) => (
                                <li key={label}>
                                    <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"} aria-label={label} className="flex items-center gap-3 hover:text-white transition-colors duration-200">
                                        {icon}
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* === Bottom - Copyright + Location === */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs">© {new Date().getFullYear()} Niklas Hölzl. All rights reserved.</p>
                    <p className="flex items-center gap-2 text-xs">
                        <IoLocationSharp size={16} />
                        Stralsund, Germany
                    </p>
                </div>

            </div>
        </footer>
    );
}