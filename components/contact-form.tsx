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
    <form onSubmit={handleSubmit} className="pixel-card mt-8 grid max-w-xl gap-4 p-5">
      <h3 className="font-pixel text-[0.7rem] text-forest">{t.form.title}</h3>
      <label className="grid gap-1 text-sm font-semibold">
        {t.form.name}
        <input name="name" required autoComplete="name" className="pixel-input" />
      </label>
      <label className="grid gap-1 text-sm font-semibold">
        {t.form.message}
        <textarea name="message" required rows={4} className="pixel-input" />
      </label>
      <p className="text-xs text-ink/70">{t.form.hint}</p>
      <button type="submit" className="pixel-button pixel-button-amber w-fit">
        {t.form.submit}
      </button>
    </form>
  );
}
