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
  image?: string;
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
    image: "/images/projects/fdf.gif",
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
  },
  {
    name: "miniCycles",
    description: "Physically-based GPU path tracer in C + OpenGL Compute Shaders. Implements Monte Carlo light transport, BVH acceleration, PBR materials, and depth of field.",
    url: "https://github.com/FelBenini/miniCycles",
    languages: ["C", "Makefile", "GLSL"],
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
    image: "/images/projects/minicycles.png",
  },
  {
    name: "benixploy",
    description: "PaaS that turns a bare VPS into a self-hosted app platform. Server monitoring and apps deployment.",
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
    image: "/images/projects/benixploy.png"
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
      "A duo project. Implements ray-object intersections via analytical geometry (Moller-Trumbore for triangles), Lambertian diffuse lighting, recursive specular reflections, OBJ mesh parsing with BVH acceleration, and texture mapping. Strict .rt scene file parser.",
    learned: [
      "Ray tracing fundamentals: ray generation, intersection, shading",
      "Analytical geometry and vector math",
      "Recursive reflection and specular highlights",
      "OBJ mesh parsing and BVH acceleration structures",
    ],
    collaborators: [{ name: "Jovane aka Cybervanin", url: "https://github.com/cybervanin" }],
    image: "/images/projects/minirt.png"
  },
  {
    name: "BeniRender",
    description: "Scalable Blender render farm on AWS. Provisions EC2 workers with OpenTofu, configures them with Ansible, and orchestrates distributed frame rendering via Python.",
    url: "https://github.com/FelBenini/BeniRender",
    languages: ["Python", "Terraform", "OpenTofu", "Ansible"],
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
    image: "/images/projects/torta-cms.png"
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
    image: "/images/projects/img_to_fdf.png"
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
