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

### 8.11 Enmiendas

Aprobadas por Diego el 10 de noviembre de 2026, al dar el visto bueno al paso 1.

1. El titular de portada se limita también por el alto de la pantalla. Nunca crece hasta sacar del primer pantallazo la franja inferior con la frase y los botones. La retícula de 12 columnas empieza en 1024 px.
2. El valor 20 px entra en la escala de espacio. Su único uso es el margen lateral en celular.
3. El titular de portada admite una compensación óptica de −0.04 em a la izquierda para que la tinta de la D caiga sobre el borde de la columna. No se usa en ningún otro texto.

Aprobadas por Diego el 10 de noviembre de 2026, al revisar el paso 2.

4. El bloque rojo de portada deja de ir a sangre en escritorio. Se estrecha para enmarcar la figura, como en la referencia de Axel Morgan, y libera una columna a la derecha.
5. La cifra de portada (proyectos e ingenierías) puede ir en titular condensado, en esa columna de la derecha. Es la única excepción a la regla de que el titular solo nombra. No hay más cifras en titular en el resto del sitio.
6. Tinta sobre rojo entra en la tabla de color con 3.88 medido. Solo vale para el titular de portada donde cruza el bloque.
7. El bloque rojo y el retrato entran 350 ms después del nombre.

Aprobada por Diego el 10 de noviembre de 2026, al revisar el paso 3.

8. Experiencia y formación van como dos secciones seguidas, cada una con su enlace en la navegación.

Aprobadas por Diego el 10 de noviembre de 2026, al revisar el paso 4.

9. El número del proyecto elegido en el selector puede ir en titular condensado grande. Es la segunda y última excepción a la regla de que el titular solo nombra.
10. Los proyectos con captura real van primero en el orden del selector. La numeración sigue ese orden en todo el sitio.

Foto. Diego va a tomarse una nueva o a buscar el original. La portada debe aceptar el cambio con solo reemplazar el archivo en `public/retrato/`. Mientras tanto sigue el tope de 560 px de alto.

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

## 12. Verificación del paso 2

Paso 2, portada. 10 de noviembre de 2026. Vista previa en `/sistema/portada` y `/en/sistema/portada`, las dos con `noindex, nofollow`. La página de inicio no cambia.

### Qué se hizo

- Componente `components/editorial/portada.tsx` y retrato en `components/editorial/retrato-portada.tsx`.
- Textos nuevos en `data/portfolio.ts`, dentro de `ui.portada`, en español e inglés. El rótulo es `identity.role`, la frase es `identity.tagline` y el nombre sale de `NAME`.
- La cifra se cuenta. Proyectos es la longitud del arreglo de proyectos (11). Ingenierías son las entradas de formación cuyo título dice ingeniería (2, Software en curso y Electrónica 2021 a 2025).
- Las tres enmiendas de 8.11 quedan en los tokens. El titular toma el menor entre el tamaño por ancho y el tamaño por alto. `--e-20` entra en la escala y solo lo usa el margen de celular. La compensación de −0.04 em vive solo en `.titular-portada`.
- Capas. Bloque rojo al fondo, nombre encima, retrato delante. El bloque va a sangre por la derecha.
- El retrato se pinta con `next/image` y `priority`, a 560 px de alto como máximo.

### Medidas por tamaño

| Pantalla | font-size | Franja, borde inferior | Bajo el pliegue | Retrato en pantalla | Archivo servido |
|---|---|---|---|---|---|
| 390 × 844 | 150.2 px | 844 px | 0 px | 141 × 291 | 256 px de ancho |
| 768 × 1024 | 295.2 px | 1024 px | 0 px | 200 × 412 | 256 px de ancho |
| 1024 × 768 | 219.9 px | 768 px | 0 px | 260 × 536 | 384 px de ancho |
| 1440 × 900 | 324.0 px | 900 px | 0 px | 272 × 560 | 384 px de ancho |

En los cuatro tamaños la franja con la frase, la cifra y los dos botones queda dentro del primer pantallazo. El retrato nunca pasa de 560 px de alto y siempre se pinta más pequeño que el archivo servido, con DPR 1. No hay desplazamiento horizontal.

### Letras que tapa el retrato

Porcentaje de la caja de cada letra cubierto por píxeles opacos del retrato.

| Pantalla | Letras tapadas |
|---|---|
| 390 × 844 | T de PINTA 35 %, A 1 % |
| 768 × 1024 | T de PINTA 21 %, A 12 % |
| 1024 × 768 | O de DIEGO 11 % |
| 1440 × 900 | O de DIEGO 30 %, A de PINTA 28 % |

Ninguna letra queda tapada más de un tercio. En la primera versión el retrato tapaba el 72 % de la O a 1024 px. Entre 1024 y 1279 px el retrato se movió una columna a la derecha.

### Contraste sobre el render

| Texto | Medido |
|---|---|
| Rótulo, gris sobre papel | 6.28 |
| Frase, tinta sobre papel | 15.92 |
| Cifra, tinta sobre papel | 15.92 |
| Botón primario, papel sobre tinta | 15.92 |
| Botón secundario, tinta sobre papel | 16.04 |
| Nombre sobre el bloque rojo | 3.88 |

Ningún texto cae sobre el retrato. En celular y tablet ninguna letra cae sobre el rojo.

### Resto de comprobaciones

- Consola limpia en los cuatro tamaños y en inglés.
- Teclado. El primer Tab lleva a «Ver proyectos» y el segundo a «Descargar CV». Contorno de 2 px en tinta y 44 px de alto.
- Movimiento reducido. Sin animación y todo con opacidad 1 desde el primer fotograma.
- Entrada normal. Las líneas suben 24 px en 700 ms con `cubic-bezier(0.16, 1, 0.3, 1)`. Bloque y retrato empiezan a los 350 ms.
- Sin JavaScript se ve todo y la foto carga.
- Sin imagen, con la foto bloqueada. El retrato se oculta, el bloque rojo queda solo y el nombre se lee.
- El `h1` lee «Diego Armando Pinta Cuasquen» y las dos líneas visibles van ocultas a lectores de pantalla.
- `npm run lint` sin errores. `npm test` 31 de 31. `npm run e2e` 16 de 16. `npm run build` correcto.

### Crítica contra las referencias

La comparativa está en `docs/pantallazos/rediseno/Portada comparativa.png`, con la portada a 1440 al lado de Abdullah Tariq y Axel Morgan. La escala del nombre y el bloque aguantan la comparación. La diferencia grande es la cara. En las referencias el retrato es un plano de busto y la cara mide más de 200 px. Aquí la foto es de cuerpo entero y con el tope de 560 px la cara mide unos 100 px. Recortar a busto exigiría ampliar la foto por encima de su resolución, y eso el anexo lo prohíbe. La salida es conseguir el original con más resolución. También se nota la falta de navegación, que llega en el paso 3.

### Fallos y puntos donde el contrato no alcanza

1. El par tinta sobre rojo no está en la tabla 8.2. Medido da 3.88. Pasa AA para texto grande (3:1) pero no AAA. Afecta solo a la parte del nombre que cae sobre el bloque en escritorio.
2. El retardo de 350 ms de bloque y retrato no está en 8.8, que solo dice «después». Se tomó la mitad de la entrada.
3. El contrato pide el ancla `#proyectos` y la navegación actual usa `#projects`. El paso 3 tiene que unificarlas.
4. La cifra no puede pasar de 28 px porque el titular condensado tiene un solo trabajo, nombrar. Como punto de entrada queda más débil que en las referencias.
5. La parte derecha del bloque rojo queda vacía en escritorio. Es un campo de color a propósito. Si se quiere más parecido a Axel Morgan, el bloque podría terminar en la columna 10 y perder la sangría.

## 13. Verificación del ajuste de portada y del paso 3

10 de noviembre de 2026. Dos commits. El ajuste de portada es `f4abacd` y el esqueleto va en el commit siguiente.

### 13.1 Ajuste de portada

Qué cambió.

- Enmienda 4. En escritorio el bloque rojo ya no va a sangre. Ocupa las columnas 7 a 9 desde 1280 px y 7 a 10 entre 1024 y 1279 px. Mide el 80 % del alto del retrato y se apoya en la franja, así la cabeza queda fuera del bloque como en Axel Morgan.
- Enmienda 5. La cifra va en titular condensado en la columna libre de la derecha. Su tamaño es la mitad del nombre en escritorio y el 40 % en tablet y celular. «11» se cuenta del arreglo de proyectos y «2» de la formación.
- En tablet y celular la cifra va a la izquierda del retrato, dentro de la escena. La franja queda con la frase y los dos botones en un renglón.
- El retrato se lee de `retrato` en `data/portfolio.ts` (ruta, ancho y alto). El tope de alto es `alto / 1.5`, que da 562 px con el archivo actual. El README explica cómo cambiar la foto.

| Pantalla | Nombre | Cifra | Franja, borde inferior | Bajo el pliegue | Retrato | Letras tapadas |
|---|---|---|---|---|---|---|
| 390 × 844 | 150.2 px | 60.1 px | 844 | 0 px | 167 × 344 | T 2 %, A 8 % |
| 768 × 1024 | 295.2 px | 118.1 px | 1024 | 0 px | 224 × 461 | T 21 %, A 12 % |
| 1024 × 768 | 219.9 px | 110.0 px | 768 | 0 px | 260 × 536 | O 11 % |
| 1440 × 900 | 324.0 px | 162.0 px | 900 | 0 px | 273 × 562 | O 31 %, A 28 % |

La cifra no toca el retrato en ningún tamaño y su borde inferior coincide con la franja. El retrato siempre se pinta más pequeño que el archivo servido. Sobre el render la cifra y su rótulo miden 15.92 de contraste, rótulo de cabecera 6.28, nombre sobre el rojo 3.88 (enmienda 6). Sin imagen el bloque queda solo y el nombre se lee. Consola limpia, sin scroll horizontal, movimiento reducido sin animación.

Primera medición fallida. A 768 px los botones se partían en dos renglones y la franja salía 3 px del pliegue. Se corrigió dando cinco columnas a los botones.

### 13.2 Esqueleto

Qué se hizo.

- Navegación fija de 72 px con marca, enlaces a las secciones, cambio de idioma y descarga del CV. Por debajo de 1024 px un botón «Menú» abre un panel. Escape lo cierra y devuelve el foco al botón. Enlace «Saltar al contenido» como primera parada del teclado.
- Página nueva en `/` y `/en` con la portada y las secciones en el orden de 8.7. Perfil, proyectos sobre negro, habilidades, experiencia, formación, testimonios, mapa, contacto y pie.
- Cada sección lleva filete con cuadrado, rótulo mono y titular condensado. El titular de sección va de 40 a 104 px con `clamp(40px, 10vw, 104px)`.
- Contenido real en forma tipográfica simple. Proyectos con enlace al caso y al repositorio. Testimonios como pendientes, sin cita.
- Anclas en español en `/` (perfil, proyectos, habilidades, experiencia, formacion, testimonios, mapa, contacto) y en inglés en `/en`. Las páginas de caso y los paneles del mapa apuntan a ellas.
- El mapa 2D pasa a `/quest` y `/en/quest`, igual que antes, con enlace de vuelta a la sección del mapa.
- Lenis, GSAP y los botones magnéticos salen de la página nueva y de `/quest`. `MotionProvider` solo se monta en las páginas de caso.
- Se quitó `scroll-behavior: smooth`. El salto a un ancla es el del navegador (8.8).
- El pie dice «Este sitio no usa cookies.». En el código no hay `document.cookie` ni librería que las ponga. Vercel Analytics no usa cookies. El mapa sí guarda progreso y sonido en `localStorage`.

Medidas sobre la página de inicio.

| Comprobación | 390 | 768 | 1440 |
|---|---|---|---|
| Scroll horizontal | no | no | no |
| Tramos vacíos de más de 380 px | ninguno | ninguno | ninguno |
| Margen izquierdo y derecho del texto | 20 y 21 | 40 y 40 | 64 y 64 |
| Bloques rojos visibles a la vez, máximo | 1 | 1 | 1 |
| Consola | limpia | limpia | limpia |

Contraste sobre el render. Navegación (marca, enlaces, idioma, botón) entre 15.92 y 16.04. Rótulo y titular sobre papel 15.92, texto gris 6.28. Rótulo y titular sobre negro 16.52, texto gris claro 7.29. Pie 7.29.

Teclado. 38 paradas a 390 px y 44 a 1440 px, todas con contorno de 2 px y 44 px de alto. El orden empieza en «Saltar al contenido», sigue por la marca y la navegación y baja por la página. Hay un solo salto hacia arriba a 1440 px. Es el formulario de contacto, que va en la columna derecha a la altura de los enlaces de la izquierda.

Pruebas. `npm run lint` sin errores. `npm test` 34 de 34. `npm run e2e` 22 de 22. `npm run build` correcto.

Capturas en `docs/pantallazos/rediseno/`. Son `Inicio 390.png`, `Inicio 768.png`, `Inicio 1440.png`, `Inicio 390 menú abierto.png` y `Quest 1440.png`.

### 13.3 Fallos y puntos donde el contrato no alcanza

1. Las clases propias como `.boton-ed` van fuera de las capas de Tailwind y ganan a las utilidades. Por eso `lg:hidden` no ocultaba el botón «Menú» en escritorio. Se detectó en el recorrido por teclado y se corrigió con un envoltorio.
2. El tope del retrato sale de la regla nueva en 562 px, no en 560. La diferencia viene de dividir 843 entre 1.5.
3. Experiencia y formación van en dos secciones seguidas, no en una. La navegación tiene un enlace para cada una.
4. El rótulo de cada cabecera usa datos reales cortos donde los hay y la entradilla de la sección donde no.
5. Las páginas de caso siguen con Lenis, GSAP y botones magnéticos. `gsap` y `lenis` siguen en `package.json` porque `components/motion-provider.tsx` los importa. Se retiran cuando los casos adopten los tokens.
6. El título y la descripción del sitio en `app/site-metadata.ts` siguen hablando de la aventura 2D. Falta actualizarlos.
7. Se retiró la prueba que buscaba el `h1` «Diecu's Engineering Quest» en la portada. Ese título vive ahora en `/quest` y el `h1` de la portada es el nombre.

## 14. Verificación del paso 4

### 14.1 Capturas de proyectos

Diego autorizó usar capturas de sus carpetas de proyectos. Se buscaron en `Proyectos Finales` y en las carpetas de talleres del semestre, solo con lectura. Se miró cada imagen antes de usarla.

| Proyecto | Origen | Archivo en el sitio | Medidas |
|---|---|---|---|
| SISCAN | `App Mobile/docs/sustentacion/img/apk-02-inicio.png` | `public/projects/siscan-inicio.webp` | 720 × 1600 |
| Ecos de la Tierra | `Videojuego/docs/ux/capturas/2026-11-04-accion-purifica.png` | `public/projects/ecos-de-la-tierra-combate.webp` | 640 × 360 |
| NotaScan | `NotaScan oscuro/notascan-desktop/verify-out/oscuro-login-1440.png` | `public/projects/notascan-inicio-de-sesion.webp` | 1280 × 800 |

- SISCAN muestra el inicio de la app con un secador de prueba. No hay nombres ni datos de personas.
- Ecos se dejó en su resolución nativa de 640 × 360, sin ampliar y sin pérdida.
- NotaScan usa la pantalla de inicio de sesión. Los paneles de docente, secretaría y rectoría muestran nombres de estudiantes y calificaciones. No se puede confirmar que sean de demostración, así que se descartaron.
- Se descartaron también la hoja de calificaciones impresa de NotaScan y la pantalla de equipo de SISCAN, que no aporta frente al inicio.
- AgroPulse, CampusWatch, HidroMon, Harmonia, Proxy IA, EcoVolt, SETPasto+ y Tower Defense no tienen capturas en esas carpetas. `App Smartwacht` solo guarda un zip del sistema de diseño. Esos ocho proyectos van con la placa tipográfica de 8.9.

### 14.2 Selector

Qué se hizo.

- Pestañas verticales dentro de la sección de proyectos, sobre negro. Lista numerada a la izquierda, captura sobre el bloque rojo al centro y ficha a la derecha.
- La pestaña elegida se invierte a papel y cruza el canal hacia el escenario, como el cursor de una pantalla de selección.
- La ficha va en voz dato con número, nombre, resumen, cargo, periodo, estado, tecnologías, caso de estudio, repositorios y demo. Ningún proyecto tiene demo, así que los once dicen «Sin demo pública».
- Sin captura, el bloque lleva el nombre en titular condensado color papel (8.9).
- En celular la lista es una tira de números con `scroll-snap`. La captura va debajo y la ficha después. En tablet la lista sigue vertical y la ficha baja debajo del escenario.
- Teclado. Flechas arriba y abajo (también izquierda y derecha), Inicio y Fin. El foco se mueve con la selección y solo la pestaña elegida entra en el orden de Tab.
- El proyecto elegido se escribe en la dirección (`#proyecto-ecos`, `#project-ecos` en inglés) y un enlace con ese fragmento lo abre.
- Los once paneles comparten la misma celda y solo el elegido es visible. Por eso el alto no cambia al elegir.
- Las capturas se cargan cuando se elige su proyecto. Sin JavaScript una hoja dentro de `<noscript>` muestra los once proyectos seguidos, sin bloques rojos.

Medidas antes de componer (3.3). El nombre más largo es «CampusWatch / Agenda». La lista de tecnologías más larga es la de AgroPulse, con 9 elementos. El cargo más largo tiene 53 caracteres. Con 15 px el nombre más largo cabe en una línea en la lista de 206 px a 1024 y de 243 px a 768. En la ficha de 206 px a 1024 el cargo y las tecnologías ocupan varias líneas. Eso alarga la sección a 1156 px en ese ancho, pero no desborda.

| Ancho | Alto de la sección con los 11 | Escenario | Ficha | Placa |
|---|---|---|---|---|
| 390 | 1242 px, igual con los 11 | 350 × 263 | 350 de ancho | 42 px |
| 768 | 1385 px, igual con los 11 | 421 × 484 | 421 de ancho | 50.5 px |
| 1024 | 1156 px, igual con los 11 | 436 × 484 | 206 de ancho | 52.3 px |
| 1440 | 937 px, igual con los 11 | 644 × 484 | 310 de ancho | 77.3 px |

Resolución efectiva. Ninguna captura se amplía. A 1440 Ecos se pinta a 600 × 338 desde un archivo de 640 px, NotaScan a 600 × 375 desde 640 px y SISCAN a 200 × 444 desde 640 px.

Carga inicial. Solo baja el retrato de la portada (31 KB). El primer proyecto no tiene captura y las demás bajan al elegirlas.

Contraste sobre el render, igual en los cuatro anchos.

| Texto | Medido |
|---|---|
| Pestaña elegida, negro sobre papel | 16.52 |
| Pestaña sin elegir, gris claro sobre negro | 7.29 |
| Número, nombre y valores de la ficha | 16.52 |
| Resumen, rótulos de dato y «Sin demo pública» | 7.29 |
| Botón del caso | 16.52 a 16.62 |
| Placa, papel sobre rojo, de 42 a 77 px | 4.13 |

Interacción medida a 1440.

- El Tab llega a la lista después de los botones de la portada. Las flechas, Inicio y Fin cambian la selección y mueven el foco. El contorno es de 2 px.
- Cambio por teclado sin animación. Cambio con clic con `selector-entra` de 200 ms y `ease-out`.
- Con movimiento reducido el clic no anima.
- Sin JavaScript se ven los 11 paneles con 11 enlaces a caso, 15 a repositorios y las 3 capturas. La lista y los bloques rojos se ocultan.
- Sin scroll horizontal en los cuatro anchos. Pestañas de 44 px como mínimo. Consola limpia.
- En la página completa sigue habiendo como máximo un bloque rojo visible por pantalla, sin tramos vacíos de más de 380 px y con márgenes de 20, 40 y 64 px.

Pruebas. `npm run lint` sin errores. `npm test` 35 de 35. `npm run e2e` 28 de 28, con tres nuevas del selector (teclado y alto, enlace directo con estados sin captura y sin demo, y sin JavaScript). `npm run build` correcto.

Capturas en `docs/pantallazos/rediseno/`. Son `Selector 390 primero sin captura ni demo.png`, `Selector 390 con captura.png` y las mismas para 768, 1024 y 1440, más `Selector 1440 sin JavaScript.png` y `Selector comparativa.png`.

### 14.3 Crítica y puntos donde el contrato no alcanza

1. Al lado de la pantalla de selección de la referencia y de Tetsuo el selector se lee como pantalla de selección y no como tabla. Es más sobrio que la referencia, que tiene barras, retratos y diagonales que aquí no entran.
2. El número del elegido no puede pasar de 28 px. La escala de texto es fija y la enmienda 5 deja el titular con cifras solo en la portada. Un número gigante como en las referencias de juego exigiría otra enmienda.
3. Ocho de once proyectos no tienen captura. El selector se apoya mucho en la placa roja. Cuando lleguen capturas de esos repositorios se agregan en `data/projects.ts`.
4. A 1024 px la ficha mide 206 px de ancho y la sección crece a 1156 px. Una ficha más ancha quitaría columnas al escenario.
5. Las capturas ya no se cargan de golpe, pero sin JavaScript sí bajan las tres al llegar a la sección.

## 15. Verificación de los ajustes del selector, el paso 5 y la privacidad

### 15.1 Ajustes del selector

- Enmienda 9. El número del elegido va en titular condensado, rojo claro sobre negro, encima del nombre en la ficha. Mide 80 px en celular, 104 px en tablet y 160 px desde 1280. Es la mitad del nombre de portada o menos en cada ancho.
- Desde 1280 px el escenario ocupa 5 columnas y la ficha 4. Entre 768 y 1279 la ficha baja debajo del escenario. Los rótulos de dato van encima de su valor.
- Medido en los once proyectos, el cargo y las tecnologías no pasan de dos líneas en ningún ancho. La ficha mide 350 px a 390, 421 a 768, 666 a 1024, 368 a 1280 y 421 a 1440.
- El alto de la sección sigue constante con los once. Mide 1377 px a 390, 1522 a 768, 1501 a 1024 y 1082 a 1440.
- Enmienda 10. El orden cambió en `data/projects.ts`. Primero van los proyectos con captura. SISCAN, Ecos de la Tierra, NotaScan, CampusWatch / Agenda y SETPasto+. Después AgroPulse, HidroMon, Harmonia, Proxy IA, EcoVolt y Tower Defense. La numeración, las páginas de caso («Siguiente proyecto») y el selector siguen ese orden. La experiencia se ordena por fecha y no cambia. El CV usa la experiencia y busca los proyectos por id, así que no depende del orden y no se regeneró.

Capturas nuevas, tomadas de los repositorios públicos de Diego con `gh api`, sin clonar.

| Proyecto | Origen | Archivo en el sitio | Medidas |
|---|---|---|---|
| CampusWatch / Agenda | `agenda-android`, `docs/capturas/cw-en-principal.png` | `public/projects/campuswatch-esferas.webp` | 1200 × 600 |
| SETPasto+ | `Taller-Contenido--voz-y-internacionalizacion`, `shots/indicadores-es.png`, primer pantallazo recortado a 1440 × 900 | `public/projects/setpasto-indicadores.webp` | 1280 × 800 |

- Se revisaron los repositorios de AgroPulse (firmware, backend y frontend), HidroMon, Harmonia, Proxy IA (backend y frontend), EcoVolt y Tower Defense. Ninguno trae capturas de la interfaz.
- El README de HidroMon solo tiene insignias. `proxy-ai-frontend/src/assets/hero.png` es la ilustración de la plantilla de Vite, no una captura, y se descartó.
- Esos seis proyectos siguen con la placa.
- Resolución efectiva a 1440. CampusWatch se pinta a 493 × 246 y SETPasto+ a 493 × 308, los dos desde archivos de 640 px. Ninguna captura se amplía en ningún ancho.
- Carga inicial. Bajan el retrato (31 KB) y la captura del primer proyecto, SISCAN (32 KB).

