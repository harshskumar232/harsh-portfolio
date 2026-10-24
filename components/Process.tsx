"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { pipeline } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Pinned scene: the pipeline builds itself stage by stage as you scroll.
export default function Process() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [animated, setAnimated] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        setAnimated(true);
        const n = pipeline.length;
        gsap.fromTo(
          ".flow-fill",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: `+=${n * 70}%`,
              scrub: 0.5,
              pin: true,
              onUpdate: (self) => setActive(Math.min(n - 1, Math.floor(self.progress * n * 0.999))),
            },
          }
        );
        return () => setAnimated(false);
      });
    },
    { scope: root }
  );

  return (
    <section
      id="process"
      ref={root}
      className="relative flex min-h-[100svh] flex-col justify-center bg-mist px-4 py-24 text-ink sm:px-6"
      aria-label="Supply Chain Analytics Pipeline workflow"
    >
      <div className="mx-auto w-full max-w-[1024px]">
        <h2 className="max-w-[16ch] text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] font-semibold tracking-[-0.035em]">
          From raw rows to a dashboard you can trust.
        </h2>
        <p className="mt-5 max-w-[48ch] text-[clamp(1rem,1.5vw,1.2rem)] leading-snug text-ink/60">
          The workflow behind my{" "}
          <a
            href="https://github.com/harshskumar232/supply-chain-analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-leaf hover:underline"
          >
            Supply Chain Analytics Pipeline
          </a>{" "}
          project, stage by stage.
        </p>

        {/* The flow line */}
        <div className="relative mt-14 sm:mt-20">
          <div className="absolute left-0 right-0 top-[11px] h-[2px] rounded bg-ink/10" />
          <div
            className="flow-fill absolute left-0 right-0 top-[11px] h-[2px] origin-left rounded bg-leaf"
            style={animated ? undefined : { transform: "scaleX(1)" }}
          />
          <ol className="relative grid grid-cols-4">
            {pipeline.map((p, i) => {
              const on = !animated || i <= active;
              return (
                <li key={p.step} className="flex flex-col items-start">
                  <span
                    className={`grid h-6 w-6 place-items-center rounded-full border-2 transition-all duration-500 ${
                      on ? "border-leaf bg-leaf scale-100" : "border-ink/25 bg-mist scale-90"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full transition-colors ${on ? "bg-mist" : "bg-transparent"}`} />
                  </span>
                  <span
                    className={`mt-4 text-[clamp(1rem,2.4vw,1.6rem)] font-semibold tracking-tight transition-colors duration-500 ${
                      on ? "text-ink" : "text-ink/25"
                    }`}
                  >
                    {p.step}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Orchestration band underneath every stage */}
        <p className="mt-6 rounded-xl border border-ink/10 bg-white/60 px-4 py-2.5 text-center text-xs text-ink/60 sm:text-sm">
          Orchestrated by Apache Airflow, daily at 06:00 UTC, with logging and retries
        </p>

        {/* Active stage detail: crossfades on scroll; all shown when motion is reduced */}
        <div className="relative mt-12 min-h-[11rem] sm:mt-16">
          {pipeline.map((p, i) => (
            <div
              key={p.step}
              className={
                animated
                  ? `absolute inset-0 transition-all duration-500 ${
                      i === active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
                    }`
                  : "mb-8"
              }
              aria-hidden={animated && i !== active}
            >
              <p className="text-sm font-medium text-ink/50">{p.tool}</p>
              <p className="mt-3 max-w-[46ch] text-[clamp(1.15rem,2.2vw,1.6rem)] leading-snug font-medium tracking-tight text-ink">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
