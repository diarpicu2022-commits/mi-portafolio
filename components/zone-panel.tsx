"use client";

import { useEffect, useRef } from "react";

import {
  ContactLinks,
  ExperienceList,
  ProjectCard,
  SkillGroups,
  TestimonialCards,
} from "@/components/portfolio-blocks";
import { identity, projects, type Zone } from "@/data/portfolio";

/** `returnFocus: false` lets an anchor link move focus/scroll to its target instead of back to the map. */
type ZonePanelProps = { zone: Zone; onClose: (returnFocus?: boolean) => void };

export function ZonePanel({ zone, onClose }: ZonePanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const headingId = `zone-${zone.id}-title`;
  const zoneProjects = projects.filter((project) => zone.projectIds?.includes(project.id));

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
    const focusable = panelRef.current.querySelectorAll<HTMLElement>("a[href], button");
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
            Cerrar <span className="sr-only">panel</span>
            <kbd aria-hidden className="ml-1 text-xs opacity-70">Esc</kbd>
          </button>
        </div>

        <div className="flex flex-col gap-5">
          {zone.id === "lab" && (
            <>
              <p className="leading-7">{identity.pitch}</p>
              <SkillGroups />
            </>
          )}
          {zone.id === "academy" && <ExperienceList />}
          {zoneProjects.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2">
              {zoneProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
          {zone.id === "inn" && <TestimonialCards />}
          {zone.id === "plaza" && <ContactLinks />}
        </div>

        <a className="pixel-link mt-6 inline-block text-sm" href={`#${zone.section}`} onClick={() => onClose(false)}>
          Ver la sección completa sin mapa
        </a>
      </div>
    </div>
  );
}
