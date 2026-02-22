import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

/* === Variant Styles === */
const variants = {
    blue: {
        gradient:    "from-blue-500/20 to-cyan-500/20",
        orb:         "bg-blue-500",
        tagBg:       "bg-blue-500/10",
        tagBorder:   "border-blue-500/40",
        tagText:     "text-blue-400",
        linkText:    "text-blue-400 hover:text-blue-300",
    },
    violet: {
        gradient:    "from-violet-500/20 to-blue-500/20",
        orb:         "bg-violet-500",
        tagBg:       "bg-violet-500/10",
        tagBorder:   "border-violet-500/40",
        tagText:     "text-violet-400",
        linkText:    "text-violet-400 hover:text-violet-300",
    },
    cyan: {
        gradient:    "from-cyan-500/20 to-blue-600/20",
        orb:         "bg-cyan-500",
        tagBg:       "bg-cyan-500/10",
        tagBorder:   "border-cyan-500/40",
        tagText:     "text-cyan-400",
        linkText:    "text-cyan-400 hover:text-cyan-300",
    },
} as const;

type Variant = keyof typeof variants;

/* === Project Data === */
interface Project {
    title:       string;
    description: string;
    tags:        string[];
    github:      string;
    live:        string;
    variant:     Variant;
}

const projects: Project[] = [
    {
        title:       "Project 1",
        description: "Description Placeholder",
        tags:        ["Placeholder", "Placeholder", "Placeholder", "Placeholder"],
        github:      "#",
        live:        "#",
        variant:     "blue",
    },
    {
        title:       "Project 2",
        description: "Description Placeholder",
        tags:        ["Placeholder", "Placeholder", "Placeholder"],
        github:      "#",
        live:        "#",
        variant:     "violet",
    },
    {
        title:       "Project 3",
        description: "Description Placeholder",
        tags:        ["Placeholder", "Placeholder", "Placeholder"],
        github:      "#",
        live:        "#",
        variant:     "cyan",
    },
];

/* === Project Card === */
function ProjectCard({ project }: { project: Project }) {
    const v = variants[project.variant];
    return (
        <article className="group w-80 rounded-3xl flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-white/3 border border-white/8 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]">

            {/* Preview area */}
            <div className={`relative w-full h-48 bg-linear-to-br ${v.gradient} flex items-center justify-center overflow-hidden border-b border-white/6`}>
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                        backgroundSize:  "24px 24px",
                    }}
                />
                <div className={`absolute w-24 h-24 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 ${v.orb}`} />
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-col p-6 gap-4 flex-1">
                <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <span key={i} className={`text-xs px-3 py-1 rounded-full font-medium border ${v.tagBg} ${v.tagBorder} ${v.tagText}`}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="h-px bg-white/5" />

                {/* Links */}
                <div className="flex items-center gap-4">
                    <a href={project.github} target="_blank"rel="noopener noreferrer"aria-label={`${project.title} auf GitHub`}className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200">
                        <FaGithub size={16} />
                        GitHub
                    </a>
                    <a href={project.live} target="_blank"rel="noopener noreferrer"aria-label={`${project.title} Live Demo`}className={`flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3 ${v.linkText}`}>
                        <FiExternalLink size={14} />
                        Live Demo
                    </a>
                </div>
            </div>
        </article>
    );
}

/* === Projects Section === */
export function Projects() {
    return (
        <section id="Projects"aria-label="Meine Projekte"className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#1f2937_20%,#000000_100%,transparent_80%)] flex flex-col items-center px-16 py-24 relative overflow-hidden">
            {/* Ambient background blobs */}
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Section header */}
            <div className="flex flex-col items-center mb-20 z-10">
                <h2 className="text-6xl font-bold text-white">
                    My <span className="text-blue-500">Projects</span>
                </h2>
            </div>

            {/* Cards */}
            <div className="flex flex-row gap-8 flex-wrap justify-center z-10">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
}