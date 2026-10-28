"use client";

import { useState } from "react";

/** Reveals the 12-column grid the layout is built on. */
export function GridToggle({ label }: { label: string }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        type="button"
        className="nav-link inline-block py-1 text-sm"
        aria-pressed={visible}
        onClick={() => setVisible(!visible)}
      >
        {label}
      </button>
      {visible && (
        <div className="pointer-events-none fixed inset-0 z-[70]" aria-hidden>
          <div className="mx-auto grid h-full max-w-5xl grid-cols-4 gap-4 px-4 sm:grid-cols-12">
            {Array.from({ length: 12 }, (_, index) => (
              <div key={index} className={`grid-column ${index >= 4 ? "hidden sm:block" : ""}`} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
