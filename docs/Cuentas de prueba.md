# Cuentas de prueba para revisar mis aplicaciones

Profe, aquí está lo que necesita para probar cada aplicación de los proyectos finales de Diseño de Interfaces de Software. Para cada una pongo qué hay que instalar, con qué cuenta se entra y qué vale la pena revisar.

Las contraseñas no van en este archivo porque el repositorio es público. Se las mando por mensaje privado. Las cuentas son solo para la revisión y las desactivo cuando termine el semestre.

| Aplicación | Necesita cuenta | Dónde se prueba |
|---|---|---|
| Portafolio | No | En el navegador |
| NotaScan | Sí, o el modo demo sin cuenta | App de escritorio (Windows, Linux o macOS) |
| SISCAN | Solo para mandar órdenes | Teléfono Android y reloj Wear OS |
| Agenda + CampusWatch | No | Teléfono Android y reloj Wear OS |
| Ecos de la Tierra | No | PC con Godot |

## 1. Portafolio

- **Dirección:** https://mi-portafolio-beta-kohl.vercel.app
- **Cuenta:** no necesita.
- **Para revisar:** el carrusel de proyectos con su visor, el caso de cada proyecto, la versión en inglés (`/en`) y la hoja de vida en PDF.

## 2. NotaScan (escritorio)

**Instalar.** El instalador de Windows está en [Releases](https://github.com/diarpicu2022-commits/notascan-escritorio/releases). Para Linux y macOS se descarga del flujo `notascan-multiplataforma` en la pestaña Actions del repo.

**Modo demo, sin cuenta.** Usa datos simulados de un colegio de ejemplo y deja pasar por los tres roles. Se corre desde el código con `npm install`, `npm run build:demo` y `npm run preview` dentro de `notascan-desktop` (los pasos completos están en el README del repo).

**Con cuenta.** Se entra con correo y contraseña. Cada cuenta abre un rol distinto del colegio de ejemplo.

| Rol | Correo | Contraseña | Qué revisar |
|---|---|---|---|
| Docente | `ana.lucia@losandes.edu.co` | Por mensaje privado | Revisión de notas leídas por la IA, planilla, asistencia y observador |
| Secretaría | `patricia@losandes.edu.co` | Por mensaje privado | Matrícula, importar estudiantes, periodos y usuarios |
| Rectoría | `hernando@losandes.edu.co` | Por mensaje privado | Rendimiento del colegio y de los docentes, y solicitudes |

**Para revisar también:** el cambio de idioma (español, inglés y portugués) y el modo oscuro en Ajustes, y la vista «Sin permiso» si se entra a una ruta de otro rol.

## 3. SISCAN (teléfono y reloj)

**Instalar.** Los APK están en [Releases](https://github.com/diarpicu2022-commits/siscan-movil/releases). En el teléfono se abre el APK y se acepta instalar desde esa fuente. El del reloj se instala desde el teléfono o con `adb`.

**Sin cuenta.** La app abre en solo lectura y muestra el secador en vivo, los lotes, la curva de secado, la predicción y las alertas. Así se puede revisar casi toda la interfaz.

**Con cuenta.** Hace falta para registrar pesajes y mandar órdenes al secador. Se entra con un usuario del WordPress del CISNA y una contraseña de aplicación.

| Campo | Valor |
|---|---|
| Sitio | `https://cisna.narino.gov.co` |
| Usuario | Por mensaje privado |
| Contraseña de aplicación | Por mensaje privado |
| Rol | Gestor del Secador (no es administrador) |

Las órdenes llegan al secador real. Le pido avisarme antes de mandar una orden, sobre todo la de la resistencia.

**Para revisar también:** los widgets de inicio, el tema «Según la hora», el idioma y la página «Tus datos».

## 4. Agenda + CampusWatch

**Instalar.** Los APK del teléfono y del reloj se los entrego aparte. Los dos tienen que ser de la misma versión para que se conecten.

**Cuenta.** No necesita. Todo se guarda en el teléfono, cifrado.

**Para revisar:**

1. Crear el semestre, dos lugares con el tiempo de traslado entre ellos y unas clases. Así se ve la hora de salida y los avisos «Prepárate» y «Sal ya».
2. Crear dos actividades que se crucen para ver el aviso de conflicto.
3. En el reloj sin teléfono emparejado, entrar a «Sin horario» y tocar **«Ver demostración»**. Carga un día de ejemplo y deja ver todas las pantallas de CampusWatch.

## 5. Ecos de la Tierra

**Instalar.** Godot 4.3 o superior (versión estándar). Se importa el `project.godot` del repo [ecos-de-la-tierra](https://github.com/diarpicu2022-commits/ecos-de-la-tierra) y se juega con F5.

**Cuenta.** No necesita.

**Para revisar:** la demo hasta el primer jefe. Se mueve con flechas o WASD, se habla con Enter, se golpea con Z, se esquiva con X y la habilidad ecológica va en C.

## Si algo no funciona

Si una cuenta no entra o algún enlace falla, me escribe y lo reviso.

Diego Armando Pinta Cuasquen
