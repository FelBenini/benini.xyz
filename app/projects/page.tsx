import Link from "next/link";
import { projects, categories } from "@/lib/projects";
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import { Monitor, Terminal, Globe, Cloud, Wrench } from "lucide-react";

const iconMap = {
  Monitor,
  Terminal,
  Globe,
  Cloud,
  Wrench,
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  const grouped = Object.entries(categories).map(([key, { label, icon }]) => ({
    key,
    label,
    icon,
    projects: rest.filter((p) => p.category === key),
  }));

  return (
    <main className="shell py-12">
      <h1 className="text-4xl font-medium mb-4">Projects</h1>
      <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
        A collection of projects spanning graphics programming, systems, web development, and infrastructure.
      </p>

      <section className="mb-16">
        <h2 className="text-2xl font-medium mb-6">Featured</h2>
        <div className="space-y-4">
          {featured.map((project) => (
            <ProjectRow key={project.name} project={project} featured />
          ))}
        </div>
      </section>

      {grouped
        .filter((g) => g.projects.length > 0)
        .map((group) => {
          const Icon = iconMap[group.icon as keyof typeof iconMap];
          return (
            <section key={group.key} className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                {Icon && <Icon className="size-5 text-muted-foreground" />}
                <h2 className="text-2xl font-medium">{group.label}</h2>
              </div>
              <div className="space-y-4">
                {group.projects.map((project) => (
                  <ProjectRow key={project.name} project={project} />
                ))}
              </div>
            </section>
          );
        })}
    </main>
  );
}

function ProjectRow({
  project,
  featured = false,
}: {
  project: (typeof projects)[0];
  featured?: boolean;
}) {
  return (
    <div className="group rounded-lg border border-border bg-card p-5 hover:border-muted-foreground/30 transition-colors">
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
  );
}
