# Portafolio de Diego Armando Pinta Cuasquen

Este es mi portafolio. Soy estudiante de Ingeniería de Software en la Universidad Cooperativa de Colombia y ya terminé Ingeniería Electrónica, así que mis proyectos van del sensor a la interfaz. Aquí están los trabajos de la carrera, la pasantía en la Gobernación de Nariño, la monitoría de televisión y mi hoja de vida.

Está publicado en **https://mi-portafolio-beta-kohl.vercel.app**, en español (`/`) y en inglés (`/en`).

## Para qué sirve

Es para que un profesor, un reclutador o un cliente vea en pocos minutos qué sé hacer y lo compruebe en los proyectos reales, con sus capturas, su repositorio y lo que aprendí en cada uno. No pide cuenta ni guarda nada de quien lo visita.

## Cómo se usa

- **Inicio.** Arranca con la portada y las cifras. Después vienen los proyectos en carrusel (con visor a pantalla completa para ver todas las capturas), la franja Hardware / Software, las habilidades con logos, la experiencia, la formación, los testimonios y el contacto.
- **Caso de cada proyecto** en `/proyectos/<id>` (o `/en/projects/<id>`), con el problema, lo que hice, la galería y los enlaces al código.
- **Hoja de vida** en PDF, en español y en inglés, desde el encabezado.
- **El mapa en pixel art** de la versión anterior sigue en `/quest`, por si alguien quiere recorrerlo como juego.
- **Privacidad** en `/privacidad` y `/en/privacy`.

Las cuentas de prueba para revisar mis aplicaciones están en [`docs/Cuentas de prueba.md`](docs/Cuentas%20de%20prueba.md).

## Cómo está hecho

Next.js 16 (App Router), React 19, TypeScript y Tailwind CSS 4, publicado en Vercel. Las tipografías son Archivo y Permanent Marker. El estilo actual (portada roja con la foto tipo sticker, cinta de tecnologías y titulares condensados) está en `app/v2.css`, que se carga después de `globals.css` y manda sobre él. Los datos de todo el sitio están en `data/portfolio.ts` y `data/projects.ts`.

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

En el carrusel de proyectos, en la miniatura de experiencia y en la imagen para redes, cada proyecto de `data/projects.ts` muestra lo primero que tenga:

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
4. Si el proyecto tenía `ilustracion` o `esquema`, puedes dejarlos, porque la captura manda. Los proyectos con captura van primero en la lista (enmienda 10), así que muévelo arriba en `base`.

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
2. En [Vercel](https://vercel.com/new), importa el repositorio. La configuración de Next.js se detecta sola.
3. Cada push a la rama principal publica una nueva versión.
4. Si quieres, activa **Analytics** en el panel del proyecto en Vercel. El componente ya está incluido y solo se carga en despliegues de Vercel.

La URL pública se toma de `VERCEL_PROJECT_PRODUCTION_URL` para las etiquetas de redes, el sitemap y robots. El CV enlaza a `PORTFOLIO_URL` de `data/portfolio.ts`, que hoy es la dirección que figura en el repositorio. Si cambia el dominio, actualiza esa constante y ejecuta `npm run cv`.
