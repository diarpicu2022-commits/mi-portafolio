# Anexo de diseño. CV con portada

11 de noviembre de 2026. Rama `feature/cv-portada`.

## 1. Por qué se rehace

El CV que se baja del portafolio (`public/cv-diego-armando-pinta-cuasquen.pdf`) son tres páginas A4 de texto en una sola columna. Se hizo así para los filtros automáticos (ATS) y cumple, pero no tiene ningún punto de entrada. Quien lo abre ve un bloque gris de texto y no reconoce el portafolio del que salió. Diego lo encontró «muy simple» y pidió que se parezca a una referencia de Pinterest sin salirse del diseño del sitio.

## 2. Usuarios

- **Reclutador o jefe técnico.** Abre el PDF desde el portafolio, desde LinkedIn o desde un correo. Le da entre 10 y 30 segundos a la primera página para decidir si sigue. Lo lee en pantalla, a veces en el celular, y pocas veces lo imprime.
- **Filtro automático (ATS).** Extrae el texto del PDF. Necesita texto real, en un orden de lectura lógico y sin palabras partidas.
- **Docente de la universidad.** Lo revisa junto con el portafolio y busca que los dos cuenten lo mismo.

## 3. Análisis de la comunicación

Lo primero que tiene que quedar es quién es Diego y qué hace (las dos ingenierías y la frase «Del sensor a la interfaz»). Después, la experiencia real en orden. Los proyectos son la prueba y van en la segunda página con enlace a su caso. La primera página es la que decide, por eso ahí va el diseño fuerte. La segunda es de consulta y puede ser más densa.

## 4. Referentes

| Referente | Observación | Decisión | Lo que no se copia |
|---|---|---|---|
| Pin de Diego, plantilla «Nathaniel Bibler». https://co.pinterest.com/pin/955326139736096089/ | Retrato arriba a la izquierda con «RESUME» en vertical al borde, nombre grande al lado y dos columnas abajo. La angosta lleva habilidades y una formación con línea de tiempo, la ancha lleva experiencia | Misma estructura de cabecera y de dos columnas, con «CV» en vertical | La franja verde lima, el nombre en dos pesos y la tipografía. Van los del portafolio |
| CV «Lynn», en los relacionados del mismo pin | Un bloque rojo plano grande detrás de la foto la vuelve el centro de la página | El bloque rojo del portafolio va detrás del retrato, una sola vez | El fondo negro de la lámina y el nombre en cursiva |
| CV amarillo «hi!», relacionados del mismo pin | Columnas con fondo de color plano para separar secciones | Se descarta. En el portafolio el rojo es un solo bloque por pantalla y aquí sería uno por columna | Todo |
| CV «Steve Warner», relacionados del mismo pin | Nombre en mayúsculas espaciadas y columnas separadas solo por aire, sin cajas | Columnas separadas por aire y filetes de 1 pt, sin cajas ni sombras | El espaciado de letras, que no está en el sistema |
| Contrato del portafolio. `docs/ux/anexos/2026-11-10-rediseno-portafolio.md` §8 | Papel, tinta, un bloque rojo, titular condensado, Plex Mono para datos, filete con cuadrado, radio 0 | Es el contrato que manda sobre este. Este anexo solo lo lleva al papel | Nada fuera de él |
| CV anterior. `public/cv-diego-armando-pinta-cuasquen.pdf` (3 páginas) | Texto seleccionable, enlaces vivos y sin guiones automáticos | Se conservan esas tres cosas para los ATS | La columna única y las tres páginas |

Los pines relacionados se vieron en la misma página del pin de Diego el 11 de noviembre de 2026 y no tienen URL propia anotada.

## 5. Direcciones

- **A. Portada (elegida).** Cabecera con retrato sobre el bloque rojo, «CV» en vertical y nombre en titular. Dos columnas abajo.
- **B. Hoja de datos.** Como la ficha técnica de un componente, una columna, mucho Plex Mono. Era la más amigable con los ATS, pero la más lejos de la referencia.
- **C. Franja negra.** Como A, con el tercio de arriba en negro. Gasta mucha tinta al imprimir.

**Decisión de Diego, 11 de noviembre de 2026.** Dirección A, en 2 páginas.

## 6. Contrato de diseño

### 6.1 Design Read

- Registro y audiencia: editorial impreso de lectura voluntaria. Reclutador con prisa y filtro automático.
- Escena de uso: PDF abierto en pantalla, a veces en el celular. La primera página decide.
- Tesis visual: la portada del portafolio reducida a una hoja, con el retrato sobre el bloque rojo y el nombre al lado, y debajo una hoja de vida ordenada en dos columnas.
- Decisión dominante: entender quién es y su experiencia en la primera página.
- Riesgo que se evita: la plantilla de CV con barras de porcentaje, iconos de banco, columnas de color y foto en círculo.

### 6.2 Página y retícula

- A4 (595 × 842 pt). Márgenes de 36 pt arriba, abajo y a los lados.
- Columna angosta de 170 pt a la izquierda, canal de 24 pt y columna ancha con el resto (329 pt).
- Escala de espacio en pt: 4, 8, 12, 16, 24 y 40.
- Radio 0 en todo. Filetes de 1 pt.

### 6.3 Color

Los mismos tokens del portafolio. Papel `#F1ECE2` de fondo, tinta `#121211`, gris `#5A554C` para lo secundario (6.28 sobre papel), rojo `#D92B1F` solo en el bloque del retrato y en el cuadrado de la frase. Sobre el rojo no va texto. Sin degradados ni sombras.

### 6.4 Tipografía

| Voz | Familia | Uso |
|---|---|---|
| Titular | Archivo condensada Black, mayúsculas | El nombre en la cabecera y «Proyectos» al abrir la página 2. Nunca por debajo de 30 pt |
| Texto | Archivo 400 y 600 | Párrafos, cargos y nombres de proyecto. Cuerpo de 9 a 9.5 pt |
| Dato | IBM Plex Mono 400 y 500 | Rótulos de sección, fechas, «CV» vertical, cifras de habilidades, números 01 a 11, tecnologías |

El tamaño del nombre se mide en el render contra el ancho real de la columna, no se elige a ojo.

### 6.5 Repertorio cerrado

| Forma | Su único trabajo | Dónde |
|---|---|---|
| Bloque rojo plano | Señalar al sujeto | Detrás del retrato, una vez |
| Retrato recortado | Poner cara | Cabecera, una vez |
| Titular condensado | Nombrar | Nombre y apertura de la página 2 |
| Filete de 1 pt con rótulo mono y cuadrado | Abrir una sección | Cada sección |
| Filete vertical con fechas | Ordenar en el tiempo | Formación, en la columna angosta |
| Número 01 a 11 en mono | Ordenar proyectos, igual que el selector del sitio | Página 2 |

Sin iconos. El contacto va como texto con enlace.

### 6.6 Puntos de entrada

1. El retrato sobre el bloque rojo con el nombre al lado.
2. La cifra real de proyectos por grupo de habilidades, contada desde `data/projects.ts` como en el sitio.
3. En la página 2, el titular «Proyectos» y los números 01 a 11.

### 6.7 Orden de lectura (ATS)

Cabecera, columna angosta (perfil, habilidades, formación, idiomas), columna ancha (experiencia) y página 2 (proyectos). Texto real, enlaces vivos y sin guiones automáticos, como el CV anterior. El riesgo es que algunos ATS leen mal las dos columnas. Se comprueba extrayendo el texto del PDF con `pdftotext` y mirando que salga en ese orden.

### 6.8 Pasos

1. Tokens y cabecera (componente clave).
2. Esqueleto de dos columnas en la página 1 con la experiencia.
3. Columna angosta completa (habilidades con cifra, formación con línea de tiempo, idiomas).
4. Página 2 con los proyectos.
5. Versión en inglés y verificación.

Cada paso se muestra y espera visto bueno.

## 7. Verificación prevista

Render de cada página a tamaño real, conteo de páginas (2), cajas de texto dentro de los márgenes, texto extraído con `pdftotext` en el orden de lectura, contraste muestreado sobre el render y cotejo de los datos contra `data/portfolio.ts` y `data/projects.ts`.

## 8. Legal

El CV publica nombre, correo y enlaces que Diego ya publica en el portafolio. No agrega teléfono, dirección, documento de identidad ni fecha de nacimiento.
