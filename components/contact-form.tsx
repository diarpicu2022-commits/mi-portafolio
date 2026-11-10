"use client";

import { useState } from "react";

import { getPortfolio, type Locale } from "@/data/portfolio";

type Errores = { name?: string; message?: string };

/**
 * Compone el mensaje en la aplicación de correo del visitante. No hay servidor ni servicio de terceros.
 * Los campos vacíos se avisan junto al campo, con el error enlazado por aria-describedby.
 */
export function ContactForm({ locale }: { locale: Locale }) {
  const { identity, t } = getPortfolio(locale);
  const [errores, setErrores] = useState<Errores>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const nuevos: Errores = {
      name: name ? undefined : t.form.errorName,
      message: message ? undefined : t.form.errorMessage,
    };
    setErrores(nuevos);
    if (nuevos.name || nuevos.message) {
      form.querySelector<HTMLElement>(nuevos.name ? "[name=name]" : "[name=message]")?.focus();
      return;
    }
    const query = new URLSearchParams({ subject: t.form.subject(name), body: message });
    window.location.href = `mailto:${identity.email}?${query.toString().replaceAll("+", "%20")}`;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-e16">
      <h3 className="voz-texto-fuerte text-21">{t.form.title}</h3>
      <div className="grid gap-e8">
        <label htmlFor="contacto-nombre" className="voz-texto-fuerte text-15">
          {t.form.name}
        </label>
        <input
          id="contacto-nombre"
          name="name"
          required
          autoComplete="name"
          aria-invalid={errores.name ? true : undefined}
          aria-describedby={errores.name ? "contacto-nombre-error" : undefined}
          className="campo-ed voz-texto"
        />
        {errores.name && (
          <p id="contacto-nombre-error" className="campo-ed-error text-15">
            {errores.name}
          </p>
        )}
      </div>
      <div className="grid gap-e8">
        <label htmlFor="contacto-mensaje" className="voz-texto-fuerte text-15">
          {t.form.message}
        </label>
        <textarea
          id="contacto-mensaje"
          name="message"
          required
          rows={5}
          aria-invalid={errores.message ? true : undefined}
          aria-describedby={errores.message ? "contacto-mensaje-error" : "contacto-ayuda"}
          className="campo-ed voz-texto"
        />
        {errores.message && (
          <p id="contacto-mensaje-error" className="campo-ed-error text-15">
            {errores.message}
          </p>
        )}
      </div>
      <p id="contacto-ayuda" className="text-13 text-gris">
        {t.form.hint} {t.form.noServer}
      </p>
      <button type="submit" className="boton-ed boton-ed-primario w-fit">
        {t.form.submit}
      </button>
    </form>
  );
}
