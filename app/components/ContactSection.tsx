"use client"

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImSpinner8 } from "react-icons/im";

const socialLinks = [
    { icon: <FaGithub size={18} />,    href: "https://github.com/",    label: "GitHub"    },
    { icon: <FaLinkedin size={18} />,  href: "https://linkedin.com/",  label: "LinkedIn"  },
    { icon: <FaTwitter size={18} />,   href: "https://twitter.com/",   label: "Twitter"   },
    { icon: <FaInstagram size={18} />, href: "https://instagram.com/", label: "Instagram" },
];

const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

type Status = "idle" | "loading" | "success" | "error";

const EMPTY_FORM = { name: "", email: "", message: "" };

export function ContactSection() {

    const [form,   setForm]   = useState(EMPTY_FORM);
    const [status, setStatus] = useState<Status>("idle");

    /* === Form Handlers === */
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    /* === Manual validation === */
    function validate(): string | null {
        if (!form.name.trim())                          return "Please enter your name.";
        if (!form.email.trim())                         return "Please enter your email.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email address.";
        if (!form.message.trim())                       return "Please enter a message.";
        return null;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const error = validate();
        if (error) {
            alert(error);
            return;
        }

        setStatus("loading");

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                { name: form.name, email: form.email, message: form.message },
                EMAILJS_PUBLIC_KEY
            );
            setStatus("success");
            setForm(EMPTY_FORM);

            /* === Auto-Reset after 5 Sec === */
            setTimeout(() => setStatus("idle"), 5000);

        } catch (err) {
            console.error("Error sending email:", err);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    }

    const isLoading = status === "loading";

    /* === Contact Section === */
    return (
        <section id="Contact"aria-label="Kontakt" className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#1f2937_20%,#000000_100%,transparent_80%)] flex items-center justify-center px-4">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 py-24">

                {/* === Left - Info === */}
                <div className="flex flex-col justify-center space-y-8">
                    <div>
                        <h2 className="text-5xl font-bold text-white mb-4">
                            Let's <span className="text-blue-500">Talk</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Have a project in mind or just want to say hi? Feel free to reach out – I'll get back to you as soon as possible.
                        </p>
                    </div>

                    {/* === Direct Email === */}
                    <a href="mailto:niklashoelzl00@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group">
                        <div className="w-10 h-10 rounded-full bg-[#273449] flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-200">
                            <MdEmail size={18} />
                        </div>
                        <span className="text-sm">niklashoelzl00@gmail.com</span>
                    </a>

                    {/* === Social Links === */}
                    <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Find me on</p>
                        <div className="flex gap-4">
                            {socialLinks.map(({ icon, href, label }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-full bg-[#273449] flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500 transition-all duration-200">
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* === Right - Contact Form === */}
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

                    {/* === Name + Email Row === */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-500">Name</label>
                            <input id="name"type="text"name="name"value={form.name}onChange={handleChange}placeholder="Max Mustermann" className="bg-[#273449]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors duration-200"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-500">Email</label>
                            <input id="email"type="email"name="email"value={form.email}onChange={handleChange}placeholder="max@mustermann.de"className="bg-[#273449]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors duration-200"/>
                        </div>
                    </div>

                    {/* === Message === */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-500">Message</label>
                        <textarea id="message"name="message"value={form.message}onChange={handleChange}rows={6}placeholder="Hey Niklas, I've got an interesting project..."className="bg-[#273449]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors duration-200 resize-none"/>
                    </div>

                    {/* === Submit Button === */}
                    <button type="submit"disabled={isLoading}className="mt-2 px-6 py-3 rounded-xl bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                        {isLoading ? (
                            <>
                                <ImSpinner8 size={14} className="animate-spin" />
                                Sending...
                            </>
                        ) : "Send Message ➜"}
                    </button>

                    {/* === Status Feedback (auto-reset after 5 Sec) === */}
                    {status === "success" && (
                        <p role="status" className="text-sm text-green-400 text-center">
                            ✓ Message sent! I'll get back to you soon.
                        </p>
                    )}
                    {status === "error" && (
                        <p role="alert" className="text-sm text-red-400 text-center">
                            ✗ Something went wrong. Please try again later.
                        </p>
                    )}
                </form>

            </div>
        </section>
    );
}

