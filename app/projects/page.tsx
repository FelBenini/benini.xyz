import Link from "next/link";
import { projects, categories } from "@/lib/projects";
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <main className="shell py-12">
      <h1 className="text-4xl font-medium mb-4">Projects</h1>
      <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
        A collection of projects spanning graphics programming, systems, web development, and infrastructure.
      </p>

      <section className="mb-16">
        <h2 className="text-2xl font-medium mb-6">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {featured.map((project) => (
            <ProjectRow key={project.name} project={project} featured />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-medium mb-6">More</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {rest.map((project) => (
            <ProjectRow key={project.name} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}

function ProjectRow({
  project,
}: {
  project: (typeof projects)[0];
  featured?: boolean;
}) {
  return (
    <div className="group rounded-lg border border-border bg-card hover:border-muted-foreground/30 transition-colors overflow-hidden">
      {project.image && (
        <div className="relative w-full aspect-[3/1] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
            <h3 className="text-lg font-medium text-white">{project.name}</h3>
            <div className="flex items-center gap-3">
              {project.stars > 0 && (
                <span className="flex items-center gap-1 text-xs text-white/90">
                  <FaStar className="size-3" />
                  {project.stars}
                </span>
              )}
              {project.forks > 0 && (
                <span className="flex items-center gap-1 text-xs text-white/90">
                  <FaCodeBranch className="size-3" />
                  {project.forks}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="p-5">
        {!project.image && (
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-lg font-medium">{project.name}</h3>
            <div className="flex items-center gap-3 shrink-0">
              {project.stars > 0 && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <FaStar className="size-3" />
                  {project.stars}
                </span>
              )}
              {project.forks > 0 && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <FaCodeBranch className="size-3" />
                  {project.forks}
                </span>
              )}
            </div>
          </div>
        )}

        {project.collaborators && project.collaborators.length > 0 && (
          <p className="text-xs text-muted-foreground mb-2">
            with{" "}
            {project.collaborators.map((c) => (
              <Link key={c.url} href={c.url} target="_blank" className="hover:text-foreground transition-colors">
                {c.name}
              </Link>
            ))}
          </p>
        )}

        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-mono px-2 py-0.5 rounded border border-border text-foreground">
            {categories[project.category].label}
          </span>
          {project.languages.map((lang) => (
            <span key={lang} className="text-xs font-mono text-muted-foreground">
              {lang}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-3 border-t border-border">
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs hover:text-muted-foreground transition-colors"
          >
            <FaGithub className="size-3.5" />
            <span>Source</span>
          </Link>
          {project.homepage && (
            <Link
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs hover:text-muted-foreground transition-colors"
            >
              <FaExternalLinkAlt className="size-3" />
              <span>Live</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
