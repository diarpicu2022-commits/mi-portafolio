# Anexo de diseño. Rediseño del portafolio

Fecha de inicio 10 de noviembre de 2026. La investigación está cerrada y falta elegir la dirección.

## 1. Por qué se rehace

La versión del 28 de octubre presenta el portafolio como un mapa 2D en pixel art. Diego la encontró muy sencilla. El contenido de esa versión es real y está verificado (11 proyectos, dos formaciones, CV en dos idiomas), así que se conserva. Lo que cambia es la cara completa del sitio.

Requisitos del profesor que siguen vigentes (https://structure-portfolio.vercel.app/): Next.js, TypeScript, Tailwind y Vercel. Menú, bienvenida con descarga de CV, acerca de mí, proyectos con repositorio y demo, tres testimonios como mínimo, experiencia académica y laboral, contacto, pie de página y una sección adicional. Debe responder en celular, tablet y escritorio.

## 2. Usuarios

| Quién | Qué necesita | Cómo llega | Nivel técnico |
|---|---|---|---|
| Docente que califica | Encontrar cada sección de la guía y comprobar que responde en tres tamaños | Escritorio, con la rúbrica al lado | Alto |
| Reclutador o líder técnico | Saber en diez segundos qué hace Diego, ver dos proyectos y bajar el CV | Enlace desde el CV o LinkedIn, a menudo en celular | Medio o alto |
| Cliente o compañero | Ver trabajo terminado y escribirle | Enlace por WhatsApp, celular | Bajo o medio |

Público adulto, hispanohablante en su mayoría, con versión en inglés para reclutadores de fuera. No se dirige a menores.

## 3. Análisis de la comunicación

El mensaje que debe quedar es uno solo. Diego construye el sistema completo, del sensor a la interfaz, porque viene de la electrónica y ahora estudia software. La lectura es voluntaria, nadie está obligado a quedarse, así que la portada tiene que dar una razón para seguir bajando. La decisión dominante del visitante es abrir un proyecto o bajar el CV. Todo lo demás acompaña.

Registro: marca. Tono directo, en primera persona, sin frases de agencia.

## 4. Referencias de Diego

Carpeta `Referencias Portafolio`, 15 imágenes y 11 enlaces de Pinterest distintos. Los 11 enlaces abrieron por terminal el 10 de noviembre de 2026 y se revisó la imagen de cada pin.

### 4.1 Lo que se repite

Se agrupan en tres familias, y esa agrupación es la base de las tres direcciones.

**Familia editorial, 8 piezas.** Abdullah Tariq, Axel Morgan, Alex Morgan, Curious by Nature, Bananas (pin 1iVjfeE57), Drama Owns, Mindly (pin 4qcaBnxUL), Explore the Space (pin 2658vugFp).

- Una palabra en grotesca condensada ocupa casi todo el ancho y el sujeto recortado pasa por delante de las letras.
- Papel crema o blanco roto, tinta negra y un solo color de acento (rojo o terracota) puesto como bloque plano detrás del sujeto.
- Retrato en blanco y negro. El color vive en el bloque, no en la foto.
- Secciones con rótulo pequeño en versalitas, número y filete fino. Proyectos numerados 01, 02, 03.

**Familia de juego y anime, 9 piezas.** Collage de selección de personaje y Persona, Gamerlix, Ishtar, Tetsuo, HAPE Prime (pin GeRNm8yW2), pantalla de inicio en pixel art (pin 6rFubE6xw), Brew House (pin 7sNvAerzp), Kamui (pin 4gBvzv2YN), HUD de agente (pin 3Cfyjxyoe).

- Pantalla de selección: lista vertical de retratos a la izquierda, personaje grande al centro, ficha con barras a la derecha.
- Cortes en diagonal y franjas rojas que cruzan la composición, texto en cursiva ancha.
- Pantalla de inicio con menú de dos o tres opciones como primera decisión.
- Fondo casi negro con naranja o rojo, y piezas pegadas unas sobre otras con desfase.

**Familia collage, 6 piezas.** Bruno Luden, Muhamad Faishal, Timothy Ronald, BOBC VII, Cuong Nguyen, Han Nguyen.

- Foto recortada con borde de papel blanco, cinta adhesiva, polaroid inclinada.
- Rótulos escritos a mano y garabatos encima de la tipografía de imprenta.
- Tarjetas en abanico que se pueden tomar.
- La palabra PORTFOLIO repetida en contorno debajo de la versión rellena.

Cuatro pines quedan fuera por tema. Son el castillo (pin 3h6VNFsom), la mano de malla (pin 6NSHo6hMR), la secuencia de apertura ilustrada (pin 6qbDAC4fF) y el arco de fichas de Gather. Sirven como recurso suelto, no como dirección.

### 4.2 Lo que no se copia

Las barras de habilidad con porcentaje (95 %, 90 %) aparecen en tres referencias y no entran. Son cifras inventadas y el repositorio tiene la regla de solo datos reales. Tampoco entran logos de clientes ni contadores de premios que Diego no tiene, ni personajes o arte de franquicias ajenas.

## 5. Fuentes del protocolo

| Fuente | Observación | Decisión aplicable | Límite |
|---|---|---|---|
| Pinterest (referencias de Diego, sección 4) | Palabra gigante con el sujeto por delante, bloque plano de acento | Es la composición de la portada en las tres direcciones | No se copia ningún retrato ni titular ajeno |
| Refero Styles, Freshman https://styles.refero.design/style/a6284fcd-fa69-4469-ac40-4239e5b84a39 | Negro, blanco y rojo señal `#ff2936`. El rojo va en un solo elemento por pantalla y nunca como fondo grande ni relleno de botón. Radio 0, sin sombras | En las direcciones oscuras el rojo se raciona igual. Radio 0 y sin sombras en todo el sitio | Freshman usa serif fina en cursiva, aquí la voz es condensada pesada |
| Refero Styles, Brex https://styles.refero.design/style/b58d92f6-68a8-4358-8fc9-6ea58e6d483b | Un acento brasa `#ff5900` con un solo trabajo por región. Párrafos a la izquierda con ancho máximo cercano a 640 px. La fuente de titulares no baja de 48 px | El acento tiene un trabajo por sección. Medida del texto corrido limitada. La fuente condensada solo en tamaños grandes | No se toma Inter ni el radio de 12 px |
| MotionSites, categoría Portfolio https://motionsites.ai (vista en Chrome) | En «Living Portrait» y «Bold Portfolio Hero» el titular queda detrás del retrato recortado. En «Pink Rider» una cinta de texto corre por detrás de la figura. En «Shelf Hero» los proyectos son lomos en un estante y el elegido sale al frente | El titular va en una capa detrás del sujeto. El índice de proyectos funciona como selector donde el elegido se agranda | Nada de 3D con WebGL, ya se descartó por rendimiento en celular |
| Aceternity UI https://ui.aceternity.com/components | Existen Draggable Card, Card Stack, Sticky Scroll Reveal y Hover Image Links. No hay galería en arco ni cinta adhesiva | La vista previa que sigue al cursor sobre la lista de proyectos y la tarjeta arrastrable son patrones probados | No se instala la librería. Se escriben a mano con `transform` y `opacity` |
| Emil Kowalski https://emilkowal.ski/ui/great-animations | Salida con `ease-out`, por debajo de 300 ms. No animar acciones de teclado. Solo `transform` y `opacity` | Hover y cambio de proyecto en 200 ms con `ease-out`. La navegación por teclado no anima. La entrada de la portada ocurre una vez | La entrada de portada puede durar más porque se ve una sola vez |
| Taste Skill https://tasteskill.dev | Su revisión falla una página con menos de cuatro imágenes, márgenes desiguales o tramos vacíos de 380 px. Pide jerarquía a la izquierda y copia concreta | Cada proyecto destacado lleva captura real. Se medirán tramos vacíos y márgenes en 390, 768 y 1440 px | No se usa su sorteo de direcciones, la dirección sale de las referencias de Diego |

Fuente no accesible. Mobbin, 10 de noviembre de 2026. Por terminal devolvió 403 y en Chrome redirigió a la página de inicio de sesión. No se cuenta entre las seis.

## 6. Direcciones

### A. Portada con selector (recomendada)

Tesis: una portada de revista en papel crema donde el nombre ocupa el ancho y Diego lo atraviesa, y que al llegar a los proyectos se convierte en una pantalla de selección de personaje.

- Base editorial clara: crema, tinta y rojo señal. Grotesca condensada pesada en titulares, sans de texto y mono para rótulos.
- Momento memorable: la sección de proyectos pasa a negro y funciona como selector. Lista a la izquierda, proyecto grande al centro, ficha a la derecha con datos reales (rol, periodo, tecnologías, estado).
- Segundo momento: una franja «Hardware / Software» partida en diagonal que cuenta las dos ingenierías.
- Une la familia editorial con la de juego. Sirve al docente y al reclutador sin perder el gusto de Diego.

### B. Pantalla de selección

Tesis: todo el sitio es el menú de un juego de pelea y Diego es el personaje elegido.

- Fondo casi negro, rojo y un segundo tono frío, cortes en diagonal, cursiva ancha.
- Entrada con «Start». Cada sección es una pantalla, con ficha del personaje, selector de proyectos e historial como lista de misiones.
- Es la que más impresiona y la más cercana al gusto de juego y anime. Cuesta más en legibilidad y puede leerse poco seria ante un reclutador.

### C. Cuaderno pegado

Tesis: un cuaderno de laboratorio hecho a mano, con fotos recortadas, cinta y notas encima.

- Papel gris con grano, tinta, un acento. Recortes con borde blanco, polaroid, cinta, letra manuscrita para notas.
- Proyectos como tarjetas en abanico que se arrastran.
- Es la más personal. Depende por completo de tener buenas fotos y capturas, y es la que más lejos queda de un perfil de ingeniería.

## 7. Decisiones de Diego, 10 de noviembre de 2026

1. Dirección A, portada con selector.
2. Foto. Diego pidió buscar en su equipo la que mejor quedara. Se eligió `Pictures/foto perfil.jpeg` (958 × 960 px). Mira hacia un lado, de tres cuartos, igual que los retratos de las referencias editoriales. Se revisaron otras dos candidatas con nombre de cámara y no eran retratos. La figura mide cerca de 400 × 830 px, así que en pantalla no puede pasar de 560 px de alto sin perder nitidez. Si Diego consigue el original en más resolución, se cambia.
3. El mapa 2D sale de la portada y queda en `/quest` como sección adicional.

## 8. Contrato de diseño

Vigente desde el 10 de noviembre de 2026. Nada de color, tipografía, espaciado o efecto fuera de esta lista. Si algo no funciona se para y se avisa. Cada enmienda lleva fecha y permiso de Diego.

### 8.1 Design Read

- Registro y audiencia: marca. Docente con rúbrica, reclutador con prisa, cliente en celular.
- Escena de uso: enlace abierto desde un CV o un chat, primera pantalla decide si siguen.
- Tesis visual: una portada de revista donde el nombre ocupa el ancho y Diego lo atraviesa sobre un bloque rojo, y que en proyectos se vuelve pantalla de selección.
- Decisión dominante: abrir un proyecto o bajar el CV.
- Riesgo que se evita: la plantilla de portafolio de desarrollador con tarjetas iguales, barras de porcentaje y degradado.

### 8.2 Color

| Token | Valor | Trabajo | Contraste medido |
|---|---|---|---|
| `--papel` | `#F1ECE2` | Fondo de las secciones claras | |
| `--tinta` | `#121211` | Texto y filetes sobre papel | 15.92 sobre papel |
| `--gris` | `#5A554C` | Texto secundario sobre papel | 6.28 sobre papel |
| `--rojo` | `#D92B1F` | Bloque plano y titulares grandes | 4.13 sobre papel, solo texto de 24 px o más |
| `--rojo-texto` | `#B81F14` | Texto pequeño en rojo sobre papel | 5.50 sobre papel |
| `--negro` | `#0D0D0C` | Fondo del selector y del pie | |
| `--papel` sobre negro | `#F1ECE2` | Texto en secciones oscuras | 16.52 |
| `--gris-claro` | `#A39E94` | Texto secundario sobre negro | 7.29 sobre negro |
| `--rojo-claro` | `#FF4A3D` | Texto pequeño en rojo sobre negro | 5.83 sobre negro |

Reglas. Un solo bloque rojo por pantalla visible. Sobre el bloque rojo no va texto pequeño. Sin degradados, sin sombras, sin transparencias de vidrio. No hay modo oscuro aparte porque el sitio ya alterna papel y negro por sección con un motivo, el selector.

### 8.3 Tipografía

| Voz | Familia | Uso |
|---|---|---|
| Titular | Archivo, ancho 62, peso 900, mayúsculas, interlínea 0.82 | Nombre en portada y apertura de cada sección. Nunca por debajo de 40 px |
| Texto | Archivo, ancho 100, pesos 400 y 600 | Párrafos, botones, navegación |
| Dato | IBM Plex Mono, pesos 400 y 500 | Rótulos de sección, números de índice, ficha del selector, fechas |

Escala de texto fija: 13, 15, 17, 21 y 28 px. El titular es fluido y se calcula desde la retícula, no a ojo. En portada la palabra DIEGO ocupa 7 de 12 columnas en escritorio y el ancho completo en celular. El tamaño exacto sale de medir el ancho real de la palabra con la fuente cargada en el paso de tokens y se anota aquí. Párrafos con un máximo de 62 caracteres por línea.

**Tamaño medido del titular de portada.** Medido el 10 de noviembre de 2026 con Playwright y Chromium, con Archivo ya cargada (ancho 62, peso 900, mayúsculas). El método está en la sección 11.

| Palabra | Avance | Tinta | Sangría izquierda de la tinta |
|---|---|---|---|
| DIEGO | 2.3310 em | 2.26 em | 0.04 em |
| PINTA | 2.2110 em | 2.17 em | 0.04 em |

El tamaño se calcula con el avance de DIEGO, que es la caja que ocupa la palabra en la retícula. La constante queda en `--titular-k: 2.331`.

| Ancho | Retícula | DIEGO ocupa | Ancho objetivo | font-size |
|---|---|---|---|---|
| 1440 | 12 col, margen 64, canal 24 | 7 de 12 | 755.3 px | 324.0 px |
| 768 | 8 col, margen 40, canal 24 | 8 de 8 | 688.0 px | 295.2 px |
| 390 | 4 col, margen 20, canal 16 | 4 de 4 | 350.0 px | 150.1 px |

En vez de un `clamp()` aproximado, el token es la fórmula exacta de la retícula sobre el ancho del contenedor de la portada (`100cqi`, con `container-type: inline-size`).

- Celular y tablet: `(100cqi - 2 × margen) / 2.331`.
- Escritorio desde 1024 px: `((min(100cqi, 1440px) - 2 × 64 - 11 × 24) × 7/12 + 6 × 24) / 2.331`.
- Piso de 40 px, como fija esta sección.

Con interlínea 0.82 las dos líneas caben con 72 px de navegación y 160 px de franja inferior.

| Pantalla | Alto de las dos líneas | Disponible | Sobra |
|---|---|---|---|
| 1440 × 900 | 531.4 px | 668 px | 136.6 px |
| 390 × 844 | 246.2 px | 612 px | 365.8 px |
| 768 × 1024 | 484.0 px | 792 px | 308.0 px |

### 8.4 Retícula y espacio

- 12 columnas en escritorio, 8 en tablet, 4 en celular. Margen lateral de 64, 40 y 20 px. Canal de 24 px, 16 en celular.
- Ancho máximo del contenido 1440 px.
- Escala de espacio 4, 8, 12, 16, 24, 40, 64, 104 y 168 px.
- Radio 0 en todo. Filetes de 1 px.

### 8.5 Repertorio cerrado

| Forma | Su único trabajo | Dónde aparece |
|---|---|---|
| Bloque rojo plano | Señalar al sujeto | Detrás del retrato en portada y detrás de la captura del proyecto elegido |
| Titular condensado gigante | Nombrar | Portada y apertura de sección |
| Filete de 1 px con rótulo mono y cuadrado | Abrir una sección y separar | Cabecera de cada sección |
| Número de índice 01 a 11 | Ordenar proyectos | Selector y páginas de caso |
| Corte diagonal | Contar la dualidad hardware y software | Una sola franja en todo el sitio |
| Retrato recortado en blanco y negro | Poner cara | Portada, una vez |

Iconos: solo flecha diagonal y flecha abajo, dibujadas en SVG con trazo de 1.5 px y puntas rectas. Ningún otro icono, ningún emoji.

### 8.6 Puntos de entrada

1. El nombre gigante con el retrato cruzándolo.
2. La cifra «11 proyectos, 2 ingenierías» sacada del texto y puesta en la portada.
3. El cambio a negro del selector con la captura grande.
4. La franja diagonal Hardware / Software.

### 8.7 Secciones, en orden

1. Navegación fija con idioma y descarga de CV.
2. Portada con nombre, retrato, frase «Del sensor a la interfaz», cifra y dos acciones (ver proyectos, bajar CV).
3. Perfil con propuesta de valor y cómo trabajo.
4. Proyectos como selector sobre negro. Lista numerada a la izquierda, captura al centro, ficha a la derecha con rol, periodo, estado, tecnologías, repositorio y demo. En celular la lista pasa a una tira horizontal de números.
5. Franja Hardware / Software y habilidades en tabla de especificaciones, sin porcentajes.
6. Experiencia y formación en tabla cronológica.
7. Testimonios, tres. Mientras falten los reales se muestran como pendientes, sin texto inventado.
8. Sección adicional: entrada al mapa 2D en `/quest`.
9. Contacto.
10. Pie con nota de privacidad.

Las páginas de caso por proyecto se conservan y adoptan los mismos tokens.

### 8.8 Movimiento

- Solo `transform` y `opacity`.
- Entrada de portada una sola vez. Las dos líneas del nombre suben 24 px con 700 ms y `cubic-bezier(0.16, 1, 0.3, 1)`, el bloque rojo y el retrato entran después.
- Cambio de proyecto en el selector 200 ms `ease-out`. Si el cambio viene del teclado no se anima.
- Hover de enlaces y botones 150 ms.
- Con `prefers-reduced-motion` todo aparece sin movimiento.
- Se retiran Lenis, GSAP y los botones magnéticos. El scroll es el del navegador.

### 8.9 Estados

- Proyecto sin captura: placa tipográfica con el nombre del proyecto en titular condensado sobre el bloque rojo.
- Proyecto sin demo: el botón no aparece y la ficha dice «Sin demo pública».
- Testimonio pendiente: ficha con rótulo «Pendiente» y sin cita.
- Foto que no carga: el bloque rojo queda solo y el nombre sigue legible.
- Foco visible con contorno de 2 px en tinta sobre papel y en papel sobre negro. Objetivos táctiles de 44 px como mínimo.

### 8.10 Orden de construcción

Tokens, portada (componente clave), esqueleto de la página, selector, resto de secciones, página completa, estados. Al cerrar cada paso se muestra, se cita la cláusula y se espera el visto bueno.

## 9. Legal y privacidad

- El sitio no tiene cuentas ni pagos, así que no lleva términos y condiciones.
- El formulario de contacto abre el correo del visitante y no envía nada a un servidor propio. Si se cambia a envío real, hace falta aviso de tratamiento y consentimiento antes de enviar.
- Vercel Analytics no usa cookies. Se dirá en una nota de privacidad dentro del pie de página, guardada en `docs/legal/`, con versión y fecha. Si no hay cookies no hay banner.
- Los testimonios publican nombre y cargo de terceros. Cada uno necesita autorización de la persona antes de publicarse.
- No se publican teléfono, cédula ni notas. La regla ya existe en el repositorio y tiene prueba.
- Marco: Ley 1581 de 2012 y Decreto 1377 de 2013. Los textos legales serán borradores técnicos hasta que los revise un abogado.

## 10. Verificación prevista

Playwright en 390, 768 y 1440 px, consola limpia, contraste medido sobre la captura, recorrido por teclado, `prefers-reduced-motion`, y las pruebas existentes (`lint`, `test`, `e2e`, `build`). Los resultados se anotan aquí, incluidos los fallos.

## 11. Verificación del paso 1

Paso 1, tokens. 10 de noviembre de 2026. Rama `feature/rediseno-editorial`.

### Qué se hizo

- Fuentes con `next/font/google`. Archivo variable con eje `wdth` (62 a 125) y peso 100 a 900, e IBM Plex Mono 400 y 500. Quedan como `--font-archivo` y `--font-plex-mono` junto a Geist y Press Start 2P, que siguen en uso en la página actual.
- Tokens del contrato en `app/globals.css` con nombres en español que no pisan los actuales. Color 8.2, escala de texto 8.3, espacio y retícula 8.4, radio 0, filete 1 px, curvas y duraciones 8.8, foco 8.9.
- Clases de las tres voces: `.voz-titular`, `.voz-texto`, `.voz-texto-fuerte`, `.voz-dato`, `.voz-dato-fuerte`.
- Iconos en `components/editorial/iconos.tsx`. Flecha diagonal y flecha abajo, trazo de 1.5 px que no escala, puntas rectas.
- Hoja de especímenes en `/sistema`, con `noindex, nofollow`.

### Cómo se comprobó que las fuentes cargan

En el navegador, `document.fonts` lista Archivo con peso 100 a 900 y ancho 62 % a 125 %, e IBM Plex Mono 400 y 500, todas con estado `loaded`. El estilo calculado del titular da `font-family: Archivo`, `font-variation-settings: "wdth" 62` y peso 900.

### Medición del titular

Cada palabra se compuso a 400 px sobre fondo blanco. Se leyó su caja de avance con `getBoundingClientRect` y su caja de tinta recorriendo los píxeles de la captura. Después se cargó `/sistema` en cada ancho y se leyó el resultado real.

| Ancho | font-size calculado | DIEGO medido | Objetivo | PINTA medido |
|---|---|---|---|---|
| 390 | 150.15 px | 350.0 px | 350.0 px | 332.0 px |
| 768 | 295.15 px | 688.0 px | 688.0 px | 652.6 px |
| 1440 | 324.04 px | 755.3 px | 755.3 px | 716.4 px |

PINTA es más corta que DIEGO en todos los anchos, así que no desborda.

### Contraste muestreado sobre el render

Píxel del bloque de color y píxel del fondo de cada tarjeta, tomados de la captura de página completa a 1440 px.

| Par | Frente | Fondo | Razón |
|---|---|---|---|
| tinta sobre papel | #121211 | #F1ECE2 | 15.92 |
| gris sobre papel | #5A554C | #F1ECE2 | 6.28 |
| rojo sobre papel | #D92B1F | #F1ECE2 | 4.13 |
| rojo-texto sobre papel | #B81F14 | #F1ECE2 | 5.50 |
| papel sobre negro | #F1ECE2 | #0D0D0C | 16.52 |
| gris-claro sobre negro | #A39E94 | #0D0D0C | 7.29 |
| rojo-claro sobre negro | #FF4A3D | #0D0D0C | 5.83 |

Coinciden con la tabla 8.2. El rojo sobre papel solo vale para texto de 24 px o más.

### Resto de comprobaciones

- Capturas en `docs/pantallazos/rediseno/` con los nombres `Sistema 390.png`, `Sistema 768.png`, `Sistema 1440.png` y `Sistema 1440 foco.png`.
- Consola sin errores ni avisos en 390, 768 y 1440.
- Sin desplazamiento horizontal en los tres anchos. El ancho del documento es igual al de la ventana.
- La retícula muestra 4, 8 y 12 columnas en los tres anchos.
- Teclado. Los cuatro botones reciben foco en orden. Contorno de 2 px en papel sobre negro y en tinta sobre papel. Alto de 44 px.
- `prefers-reduced-motion`. Con `reduce` la flecha del botón no se mueve al pasar el puntero. Sin él baja 4 px.
- `npm run lint` sin errores. `npm test` 31 de 31. `npm run e2e` 16 de 16. `npm run build` correcto.

### Fallos y puntos donde el contrato no cuadra

1. Fallo propio corregido. En la primera versión de la hoja los datos de cada tarjeta iban en el color del par. El rojo sobre papel quedaba en texto de 13 px con 4.13, lo que 8.2 prohíbe. Ahora los datos van en el color de la superficie.
2. El margen de 20 px en celular (8.4) no está en la escala de espacio de la misma sección. Se usó 20 px porque lo fija el contrato. Hace falta decidir si 20 entra en la escala.
3. El contrato no dice desde qué ancho hay 12 columnas. Se tomó 1024 px. Entre 768 y 1023 px DIEGO ocupa todo el ancho y el titular crece hasta 404.5 px a 1023 px. Ahí las dos líneas miden 663 px y con navegación y franja piden 895 px de alto. En una tablet apaisada de menos de 1024 px de ancho no caben. Hay tres opciones. Limitar el tamaño también por el alto de la pantalla, pasar a 12 columnas antes, o aceptar que en ese rango la franja inferior quede bajo el pliegue.
4. La tinta de DIEGO empieza 0.04 em a la derecha del borde de la columna (13 px a 1440) y termina unos 10 px antes del borde de la séptima columna. El tamaño se calculó con la caja de avance. Si se quiere alineación óptica hace falta una compensación negativa de 0.04 em, que no sale de la escala de espacio. Queda para decidir en la portada.
5. La skill `design-taste-frontend` pide no dibujar iconos a mano. El contrato 8.5 fija dos iconos dibujados en SVG y manda el contrato.
6. La hoja de especímenes enseña varios rojos a la vez. La regla de un solo bloque rojo por pantalla se aplica a las páginas del sitio, no a esta hoja interna.

### Pendiente

- Recorrido por teclado completo y reduced motion de la portada, que aún no existe.
- La comparativa contra referentes se hace en el paso de portada, porque esta hoja no es una pieza de marca.

