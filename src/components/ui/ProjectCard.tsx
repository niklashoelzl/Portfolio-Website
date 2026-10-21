import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import DownloadButton from "@/components/ui/DownloadButton";
import type { Project, Variant } from "@/data/projects";

type VariantStyles = {
  gradient: string;
  orb: string;
  tagBg: string;
  tagBorder: string;
  tagText: string;
  linkText: string;
};

const variants: Record<Variant, VariantStyles> = {
  blue: {
    gradient: "from-blue-500/20 to-cyan-500/20",
    orb: "bg-blue-500",
    tagBg: "bg-blue-500/10",
    tagBorder: "border-blue-500/40",
    tagText: "text-blue-400",
    linkText: "text-blue-400 hover:text-blue-300",
  },
  violet: {
    gradient: "from-violet-500/20 to-blue-500/20",
    orb: "bg-violet-500",
    tagBg: "bg-violet-500/10",
    tagBorder: "border-violet-500/40",
    tagText: "text-violet-400",
    linkText: "text-violet-400 hover:text-violet-300",
  },
  cyan: {
    gradient: "from-cyan-500/20 to-blue-600/20",
    orb: "bg-cyan-500",
    tagBg: "bg-cyan-500/10",
    tagBorder: "border-cyan-500/40",
    tagText: "text-cyan-400",
    linkText: "text-cyan-400 hover:text-cyan-300",
  },
};

export function ProjectCard({ project }: { project: Project }) {
  const v = variants[project.variant];
  return (
    <article className="group flex w-80 flex-col overflow-hidden rounded-3xl border border-white/8 bg-white/3 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Preview area */}
      <div
        className={`relative h-48 w-full bg-linear-to-br ${v.gradient} flex items-center justify-center overflow-hidden border-b border-white/6`}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div
          className={`absolute h-24 w-24 rounded-full opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-90 ${v.orb}`}
        />
        <div className="absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-xl font-bold tracking-tight text-white">{project.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-gray-400">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className={`rounded-full border px-3 py-1 text-xs font-medium ${v.tagBg} ${v.tagBorder} ${v.tagText}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="h-px bg-white/5" />

        {/* Links */}
        <div className="flex items-start gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} auf GitHub`}
            className="flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white"
          >
            <FaGithub size={16} />
            GitHub
          </a>

          {project.downloadable ? (
            <DownloadButton variant={project.variant} />
          ) : (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} Live Demo`}
              className={`flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3 ${v.linkText}`}
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
