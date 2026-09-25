import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import EvidenceFigure from "@/components/EvidenceFigure";
import RelatedServices from "@/components/RelatedServices";
import { MEDIA } from "@/lib/content";

export const metadata = {
  title: "Media & Press Coverage",
  description: "PORTMATRIX in the media — the MD's interview, and our MD's China Import Article in Nanayam Vikatan Tamil magazine, 04 February 2024.",
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
    // Source-backed fields only (PDF p.83). No uploadDate/description: the
    // source gives neither, and neither is invented.
    name: "Interview — Mr. Rahim Iyaz, Managing Director",
    embedUrl: `https://www.youtube.com/embed/${YOUTUBE_ID}`,
    thumbnailUrl: "https://www.portmatrix.in/images/source/media/youtube-interview-studio-screenshot.png",
  };

  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Media", href: "/media" }]} />}
        kicker="Press & media"
        title="Media & Press"
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

      {/* PDF p.83 — the two interview frames printed beside the link */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <EvidenceFigure src="/images/source/media/youtube-interview-studio-screenshot.png" alt="Interview frame — Mr. Rahim Iyaz, Managing Director" caption="Interview — YouTube" aspect="aspect-video" sizes="(min-width: 640px) 440px, 100vw" />
        <EvidenceFigure src="/images/source/media/youtube-interview-agri-show-screenshot.png" alt="Interview frame — Mr. Rahim Iyaz, Managing Director" caption="Interview — YouTube" aspect="aspect-[750/422]" sizes="(min-width: 640px) 440px, 100vw" />
      </div>

      <div className="mt-14 border-t border-hairline pt-10">
        <h2 className="h3 text-ink">Press Coverage</h2>
        <div className="mt-5 max-w-2xl">
          <EvidenceFigure
            src={MEDIA.items[0].src}
            alt={MEDIA.items[0].alt}
            caption={MEDIA.items[0].caption}
            variant="document-scan"
            aspect="aspect-square"
            sizes="(min-width: 1024px) 672px, 100vw"
            zoom
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
