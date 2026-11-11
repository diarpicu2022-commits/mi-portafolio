/**
 * Genera los CV en español e inglés en public/ desde data/portfolio.ts y data/projects.ts.
 * Uso: npm run cv
 *
 * Pensado para quien contrata y para filtros automáticos: una sola columna, orden de lectura lineal,
 * texto real seleccionable, contacto arriba y enlaces vivos. Mismo sistema que el sitio:
 * Archivo (texto y titular condensado), IBM Plex Mono (datos), papel, tinta y un solo acento rojo.
 * Las fuentes son las instancias estáticas de assets/fuentes (scripts/fuentes-estaticas.py).
 */
import { readFileSync } from "node:fs";
import path from "node:path";

import {
  Document,
  Font,
  Image,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
  renderToFile,
} from "@react-pdf/renderer";

import {
  LINKEDIN_PROFILE,
  PORTFOLIO_URL,
  getPortfolio,
  locales,
  projectPath,
  type Locale,
} from "../data/portfolio";

const fuente = (archivo: string) =>
  path.join(process.cwd(), "assets", "fuentes", archivo);
Font.register({
  family: "Archivo",
  fonts: [
    { src: fuente("Archivo-Regular.ttf"), fontWeight: 400 },
    { src: fuente("Archivo-SemiBold.ttf"), fontWeight: 600 },
  ],
});
Font.register({
  family: "Titular",
  src: fuente("Archivo-Condensada-Black.ttf"),
  fontWeight: 900,
});
Font.register({
  family: "Plex",
  fonts: [
    { src: fuente("IBMPlexMono-Regular.ttf"), fontWeight: 400 },
    { src: fuente("IBMPlexMono-Medium.ttf"), fontWeight: 500 },
  ],
});
// Sin guiones automáticos: un filtro automático lee mejor las palabras enteras.
Font.registerHyphenationCallback((palabra) => [palabra]);

const titulos: Record<
  Locale,
  Record<
    "perfil" | "experiencia" | "formacion" | "habilidades" | "idiomas",
    string
  >
> = {
  es: {
    perfil: "Perfil",
    experiencia: "Experiencia",
    formacion: "Formación",
    habilidades: "Habilidades",
    idiomas: "Idiomas",
  },
  en: {
    perfil: "Profile",
    experiencia: "Experience",
    formacion: "Education",
    habilidades: "Skills",
    idiomas: "Languages",
  },
};
const etiquetas: Record<
  Locale,
  { caso: string; codigo: string; portafolio: string }
> = {
  es: { caso: "Caso de estudio", codigo: "Código", portafolio: "Portafolio" },
  en: { caso: "Case study", codigo: "Code", portafolio: "Portfolio" },
};

const C = {
  papel: "#F1ECE2",
  tinta: "#121211",
  gris: "#5A554C",
  rojo: "#D92B1F",
};

/**
 * Retícula del CV (anexo 2026-11-11-cv-portada, 6.2). A4 de 595 × 842 pt, márgenes de 36 pt,
 * columna angosta de 170 pt, canal de 24 pt y columna ancha de 329 pt.
 */
const G = { margen: 36, angosta: 170, canal: 24, ancha: 329 };
/**
 * Cuerpo del nombre medido con la fuente real: «PINTA CUASQUEN» avanza 6.363 em en Archivo condensada Black.
 * 329 / 6.363 = 51.7 pt, se redondea a 50 para que quepa con holgura.
 */
const NOMBRE_PT = 50;
/** Retrato recortado de la portada del sitio (409 × 843 px), ya en blanco y negro. */
const RETRATO = {
  src: {
    data: readFileSync(path.join(process.cwd(), "assets", "cv", "retrato.png")),
    format: "png" as const,
  },
  alto: 196,
  proporcion: 409 / 843,
};
const BLOQUE = { ancho: 146, alto: 132 };

const s = StyleSheet.create({
  pagina: {
    backgroundColor: C.papel,
    color: C.tinta,
    fontFamily: "Archivo",
    fontSize: 8.8,
    lineHeight: 1.35,
    padding: G.margen,
  },
  cabecera: {
    flexDirection: "row",
    height: RETRATO.alto,
    borderBottomWidth: 1,
    borderBottomColor: C.tinta,
  },
  figura: { width: G.angosta, height: RETRATO.alto, position: "relative" },
  // Rótulo vertical al borde izquierdo, de abajo hacia arriba, como «RESUME» en la referencia.
  vertical: {
    position: "absolute",
    left: 0,
    top: RETRATO.alto,
    width: RETRATO.alto,
    transformOrigin: "left top",
    transform: "rotate(-90deg)",
    fontFamily: "Plex",
    fontWeight: 500,
    fontSize: 8.5,
    letterSpacing: 1,
    color: C.gris,
    textAlign: "center",
  },
  bloqueRojo: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: BLOQUE.ancho,
    height: BLOQUE.alto,
    backgroundColor: C.rojo,
  },
  retrato: {
    position: "absolute",
    bottom: 0,
    height: RETRATO.alto,
    width: RETRATO.alto * RETRATO.proporcion,
    right: (BLOQUE.ancho - RETRATO.alto * RETRATO.proporcion) / 2,
  },
  identidad: {
    width: G.ancha,
    marginLeft: G.canal,
    justifyContent: "flex-end",
    paddingBottom: 12,
  },
  rotulo: { fontFamily: "Plex", fontSize: 8.5, color: C.gris },
  nombre: {
    fontFamily: "Titular",
    fontWeight: 900,
    fontSize: NOMBRE_PT,
    lineHeight: 0.86,
    textTransform: "uppercase",
    marginTop: 6,
  },
  frase: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  bloque: { width: 9, height: 9, backgroundColor: C.rojo, marginRight: 6 },
  fraseTexto: { fontWeight: 600, fontSize: 11 },
  contacto: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    fontFamily: "Plex",
    fontSize: 8.5,
  },
  enlace: { color: C.tinta, textDecoration: "underline", marginRight: 14 },
  seccion: { marginTop: 12 },
  cabeza: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: C.tinta,
    paddingTop: 5,
    marginBottom: 6,
  },
  cuadrado: { width: 5, height: 5, backgroundColor: C.tinta, marginRight: 6 },
  cabezaTexto: {
    fontFamily: "Plex",
    fontWeight: 500,
    fontSize: 8.5,
    textTransform: "uppercase",
  },
  columnas: { flexDirection: "row", marginTop: 4 },
  angosta: { width: G.angosta },
  ancha: { width: G.ancha, marginLeft: G.canal },
  cifraFila: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 5,
  },
  cifra: {
    fontFamily: "Plex",
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 1,
    width: 24,
    paddingTop: 1,
  },
  cifraTexto: { flex: 1 },
  cifraGrupo: { fontWeight: 600 },
  // Línea de tiempo horizontal: un filete fino de lado a lado y cada estudio como un hito en orden.
  linea: {
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderTopColor: C.gris,
    paddingTop: 6,
  },
  hito: { flex: 1, paddingRight: 10 },
  titularPagina: {
    fontFamily: "Titular",
    fontWeight: 900,
    fontSize: 40,
    lineHeight: 0.86,
    textTransform: "uppercase",
    marginBottom: 14,
  },
  proyecto: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: C.tinta,
    paddingTop: 4,
    marginBottom: 5,
  },
  indice: { fontFamily: "Plex", fontWeight: 500, fontSize: 9, width: 28 },
  proyectoCuerpo: { flex: 1 },
  logro: { marginBottom: 1.5 },
  pie: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 1,
  },
  pieTecnologias: { flex: 1, paddingRight: 12 },
  cargo: { fontWeight: 600, fontSize: 9.5 },
  abajo: { flexDirection: "row", marginTop: 6 },
  completa: { flex: 1 },
  mitadDerecha: { flex: 1, marginLeft: G.canal },
  puesto: { marginBottom: 8 },
  puestoCabeza: { flexDirection: "row", justifyContent: "space-between" },
  puestoTitulo: { fontWeight: 600, fontSize: 10, flex: 1, paddingRight: 8 },
  dato: { fontFamily: "Plex", fontSize: 8, color: C.gris },
  tecnologias: { fontFamily: "Plex", fontSize: 8, color: C.gris, marginTop: 1 },
  vinculos: {
    flexDirection: "row",
    fontFamily: "Plex",
    fontSize: 8,
    marginTop: 1,
  },
  fila: { flexDirection: "row", marginBottom: 2 },
  filaRotulo: { fontWeight: 600, width: 140, paddingRight: 8 },
  filaValor: { flex: 1 },
});

function Cabeza({ children }: { children: string }) {
  // minPresenceAhead evita que un título de sección quede solo al final de una página.
  return (
    <View style={s.cabeza} minPresenceAhead={60}>
      <View style={s.cuadrado} />
      <Text style={s.cabezaTexto}>{children}</Text>
    </View>
  );
}

const ALIAS: Record<string, string> = {
  "Java 17": "Java",
  "Tailwind CSS": "Tailwind",
  "C/C++": "C++",
  Godot: "Godot 4",
  "PostgreSQL (Supabase)": "Supabase",
};
const normal = (t: string) => ALIAS[t] ?? t;

const textos: Record<
  Locale,
  { proyectos: string; enProyectos: (n: number) => string; pagina: string }
> = {
  es: {
    proyectos: "Proyectos",
    enProyectos: (n) => (n === 1 ? "proyecto" : "proyectos"),
    pagina: "Página",
  },
  en: {
    proyectos: "Projects",
    enProyectos: (n) => (n === 1 ? "project" : "projects"),
    pagina: "Page",
  },
};

function Cv({ locale }: { locale: Locale }) {
  const {
    identity,
    skillGroups,
    education,
    experience,
    projects,
    languages,
    pasantia,
    medios,
    monitoria,
  } = getPortfolio(locale);
  const t = titulos[locale];
  const e = etiquetas[locale];
  const x = textos[locale];
  const porId = new Map(projects.map((p) => [p.id, p]));
  const portafolio = `${PORTFOLIO_URL}${locale === "es" ? "" : "/en"}`;
  // Misma cuenta que la sección de habilidades del sitio: proyectos que usan alguna tecnología del grupo.
  const enProyectos = (items: string[]) =>
    projects.filter((p) =>
      p.technologies.some((tech) =>
        items.some((i) => normal(i) === tech || i === tech),
      ),
    ).length;

  return (
    <Document
      title={`CV · ${identity.name}`}
      author={identity.name}
      subject={identity.role}
      language={locale}
    >
      <Page size="A4" style={s.pagina}>
        <View style={s.cabecera}>
          <View style={s.figura}>
            <Text style={s.vertical}>CV · {new Date().getFullYear()}</Text>
            <View style={s.bloqueRojo} />
            <Image src={RETRATO.src} style={s.retrato} />
          </View>
          <View style={s.identidad}>
            <Text style={s.rotulo}>{identity.role}</Text>
            <Text style={s.nombre}>{identity.name}</Text>
            <View style={s.frase}>
              <View style={s.bloque} />
              <Text style={s.fraseTexto}>{identity.tagline}</Text>
            </View>
            <View style={s.contacto}>
              <Link src={`mailto:${identity.email}`} style={s.enlace}>
                {identity.email}
              </Link>
              <Link src={identity.github} style={s.enlace}>
                {identity.github.replace("https://", "")}
              </Link>
              <Link src={LINKEDIN_PROFILE} style={s.enlace}>
                LinkedIn
              </Link>
              <Link src={portafolio} style={s.enlace}>
                {portafolio.replace("https://", "")}
              </Link>
            </View>
          </View>
        </View>

        <View style={s.columnas}>
          <View style={s.angosta}>
            <View style={s.seccion}>
              <Cabeza>{t.perfil}</Cabeza>
              <Text>{identity.pitch}</Text>
            </View>

            <View style={s.seccion}>
              <Cabeza>{t.habilidades}</Cabeza>
              {skillGroups.map((g) => {
                const n = enProyectos(g.items);
                return (
                  <View key={g.title} style={s.cifraFila} wrap={false}>
                    <Text style={s.cifra}>
                      {n > 0 ? String(n).padStart(2, "0") : "·"}
                    </Text>
                    <Text style={s.cifraTexto}>
                      <Text style={s.cifraGrupo}>{g.title}</Text>
                      {n > 0 ? ` · ${n} ${x.enProyectos(n)}` : ""}
                      {"\n"}
                      <Text style={s.dato}>{g.items.join(", ")}</Text>
                    </Text>
                  </View>
                );
              })}
            </View>
            <View style={s.seccion} wrap={false}>
              <Cabeza>{t.idiomas}</Cabeza>
              {languages.map((l) => (
                <Text key={l.name}>
                  <Text style={s.cifraGrupo}>{l.name}</Text> · {l.level}
                </Text>
              ))}
            </View>
          </View>

          <View style={s.ancha}>
            <View style={s.seccion}>
              <Cabeza>{t.experiencia}</Cabeza>
              {pasantia.etapas.map((etapa) => (
                <View key={etapa.nombre} style={s.puesto} wrap={false}>
                  <Text style={s.dato}>{etapa.periodo}</Text>
                  <Text style={s.cargo}>
                    {pasantia.cargo}, {etapa.nombre}, {pasantia.lugar}
                  </Text>
                  {etapa.logros.map((l) => (
                    <Text key={l} style={s.logro}>
                      {l}
                    </Text>
                  ))}
                </View>
              ))}
              {[medios, monitoria].map((m) => (
                <View key={m.lugar} style={s.puesto} wrap={false}>
                  <Text style={s.dato}>{m.periodo}</Text>
                  <Text style={s.cargo}>
                    {m.cargo}, {m.lugar}
                  </Text>
                  {m.logros.map((l) => (
                    <Text key={l} style={s.logro}>
                      {l}
                    </Text>
                  ))}
                  <Text style={s.tecnologias}>{m.tecnologias.join(", ")}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={s.pagina}>
        <Text style={s.titularPagina}>{x.proyectos}</Text>
        {experience.map((item, i) => {
          const p = porId.get(item.id)!;
          return (
            <View key={item.id} style={s.proyecto} wrap={false}>
              <Text style={s.indice}>{String(i + 1).padStart(2, "0")}</Text>
              <View style={s.proyectoCuerpo}>
                <View style={s.puestoCabeza}>
                  <Text style={s.puestoTitulo}>
                    {item.project} · {item.position}
                  </Text>
                  <Text style={s.dato}>{item.period}</Text>
                </View>
                <Text>{item.summary}</Text>
                <View style={s.pie}>
                  <Text style={[s.tecnologias, s.pieTecnologias]}>
                    {item.technologies.join(", ")}
                  </Text>
                  <View style={s.vinculos}>
                    <Link
                      src={`${PORTFOLIO_URL}${projectPath(locale, item.id)}`}
                      style={s.enlace}
                    >
                      {e.caso}
                    </Link>
                    <Link src={p.links[0].url} style={s.enlace}>
                      {e.codigo}
                    </Link>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
        <View style={s.abajo} wrap={false}>
          <View style={s.completa}>
            <View style={s.seccion}>
              <Cabeza>{t.formacion}</Cabeza>
              <View style={s.linea}>
                {education.map((item) => (
                  <View key={item.title} style={s.hito} wrap={false}>
                    <Text style={s.dato}>{item.period}</Text>
                    <Text style={s.cifraGrupo}>{item.title}</Text>
                    <Text>{item.place}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

for (const locale of locales) {
  const output = path.join(
    process.cwd(),
    "public",
    getPortfolio(locale).cvPath,
  );
  await renderToFile(<Cv locale={locale} />, output);
  console.log(`CV (${locale}) → ${output}`);
}
