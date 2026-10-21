import emailjs from "@emailjs/browser";

export type ContactForm = { name: string; email: string; message: string };

export const EMPTY_FORM: ContactForm = { name: "", email: "", message: "" };

/* === Validation === */
export function validateContactForm(form: ContactForm): string | null {
  if (!form.name.trim()) return "Please enter your name.";
  if (!form.email.trim()) return "Please enter your email.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email address.";
  if (!form.message.trim()) return "Please enter a message.";
  return null;
}

/* === EmailJS === */
export function sendContactMail(form: ContactForm) {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    { name: form.name, email: form.email, message: form.message },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
  );
}
