import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

export function Footer() {
    return (
        <footer className="bg-[#1f2937] border-t border-white/10 text-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* === Top - 3 Columns === */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

                    {/* === Column 1 - Name + Description === */}
                    <div className="space-y-3">
                        <span className="text-2xl font-['Pacifico'] text-white">Niklas Hölzl</span>
                        <p className="text-sm leading-relaxed">
                            Developer & Designer from Germany. I build modern web experiences with a focus on design and performance.
                        </p>
                    </div>

                    {/* === Column 2 - Navigation === */}
                    <div className="space-y-3">
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#Home" className="hover:text-white transition-colors duration-200">Home</a></li>
                            <li><a href="#Projects" className="hover:text-white transition-colors duration-200">Projects</a></li>
                            <li><a href="#About" className="hover:text-white transition-colors duration-200">About</a></li>
                            <li><a href="#Contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
                        </ul>
                    </div>

                    {/* === Column 3 - Social Links === */}
                    <div className="space-y-3">
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Connect</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="https://github.com/" target="_blank" className="flex items-center gap-3 hover:text-white transition-colors duration-200"><FaGithub size={20} /> Github</a></li>
                            <li><a href="https://linkedin.com/" target="_blank" className="flex items-center gap-3 hover:text-white transition-colors duration-200"><FaLinkedin size={20} /> LinkedIn</a></li>
                            <li><a href="https://twitter.com/" target="_blank" className="flex items-center gap-3 hover:text-white transition-colors duration-200"><FaTwitter size={20} /> Twitter</a></li>
                            <li><a href="https://instagram.com/" target="_blank" className="flex items-center gap-3 hover:text-white transition-colors duration-200"><FaInstagram size={20} /> Instagram</a></li>
                            <li><a href="mailto:niklashoelzl00@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors duration-200"><MdEmail size={20} /> Email</a></li>
                        </ul>
                    </div>
                </div>

                {/* === Bottom - Copyright + Location === */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs">© {new Date().getFullYear()} Niklas Hölzl. All rights reserved.</p>
                    <p className="flex items-center gap-2 text-xs"><IoLocationSharp size={16} /> Stralsund, Germany</p>
                </div>

            </div>
        </footer>
    );
}

