"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { person } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#vlog", label: "Vlog" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > 120 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden && !open ? -64 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open ? "bg-black/70 backdrop-blur-xl backdrop-saturate-150" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-12 max-w-[1024px] items-center justify-between px-4 sm:px-6">
          <a href="#top" className="text-[15px] font-semibold tracking-tight text-white">
            {person.name}
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-xs text-white/70 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${person.email}`}
                className="rounded-full bg-white px-3.5 py-1 text-xs font-medium text-black transition-opacity hover:opacity-85"
              >
                Email me
              </a>
            </li>
          </ul>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="relative -mr-2 grid h-10 w-10 place-items-center md:hidden"
          >
            <span
              className={`absolute h-px w-5 bg-white transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-white transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-[4px]"
              }`}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/95 px-8 pt-24 backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-2">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-3xl font-semibold tracking-tight text-white"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
