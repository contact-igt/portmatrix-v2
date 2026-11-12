import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import { GALLERY_SECTIONS } from "@/lib/gallery-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Photo Gallery",
  description: "Photographs of PORTMATRIX China visits, Canton Fair, shipment inspections, RIIT training and institutional engagements.",
  path: "/gallery",
  image: GALLERY_SECTIONS[0].images[0].src,
});

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-14 pt-6 sm:px-8 sm:pb-20 sm:pt-8">
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "Gallery", href: "/gallery" }]} />}
        kicker="The photographic archive"
        title="Gallery"
        intro="China visits, shipment inspections, training and institutional engagements — photographs from the PORTMATRIX archive."
      />

      <nav aria-label="Gallery categories" className="mt-10 border-t border-hairline pt-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slatey">Explore by category</p>
        <div className="flex flex-wrap gap-3">
          {GALLERY_SECTIONS.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="group inline-flex min-h-12 max-w-full items-center gap-3 rounded-full border border-navy/15 bg-white py-2 pl-5 pr-2 text-sm font-medium leading-snug text-navy transition-colors duration-150 hover:border-navy hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy">
              <span>{section.title}</span>
              <span className="flex h-8 min-w-8 shrink-0 items-center justify-center rounded-full bg-paper px-2 text-xs font-semibold tabular-nums text-navy transition-colors duration-150 group-hover:bg-white/15 group-hover:text-white" aria-label={`${section.images.length} photographs`}>{String(section.images.length).padStart(2, "0")}</span>
            </a>
          ))}
        </div>
      </nav>

      {GALLERY_SECTIONS.map((section, sectionIndex) => (
        <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="mt-14 scroll-mt-24 sm:mt-20">
          <div className="mb-8 flex items-baseline gap-5 border-t-2 border-navy pt-5">
            <span aria-hidden="true" className="text-sm font-semibold tabular-nums text-brandred">{String(sectionIndex + 1).padStart(2, "0")}</span>
            <h2 id={`${section.id}-heading`} className="h2 text-ink">{section.title}</h2>
          </div>
          <div className="grid items-start gap-x-10 gap-y-12 md:grid-cols-2">
            {section.images.map((photo, index) => (
              <figure key={photo.src} className="min-w-0">
                <div className="flex min-h-0 items-center justify-center overflow-hidden rounded-xl bg-paper">
                  <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(min-width: 1280px) 588px, (min-width: 768px) 46vw, 100vw" priority={sectionIndex === 0 && index === 0} className="h-auto max-h-[32rem] w-auto max-w-full rounded-xl" />
                </div>
                <figcaption className="mt-3 max-w-prose text-sm leading-relaxed text-slatey">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
