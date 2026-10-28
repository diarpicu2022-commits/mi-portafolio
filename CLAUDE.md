# Portafolio — reglas para trabajar en este repo

Portafolio de Diego Armando Pinta Cuasquen («Diecu»): Next.js + TypeScript + Tailwind, en español (`/`) e inglés (`/en`).
Contenido en `data/portfolio.ts` y `data/projects.ts`; cómo correrlo y probarlo en `README.md`; historial en `HISTORIAL_PORTAFOLIO.md`.

## Contenido: solo datos reales

- Nada inventado: fechas, empleos, certificaciones, métricas ni demos. Cada dato de un proyecto sale de su repositorio.
- Nunca publicar teléfono, cédula ni notas académicas.
- Tras cambiar los datos, regenerar los CV con `npm run cv`.

## Verificación: medida, nunca a ojo

Antes de cada commit: `npm run lint`, `npm test`, `npm run build` y, si cambia la interfaz, `npm run e2e` y capturas.
Se informa de lo que salió, incluidos los fallos.

## Git y PR

- **Nunca firmar**: nada de `Co-Authored-By: Claude`, `Claude-Session:`, «Generated with Claude Code» ni enlaces a claude.ai,
  ni en commits, ni en PR, ni en código o documentación.
- **Siempre abrir un PR** al terminar un cambio, con la plantilla de `.github/pull_request_template.md` (cuatro secciones, en ese orden).
- Los pantallazos no son opcionales. Si de verdad no aplica ninguna captura, se escribe por qué.
