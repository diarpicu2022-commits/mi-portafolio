# Continuar aquí — Portafolio de Diego

Estado al 10 de noviembre de 2026. Léelo antes de tocar nada.

## Dónde está

- Sitio publicado: https://mi-portafolio-beta-kohl.vercel.app (Vercel publica la rama `feat/portfolio-foundation`, que es la rama por defecto del repo).
- Repo: https://github.com/diarpicu2022-commits/mi-portafolio
- Flujo: rama `feature/...` o `fix/...` desde `feat/portfolio-foundation`, PR con la plantilla de `.github/pull_request_template.md`, capturas en el PR y fusión solo cuando Diego la aprueba.
- Último PR fusionado: #11 (monitoría, INETCOL y logo nuevo). Abierto: el de testimonios y la transición de Perfil a Proyectos.

## Cómo quedó el diseño

Diego rechazó la primera versión editorial por estática y sin parecido a sus referencias. La versión actual sigue sus referencias de `Proyectos Finales/Referencias Portafolio` (Abdullah Tariq, Axel Morgan, Tetsuo, Cuong Nguyen, Timothy Ronald).

- Portada con titular «DEL SENSOR A LA INTERFAZ.» en tres líneas con palabras en rojo, foto recortada tipo sticker con borde blanco sobre el bloque rojo, cinta pegada «Electrónica + Software» y cifras.
- Encabezado con el monograma DP (`components/editorial/logo.tsx`), nombre condensado con punto rojo y botones en píldora.
- Cinta negra de tecnologías en movimiento.
- Proyectos con captura en collage alternado sobre negro y proyectos sin captura en un abanico de cartas con las ilustraciones que Diego generó con ChatGPT.
- Franja Hardware / Software que se mueve con el scroll (escritorio) o entra por los lados (celular).
- Habilidades con logos reales (paquete `simple-icons`) y la cifra de proyectos.
- Experiencia con tres tarjetas destacadas (pasantía, monitoría y Pasto Noticias) antes de la cronología de proyectos.
- Estilos nuevos en `app/v2.css` (se carga después de `globals.css` y manda sobre él).

Lo que Diego pidió quitar y no debe volver: líneas negras de 1 px, botones rectangulares con borde, letra monoespaciada en rótulos, firma manuscrita sobre la foto, textos repetidos entre portada y perfil.

## Información de Diego que ya está en el sitio y en el CV

- Pasante de ingeniería, Gobernación de Nariño, jul 2025 a oct 2026. Primero en la Subsecretaría de Innovación (dispositivo NPK, web con dashboard, gafas de realidad virtual) y después en el CISNA, Secretaría TIC (secador de café solar-eléctrico, su trabajo de grado). Fuente: `Documents/INFORME Subsecretaria de INNOVACION DIEGO PINTA 2025.docx` y `Documents/Tesis/CLAUDE.md`.
- Trabajo de grado de Ingeniería Electrónica sustentado el 5 de noviembre de 2026, Meritorio 90/100. Grado en diciembre de 2026.
- Monitor de televisión, Universidad de Nariño (CECUN), desde jun 2023 y sigue. Edición de Chaski, cabezote 2026, cámara y gráficos. Usa Premiere, After Effects y Photoshop. Fuente: hoja de vida y `Downloads/CABEZOTE CHASKI 2026.mp4`.
- Monitor en Pasto Noticias desde oct 2026. Plantillas de Photoshop y fondo animado para el estudio. Fuente: `Pictures/Pasto Noticias/RESUMEN_TRABAJO_PASTO_NOTICIAS.md`.
- Técnico en Producción de Cafés Especiales, SENA (2020), y cursos cortos del SENA.
- Técnico en Soporte, Sistemas e Informática, INETCOL (oct 2022).
- Hoja de vida oficial: `Proyectos Finales/Referencias Portafolio/Hoja de vida Diego.pdf`.

Archivos que NO son de Diego y no se usan: `Downloads/Constancia Laboral 1.pdf` y `2.pdf` (de otra persona) y `Downloads/DIPLOMA.pdf` (de Dulce María Pinta Rincón).

Nunca publicar cédula, teléfono, dirección ni notas. Tampoco nombres de supervisores ni caras de terceros.

## Lo que falta

### Depende de Diego

1. **Foto de portada mejor.** De busto, fondo liso, buena luz, archivo original del celular (no por WhatsApp). Se cambia en `public/retrato/` y las medidas en `retrato` de `data/portfolio.ts`. El README explica cómo.
2. **Testimonios publicados** (PR #12): Germán Obando (director del trabajo de grado, con su LinkedIn), William Mora (CISNA) y Sebastián Romero Solís (Pasto Noticias). Los tres dieron permiso y pidieron que Diego redactara el texto. Falta que cada uno lea su texto y lo confirme. Si alguno pasa su LinkedIn, va en `linkedin` de `testimonials` en `data/portfolio.ts`.
3. **Capturas reales** de AgroPulse, HidroMon, Harmonia, Proxy IA, EcoVolt y Tower Defense, si las tiene. Hoy llevan ilustración y esquema.
4. **Confirmar** que la frase «Abierto a prácticas y proyectos» de la portada es cierta.
5. **Confirmar** que la secadora de la pasantía es la misma línea que SISCAN (el sitio lo dice así).
6. **Revisión de un abogado** de la política de privacidad (`docs/legal/`), que es borrador técnico.
7. **Demos públicas** que funcionen, para poner el enlace en cada proyecto. Hoy todos dicen «Sin demo pública».

### Técnico

1. **Rendimiento móvil.** Lighthouse local en móvil entre 66 y 73. Escritorio 99. Accesibilidad, buenas prácticas y SEO en 100. Lo que más pesa es la hidratación de React y el trabajo de estilo de las animaciones. Se probó `content-visibility: auto` en las secciones y subía a 77, pero rompía la llegada exacta de las anclas del menú. No volver a usarlo sin resolver eso.
2. **Página de caso**: revisar a 390 px con las ilustraciones nuevas, porque solo se verificó a 1440.
3. **Imagen para redes (OG)**: comprobar que muestra el logo nuevo y el estilo actual. Se generó antes de los últimos cambios.
4. **Anexo de diseño** `docs/ux/anexos/2026-11-10-rediseno-portafolio.md`: el contrato de la sección 8 describe la primera versión editorial. Hay que dejar escrito que fue reemplazado por la dirección actual, con fecha.
5. **ESTADO e HISTORIAL** (`docs/ESTADO-DEL-PROYECTO.md`, `HISTORIAL_PORTAFOLIO.md`): ponerlos al día con los PR #5 a #11.
6. **Componentes que ya no se usan en el inicio**: `selector-proyectos.tsx` y `ilustracion-proyecto.tsx`. Revisar con grep si alguien los importa y borrarlos.
7. **Commits con autor**: confirmar que salen a nombre de Diego (`git config user.name` y `user.email`).

## Verificación antes de cada PR

`npm run lint`, `npm test`, `npm run build` y `npm run e2e` (todo pasaba al cierre: 41 unitarias y 38 de extremo a extremo). Si cambian los datos, `npm run cv` para regenerar los dos PDF. Capturas en `docs/pantallazos/rediseno/` y enlazadas en el PR.
