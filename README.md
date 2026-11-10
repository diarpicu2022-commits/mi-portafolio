# Portafolio de Diego Armando Pinta Cuasquen

Portafolio de **Diego Armando Pinta Cuasquen**, estudiante de Ingeniería de Software (UCC) con formación en Ingeniería Electrónica. Diseño editorial con un selector de proyectos como pantalla de selección. Español en `/` e inglés en `/en`.

Stack: Next.js (App Router), React, TypeScript y Tailwind CSS 4. Tipografías Archivo e IBM Plex Mono.

Incluye:

- Portada con nombre, retrato y cifras contadas desde los datos.
- Selector de los 11 proyectos con captura real o esquema de sistema, ficha y enlaces.
- Franja Hardware / Software, habilidades con cifras reales enlazadas a los proyectos, experiencia con miniatura, formación, testimonios pendientes y contacto.
- Un caso de estudio por proyecto (`/proyectos/<id>` y `/en/projects/<id>`).
- El mapa 2D en pixel art de la versión anterior, en `/quest`.
- Política de privacidad en `/privacidad` y `/en/privacy`, borrador técnico pendiente de revisión.
- Imagen para redes por idioma y por proyecto, sitemap, robots y CV en PDF en los dos idiomas.

Contrato de diseño y verificación de cada paso: [`docs/ux/anexos/2026-11-10-rediseno-portafolio.md`](docs/ux/anexos/2026-11-10-rediseno-portafolio.md). Estado del proyecto: [`docs/ESTADO-DEL-PROYECTO.md`](docs/ESTADO-DEL-PROYECTO.md).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Controles del mapa (`/quest`)

- Flechas o WASD: mover al personaje (con el mapa enfocado).
- E o Enter junto a un edificio: abrir su panel. Escape lo cierra.
- Móvil: cruceta táctil (mantén pulsado para caminar) y botón **Entrar**. También se puede hacer clic en cada edificio.
- Botones **Sonido** y **Noche** sobre el mapa; el progreso y las preferencias se guardan en el navegador.

## Editar el contenido

El texto vive en `data/portfolio.ts` (identidad, habilidades, formación, idiomas, testimonios, zonas y textos de la interfaz) y en `data/projects.ts` (cada proyecto con su cargo, periodo y caso de estudio), en español e inglés. Todo dato sale de los repositorios de cada proyecto; la experiencia se genera a partir de los proyectos. El mapa está en `lib/world.ts` (`WORLD_LAYOUT`) y el pixel art en `components/pixel-sprites.tsx`; editar contenido no afecta al movimiento.

En `data/projects.ts` cada proyecto tiene:

- `start` y `end` (`"YYYY-MM"` o `"present"`): periodo de trabajo, mostrado como experiencia.
- `links`: repositorios exactos.
- `demo` (opcional): URL de una demo pública. Sin ella, la ficha dice «Sin demo pública».
- `image` (opcional): captura real con `src`, `width`, `height` y `alt` en los dos idiomas.
- `esquema` (opcional): esquema de sistema por etapas para los proyectos sin captura.

Tras cambiar los datos, regenera los dos CV (español e inglés):

```bash
npm run cv
```

## Añadir la captura, la ilustración o el esquema de un proyecto

En el selector, en la miniatura de experiencia y en la imagen para redes, cada proyecto de `data/projects.ts` muestra lo primero que tenga:

1. `image`, una captura real.
2. `ilustracion`, una ilustración rotulada «Ilustración» (enmienda 14).
3. `esquema`, el esquema de sistema dibujado desde los datos, rotulado «Esquema».
4. La placa roja con el nombre.

En la página de caso manda la captura y, si no hay, el esquema.

Para añadir una ilustración, guarda el archivo en `public/projects/ilustraciones/` en WebP con guion medio y fondo `#F1ECE2`, y añade `ilustracion` con `src`, `width`, `height` y un `alt` en los dos idiomas que empiece por «Ilustración de» y describa el dibujo. Las seis actuales salen de una hoja que Diego generó con IA, recortada con `scripts/recortar-ilustraciones.py`.

Para añadir una captura:

1. Guarda la imagen en `public/projects/` en WebP, con guion medio en el nombre (`agropulse-panel.webp`) y sin ampliarla. 1280 px de ancho bastan.
2. En el proyecto, añade `image` con `src`, `width` y `height` reales del archivo, y `alt` en español e inglés que describa lo que se ve.
3. Anota en un comentario de dónde salió la captura.
4. Si el proyecto tenía `ilustracion` o `esquema`, puedes dejarlos: la captura manda. Los proyectos con captura van primero en la lista (enmienda 10), así que muévelo arriba en `base`.

## Cambiar la foto de la portada

La portada lee el retrato de `retrato` en `data/portfolio.ts`. Para cambiar la foto:

1. Copia el archivo nuevo en `public/retrato/`. Mejor en WebP, recortado y con fondo transparente.
2. En `data/portfolio.ts` cambia `src` por la ruta nueva y pon en `ancho` y `alto` las medidas reales del archivo en píxeles.
3. No hace falta tocar el CSS. La proporción y el tope de alto salen de esos datos. El tope es `alto / densidadMinima` (1.5), así la foto nunca se pinta más grande de lo que su resolución permite.
4. Revisa `/sistema/portada` en 390, 768, 1024 y 1440 px.

## Pruebas

```bash
npm run lint
npm test
npm run e2e
npm run build
```

`npm test` ejecuta las pruebas unitarias y de componentes (Vitest). `npm run e2e` compila, levanta el sitio y ejecuta Playwright en escritorio y móvil.

La auditoría Lighthouse del rediseño está pendiente (ver la sección 16 del anexo). La anterior correspondía a la versión del mapa 2D y ya no aplica.

Las fuentes estáticas de `assets/fuentes` (para la imagen social y el CV) se regeneran con `npm run build && python scripts/fuentes-estaticas.py`.

## Despliegue

1. Sube el repositorio a GitHub.
2. En [Vercel](https://vercel.com/new), importa el repositorio; la configuración de Next.js se detecta sola.
3. Cada push a la rama principal publica una nueva versión.
4. Opcional: activa **Analytics** en el panel del proyecto en Vercel. El componente ya está incluido y solo se carga en despliegues de Vercel.

La URL pública se toma de `VERCEL_PROJECT_PRODUCTION_URL` para las etiquetas de redes, el sitemap y robots. El CV enlaza a `PORTFOLIO_URL` de `data/portfolio.ts`, que hoy es la dirección que figura en el repositorio. Si cambia el dominio, actualiza esa constante y ejecuta `npm run cv`.
