import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Page() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <main>
      <section className="shell editorial-row hero">
        <div className="hero-meta">
          <p className="eyebrow">© 2026</p>
          <p className="text-sm text-muted-foreground mt-1">São Paulo / BR</p>
        </div>
        <div className="hero-content">
          <h1>Building things on the web and exploring graphics programming.</h1>
          <p>Fullstack developer with a focus on systems programming and rendering engines.</p>
        </div>
      </section>

      <section className="shell editorial-row">
        <div>
          <p className="eyebrow">Currently</p>
        </div>
        <div className="space-y-2">
          <p className="text-lg">Student at 42 São Paulo</p>
          <p className="text-muted-foreground">Building graphics engines and infrastructure tools</p>
        </div>
      </section>

      <section className="shell editorial-row">
        <div>
          <p className="eyebrow">Selected Work</p>
        </div>
        <div className="space-y-6">
          {featured.map((project) => (
            <div key={project.name} className="group">
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium hover:text-muted-foreground transition-colors"
              >
                {project.name}
              </Link>
              <p className="text-sm text-muted-foreground mt-1 max-w-xl">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.languages.slice(0, 3).map((lang) => (
                  <span key={lang} className="text-xs font-mono text-muted-foreground">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="pt-4">
            <Link href="/projects" className="text-sm hover:text-muted-foreground transition-colors">
              View all projects →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
