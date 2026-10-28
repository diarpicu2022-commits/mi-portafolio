export const GITHUB_PROFILE = "https://github.com/diarpicu2022-commits";
export const CV_PATH = "/cv-diego-armando-pinta-cuasquen.pdf";

export const identity = {
  name: "Diego Armando Pinta Cuasquen",
  alias: "Diecu",
  role: "Estudiante de Ingeniería de Software",
  university: "Universidad Cooperativa de Colombia (UCC)",
  semester: "Quinto semestre",
  email: "diarpicu2022@gmail.com",
  github: GITHUB_PROFILE,
  pitch:
    "Combino Ingeniería de Software e Ingeniería Electrónica para construir sistemas completos: desde sensores y microcontroladores hasta backend, frontend e interfaces claras.",
};

export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  /** Exact repository URL. When unknown, the UI links to a search of the GitHub profile instead. */
  repo?: string;
  /** Live demo URL; omitted when there is no public demo. */
  demo?: string;
  image?: string;
};

// Descriptions and stacks are a first draft: confirm them (and add exact `repo`/`demo` URLs) before publishing.
export const projects: Project[] = [
  {
    id: "ecos",
    name: "Ecos de la Tierra",
    description:
      "Proyecto principal del portafolio: una experiencia interactiva sobre la tierra y la naturaleza, construida de extremo a extremo.",
    technologies: ["TypeScript", "React"],
  },
  {
    id: "siscan",
    name: "SISCAN",
    description:
      "Sistema de monitoreo con sensores conectados a microcontroladores que envían lecturas a una aplicación para su consulta.",
    technologies: ["ESP32", "C/C++", "Backend", "Base de datos"],
  },
  {
    id: "agropulse",
    name: "AgroPulse",
    description:
      "Plataforma IoT para seguimiento de variables agrícolas, que une hardware de campo con un panel de visualización.",
    technologies: ["Arduino", "ESP32", "TypeScript"],
  },
  {
    id: "campuswatch",
    name: "CampusWatch / Agenda",
    description:
      "Herramienta académica para organizar actividades, horarios y pendientes del campus en un solo lugar.",
    technologies: ["TypeScript", "React"],
  },
  {
    id: "notascan",
    name: "NotaScan",
    description: "Aplicación para digitalizar y organizar notas y apuntes académicos.",
    technologies: ["Python", "TypeScript"],
  },
  {
    id: "harmonia",
    name: "Harmonia",
    description: "Proyecto adicional del archivo, enfocado en una experiencia de usuario cuidada.",
    technologies: ["TypeScript"],
  },
  {
    id: "ecovolt",
    name: "EcoVolt",
    description: "Proyecto de energía que combina electrónica y software para medir y presentar consumo.",
    technologies: ["Electrónica", "Microcontroladores"],
  },
  {
    id: "setpasto",
    name: "SETPasto+",
    description: "Aplicación de servicio para la ciudad de Pasto.",
    technologies: ["Java", "Spring Boot"],
  },
  {
    id: "tower-defense",
    name: "Tower Defense",
    description: "Videojuego de estrategia tipo tower defense.",
    technologies: ["GDScript", "Godot"],
  },
  {
    id: "proxy-ia",
    name: "Proxy IA",
    description: "Servicio intermedio para conectar aplicaciones con modelos de inteligencia artificial.",
    technologies: ["Python", "FastAPI"],
  },
];

export const repoUrl = (project: Project) =>
  project.repo ??
  `${GITHUB_PROFILE}?tab=repositories&q=${encodeURIComponent(project.name.split(" /")[0])}`;

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Lenguajes",
    items: ["C/C++", "Java", "TypeScript", "JavaScript", "Python", "Kotlin", "GDScript"],
  },
  {
    title: "Frontend y backend",
    items: ["React", "Next.js", "Vite", "Tailwind", "Spring Boot", "NestJS", "Express", "FastAPI"],
  },
  { title: "Datos", items: ["PostgreSQL / Supabase", "MongoDB", "Redis", "SQLite"] },
  { title: "Electrónica", items: ["ESP32", "Arduino", "Control automático"] },
];

export const experience: { title: string; place: string; detail: string }[] = [
  {
    title: "Ingeniería de Software · quinto semestre",
    place: identity.university,
    detail:
      "Formación en desarrollo de software, bases de datos y diseño de interfaces, aplicada en proyectos de curso.",
  },
  {
    title: "Proyectos académicos de software y hardware",
    place: identity.university,
    detail:
      "Desarrollo de sistemas IoT, aplicaciones web y juegos, desde la integración de sensores hasta la interfaz final.",
  },
];

export type Testimonial = { quote: string; author: string; pending: boolean };

export const testimonials: Testimonial[] = [
  { quote: "Testimonio pendiente de un docente.", author: "Docente · UCC", pending: true },
  { quote: "Testimonio pendiente de un compañero de proyecto.", author: "Compañero de equipo", pending: true },
  { quote: "Testimonio pendiente de un usuario o cliente.", author: "Usuario de un proyecto", pending: true },
];

export type SectionId = "about" | "projects" | "experience" | "testimonials" | "contact";

export type Zone = {
  id: string;
  symbol: string;
  name: string;
  summary: string;
  section: SectionId;
  projectIds?: string[];
};

export const zones: Zone[] = [
  {
    id: "lab",
    symbol: "L",
    name: "Laboratorio",
    summary: "Perfil, propuesta de valor, habilidades y stack técnico.",
    section: "about",
  },
  {
    id: "forest",
    symbol: "F",
    name: "Bosque de Código",
    summary: "El proyecto insignia del viaje.",
    section: "projects",
    projectIds: ["ecos"],
  },
  {
    id: "greenhouse",
    symbol: "G",
    name: "Invernadero IoT",
    summary: "Sensores, microcontroladores y datos del campo.",
    section: "projects",
    projectIds: ["siscan", "agropulse"],
  },
  {
    id: "academy",
    symbol: "A",
    name: "Academia",
    summary: "Experiencia académica y herramientas para el campus.",
    section: "experience",
    projectIds: ["campuswatch"],
  },
  {
    id: "archive",
    symbol: "X",
    name: "Archivo",
    summary: "Terminal con NotaScan y proyectos adicionales.",
    section: "projects",
    projectIds: ["notascan", "harmonia", "ecovolt", "setpasto", "tower-defense", "proxy-ia"],
  },
  {
    id: "inn",
    symbol: "I",
    name: "Posada",
    summary: "Lo que dicen quienes han trabajado conmigo.",
    section: "testimonials",
  },
  {
    id: "plaza",
    symbol: "Z",
    name: "Plaza",
    summary: "Contacto, GitHub y descarga del CV.",
    section: "contact",
  },
];

export const navLinks: { href: string; label: string }[] = [
  { href: "#about", label: "Perfil" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
  { href: CV_PATH, label: "CV" },
  { href: "#contact", label: "Contacto" },
];
