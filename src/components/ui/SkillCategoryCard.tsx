import type { SkillCategory } from "@/data/skills";

export function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <div
      className="relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: `1px solid ${category.ring}`,
        boxShadow: `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 40px ${category.accent}`,
      }}
    >
      {/* Bottom inner glow */}
      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-24 rounded-b-3xl"
        style={{
          background: `radial-gradient(ellipse at 50% 100%, ${category.accent}, transparent 70%)`,
        }}
      />

      {/* Top inner shine */}
      <div className="absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

      {/* Card Content */}
      <div className="relative flex flex-col gap-5 p-6">
        {/* Category Label */}
        <h3 className={`text-xs font-semibold tracking-widest uppercase ${category.labelColor}`}>
          {category.title}
        </h3>

        {/* 2-column skill rows */}
        <div className="grid grid-cols-2 gap-3">
          {category.skills.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/5 px-3 py-2.5 text-sm text-gray-400 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <span className={`${color} shrink-0`}>
                <Icon size={18} />
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
