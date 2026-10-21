# Niklas Hölzl - Portfolio

Personal portfolio website built with **Next.js 15** and **TypeScript**. Currently in development - not yet deployed.

---

## Sections

| Section | Status |
|---|---|
| Navbar — sticky, scroll-hide, active-section highlighting, mobile menu | ✅ Done |
| Hero — intro, "Open to Work" badge, profile image | ✅ Done |
| Projects — card grid with GitHub links, live demo & download support | ❌​ 1 of 3 projects filled |
| Skills — categorized tech stack (Frontend, Backend, AI & Data, Tools) | ❌​ AI & Data section empty |
| Contact — EmailJS form with validation & status feedback | ✅ Done |
| Footer — navigation, social links, location | ✅ Done |

---

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Email:** EmailJS
- **Icons:** react-icons

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
npm run build   # Production build
npm run lint    # ESLint
```

---

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

You can get these from [emailjs.com](https://www.emailjs.com/).

---

## Project Structure

```
app/
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── ContactSection.tsx
│   ├── DownloadButton.tsx
│   └── Footer.tsx
├── globals.css
├── layout.tsx
└── page.tsx
public/
└── Placeholder.png
```

---

## Author

**Niklas Hölzl** - Student, B.Sc. Software Development & AI, Hochschule Stralsund
