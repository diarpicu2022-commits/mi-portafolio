/**
 * Generates the Spanish and English CV PDFs in public/ from data/portfolio.ts.
 * Run with: npm run cv
 */
import path from "node:path";

import { Document, Link, Page, StyleSheet, Text, View, renderToFile } from "@react-pdf/renderer";

import { getPortfolio, locales, type Locale } from "../data/portfolio";

const headings: Record<
  Locale,
  {
    contact: string;
    education: string;
    skills: string;
    languages: string;
    profile: string;
    principles: string;
    experience: string;
  }
> = {
  es: {
    contact: "Contacto",
    education: "Formación",
    skills: "Habilidades",
    languages: "Idiomas",
    profile: "Perfil",
    principles: "Cómo trabajo",
    experience: "Experiencia",
  },
  en: {
    contact: "Contact",
    education: "Education",
    skills: "Skills",
    languages: "Languages",
    profile: "Profile",
    principles: "How I work",
    experience: "Experience",
  },
};

const colors = { ink: "#10263d", forest: "#164a3a", amber: "#b7791f", muted: "#4b5563", side: "#f4efe1" };

const styles = StyleSheet.create({
  page: { flexDirection: "row", fontSize: 8.6, fontFamily: "Helvetica", color: colors.ink, lineHeight: 1.4, paddingVertical: 30 },
  sideBackground: { position: "absolute", top: 0, bottom: 0, left: 0, width: 178, backgroundColor: colors.side },
  side: { width: 178, paddingHorizontal: 18 },
  main: { flex: 1, paddingHorizontal: 24 },
  name: { fontSize: 19, fontFamily: "Helvetica-Bold", color: colors.forest, lineHeight: 1.15 },
  tagline: { fontSize: 10.5, color: colors.amber, fontFamily: "Helvetica-Bold", marginTop: 4 },
  role: { fontSize: 9.5, marginTop: 3 },
  rule: { borderBottomWidth: 2, borderBottomColor: "#e6a23c", marginTop: 8, marginBottom: 10 },
  heading: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: colors.forest,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 5,
  },
  section: { marginBottom: 11 },
  link: { color: colors.forest, textDecoration: "none" },
  bold: { fontFamily: "Helvetica-Bold" },
  muted: { color: colors.muted },
  small: { fontSize: 7.8 },
  item: { marginBottom: 6 },
  skillTitle: { fontFamily: "Helvetica-Bold", fontSize: 8, marginTop: 3 },
  projectHead: { flexDirection: "row", justifyContent: "space-between" },
  bullet: { flexDirection: "row", marginBottom: 2 },
  bulletMark: { width: 8, color: colors.amber },
});

function Cv({ locale }: { locale: Locale }) {
  const { identity, skillGroups, education, experience, projects, languages, principles } = getPortfolio(locale);
  const repoOf = (id: string) => projects.find((project) => project.id === id)!.links[0].url;
  const h = headings[locale];

  return (
    <Document title={`CV · ${identity.name}`} author={identity.name} subject={identity.tagline}>
      <Page size="A4" style={styles.page}>
        {/* Painted on every page so the sidebar column stays continuous. */}
        <View fixed style={styles.sideBackground} />
        <View style={styles.side}>
          <View style={styles.section}>
            <Text style={styles.heading}>{h.contact}</Text>
            <Link src={`mailto:${identity.email}`} style={styles.link}>
              {identity.email}
            </Link>
            <Link src={identity.github} style={[styles.link, styles.small]}>
              {identity.github.replace("https://", "")}
            </Link>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>{h.education}</Text>
            {education.map((item) => (
              <View key={item.title} style={styles.item}>
                <Text style={styles.bold}>{item.title}</Text>
                <Text>{item.place}</Text>
                <Text style={[styles.muted, styles.small]}>{item.period}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>{h.skills}</Text>
            {skillGroups.map((group) => (
              <View key={group.title}>
                <Text style={styles.skillTitle}>{group.title}</Text>
                <Text style={styles.small}>{group.items.join(" · ")}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>{h.languages}</Text>
            {languages.map((item) => (
              <Text key={item.name} style={{ marginBottom: 2 }}>
                <Text style={styles.bold}>{item.name}: </Text>
                {item.level}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.main}>
          <Text style={styles.name}>{identity.name}</Text>
          <Text style={styles.tagline}>{identity.tagline}</Text>
          <Text style={styles.role}>{identity.role}</Text>
          <View style={styles.rule} />

          <View style={styles.section}>
            <Text style={styles.heading}>{h.profile}</Text>
            <Text>{identity.pitch}</Text>
            <Text style={{ marginTop: 3 }}>{identity.motto}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>{h.experience}</Text>
            {experience.map((item) => (
              <View key={item.id} style={styles.item} wrap={false}>
                <View style={styles.projectHead}>
                  <Text style={styles.bold}>
                    {item.position} · <Text style={{ color: colors.forest }}>{item.project}</Text>
                  </Text>
                  <Text style={[styles.muted, styles.small]}>{item.period}</Text>
                </View>
                <Text>{item.summary}</Text>
                {item.highlights.map((highlight) => (
                  <View key={highlight} style={styles.bullet}>
                    <Text style={styles.bulletMark}>•</Text>
                    <Text style={{ flex: 1 }}>{highlight}</Text>
                  </View>
                ))}
                <Text style={[styles.muted, styles.small]}>{item.technologies.join(" · ")}</Text>
                <Link src={repoOf(item.id)} style={[styles.link, styles.small]}>
                  {repoOf(item.id).replace("https://", "")}
                </Link>
              </View>
            ))}
          </View>

          <View style={styles.section} wrap={false}>
            <Text style={styles.heading}>{h.principles}</Text>
            {principles.map((item) => (
              <View key={item.title} style={styles.bullet}>
                <Text style={styles.bulletMark}>•</Text>
                <Text style={{ flex: 1 }}>
                  <Text style={styles.bold}>{item.title}. </Text>
                  {item.body}
                </Text>
              </View>
            ))}
          </View>

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
