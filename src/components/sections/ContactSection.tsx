"use client";

import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { ImSpinner8 } from "react-icons/im";
import { socialLinks } from "@/data/social-links";
import { EMPTY_FORM, sendContactMail, validateContactForm } from "@/lib/contact";

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const error = validateContactForm(form);
    if (error) {
      alert(error);
      return;
    }

    setStatus("loading");

    try {
      await sendContactMail(form);
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

  return (
    <section
      id="Contact"
      aria-label="Kontakt"
      className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_20%_20%,#1f2937_20%,#000000_100%,transparent_80%)] px-4"
    >
      <div className="grid w-full max-w-5xl grid-cols-1 gap-16 py-24 md:grid-cols-2">
        {/* === Left - Info === */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h2 className="mb-4 text-5xl font-bold text-white">
              Let&#39;s <span className="text-blue-500">Talk</span>
            </h2>
            <p className="leading-relaxed text-gray-400">
              Have a project in mind or just want to say hi? Feel free to reach out – I&#39;ll get
              back to you as soon as possible.
            </p>
          </div>

          {/* === Direct Email === */}
          <a
            href="mailto:niklashoelzl00@gmail.com"
            className="group flex items-center gap-3 text-gray-400 transition-colors duration-200 hover:text-white"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#273449] transition-colors duration-200 group-hover:bg-blue-500">
              <MdEmail size={18} />
            </div>
            <span className="text-sm">niklashoelzl00@gmail.com</span>
          </a>

          {/* === Social Links === */}
          <div>
            <p className="mb-4 text-xs tracking-widest text-gray-500 uppercase">Find me on</p>
            <div className="flex gap-4">
              {socialLinks
                .filter(({ label }) => label !== "Email")
                .map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#273449] text-gray-400 transition-all duration-200 hover:bg-blue-500 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                ))}
            </div>
          </div>
        </div>

        {/* === Right - Contact Form === */}
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
          {/* === Name + Email Row === */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs tracking-widest text-gray-500 uppercase">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Max Mustermann"
                className="rounded-xl border border-white/10 bg-[#273449]/60 px-4 py-3 text-sm text-white transition-colors duration-200 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs tracking-widest text-gray-500 uppercase">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="max@mustermann.de"
                className="rounded-xl border border-white/10 bg-[#273449]/60 px-4 py-3 text-sm text-white transition-colors duration-200 focus:outline-none"
              />
            </div>
          </div>

          {/* === Message === */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs tracking-widest text-gray-500 uppercase">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              placeholder="Hey Niklas, I've got an interesting project..."
              className="resize-none rounded-xl border border-white/10 bg-[#273449]/60 px-4 py-3 text-sm text-white transition-colors duration-200 focus:outline-none"
            />
          </div>

          {/* === Submit Button === */}
          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <ImSpinner8 size={14} className="animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message ➜"
            )}
          </button>

          {/* === Status Feedback (auto-reset after 5 Sec) === */}
          {status === "success" && (
            <p role="status" className="text-center text-sm text-green-400">
              ✓ Message sent! I&#39;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="text-center text-sm text-red-400">
              ✗ Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
