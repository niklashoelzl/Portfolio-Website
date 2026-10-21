import { IoLocationSharp } from "react-icons/io5";
import { socialLinks } from "@/data/social-links";
import { navLinks } from "@/data/nav-links";

export function Footer() {
  return (
    <footer aria-label="Footer" className="border-t border-white/10 bg-[#1f2937] text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* === Top - 3 Columns === */}
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* === Column 1 - Name + Description === */}
          <div className="space-y-3">
            <span className="text-2xl font-bold text-white">Niklas Hölzl</span>
            <p className="text-sm leading-relaxed">
              Developer & Designer from Germany. I build modern web experiences with a focus on
              design and performance.
            </p>
          </div>

          {/* === Column 2 - Navigation === */}
          <nav aria-label="Footer Navigation">
            <h3 className="mb-3 text-sm font-semibold tracking-wider text-white uppercase">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map(({ href, label }) => (
                <li key={label}>
                  <a href={href} className="transition-colors duration-200 hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* === Column 3 - Social Links === */}
          <div>
            <h3 className="mb-3 text-sm font-semibold tracking-wider text-white uppercase">
              Connect
            </h3>
            <ul className="space-y-3 text-sm">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    aria-label={label}
                    className="flex items-center gap-3 transition-colors duration-200 hover:text-white"
                  >
                    <Icon size={20} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* === Bottom - Copyright + Location === */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
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
