import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import EvidenceFigure from "@/components/EvidenceFigure";
import RelatedServices from "@/components/RelatedServices";
import { MEDIA } from "@/lib/content";

export const metadata = {
  title: "Media & Press Coverage",
  description: "PORTMATRIX in the media — a television interview and Nanayam Vikatan's coverage of the MD's China import expertise.",
  alternates: { canonical: "/media" },
  openGraph: { images: [MEDIA.items[0].src] },
};

// The source's own video ID, extracted from the verified YouTube link in
// lib/content.js — embedded (per the Image Map's recommendation) rather
// than reusing the PDF's static frame-grab screenshots.
const YOUTUBE_ID = "K28p2YTy2OI";

export default function MediaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: MEDIA.videoLabel,
    embedUrl: `https://www.youtube.com/embed/${YOUTUBE_ID}`,
    thumbnailUrl: "/images/source/media/youtube-interview-studio-screenshot.png",
  };

  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Media", href: "/media" }]} />}
        kicker="Press & television"
        title="Media & Press"
        intro="Genuine third-party coverage only — no invented reviews or press claims."
      />

      <div className="mt-10">
        <h2 className="h3 text-ink">{MEDIA.videoLabel}</h2>
        <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl border border-hairline">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
            title={MEDIA.videoLabel}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-14 border-t border-hairline pt-10">
        <h2 className="h3 text-ink">Press Coverage</h2>
        <div className="mt-5 max-w-md">
          <EvidenceFigure
            src={MEDIA.items[0].src}
            alt={MEDIA.items[0].alt}
            caption={MEDIA.items[0].caption}
            aspect="aspect-square"
          />
        </div>
      </div>

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
