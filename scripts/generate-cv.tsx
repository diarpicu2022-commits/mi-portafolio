/**
 * Generates the Spanish and English CV PDFs in public/ from data/portfolio.ts.
 * Run with: npm run cv
 */
import path from "node:path";

import { Document, Link, Page, StyleSheet, Text, View, renderToFile } from "@react-pdf/renderer";

import { getPortfolio, locales, type Locale } from "../data/portfolio";

const headings: Record<Locale, { profile: string; stack: string; experience: string; projects: string }> = {
  es: { profile: "Perfil", stack: "Stack técnico", experience: "Formación y experiencia", projects: "Proyectos seleccionados" },
  en: { profile: "Profile", stack: "Tech stack", experience: "Education and experience", projects: "Selected projects" },
};

const colors = { ink: "#10263d", forest: "#164a3a", amber: "#e6a23c", muted: "#4b5563" };

const styles = StyleSheet.create({
  page: { padding: 36, fontSize: 9.5, fontFamily: "Helvetica", color: colors.ink, lineHeight: 1.4 },
  header: { borderBottomWidth: 3, borderBottomColor: colors.amber, paddingBottom: 10, marginBottom: 12 },
  name: { fontSize: 20, fontFamily: "Helvetica-Bold", color: colors.forest, lineHeight: 1.2, marginBottom: 4 },
  role: { fontSize: 11, marginTop: 2 },
  contact: { flexDirection: "row", gap: 12, marginTop: 6, color: colors.muted },
  link: { color: colors.forest, textDecoration: "none" },
  section: { marginBottom: 10 },
  heading: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: colors.forest,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 4,
  },
  row: { flexDirection: "row", marginBottom: 2 },
  label: { width: 110, fontFamily: "Helvetica-Bold" },
  grow: { flex: 1 },
  item: { marginBottom: 5 },
  itemTitle: { fontFamily: "Helvetica-Bold" },
  muted: { color: colors.muted },
});

function Cv({ locale }: { locale: Locale }) {
  const { identity, skillGroups, experience, projects } = getPortfolio(locale);
  const h = headings[locale];
  return (
    <Document title={`CV · ${identity.name}`} author={identity.name}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{identity.name}</Text>
          <Text style={styles.role}>
            {identity.role} · {identity.university} · {identity.semester}
          </Text>
          <View style={styles.contact}>
            <Link src={`mailto:${identity.email}`} style={styles.link}>
              {identity.email}
            </Link>
            <Link src={identity.github} style={styles.link}>
              {identity.github.replace("https://", "")}
            </Link>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>{h.profile}</Text>
          <Text>{identity.pitch}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>{h.stack}</Text>
          {skillGroups.map((group) => (
            <View key={group.title} style={styles.row}>
              <Text style={styles.label}>{group.title}</Text>
              <Text style={styles.grow}>{group.items.join(" · ")}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>{h.experience}</Text>
          {experience.map((item) => (
            <View key={item.title} style={styles.item}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.muted}>{item.place}</Text>
              <Text>{item.detail}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>{h.projects}</Text>
          {projects.map((project) => (
            <View key={project.id} style={styles.item} wrap={false}>
              <Text>
                <Text style={styles.itemTitle}>{project.name}</Text>
                <Text style={styles.muted}> — {project.technologies.join(", ")}</Text>
              </Text>
              <Text>{project.description}</Text>
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
