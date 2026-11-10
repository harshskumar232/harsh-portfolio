"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { experience } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Same light treatment and rise-in as the About section, moved up front.
export default function Experience() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(".rise", { opacity: 0 });
        ScrollTrigger.batch(".rise", {
          start: "top 88%",
          once: true,
          onEnter: (els) =>
            gsap.fromTo(els, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 1, ease: "expo.out", stagger: 0.08 }),
        });
      });
    },
    { scope: root }
  );

  return (
    <section id="experience" ref={root} className="bg-white text-ink" aria-label="Experience">
      <div className="mx-auto max-w-[1024px] px-4 py-28 sm:px-6 sm:py-36">
        <h2 className="rise text-[clamp(2.5rem,5.6vw,4.75rem)] leading-[1.0] font-semibold tracking-[-0.04em]">
          Experience.
        </h2>

        {experience.map((e) => (
          <article key={e.role + e.org} className="rise mt-14 border-t border-ink/10 pt-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <p className="text-[clamp(1.5rem,2.6vw,2rem)] font-semibold tracking-tight">{e.role}</p>
              <p className="text-sm text-ink/50">{e.period}</p>
            </div>
            <p className="mt-1 text-lg text-ink/70">
              {e.org} · {e.meta}
            </p>
            <ul className="mt-6 max-w-[62ch] space-y-3">
              {e.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-[17px] leading-snug text-ink/75">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-ink/40" />
                  {pt}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
