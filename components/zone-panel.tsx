"use client";

import { useEffect, useRef, useState } from "react";

import { Sprite, playerPixels } from "@/components/pixel-sprites";
import {
  ContactLinks,
  ExperienceList,
  ProjectCard,
  SkillGroups,
  TestimonialCards,
} from "@/components/portfolio-blocks";
import { getPortfolio, type Locale, type Zone } from "@/data/portfolio";

/** `returnFocus: false` lets an anchor link move focus/scroll to its target instead of back to the map. */
type ZonePanelProps = { locale: Locale; zone: Zone; onClose: (returnFocus?: boolean) => void };

const TYPE_MS = 28;

/** Reveals `text` one character at a time, or all at once when the user prefers reduced motion. */
function useTypewriter(text: string) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCount(reduced ? text.length : 0);
    if (reduced) return;
    const timer = setInterval(() => {
      setCount((value) => {
        if (value >= text.length) clearInterval(timer);
        return Math.min(value + 1, text.length);
      });
    }, TYPE_MS);
    return () => clearInterval(timer);
  }, [text]);

  return { shown: text.slice(0, count), done: count >= text.length, finish: () => setCount(text.length) };
}

export function ZonePanel({ locale, zone, onClose }: ZonePanelProps) {
  const { identity, projects, t } = getPortfolio(locale);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const headingId = `zone-${zone.id}-title`;
  const zoneProjects = projects.filter((project) => zone.projectIds?.includes(project.id));
  const dialogue = useTypewriter(zone.dialogue);

  useEffect(() => {
    closeRef.current?.focus();
  }, [zone.id]);

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Escape") {
      event.stopPropagation();
      onClose();
      return;
    }
    if (event.key !== "Tab" || !panelRef.current) return;

    // Keep keyboard focus inside the modal.
    const focusable = panelRef.current.querySelectorAll<HTMLElement>("a[href], button, input, textarea");
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/70 p-0 sm:items-center sm:p-6"
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        onKeyDown={handleKeyDown}
        className="pixel-frame max-h-[88vh] w-full max-w-3xl overflow-y-auto bg-paper p-5 text-ink sm:p-7"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2 id={headingId} className="font-pixel text-sm leading-relaxed text-forest sm:text-base">
              {zone.name}
            </h2>
            <p className="mt-2 text-sm">{zone.summary}</p>
          </div>
          <button ref={closeRef} type="button" className="pixel-button shrink-0" onClick={() => onClose()}>
            {t.panel.close} <span className="sr-only">{t.panel.closeHidden}</span>
            <kbd aria-hidden className="ml-1 text-xs opacity-70">Esc</kbd>
          </button>
        </div>

        <div className="dialogue-box mb-5 flex items-center gap-3 p-3">
          <Sprite pixels={playerPixels("down", 0)} className="size-12 shrink-0" />
          <p className="font-pixel min-h-10 flex-1 text-[0.6rem] leading-loose">
            <span aria-hidden>{dialogue.shown}</span>
            <span className="sr-only">{zone.dialogue}</span>
            {!dialogue.done && (
              <span aria-hidden className="caret">
                ▌
              </span>
            )}
          </p>
          {!dialogue.done && (
            <button type="button" className="pixel-button shrink-0 px-2 text-xs" onClick={dialogue.finish}>
              <span aria-hidden>▶▶</span>
              <span className="sr-only">{t.panel.skipDialogue}</span>
            </button>
          )}
        </div>

        <div className="flex flex-col gap-5">
          {zone.id === "lab" && (
            <>
              <p className="leading-7">{identity.pitch}</p>
              <SkillGroups locale={locale} />
            </>
          )}
          {zone.id === "academy" && <ExperienceList locale={locale} />}
          {zoneProjects.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2">
              {zoneProjects.map((project) => (
                <ProjectCard key={project.id} locale={locale} project={project} />
              ))}
            </div>
          )}
          {zone.id === "inn" && <TestimonialCards locale={locale} />}
          {zone.id === "plaza" && <ContactLinks locale={locale} />}
        </div>

        <a className="pixel-link mt-6 inline-block text-sm" href={`#${zone.section}`} onClick={() => onClose(false)}>
          {t.panel.fullSection}
        </a>
      </div>
    </div>
  );
}
