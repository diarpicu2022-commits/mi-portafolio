import { byRecency, formatPeriod, getProjects, type Project } from "@/data/projects";

export type { Project } from "@/data/projects";
export type Locale = "es" | "en";
export const locales: Locale[] = ["es", "en"];

export const GITHUB_PROFILE = "https://github.com/diarpicu2022-commits";
export const LINKEDIN_PROFILE = "https://www.linkedin.com/in/diego-armando-pinta-cuasquen-a1b908390/";
export const EMAIL = "diarpicu2022@gmail.com";
export const NAME = "Diego Armando Pinta Cuasquen";
/** URL pública del portafolio, tomada del campo «homepage» del repositorio mi-portafolio en GitHub. La usa el CV. */
export const PORTFOLIO_URL = "https://mi-portafolio-beta-kohl.vercel.app";

/**
 * Retrato de la portada. Para cambiar la foto se reemplaza el archivo y se actualizan ancho y alto
 * con las medidas en píxeles del archivo nuevo. El layout se adapta solo (ver README).
 */
export const retrato = {
  src: "/retrato/retrato-diego-busto.webp",
  ancho: 1063,
  alto: 1237,
  /** Densidad mínima de píxeles que se acepta en pantalla. Con 1.5 el tope de alto es alto / 1.5. */
  densidadMinima: 1.5,
};
/** Alto máximo en px CSS al que se pinta el retrato sin perder nitidez. */
export const retratoTope = Math.floor(retrato.alto / retrato.densidadMinima);

export const homePath: Record<Locale, string> = { es: "/", en: "/en" };
export const cvPath: Record<Locale, string> = {
  es: "/cv-diego-armando-pinta-cuasquen.pdf",
  en: "/cv-diego-armando-pinta-cuasquen-en.pdf",
};

export const projectPath = (locale: Locale, id: string) =>
  locale === "es" ? `/proyectos/${id}` : `/en/projects/${id}`;

export type SectionId = "about" | "projects" | "experience" | "education" | "testimonials" | "contact";
export type AnchorId = SectionId | "skills" | "quest";

/** Anclas de la página de inicio: en español en «/» y en inglés en «/en». */
export const sectionAnchors: Record<Locale, Record<AnchorId, string>> = {
  es: {
    about: "perfil",
    projects: "proyectos",
    skills: "habilidades",
    experience: "experiencia",
    education: "formacion",
    testimonials: "testimonios",
    quest: "mapa",
    contact: "contacto",
  },
  en: {
    about: "profile",
    projects: "projects",
    skills: "skills",
    experience: "experience",
    education: "education",
    testimonials: "testimonials",
    quest: "map",
    contact: "contact",
  },
};

/** Enlace a una sección de la página de inicio desde cualquier otra página. */
export const sectionHref = (locale: Locale, id: AnchorId) => `${homePath[locale]}#${sectionAnchors[locale][id]}`;

/** El mapa 2D, que salió de la portada (decisión 3 del anexo). */
export const questPath: Record<Locale, string> = { es: "/quest", en: "/en/quest" };

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
      menu: "Menú",
      home: "Inicio",
    },
    hero: {
      kicker: "▶ Nueva partida",
      role: "Ingeniería Electrónica + Ingeniería de Software",
      semester: "UCC · quinto semestre · Universidad de Nariño",
      pressStart: "Presiona Start",
      explore: "Explorar",
      downloadCv: "Descargar CV",
    },
    portada: {
      viewProjects: "Ver proyectos",
      projects: "proyectos",
      degrees: "ingenierías",
      portrait: "Retrato de Diego Armando Pinta Cuasquen",
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
      noPublicDemo: "Sin demo pública",
      diagram: "Esquema",
      illustration: "Ilustración",
      then: "luego",
      choose: "Elige un proyecto",
      hashPrefix: "proyecto-",
      imageAlt: (name: string) => `Captura de ${name}`,
      caseStudy: "Ver caso de estudio",
      status: { complete: "Terminado", "in-progress": "En desarrollo", research: "Investigación" },
    },
    caseStudy: {
      back: "Todos los proyectos",
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
      questIntro: "La versión anterior de este portafolio, un mapa 2D en pixel art. Se recorre con el teclado o con controles táctiles.",
      questEnter: "Entrar al mapa",
      questBack: "Volver al portafolio",
    },
    form: {
      title: "Envíame un mensaje",
      name: "Tu nombre",
      message: "Mensaje",
      submit: "Abrir en mi correo",
      hint: "Se abrirá tu aplicación de correo con el mensaje listo para enviar.",
      subject: (name: string) => `Contacto desde el portafolio — ${name}`,
      errorName: "Escribe tu nombre.",
      errorMessage: "Escribe el mensaje.",
      noServer: "Nada se envía a un servidor. El mensaje sale desde tu correo.",
    },
    footer: {
      rights: "Pixel art y código originales.",
      grid: "Ver retícula",
      noCookies: "Este sitio no usa cookies.",
      privacy: "Política de privacidad",
    },
    franja: {
      label: "Dos ingenierías",
      hardware: "Hardware",
      software: "Software",
    },
    testimonialsNote: "Publicado con autorización de cada persona.",
    questImageAlt: "Mapa 2D en pixel art con el personaje de Diego entre los edificios del laboratorio y la academia.",
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
      menu: "Menu",
      home: "Home",
    },
    hero: {
      kicker: "▶ New game",
      role: "Electronic Engineering + Software Engineering",
      semester: "UCC · fifth semester · Universidad de Nariño",
      pressStart: "Press Start",
      explore: "Explore",
      downloadCv: "Download CV",
    },
    portada: {
      viewProjects: "View projects",
      projects: "projects",
      degrees: "engineering degrees",
      portrait: "Portrait of Diego Armando Pinta Cuasquen",
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
      noPublicDemo: "No public demo",
      diagram: "Diagram",
      illustration: "Illustration",
      then: "then",
      choose: "Choose a project",
      hashPrefix: "project-",
      imageAlt: (name: string) => `${name} screenshot`,
      caseStudy: "Read the case study",
      status: { complete: "Complete", "in-progress": "In progress", research: "Research" },
    },
    caseStudy: {
      back: "All projects",
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
      questIntro: "The previous version of this portfolio, a 2D pixel-art map. You can walk it with the keyboard or with touch controls.",
      questEnter: "Enter the map",
      questBack: "Back to the portfolio",
    },
    form: {
      title: "Send me a message",
      name: "Your name",
      message: "Message",
      submit: "Open in my email app",
      hint: "Your email app will open with the message ready to send.",
      subject: (name: string) => `Portfolio contact — ${name}`,
      errorName: "Write your name.",
      errorMessage: "Write the message.",
      noServer: "Nothing is sent to a server. The message leaves from your own email.",
    },
    footer: {
      rights: "Original pixel art and code.",
      grid: "Show grid",
      noCookies: "This site does not use cookies.",
      privacy: "Privacy policy",
    },
    franja: {
      label: "Two engineering degrees",
      hardware: "Hardware",
      software: "Software",
    },
    testimonialsNote: "Published with each person's permission.",
    questImageAlt: "2D pixel-art map with Diego's character between the laboratory and academy buildings.",
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
      pasantia: {
        rotulo: "Experiencia profesional",
        cargo: "Pasante de ingeniería",
        lugar: "Gobernación de Nariño",
        periodo: "jul 2025 – oct 2026",
        etapas: [
          {
            nombre: "Subsecretaría de Innovación",
            periodo: "jul 2025 – dic 2025",
            logros: [
              "Diseñé en Autodesk Inventor la carcasa del dispositivo NPK, un sensor de nutrientes del suelo, y la llevé a prototipo con impresión 3D.",
              "Reparé la PCB del NPK, cambié su pantalla OLED y arreglé la conexión del GPS, al que le sumé el registro de fecha.",
              "Armé en la web de la Subsecretaría la página del NPK con dashboard de datos, ficha técnica, manual, formulario de solicitud y gestión de roles.",
              "Programé gafas de realidad virtual con aplicaciones educativas y apoyé el stand en la Cumbre CIOS Nariño, La Mejor Taza 2025 y la BioExpo 2025.",
            ],
          },
          {
            nombre: "Centro de Innovación Social de Nariño (CISNA), Secretaría TIC",
            periodo: "may 2026 – oct 2026",
            logros: [
              "Diseñé e implementé un secador híbrido solar-eléctrico con control automatizado para café pergamino, mi trabajo de grado.",
              "Ensayo piloto con 2 lotes pareados, 221 horas y cerca de 139.800 lecturas de sensores.",
              "El café se secó un 12 % más rápido que al aire libre, y el pronóstico del punto de retiro bajó el error mediano de 42,6 h a 7,6 h.",
              "Trabajo de grado sustentado el 5 de noviembre de 2026 ante jurados de la Universidad de Nariño.",
            ],
          },
        ],
        tecnologias: ["ESP32", "Autodesk Inventor", "Impresión 3D", "PCB", "Sensores", "Control automático", "Web", "Realidad virtual"],
      },
      medios: {
        rotulo: "Medios · diseño gráfico y motion",
        cargo: "Monitor",
        lugar: "Pasto Noticias",
        periodo: "oct 2026 – actualidad",
        logros: [
          "Tres plantillas editables en Photoshop para redes y transmisión (1920×1080 y 1080×1080), con capas de texto reales, recortes para fotos y el contraste corregido a AA.",
          "Fondo animado vertical 9:16 en 4K y en loop para la pantalla del estudio, hecho con 31 fotos reales de Pasto con licencia libre y sus créditos.",
        ],
        imagenes: [
          { src: "/experiencia/pasto-noticias-plantilla.webp", width: 1200, height: 675, alt: "Plantilla horizontal de noticia con titular, foto y puntos clave en azul marino y rojo" },
          { src: "/experiencia/pasto-noticias-fondo.webp", width: 540, height: 960, alt: "Cuadro del fondo animado vertical con el logo de Pasto Noticias y fotos de la ciudad" },
        ],
        tecnologias: ["Photoshop", "Motion graphics", "HTML a vídeo", "Montserrat"],
      },
      monitoria: {
        rotulo: "Monitoría · televisión universitaria",
        cargo: "Monitor de televisión",
        lugar: "Universidad de Nariño, CECUN",
        periodo: "jun 2023 – actualidad",
        logros: [
          "Edité capítulos del programa Chaski de la Universidad de Nariño en Premiere Pro, entre ellos los de la temporada 4.",
          "Hice el cabezote 2026 de Chaski, la animación de entrada del programa.",
          "Grabé notas en campo con cámara y diseñé gráficos, títulos y piezas animadas para el canal.",
        ],
        imagenes: [
          { src: "/experiencia/chaski-17.webp", width: 960, height: 540, alt: "Gráficos de colores del cabezote 2026 de Chaski" },
          { src: "/experiencia/chaski-24.webp", width: 960, height: 540, alt: "Logo de Chaski Udenar al cierre del cabezote" },
          { src: "/experiencia/chaski-05.webp", width: 960, height: 540, alt: "Toma aérea del campus de la Universidad de Nariño en el cabezote" },
        ],
        tecnologias: ["Premiere Pro", "After Effects", "Photoshop", "Cámara", "Motion graphics", "Edición de video"],
      },
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
          "Profundización en Automatización y Control. Trabajo de grado por pasantía, un secador de café solar-eléctrico con control automatizado, aprobado como Meritorio (90/100). Ceremonia de grado en diciembre de 2026.",
      },
      {
        period: "2020",
        title: "Técnico en Producción de Cafés Especiales",
        place: "SENA, Regional Nariño",
        detail:
          "Formación técnica en el proceso del café especial. Cursos cortos del SENA en soporte técnico de equipos de cómputo (2017), postcosecha de frutas y hortalizas (2018) e inglés básico (2022).",
      },
      {
        period: "2022",
        title: "Técnico en Soporte, Sistemas e Informática",
        place: "INETCOL",
        detail: "Programa técnico de cuatro semestres, terminado en octubre de 2022.",
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
      {
        quote:
          "Dirigí el trabajo de grado de Diego, un secador de café híbrido solar-eléctrico con control automatizado. Lo llevó de la idea a un prototipo probado en campo, con un ensayo de 221 horas y datos bien medidos, y lo sustentó con mucha claridad. Es constante, aprende rápido y no se queda en la teoría.",
        author: "Germán Obando",
        role: "Director del trabajo de grado · Ingeniería Electrónica, Universidad de Nariño",
        linkedin: "https://www.linkedin.com/in/german-obando-975434221/",
        pending: false,
      },
      {
        quote:
          "Diego trabajó con nosotros en el dispositivo NPK y después en el secador de café. Diseñó carcasas, reparó tarjetas y armó la página con el dashboard de datos. Resuelve por su cuenta, pregunta cuando hace falta y entrega lo que promete.",
        author: "William Mora",
        role: "Ingeniero · Centro de Innovación Social de Nariño (CISNA)",
        linkedin: "",
        pending: false,
      },
      {
        quote:
          "Diego hizo las plantillas editables de Pasto Noticias y el fondo animado de la pantalla del estudio. Respetó nuestro estilo al detalle, corrigió errores que nosotros no habíamos visto y entregó plantillas que el equipo edita con facilidad.",
        author: "Sebastián Romero Solís",
        role: "Pasto Noticias",
        linkedin: "",
        pending: false,
      },
    ],
  },
  en: {
    identity: {
      role: "Electronic Engineering + Software Engineering",
      university: "Universidad Cooperativa de Colombia (UCC)",
      semester: "Fifth semester",
      tagline: "From sensor to interface.",
      pasantia: {
        rotulo: "Professional experience",
        cargo: "Engineering intern",
        lugar: "Government of Nariño",
        periodo: "Jul 2025 – Oct 2026",
        etapas: [
          {
            nombre: "Innovation Office",
            periodo: "Jul 2025 – Dec 2025",
            logros: [
              "Designed the enclosure of the NPK device, a soil nutrient sensor, in Autodesk Inventor and took it to a 3D printed prototype.",
              "Repaired the NPK board, replaced its OLED screen and fixed the GPS connection, adding date logging.",
              "Built the NPK page on the office website with a data dashboard, datasheet, manual, request form and role management.",
              "Set up virtual reality headsets with educational apps and staffed the stand at Cumbre CIOS Nariño, La Mejor Taza 2025 and BioExpo 2025.",
            ],
          },
          {
            nombre: "Nariño Social Innovation Center (CISNA), ICT Office",
            periodo: "May 2026 – Oct 2026",
            logros: [
              "Designed and built a hybrid solar-electric dryer with automated control for parchment coffee, my degree project.",
              "Pilot trial with 2 paired batches, 221 hours and about 139,800 sensor readings.",
              "Coffee dried 12% faster than in open air, and the harvest point forecast cut the median error from 42.6 h to 7.6 h.",
              "Degree project defended on 5 November 2026 before a Universidad de Nariño panel.",
            ],
          },
        ],
        tecnologias: ["ESP32", "Autodesk Inventor", "3D printing", "PCB", "Sensors", "Automatic control", "Web", "Virtual reality"],
      },
      medios: {
        rotulo: "Media · graphic and motion design",
        cargo: "Monitor",
        lugar: "Pasto Noticias",
        periodo: "Oct 2026 – present",
        logros: [
          "Three editable Photoshop templates for social and broadcast (1920×1080 and 1080×1080), with live text layers, photo clipping masks and contrast fixed to AA.",
          "A vertical 9:16 4K looping animated background for the studio screen, built with 31 openly licensed photos of Pasto and their credits.",
        ],
        imagenes: [
          { src: "/experiencia/pasto-noticias-plantilla.webp", width: 1200, height: 675, alt: "Horizontal news template with headline, photo and key points in navy and red" },
          { src: "/experiencia/pasto-noticias-fondo.webp", width: 540, height: 960, alt: "Frame of the vertical animated background with the Pasto Noticias logo and city photos" },
        ],
        tecnologias: ["Photoshop", "Motion graphics", "HTML to video", "Montserrat"],
      },
      monitoria: {
        rotulo: "Teaching assistantship · university TV",
        cargo: "Television assistant",
        lugar: "Universidad de Nariño, CECUN",
        periodo: "Jun 2023 – present",
        logros: [
          "Edited episodes of Chaski, the Universidad de Nariño TV show, in Premiere Pro, including season 4.",
          "Made the 2026 Chaski opening sequence.",
          "Shot field stories on camera and designed graphics, titles and animated pieces for the channel.",
        ],
        imagenes: [
          { src: "/experiencia/chaski-17.webp", width: 960, height: 540, alt: "Colourful graphics from the 2026 Chaski opening" },
          { src: "/experiencia/chaski-24.webp", width: 960, height: 540, alt: "Chaski Udenar logo at the end of the opening" },
          { src: "/experiencia/chaski-05.webp", width: 960, height: 540, alt: "Aerial shot of the Universidad de Nariño campus in the opening" },
        ],
        tecnologias: ["Premiere Pro", "After Effects", "Photoshop", "Camera", "Motion graphics", "Video editing"],
      },
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
          "Specialization track in Automation and Control. Degree project through an internship, a solar-electric coffee dryer with automated control, graded Meritorious (90/100). Graduation ceremony in December 2026.",
      },
      {
        period: "2020",
        title: "Technician in Specialty Coffee Production",
        place: "SENA, Nariño",
        detail:
          "Technical training in the specialty coffee process. Short SENA courses in computer maintenance (2017), fruit and vegetable post-harvest (2018) and basic English (2022).",
      },
      {
        period: "2022",
        title: "Technician in IT Support and Systems",
        place: "INETCOL",
        detail: "Four-semester technical program, completed in October 2022.",
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
      {
        quote:
          "I supervised Diego's degree project, a hybrid solar-electric coffee dryer with automated control. He took it from idea to a field-tested prototype, with a 221-hour trial and carefully measured data, and defended it very clearly. He is consistent, learns fast and does not stop at theory.",
        author: "Germán Obando",
        role: "Degree project supervisor · Electronic Engineering, Universidad de Nariño",
        linkedin: "https://www.linkedin.com/in/german-obando-975434221/",
        pending: false,
      },
      {
        quote:
          "Diego worked with us on the NPK device and then on the coffee dryer. He designed enclosures, repaired boards and built the page with the data dashboard. He solves things on his own, asks when needed and delivers what he promises.",
        author: "William Mora",
        role: "Engineer · Nariño Social Innovation Center (CISNA)",
        linkedin: "",
        pending: false,
      },
      {
        quote:
          "Diego made the editable templates for Pasto Noticias and the animated background for the studio screen. He matched our style in detail, fixed mistakes we had not noticed and delivered templates our team edits with ease.",
        author: "Sebastián Romero Solís",
        role: "Pasto Noticias",
        linkedin: "",
        pending: false,
      },
    ],
  },
};

export type Testimonial = { quote: string; author: string; role: string; linkedin: string; pending: boolean };

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
    pasantia: text.identity.pasantia,
    medios: text.identity.medios,
    monitoria: text.identity.monitoria,
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
    anchors: sectionAnchors[locale],
    questPath: questPath[locale],
    navLinks: [
      { href: `#${sectionAnchors[locale].about}`, label: t.nav.about },
      { href: `#${sectionAnchors[locale].projects}`, label: t.nav.projects },
      { href: `#${sectionAnchors[locale].experience}`, label: t.nav.experience },
      { href: `#${sectionAnchors[locale].education}`, label: t.nav.education },
      { href: cvPath[locale], label: t.nav.cv },
      { href: `#${sectionAnchors[locale].contact}`, label: t.nav.contact },
    ],
  };
}

export type Portfolio = ReturnType<typeof getPortfolio>;
