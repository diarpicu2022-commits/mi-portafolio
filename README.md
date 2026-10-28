# Diecu's Engineering Quest

Portafolio de **Diego Armando Pinta Cuasquen** (Ingeniería de Software, UCC) presentado como una aventura 2D cenital en pixel art. El visitante recorre un mapa y cada edificio abre una sección: Laboratorio (perfil y habilidades), Bosque de Código, Invernadero IoT, Academia, Archivo, Posada (testimonios) y Plaza (contacto). Todo el contenido también está disponible en secciones convencionales, sin jugar.

Stack: Next.js (App Router), React, TypeScript y Tailwind CSS. Disponible en español (`/`) e inglés (`/en`).

Incluye: animación de caminar, progreso de zonas con logro, diálogos estilo JRPG, sonidos 8-bit opcionales (Web Audio, sin archivos), modo noche, formulario de contacto, sección de proceso de diseño, imagen para redes sociales, página 404 temática y CV en PDF en ambos idiomas.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Controles

- Flechas o WASD: mover al personaje (con el mapa enfocado).
- E o Enter junto a un edificio: abrir su panel. Escape lo cierra.
- Móvil: cruceta táctil (mantén pulsado para caminar) y botón **Entrar**. También se puede hacer clic en cada edificio.
- Botones **Sonido** y **Noche** sobre el mapa; el progreso y las preferencias se guardan en el navegador.

## Editar el contenido

Todo el texto vive en `data/portfolio.ts`, en español e inglés (identidad, proyectos, habilidades, experiencia, testimonios, proceso, zonas y textos de la interfaz). El mapa está en `lib/world.ts` (`WORLD_LAYOUT`) y el pixel art en `components/pixel-sprites.tsx`; editar contenido no afecta al movimiento.

En `projectBase` (dentro de `data/portfolio.ts`) cada proyecto acepta:

- `repo`: URL exacta del repositorio. Sin ella, la tarjeta enlaza a una búsqueda en el perfil de GitHub.
- `demo`: URL de la demo. Sin ella, se muestra "Demo no disponible".
- `image`: captura o GIF guardado en `public/`, por ejemplo `"/projects/siscan.png"`.

Tras cambiar los datos, regenera los dos CV (español e inglés):

```bash
npm run cv
```

## Pruebas

```bash
npm run lint
npm test
npm run e2e
npm run build
```

`npm test` ejecuta las pruebas unitarias y de componentes (Vitest). `npm run e2e` compila, levanta el sitio y ejecuta Playwright en escritorio y móvil.

Última auditoría Lighthouse (build de producción local): 100 en accesibilidad, buenas prácticas y SEO en móvil y escritorio; rendimiento 100 en escritorio y 97 en móvil.

## Despliegue

1. Sube el repositorio a GitHub.
2. En [Vercel](https://vercel.com/new), importa el repositorio; la configuración de Next.js se detecta sola.
3. Cada push a la rama principal publica una nueva versión.
4. Opcional: activa **Analytics** en el panel del proyecto en Vercel. El componente ya está incluido y solo se carga en despliegues de Vercel.

La URL pública se toma de `VERCEL_PROJECT_PRODUCTION_URL` para las etiquetas de redes sociales; con un dominio propio, actualiza `app/site-metadata.ts`.
