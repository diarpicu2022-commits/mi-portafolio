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

> **Nota del 11 de noviembre de 2026.** Este contrato describe la primera versión editorial, la que Diego rechazó por estática y poco parecida a sus referencias. Quedó reemplazado por la dirección que hoy está publicada y que resume `CONTINUAR.md` (titular condensado con palabras en rojo, retrato sticker con borde blanco sobre el bloque rojo, cinta negra de tecnologías, proyectos en collage sobre negro, botones en píldora, láminas de esquinas redondeadas y segundo tono de papel). Lo que sigue valiendo de aquí son los tokens de color de 8.2, la escala de espacio y las reglas de accesibilidad. Ya no valen el radio 0, el filete de 1 px ni la monoespaciada en rótulos, que Diego pidió quitar. Las decisiones de modo oscuro están en la sección 18.

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

Aprobadas por Diego el 10 de noviembre de 2026, al delegar las decisiones de diseño pendientes. El objetivo declarado es que lo contraten.

11. El titular condensado nombra o da una cifra real. Usos admitidos: nombre de portada, apertura de sección, placa y nombre del proyecto, primer principio de perfil, franja Hardware / Software y cifras derivadas de los datos. Sigue sin bajar de 40 px y sin usarse en párrafos.
12. Habilidades y experiencia ganan punto de entrada. En habilidades, una cifra real por grupo o tecnología contada desde `data/projects.ts`, con enlace a esos proyectos. En experiencia, la miniatura real o el esquema del proyecto en cada fila.
13. Forma nueva en el repertorio, el esquema de sistema. Su único trabajo es mostrar cómo está armado un proyecto que no tiene captura. Sustituye a la placa roja como imagen principal y se retira cuando llegue una captura real. Siempre va rotulado «Esquema» («Diagram») y nunca se presenta como captura.

Aprobada por Diego el 10 de noviembre de 2026. Él aportó la imagen y delegó cómo usarla.

14. Forma nueva en el repertorio, la ilustración de proyecto. Su único trabajo es dar cara a un proyecto sin captura en los sitios donde se elige: el selector, la miniatura de experiencia y la imagen para redes del caso. Va rotulada «Ilustración» («Illustration») y nunca se presenta como captura. El esquema de sistema se queda en la página de caso, donde explica. Prioridad en selector, experiencia e imagen para redes: captura real, ilustración, esquema y placa. Prioridad en la página de caso: captura real y esquema, con la ilustración como cabecera secundaria solo si mejora la página. Las seis ilustraciones las generó Diego con IA (ChatGPT) en una sola hoja con la paleta del sitio.

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

### 15.2 Paso 5, resto de secciones

Qué se hizo, sección por sección.

- Perfil. La propuesta de valor va como entrada de 28 px a 8 columnas y el lema como cita al margen con filete. «Cómo trabajo» abre con el primer principio en titular y los otros cuatro van en cuatro columnas.
- Franja Hardware / Software. Dos capas iguales, papel debajo y negro encima recortada con `clip-path`. «Hardware» queda en el lado negro, «Software» en el papel y «Del sensor a la interfaz.» cruza la diagonal y cambia de color al cruzarla. Debajo de cada palabra va la formación real que la sostiene. No usa rojo.
- Habilidades. Tabla de especificaciones en voz dato, un renglón por grupo de los datos, con un solo filete arriba.
- Experiencia. Tabla cronológica con periodo en mono, cargo y enlace al caso con el nombre del proyecto. El resumen salió de la fila porque ya está en el selector.
- Formación. Dos entradas grandes lado a lado y los idiomas en una línea al pie. Sin notas.
- Testimonios. Tres marcos de filete con «Pendiente», el rol y la nota de que se publica con autorización. Sin cita.
- Mapa. La captura real del mapa, tomada de `/quest` a 1952 × 1222 sin pérdida, enlazada a `/quest`.
- Contacto. El correo como enlace de 28 px, GitHub y CV, y el formulario con etiquetas visibles. Con campos vacíos avisa junto a cada campo, marca `aria-invalid` y lleva el foco al primero. No envía nada a un servidor.

Medidas.

| Comprobación | 390 | 768 | 1440 |
|---|---|---|---|
| Alto de la página | 10718 | 9439 | 8414 |
| Scroll horizontal | no | no | no |
| Tramos vacíos de más de 380 px | ninguno | ninguno | ninguno |
| Márgenes del texto | 20 y 20 | 40 y 40 | 64 y 64 |
| Bloques rojos visibles a la vez, máximo | 1 | 1 | 1 |
| Caracteres por línea en perfil, máximo | 51 | 59 | 62 |
| Consola | limpia | limpia | limpia |

- La primera medición de perfil dio 75 caracteres a 1440 y 88 a 768. `62ch` se mide con el ancho del cero y Archivo promedia 0.45 em por carácter. `.medida` pasó a 27 em y la entrada de perfil a 29 em.
- Franja, contraste a cada lado de la diagonal. «Hardware» papel sobre negro 16.52. «Software» tinta sobre papel 15.92. El lema mide 16.52 en el lado negro y 15.92 en el papel. Los datos de formación en mono de 13 px dan los mismos valores. Las palabras miden 43, 84 y 158 px y el lema 40, 54 y 101 px en 390, 768 y 1440.
- Número grande del selector, rojo claro sobre negro, 5.83.
- Error del formulario, rojo texto sobre papel, 5.50.
- Navegación, cabeceras sobre papel y sobre negro. Entre 15.92 y 16.52, gris 6.28, gris claro 7.29.
- Teclado. 26 paradas a 390 y 32 a 1440, todas con contorno de 2 px y 44 px de alto, sin saltos hacia arriba. La primera medición marcó el enlace del correo con 34 px de alto. Ahora mide 44.
- Movimiento reducido. La portada y el selector no animan (medido en 13.1 y 15.1). Este paso no añade animaciones.

Repertorio contado al terminar.

| Forma | Trabajo | Dónde |
|---|---|---|
| Bloque rojo plano | Señalar al sujeto | Portada y selector, nunca dos a la vez en pantalla |
| Titular condensado | Nombrar | Portada, 8 aperturas de sección, placa, nombre en la ficha, primer principio, palabras y lema de la franja. Con las cifras de las enmiendas 5 y 9 |
| Filete con cuadrado y rótulo | Abrir una sección | 8 cabeceras |
| Filete suelto | Separar | Lema de perfil, tabla de habilidades, cronología y franja de portada |
| Marco de filete | Señalar un estado pendiente | Solo los 3 testimonios |
| Índice 01 a 11 | Ordenar proyectos | Solo el selector |
| Corte diagonal | Contar la dualidad | Una vez, la franja |
| Retrato en blanco y negro | Poner cara | Una vez, la portada |

Se quitó el marco de la captura del mapa para que el filete no hiciera de marco en dos sitios.

Crítica contra las referencias. La comparativa está en `docs/pantallazos/rediseno/Inicio comparativa.png`. La mitad de arriba aguanta (portada, selector y franja). La de abajo es más textual que Abdullah Tariq y Axel Morgan. Ellos usan iconos, logos de clientes, fotos de proyectos y cifras de premios, y el contrato excluye todo eso. Dentro del contrato la experiencia se acortó y el mapa da una imagen real. Habilidades y experiencia siguen siendo texto bien puesto sin un punto de entrada propio. Hacer más exigiría otra forma en el repertorio.

### 15.3 Privacidad

- La política de privacidad está en `data/privacidad.ts`, en español e inglés. Versión 1.0, vigente desde el 10 de noviembre de 2026. Arriba dice que es un borrador técnico pendiente de revisión por un abogado.
- `npx tsx scripts/privacidad-md.ts` genera desde la misma fuente `docs/legal/Politica de privacidad.md` y `docs/legal/Privacy policy.md`.
- Las páginas `/privacidad` y `/en/privacy` muestran el texto y se enlazan desde el pie de la página de inicio.
- Contenido de la política.
  - Responsable y contacto.
  - Qué datos se tratan. El formulario abre el correo del visitante y no envía nada. Vercel Web Analytics no usa cookies. El mapa guarda tres claves en `localStorage`.
  - Finalidad, autorización, con quién se comparten, conservación y seguridad.
  - Derechos del artículo 8 de la Ley 1581 de 2012, y plazos de 10 y 15 días hábiles de los artículos 14 y 15.
  - Cookies, menores, marco legal y cambios.
- Lo que recoge Vercel Web Analytics se tomó de su documentación, https://vercel.com/docs/analytics/privacy-policy, consultada el 10 de noviembre de 2026. No usa cookies. Identifica la visita con un hash de la petición que se descarta a las 24 horas. Guarda fecha, página, ruta, origen, parámetros filtrados, ubicación aproximada, sistema operativo, navegador y tipo de dispositivo.
- La página de privacidad tiene un botón para borrar el progreso del mapa. Borra las tres claves y anuncia el resultado en una región `status`. Las claves salen de `QUEST_KEYS`, la misma constante que usa el mapa.
- No hay aviso de cookies porque no hay cookies. Lo dice la propia página. Tras cargar `/` el navegador tiene 0 cookies, medido con Playwright en local, donde Analytics no se carga.
- El texto legal en español pasa `medir.py` en registro formal, sin «;», sin rayas, sin tics y sin «:» fuera de lista o rótulo.
- Medidas de las páginas de privacidad.
  - Sin scroll horizontal y consola limpia.
  - Máximo de 62 caracteres por línea en español a 1440 y 63 en inglés, contando el espacio final.
  - Con 27 em el texto legal llegaba a 64, así que `.medida` bajó a 26 em en todo el sitio.
- Prueba e2e nueva. Llega a la política desde el pie, comprueba el aviso de borrador y la frase de cookies, borra el progreso guardado por el mapa y cambia a la versión en inglés.

Pruebas finales. `npm run lint` sin errores. `npm test` 36 de 36. `npm run e2e` 36 de 36. `npm run build` correcto.

Capturas nuevas en `docs/pantallazos/rediseno/`.

- Página completa: `Inicio 390.png`, `Inicio 768.png`, `Inicio 1440.png` e `Inicio comparativa.png`.
- Franja: `Franja 390.png`, `Franja 768.png` y `Franja 1440.png`.
- Formulario: `Contacto 1440 formulario vacío.png`.
- Selector: `Selector 1024 primero.png`, `Selector 1024 con captura.png`, `Selector 1024 sin captura.png` y sus pares de 1440.
- Privacidad: `Privacidad 390.png` y `Privacidad 1440.png`.

Pendiente. El texto legal lo tiene que revisar un abogado antes de publicarse para terceros. La política no cubre las páginas de caso de cada proyecto ni el título y la descripción del sitio, que siguen pendientes de pasar a los tokens.

## 16. Verificación del paso 6

10 de noviembre de 2026. Diego delegó las decisiones pendientes con un objetivo, que lo contraten. Las enmiendas 11, 12 y 13 están en la 8.11. Commits de este paso, en orden.

- `be998ab` esquemas de sistema
- `7f09b15` habilidades y experiencia
- `34ec006` páginas de caso, mapa y 404
- `6eea563` metadatos e imágenes sociales
- `efc4c76` CV

### 16.1 Esquemas de sistema

Un solo componente (`components/editorial/esquema-sistema.tsx`) dibuja cada esquema desde `data/projects.ts`. Los nodos son HTML con filete de 1 px para que el texto no baje de 13 px. Las flechas son el icono flecha abajo del repertorio. El primer y el último nodo van en tinta para marcar la entrada y la salida. Siempre lleva el rótulo «Esquema» y una descripción accesible del recorrido. Cada bloque se comprobó con `gh api`, sin clonar.

| Proyecto | Recorrido | Fuente |
|---|---|---|
| AgroPulse | Sensores, ESP32, API REST, y después Supabase, panel web y alertas | README de firmware, backend y frontend |
| HidroMon | Usuario, zona, sensor, lectura y alerta | Diagrama entidad-relación del README |
| Harmonia | Frontend, API Express con Passport, y después MongoDB, Redis y Groq | Árbol del repositorio y `backend/package.json` |
| Proxy IA | Cliente, caché, límite, cuota con reinicio programado y generación simulada | Código de `proxy-ai-backend` |
| EcoVolt | API FastAPI, dominio, estructuras de datos y SQLite | `backend/main.py`, carpetas y `db/database_connection.py` |
| Tower Defense | Tower, BaseTower y TowerDecorator, cuatro decoradores y la torre apilada | README del repositorio |

- El esquema de Proxy IA destapó un dato equivocado. Los datos decían que una tarea reinicia el uso diario. El código reinicia el límite de peticiones cada minuto y las cuotas cada mes. Se corrigió en los dos idiomas.
- El esquema sustituye a la placa en el selector, en la página de caso, en la miniatura de experiencia y en la imagen social del proyecto. La placa queda solo para un proyecto sin captura ni esquema, y hoy no hay ninguno.
- El alto del esquema va de 332 a 522 px a 1440. El contraste sobre el render es de 15.92 en los nodos (tinta sobre papel y papel sobre tinta) y de 6.28 en las etiquetas de las flechas. El texto nunca cae sobre el rojo.

### 16.2 Habilidades y experiencia

- Cada grupo de habilidades abre con la cifra de proyectos distintos que usan alguna de sus tecnologías. Lenguajes 10, Frontend y apps 8, Backend 6, Datos 3, Electrónica 2, Despliegue y herramientas 2, Ingeniería 1. El grupo con más proyectos abre a doble ancho.
- Cada tecnología lleva el número de los proyectos que la usan, enlazado al selector con su fragmento. Las tecnologías sin proyecto se muestran en gris y sin número.
- Un alias en el código une los nombres escritos distinto en habilidades y en proyectos, como Java 17 y Java o C/C++ y C++.
- Cada fila de experiencia lleva la miniatura real o el esquema, el periodo, el cargo, el primer resultado del caso y el enlace. Con puntero fino la miniatura se amplía al 106 % en 200 ms. En táctil, teclado y movimiento reducido no cambia nada.
- Perfil lleva el correo y el CV junto al lema, como enlaces de texto, distintos del bloque de contacto.

### 16.3 Páginas de caso, limpieza y 404

- La página de caso tiene el número en rojo y el nombre en titular, la ficha en voz dato y la captura o el esquema sobre el bloque rojo. Siguen la historia, el lateral fijo con tecnologías y código, el siguiente proyecto sobre negro y el cierre con contacto.
- La captura reserva su hueco con la proporción de los datos. La primera medición dio un salto de layout de 0.116 a 768 px. Ahora da 0.
- Se borraron `motion-provider.tsx`, `portfolio-nav.tsx`, `contact-footer.tsx` y `grid-toggle.tsx`. `gsap` y `lenis` salieron de `package.json`.
- También salieron Geist, los SVG de plantilla, `favicon.ico` y el CSS sin uso (Lenis, revelados, escena de título, `.lead`, `.section-title`, `.nav-link` y `.pixel-input`). Un grep confirma que nada los importa.
- `/quest` carga su propia fuente pixel y sus tokens viejos dentro de `.quest-mundo`. Usa la navegación y el pie del sitio.
- La 404 tiene la cifra en titular rojo, el mensaje en los dos idiomas y tres salidas.

### 16.4 Metadatos, imagen social y CV

- Título y descripción reales, con cifras contadas. Canónicas y `hreflang` es, en y x-default. `sitemap.xml` con las 30 páginas y su par. `robots.txt` sin `/sistema`.
- Datos estructurados Person con nombre, correo público, GitHub, rol, universidades e idiomas. Sin teléfono.
- Satori no admite fuentes variables ni WOFF2. `scripts/fuentes-estaticas.py` crea instancias estáticas de Archivo y Plex Mono en `assets/fuentes` a partir de lo que next/font ya descargó al compilar. No se descargó ningún archivo nuevo. Archivo condensada se ve en las imágenes generadas `OG es.png`, `OG en.png`, `OG caso AgroPulse.png` y `OG caso NotaScan.png`.
- El icono y el apple-icon son el monograma DP sobre rojo.
- El CV va en una columna, en Archivo y Plex Mono sobre papel, con un solo acento rojo. Son dos páginas A4 por idioma.
  - El texto extraído del PDF contiene los 51 datos de referencia de cada idioma (nombre, correo, frase, los 11 cargos con proyecto y periodo, formación, grupos e idiomas).
  - No aparece ningún teléfono, cédula ni nota.
  - Ningún bloque sale de los márgenes de 40 y 44 pt. Ninguna página termina con un título de sección.
  - El contraste sobre el render a 300 ppp es de 15.92 para la tinta y 6.28 para el gris.
  - Tiene 25 enlaces vivos.
- La URL del portafolio en el CV sale del campo de página del repositorio en GitHub (`mi-portafolio-beta-kohl.vercel.app`). Si el despliegue cambia de dirección hay que actualizar `PORTFOLIO_URL` y regenerar el CV.

### 16.5 Verificación del sitio

Playwright con DPR 1 y servidor de producción local.

| Página | Ancho | Scroll horizontal | Tramo vacío máximo | Rojos a la vez | CLS | Consola |
|---|---|---|---|---|---|---|
| Inicio | 390 | no | 303 | 1 | 0 | limpia |
| Inicio | 768 | no | 182 | 1 | 0 | limpia |
| Inicio | 1440 | no | 181 | 1 | 0 | limpia |
| Caso con captura | 390, 768 y 1440 | no | 190 | 1 | 0 | limpia |
| Caso con esquema | 390, 768 y 1440 | no | 189 | 1 | 0 | limpia |
| Quest | 390, 768 y 1440 | no | 80 | 0 | 0 | limpia |
| 404 | 390, 768 y 1440 | no | 331 | 0 | 0.024 como máximo | limpia |

- La primera medición falló en el inicio a 390 px, con un tramo vacío de 390 px bajo los paneles cortos del selector. Se resolvió con el escenario cuadrado en celular.
- Teclado. 75 paradas en el inicio, 16 en el caso con captura y 17 en el caso con esquema, todas con contorno de 2 px y 44 px de alto. La primera medición encontró «Saltar al contenido» sin contorno. Ya lo tiene.
- Con movimiento reducido la portada no anima y la miniatura de experiencia no se amplía.
- Sin JavaScript se ven los 11 paneles, los 6 esquemas y los enlaces a los casos. El caso de AgroPulse muestra su esquema.
- Contraste en el caso. Número y nombre 15.92, rótulos de ficha 6.28, siguiente proyecto 16.52.
- Contraste en el inicio. Cifras de habilidades 15.92, tecnología sin proyecto 6.28, logro de experiencia 6.28.
- Pruebas. `npm run lint` sin errores. `npm test` 39 de 39. `npm run e2e` 40 de 40, con pruebas nuevas para esquema, habilidades, experiencia y SEO. `npm run build` correcto.
- Lighthouse queda pendiente. No está instalado en el equipo y no se descargó sin permiso de Diego. Hay que correrlo sobre el despliegue en `/`, un caso y `/en`, en móvil y escritorio.

### 16.6 Crítica final con ojo de quien contrata

Las comparativas están en `docs/pantallazos/rediseno/Comparativa final 1440.png` y `Comparativa final 390.png`.

- En diez segundos se ven el nombre, la frase, las cifras, «Ver proyectos» y «Descargar CV». El contacto está en la navegación, en perfil, en la sección de contacto y al final de cada caso.
- Lo que hace Diego queda dicho por el rótulo de la portada y la frase, pero el rótulo es mono de 13 px. Una línea más concreta en la portada pediría copia nueva que Diego tiene que escribir o aprobar.
- Cada sección tiene ahora un punto de entrada. Habilidades con cifras, experiencia con miniaturas, el mapa con su captura y la franja diagonal.
- Testimonios sigue siendo un estado pendiente. Es honesto, pero no convence hasta que haya tres testimonios reales.
- Seis de once proyectos se apoyan en esquemas. Explican el sistema, pero una captura real convence más.
- La página en celular mide 14042 px. Habilidades y experiencia la alargan porque cada enlace mide 44 px.

## 17. Ilustraciones de proyecto

10 de noviembre de 2026. Alcance reducido por Diego: integrar las ilustraciones en selector, experiencia e imagen para redes, y cerrar ahí.

- Hecho. Seis recortes de 740 × 330 px desde la hoja de 1586 × 992 px, sin la decoración de las esquinas, con el crema llevado al papel del sitio (`scripts/recortar-ilustraciones.py`). Campo `ilustracion` en `data/projects.ts`. Prioridad captura, ilustración, esquema y placa en selector, experiencia e imagen para redes, con el rótulo «Ilustración».
- Verificado. Lint, test, e2e y build, y una captura del selector a 1440 con un proyecto ilustrado (`Selector 1440 con ilustración.png`).
- Sin hacer. La ilustración como cabecera secundaria de la página de caso, la verificación completa (resolución, alto, contraste y anchos) y la actualización de ESTADO e HISTORIAL.


## 18. Modo oscuro y selector de tema

11 de noviembre de 2026. Petición del profesor para todos sus proyectos. Diego pidió añadir un tema oscuro con selector (Claro, Oscuro y Como el sistema), guardado en el dispositivo y sin parpadeo al cargar. El resto del portafolio no se toca. Estado actual, investigación y direcciones. No hay código todavía y falta que Diego elija.

### 18.1 Encuadre

- Quién lo usa. Los mismos tres de la sección 2. El que más gana es el reclutador o el cliente que abre el enlace de noche desde el celular, con el teléfono en oscuro. El docente lo revisa en escritorio y va a probar el selector a propósito.
- Qué decide. Nada nuevo. La decisión dominante sigue siendo abrir un proyecto o bajar el CV. El tema solo tiene que no estorbar.
- Restricción que manda. El sitio claro ya vive de alternar papel y negro (portada, cinta negra, perfil, proyectos sobre negro, franja, habilidades, experiencia, formación, testimonios, mapa, contacto y pie negro). Si en oscuro todo pasa a negro, se pierde el ritmo y las láminas que suben una sobre otra dejan de verse.
- Lectura voluntaria. Registro de marca, igual que el resto del anexo.

### 18.2 Inventario medido

Comprobado con grep el 11 de noviembre de 2026 sobre `app/v2.css`, `app/globals.css` y los componentes.

Tokens de color (definidos en `app/globals.css`, líneas 30 a 37, y usados por `v2.css`):

| Token | Valor | Usos en v2.css | Usos en globals.css |
|---|---|---|---|
| `--papel` | `#F1ECE2` | 28 | 17 |
| `--tinta` | `#121211` | 35 | 30 |
| `--gris` | `#5A554C` | 8 | 5 |
| `--rojo` | `#D92B1F` | 12 | 6 |
| `--rojo-texto` | `#B81F14` | 6 | 3 |
| `--negro` | `#0D0D0C` | 0 | 4 |
| `--gris-claro` | `#A39E94` | 4 | 3 |
| `--rojo-claro` | `#FF4A3D` | 16 | 2 |

Los tokens viejos del mapa (`--ink`, `--forest`, `--emerald`, `--paper`, `--amber`) y los colores de `components/pixel-sprites.tsx` son del mapa 2D de `/quest`. Son pixel art con su propia paleta y no cambian con el tema.

Colores escritos a mano en `v2.css` que hoy no pasan por ningún token y habrá que convertir en token antes de tocar el tema:

| Valor | Dónde | Trabajo |
|---|---|---|
| `#E8E1D3` | Experiencia, testimonios y contacto (línea 392), bloque de medios (300) | Segundo tono de papel, el que hace notar el cambio entre secciones claras |
| `#F7F3EA`, `#E9E2D4` | Grupos y chips de habilidades (219, 221), esquema (345) | Superficie elevada sobre papel |
| `#FFFFFF` | Borde de sticker del retrato (40), marcos de capturas, polaroid, carrusel, galería, ilustración de caso, testimonios, logos de habilidades, nodos de esquema | Marco blanco de objeto pegado |
| `#F6F1E4` | Cinta «Electrónica + Software» (45) | Cinta de papel pegada |
| `#FFFDF8` y sombra interior `rgba(18,18,17,.35)` | Campos del formulario (230) | Campo de texto |
| `rgba(241,236,226,.82)` y desenfoque | Encabezado fijo (180) | Fondo del encabezado |
| `#D8D2C6`, `rgba(241,236,226,.06)` | Pasantía (282, 295) | Texto y etapas sobre la tarjeta negra |
| `#1F9D55` | Punto «Abierto a prácticas» (26, 320) | Estado real, verde |
| `#0A66C2` | Botón de LinkedIn en testimonios (383) | Color de marca de LinkedIn |
| `rgba(13,13,12,.94)` | Visor de imágenes (477) | Ya es oscuro, no cambia |

Superficies y qué les pasa en oscuro:

| Superficie | En claro | En oscuro |
|---|---|---|
| Portada (`.sup-papel` en `portada.tsx`) | Papel con bloque rojo y retrato sticker | Cambia el suelo. El bloque rojo y el borde blanco se quedan |
| Encabezado (`.nav-ed`) | Papel translúcido con desenfoque | Cambia |
| Cinta de tecnologías (`.sup-negro`) | Negro | Se queda negra y tiene que separarse del suelo nuevo |
| Perfil, habilidades, formación, mapa (`.sup-papel` de `seccion.tsx`) | Papel | Cambia |
| Experiencia, testimonios, contacto (por id) | Arena `#E8E1D3` | Cambia, un escalón distinto del anterior |
| Proyectos (`seccion.tsx` con `oscura`) | Negro | Se queda y tiene que seguir siendo «la sala oscura» |
| Franja Hardware / Software (`franja-dual.tsx`) | Mitad papel y mitad negro | La mitad clara cambia |
| Pasantía (`.pasantia`) | Tarjeta tinta sobre arena | Necesita un tono propio para no fundirse |
| Pie (`pie.tsx`, `.sup-negro`) | Negro | Se queda |
| Logos de habilidades (`habilidades.tsx`, `fill` con el color de marca de simple-icons) | Sobre ficha blanca | Se queda la ficha clara. Varios logos son negros (GitHub, Next.js, Vercel) y desaparecerían sobre fondo oscuro |
| Ilustraciones de proyecto | Recortes con el crema horneado al papel del sitio | Se quedan como objeto con marco, no como fondo |
| Capturas | Marco blanco | Se quedan con marco |
| Mapa 2D de `/quest` | Pixel art | No cambia |
| Imagen para redes y CV en PDF | Fijos | Fuera de alcance |

Foco. `globals.css` ya cambia el color del anillo por superficie (`--color-foco` en `.sup-papel` y `.sup-negro`), así que el foco sigue al tema si sigue a la superficie.

Riesgo técnico anotado para la implementación. No hay nada de tema hoy (cero coincidencias de `color-scheme`, `prefers-color-scheme` o `data-theme`). La etiqueta `<html>` está en `app/root-shell.tsx`, compartida por las rutas en español e inglés. Este Next.js trae cambios respecto a lo conocido (ver `AGENTS.md`), así que el script del `<head>` se escribe leyendo antes la guía de `node_modules/next/dist/docs/`.

### 18.3 Referentes

Investigación proporcional a un cambio sobre un sistema que ya existe. Capturas en `docs/ux/anexos/ref/`.

- styles.refero.design, búsqueda «red black editorial poster», vista en Chrome el 11 de noviembre de 2026 (https://styles.refero.design/?q=red%20black%20editorial%20poster). Las fichas de Cards Against Humanity e Impossible Foods resuelven el oscuro sin apagar el rojo. Una lo deja como trazo sobre negro y la otra lo convierte en campo granate con texto rojo vivo encima. → Decisión. El rojo de marca no se desatura en oscuro, el bloque de portada sigue siendo `#D92B1F`. → Límite. No copio el campo granate como suelo general. Rompe la regla de un solo bloque rojo por pantalla. La captura guardada por Playwright (`2026-11-11 refero rojo negro.png`) salió con el aviso «búsqueda no disponible», así que la observación viene de la vista en Chrome. Chrome se desconectó antes de guardar esa imagen.
- The Verge, portada en oscuro (https://www.theverge.com/, `2026-11-11 the verge oscuro.png`). El suelo es casi negro y la marca vive en campos de color sólido y en el logotipo gigante girado. La foto va sin marco y se recorta contra el negro. → Decisión. En oscuro el color de marca carga la identidad y el suelo se queda neutro. Las fotos y capturas conservan su marco blanco, porque en este sitio el marco es el gesto de objeto pegado. → Límite. No tomo el verde menta de acento ni el titular girado.
- Vercel, pie de página (https://vercel.com/, `2026-11-11 vercel pie selector tema.png`). El tema se elige con tres iconos seguidos (sistema, claro, oscuro) en una pastilla de unos 20 px en la esquina del pie. → Decisión. Tres estados explícitos, con «Como el sistema» como uno más. → Límite. No lo pongo en el pie ni lo dejo en iconos de 20 px. Está por debajo de 44 px, no se encuentra y los iconos de sol y luna son el selector de tema por defecto.
- Lea Verou, «Dark mode toggles: two states are enough», 2026 (https://lea.verou.me/blog/2026/dark-mode-toggles/). Defiende que el botón muestre solo lo que se puede cambiar y que el modo del sistema exista como estado que no se guarda. Solo se guarda la elección explícita y nunca se borra sola si el sistema cambia. → Decisión. «Como el sistema» no escribe nada en `localStorage`, se borra la clave. «Claro» y «Oscuro» se guardan tal cual. → Límite. El encargo pide los tres estados visibles, así que no adopto su botón de dos estados.
- Emil Kowalski, «You don't need animations» (https://emilkowal.ski/ui/you-dont-need-animations), y la opción `disableTransitionOnChange` de next-themes (https://github.com/pacocoursey/next-themes). Kowalski mide la animación por la frecuencia y la intención. Una acción de preferencia no gana nada con un fundido. next-themes apaga todas las transiciones un instante al cambiar de tema para que no se vea cada elemento cambiar a destiempo. → Decisión. El cambio de tema es instantáneo. Al cambiar se inyecta `*{transition:none!important}` y se quita en el cuadro siguiente. Hoy hay transiciones de 150 a 400 ms en fondos (grupos de habilidades, láminas, botones) que harían un barrido desordenado. → Límite. No hago el círculo que se expande desde el botón con View Transitions. Es el efecto llamativo de moda y aquí no comunica nada.
- Fuente no accesible. https://emilkowal.ski/ui/the-magic-of-clip-path y https://www.joshwcomeau.com/react/dark-mode/ no abrieron con WebFetch el 11 de noviembre de 2026 (dominio no verificable). La página de Kowalski se leyó por terminal. Josh Comeau no se usa.
- Mobbin, Pinterest y motionsites no se consultaron. El cambio es de paleta sobre un sistema cerrado y Chrome se desconectó.

La captura de partida del sitio en claro está en `2026-11-11 portafolio diego claro portada.png` y `2026-11-11 portafolio diego claro proyectos.png`.

### 18.4 Lo que vale para las tres direcciones

- Tokens. Los ocho tokens se redefinen bajo `html[data-tema="oscuro"]`. Antes se convierten en token los colores escritos a mano de la tabla 18.2. Ningún componente lleva color de tema propio.
- Sin parpadeo. Un script pequeño en el `<head>` de `root-shell.tsx`, antes de pintar, lee `localStorage` (clave `tema`). Si vale `claro` u `oscuro` lo aplica. Si no hay nada, mira `prefers-color-scheme`. Escribe `data-tema` y `color-scheme` en `<html>`. `<html>` lleva `suppressHydrationWarning`. En modo sistema se escucha el cambio del sistema operativo.
- Lo que no cambia de color. Bloque rojo de portada, borde blanco del sticker, cinta pegada, marcos blancos de capturas e ilustraciones, fichas claras de los logos, pixel art del mapa, punto verde y botón de LinkedIn.
- Contraste. Piso AA en todo texto. AAA en cifras (proyectos, ingenierías y cifras de habilidades).
- Movimiento. El cambio de tema no se anima. Las láminas y entradas que ya existen siguen igual y siguen respetando `prefers-reduced-motion`.
- Prohibiciones de Diego que siguen. Ninguna línea negra de 1 px (en oscuro tampoco se cambian por líneas claras de 1 px), botones en píldora, sin monoespaciada en rótulos.
- Privacidad. La preferencia se guarda solo en el navegador, con una clave que no identifica a nadie, y no viaja a ningún servidor. Es almacenamiento técnico necesario para una función que la persona pidió, no rastreo. Hay que añadir una línea a la política de `docs/legal/` y a la página de privacidad, en la parte de almacenamiento local, con la clave, para qué sirve y cómo borrarla (elegir «Como el sistema» la borra).

### 18.5 Direcciones

#### A. Escalera de grafito (recomendada)

Una frase. Las secciones que eran papel pasan a dos grafitos cálidos y las que ya eran negras se quedan en el negro más hondo, así el oscuro conserva el mismo orden de escalones que el claro, solo que más corto.

| Token en oscuro | Valor | Sustituye a | Medido |
|---|---|---|---|
| Suelo | `#262420` | `--papel` como fondo | Texto `#F1ECE2` 13.16 |
| Suelo alterno | `#302D28` | Arena `#E8E1D3` | Texto 11.65, gris 5.14 |
| Sala negra | `#0D0D0C` | Se queda (cinta, proyectos, pie) | Escalón con el suelo 1.26 |
| Texto | `#F1ECE2` | `--tinta` como texto | |
| Texto secundario | `#A39E94` | `--gris` | 5.14 sobre suelo alterno |
| Rojo de texto | `#FF6257` | `--rojo-texto` | 5.26 sobre suelo, 4.66 sobre suelo alterno |
| Rojo de bloque | `#D92B1F` | Se queda | Titular rojo grande sobre negro 4.00 |
| Tarjeta de pasantía | `#0D0D0C` | `--tinta` como fondo | Contrasta con el suelo alterno |

Ritmo. En claro el escalón papel y arena mide 1.10 y el sitio lo nota gracias a las láminas de esquinas redondeadas. En oscuro el escalón entre suelo y suelo alterno mide 1.13 y entre suelo y sala negra 1.26, así que el orden se mantiene y los proyectos siguen siendo el lugar más oscuro de la página. El borde redondeado de cada lámina hace el resto del trabajo, igual que en claro.

Respaldo. The Verge (suelo neutro, marca en el color), refero con Cards Against Humanity (rojo intacto sobre negro).

Riesgos del presupuesto que gasta. Color como campo (el bloque rojo de portada queda aún más fuerte sobre grafito) y superposición (las láminas que suben una sobre otra se siguen viendo por el escalón).

Riesgo propio. Los saltos son pequeños. En una pantalla barata con poco contraste el paso entre suelo y suelo alterno puede no verse. Se compensa porque cada sección empieza con la esquina redondeada de su lámina, y se verifica en un celular real.

#### B. Mesa de luz

Una frase. El ritmo se invierte, el sitio pasa a grafito y la sección de proyectos se vuelve la única superficie clara, como una mesa de luz donde se ponen las capturas.

| Token | Valor | Medido |
|---|---|---|
| Suelo | `#1C1B19` | Texto 14.62 |
| Mesa de luz (proyectos y cinta) | `#E8E1D3` | Tinta 14.41, rojo de texto 4.98, escalón con el suelo 13.23 |

Ritmo. Conserva el salto grande de claro a oscuro, pero al revés. Es la que más se parece en fuerza al claro.

Respaldo. Ninguno de los referentes lo hace. Sale de pensar el ritmo como contraste puro.

Riesgos que gasta. Color como campo y asimetría estructural (todo el peso de luz cae en un punto).

Riesgo propio. Quien eligió oscuro de noche recibe un bloque crema de varias pantallas de alto justo en la sección más larga. Es lo contrario de lo que pidió. Además la sección de proyectos fue diseñada como «sala oscura» con el número en rojo hueco, y en claro ese gesto ya existe en la portada.

#### C. Brasa

Una frase. Suelo casi negro neutro en todo el sitio y la sección de proyectos en un rojo muy oscuro, así el ritmo pasa de la luz al tono.

| Token | Valor | Medido |
|---|---|---|
| Suelo | `#161514` | Texto 15.49 |
| Brasa (proyectos) | `#24100D` | Texto 15.44, rojo de texto 5.45, escalón de luz con el suelo 1.00 |

Respaldo. refero con Impossible Foods (campo granate con rojo encima).

Riesgos que gasta. Color como campo.

Riesgo propio. El escalón de luz entre suelo y brasa es 1.00. Solo se distingue por el tono, así que una persona con protanopía ve una sola superficie. El rojo deja de estar reservado al bloque de portada y a los titulares y se vuelve fondo, cosa que el contrato prohíbe (un solo bloque rojo por pantalla). Tira hacia la familia granate que la skill de taste marca como salida por defecto.

### 18.6 Selector de tema

Va en el encabezado, junto al enlace de idioma y antes del botón «Descargar CV», con la misma familia de píldoras.

- Escritorio (1024 px o más). Una píldora de texto de 44 px de alto que dice el estado actual, «Tema: Sistema», «Tema: Claro» o «Tema: Oscuro». Abre un menú corto con las tres opciones en texto. Es un botón con `aria-expanded` y un grupo de opciones con `role="menuitemradio"` y `aria-checked`. Flechas para moverse, Enter o Espacio para elegir, Escape cierra y devuelve el foco al botón. Sin sol ni luna, porque el sitio es tipográfico y los iconos de tema son el selector por defecto.
- Celular y tablet. Dentro del panel del menú, una fila de tres píldoras con texto, «Claro», «Oscuro» y «Sistema», cada una de 44 px de alto como mínimo. Es un `radiogroup` nativo (inputs de radio con etiqueta), así funciona con teclado y lector de pantalla sin código extra.
- Ancho. La navegación tiene que seguir en una sola línea a 1024 px. Si la píldora no cabe, la etiqueta se acorta a «Tema» con el estado en `aria-label`. Se mide antes de elegir.
- Idiomas. «Tema», «Claro», «Oscuro», «Como el sistema» y en inglés «Theme», «Light», «Dark», «System».
- Alternativa descartada. Un botón que alterna en ciclo de tres estados. Obliga a pulsar hasta encontrar el que se quiere y no deja ver las opciones.

### 18.7 Estados

- Sin JavaScript. El script del `<head>` no corre, el sitio respeta `prefers-color-scheme` con una media query de respaldo y el selector se oculta.
- Sin `localStorage` (modo privado o bloqueado). La elección vale para esa visita y no se guarda. No se muestra error.
- Valor guardado inválido. Se trata como «Como el sistema».
- Cambio del sistema con el sitio abierto. En «Como el sistema» se aplica al momento. En «Claro» u «Oscuro» no se toca.

### 18.8 Recomendación

La A. Es la única que cumple a la vez lo que pidió Diego y lo que pidió quien eligió oscuro. Mantiene el orden de las secciones, deja los proyectos como el lugar más oscuro y no toca el rojo ni el sticker. La B tiene el ritmo más fuerte pero castiga a quien eligió oscuro. La C se ve atractiva en una captura pero rompe la regla del rojo y depende solo del tono.

Pendiente de la respuesta de Diego. Elegida la dirección, se escribe aquí como enmienda del contrato vigente, con fecha. Después se implementa paso a paso (tokens, selector, esqueleto con el script del `<head>`, secciones, página completa y estados), con capturas en claro y oscuro a 390, 768 y 1440 px.

### 18.9 Enmienda 15. Contrato del modo oscuro

Aprobada por Diego el 11 de noviembre de 2026, por pregunta directa. Eligió la dirección A, «Escalera de grafito», con el selector en el encabezado como se propuso en 18.6. Desde aquí es parte del contrato vigente. Lo que no esté en esta lista no entra en el tema oscuro.

Color en oscuro. Se redefine en `<html data-tema="oscuro">`.

| Token | Claro | Oscuro | Trabajo en oscuro |
|---|---|---|---|
| `--papel` | `#F1ECE2` | `#262420` | Suelo de las secciones que en claro son papel |
| `--papel-2` | `#E8E1D3` | `#302D28` | Suelo alterno (experiencia, testimonios, contacto, medios) |
| `--tinta` | `#121211` | `#F1ECE2` | Texto sobre el suelo |
| `--gris` | `#5A554C` | `#A39E94` | Texto secundario |
| `--rojo-texto` | `#B81F14` | `#FF6257` | Rojo de texto pequeño y cifra de habilidades |
| `--papel-elevado` | `#F7F3EA` | `#302D28` | Grupos de habilidades y esquema |
| `--papel-chip` | `#E9E2D4` | `#3A3732` | Chips de habilidades |
| `--tarjeta` | `#FFFFFF` | `#3A3732` | Tarjeta de testimonio y nodo de esquema |
| `--campo` | `#FFFDF8` | `#262420` | Campo del formulario, con borde crema al 35 % |
| `--nav-fondo` | papel al 82 % | grafito al 86 % | Encabezado translúcido |

Lo que se queda igual en los dos temas: `--rojo` (bloque, titulares rojos y cuadros de rótulo), `--negro` (cinta, proyectos, pie), `--rojo-claro` y `--gris-claro` (texto sobre negro), `--marco` (borde del sticker y marcos blancos), la cinta pegada, el verde de estado, el azul de LinkedIn, el botón primario (rojo `#B81F14` con texto papel) y el pixel art de `/quest`.

Superficies que conservan los valores del claro dentro del oscuro: `.sup-negro`, la composición de portada (`.hero2-foto`), la tarjeta de pasantía, el telón negro y las fichas blancas de logos. Ahí los tokens se restauran desde copias fijas (`--papel-fijo`, `--tinta-fija`, `--gris-fijo`, `--rojo-texto-fijo`).

Ajuste que salió al medir. La cifra de habilidades daba 2.82 en rojo de bloque sobre el suelo alterno. En oscuro usa `--rojo-texto` y da 4.66, AAA para texto grande. En claro no cambia.

Mecánica. Un script en el `<head>` escribe `data-tema` antes de pintar. Lee la clave `tema` de `localStorage` («claro» u «oscuro») y, si no hay elección válida, sigue al sistema, también si cambia con la página abierta. Sin JavaScript manda `prefers-color-scheme`. El cambio de tema no se anima.

Selector. Va en el encabezado, entre el idioma y «Descargar CV», como píldora de texto de 44 px con menú de tres opciones. En celular va dentro del panel del menú, como tres píldoras de radio. Elegir «Como el sistema» borra la clave.

Fuera de alcance. Imagen para redes, CV en PDF, mapa 2D y cualquier cambio de composición, tipografía o espacio.

### 18.10 Verificación del paso 1, tokens

11 de noviembre de 2026. Rama `feature/modo-oscuro`.

Qué se hizo.

- Los colores escritos a mano en `v2.css` pasaron a tokens en `globals.css`, con el mismo valor en claro. Después del cambio, en `v2.css` fuera del bloque oscuro no queda ningún literal de color salvo la definición de `--suave`.
- El bloque «Tema oscuro» va al final de `v2.css`, con el respaldo de `prefers-color-scheme` para cuando no hay `data-tema`.
- El script va en el `<head>` de `app/root-shell.tsx` y `<html>` lleva `suppressHydrationWarning`. Se siguió la guía `node_modules/next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md`. El contenido del script es una constante del código, sin datos externos.
- El selector todavía no existe. Para probar, Playwright guarda `tema` en `localStorage` antes de cargar.

Cómo se comprobó.

- El claro queda idéntico. Se hicieron capturas de página completa a 390, 768 y 1440 px del inicio, del caso SISCAN y de `/en`, antes y después, con movimiento reducido. Dos capturas de la línea base dieron 0 píxeles distintos entre sí, así que la comparación no tiene ruido. Después del cambio dieron 0 píxeles distintos en las 9 páginas, tanto con «claro» guardado como sin elección y el sistema en claro.
- Estados del tema. Se probaron 9 casos: sistema oscuro o claro sin elección, elección contraria al sistema, valor inválido, sin JavaScript con el sistema en oscuro y en claro, y el sistema que cambia con la página abierta. Los 9 dan el tema esperado.
- Sin parpadeo. El script queda dentro del `<head>`, antes del `<body>`, sin ningún script bloqueante antes. Solo lo precede una hoja de estilo.
- Consola sin errores ni avisos en las 27 cargas de cada pasada.
- Contraste medido sobre el render en oscuro a 1440, 768 y 390 px. Se recorta la caja de cada texto en la captura y se compara el fondo más frecuente con la tinta de mayor contraste.

| Pareja | Medido |
|---|---|
| Titular, intro y cifras de portada (crema sobre suelo) | 13.16 |
| Titular rojo de portada (rojo de bloque sobre suelo) | 3.18 |
| Rótulo de sección y texto secundario (gris sobre suelo) | 5.81 |
| Enlace de navegación | 13.17 |
| Botón «Descargar CV» del encabezado (grafito sobre crema) | 13.17 |
| Botón primario (papel sobre rojo) | 5.50 |
| Meta de proyecto (rojo claro sobre negro) | 5.83 |
| Cifra de habilidades (rojo de texto sobre suelo alterno) | 4.66 |
| Chip de habilidad y texto de testimonio | 10.06 |
| Etiqueta de logo (tinta sobre ficha blanca) | 18.74 |
| Texto de pasantía | 11.09 |
| Etiqueta de formulario | 11.65 |
| Pie | 16.52 |

Fallos encontrados y corregidos.

- Las etiquetas bajo los logos de habilidades salían en crema sobre la ficha blanca. El `<span>` no tiene color propio y heredaba el ya calculado del grupo. Se le devolvió la tinta en oscuro y quedó en 18.74.
- La cifra de habilidades daba 2.82, por debajo del AA para texto grande. Se corrigió con `--rojo-texto` (ver 18.9) y quedó en 4.66.
- Error del propio script de medición. Marcó como fallo el «01» del caso (153 px, 3.18) y la cifra de habilidades (40 px, 4.66) porque los comparó con el piso de texto normal. A ese tamaño son texto grande y pasan.

Pendiente.

- El titular rojo de portada baja de 4.13 en claro a 3.18 en oscuro. Pasa AA para texto grande pero no AAA. Si Diego lo quiere más alto, la alternativa es usar `--rojo-claro` (`#FF4A3D`) en los titulares sobre grafito, sin tocar el bloque. Queda a su decisión.
- Probar en un celular real que se vea el escalón entre suelo y suelo alterno (1.13).
- Selector, recorrido por teclado y anulación de transiciones al cambiar de tema. Son el paso 2.

Captura combinada: `docs/pantallazos/modo-oscuro/Paso 1 tokens claro y oscuro.jpg`.
