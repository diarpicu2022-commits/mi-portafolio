# Estado del proyecto — Diecu's Engineering Quest

Portafolio de **Diego Armando Pinta Cuasquen** («Diecu»). Este documento reúne todo lo que está hecho, cómo se verificó y lo que falta.
Última actualización: 28 de octubre de 2026.

- Código: rama `claude/brave-shannon-jebp8m` → `feat/portfolio-foundation`.
- Detalle cronológico: [`HISTORIAL_PORTAFOLIO.md`](../HISTORIAL_PORTAFOLIO.md). Cómo correrlo: [`README.md`](../README.md). Reglas del repo: [`CLAUDE.md`](../CLAUDE.md).

---

## 1. Qué es

Un portafolio para que cualquier persona (reclutadores, clientes, docentes) conozca a Diego y su CV. Se presenta como una aventura 2D en pixel art: el visitante camina por un mapa y cada edificio abre una parte del portafolio. Todo el contenido existe también como página normal, sin necesidad de jugar.

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Lenis, GSAP, `@react-pdf/renderer` para el CV, Vitest y Playwright para las pruebas.

---

## 2. Qué está hecho

### 2.1 Contenido (todo real, sin datos inventados)

| Sección | Contenido | Fuente |
|---|---|---|
| Perfil | Frase «Del sensor a la interfaz», propuesta de valor, «Cómo trabajo» (5 principios) y habilidades en 7 grupos | README del perfil de GitHub |
| Proyectos | 11 proyectos numerados, con estado, tecnologías y enlace exacto a cada repositorio | README, manifiestos y código de cada repositorio |
| Casos de estudio | Una página por proyecto: cargo, rol, periodo, contexto, reto, cómo lo resolví y resultado | Ídem |
| Experiencia | Cada proyecto presentado como experiencia laboral, con cargo y periodo, de lo más reciente a lo más antiguo | Periodos tomados del historial de commits |
| Formación | Ingeniería de Software, UCC (en curso, quinto semestre); Ingeniería Electrónica, Universidad de Nariño (2021–2025, profundización en Automatización y Control) | Certificado de notas en Drive |
| Idiomas | Español nativo; inglés: eficiencia en inglés aprobada (Universidad de Nariño) | Certificado de notas |
| Testimonios | Tres tarjetas marcadas «Pendiente» | Faltan los testimonios reales |
| Contacto | Correo, GitHub, descarga del CV y formulario que abre el correo del visitante | — |

**Proyectos incluidos:** AgroPulse, SISCAN, Ecos de la Tierra, NotaScan, CampusWatch / Agenda, HidroMon, Harmonia, Proxy IA, EcoVolt, SETPasto+ y Tower Defense.

**Privacidad:** no se publican teléfono, cédula ni notas académicas (hay pruebas que lo comprueban).

**Enfoque profesional:** sin referencias a materias, talleres ni «proyecto final»; se quitó la sección «Proceso de diseño» porque hablaba del portafolio y no de Diego.

### 2.2 CV en PDF

- Dos páginas, en español (`/cv-diego-armando-pinta-cuasquen.pdf`) e inglés (`/cv-diego-armando-pinta-cuasquen-en.pdf`).
- Barra lateral: contacto, formación, habilidades e idiomas. Columna principal: perfil, experiencia (cargo, proyecto, periodo, logros, tecnologías y repositorio) y cómo trabajo.
- Se genera desde los mismos datos de la web con `npm run cv`, así web y CV nunca se contradicen.

### 2.3 La aventura 2D

- Mapa de 15×9 casillas con árboles, agua, rocas, flores, cercas, huerto y letrero. Un edificio distinto por zona (laboratorio con antena, cabaña del bosque, invernadero de cristal, academia con campanario, archivo con terminal, posada con chimenea y fuente de la plaza). Todo el pixel art es original, dibujado en SVG.
- Movimiento con flechas o WASD, entrar con E o Enter, cerrar con Escape. Animación de caminar en cuatro direcciones y colisiones.
- Móvil: cruceta táctil (mantener pulsado para caminar) y botón «Entrar». También se puede hacer clic en cada edificio.
- Progreso «Zonas visitadas x/7» guardado en el navegador, ★ en zonas visitadas y logro al completarlas.
- Diálogo estilo JRPG letra a letra (completo para lectores de pantalla, instantáneo con «reducir movimiento»).
- Sonidos 8-bit sintetizados (apagados por defecto) y modo noche con ventanas iluminadas.

### 2.4 Diseño y movimiento

- Paleta tinta, bosque, esmeralda, pergamino y ámbar; tipografía pixel en títulos y Geist en el texto.
- Tipografía fluida con `clamp()`, índice numerado de proyectos y retícula de 12 columnas visible con el botón «Ver retícula» del pie.
- Apariciones al hacer scroll con IntersectionObserver (las tarjetas con enlaces solo se desvanecen, sin moverse).
- En escritorio: desplazamiento suave con Lenis, sincronizado con el ticker de GSAP, y botones magnéticos con `gsap.quickTo`. En móvil no se cargan, para no penalizar el rendimiento.
- Nada de lo anterior corre si el sistema pide «reducir movimiento».
- Página 404 temática («Te perdiste en el bosque») e imagen para redes sociales por idioma.

### 2.5 Idiomas

Versión completa en español (`/`, `/proyectos/<id>`) y en inglés (`/en`, `/en/projects/<id>`). El botón de idioma lleva a la misma página en el otro idioma.

### 2.6 Accesibilidad

Enlace «Saltar al contenido», foco visible, teclado completo, diálogos con `role="dialog"` y foco atrapado, controles táctiles etiquetados, contraste AA, objetivos táctiles de al menos 24 px, texto alternativo y respeto a `prefers-reduced-motion`.

### 2.7 Errores encontrados y corregidos en el camino

- Las apariciones usaban `visibility: hidden` y sacaban enlaces del orden de tabulación.
- Al pulsar un edificio, el mapa tomaba el foco y hacía scroll antes del clic, que caía en otro sitio.
- `scroll-behavior: smooth` competía con Lenis en cada scroll programático.
- El jugador tapaba los nombres de las zonas; contraste del «Presiona Start»; nombres accesibles que no coincidían con el texto visible.

---

## 3. Verificación

| Comprobación | Resultado |
|---|---|
| `npm run lint` | Sin errores |
| `npm test` (Vitest) | 31 pruebas pasan: reglas del mapa y alcance de todas las zonas, interacción, progreso, diálogo, sonido y noche, secciones, experiencia, formación, casos de estudio en ambos idiomas, formulario, ausencia de datos privados |
| `npm run e2e` (Playwright, escritorio y móvil) | 16 pruebas pasan, dos ejecuciones seguidas |
| `npm run build` | Sin errores; las 22 páginas de casos de estudio se generan estáticas |
| Lighthouse, accesibilidad / buenas prácticas / SEO | 100 / 100 / 100 en todas las páginas |
| Lighthouse, rendimiento | Escritorio 100; móvil: portada 94, inglés 94, casos de estudio 99 |
| Revisión visual | 390 px, 1280 px y 1440 px, sin scroll horizontal ni errores de consola |

Capturas en [`docs/pantallazos/`](pantallazos/).

---

## 4. Historial de entregas

| PR | Contenido | Estado |
|---|---|---|
| [#1](https://github.com/diarpicu2022-commits/mi-portafolio/pull/1) | Base: mapa, paneles, secciones, CV y pruebas | Fusionado |
| [#2](https://github.com/diarpicu2022-commits/mi-portafolio/pull/2) | Jugabilidad, versión en inglés, 404, imagen social, formulario, Lighthouse | Fusionado |
| [#3](https://github.com/diarpicu2022-commits/mi-portafolio/pull/3) | Contenido real, experiencia profesional, casos de estudio, CV nuevo, movimiento, reglas del repo y este documento | Abierto |

---

## 5. Qué falta

### 5.1 Lo que solo Diego puede hacer

| # | Pendiente | Dónde se cambia | Por qué importa |
|---|---|---|---|
| 1 | **Revisar y fusionar el PR #3** | GitHub | Hasta entonces, la rama principal no tiene el contenido real |
| 2 | **Periodos reales** de los proyectos subidos a GitHub en un solo día: Tower Defense (mar 2026), Harmonia (abr), Proxy IA (abr), EcoVolt (may), SETPasto+ (ago) e HidroMon (oct). Hoy muestran un solo mes | `start` y `end` en `data/projects.ts` | El profesor pidió reflejar el tiempo real dedicado como experiencia |
| 3 | **Confirmar si cada proyecto fue individual o en equipo** y ajustar cargo y rol (por ejemplo, el README de EcoVolt menciona un equipo) | `position` y `role` en `data/projects.ts` | Que la experiencia sea exacta ante un reclutador |
| 4 | **Demos publicadas**: confirmar cuáles funcionan (en el código aparecen `agropulse.vercel.app` y `harmonia-frontend-chi.vercel.app`) | `demo` en `data/projects.ts` | Hoy todas las tarjetas dicen «Demo no disponible» |
| 5 | **Capturas o GIF** de cada proyecto | Archivos en `public/projects/` y `image` en `data/projects.ts` | Una imagen convence más que el texto; la tarjeta y el caso de estudio ya la muestran si existe |
| 6 | **Tres testimonios reales** (docente, compañero, usuario) | `testimonials` en `data/portfolio.ts` | Hoy las tarjetas dicen «Pendiente» |
| 7 | **Desplegar en Vercel** y activar Analytics en el panel | Vercel | Hace falta una URL pública para compartir |
| 8 | **Regenerar el CV** tras cualquier cambio de datos | `npm run cv` | El PDF no se actualiza solo |

### 5.2 Mejoras técnicas opcionales

| Mejora | Detalle |
|---|---|
| Integración continua | No hay GitHub Actions: un flujo que corra `lint`, `test`, `e2e` y `build` en cada PR evitaría fusionar algo roto |
| `sitemap.xml` y `robots.txt` | Ayudan a que buscadores indexen las dos versiones y los 22 casos de estudio |
| Rendimiento de la portada en móvil (94) | El tiempo restante es la hidratación del mapa; cargarlo cuando entra en pantalla lo subiría |
| Formulario con envío real | Hoy abre el correo del visitante; con Formspree o Resend se enviaría desde la página (requiere una cuenta) |
| Dominio propio | Si se usa, actualizar `app/site-metadata.ts` para que las imágenes sociales apunten a él |
| Autor de los commits | Los commits de Claude salen con autor «Claude» (configuración del entorno); si Diego prefiere otro autor, se configura `git config user.name/user.email` |

### 5.3 Descartado a propósito

- **3D con WebGL/WebGPU:** según el informe de portafolios premium, diseño y usabilidad pesan el 70 % de la evaluación; el 3D penaliza rendimiento y accesibilidad en móviles, y el portafolio ya tiene identidad propia en 2D.
- **Firmas de Claude en commits y PR:** por la regla de Diego en `CLAUDE.md`. Los PR #1 y #2, ya fusionados, conservan las suyas; quitarlas exigiría reescribir el historial.

---

## 6. Cómo actualizar el contenido

1. Editar `data/projects.ts` (proyectos, periodos, enlaces, casos de estudio) o `data/portfolio.ts` (perfil, habilidades, formación, idiomas, testimonios, textos), en español e inglés.
2. `npm run cv` para regenerar los dos PDF.
3. `npm run lint && npm test && npm run build` (y `npm run e2e` si cambia la interfaz).
4. Abrir un PR con la plantilla de `.github/pull_request_template.md`, con pantallazos.
