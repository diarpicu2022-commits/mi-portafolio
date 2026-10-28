# Historial del portafolio

## 2026-10-28 · Implementación del plan

Se implementó el plan de `.research/plan-previo.md` sobre el scaffold de Next.js.

**Hecho**
- Datos tipados en `data/portfolio.ts` y reglas puras del mapa en `lib/world.ts` (movimiento, colisiones, zona cercana).
- Mapa interactivo accesible (`components/portfolio-world.tsx`): flechas/WASD, E/Enter, cruceta táctil, clic en edificios, estado anunciado con `role="status"`.
- Paneles de zona como diálogo modal: Escape, botón Cerrar, foco atrapado y devuelto al mapa.
- Navegación fija, escena de llegada (Explorar, CV, GitHub), secciones Perfil, Proyectos, Experiencia, Testimonios (3 pendientes) y Contacto, pie de página.
- Pixel art original en SVG, paleta bosque/tinta/pergamino/ámbar, fuente Press Start 2P para títulos, soporte de `prefers-reduced-motion`.
- CV de una página generado desde los mismos datos (`npm run cv`), sin teléfono.
- Pruebas: Vitest (reglas del mapa, alcanzabilidad de todas las zonas, interacción, secciones) y Playwright en escritorio y móvil.

**Verificación**
- `npm run lint`, `npm test` (15 pruebas), `npm run e2e` (6 pruebas) y `npm run build` sin errores.
- Revisión visual a 1440 px y 390 px: sin scroll horizontal ni errores de consola.

**Pendiente de Diego**
- Revisar descripciones y tecnologías de cada proyecto en `data/portfolio.ts` (son un primer borrador) y regenerar el CV con `npm run cv`.
- Añadir las URL exactas de repositorio (`repo`) y demos (`demo`) cuando existan.
- Sustituir los testimonios pendientes por testimonios reales.
- Añadir capturas de los proyectos (`image`) si se desean.
- Desplegar en Vercel.

## 2026-10-28 · Mejoras

**Jugabilidad**
- Animación de caminar con sprites para arriba, abajo y los lados.
- Cruceta táctil con pulsación continua; ritmo de paso estable al mantener una tecla.
- Progreso "Zonas visitadas x/7" (con ★ en cada zona visitada), guardado en el navegador, y logro al visitarlas todas.
- Diálogo estilo JRPG que se escribe letra a letra (completo para lectores de pantalla, instantáneo con reducir movimiento, botón para saltar).
- Sonidos 8-bit sintetizados con Web Audio, apagados por defecto.

**Visual**
- Pantalla de inicio con escena pixel art y "Presiona Start".
- Mapa con flores, cercas, huerto y letrero; un edificio distinto por zona (antena, cabaña, cúpula de vidrio, campanario, terminal, chimenea, fuente).
- Modo noche con ventanas iluminadas (automático de 19:00 a 6:00, conmutable).
- Página 404 temática.

**Profesional**
- Versión completa en inglés en `/en`, con su propio CV PDF.
- Sección "Proceso de diseño" con paleta y decisiones.
- Formulario de contacto que abre el correo del visitante (sin backend).
- Imagen Open Graph generada para compartir en redes, por idioma.
- Vercel Analytics (solo se activa en despliegues de Vercel).
- Soporte de capturas por proyecto (`image`).

**Verificación**
- `npm run lint`, `npm test` (24 pruebas), `npm run e2e` (12 pruebas) y `npm run build` sin errores.
- Lighthouse en `/` y `/en`: 100 en accesibilidad, buenas prácticas y SEO; rendimiento 100 escritorio / 97 móvil. Se corrigieron contraste, tamaño de enlaces y nombres accesibles.

**Sigue pendiente de Diego**
- Capturas reales en `public/projects/` y el campo `image` de cada proyecto.
- Descripciones definitivas (en ambos idiomas), `repo` y `demo` exactos; luego `npm run cv`.
- Testimonios reales.
- Desplegar en Vercel y activar Analytics.
