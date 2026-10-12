import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import RelatedServices from "@/components/RelatedServices";
import Faq from "@/components/Faq";
import { RIIT_COURSES, CERTIFICATE_PROGRAMME } from "@/lib/riit-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "RIIT Courses and Certificate Programme in International Trade",
  description:
    "RIIT courses on trade laws and procedures, and a 21-topic Certificate Programme in International Trade Management, conducted online and physically.",
  path: "/riit/courses",
});

// Scheme names that have their own PORTMATRIX page. Matched in order, first
// occurrence of each phrase in a title.
const SCHEME_LINKS = [
  { phrase: "Advance Authorisation", href: "/services/advance-authorisation" },
  { phrase: "EPCG", href: "/services/epcg" },
  { phrase: "MOOWR", href: "/services/moowr" },
  { phrase: "Postal", href: "/services/postal-export" },
  { phrase: "E-Commerce", href: "/services/e-commerce-export" },
  { phrase: "E-commerce", href: "/services/e-commerce-export" },
];

function Linked({ text }) {
  const hits = SCHEME_LINKS.map((l) => ({ ...l, i: text.indexOf(l.phrase) }))
    .filter((l) => l.i !== -1)
    .sort((a, b) => a.i - b.i);
  const parts = [];
  let cursor = 0;
  for (const h of hits) {
    if (h.i < cursor) continue;
    if (h.i > cursor) parts.push(text.slice(cursor, h.i));
    parts.push(
      <Link key={h.phrase} href={h.href} className="font-medium text-navy underline underline-offset-2 hover:text-ink">
        {h.phrase}
      </Link>
    );
    cursor = h.i + h.phrase.length;
  }
  parts.push(text.slice(cursor));
  return parts.map((p, i) => (typeof p === "string" ? <span key={i}>{p}</span> : p));
}

// FAQ answers: PDF pp.84-85 only. No fees, duration, dates, enrolment or
// certifying body — none of these appear in the source.
const FAQS = [
  {
    // p.84
    q: "Are the courses online or in person?",
    a: "The courses are conducted by both Online and Physical modes.",
  },
  {
    // p.85
    q: "Who should take the Certificate Programme?",
    a: `${CERTIFICATE_PROGRAMME.audience.join(", ")}.`,
  },
  {
    // pp.84-85
    q: "What does the curriculum cover?",
    a: `The curriculum consists of ${CERTIFICATE_PROGRAMME.curriculum.length} topics across the International Trade spectrum, including the Customs Act, 1962, Customs Tariff Act, 1975, Foreign Trade Policy 2023, GST in EXIM, FEMA 1999, EXIM Documentation, INCOTERMS 2020, Export Pricing Strategy, Export Finance and International Trade Logistics.`,
  },
];

export default function RiitCoursesPage() {
  // One Course for the Certificate Programme only. Fees, duration, dates and
  // certifying body are not in the source and are therefore not stated.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: CERTIFICATE_PROGRAMME.title,
    description: CERTIFICATE_PROGRAMME.intro,
    provider: { "@type": "Organization", name: "Regional Institute of International Trade (RIIT)", url: "https://www.portmatrix.in/riit" },
    hasCourseInstance: { "@type": "CourseInstance", courseMode: CERTIFICATE_PROGRAMME.modes },
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "RIIT", href: "/riit" }, { label: "Courses", href: "/riit/courses" }]} />}
        kicker="RIIT"
        title="RIIT Courses and Certificate Programme in International Trade"
        intro="We impart Export Import Training - Research - Consultancy for the employees of Corporates and MSMEs on a structural basis."
      />

      {/* Certificate Programme as a syllabus: mode + audience strip, then the
          21 topics in numbered ruled groups (pp.84-85). */}
      <section aria-labelledby="certificate-programme" className="mt-12 border-t-2 border-navy pt-8">
        <h2 id="certificate-programme" className="h2 max-w-4xl text-ink">{CERTIFICATE_PROGRAMME.title}</h2>
        <dl className="mt-6 grid divide-y divide-hairline border-y border-hairline md:grid-cols-[14rem_1fr] md:divide-y-0">
          <dt className="pt-4 text-sm font-semibold uppercase tracking-wide text-slatey md:border-b md:border-hairline md:py-4">Mode</dt>
          <dd className="pb-4 font-display text-lg font-semibold text-ink md:border-b md:border-hairline md:py-4">{CERTIFICATE_PROGRAMME.modes.join(" and ")}</dd>
          <dt className="pt-4 text-sm font-semibold uppercase tracking-wide text-slatey md:py-4">Who shall take this course?</dt>
          <dd className="pb-4 md:py-4">
            <ul className="flex flex-wrap gap-x-6 gap-y-1.5 text-base text-ink/85">
              {CERTIFICATE_PROGRAMME.audience.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </dd>
        </dl>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/85">{CERTIFICATE_PROGRAMME.intro}</p>

        {/* Original numbering and titles are kept; groups are editorial
            headings. CLIENT_CONFIRMATION_REQUIRED: topic 15 "FMEG" is
            printed as-is in the source (p.85). */}
        <h2 id="course-curriculum" className="h3 mt-12 text-ink">Course curriculum</h2>
        <div className="mt-6 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATE_PROGRAMME.curriculumGroups.map((group) => (
            <section key={group.title} aria-labelledby={`curriculum-${group.numbers[0]}`}>
              <h3 id={`curriculum-${group.numbers[0]}`} className="border-t-2 border-navy pt-3 font-display text-xl font-bold text-ink">{group.title}</h3>
              <ol className="mt-2 divide-y divide-hairline border-b border-hairline">
                {group.numbers.map((n) => (
                  <li key={n} value={n} className="flex gap-4 py-3 text-base leading-relaxed text-ink/90">
                    <span className="w-7 shrink-0 font-display font-semibold tabular-nums text-brandred" aria-hidden="true">{String(n).padStart(2, "0")}</span>
                    <span><Linked text={CERTIFICATE_PROGRAMME.curriculum[n - 1]} /></span>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </section>

      {/* The 12-course list (pp.17-19) — a distinct list from the 21-topic
          curriculum above, kept in full, as a compact ordered list. */}
      <section aria-labelledby="our-courses" className="mt-16 border-t border-hairline pt-10">
        <h2 id="our-courses" className="h2 text-ink">Our Courses</h2>
        <ol className="mt-6 grid border-t-2 border-navy md:grid-cols-2 md:gap-x-12">
          {RIIT_COURSES.map((c, i) => (
            <li key={c.title} className="flex gap-4 border-b border-hairline py-5">
              <span className="w-7 shrink-0 pt-0.5 font-display text-base font-semibold tabular-nums text-brandred" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-lg font-bold leading-snug text-ink"><Linked text={c.title} /></h3>
                <p className="mt-1.5 text-base leading-relaxed text-slatey">{c.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <Faq items={FAQS} />

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "RIIT Overview", href: "/riit" },
            { title: "RIIT Training Events", href: "/riit/training-events" },
            { title: "MOOWR", href: "/services/moowr" },
            { title: "Advance Authorisation Scheme", href: "/services/advance-authorisation" },
            { title: "EPCG Scheme", href: "/services/epcg" },
            { title: "Postal Export", href: "/services/postal-export" },
          ]}
        />
      </div>
    </div>
  );
}
