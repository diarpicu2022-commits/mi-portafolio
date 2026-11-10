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
