# Diecu's Engineering Quest

Portafolio de **Diego Armando Pinta Cuasquen** (Ingeniería de Software, UCC) presentado como una aventura 2D cenital en pixel art. El visitante recorre un mapa y cada edificio abre una sección: Laboratorio (perfil y habilidades), Bosque de Código, Invernadero IoT, Academia, Archivo, Posada (testimonios) y Plaza (contacto). Todo el contenido también está disponible en secciones convencionales, sin jugar.

Stack: Next.js (App Router), React, TypeScript y Tailwind CSS.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Controles

- Flechas o WASD: mover al personaje (con el mapa enfocado).
- E o Enter junto a un edificio: abrir su panel. Escape lo cierra.
- Móvil: cruceta táctil y botón **Entrar**. También se puede hacer clic en cada edificio.

## Editar el contenido

Todo el texto vive en `data/portfolio.ts` (identidad, proyectos, habilidades, experiencia, testimonios y zonas). El mapa está en `lib/world.ts` (`WORLD_LAYOUT`); editar contenido no afecta al movimiento.

Para enlazar el repositorio exacto o la demo de un proyecto, añade `repo` o `demo` a su entrada. Sin `repo`, la tarjeta enlaza a una búsqueda en el perfil de GitHub; sin `demo`, muestra "Demo no disponible".

Tras cambiar los datos, regenera el CV:

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

## Despliegue

1. Sube el repositorio a GitHub.
2. En [Vercel](https://vercel.com/new), importa el repositorio; la configuración de Next.js se detecta sola.
3. Cada push a la rama principal publica una nueva versión.
