import Link from "next/link";
import { projects } from "@/lib/projects";
import PageHero from "./page-hero";

const focus = [
  {
    title: "Rendering & graphics",
    text: "Ray tracers, path tracers, and graphics libraries written from scratch in C — on top of OpenGL, Vulkan, and MiniLibX.",
  },
  {
    title: "Systems programming",
    text: "Processes, threads, file descriptors, and memory. Shells, allocators, and the parts of the stack that most abstractions hide.",
  },
  {
    title: "Infrastructure & web",
    text: "Container-based deployment, cloud provisioning with OpenTofu and Ansible, and fullstack products with Next.js and SvelteKit.",
  },
];

const toolbox = [
  { label: "Languages", items: ["C", "C++", "Go", "TypeScript", "Python", "Bash"] },
  { label: "Graphics", items: ["OpenGL", "GLFW", "Ray tracing", "Path tracing", "Compute shaders"] },
  { label: "Systems", items: ["POSIX", "Threads", "Processes", "Memory allocators"] },
  { label: "Web", items: ["Next.js", "SvelteKit", "React", "Nest.js"] },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  { label: "Infra", items: ["Docker", "AWS", "Terraform", "OpenTofu", "Ansible", "Cloudflare", "GH Actions"] },
  { label: "Other Tools", items: ["Git", "Vim", "Shell"] },
];


export default function Page() {
  return (
    <main>
      <PageHero />
      <section className="shell editorial-row hero">
        <div className="hero-meta">
          <p className="eyebrow">© 2026</p>
          <p className="text-sm text-muted-foreground mt-1">São Paulo / BR</p>
        </div>
        <div className="hero-content flex flex-col justify-between gap-2">
          <h1>Building things on the web and exploring graphics programming.</h1>
          <p>Developer with a focus on systems programming, web dev, devops and rendering engines.</p>
          <Link
            target="_blank"
            rel="noonpener noreferrer"
            href="mailto:felbenini@gmail.com"
            className="w-fit mt-4 px-4 p-2 border hover:border-muted-foreground transition-colors"
          >
            Get in Touch
            <span className="ml-2">↗</span>
          </Link>
        </div>
      </section>

      <section className="shell editorial-row">
        <div>
          <p className="eyebrow">About</p>
        </div>
        <div className="space-y-2">
          <p className="text-lg">Software developer focused on graphics, systems, and the web.</p>
          <p className="text-muted-foreground w-4/5">
            I&apos;m Felipe Benini, currently studying at 42 São Paulo. This website is a place where I can show the things
            that I've built, like a ray tracer, a render farm and some fullstack
            products shipped from end to end.
          </p>
        </div>
      </section>

      <section className="shell editorial-row">
        <div>
          <p className="eyebrow">Toolbox</p>
        </div>
        <div className="space-y-3 max-w-xl">
          {toolbox.map((group) => (
            <div key={group.label} className="flex flex-col sm:flex-row gap-1 sm:gap-4">
              <p className="eyebrow sm:w-28 shrink-0 sm:pt-0.5">{group.label}</p>
              <p className="text-sm text-muted-foreground">{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell editorial-row">

        <div>
          <p className="eyebrow">Focus</p>
        </div>
        <div className="space-y-6 max-w-xl">
          {focus.map((item) => (
            <div key={item.title}>
              <h2 className="text-base font-medium mb-1">{item.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell editorial-row">
        <div>
          <p className="eyebrow">Selected Work</p>
        </div>
        <div className="space-y-6">
          {projects.slice(0, 4).map((project) => (
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

      <section className="shell editorial-row">
        <div>
          <p className="eyebrow">Elsewhere</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <Link
            href="https://github.com/FelBenini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-muted-foreground transition-colors"
          >
            GitHub ↗
          </Link>
          <Link
            href="https://www.linkedin.com/in/felipe-benini-930ba7372/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-muted-foreground transition-colors"
          >
            LinkedIn ↗
          </Link>
        </div>
      </section>
    </main >
  );
}
