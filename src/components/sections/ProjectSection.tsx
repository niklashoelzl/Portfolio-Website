import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="Projects"
      aria-label="Meine Projekte"
      className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#1f2937_20%,#000000_100%,transparent_80%)] px-16 py-24"
    >
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute top-20 left-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

      {/* Section header */}
      <div className="z-10 mb-20 flex flex-col items-center">
        <h2 className="text-6xl font-bold text-white">
          My <span className="text-blue-500">Projects</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="z-10 flex flex-row flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
