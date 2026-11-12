import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { MEDIA } from "@/lib/content";

export default function MediaStrip() {
  const article = MEDIA.items[0];
  return (
    <section id="media" aria-labelledby="media-heading" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-5 border-t-2 border-navy pt-7">
          <div>
            <p className="kicker text-brandred">In the spotlight</p>
            <h2 id="media-heading" className="h2 mt-3 text-ink">{MEDIA.heading}</h2>
          </div>
          <Link href="/media" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-navy hover:underline">
            View all media <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-12">
          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slatey">Video interview</h3>
            <ul aria-label="Video interview">
              {MEDIA.videos.map((video) => (
                <li key={video.id} className="w-full">
                  <div className="aspect-video overflow-hidden rounded-xl border border-hairline bg-paper">
                    <iframe src={`https://www.youtube-nocookie.com/embed/${video.id}`} title={video.title} className="h-full w-full" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="mt-3 flex min-h-11 items-center justify-between gap-3 border-b border-hairline pb-3 font-display text-lg font-semibold text-navy hover:underline">
                    {video.title}<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                  <p className="mt-2 text-sm text-slatey">Watch on YouTube</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0 border-t border-hairline pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slatey">In print</h3>
            <Link href="/media#press-coverage" className="group block">
              <div className="overflow-hidden rounded-xl border border-hairline bg-paper">
                <Image src={article.src} alt={article.alt} width={article.width} height={article.height} unoptimized className="h-auto w-full" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brandred"><time dateTime="2024-02-04">04 February 2024</time></p>
              <p className="mt-2 font-display text-xl font-semibold text-ink">Nanayam Vikatan</p>
              <p className="mt-2 text-sm leading-relaxed text-slatey">{article.caption}</p>
              <span className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-navy group-hover:underline">Read press coverage <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
