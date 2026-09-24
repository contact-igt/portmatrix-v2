import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import ImageCaption from "@/components/ImageCaption";
import RelatedServices from "@/components/RelatedServices";
import Image from "next/image";
import { TRAINING_EVENTS } from "@/lib/riit-data";

export const metadata = {
  title: "Training Events & Institutional Credibility",
  description:
    "RIIT training events 2020-2026: government officials, FIEO, FSSAI, ECGC, Deputy DGFT sessions, the Alagappa University MoU, and college/community outreach programmes.",
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
        intro="A chronological record — every event, date, and institution below is exactly as printed in the approved source document. Nothing here is inferred."
      />

      <ol className="mt-12 space-y-14 border-l border-hairline pl-8">
        {TRAINING_EVENTS.map((event) => (
          <li key={event.src} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-brandred" />
            <p className="text-xs uppercase tracking-wide text-brandred">{event.dateDisplay}</p>
            <h2 className={`mt-1 font-display font-semibold text-ink ${event.flagship ? "text-2xl" : "text-lg"}`}>
              {event.title}
            </h2>
            <div className={`mt-4 ${event.flagship ? "max-w-xl" : "max-w-md"}`}>
              <div className="relative min-h-[16rem] w-full overflow-hidden border border-hairline bg-white p-2 sm:min-h-[20rem]">
                <Image
                  src={event.src}
                  alt={event.alt}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-contain"
                />
              </div>
              <ImageCaption>{event.caption}</ImageCaption>
            </div>
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
