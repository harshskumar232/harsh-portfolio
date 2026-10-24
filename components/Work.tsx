"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects, type Project } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Desktop: the section pins and the projects slide past horizontally.
// Phone (or reduced motion): a normal vertical list.
export default function Work() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
        const el = track.current!;
        const distance = () => el.scrollWidth - window.innerWidth;

        const slide = gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: 0.8,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        gsap.to(".work-progress", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: () => `+=${distance()}`, scrub: true },
        });

        // Each screen settles from a slight zoom as it slides into view.
        gsap.utils.toArray<HTMLElement>(".work-media").forEach((m) => {
          gsap.fromTo(
            m,
            { scale: 1.12 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: m,
                containerAnimation: slide,
                start: "left right",
                end: "center center",
                scrub: true,
              },
            }
          );
        });
      });
    },
    { scope: root }
  );

  return (
    <section id="work" ref={root} className="relative overflow-hidden bg-black" aria-label="Selected work">
      <div
        ref={track}
        className="flex flex-col gap-20 px-4 py-28 sm:px-6 min-[900px]:h-[100svh] min-[900px]:flex-row min-[900px]:items-center min-[900px]:gap-[6vw] min-[900px]:px-[8vw] min-[900px]:py-0 min-[900px]:will-change-transform"
      >
        <div className="shrink-0 min-[900px]:w-[32vw]">
          <h2 className="text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.04em]">
            Selected work.
          </h2>
          <p className="mt-6 max-w-[30ch] text-lg leading-snug text-white/60">
            Three featured projects in BI, medical data quality and healthcare AI, then{" "}
            {projects.length - 3} more. Every one is on GitHub.
          </p>
        </div>

        {projects.map((p, i) => (
          <ProjectPanel key={p.title} project={p} index={i} />
        ))}

        <div className="hidden shrink-0 min-[900px]:block min-[900px]:w-[2vw]" aria-hidden="true" />
      </div>

      <div className="pointer-events-none absolute bottom-10 left-[8vw] right-[8vw] hidden h-px bg-white/15 min-[900px]:block">
        <div className="work-progress h-full origin-left scale-x-0 bg-signal" />
      </div>
    </section>
  );
}

function ProjectPanel({ project: p, index }: { project: Project; index: number }) {
  return (
    <article className="flex shrink-0 flex-col gap-8 min-[900px]:w-[min(78vw,1180px)] min-[900px]:flex-row min-[900px]:items-center min-[900px]:gap-12">
      <div className="screen relative aspect-[16/10] w-full shrink-0 min-[900px]:w-[58%]">
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={p.image}
            alt={`${p.title} screenshot`}
            loading="lazy"
            className={`work-media h-full w-full ${
              p.fit === "contain" ? "bg-white object-contain p-[3%]" : "object-cover object-top"
            }`}
          />
        ) : (
          <div className="work-media flex h-full w-full flex-col justify-end bg-[radial-gradient(120%_90%_at_100%_0%,#123322_0%,#0b0b0c_60%)] p-[6%]">
            <span className="text-[clamp(4rem,11vw,10rem)] leading-[0.85] font-semibold tracking-[-0.05em] text-white">
              {p.highlight?.value}
            </span>
            <span className="mt-4 text-base text-white/55 sm:text-lg">{p.highlight?.label}</span>
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm text-white/45">
          {String(index + 1).padStart(2, "0")} / {p.category}
        </p>
        <h3 className="mt-3 text-[clamp(1.75rem,2.6vw,2.5rem)] leading-[1.05] font-semibold tracking-[-0.03em]">
          {p.title}
        </h3>
        <p className="mt-4 text-[17px] leading-relaxed text-white/70">{p.description}</p>
        <ul className="mt-5 space-y-2.5">
          {p.points.map((pt) => (
            <li key={pt} className="flex gap-3 text-[15px] leading-snug text-white/60">
              <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-white/40" />
              {pt}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[13px] text-white/40">{p.tags.join("  ·  ")}</p>
        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-1.5 text-[17px] text-signal hover:underline"
        >
          View on GitHub
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M4 2.5 7.5 6 4 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </article>
  );
}
