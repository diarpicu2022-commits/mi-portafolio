/**
 * Genera los CV en español e inglés en public/ desde data/portfolio.ts y data/projects.ts.
 * Uso: npm run cv
 *
 * Pensado para quien contrata y para filtros automáticos: una sola columna, orden de lectura lineal,
 * texto real seleccionable, contacto arriba y enlaces vivos. Mismo sistema que el sitio:
 * Archivo (texto y titular condensado), IBM Plex Mono (datos), papel, tinta y un solo acento rojo.
 * Las fuentes son las instancias estáticas de assets/fuentes (scripts/fuentes-estaticas.py).
 */
import path from "node:path";

import { Document, Font, Link, Page, StyleSheet, Text, View, renderToFile } from "@react-pdf/renderer";

import { PORTFOLIO_URL, getPortfolio, locales, projectPath, type Locale } from "../data/portfolio";

const fuente = (archivo: string) => path.join(process.cwd(), "assets", "fuentes", archivo);
Font.register({
  family: "Archivo",
  fonts: [
    { src: fuente("Archivo-Regular.ttf"), fontWeight: 400 },
    { src: fuente("Archivo-SemiBold.ttf"), fontWeight: 600 },
  ],
});
Font.register({ family: "Titular", src: fuente("Archivo-Condensada-Black.ttf"), fontWeight: 900 });
Font.register({
  family: "Plex",
  fonts: [
    { src: fuente("IBMPlexMono-Regular.ttf"), fontWeight: 400 },
    { src: fuente("IBMPlexMono-Medium.ttf"), fontWeight: 500 },
  ],
});
// Sin guiones automáticos: un filtro automático lee mejor las palabras enteras.
Font.registerHyphenationCallback((palabra) => [palabra]);

const titulos: Record<Locale, Record<"perfil" | "experiencia" | "formacion" | "habilidades" | "idiomas", string>> = {
  es: { perfil: "Perfil", experiencia: "Experiencia", formacion: "Formación", habilidades: "Habilidades", idiomas: "Idiomas" },
  en: { perfil: "Profile", experiencia: "Experience", formacion: "Education", habilidades: "Skills", idiomas: "Languages" },
};
const etiquetas: Record<Locale, { caso: string; codigo: string; portafolio: string }> = {
  es: { caso: "Caso de estudio", codigo: "Código", portafolio: "Portafolio" },
  en: { caso: "Case study", codigo: "Code", portafolio: "Portfolio" },
};

const C = { papel: "#F1ECE2", tinta: "#121211", gris: "#5A554C", rojo: "#D92B1F" };

const s = StyleSheet.create({
  pagina: { backgroundColor: C.papel, color: C.tinta, fontFamily: "Archivo", fontSize: 9.5, lineHeight: 1.4, paddingVertical: 40, paddingHorizontal: 44 },
  rotulo: { fontFamily: "Plex", fontSize: 8.5, color: C.gris },
  nombre: { fontFamily: "Titular", fontWeight: 900, fontSize: 34, lineHeight: 0.9, textTransform: "uppercase", marginTop: 6 },
  frase: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  bloque: { width: 9, height: 9, backgroundColor: C.rojo, marginRight: 6 },
  fraseTexto: { fontWeight: 600, fontSize: 11 },
  contacto: { flexDirection: "row", flexWrap: "wrap", marginTop: 8, fontFamily: "Plex", fontSize: 8.5 },
  enlace: { color: C.tinta, textDecoration: "underline", marginRight: 14 },
  seccion: { marginTop: 14 },
  cabeza: { flexDirection: "row", alignItems: "center", borderTopWidth: 1, borderTopColor: C.tinta, paddingTop: 5, marginBottom: 6 },
  cuadrado: { width: 5, height: 5, backgroundColor: C.tinta, marginRight: 6 },
  cabezaTexto: { fontFamily: "Plex", fontWeight: 500, fontSize: 8.5, textTransform: "uppercase" },
  puesto: { marginBottom: 8 },
  puestoCabeza: { flexDirection: "row", justifyContent: "space-between" },
  puestoTitulo: { fontWeight: 600, fontSize: 10, flex: 1, paddingRight: 8 },
  dato: { fontFamily: "Plex", fontSize: 8, color: C.gris },
  tecnologias: { fontFamily: "Plex", fontSize: 8, color: C.gris, marginTop: 1 },
  vinculos: { flexDirection: "row", fontFamily: "Plex", fontSize: 8, marginTop: 1 },
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

function Cv({ locale }: { locale: Locale }) {
  const { identity, skillGroups, education, experience, projects, languages } = getPortfolio(locale);
  const t = titulos[locale];
  const e = etiquetas[locale];
  const porId = new Map(projects.map((p) => [p.id, p]));
  const portafolio = `${PORTFOLIO_URL}${locale === "es" ? "" : "/en"}`;

  return (
    <Document title={`CV · ${identity.name}`} author={identity.name} subject={identity.role} language={locale}>
      <Page size="A4" style={s.pagina}>
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
          <Link src={portafolio} style={s.enlace}>
            {portafolio.replace("https://", "")}
          </Link>
        </View>

        <View style={s.seccion}>
          <Cabeza>{t.perfil}</Cabeza>
          <Text>{identity.pitch}</Text>
        </View>

        <View style={s.seccion}>
          <Cabeza>{t.experiencia}</Cabeza>
          {experience.map((item) => {
            const p = porId.get(item.id)!;
            return (
              <View key={item.id} style={s.puesto} wrap={false}>
                <View style={s.puestoCabeza}>
                  <Text style={s.puestoTitulo}>
                    {item.position}, {item.project}
                  </Text>
                  <Text style={s.dato}>{item.period}</Text>
                </View>
                <Text>{item.summary}</Text>
                <Text>{p.outcome[0]}</Text>
                <Text style={s.tecnologias}>{item.technologies.join(", ")}</Text>
                <View style={s.vinculos}>
                  <Link src={`${PORTFOLIO_URL}${projectPath(locale, item.id)}`} style={s.enlace}>
                    {e.caso}
                  </Link>
                  <Link src={p.links[0].url} style={s.enlace}>
                    {e.codigo}: {p.links[0].url.replace("https://", "")}
                  </Link>
                </View>
              </View>
            );
          })}
        </View>

        <View style={s.seccion} wrap={false}>
          <Cabeza>{t.formacion}</Cabeza>
          {education.map((item) => (
            <View key={item.title} style={s.puesto}>
              <View style={s.puestoCabeza}>
                <Text style={s.puestoTitulo}>{item.title}</Text>
                <Text style={s.dato}>{item.period}</Text>
              </View>
              <Text>{item.place}</Text>
              <Text style={{ color: C.gris }}>{item.detail}</Text>
            </View>
          ))}
        </View>

        <View style={s.seccion} wrap={false}>
          <Cabeza>{t.habilidades}</Cabeza>
          {skillGroups.map((g) => (
            <View key={g.title} style={s.fila}>
              <Text style={s.filaRotulo}>{g.title}</Text>
              <Text style={s.filaValor}>{g.items.join(", ")}</Text>
            </View>
          ))}
        </View>

        <View style={s.seccion} wrap={false}>
          <Cabeza>{t.idiomas}</Cabeza>
          {languages.map((l) => (
            <View key={l.name} style={s.fila}>
              <Text style={s.filaRotulo}>{l.name}</Text>
              <Text style={s.filaValor}>{l.level}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

for (const locale of locales) {
  const output = path.join(process.cwd(), "public", getPortfolio(locale).cvPath);
  await renderToFile(<Cv locale={locale} />, output);
  console.log(`CV (${locale}) → ${output}`);
}
