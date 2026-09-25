import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import ImageCaption from "@/components/ImageCaption";
import RelatedServices from "@/components/RelatedServices";
import Image from "next/image";
import { TRAINING_EVENTS } from "@/lib/riit-data";

export const metadata = {
  title: "Training Events",
  description:
    "Training programmes, sessions and events, 2 August 2020 – 13 May 2026: FIEO, Govt. of Tamil Nadu, MSME-DFO, Deputy DGFT, FSSAI, ECGC, EIA, India Post, the Alagappa University MoU, and college seminars.",
  alternates: { canonical: "/riit/training-events" },
  openGraph: { images: [TRAINING_EVENTS.find((e) => e.flagship && e.title.includes("Alagappa")).src] },
};

export default function TrainingEventsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "RIIT", href: "/riit" }, { label: "Training Events", href: "/riit/training-events" }]} />}
        kicker={`${TRAINING_EVENTS.length} documented events · 2020–2026`}
        title="Training Events"
      />

      <ol className="mt-12 space-y-14 border-l border-hairline pl-8">
        {/* date order — the source pages are not strictly chronological */}
        {[...TRAINING_EVENTS].sort((a, b) => a.date.localeCompare(b.date)).map((event) => (
          <li key={event.src} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-brandred" />
            <p className="text-[13px] uppercase tracking-wide text-brandred">{event.dateDisplay}</p>
            <h2 className={`mt-1 font-display font-semibold tracking-tight text-ink ${event.flagship ? "text-2xl" : "text-xl"}`}>
              {event.title}
            </h2>
            {/* natural proportions — portrait flyers stay legible, wide photos
                get no letterbox bands */}
            <div className={`mt-4 ${event.width > event.height ? "max-w-2xl" : "max-w-md"}`}>
              <Image
                src={event.src}
                alt={event.alt}
                width={event.width}
                height={event.height}
                sizes="(min-width: 1024px) 672px, 100vw"
                className="h-auto w-full border border-hairline bg-white"
              />
              <ImageCaption>{event.caption}</ImageCaption>
            </div>
            {event.more && (
              <div className="mt-4 flex max-w-2xl flex-wrap gap-4">
                {event.more.map((m) => (
                  <Image
                    key={m.src}
                    src={m.src}
                    alt={m.alt}
                    width={m.width}
                    height={m.height}
                    sizes="(min-width: 1024px) 336px, 50vw"
                    className={`h-auto border border-hairline bg-white ${m.width > m.height ? "w-full" : "w-[calc(50%-0.5rem)] sm:w-64"}`}
                  />
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "RIIT Overview", href: "/riit" },
            { title: "Rahim Iyaz — Managing Director", href: "/about/rahim-iyaz" },
            { title: "Media & Press", href: "/media" },
          ]}
        />
      </div>
    </div>
  );
}
