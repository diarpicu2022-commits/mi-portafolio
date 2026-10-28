import { byRecency, formatPeriod, getProjects, type Project } from "@/data/projects";

export type { Project } from "@/data/projects";
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

export const projectPath = (locale: Locale, id: string) =>
  locale === "es" ? `/proyectos/${id}` : `/en/projects/${id}`;

export type SectionId = "about" | "projects" | "experience" | "education" | "testimonials" | "contact";

type ZoneBase = { id: string; symbol: string; section: SectionId; projectIds?: string[] };

const zoneBase: ZoneBase[] = [
  { id: "lab", symbol: "L", section: "about" },
  { id: "forest", symbol: "F", section: "projects", projectIds: ["ecos"] },
  { id: "greenhouse", symbol: "G", section: "projects", projectIds: ["agropulse", "siscan", "hidromon"] },
  { id: "academy", symbol: "A", section: "education", projectIds: ["campuswatch"] },
  {
    id: "archive",
    symbol: "X",
    section: "projects",
    projectIds: ["notascan", "harmonia", "proxy-ia", "ecovolt", "setpasto", "tower-defense"],
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
      summary: "Ecos de la Tierra: un RPG por turnos sobre conciencia ambiental.",
      dialogue: "Las raíces de este bosque son líneas de código. Escucha sus ecos…",
    },
    greenhouse: {
      name: "Invernadero IoT",
      summary: "AgroPulse, SISCAN e HidroMon: sensores, microcontroladores y datos del campo.",
      dialogue: "Cada planta tiene un sensor. Cada sensor cuenta una historia.",
    },
    academy: {
      name: "Academia",
      summary: "Formación en dos ingenierías y CampusWatch, la agenda para el campus.",
      dialogue: "Electrónica en la Universidad de Nariño, Software en la UCC. Dos caminos, un mismo mapa.",
    },
    archive: {
      name: "Archivo",
      summary: "NotaScan y el resto del archivo: IA, energía, transporte y juegos.",
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
      summary: "Ecos de la Tierra: a turn-based RPG about environmental awareness.",
      dialogue: "The roots of this forest are lines of code. Listen to their echoes…",
    },
    greenhouse: {
      name: "IoT Greenhouse",
      summary: "AgroPulse, SISCAN and HidroMon: sensors, microcontrollers and field data.",
      dialogue: "Every plant has a sensor. Every sensor tells a story.",
    },
    academy: {
      name: "Academy",
      summary: "Two engineering degrees and CampusWatch, the campus planner.",
      dialogue: "Electronics at Universidad de Nariño, Software at UCC. Two paths, one map.",
    },
    archive: {
      name: "Archive",
      summary: "NotaScan and the rest of the archive: AI, energy, transport and games.",
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
      education: "Formación",
      cv: "CV",
      contact: "Contacto",
      switchLanguage: "English",
    },
    hero: {
      kicker: "▶ Nueva partida",
      role: "Ingeniería Electrónica + Ingeniería de Software",
      semester: "UCC · quinto semestre · Universidad de Nariño",
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
      caseStudy: "Ver caso de estudio",
      status: { complete: "Terminado", "in-progress": "En desarrollo", research: "Investigación" },
    },
    caseStudy: {
      back: "← Todos los proyectos",
      role: "Rol",
      year: "Periodo",
      position: "Cargo",
      status: "Estado",
      context: "Contexto",
      challenge: "El reto",
      approach: "Cómo lo resolví",
      outcome: "Resultado",
      stack: "Tecnologías",
      links: "Código",
      next: "Siguiente proyecto",
    },
    sections: {
      aboutTitle: "Perfil",
      skillsTitle: "Habilidades y stack técnico",
      projectsTitle: "Proyectos",
      projectsIntro: "Once proyectos, del firmware al frontend. Cada uno tiene su caso de estudio: el reto, cómo lo resolví y el resultado.",
      caseStudyLink: "Ver caso de estudio",
      principlesTitle: "Cómo trabajo",
      languagesTitle: "Idiomas",
      experienceTitle: "Experiencia",
      experienceIntro:
        "Sistemas que he construido de principio a fin, con el rol que asumí y el tiempo que les dediqué.",
      educationTitle: "Formación",
      testimonialsTitle: "Testimonios",
      testimonialsIntro: "Lo que dicen docentes y compañeros con los que he trabajado.",
      pending: "Pendiente",
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
    footer: { rights: "Pixel art y código originales.", grid: "Ver retícula" },
  },
  en: {
    skipLink: "Skip to content",
    nav: {
      label: "Main navigation",
      about: "Profile",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      cv: "CV",
      contact: "Contact",
      switchLanguage: "Español",
    },
    hero: {
      kicker: "▶ New game",
      role: "Electronic Engineering + Software Engineering",
      semester: "UCC · fifth semester · Universidad de Nariño",
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
      caseStudy: "Read the case study",
      status: { complete: "Complete", "in-progress": "In progress", research: "Research" },
    },
    caseStudy: {
      back: "← All projects",
      role: "Role",
      year: "Period",
      position: "Position",
      status: "Status",
      context: "Context",
      challenge: "The challenge",
      approach: "How I solved it",
      outcome: "Outcome",
      stack: "Stack",
      links: "Code",
      next: "Next project",
    },
    sections: {
      aboutTitle: "Profile",
      skillsTitle: "Skills and tech stack",
      projectsTitle: "Projects",
      projectsIntro: "Eleven projects, from firmware to frontend. Each has its case study: the challenge, how I solved it and the outcome.",
      caseStudyLink: "Read the case study",
      principlesTitle: "How I work",
      languagesTitle: "Languages",
      experienceTitle: "Experience",
      experienceIntro: "Systems I have built end to end, with the role I took on and the time I put into each.",
      educationTitle: "Education",
      testimonialsTitle: "Testimonials",
      testimonialsIntro: "What professors and teammates I have worked with say.",
      pending: "Pending",
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
    footer: { rights: "Original pixel art and code.", grid: "Show grid" },
  },
};

export type UiText = (typeof ui)["es"];

const localized = {
  es: {
    identity: {
      role: "Ingeniería Electrónica + Ingeniería de Software",
      university: "Universidad Cooperativa de Colombia (UCC)",
      semester: "Quinto semestre",
      tagline: "Del sensor a la interfaz.",
      pitch:
        "Estudio Ingeniería Electrónica e Ingeniería de Software, y me interesa justo donde las dos se cruzan: sistemas completos que empiezan en un sensor o un microcontrolador y terminan en una interfaz donde los datos se ven y se controlan.",
      motto:
        "No me basta con que el código compile. Me importa que el resultado resuelva un problema real, automatice un proceso o le haga la vida más fácil a alguien.",
    },
    skillGroups: [
      {
        title: "Electrónica",
        items: ["ESP32", "Arduino", "GPIO, ADC, DAC, PWM, I²C", "Pantallas OLED", "Sensores y actuadores"],
      },
      { title: "Ingeniería", items: ["MATLAB", "Simulink", "Control automático", "Modelamiento y simulación"] },
      { title: "Lenguajes", items: ["C/C++", "Java", "TypeScript", "JavaScript", "Python", "Kotlin", "Dart", "GDScript"] },
      { title: "Backend", items: ["Spring Boot", "NestJS", "Express", "FastAPI"] },
      {
        title: "Frontend y apps",
        items: ["React", "Next.js", "Vite", "Tailwind CSS", "Flutter", "Jetpack Compose", "Tauri", "Godot"],
      },
      { title: "Datos", items: ["PostgreSQL (Supabase)", "MongoDB", "Redis", "SQLite", "Room"] },
      { title: "Despliegue y herramientas", items: ["Docker", "Render", "Vercel", "Git y GitHub", "PlatformIO", "Wokwi"] },
    ],
    education: [
      {
        period: "En curso",
        title: "Ingeniería de Software · quinto semestre",
        place: "Universidad Cooperativa de Colombia (UCC)",
        detail:
          "Patrones de software, estructuras de datos, diseño de software, diseño de interfaces y frameworks web.",
      },
      {
        period: "2021 – 2025",
        title: "Ingeniería Electrónica",
        place: "Universidad de Nariño",
        detail:
          "Profundización en Automatización y Control. Electivas en medición de variables ambientales, regulación de energía eléctrica en Colombia y redes y servicios telemáticos.",
      },
    ],
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Eficiencia en inglés aprobada (Universidad de Nariño)" },
    ],
    principles: [
      { title: "Primero el problema", body: "Qué variables se pueden medir, qué decisiones se pueden automatizar y cómo se ve el resultado." },
      { title: "Medido, no a ojo", body: "Si algo se puede comprobar, lo compruebo ejecutando algo: pruebas, mediciones, simulación." },
      { title: "Hardware y software como un solo sistema", body: "Cada parte tiene un propósito, del sensor a la interfaz." },
      {
        title: "Aprender haciendo",
        body: "Probar, equivocarme, entender el error y volver a probar. AgroPulse pasó por varias versiones antes de su forma final.",
      },
      {
        title: "Interfaces con criterio",
        body: "Jerarquía clara, buen contraste, modo claro y oscuro, y nada que parezca sacado de una plantilla.",
      },
    ],
    testimonials: [
      { quote: "Testimonio pendiente de un docente.", author: "Docente · UCC", pending: true },
      { quote: "Testimonio pendiente de un compañero de proyecto.", author: "Compañero de equipo", pending: true },
      { quote: "Testimonio pendiente de un usuario o cliente.", author: "Usuario de un proyecto", pending: true },
    ],
  },
  en: {
    identity: {
      role: "Electronic Engineering + Software Engineering",
      university: "Universidad Cooperativa de Colombia (UCC)",
      semester: "Fifth semester",
      tagline: "From sensor to interface.",
      pitch:
        "I study Electronic Engineering and Software Engineering, and I work right where they meet: complete systems that start at a sensor or a microcontroller and end in an interface where data is seen and controlled.",
      motto:
        "Code that compiles is not enough. What matters to me is that the result solves a real problem, automates a process or makes someone's life easier.",
    },
    skillGroups: [
      {
        title: "Electronics",
        items: ["ESP32", "Arduino", "GPIO, ADC, DAC, PWM, I²C", "OLED displays", "Sensors and actuators"],
      },
      { title: "Engineering", items: ["MATLAB", "Simulink", "Automatic control", "Modeling and simulation"] },
      { title: "Languages", items: ["C/C++", "Java", "TypeScript", "JavaScript", "Python", "Kotlin", "Dart", "GDScript"] },
      { title: "Backend", items: ["Spring Boot", "NestJS", "Express", "FastAPI"] },
      {
        title: "Frontend & apps",
        items: ["React", "Next.js", "Vite", "Tailwind CSS", "Flutter", "Jetpack Compose", "Tauri", "Godot"],
      },
      { title: "Data", items: ["PostgreSQL (Supabase)", "MongoDB", "Redis", "SQLite", "Room"] },
      { title: "Deployment & tools", items: ["Docker", "Render", "Vercel", "Git & GitHub", "PlatformIO", "Wokwi"] },
    ],
    education: [
      {
        period: "Ongoing",
        title: "Software Engineering · fifth semester",
        place: "Universidad Cooperativa de Colombia (UCC)",
        detail:
          "Software patterns, data structures, software design, interface design and web frameworks.",
      },
      {
        period: "2021 – 2025",
        title: "Electronic Engineering",
        place: "Universidad de Nariño",
        detail:
          "Specialization track in Automation and Control. Electives in environmental variable measurement, electrical energy regulation in Colombia, and networks and telematic services.",
      },
    ],
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "English proficiency requirement passed (Universidad de Nariño)" },
    ],
    principles: [
      { title: "Problem first", body: "What can be measured, which decisions can be automated and what the result looks like." },
      { title: "Measured, not eyeballed", body: "If something can be checked, I check it by running something: tests, measurements, simulation." },
      { title: "Hardware and software as one system", body: "Every part has a purpose, from sensor to interface." },
      {
        title: "Learning by doing",
        body: "Try, get it wrong, understand the mistake and try again. AgroPulse went through several versions before its final form.",
      },
      {
        title: "Interfaces with judgment",
        body: "Clear hierarchy, good contrast, light and dark modes, and nothing that looks like a template.",
      },
    ],
    testimonials: [
      { quote: "Testimonial pending from a professor.", author: "Professor · UCC", pending: true },
      { quote: "Testimonial pending from a project teammate.", author: "Teammate", pending: true },
      { quote: "Testimonial pending from a user or client.", author: "Project user", pending: true },
    ],
  },
};

export type Testimonial = { quote: string; author: string; pending: boolean };

export function getPortfolio(locale: Locale) {
  const text = localized[locale];
  const projects: Project[] = getProjects(locale);
  const zones: Zone[] = zoneBase.map((zone) => ({ ...zone, ...zoneText[locale][zone.id] }));
  const t = ui[locale];

  return {
    locale,
    t,
    identity: { name: NAME, email: EMAIL, github: GITHUB_PROFILE, ...text.identity },
    projects,
    zones,
    skillGroups: text.skillGroups,
    education: text.education,
    experience: [...projects].sort(byRecency).map((project) => ({
      id: project.id,
      position: project.position,
      project: project.name,
      period: formatPeriod(locale, project),
      summary: project.summary,
      highlights: project.approach.slice(0, 2),
      technologies: project.technologies,
    })),
    languages: text.languages,
    principles: text.principles,
    testimonials: text.testimonials as Testimonial[],
    cvPath: cvPath[locale],
    navLinks: [
      { href: "#about", label: t.nav.about },
      { href: "#projects", label: t.nav.projects },
      { href: "#experience", label: t.nav.experience },
      { href: "#education", label: t.nav.education },
      { href: cvPath[locale], label: t.nav.cv },
      { href: "#contact", label: t.nav.contact },
    ],
  };
}

export type Portfolio = ReturnType<typeof getPortfolio>;
