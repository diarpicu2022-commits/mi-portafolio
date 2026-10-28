export type Locale = "es" | "en";
export const locales: Locale[] = ["es", "en"];

export const GITHUB_PROFILE = "https://github.com/diarpicu2022-commits";
export const EMAIL = "diarpicu2022@gmail.com";
export const NAME = "Diego Armando Pinta Cuasquen";

export const homePath: Record<Locale, string> = { es: "/", en: "/en" };
export const cvPath: Record<Locale, string> = {
  es: "/cv-diego-armando-pinta-cuasquen.pdf",
  en: "/cv-diego-armando-pinta-cuasquen-en.pdf",
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
  /** Screenshot or GIF under public/, e.g. "/projects/siscan.png". */
  image?: string;
};

type ProjectBase = Omit<Project, "description">;

// Descriptions and stacks are a first draft: confirm them (and add exact `repo`/`demo`/`image`) before publishing.
const projectBase: ProjectBase[] = [
  { id: "ecos", name: "Ecos de la Tierra", technologies: ["TypeScript", "React"] },
  { id: "siscan", name: "SISCAN", technologies: ["ESP32", "C/C++", "REST API", "SQL"] },
  { id: "agropulse", name: "AgroPulse", technologies: ["Arduino", "ESP32", "TypeScript"] },
  { id: "campuswatch", name: "CampusWatch / Agenda", technologies: ["TypeScript", "React"] },
  { id: "notascan", name: "NotaScan", technologies: ["Python", "TypeScript"] },
  { id: "harmonia", name: "Harmonia", technologies: ["TypeScript"] },
  { id: "ecovolt", name: "EcoVolt", technologies: ["Arduino", "C/C++"] },
  { id: "setpasto", name: "SETPasto+", technologies: ["Java", "Spring Boot"] },
  { id: "tower-defense", name: "Tower Defense", technologies: ["GDScript", "Godot"] },
  { id: "proxy-ia", name: "Proxy IA", technologies: ["Python", "FastAPI"] },
];

const projectDescriptions: Record<Locale, Record<string, string>> = {
  es: {
    ecos: "Proyecto principal del portafolio: una experiencia interactiva sobre la tierra y la naturaleza, construida de extremo a extremo.",
    siscan:
      "Sistema de monitoreo con sensores conectados a microcontroladores que envían lecturas a una aplicación para su consulta.",
    agropulse:
      "Plataforma IoT para seguimiento de variables agrícolas, que une hardware de campo con un panel de visualización.",
    campuswatch: "Herramienta académica para organizar actividades, horarios y pendientes del campus en un solo lugar.",
    notascan: "Aplicación para digitalizar y organizar notas y apuntes académicos.",
    harmonia: "Proyecto adicional del archivo, enfocado en una experiencia de usuario cuidada.",
    ecovolt: "Proyecto de energía que combina electrónica y software para medir y presentar consumo.",
    setpasto: "Aplicación de servicio para la ciudad de Pasto.",
    "tower-defense": "Videojuego de estrategia tipo tower defense.",
    "proxy-ia": "Servicio intermedio para conectar aplicaciones con modelos de inteligencia artificial.",
  },
  en: {
    ecos: "The portfolio's flagship: an interactive experience about the land and nature, built end to end.",
    siscan: "Monitoring system where microcontroller-connected sensors send readings to an application for review.",
    agropulse: "IoT platform for tracking farm variables, joining field hardware with a visualization dashboard.",
    campuswatch: "Academic tool that keeps campus activities, schedules and to-dos in one place.",
    notascan: "App to digitize and organize class notes.",
    harmonia: "Additional archive project focused on a polished user experience.",
    ecovolt: "Energy project combining electronics and software to measure and present consumption.",
    setpasto: "Service application for the city of Pasto.",
    "tower-defense": "Tower defense strategy game.",
    "proxy-ia": "Middleware service that connects applications with artificial intelligence models.",
  },
};

export type SectionId = "about" | "projects" | "experience" | "testimonials" | "process" | "contact";

type ZoneBase = { id: string; symbol: string; section: SectionId; projectIds?: string[] };

const zoneBase: ZoneBase[] = [
  { id: "lab", symbol: "L", section: "about" },
  { id: "forest", symbol: "F", section: "projects", projectIds: ["ecos"] },
  { id: "greenhouse", symbol: "G", section: "projects", projectIds: ["siscan", "agropulse"] },
  { id: "academy", symbol: "A", section: "experience", projectIds: ["campuswatch"] },
  {
    id: "archive",
    symbol: "X",
    section: "projects",
    projectIds: ["notascan", "harmonia", "ecovolt", "setpasto", "tower-defense", "proxy-ia"],
  },
  { id: "inn", symbol: "I", section: "testimonials" },
  { id: "plaza", symbol: "Z", section: "contact" },
];

export type Zone = ZoneBase & { name: string; summary: string; dialogue: string };

const zoneText: Record<Locale, Record<string, Pick<Zone, "name" | "summary" | "dialogue">>> = {
  es: {
    lab: {
      name: "Laboratorio",
      summary: "Perfil, propuesta de valor, habilidades y stack técnico.",
      dialogue: "Entre osciloscopios y teclados, aquí se mezclan el software y la electrónica.",
    },
    forest: {
      name: "Bosque de Código",
      summary: "El proyecto insignia del viaje.",
      dialogue: "Las raíces de este bosque son líneas de código. Escucha sus ecos…",
    },
    greenhouse: {
      name: "Invernadero IoT",
      summary: "Sensores, microcontroladores y datos del campo.",
      dialogue: "Cada planta tiene un sensor. Cada sensor cuenta una historia.",
    },
    academy: {
      name: "Academia",
      summary: "Experiencia académica y herramientas para el campus.",
      dialogue: "Quinto semestre y contando. Aquí se forjan las bases.",
    },
    archive: {
      name: "Archivo",
      summary: "Terminal con NotaScan y proyectos adicionales.",
      dialogue: "> cargando proyectos… La terminal parpadea y muestra el archivo.",
    },
    inn: {
      name: "Posada",
      summary: "Lo que dicen quienes han trabajado conmigo.",
      dialogue: "Los viajeros dejan sus palabras junto a la chimenea.",
    },
    plaza: {
      name: "Plaza",
      summary: "Contacto, GitHub y descarga del CV.",
      dialogue: "Todos los caminos llevan a la plaza. ¿Hablamos?",
    },
  },
  en: {
    lab: {
      name: "Laboratory",
      summary: "Profile, value proposition, skills and tech stack.",
      dialogue: "Between oscilloscopes and keyboards, software and electronics meet here.",
    },
    forest: {
      name: "Code Forest",
      summary: "The flagship project of the journey.",
      dialogue: "The roots of this forest are lines of code. Listen to their echoes…",
    },
    greenhouse: {
      name: "IoT Greenhouse",
      summary: "Sensors, microcontrollers and field data.",
      dialogue: "Every plant has a sensor. Every sensor tells a story.",
    },
    academy: {
      name: "Academy",
      summary: "Academic experience and campus tools.",
      dialogue: "Fifth semester and counting. This is where the foundations are forged.",
    },
    archive: {
      name: "Archive",
      summary: "Terminal holding NotaScan and additional projects.",
      dialogue: "> loading projects… The terminal blinks and opens the archive.",
    },
    inn: {
      name: "Inn",
      summary: "What people who have worked with me say.",
      dialogue: "Travellers leave their words by the fireplace.",
    },
    plaza: {
      name: "Plaza",
      summary: "Contact, GitHub and CV download.",
      dialogue: "All roads lead to the plaza. Shall we talk?",
    },
  },
};

const ui = {
  es: {
    skipLink: "Saltar al contenido",
    nav: {
      label: "Navegación principal",
      about: "Perfil",
      projects: "Proyectos",
      experience: "Experiencia",
      process: "Proceso",
      cv: "CV",
      contact: "Contacto",
      switchLanguage: "English",
    },
    hero: {
      kicker: "▶ Nueva partida",
      role: "Estudiante de Ingeniería de Software",
      semester: "UCC · quinto semestre",
      pressStart: "Presiona Start",
      explore: "Explorar",
      downloadCv: "Descargar CV",
    },
    world: {
      title: "Explora el mapa",
      intro:
        "Haz clic en el mapa (o tabula hasta él), muévete con flechas o WASD y pulsa E o Enter junto a un edificio. También puedes hacer clic directamente en cada edificio.",
      mapLabel: "Mapa de Diecu's Engineering Quest",
      near: (zone: string) => `Estás junto a ${zone}. Pulsa E o Enter para entrar.`,
      idle: "Explora el mapa con flechas o WASD.",
      touchControls: "Controles táctiles",
      up: "Mover arriba",
      down: "Mover abajo",
      left: "Mover a la izquierda",
      right: "Mover a la derecha",
      enter: "Entrar",
      open: (zone: string) => `Abrir ${zone}`,
      progress: (visited: number, total: number) => `Zonas visitadas ${visited}/${total}`,
      achievement: "¡Logro desbloqueado: Explorador completo! Has visitado todas las zonas.",
      sound: "Sonido",
      night: "Noche",
      sign: "Laboratorio ← · → Academia",
    },
    panel: {
      close: "Cerrar",
      closeHidden: "panel",
      fullSection: "Ver la sección completa sin mapa",
      skipDialogue: "Mostrar todo el texto",
    },
    card: {
      techOf: (name: string) => `Tecnologías de ${name}`,
      repo: "Código en GitHub",
      searchRepo: "Buscar en GitHub",
      demo: "Ver demo",
      noDemo: "Demo no disponible",
      imageAlt: (name: string) => `Captura de ${name}`,
    },
    sections: {
      aboutTitle: "Perfil",
      skillsTitle: "Habilidades y stack técnico",
      projectsTitle: "Proyectos",
      projectsIntro: "Software, hardware y juegos construidos durante la carrera.",
      experienceTitle: "Experiencia",
      testimonialsTitle: "Testimonios",
      testimonialsIntro: "Espacios reservados para testimonios reales; se reemplazarán cuando estén confirmados.",
      pending: "Pendiente",
      processTitle: "Proceso de diseño",
      processIntro: "Cómo y por qué este portafolio es una aventura 2D.",
      contactTitle: "Contacto",
      contactIntro: "¿Hablamos? Escríbeme o revisa mi código.",
    },
    form: {
      title: "Envíame un mensaje",
      name: "Tu nombre",
      message: "Mensaje",
      submit: "Abrir en mi correo",
      hint: "Se abrirá tu aplicación de correo con el mensaje listo para enviar.",
      subject: (name: string) => `Contacto desde el portafolio — ${name}`,
    },
    footer: { rights: "Pixel art y código originales." },
  },
  en: {
    skipLink: "Skip to content",
    nav: {
      label: "Main navigation",
      about: "Profile",
      projects: "Projects",
      experience: "Experience",
      process: "Process",
      cv: "CV",
      contact: "Contact",
      switchLanguage: "Español",
    },
    hero: {
      kicker: "▶ New game",
      role: "Software Engineering student",
      semester: "UCC · fifth semester",
      pressStart: "Press Start",
      explore: "Explore",
      downloadCv: "Download CV",
    },
    world: {
      title: "Explore the map",
      intro:
        "Click the map (or tab to it), move with the arrow keys or WASD and press E or Enter next to a building. You can also click any building directly.",
      mapLabel: "Diecu's Engineering Quest map",
      near: (zone: string) => `You are next to the ${zone}. Press E or Enter to go in.`,
      idle: "Explore the map with the arrow keys or WASD.",
      touchControls: "Touch controls",
      up: "Move up",
      down: "Move down",
      left: "Move left",
      right: "Move right",
      enter: "Enter",
      open: (zone: string) => `Open ${zone}`,
      progress: (visited: number, total: number) => `Zones visited ${visited}/${total}`,
      achievement: "Achievement unlocked: Master explorer! You visited every zone.",
      sound: "Sound",
      night: "Night",
      sign: "Laboratory ← · → Academy",
    },
    panel: {
      close: "Close",
      closeHidden: "panel",
      fullSection: "See the full section without the map",
      skipDialogue: "Show all text",
    },
    card: {
      techOf: (name: string) => `${name} technologies`,
      repo: "Code on GitHub",
      searchRepo: "Search on GitHub",
      demo: "Live demo",
      noDemo: "No demo available",
      imageAlt: (name: string) => `${name} screenshot`,
    },
    sections: {
      aboutTitle: "Profile",
      skillsTitle: "Skills and tech stack",
      projectsTitle: "Projects",
      projectsIntro: "Software, hardware and games built during my degree.",
      experienceTitle: "Experience",
      testimonialsTitle: "Testimonials",
      testimonialsIntro: "Placeholders for real testimonials; they will be replaced once confirmed.",
      pending: "Pending",
      processTitle: "Design process",
      processIntro: "How and why this portfolio became a 2D adventure.",
      contactTitle: "Contact",
      contactIntro: "Let's talk. Write to me or browse my code.",
    },
    form: {
      title: "Send me a message",
      name: "Your name",
      message: "Message",
      submit: "Open in my email app",
      hint: "Your email app will open with the message ready to send.",
      subject: (name: string) => `Portfolio contact — ${name}`,
    },
    footer: { rights: "Original pixel art and code." },
  },
};

export type UiText = (typeof ui)["es"];

const localized = {
  es: {
    identity: {
      role: "Estudiante de Ingeniería de Software",
      university: "Universidad Cooperativa de Colombia (UCC)",
      semester: "Quinto semestre",
      pitch:
        "Combino Ingeniería de Software e Ingeniería Electrónica para construir sistemas completos: desde sensores y microcontroladores hasta backend, frontend e interfaces claras.",
    },
    skillGroups: [
      { title: "Lenguajes", items: ["C/C++", "Java", "TypeScript", "JavaScript", "Python", "Kotlin", "GDScript"] },
      {
        title: "Frontend y backend",
        items: ["React", "Next.js", "Vite", "Tailwind", "Spring Boot", "NestJS", "Express", "FastAPI"],
      },
      { title: "Datos", items: ["PostgreSQL / Supabase", "MongoDB", "Redis", "SQLite"] },
      { title: "Electrónica", items: ["ESP32", "Arduino", "Control automático"] },
    ],
    experience: [
      {
        title: "Ingeniería de Software · quinto semestre",
        detail:
          "Formación en desarrollo de software, bases de datos y diseño de interfaces, aplicada en proyectos de curso.",
      },
      {
        title: "Proyectos académicos de software y hardware",
        detail:
          "Desarrollo de sistemas IoT, aplicaciones web y juegos, desde la integración de sensores hasta la interfaz final.",
      },
    ],
    testimonials: [
      { quote: "Testimonio pendiente de un docente.", author: "Docente · UCC", pending: true },
      { quote: "Testimonio pendiente de un compañero de proyecto.", author: "Compañero de equipo", pending: true },
      { quote: "Testimonio pendiente de un usuario o cliente.", author: "Usuario de un proyecto", pending: true },
    ],
    process: [
      {
        title: "1 · Objetivo y público",
        body: "El público es el profesor del curso y revisores técnicos. El mensaje: alguien que une software y electrónica para construir sistemas completos.",
      },
      {
        title: "2 · Concepto",
        body: "Un JRPG cenital de consola portátil: cada zona del mapa es una sección del portafolio. Todo el arte es original; no se usan recursos de terceros.",
      },
      {
        title: "3 · Sistema visual",
        body: "Paleta de bosque, tinta, pergamino y ámbar; tipografía pixel solo en títulos y una sans legible para el texto; tarjetas con borde y sombra dura.",
      },
      {
        title: "4 · Accesibilidad primero",
        body: "El juego es opcional: todo el contenido existe como secciones normales. Teclado completo, foco visible, diálogos con Escape, controles táctiles etiquetados y respeto a reducir movimiento.",
      },
      {
        title: "5 · Validación",
        body: "Pruebas unitarias de colisiones y alcance de zonas, pruebas de interacción, pruebas end-to-end en escritorio y móvil, y auditoría Lighthouse.",
      },
    ],
  },
  en: {
    identity: {
      role: "Software Engineering student",
      university: "Universidad Cooperativa de Colombia (UCC)",
      semester: "Fifth semester",
      pitch:
        "I combine Software Engineering and Electronic Engineering to build complete systems: from sensors and microcontrollers to backend, frontend and clear interfaces.",
    },
    skillGroups: [
      { title: "Languages", items: ["C/C++", "Java", "TypeScript", "JavaScript", "Python", "Kotlin", "GDScript"] },
      {
        title: "Frontend & backend",
        items: ["React", "Next.js", "Vite", "Tailwind", "Spring Boot", "NestJS", "Express", "FastAPI"],
      },
      { title: "Data", items: ["PostgreSQL / Supabase", "MongoDB", "Redis", "SQLite"] },
      { title: "Electronics", items: ["ESP32", "Arduino", "Automatic control"] },
    ],
    experience: [
      {
        title: "Software Engineering · fifth semester",
        detail: "Training in software development, databases and interface design, applied in course projects.",
      },
      {
        title: "Academic software and hardware projects",
        detail: "Building IoT systems, web apps and games, from sensor integration to the final interface.",
      },
    ],
    testimonials: [
      { quote: "Testimonial pending from a professor.", author: "Professor · UCC", pending: true },
      { quote: "Testimonial pending from a project teammate.", author: "Teammate", pending: true },
      { quote: "Testimonial pending from a user or client.", author: "Project user", pending: true },
    ],
    process: [
      {
        title: "1 · Goal and audience",
        body: "The audience is the course professor and technical reviewers. The message: someone who joins software and electronics to build complete systems.",
      },
      {
        title: "2 · Concept",
        body: "A top-down handheld JRPG: every map zone is a portfolio section. All art is original; no third-party assets are used.",
      },
      {
        title: "3 · Visual system",
        body: "Forest, ink, parchment and amber palette; pixel type only for headings and a readable sans for body text; cards with hard borders and shadows.",
      },
      {
        title: "4 · Accessibility first",
        body: "The game is optional: all content also exists as regular sections. Full keyboard support, visible focus, Escape-closable dialogs, labelled touch controls and reduced-motion support.",
      },
      {
        title: "5 · Validation",
        body: "Unit tests for collisions and zone reachability, interaction tests, end-to-end tests on desktop and mobile, and a Lighthouse audit.",
      },
    ],
  },
};

export const palette = [
  { name: "Ink", value: "#10263d" },
  { name: "Forest", value: "#164a3a" },
  { name: "Emerald", value: "#2f9e6e" },
  { name: "Parchment", value: "#fff3d4" },
  { name: "Amber", value: "#e6a23c" },
];

export type Testimonial = { quote: string; author: string; pending: boolean };

export function getPortfolio(locale: Locale) {
  const text = localized[locale];
  const projects: Project[] = projectBase.map((project) => ({
    ...project,
    description: projectDescriptions[locale][project.id],
  }));
  const zones: Zone[] = zoneBase.map((zone) => ({ ...zone, ...zoneText[locale][zone.id] }));
  const t = ui[locale];

  return {
    locale,
    t,
    identity: { name: NAME, email: EMAIL, github: GITHUB_PROFILE, ...text.identity },
    projects,
    zones,
    skillGroups: text.skillGroups,
    experience: text.experience.map((item) => ({ ...item, place: text.identity.university })),
    testimonials: text.testimonials as Testimonial[],
    process: text.process,
    cvPath: cvPath[locale],
    navLinks: [
      { href: "#about", label: t.nav.about },
      { href: "#projects", label: t.nav.projects },
      { href: "#experience", label: t.nav.experience },
      { href: "#process", label: t.nav.process },
      { href: cvPath[locale], label: t.nav.cv },
      { href: "#contact", label: t.nav.contact },
    ],
  };
}

export type Portfolio = ReturnType<typeof getPortfolio>;

export const repoUrl = (project: Project) =>
  project.repo ?? `${GITHUB_PROFILE}?tab=repositories&q=${encodeURIComponent(project.name.split(" /")[0])}`;
