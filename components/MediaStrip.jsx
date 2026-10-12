import { PlayCircle } from "lucide-react";
import { MEDIA } from "@/lib/content";

// Text-only press strip on the home page. The Nanayam Vikatan scan (with
// zoom) lives on /media; the home page keeps the dated caption and the
// interview link.
export default function MediaStrip() {
  const article = MEDIA.items[0];

  return (
    <section id="media" className="relative bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-5 border-y border-hairline py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <div className="max-w-2xl">
            <p className="kicker text-brandred">{MEDIA.heading}</p>
            <p className="mt-2 text-base leading-relaxed text-slatey">{article.caption}</p>
          </div>
          <a
            href={MEDIA.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-full border border-navy/20 bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-navy-50 sm:self-auto"
          >
            <PlayCircle className="h-4 w-4" aria-hidden="true" />
            {MEDIA.videoLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
