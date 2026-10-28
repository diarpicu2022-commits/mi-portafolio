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
