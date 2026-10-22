"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { statement } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Words light up one by one as you scroll, and dim again if you scroll back.
export default function Statement() {
  const root = useRef<HTMLElement>(null);
  const words = statement.split(" ");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".word",
          { opacity: 0.14 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.1,
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "+=130%",
              scrub: 0.6,
              pin: true,
            },
          }
        );
      });
    },
    { scope: root }
  );

  return (
    <section
      id="statement"
      ref={root}
      className="flex min-h-[100svh] items-center bg-black px-4 py-24 sm:px-6"
      aria-label="What I do"
    >
      <p className="mx-auto max-w-[24ch] text-[clamp(2rem,5.4vw,4.25rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-white">
        {words.map((w, i) => (
          <span key={i} className="word">
            {w}{" "}
          </span>
        ))}
      </p>
    </section>
  );
}
