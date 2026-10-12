import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import RelatedServices from "@/components/RelatedServices";
import { MEDIA } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Media and Press",
  description:
    "An interview video on YouTube and our MD's China Import article in the Nanayam Vikatan Tamil magazine, 04 February 2024.",
  path: "/media",
  image: MEDIA.items[0].src,
});

// The source's own video ID, extracted from the verified YouTube link in
// lib/content.js — embedded (per the Image Map's recommendation) rather
// than reusing the PDF's static frame-grab screenshots.
const YOUTUBE_ID = "K28p2YTy2OI";

// CLIENT_CONFIRMATION_REQUIRED: the PDF (pp.83-84) gives only an
// "Interview YOUTUBE Link" and "Our MD's China Import Article in NANAYAM
// VIKATAN Tamil Magazine on 04 February, 2024". An English summary, the
// interview date and channel/interviewer, and the article's topic detail are
// not in the PDF, so none is written here.
//
// No VideoObject JSON-LD: Google's required `uploadDate` (and a source-backed
// description) are not in the PDF, so structured data would have to be
// invented. Add it only when the client supplies title/date/channel.

export default function MediaPage() {
  const scan = MEDIA.items[0];
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Media", href: "/media" }]} />}
        kicker="Press & media"
        title="Media & Press"
        intro="PORTMATRIX in the media: an interview video on YouTube, and our MD's China Import article in the Nanayam Vikatan Tamil magazine on 04 February 2024."
      />

      {/* Editorial archive: the lead video, then press coverage as a dated
          entry. The two interview still frames printed in the PDF (p.83) are
          not shown — they duplicate the embedded video. */}
      {/* PDF p.83 */}
      <section aria-labelledby="interview-video" className="mt-12 border-t-2 border-navy pt-8">
        <h2 id="interview-video" className="h2 text-ink">Interview video</h2>
        <div className="relative mt-6 aspect-video w-full max-w-4xl overflow-hidden border border-hairline bg-paper">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
            title="Interview video on YouTube"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <p className="mt-2">
          <a href={MEDIA.videoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-base font-semibold text-navy underline underline-offset-2 hover:text-ink">
            Watch the interview on YouTube
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </p>
      </section>

      {/* PDF p.84 */}
      <section aria-labelledby="press-coverage" className="mt-14 border-t border-hairline pt-8">
        <h2 id="press-coverage" className="h2 text-ink">Press coverage</h2>
        <div className="mt-6 grid gap-8 border-t-2 border-navy pt-6 md:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] md:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brandred">
              <time dateTime="2024-02-04">04 February 2024</time>
            </p>
            <p className="mt-3 max-w-prose text-lg leading-relaxed text-ink/85">
              Our MD&apos;s China Import article in the Nanayam Vikatan Tamil magazine,{" "}
              <time dateTime="2024-02-04">04 February 2024</time>.
            </p>
          </div>
          <figure>
            <a href={scan.src} target="_blank" rel="noopener" className="block" aria-label={`${scan.alt} — open full size`}>
              <Image
                src={scan.src}
                alt={scan.alt}
                width={scan.width}
                height={scan.height}
                sizes="(min-width: 768px) 384px, 100vw"
                className="h-auto w-full border border-hairline bg-white"
              />
            </a>
            <figcaption className="mt-3 text-sm leading-relaxed text-slatey">
              {scan.caption}
              <a href={scan.src} target="_blank" rel="noopener" className="ml-2 inline-flex min-h-11 items-center font-medium text-navy underline underline-offset-2">
                Open full size
              </a>
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "RIIT Overview", href: "/riit" },
            { title: "Rahim Iyaz — Managing Director", href: "/about/rahim-iyaz" },
            { title: "China Import Sourcing", href: "/china-import-sourcing" },
          ]}
        />
      </div>
    </div>
  );
}
