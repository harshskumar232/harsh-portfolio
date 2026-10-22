import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const title = "Harsh Kumar · Data Science & Engineering";
const description =
  "M.Sc. Data Science student at FAU Erlangen-Nürnberg. Data pipelines, analytics and dashboards, from raw data to decisions.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://harsh-portfolio-oxrd.vercel.app"),
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
