import { SkillCategoryCard } from "@/components/ui/SkillCategoryCard";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  return (
    <section
      id="Skills"
      aria-label="Skills"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#1f2937_20%,#000000_100%,transparent_80%)] px-8 py-24 sm:px-16"
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute top-20 left-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[100px]" />

      {/* Section Header */}
      <div className="z-10 mb-16 flex flex-col items-center text-center">
        <h2 className="text-6xl font-bold text-white">
          Tech Stack &amp; <span className="text-blue-500">Skills</span>
        </h2>
        <p className="mt-4 max-w-md text-sm text-gray-400">
          Technologies and tools I use to bring ideas to life — from interface to intelligence.
        </p>
      </div>

      {/* 2×2 Category Grid */}
      <div className="z-10 grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <SkillCategoryCard key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
}
