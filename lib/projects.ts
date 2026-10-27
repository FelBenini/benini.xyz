export type Project = {
  name: string;
  description: string;
  url: string;
  homepage?: string;
  languages: string[];
  stars: number;
  forks: number;
  category: "graphics" | "systems" | "web" | "devops" | "tools";
  about: string;
  learned: string[];
  featured?: boolean;
  collaborators?: { name: string; url: string }[];
};

export const projects: Project[] = [
  {
    name: "FDF",
    description: "Animated 3D wireframe renderer built from scratch in C. Supports animated maps (frame-by-frame), camera controls, and color interpolation.",
    url: "https://github.com/FelBenini/FDF",
    languages: ["C", "CMake", "Python"],
    stars: 22,
    forks: 1,
    category: "graphics",
    about:
      "Fil de Fer — reads heightmap files and renders them as interactive 3D wireframe projections using isometric and perspective cameras. Bonus features include animated maps where each file in a directory is a frame, plus color gradients across the terrain.",
    learned: [
      "3D math: projection matrices, rotation, translation",
      "Bresenham's line algorithm for wireframe rendering",
      "Image processing and pixel manipulation with MLX",
      "Performance optimization for real-time rendering",
    ],
    featured: true,
  },
  {
    name: "SampaLX",
    description: "Cross-platform drop-in replacement for MLX42, rebuilt on OpenGL 3.3 with GLFW. Includes experimental WebGL/WASM builds.",
    url: "https://github.com/FelBenini/SampaLX",
    languages: ["C", "Makefile"],
    stars: 7,
    forks: 1,
    category: "graphics",
    about:
      "Replaces the X11-bound MiniLibX with a modern GPU-accelerated pipeline. GLFW handles windowing, GLAD loads OpenGL 3.3, and every image is uploaded as a texture and drawn through vertex/fragment shaders. Keeps the original mlx.h API so existing 42 projects link with zero source changes.",
    learned: [
      "OpenGL 3.3 core profile and shader pipeline",
      "GPU texture upload and blitting strategies",
      "Cross-platform build systems (Linux, macOS, WASM)",
      "API compatibility layers and drop-in library design",
    ],
    featured: true,
  },
  {
    name: "miniCycles",
    description: "Physically-based GPU path tracer in C + OpenGL Compute Shaders. Implements Monte Carlo light transport, BVH acceleration, PBR materials, and depth of field.",
    url: "https://github.com/FelBenini/miniCycles",
    languages: ["C", "C++", "GLSL"],
    stars: 7,
    forks: 1,
    category: "graphics",
    about:
      "Inspired by Blender's Cycles. Uses a wavefront split pipeline (ray gen → intersect → shade → shadow → accumulate) for better GPU SIMT utilization. Supports OBJ meshes with automatic BVH, HDR environment maps, next event estimation, Russian roulette termination, and .cube LUT color grading.",
    learned: [
      "Monte Carlo path tracing and light transport",
      "Compute shader architecture and wavefront rendering",
      "BVH and TLAS acceleration structures on the GPU",
      "Physically-based materials: metallic-roughness, dielectrics, IOR",
    ],
    featured: true,
  },
  {
    name: "miniRT",
    description: "Ray tracing renderer in C with MiniLibX. Renders spheres, planes, cylinders, OBJ meshes, textures, specular reflections, and multi-spot lighting.",
    url: "https://github.com/blam-derr/miniRT",
    languages: ["C"],
    stars: 0,
    forks: 0,
    category: "graphics",
    about:
      "A duo project with jode-cas. Implements ray-object intersections via analytical geometry (Moller-Trumbore for triangles), Lambertian diffuse lighting, recursive specular reflections, OBJ mesh parsing with BVH acceleration, and texture mapping. Strict .rt scene file parser.",
    learned: [
      "Ray tracing fundamentals: ray generation, intersection, shading",
      "Analytical geometry and vector math",
      "Recursive reflection and specular highlights",
      "OBJ mesh parsing and BVH acceleration structures",
    ],
    featured: true,
    collaborators: [{ name: "jode-cas", url: "https://github.com/jode-cas" }],
  },
  {
    name: "vulkan-rt",
    description: "Ray tracing engine built with Vulkan. Implements the full Vulkan graphics pipeline with ray tracing extensions.",
    url: "https://github.com/FelBenini/vulkan-rt",
    languages: ["C++", "C", "GLSL"],
    stars: 0,
    forks: 0,
    category: "graphics",
    about:
      "A from-scratch Vulkan ray tracing implementation exploring the modern Vulkan 1.3 API. Covers device setup, swapchain management, shader compilation to SPIR-V, and the ray tracing pipeline with BLAS/TLAS.",
    learned: [
      "Vulkan 1.3 API and ray tracing pipeline",
      "SPIR-V shader compilation",
      "Synchronization primitives and memory barriers",
      "Low-level GPU programming without abstraction layers",
    ],
  },
  {
    name: "benixploy",
    description: "AI-agentic PaaS that turns a bare VPS into a self-hosted app platform. Guided by a conversational AI agent for zero-terminal deployments.",
    url: "https://github.com/FelBenini/benixploy",
    homepage: "",
    languages: ["Go", "TypeScript", "Svelte", "Shell", "Docker"],
    stars: 2,
    forks: 0,
    category: "devops",
    about:
      "Monorepo with a SvelteKit dashboard and a Go node-agent. An AI orchestrator generates deterministic Docker Compose configs through tool calls, while the agent runs on each managed VPS handling container lifecycle, monitoring, and recovery.",
    learned: [
      "Go systems programming and Docker API",
      "SvelteKit fullstack architecture",
      "AI agent tool-calling orchestration",
      "Infrastructure-as-code and container orchestration",
    ],
    featured: true,
  },
  {
    name: "BeniRender",
    description: "Scalable Blender render farm on AWS. Provisions EC2 workers with OpenTofu, configures them with Ansible, and orchestrates distributed frame rendering via Python.",
    url: "https://github.com/FelBenini/BeniRender",
    languages: ["Python", "HCL", "Ansible"],
    stars: 0,
    forks: 0,
    category: "devops",
    about:
      "Infrastructure-as-code approach to distributed rendering. OpenTofu provisions AWS EC2 instances, Ansible configures workers with Blender, and a Python orchestrator distributes frames, collects results, and tears down infra. Supports GPU rendering with NVIDIA instances.",
    learned: [
      "OpenTofu/Terraform for cloud provisioning",
      "Ansible for configuration management",
      "Distributed computing patterns",
      "AWS EC2, S3, and security group management",
    ],
  },
  {
    name: "torta-cms",
    description: "A headless CMS built with Next.js. Supports MongoDB/PostgreSQL/MySQL, JWT auth, and one-click Vercel deployment.",
    url: "https://github.com/FelBenini/torta-cms",
    homepage: "https://torta-cms.vercel.app/",
    languages: ["TypeScript", "SCSS"],
    stars: 1,
    forks: 1,
    category: "web",
    about:
      "Full-featured content management system with a dynamic schema builder, role-based access control, and a REST API for content delivery. Designed to be self-hostable or deployed on Vercel with a managed database.",
    learned: [
      "Next.js fullstack patterns and API routes",
      "Dynamic schema design for CMS content types",
      "JWT authentication and session management",
      "Multi-database adapter patterns",
    ],
  },
  {
    name: "bsh",
    description: "A POSIX-compatible shell implementation in C. Handles parsing, AST construction, builtins, pipes, redirections, environment variables, and job control.",
    url: "https://github.com/FelBenini/bsh",
    languages: ["C"],
    stars: 0,
    forks: 0,
    category: "systems",
    about:
      "From-scratch shell that implements the full POSIX spec: tokenizer, parser, AST-based execution, pipes, redirections, globbing, signal handling, and job control with foreground/background process management.",
    learned: [
      "Shell parsing and AST construction",
      "Process management: fork, exec, wait, signals",
      "Pipe and file descriptor manipulation",
      "POSIX compliance and edge cases",
    ],
  },
  {
    name: "push_swap",
    description: "Sorting engine using two stacks and a restricted instruction set. Implements the Turk algorithm for near-optimal sort operations.",
    url: "https://github.com/FelBenini/push_swap",
    languages: ["C"],
    stars: 0,
    forks: 0,
    category: "systems",
    about:
      "The program receives a list of integers and must sort them using only two stacks and 10 operations (swap, push, rotate, reverse rotate). Uses the Turk algorithm — a chunk-based approach that achieves near-optimal move counts.",
    learned: [
      "Advanced sorting algorithms and complexity analysis",
      "Stack-based data structures",
      "Algorithm optimization and benchmarking",
      "Chunk-based sorting strategies",
    ],
  },
  {
    name: "philosophers",
    description: "Classic dining philosophers concurrency problem solved in C with threads, mutexes, and precise meal timing simulation.",
    url: "https://github.com/FelBenini/philosophers",
    languages: ["C"],
    stars: 0,
    forks: 0,
    category: "systems",
    about:
      "Each philosopher thread alternates between eating, sleeping, and thinking. Mutexes protect fork access, and a central monitor thread checks for starvation. Handles edge cases like even/odd philosopher counts and death-by-starvation detection.",
    learned: [
      "Thread synchronization with mutexes",
      "Deadlock prevention strategies",
      "Concurrent programming patterns",
      "Real-time simulation and timing precision",
    ],
  },
  {
    name: "pipex",
    description: "Recreation of bash pipe utilities. Chains commands with pipes, handles file descriptors and redirections — all from scratch in C.",
    url: "https://github.com/FelBenini/pipex",
    languages: ["C"],
    stars: 1,
    forks: 0,
    category: "systems",
    about:
      "Implements the `cmd1 | cmd2 | cmd3` pipeline mechanism. Creates child processes with fork, connects them via pipe(), duplicates file descriptors, and resolves command paths from PATH. Handles heredocs and multiple pipe chains.",
    learned: [
      "Unix process model: fork, exec, pipe",
      "File descriptor manipulation with dup2",
      "Environment variable resolution",
      "Unix signal handling",
    ],
  },
  {
    name: "better_libft",
    description: "Comprehensive C library bundling libft, get_next_line, ft_printf, and bonus linked-list utilities into a single include.",
    url: "https://github.com/FelBenini/better_libft",
    languages: ["C"],
    stars: 0,
    forks: 0,
    category: "tools",
    about:
      "An extended standard library in C that reimplements libc functions (ft_strlen, ft_strjoin, ft_split, etc.), adds printf formatting, file reading with get_next_line, and linked-list utilities — all compiled into a single static library.",
    learned: [
      "C standard library internals",
      "Variadic functions and format string parsing",
      "Static library design and Makefile architecture",
      "Memory management and leak prevention",
    ],
  },
  {
    name: "img_to_fdf",
    description: "Python tool that converts any image into a heightmap text file for FDF. Uses pixel brightness as elevation data.",
    url: "https://github.com/FelBenini/img_to_fdf",
    languages: ["Python"],
    stars: 8,
    forks: 0,
    category: "tools",
    about:
      "Reads an image, extracts pixel brightness values, and maps them to Z-heights in a grid format that FDF can consume. Useful for generating interesting 3D terrain from photos, logos, or any image.",
    learned: [
      "Image processing with Python (Pillow)",
      "Pixel data extraction and manipulation",
      "Heightmap generation from 2D data",
      "CLI tool design and argument parsing",
    ],
  },
  {
    name: "ft_printf",
    description: "Reimplementation of printf in C. Handles format specifiers: strings, integers, hex, pointers, unsigned, and the % character. Scored 125/100.",
    url: "https://github.com/FelBenini/ft_printf",
    languages: ["C"],
    stars: 11,
    forks: 0,
    category: "tools",
    about:
      "A from-scratch printf implementation supporting %s, %d, %i, %x, %X, %u, %c, %p, and %%. Uses variadic functions and a modular flag/width/precision parser. Bonus flags for field width, zero-padding, left alignment, and precision.",
    learned: [
      "Variadic functions (va_list, va_start, va_end)",
      "Format string parsing and state machines",
      "Number base conversion algorithms",
      "Edge case handling in low-level C",
    ],
  },
];

export const categories = {
  graphics: { label: "Graphics & Rendering", icon: "Monitor" },
  systems: { label: "Systems & Low-Level", icon: "Terminal" },
  web: { label: "Web & Fullstack", icon: "Globe" },
  devops: { label: "DevOps & Cloud", icon: "Cloud" },
  tools: { label: "Libraries & Tools", icon: "Wrench" },
} as const;
