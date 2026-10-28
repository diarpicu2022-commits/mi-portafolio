import type { Locale } from "@/data/portfolio";

const GH = "https://github.com/diarpicu2022-commits";

export type ProjectStatus = "complete" | "in-progress" | "research";

export type ProjectLink = { label: string; url: string };

export type CaseStudy = {
  /** Job title held on this project, shown in the experience section and the CV. */
  position: string;
  /** One-line hook shown on cards and at the top of the case study. */
  summary: string;
  role: string;
  context: string;
  challenge: string;
  approach: string[];
  outcome: string[];
};

export type Project = {
  id: string;
  name: string;
  /** Period worked, "YYYY-MM", taken from the repositories' commit history. */
  start: string;
  /** "present" while the project is still active. */
  end: string | "present";
  status: ProjectStatus;
  technologies: string[];
  links: ProjectLink[];
  /** Live demo URL; omitted until a public demo is confirmed. */
  demo?: string;
  /** Screenshot or GIF under public/, e.g. "/projects/agropulse.png". */
  image?: string;
} & CaseStudy;

type ProjectBase = Omit<Project, keyof CaseStudy>;

// Every fact below comes from the project's own repository (README, manifests or source tree).
const base: ProjectBase[] = [
  {
    id: "agropulse",
    name: "AgroPulse",
    start: "2026-03",
    end: "2026-05",
    status: "complete",
    technologies: ["ESP32", "C++", "PlatformIO", "Java 17", "Spring Boot", "Supabase", "Docker", "React", "TypeScript"],
    links: [
      { label: "Firmware", url: `${GH}/firmware-AgroPulse` },
      { label: "Backend", url: `${GH}/backend-AgroPulse` },
      { label: "Frontend", url: `${GH}/frontend-AgroPulse` },
    ],
  },
  {
    id: "siscan",
    name: "SISCAN",
    start: "2026-10",
    end: "present",
    status: "research",
    technologies: ["ESP32", "Control automático", "Flutter", "Dart"],
    links: [{ label: "App móvil", url: `${GH}/siscan-movil` }],
  },
  {
    id: "ecos",
    name: "Ecos de la Tierra",
    start: "2026-09",
    end: "present",
    status: "in-progress",
    technologies: ["Godot 4", "GDScript", "Python"],
    links: [{ label: "GitHub", url: `${GH}/ecos-de-la-tierra` }],
  },
  {
    id: "notascan",
    name: "NotaScan",
    start: "2026-10",
    end: "present",
    status: "in-progress",
    technologies: ["Tauri", "React", "TypeScript", "Tailwind", "Framer Motion"],
    links: [
      { label: "Escritorio", url: `${GH}/notascan-escritorio` },
      { label: "Subida por QR", url: `${GH}/notascan-subir` },
    ],
  },
  {
    id: "campuswatch",
    name: "CampusWatch / Agenda",
    start: "2026-09",
    end: "present",
    status: "in-progress",
    technologies: ["Kotlin", "Jetpack Compose", "Wear OS", "Room", "SQLCipher"],
    links: [{ label: "GitHub", url: `${GH}/agenda-android` }],
  },
  {
    id: "hidromon",
    name: "HidroMon",
    start: "2026-10",
    end: "2026-10",
    status: "complete",
    technologies: ["NestJS", "TypeScript", "Node.js"],
    links: [{ label: "GitHub", url: `${GH}/hidromon-nestjs` }],
  },
  {
    id: "harmonia",
    name: "Harmonia",
    start: "2026-04",
    end: "2026-04",
    status: "complete",
    technologies: ["Express", "TypeScript", "MongoDB", "Redis", "Groq", "OAuth", "React", "Vite"],
    links: [{ label: "GitHub", url: `${GH}/Harmonia` }],
  },
  {
    id: "proxy-ia",
    name: "Proxy IA",
    start: "2026-04",
    end: "2026-04",
    status: "complete",
    technologies: ["Java", "Spring Boot", "React", "Docker"],
    links: [
      { label: "Backend", url: `${GH}/proxy-ai-backend` },
      { label: "Frontend", url: `${GH}/proxy-ai-frontend` },
    ],
  },
  {
    id: "ecovolt",
    name: "EcoVolt",
    start: "2026-05",
    end: "2026-05",
    status: "complete",
    technologies: ["Python", "FastAPI"],
    links: [{ label: "GitHub", url: `${GH}/EcoVolt` }],
  },
  {
    id: "setpasto",
    name: "SETPasto+",
    start: "2026-08",
    end: "2026-08",
    status: "complete",
    technologies: ["Node.js", "Express", "EJS", "Tailwind"],
    links: [{ label: "GitHub", url: `${GH}/Taller-Contenido--voz-y-internacionalizacion` }],
  },
  {
    id: "tower-defense",
    name: "Tower Defense",
    start: "2026-03",
    end: "2026-03",
    status: "complete",
    technologies: ["Java", "Canvas 2D", "REST API"],
    links: [{ label: "GitHub", url: `${GH}/TowerDefenseDecorator` }],
  },
];

const studies: Record<Locale, Record<string, CaseStudy>> = {
  es: {
    agropulse: {
      position: "Desarrollador IoT full stack",
      summary:
        "Monitoreo de invernaderos de punta a punta: el nodo lee temperatura, humedad y suelo, y acciona bomba, ventilador, calefactor y puerta.",
      role: "Desarrollo completo: firmware, backend y frontend.",
      context:
        "Proyecto IoT para invernaderos que une un nodo de campo con un ESP32, una API en la nube y un panel web.",
      challenge:
        "Mantener estables las condiciones de un invernadero exige revisar varias variables a la vez y reaccionar a tiempo; hacerlo a mano es lento y propenso a errores.",
      approach: [
        "Firmware para ESP32-WROOM-32D con PlatformIO: lee DHT11, DHT22 y humedad de suelo; acciona bomba, ventilador, calefactor y puerta por relés; muestra el estado en una pantalla OLED SSD1306.",
        "Envío de lecturas en JSON por WiFi-HTTP, con respaldo automático por Serial USB si no hay red.",
        "API REST en Java 17 y Spring Boot 3.2: Spring Security con JWT, detección de anomalías, reglas de automatización, alertas por correo con SendGrid y circuit breaker con Resilience4j.",
        "Supabase (PostgreSQL) en producción y SQLite en desarrollo; contenedor Docker desplegado en Render.",
        "Panel en React 18 y TypeScript con Recharts, MapLibre, shadcn/ui, GSAP y Lenis, desplegado en Vercel con patrón Repository/Service.",
      ],
      outcome: [
        "Sistema completo repartido en tres repositorios: firmware, backend y frontend.",
        "Patrones GoF (creacionales, estructurales y de comportamiento) y estructuras de datos aplicadas: buffer circular de sensores, cola de riego y pila de alertas.",
        "Varias versiones iterativas (v3, v5.1, v8) antes de la forma final.",
      ],
    },
    siscan: {
      position: "Ingeniero de sistemas embebidos y desarrollador móvil",
      summary:
        "Secado inteligente de café: sistema híbrido solar-eléctrico para secar café pergamino en Nariño, controlado por un ESP32.",
      role: "Investigación, electrónica de control y app móvil.",
      context:
        "Proyecto de investigación sobre el secado de café pergamino en Nariño, una tarea que depende del clima y se controla a ojo.",
      challenge:
        "Secar el café de forma uniforme exige controlar temperatura y humedad durante horas, aprovechando el sol sin depender solo de él.",
      approach: [
        "Diseño de un sistema híbrido solar-eléctrico donde un ESP32 mide temperatura y humedad.",
        "Control automático del calor y la ventilación a partir de esas mediciones.",
        "App móvil en Flutter con tokens de diseño propios y pruebas de widgets y de capturas de referencia (goldens).",
      ],
      outcome: [
        "Investigación en curso: el sistema de control y la app móvil se desarrollan en paralelo.",
        "Une las dos carreras: control automático de Ingeniería Electrónica y desarrollo móvil de Ingeniería de Software.",
      ],
    },
    ecos: {
      position: "Desarrollador de videojuegos",
      summary: "RPG 2D por turnos en pixel art sobre conciencia ambiental, exportable a PC y Android.",
      role: "Diseño de juego, programación y arte generado por código.",
      context: "Videojuego hecho en Godot 4 con GDScript que convierte la conciencia ambiental en mecánicas de combate.",
      challenge:
        "Lograr que el mensaje ambiental no sea un texto encima del juego, sino la forma de ganar cada combate.",
      approach: [
        "Sistema de debilidad ambiental: los monstruos se regeneran hasta que el jugador aplica la habilidad ecológica correcta.",
        "IA de monstruos por pesos y una tabla Q en el jefe final, que aprende a resistir la habilidad que el jugador repite.",
        "Arquitectura orientada a objetos con clases base (Combatant, Monster, Skill, StatusEffect, Item).",
        "Interfaz de batalla con la dirección «Ceniza y Brasa»: todo en grises y el verde de la purificación como único color saturado.",
        "Fuente y sprites generados con scripts de Python.",
      ],
      outcome: [
        "Seis combates jugables desde un selector de regiones, con cinco personajes y el jefe final.",
        "Prueba de concepto por consola que verifica las reglas sin interfaz.",
        "Pendiente: exploración top-down, diálogos, guardado y audio.",
      ],
    },
    notascan: {
      position: "Diseñador UI y desarrollador frontend",
      summary:
        "Sistema académico de notas: la IA detecta la calificación manuscrita, el docente la verifica y el sistema la guarda.",
      role: "Diseño de interfaces y desarrollo de la app de escritorio.",
      context: "App de escritorio para docentes que convierte exámenes en papel en notas digitales verificadas.",
      challenge: "Pasar a mano las notas de exámenes en papel es lento y propenso a errores de transcripción.",
      approach: [
        "App de escritorio con Tauri, React, TypeScript, Tailwind y Framer Motion.",
        "Design system propio de NotaScan, usado como contrato de diseño.",
        "Página móvil a la que se llega con un código QR para subir fotos de los exámenes, que valida con el servidor un permiso temporal.",
      ],
      outcome: [
        "Flujo completo: detectar con IA, verificar por parte del docente y guardar.",
        "Decisiones y verificación de cada paso documentadas en anexos de UX.",
      ],
    },
    campuswatch: {
      position: "Desarrollador Android",
      summary:
        "Agenda personal Android para quien estudia y trabaja, con módulo para reloj Wear OS y datos cifrados.",
      role: "Diseño, arquitectura y desarrollo Android.",
      context: "App nativa en Kotlin y Jetpack Compose, con módulos :app, :core:domain y Wear OS.",
      challenge:
        "Organizar clases, trabajo y desplazamientos sin perder datos personales ni depender de la nube.",
      approach: [
        "Toda la lógica de tiempo y conflictos en un módulo Kotlin puro con pruebas.",
        "Base de datos cifrada con Room y SQLCipher, con la clave en Android Keystore y sin copia en la nube.",
        "Privacidad desde el diseño según la Ley 1581 de 2012: consentimiento informado y derechos del titular dentro de la app.",
        "Accesibilidad medida sobre el render: contraste AA (AAA en cifras clave), toques de al menos 48 dp y escala de fuente 2.0.",
      ],
      outcome: [
        "En desarrollo, con verificación automatizada en emulador.",
        "Contrato de diseño propio («Tablero de salidas») con registro de enmiendas.",
      ],
    },
    hidromon: {
      position: "Desarrollador backend",
      summary: "API REST para monitorear la humedad de cultivos con sensores IoT y alertas por umbral.",
      role: "Desarrollo backend.",
      context: "Backend de una plataforma de monitoreo de humedad para cultivos.",
      challenge:
        "Saber a tiempo cuándo la humedad del suelo o del ambiente de un cultivo se sale del rango adecuado.",
      approach: [
        "NestJS y TypeScript con modelo, DTO, controlador y servicio por recurso.",
        "Cinco recursos (usuarios, sensores, zonas, lecturas y alertas) con CRUD y una búsqueda propia cada uno.",
        "Umbrales mínimos y máximos por zona; las lecturas fuera de rango generan alertas Alta o Baja.",
      ],
      outcome: ["API documentada con modelo entidad-relación y ejemplos de cada endpoint."],
    },
    harmonia: {
      position: "Desarrollador full stack",
      summary: "Reproductor de música inteligente con IA.",
      role: "Desarrollo full stack.",
      context: "Aplicación web con backend propio y recomendaciones apoyadas en IA.",
      challenge: "Combinar reproducción, cuentas de usuario e IA sin comprometer la seguridad de la API.",
      approach: [
        "Backend en Express y TypeScript con MongoDB (Mongoose) y Redis.",
        "Inicio de sesión con Google OAuth mediante Passport y JWT, validación de entradas y límite de peticiones.",
        "Integración con Groq para las funciones de IA.",
        "Frontend en React, Vite y Tailwind, desplegado en Vercel.",
      ],
      outcome: ["Aplicación full stack con autenticación, caché e IA integradas."],
    },
    "proxy-ia": {
      position: "Desarrollador backend",
      summary: "Plataforma de generación con IA que aplica el patrón Proxy para controlar cuotas por plan y límites de peticiones.",
      role: "Desarrollo backend y frontend.",
      context: "Servicio de generación con IA con control de uso por plan.",
      challenge: "Evitar el abuso y los costos descontrolados de un servicio de IA de pago.",
      approach: [
        "API en Spring Boot donde un proxy intercepta cada generación y comprueba cuota y límite de peticiones.",
        "Excepciones propias para cuota agotada y exceso de peticiones, y una tarea programada que reinicia el uso diario.",
        "Frontend en React y Vite; backend empaquetado en Docker.",
      ],
      outcome: ["El patrón Proxy separa la regla de negocio (cuotas) de la llamada al modelo."],
    },
    ecovolt: {
      position: "Desarrollador backend",
      summary: "Monitoreo y análisis de energía solar para optimizar el rendimiento de paneles.",
      role: "Desarrollo backend.",
      context: "Sistema de monitoreo para instalaciones de paneles solares.",
      challenge: "Convertir los datos de los paneles en información útil para decidir.",
      approach: [
        "Backend en Python con FastAPI para recolectar, procesar y almacenar datos de los paneles.",
        "Separación en backend y frontend para la visualización del estado y la producción.",
      ],
      outcome: ["Base del sistema de monitoreo de producción solar en tiempo real."],
    },
    setpasto: {
      position: "Diseñador de contenido y desarrollador web",
      summary: "Rediseño del portal del transporte público de Pasto, con auditoría de contenido y voz y en cuatro idiomas.",
      role: "Diseño de contenido y desarrollo web.",
      context: "Rediseño del portal de información del transporte público de Pasto.",
      challenge: "Hacer que la información del transporte público sea clara para cualquier persona, también en otros idiomas.",
      approach: [
        "Auditoría del contenido y definición de la voz del portal.",
        "Internacionalización a cuatro idiomas.",
        "Sitio en Node, Express y EJS con Tailwind.",
      ],
      outcome: ["Portal rediseñado con contenido auditado y cuatro idiomas."],
    },
    "tower-defense": {
      position: "Desarrollador de videojuegos",
      summary: "Juego tower defense que aplica el patrón Decorator para mejorar torres en tiempo real.",
      role: "Desarrollo del juego y del backend.",
      context: "Juego web con motor y API en Java.",
      challenge: "Mostrar de forma jugable cómo el patrón Decorator apila comportamientos sin modificar la clase base.",
      approach: [
        "Mejoras como decoradores apilables: disparo rápido, disparo congelante, escudo y generador de oro.",
        "Motor de juego en Java con servidor HTTP embebido y API REST.",
        "Juego completo en Canvas 2D: oleadas, enemigos con barra de vida y economía de oro.",
      ],
      outcome: ["Juego jugable en el navegador donde cada mejora es un decorador visible."],
    },
  },
  en: {
    agropulse: {
      position: "Full-stack IoT developer",
      summary:
        "End-to-end greenhouse monitoring: the node reads temperature, humidity and soil, and drives the pump, fan, heater and door.",
      role: "Full build: firmware, backend and frontend.",
      context: "IoT project for greenhouses joining an ESP32 field node, a cloud API and a web dashboard.",
      challenge:
        "Keeping greenhouse conditions stable means watching several variables at once and reacting in time; doing it by hand is slow and error-prone.",
      approach: [
        "ESP32-WROOM-32D firmware with PlatformIO: reads DHT11, DHT22 and soil moisture; drives pump, fan, heater and door through relays; shows status on an SSD1306 OLED.",
        "Readings sent as JSON over WiFi-HTTP, with automatic Serial USB fallback when offline.",
        "Java 17 + Spring Boot 3.2 REST API: Spring Security with JWT, anomaly detection, automation rules, SendGrid email alerts and a Resilience4j circuit breaker.",
        "Supabase (PostgreSQL) in production and SQLite in development; Docker container deployed on Render.",
        "React 18 + TypeScript dashboard with Recharts, MapLibre, shadcn/ui, GSAP and Lenis, deployed on Vercel using a Repository/Service pattern.",
      ],
      outcome: [
        "Complete system across three repositories: firmware, backend and frontend.",
        "GoF patterns (creational, structural and behavioral) and data structures in use: circular sensor buffer, irrigation queue and alert stack.",
        "Several iterative versions (v3, v5.1, v8) before the final form.",
      ],
    },
    siscan: {
      position: "Embedded systems engineer and mobile developer",
      summary:
        "Smart coffee drying: a hybrid solar-electric system for drying parchment coffee in Nariño, controlled by an ESP32.",
      role: "Research, control electronics and mobile app.",
      context: "Research project on drying parchment coffee in Nariño, a weather-dependent task usually judged by eye.",
      challenge: "Drying coffee evenly means controlling temperature and humidity for hours, using the sun without relying on it alone.",
      approach: [
        "A hybrid solar-electric design where an ESP32 measures temperature and humidity.",
        "Automatic control of heat and ventilation from those measurements.",
        "Flutter mobile app with its own design tokens plus widget and golden tests.",
      ],
      outcome: [
        "Ongoing research: the control system and the mobile app are developed in parallel.",
        "It joins both degrees: automatic control from Electronic Engineering and mobile development from Software Engineering.",
      ],
    },
    ecos: {
      position: "Game developer",
      summary: "Turn-based 2D pixel-art RPG about environmental awareness, exportable to PC and Android.",
      role: "Game design, programming and code-generated art.",
      context: "A Godot 4 / GDScript game that turns environmental awareness into combat mechanics.",
      challenge: "Make the environmental message the way you win each fight, not text on top of the game.",
      approach: [
        "Environmental weakness system: monsters regenerate until the player applies the right ecological skill.",
        "Weighted monster AI and a Q-table final boss that learns to resist the skill the player repeats.",
        "Object-oriented architecture with base classes (Combatant, Monster, Skill, StatusEffect, Item).",
        "Battle UI under the «Ash and Ember» direction: a grey world where purification green is the only saturated color.",
        "Font and sprites generated by Python scripts.",
      ],
      outcome: [
        "Six playable battles from a region selector, with five characters and the final boss.",
        "Console proof of concept that verifies the rules without a UI.",
        "Still to do: top-down exploration, dialogue, saving and audio.",
      ],
    },
    notascan: {
      position: "UI designer and frontend developer",
      summary: "Academic grading system: AI reads the handwritten grade, the teacher verifies it and the system stores it.",
      role: "Interface design and desktop app development.",
      context: "Desktop app for teachers that turns paper exams into verified digital grades.",
      challenge: "Copying grades from paper exams by hand is slow and prone to transcription errors.",
      approach: [
        "Desktop app with Tauri, React, TypeScript, Tailwind and Framer Motion.",
        "NotaScan's own design system, used as the design contract.",
        "A mobile page reached via QR code to upload exam photos, validating a temporary permission with the server.",
      ],
      outcome: [
        "Complete flow: AI detection, teacher verification and storage.",
        "Decisions and verification for each step documented in UX annexes.",
      ],
    },
    campuswatch: {
      position: "Android developer",
      summary: "Personal Android planner for people who study and work, with a Wear OS module and encrypted data.",
      role: "Design, architecture and Android development.",
      context: "Native Kotlin + Jetpack Compose app with :app, :core:domain and Wear OS modules.",
      challenge: "Organize classes, work and commutes without losing personal data or depending on the cloud.",
      approach: [
        "All time and conflict logic in a pure, tested Kotlin module.",
        "Encrypted database with Room and SQLCipher, key in Android Keystore and no cloud backup.",
        "Privacy by design under Colombian Law 1581 of 2012: informed consent and data-subject rights inside the app.",
        "Accessibility measured on the render: AA contrast (AAA on key figures), 48 dp touch targets and 2.0 font scale.",
      ],
      outcome: [
        "In development, with automated verification on an emulator.",
        "Its own design contract («Departures board») with an amendment log.",
      ],
    },
    hidromon: {
      position: "Backend developer",
      summary: "REST API to monitor crop humidity with IoT sensors and threshold alerts.",
      role: "Backend development.",
      context: "Backend of a humidity monitoring platform for crops.",
      challenge: "Know in time when a crop's soil or air humidity leaves its safe range.",
      approach: [
        "NestJS and TypeScript with model, DTO, controller and service per resource.",
        "Five resources (users, sensors, zones, readings and alerts) with CRUD and a custom search each.",
        "Minimum and maximum thresholds per zone; out-of-range readings raise High or Low alerts.",
      ],
      outcome: ["API documented with an entity-relationship model and examples for every endpoint."],
    },
    harmonia: {
      position: "Full-stack developer",
      summary: "Smart music player powered by AI.",
      role: "Full-stack development.",
      context: "Web app with its own backend and AI-assisted features.",
      challenge: "Combine playback, user accounts and AI without compromising API security.",
      approach: [
        "Express + TypeScript backend with MongoDB (Mongoose) and Redis.",
        "Google OAuth sign-in through Passport and JWT, input validation and rate limiting.",
        "Groq integration for the AI features.",
        "React, Vite and Tailwind frontend deployed on Vercel.",
      ],
      outcome: ["Full-stack app with authentication, caching and AI integrated."],
    },
    "proxy-ia": {
      position: "Backend developer",
      summary: "AI generation platform using the Proxy pattern to enforce per-plan quotas and rate limits.",
      role: "Backend and frontend development.",
      context: "AI generation service with per-plan usage control.",
      challenge: "Prevent abuse and runaway costs on a paid AI service.",
      approach: [
        "Spring Boot API where a proxy intercepts every generation and checks quota and rate limit.",
        "Custom exceptions for exhausted quota and too many requests, plus a scheduled job that resets daily usage.",
        "React + Vite frontend; backend packaged with Docker.",
      ],
      outcome: ["The Proxy pattern keeps the business rule (quotas) apart from the model call."],
    },
    ecovolt: {
      position: "Backend developer",
      summary: "Solar energy monitoring and analysis to optimize panel performance.",
      role: "Backend development.",
      context: "Monitoring system for solar panel installations.",
      challenge: "Turn panel data into information people can act on.",
      approach: [
        "Python + FastAPI backend to collect, process and store panel data.",
        "Separate backend and frontend for status and production visualization.",
      ],
      outcome: ["Foundation for real-time solar production monitoring."],
    },
    setpasto: {
      position: "Content designer and web developer",
      summary: "Redesign of Pasto's public transport portal, with a content and voice audit, in four languages.",
      role: "Content design and web development.",
      context: "Redesign of the public transport information portal for Pasto.",
      challenge: "Make public transport information clear to everyone, including in other languages.",
      approach: [
        "Content audit and a defined voice for the portal.",
        "Internationalization into four languages.",
        "Node, Express and EJS site with Tailwind.",
      ],
      outcome: ["Redesigned portal with audited content in four languages."],
    },
    "tower-defense": {
      position: "Game developer",
      summary: "Tower defense game that uses the Decorator pattern to upgrade towers in real time.",
      role: "Game and backend development.",
      context: "Web game with a Java engine and API.",
      challenge: "Show in a playable way how Decorator stacks behavior without changing the base class.",
      approach: [
        "Upgrades as stackable decorators: rapid fire, freezing shot, shield and gold generator.",
        "Java game engine with an embedded HTTP server and REST API.",
        "Full Canvas 2D game: waves, enemies with health bars and a gold economy.",
      ],
      outcome: ["A browser game where every upgrade is a visible decorator."],
    },
  },
};

const linkLabels: Record<string, string> = {
  "App móvil": "Mobile app",
  Escritorio: "Desktop",
  "Subida por QR": "QR upload",
};

export function getProjects(locale: Locale): Project[] {
  return base.map((project) => ({
    ...project,
    ...studies[locale][project.id],
    technologies:
      locale === "en"
        ? project.technologies.map((tech) => (tech === "Control automático" ? "Automatic control" : tech))
        : project.technologies,
    links:
      locale === "en"
        ? project.links.map((link) => ({ ...link, label: linkLabels[link.label] ?? link.label }))
        : project.links,
  }));
}

export const projectIds = base.map((project) => project.id);

const monthNames: Record<Locale, string[]> = {
  es: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

const formatMonth = (locale: Locale, value: string) => {
  const [year, month] = value.split("-").map(Number);
  return `${monthNames[locale][month - 1]} ${year}`;
};

/** "mar 2026 – may 2026", "sep 2026 – actualidad" or a single month. */
export function formatPeriod(locale: Locale, project: Pick<Project, "start" | "end">) {
  if (project.end === "present") return `${formatMonth(locale, project.start)} – ${locale === "es" ? "actualidad" : "present"}`;
  if (project.end === project.start) return formatMonth(locale, project.start);
  return `${formatMonth(locale, project.start)} – ${formatMonth(locale, project.end)}`;
}

/** Most recent first: active projects, then by end and start month. */
export function byRecency(a: Project, b: Project) {
  const end = (project: Project) => (project.end === "present" ? "9999-99" : project.end);
  return end(b).localeCompare(end(a)) || b.start.localeCompare(a.start);
}
