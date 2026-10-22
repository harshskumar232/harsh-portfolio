import { person } from "@/lib/data";

const socials = [
  { label: "LinkedIn", href: person.linkedin },
  { label: "GitHub", href: person.github },
  { label: "YouTube", href: person.youtube },
  { label: "Instagram", href: person.instagram },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-black px-4 pt-28 pb-10 sm:px-6 sm:pt-40" aria-label="Contact">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="text-[clamp(3.5rem,12vw,11rem)] leading-[0.9] font-semibold tracking-[-0.05em]">
          Let&apos;s talk.
        </h2>
        <p className="mt-8 max-w-[40ch] text-lg leading-snug text-white/60">
          Open to Werkstudent roles, internships and graduate positions in data analytics, finance and controlling.
          Based in {person.location}.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${person.email}`}
            className="rounded-full bg-white px-7 py-3.5 text-[17px] font-medium text-black transition-opacity hover:opacity-85"
          >
            {person.email}
          </a>
          {person.cv && (
            <a
              href={person.cv}
              download
              className="rounded-full border border-white/25 px-7 py-3.5 text-[17px] text-white transition-colors hover:bg-white hover:text-black"
            >
              Download CV
            </a>
          )}
        </div>

        <ul className="mt-20 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-8">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-white/60 transition-colors hover:text-white"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-16 text-xs text-white/35">
          © {new Date().getFullYear()} {person.name}. Built with Next.js, GSAP and Lenis.
        </p>
      </div>
    </section>
  );
}
