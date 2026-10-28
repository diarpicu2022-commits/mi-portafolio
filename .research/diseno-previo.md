# Diseño — Diecu's Engineering Quest

**Estado:** aprobado por Diego Armando Pinta Cuasquen el 2026-10-28; pendiente de revisión del documento.

## Objetivo

Crear un portafolio personal para Diseño de Interfaces que cumpla todos los requisitos del profesor y se presente como una aventura 2D cenital, original y accesible. El visitante controla un personaje de Diego a través de un mapa compacto; cada zona abre contenido profesional. El sitio también ofrece navegación convencional para quien no quiera usar el mapa.

## Público y mensaje

El público principal es el profesor del curso y posibles revisores técnicos. El portafolio debe comunicar que Diego combina Ingeniería de Software e Ingeniería Electrónica para construir sistemas completos: desde sensores y microcontroladores hasta backend, frontend e interfaces claras.

## Dirección visual

- Nombre de la experiencia: **Diecu's Engineering Quest**.
- Inspiración abstracta: JRPG de aventura cenital de consola portátil y anime. No se usarán personajes, arte, nombres, música ni recursos de franquicias de terceros.
- Pixel art original, con bosque profundo, verde esmeralda, azul tinta, crema pergamino y acentos ámbar.
- Motivos: senderos, invernadero, laboratorio, academia, terminales, circuitos, runas y señalética de aventura.

## Recorrido y zonas

1. **Escena de llegada.** Muestra el personaje, Diego Armando Pinta Cuasquen, UCC · quinto semestre, y accesos a Explorar, CV y GitHub.
2. **Laboratorio.** Perfil, propuesta de valor, habilidades y stack técnico.
3. **Bosque de Código.** Proyecto Ecos de la Tierra.
4. **Invernadero IoT.** SISCAN y AgroPulse.
5. **Academia.** CampusWatch/Agenda y experiencia académica.
6. **Archivo/terminal.** NotaScan y proyectos adicionales: Harmonia, EcoVolt, SETPasto+, Tower Defense y Proxy IA.
7. **Posada.** Tres tarjetas de testimonios, inicialmente señaladas como pendientes de sustituir por testimonios reales.
8. **Plaza.** Contacto, GitHub y descarga del CV.

Los puntos de interés muestran una señal de interacción al acercarse. Al activar uno se abre un panel con contenido, imagen o captura cuando exista, tecnologías y enlaces. Los paneles se cierran mediante un botón o Escape.

## Requisitos funcionales

- Movimiento por WASD y flechas; interacción por E o Enter.
- Controles táctiles en móvil: joystick direccional y botón de interacción.
- Colisiones simples para que el personaje no atraviese obstáculos.
- Menú fijo y accesos por ancla a Perfil, Proyectos, Experiencia, CV y Contacto.
- Cada proyecto contiene nombre, descripción, tecnologías, enlace GitHub y demo solo si existe; el enlace ausente se representa claramente, sin enlace roto.
- Botón de descarga de CV PDF.
- Contacto visible: `diarpicu2022@gmail.com` y [GitHub](https://github.com/diarpicu2022-commits). No se muestra número telefónico.

## Arquitectura

El proyecto será una aplicación nueva de **Next.js, TypeScript y Tailwind CSS**.

- `app/`: página inicial, estilos globales y metadatos.
- `components/`: intro, navegación, mapa, controles móviles, panel de zona, secciones convencionales, pie de página.
- `data/`: tipos y datos tipados de zonas, proyectos, habilidades, experiencia y testimonios.
- `public/`: avatar/sprites originales, iconos, capturas seleccionadas y `cv-diego-armando-pinta-cuasquen.pdf`.

El componente del mapa mantiene solo el estado de posición, dirección, zona próxima y panel activo. Los datos no están embebidos en la lógica de movimiento, por lo que editar contenido no altera el mapa.

## Contenido inicial

- Identidad: Diego Armando Pinta Cuasquen; estudiante de Ingeniería de Software, UCC, quinto semestre.
- Proyectos prioritarios: Ecos de la Tierra, SISCAN, NotaScan, CampusWatch/Agenda, AgroPulse, Harmonia, EcoVolt, SETPasto+, Tower Defense y Proxy IA.
- Perfil técnico: C/C++, Java, TypeScript, JavaScript, Python, Kotlin y GDScript; React, Next.js, Vite, Tailwind, Spring Boot, NestJS, Express, FastAPI; PostgreSQL/Supabase, MongoDB, Redis y SQLite; ESP32, Arduino y control automático.
- CV: documento profesional descargable, sin teléfono; usa correo y GitHub.

## Accesibilidad y comportamiento resiliente

- Los controles visuales son botones con etiqueta; el foco de teclado será visible.
- Escape cierra paneles; Enter permite activar el punto de interés actual.
- Se respeta `prefers-reduced-motion`.
- La navegación convencional permite recorrer todos los contenidos sin usar el mapa ni atajos de juego.
- En pantallas pequeñas, el mapa y los paneles mantienen controles táctiles y legibilidad; las secciones convencionales se muestran como tarjetas verticales.
- Las imágenes, demos y testimonios pendientes se muestran con estados explícitos, no con contenido falso ni enlaces rotos.

## Validación

- Verificar movimiento, límites y colisiones del personaje.
- Verificar apertura y cierre de cada zona, navegación por teclado y controles táctiles.
- Validar vistas de móvil, tableta y escritorio.
- Ejecutar comprobaciones de lint/build de Next.js.
- Confirmar los requisitos de la guía: menú, hero/CV, perfil, proyectos, mínimo tres tarjetas de testimonios, experiencia, contacto, sección adicional de habilidades, pie y responsive.

## Entregables

1. Proyecto Next.js/TypeScript/Tailwind funcional.
2. CV PDF descargable.
3. `HISTORIAL_PORTAFOLIO.md` actualizado durante el trabajo.
4. Código listo para publicar en GitHub y desplegar en Vercel.
