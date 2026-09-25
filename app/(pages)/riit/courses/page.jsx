import Breadcrumb from "@/components/Breadcrumb";
import PageIntro from "@/components/PageIntro";
import RelatedServices from "@/components/RelatedServices";
import { GraduationCap } from "lucide-react";
import { RIIT_COURSES, CERTIFICATE_PROGRAMME } from "@/lib/riit-data";

export const metadata = {
  title: "Courses & Certificate Programmes",
  description:
    "RIIT training courses covering Customs Act, Customs Tariff Act, FTP 2023, IGST, FEMA, IPR, and a 21-topic Certificate Programme in International Trade Management.",
  alternates: { canonical: "/riit/courses" },
};

export default function RiitCoursesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: RIIT_COURSES.map((c, i) => ({
      "@type": "Course",
      position: i + 1,
      name: c.title,
      description: c.desc,
      provider: { "@type": "Organization", name: "Regional Institute of International Trade (RIIT)" },
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        breadcrumb={<Breadcrumb items={[{ label: "RIIT", href: "/riit" }, { label: "Courses", href: "/riit/courses" }]} />}
        kicker="RIIT"
        title="Courses & Certificate Programmes"
        intro="We impart Export Import Training - Research - Consultancy for the employees of Corporates and MSMEs on a structural basis."
      />

      <h2 className="h2 mt-12 text-ink">Our Courses</h2>
      <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2">
        {RIIT_COURSES.map((c, i) => (
          <div key={c.title} className="flex gap-4 bg-white p-5">
            <span className="text-[13px] text-slatey">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="h3 text-ink">{c.title}</h3>
              <p className="mt-1 text-base leading-relaxed text-slatey">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Distinct, larger programme — never merged with the 12-course list
          above, per docs/FULL_SITE_SOURCE_MAP.md Section N. */}
      <div className="mt-14 rounded-2xl border border-hairline bg-paper p-7 sm:p-9">
        <div className="flex items-start gap-3">
          <GraduationCap className="mt-1 h-6 w-6 shrink-0 text-brandred" />
          <div>
            <h2 className="h2 text-ink">{CERTIFICATE_PROGRAMME.title}</h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-slatey">{CERTIFICATE_PROGRAMME.intro}</p>
            <p className="mt-3 text-sm font-medium text-ink">Who shall take this course? {CERTIFICATE_PROGRAMME.whoShouldTake}</p>
          </div>
        </div>

        <h3 className="h3 mt-8 text-ink">Course Curriculum</h3>
        <ol className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATE_PROGRAMME.curriculum.map((topic, i) => (
            <li key={topic} className="text-base leading-relaxed text-ink/80">
              {i + 1}. {topic}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-14">
        <RelatedServices
          items={[
            { title: "MOOWR", href: "/services/moowr" },
            { title: "Advance Authorisation Scheme", href: "/services/advance-authorisation" },
            { title: "EPCG Scheme", href: "/services/epcg" },
            { title: "Postal Export Aggregator", href: "/services/postal-export" },
          ]}
        />
      </div>
    </div>
  );
}
