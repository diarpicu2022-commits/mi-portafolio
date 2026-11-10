"use client";

import { getPortfolio, type Locale } from "@/data/portfolio";

/** Composes the message in the visitor's email app; no backend or third-party service needed. */
export function ContactForm({ locale }: { locale: Locale }) {
  const { identity, t } = getPortfolio(locale);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const query = new URLSearchParams({ subject: t.form.subject(name), body: message });
    window.location.href = `mailto:${identity.email}?${query.toString().replaceAll("+", "%20")}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-e16">
      <h3 className="voz-texto-fuerte text-21">{t.form.title}</h3>
      <label className="voz-texto-fuerte grid gap-e8 text-15">
        {t.form.name}
        <input name="name" required autoComplete="name" className="campo-ed voz-texto" />
      </label>
      <label className="voz-texto-fuerte grid gap-e8 text-15">
        {t.form.message}
        <textarea name="message" required rows={4} className="campo-ed voz-texto" />
      </label>
      <p className="text-13 text-gris">{t.form.hint}</p>
      <button type="submit" className="boton-ed boton-ed-primario w-fit">
        {t.form.submit}
      </button>
    </form>
  );
}
