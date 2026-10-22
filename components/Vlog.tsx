"use client";

import { useEffect, useState } from "react";
import { person, videos } from "@/lib/data";

function videoId(url: string) {
  const m = url.match(/(?:v=|youtu\.be\/|shorts\/|embed\/|live\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : url.trim();
}

export default function Vlog() {
  if (!videos.length) return null;
  return (
    <section id="vlog" className="bg-black px-4 py-28 sm:px-6 sm:py-36" aria-label="Vlog">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <h2 className="text-[clamp(2.5rem,5.6vw,4.75rem)] leading-[1.0] font-semibold tracking-[-0.04em]">
              Off the clock.
            </h2>
            <p className="mt-6 max-w-[44ch] text-lg leading-snug text-white/60">
              I film what studying and living in Germany is really like: budget hauls, Kleinanzeigen finds and
              honest tips for Indian students planning the move.
            </p>
          </div>
          <a
            href={person.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/25 px-5 py-2.5 text-sm text-white transition-colors hover:bg-white hover:text-black"
          >
            Visit @maiharsh on YouTube
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {videos.map((v) => (
            <Video key={v} id={videoId(v)} />
          ))}
        </div>
      </div>
    </section>
  );
}

// A lightweight player: only YouTube's thumbnail loads until someone presses play.
function Video({ id }: { id: string }) {
  const [playing, setPlaying] = useState(false);
  const [title, setTitle] = useState("");
  const [thumb, setThumb] = useState(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);

  useEffect(() => {
    let alive = true;
    fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`)
      .then((r) => r.json())
      .then((d) => alive && d?.title && setTitle(d.title))
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [id]);

  return (
    <figure>
      <div className="screen relative aspect-video">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title || "YouTube video"}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${title || "video"}`}
            className="group absolute inset-0 grid place-items-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumb}
              alt=""
              loading="lazy"
              onLoad={(e) => {
                // YouTube returns a 120px grey placeholder when no HD thumbnail exists.
                if ((e.currentTarget as HTMLImageElement).naturalWidth <= 120)
                  setThumb(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`);
              }}
              onError={() => setThumb(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <span className="relative grid h-16 w-16 place-items-center rounded-full bg-white/90 text-black backdrop-blur transition-transform duration-300 group-hover:scale-110">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ml-1">
                <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      {title && <figcaption className="mt-5 text-[15px] leading-snug text-white/75">{title}</figcaption>}
    </figure>
  );
}
