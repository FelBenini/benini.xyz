"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, categories, type Project } from "@/lib/projects";
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <main className="shell py-12">
      <h1 className="text-4xl font-medium mb-4">Projects</h1>
      <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
        A collection of projects spanning graphics programming, systems, web development, and infrastructure.
      </p>

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} onOpen={() => setSelected(project)} />
          ))}
        </div>
      </section>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selected && (
            <>
              {selected.image && (
                <div className="relative w-full aspect-[2/1] overflow-hidden rounded-md">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${selected.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                </div>
              )}

              <DialogHeader>
                <div className="flex items-start justify-between gap-4">
                  <DialogTitle className="text-2xl font-medium">{selected.name}</DialogTitle>
                  <Stats project={selected} className="text-muted-foreground pt-1" />
                </div>
              </DialogHeader>

              {selected.collaborators && selected.collaborators.length > 0 && (
                <p className="text-sm text-muted-foreground">
                  with{" "}
                  {selected.collaborators.map((c) => (
                    <Link
                      key={c.url}
                      href={c.url}
                      target="_blank"
                      className="underline hover:text-foreground transition-colors"
                    >
                      {c.name}
                    </Link>
                  ))}
                </p>
              )}

              <DialogDescription className="leading-relaxed">{selected.description}</DialogDescription>

              <p className="text-sm leading-relaxed">{selected.about}</p>

              {selected.learned.length > 0 && (
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    What I learned
                  </h3>
                  <ul className="space-y-1">
                    {selected.learned.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-muted-foreground/60 mt-0.5">–</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Tags project={selected} />

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Link
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm hover:text-muted-foreground transition-colors"
                >
                  <FaGithub className="size-4" />
                  <span>Source</span>
                </Link>
                {selected.homepage && (
                  <Link
                    href={selected.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm hover:text-muted-foreground transition-colors"
                  >
                    <FaExternalLinkAlt className="size-3.5" />
                    <span>Live</span>
                  </Link>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      className="group cursor-pointer rounded-lg border border-border bg-card hover:border-muted-foreground/30 transition-colors overflow-hidden"
    >
      {project.image && (
        <div className="relative w-full aspect-[3/1] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
            <h3 className="text-lg font-medium text-white">{project.name}</h3>
            <Stats project={project} className="text-white/90" />
          </div>
        </div>
      )}

      <div className="p-5">
        {!project.image && (
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-lg font-medium">{project.name}</h3>
            <Stats project={project} className="text-muted-foreground" />
          </div>
        )}

        {project.collaborators && project.collaborators.length > 0 && (
          <p className="text-xs text-muted-foreground mb-2">
            with{" "}
            {project.collaborators.map((c) => (
              <Link
                key={c.url}
                href={c.url}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="hover:text-foreground transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </p>
        )}

        <p className="text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-2">{project.description}</p>

        <Tags project={project} />

        <div className="flex items-center gap-3 pt-3 border-t border-border">
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
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

function Stats({ project, className }: { project: Project; className: string }) {
  return (
    <div className={`flex items-center gap-3 shrink-0 ${className}`}>
      {project.stars > 0 && (
        <span className="flex items-center gap-1 text-xs">
          <FaStar className="size-3" />
          {project.stars}
        </span>
      )}
      {project.forks > 0 && (
        <span className="flex items-center gap-1 text-xs">
          <FaCodeBranch className="size-3" />
          {project.forks}
        </span>
      )}
    </div>
  );
}

function Tags({ project }: { project: Project }) {
  return (
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
  );
}
