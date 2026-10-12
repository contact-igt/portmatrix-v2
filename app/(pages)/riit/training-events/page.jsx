import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import RelatedServices from "@/components/RelatedServices";
import Image from "next/image";
import { TRAINING_EVENTS } from "@/lib/riit-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "RIIT Training Events 2020–2026",
  description:
    "RIIT training programmes, sessions and events from 2 August 2020 to 2026, listed by year, including the Alagappa University MoU and the MSME MDP sessions.",
  path: "/riit/training-events",
  image: TRAINING_EVENTS.find((e) => e.flagship && e.title.includes("Alagappa")).src,
});

// Chronological sort key. Full dates sort as-is; month-only entries
// ("2023-11") sort after the dated events of that month; year-only entries
// ("2025") sort after everything dated in that year.
const sortKey = (e) => (e.date.length === 10 ? e.date : e.date.length === 7 ? `${e.date}-99` : `${e.date}-99-99`);

// The November 2023 sessions and the 28 Nov certificate belong together.
const MDP_GROUP = {
  id: "msme-mdp-november-2023",
  title: "MSME MDP at RIIT, November 2023",
  intro: "Sessions for MSME MDP participants at RIIT in November 2023, and the Certificate of Appreciation dated 28 November 2023.",
  titles: new Set([
    "Postal Export Procedures Session",
    "Deputy DGFT Session",
    "FSSAI Procedures Session",
    "ECGC Procedures Session",
    "Export Inspection Agency Session",
    "Certificate of Appreciation",
  ]),
};

const sorted = [...TRAINING_EVENTS].sort((a, b) => sortKey(a).localeCompare(sortKey(b)));
const years = [...new Set(sorted.map((e) => e.date.slice(0, 4)))];

// Per year: a flat list of entries, where the MDP programme appears once, as
// a group, at the position of its earliest event.
function entriesFor(year) {
  const out = [];
  let groupDone = false;
  for (const e of sorted.filter((x) => x.date.startsWith(year))) {
    if (MDP_GROUP.titles.has(e.title)) {
      if (!groupDone) {
        out.push({ group: MDP_GROUP, events: sorted.filter((x) => MDP_GROUP.titles.has(x.title)) });
        groupDone = true;
      }
    } else {
      out.push({ event: e });
    }
  }
  return out;
}

// Photographs kept on this page (audit §3: ~10 evidence images). Every other
// event stays as a text entry — date, title and the full source caption — and
// its image is simply not rendered. Event flyers, the FIEO women audience
// photo, the certificate hand-off photo and the Postal / FSSAI / ECGC / EIA
// session photos are among the ones not shown.
const EVIDENCE_SRC = new Set([
  "/images/source/events/alagappa-university-mou-2022-10-31.png",
  "/images/source/riit/fieo-training-sakthivel-unnikrishnan-2022-12-20.png",
  "/images/source/riit/fieo-women-entrepreneurs-training-2023-02-09-speaker.png",
  "/images/source/riit/msme-tn-officials-training-2023-03-26.png",
  "/images/source/riit/riit-inauguration-2023-11-14.png",
  "/images/source/riit/deputy-dgft-reddy-session-2023-11-19.png",
  "/images/source/credentials/certificate-of-appreciation-msme-dfo-2023-11-28.png",
  "/images/source/riit/india-post-training-2024-01-25.png",
  "/images/source/riit/agriculture-export-training-edii-tn-2025-08-12.png",
  "/images/source/events/loyola-college-seminar-photo-2025-08-22.png",
]);
// The certificate is a document: open it at full size.
const ZOOM_SRC = new Set(["/images/source/credentials/certificate-of-appreciation-msme-dfo-2023-11-28.png"]);

function EventRow({ event, as: Heading = "h3" }) {
  const showImage = EVIDENCE_SRC.has(event.src);
  const zoom = ZOOM_SRC.has(event.src);
  const portrait = event.height > event.width;
  const frame = (
    <Image
      src={event.src}
      alt={event.alt}
      width={event.width}
      height={event.height}
      sizes="(min-width: 1024px) 288px, 100vw"
      className="h-auto w-full border border-hairline bg-white"
    />
  );
  return (
    <li className={`py-8 ${showImage ? "md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,17rem)] md:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,18rem)]" : ""}`}>
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-brandred">
          <time dateTime={event.date}>{event.dateDisplay}</time>
        </p>
        <Heading className="mt-1.5 font-display text-xl font-bold leading-snug text-ink">{event.title}</Heading>
        <p className="mt-2 max-w-prose text-base leading-relaxed text-slatey">{event.caption}</p>
      </div>
      {showImage && (
        <figure className={`mt-5 md:mt-0 ${portrait ? "max-w-[14rem] md:max-w-none" : ""}`}>
          {zoom ? (
            <a href={event.src} target="_blank" rel="noopener" className="block" aria-label={`${event.alt} — open full size`}>
              {frame}
            </a>
          ) : (
            frame
          )}
          {zoom && (
            <figcaption className="mt-1">
              <a href={event.src} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center text-sm font-medium text-navy underline underline-offset-2">
                Open full size
              </a>
            </figcaption>
          )}
        </figure>
      )}
    </li>
  );
}

export default function TrainingEventsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "RIIT", href: "/riit" }, { label: "Training Events", href: "/riit/training-events" }]} />}
        kicker={`${TRAINING_EVENTS.length} documented events · 2020–2026`}
        title="RIIT Training Events 2020–2026"
        intro="Training programmes, sessions and events held by RIIT and its partners, from the first export training on 2 August 2020 to a session on Agricultural Export Procedures in 2026, listed by year."
      />

      <nav aria-label="On this page" className="mt-8 border-y border-hairline">
        <ul className="flex flex-wrap items-center gap-x-2">
          <li className="pr-4 text-sm font-semibold uppercase tracking-wide text-slatey">On this page</li>
          {years.map((y) => (
            <li key={y}>
              <a href={`#events-${y}`} className="inline-flex min-h-11 min-w-11 items-center justify-center px-3 font-display text-base font-semibold text-navy hover:text-ink hover:underline">
                {y}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {years.map((year) => (
        <section key={year} aria-labelledby={`events-${year}`} className="mt-12 scroll-mt-24 border-t-2 border-navy lg:grid lg:grid-cols-[8rem_minmax(0,1fr)] lg:gap-10">
          <h2 id={`events-${year}`} className="h2 pt-5 text-ink lg:sticky lg:top-28 lg:self-start">{year}</h2>
          <ol className="divide-y divide-hairline lg:border-l lg:border-hairline lg:pl-10">
            {entriesFor(year).map((entry) =>
              entry.event ? (
                <EventRow key={entry.event.src} event={entry.event} />
              ) : (
                <li key={entry.group.id} className="py-8">
                  <h3 id={entry.group.id} className="font-display text-2xl font-bold leading-snug text-ink">
                    {entry.group.title}
                  </h3>
                  <p className="mt-2 max-w-prose text-base leading-relaxed text-slatey">{entry.group.intro}</p>
                  <ol className="mt-4 divide-y divide-hairline border-t border-hairline pl-0 sm:pl-6">
                    {entry.events.map((e) => (
                      <EventRow key={e.src} event={e} as="h4" />
                    ))}
                  </ol>
                </li>
              )
            )}
          </ol>
        </section>
      ))}

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "RIIT Overview", href: "/riit" },
            { title: "RIIT Courses and Certificate Programme", href: "/riit/courses" },
            { title: "Rahim Iyaz — Managing Director", href: "/about/rahim-iyaz" },
            { title: "Media & Press", href: "/media" },
          ]}
        />
      </div>
    </div>
  );
}
