"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { heroIntro, person } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Pinned hero: the name recedes while a live dashboard tilts up out of
// the dark and settles flat, like a product reveal.
export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Page-load entrance, once.
        gsap.from(".hero-line", {
          yPercent: 110,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.12,
          delay: 0.15,
        });
        gsap.from(".hero-sub", { opacity: 0, y: 16, duration: 1, ease: "power3.out", delay: 0.7 });
        gsap.from(".hero-cue", { opacity: 0, duration: 1, delay: 1.4 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=160%",
            scrub: 1,
            pin: true,
          },
        });

        tl.to(".hero-copy", { scale: 0.86, opacity: 0, y: "-8vh", ease: "none", duration: 0.5 }, 0)
          .to(".hero-cue", { opacity: 0, duration: 0.1 }, 0)
          .fromTo(
            ".hero-screen",
            { y: "90vh", rotateX: 32, scale: 0.78 },
            { y: "0vh", rotateX: 0, scale: 1, ease: "power2.out", duration: 0.75 },
            0.05
          )
          .fromTo(".hero-glow", { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.2)
          .fromTo(".hero-caption", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.2 }, 0.72);
      });
    },
    { scope: root }
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative h-[100svh] overflow-hidden bg-black"
      aria-label="Introduction"
    >
      <div className="hero-copy absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-[clamp(3.25rem,13vw,10rem)] leading-[0.92] font-semibold tracking-[-0.045em]">
          <span className="block overflow-hidden pb-[0.06em]">
            <span className="hero-line text-sheen block">{person.name}.</span>
          </span>
          <span className="mt-[0.12em] block overflow-hidden pb-[0.08em] text-[0.5em] tracking-[-0.035em]">
            <span className="hero-line block text-white/40">Data never lies.</span>
          </span>
        </h1>
        <p className="hero-sub mt-8 max-w-[38ch] text-[clamp(1.05rem,1.8vw,1.35rem)] leading-snug text-white/70">
          {heroIntro}
        </p>
      </div>

      <div
        className="hero-glow pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, rgba(48,209,88,0.22), transparent)" }}
        aria-hidden="true"
      />

      <div
        className="hero-stage absolute inset-0 flex flex-col items-center justify-center px-4"
        style={{ perspective: "1400px" }}
      >
        <figure
          className="hero-screen screen w-[min(1080px,92vw,calc((100svh-200px)*1.7))] will-change-transform"
          style={{ transform: "translateY(90vh) rotateX(32deg) scale(0.78)", transformOrigin: "50% 100%" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/supply-chain-analytics.webp"
            alt="Supply Chain Analytics dashboard showing revenue, orders, margin and a daily revenue trend"
            className="block aspect-[16/9] w-full object-cover object-top"
            fetchPriority="high"
          />
        </figure>
        <p className="hero-caption mt-10 text-center text-sm text-white/60 opacity-0 sm:text-base">
          Supply Chain Analytics Pipeline. Built end to end, runs every morning.
        </p>
      </div>

      <a
        href="#statement"
        className="hero-cue absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-white/50"
      >
        Scroll
        <span className="block h-8 w-px overflow-hidden bg-white/15">
          <span className="block h-full w-full origin-top animate-[cue_1.8s_ease-in-out_infinite] bg-white/70" />
        </span>
      </a>

      <style>{`
        @keyframes cue { 0% { transform: scaleY(0); transform-origin: top } 45% { transform: scaleY(1); transform-origin: top }
          55% { transform: scaleY(1); transform-origin: bottom } 100% { transform: scaleY(0); transform-origin: bottom } }
        @media (prefers-reduced-motion: reduce) {
          #top { height: auto; }
          #top .hero-copy, #top .hero-stage { position: relative; inset: auto; }
          #top .hero-copy { min-height: 88svh; }
          #top .hero-stage { padding-bottom: 14vh; }
          #top .hero-screen { transform: none !important; }
          #top .hero-caption { opacity: 1 !important; }
          #top .hero-cue { display: none; }
        }
      `}</style>
    </section>
  );
}
