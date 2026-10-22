"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { education, experience, languages, skills } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function About() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Skill rows drift in opposite directions, tied to scroll.
        gsap.utils.toArray<HTMLElement>(".skill-row").forEach((row, i) => {
          const dir = i % 2 === 0 ? -1 : 1;
          gsap.fromTo(
            row,
            { xPercent: dir === -1 ? 0 : -18 },
            {
              xPercent: dir === -1 ? -18 : 0,
              ease: "none",
              scrollTrigger: { trigger: ".skills-band", start: "top bottom", end: "bottom top", scrub: 0.6 },
            }
          );
        });

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
    <section id="about" ref={root} className="overflow-hidden bg-white text-ink" aria-label="About">
      <div className="mx-auto max-w-[1024px] px-4 pt-28 pb-16 sm:px-6 sm:pt-36">
        <h2 className="rise max-w-[18ch] text-[clamp(2.5rem,5.6vw,4.75rem)] leading-[1.0] font-semibold tracking-[-0.04em]">
          Computer science first. Data science now. Finance next.
        </h2>
        <p className="rise mt-8 max-w-[52ch] text-[clamp(1.1rem,1.6vw,1.3rem)] leading-relaxed text-ink/70">
          I came to Germany with a Computer Science degree and ten months of production data engineering behind
          me. Today I study Data Science at FAU and build projects for the job I want next: data analytics in
          finance and controlling, where clean numbers decide where money goes.
        </p>

        <div className="mt-20 grid gap-16 md:grid-cols-[1.4fr_1fr] md:gap-20">
          <div>
            <h3 className="rise text-sm font-medium text-ink/45">Experience</h3>
            {experience.map((e) => (
              <article key={e.role} className="rise mt-5 border-t border-ink/10 pt-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <p className="text-2xl font-semibold tracking-tight">{e.role}</p>
                  <p className="text-sm text-ink/50">{e.period}</p>
                </div>
                <p className="mt-1 text-lg text-ink/70">
                  {e.org}
                  {e.orgLink && (
                    <>
                      {" · "}
                      <a href={e.orgLink} target="_blank" rel="noopener noreferrer" className="text-[#0066cc] hover:underline">
                        Intaskr
                      </a>
                    </>
                  )}
                </p>
                <p className="mt-4 text-[17px] leading-relaxed text-ink/70">{e.summary}</p>
                <ul className="mt-4 space-y-3">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[16px] leading-snug text-ink/75">
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-ink/40" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="space-y-14">
            <div>
              <h3 className="rise text-sm font-medium text-ink/45">Education</h3>
              <ul className="mt-5">
                {education.map((ed) => (
                  <li key={ed.degree} className="rise border-t border-ink/10 py-5">
                    <p className="text-xl font-semibold tracking-tight">{ed.degree}</p>
                    {ed.org && <p className="mt-1 text-[16px] text-ink/70">{ed.org}</p>}
                    <p className="mt-1 text-sm text-ink/50">{ed.period}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="rise text-sm font-medium text-ink/45">Languages</h3>
              <ul className="mt-5">
                {languages.map((l) => (
                  <li key={l.name} className="rise flex items-baseline justify-between border-t border-ink/10 py-4">
                    <span className="text-xl font-semibold tracking-tight">{l.name}</span>
                    <span className="text-ink/50">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-band border-t border-ink/10 bg-mist py-16 sm:py-24" aria-label="Skills">
        <h3 className="mx-auto max-w-[1024px] px-4 text-sm font-medium text-ink/45 sm:px-6">Tools I work with</h3>
        <div className="mt-8 space-y-3 sm:space-y-4">
          {skills.map((row, i) => (
            <div key={i} className="skill-row flex w-max gap-3 sm:gap-4">
              {[...row, ...row].map((s, j) => (
                <span
                  key={j}
                  aria-hidden={j >= row.length}
                  className="whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-[clamp(1.1rem,2.4vw,1.75rem)] font-semibold tracking-tight text-ink shadow-[0_1px_0_rgba(0,0,0,0.04)] sm:px-7 sm:py-3.5"
                >
                  {s}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
