# Harsh Kumar · Portfolio

Apple-style portfolio built with Next.js, GSAP ScrollTrigger, Lenis and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy on Vercel

1. Push this folder to your `harsh-portfolio` GitHub repo (replace the old files).
2. Vercel detects Next.js automatically and redeploys. No settings needed.

## Edit content

Everything you'd change lives in **`lib/data.ts`**: name, links, statement, pipeline steps, projects, experience, education, skills, languages and YouTube videos.

- **New project screenshot:** put the image in `public/projects/` and set `image: "/projects/your-file.webp"` on the project. Projects without an image show a big number instead (set `highlight`).
- **Charts or images that shouldn't be cropped:** add `fit: "contain"`.
- **CV button:** put your PDF in `public/` (e.g. `public/Harsh-Kumar-CV.pdf`) and set `cv: "/Harsh-Kumar-CV.pdf"`. The button is hidden while this is empty.
- **Videos:** paste any YouTube link into `videos`. Titles and thumbnails load from YouTube automatically.
- **Live site URL:** if your Vercel URL changes, update `metadataBase` in `app/layout.tsx` so link previews on LinkedIn work.

## How the page is built

| Section | File | Effect |
| --- | --- | --- |
| Hero | `components/Hero.tsx` | Pinned. Name recedes, dashboard tilts up and settles flat |
| Statement | `components/Statement.tsx` | Pinned. Words light up as you scroll |
| Work | `components/Work.tsx` | Pinned horizontal gallery on desktop, vertical list on phones |
| Process | `components/Process.tsx` | Pinned. Pipeline builds stage by stage |
| About | `components/About.tsx` | Experience, education, scroll-linked skill rows |
| Vlog | `components/Vlog.tsx` | Lightweight YouTube players |
| Contact | `components/Contact.tsx` | Email, socials |

Smooth scrolling is in `components/SmoothScroll.tsx`. All motion switches off for visitors who have "reduce motion" turned on.
