"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scroll reveals for everyone, plus smooth scroll (Lenis) and magnetic buttons (GSAP) on precise pointers.
 * Nothing runs when the visitor prefers reduced motion, and content is visible without JavaScript:
 * only elements still below the fold are hidden, right before they are observed.
 */
export function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cleanups: (() => void)[] = [];
    let cancelled = false;

    // Reveals: IntersectionObserver + CSS transitions, so phones never pay for an animation library.
    const reveal = (element: Element) => {
      element.classList.add("is-revealed");
      observer.unobserve(element);
    };
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && reveal(entry.target)),
      { rootMargin: "0px 0px -10% 0px" },
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.classList.add("reveal-pending");
      observer.observe(element);
      // Opacity only (never visibility), so links stay focusable; focusing one reveals it at once.
      element.addEventListener("focusin", () => reveal(element), { once: true });
    });
    cleanups.push(() => observer.disconnect());

    // Smooth scroll and magnetic buttons only where they add something: mouse and trackpad.
    if (window.matchMedia("(pointer: fine)").matches) {
      const idle = window.requestIdleCallback ?? ((callback: () => void) => window.setTimeout(callback, 200));
      const cancelIdle = window.cancelIdleCallback ?? window.clearTimeout;
      const handle = idle(async () => {
        const [{ gsap }, { default: Lenis }] = await Promise.all([import("gsap"), import("lenis")]);
        if (cancelled) return;

        // Lenis interpolates the native scroll position; GSAP's ticker drives it so both read the same frame time.
        const lenis = new Lenis({ anchors: { offset: -80 }, autoRaf: false });
        const tick = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);
        cleanups.push(() => {
          gsap.ticker.remove(tick);
          lenis.destroy();
        });

        // quickTo reuses one tween per axis instead of creating one per pointer event.
        document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((element) => {
          const xTo = gsap.quickTo(element, "x", { duration: 0.4, ease: "power3.out" });
          const yTo = gsap.quickTo(element, "y", { duration: 0.4, ease: "power3.out" });
          const onMove = (event: PointerEvent) => {
            const box = element.getBoundingClientRect();
            xTo((event.clientX - (box.left + box.width / 2)) * 0.2);
            yTo((event.clientY - (box.top + box.height / 2)) * 0.3);
          };
          const onLeave = () => {
            xTo(0);
            yTo(0);
          };
          element.addEventListener("pointermove", onMove);
          element.addEventListener("pointerleave", onLeave);
          cleanups.push(() => {
            element.removeEventListener("pointermove", onMove);
            element.removeEventListener("pointerleave", onLeave);
            gsap.set(element, { clearProps: "transform" });
          });
        });
      });
      cleanups.push(() => cancelIdle(handle));
    }

    return () => {
      cancelled = true;
      cleanups.forEach((cleanup) => cleanup());
      document.querySelectorAll(".reveal-pending").forEach((element) => {
        element.classList.remove("reveal-pending", "is-revealed");
      });
    };
  }, [pathname]);

  return null;
}
