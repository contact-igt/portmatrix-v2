import Image from "next/image";
import RahimSignature from "@/components/RahimSignature";
import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";
import { MD, ORG_ID, SITE_URL } from "@/lib/content";
import { MD_LEAD, MD_IN_THE_FIELD } from "@/lib/about-data";
import { newestFirst } from "@/lib/date-order";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Rahim Iyaz — Managing Director",
  description:
    "Mr. Rahim Iyaz, Managing Director of PORTMATRIX, is an F-Card qualified Customs Broker with experience in foreign trade since 1996.",
  path: "/about/rahim-iyaz",
  image: MD.portrait.src,
});

const PERSON_ID = `${SITE_URL}/about/rahim-iyaz#person`;
const linkClass = "font-semibold text-navy underline decoration-navy/30 underline-offset-2 hover:decoration-navy";

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.47 0 .11 5.35.1 11.94c0 2.1.55 4.16 1.6 5.97L0 24l6.24-1.64a11.95 11.95 0 0 0 5.8 1.48h.01c6.58 0 11.94-5.35 11.95-11.94a11.88 11.88 0 0 0-3.48-8.42ZM12.05 21.82a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.61-.24-.37a9.87 9.87 0 0 1-1.51-5.28c0-5.47 4.45-9.92 9.93-9.92a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.99 9.87Zm5.45-7.43c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.48.71.31 1.27.49 1.71.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "LinkedIn", handle: "Rahim Iyaz", href: "https://www.linkedin.com/in/rahim-iyaz-20744016", icon: Linkedin },
  { label: "Instagram", handle: "rahimiyaz", href: "https://www.instagram.com/rahimiyaz/", icon: Instagram },
  { label: "Facebook", handle: "Rahim Iyaz", href: "https://www.facebook.com/share/1Ks6KVkpR5/?mibextid=wwXIfr", icon: Facebook },
  { label: "X", handle: "@Rahimiyaz", href: "https://x.com/rahimiyaz" },
  { label: "WhatsApp Group", handle: "RIIT EXPORTLEAD", href: "https://chat.whatsapp.com/FANcugLsSNfEowdI9jGCFH", icon: WhatsAppIcon, whatsapp: true },
  { label: "Direct WhatsApp", handle: "+91 935 935 2345", href: "https://wa.me/919359352345", icon: WhatsAppIcon, whatsapp: true },
];

// Experience groups and destinations supplied by the user.
const EXPERIENCE_MARKETS = [
  { title: "East and Southeast Asia (ESEA)", countries: ["Singapore", "China", "Hong Kong", "Malaysia", "Thailand"] },
  { title: "Middle East", countries: ["UAE", "Saudi Arabia"] },
  { title: "SAARC Region", countries: ["India", "Sri Lanka", "Republic of Maldives"] },
  { title: "Export Destinations", countries: ["United States of America", "Europe"] },
];

// Splits a field entry into a date label (column) and its remaining text, so
// the date is shown once. Dated entries carry `date`; the two year-only
// entries end in ", YYYY" in the source text.
function fieldParts(item) {
  if (item.date) return { label: <time dateTime={item.datetime}>{item.date}</time>, text: item.text.replace(/,\s*$/, "") };
  const m = item.text.match(/^(.*?),\s*((?:19|20)\d\d)$/);
  return m ? { label: m[2], text: m[1] } : { label: "", text: item.text };
}

// PDF p.4 profile with user-approved experience groups and destinations.
export default function RahimIyazPage() {
  // Person node: jobTitle is the visible "Managing Director" (p.4). worksFor
  // points at the homepage's Organization @id. No sameAs / alumniOf, and the
  // CLIENT_CONFIRMATION_REQUIRED qualification string is kept out of schema.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: MD.name,
    jobTitle: MD.role,
    url: `${SITE_URL}/about/rahim-iyaz`,
    image: `${SITE_URL}${MD.portrait.src}`,
    worksFor: { "@id": ORG_ID },
  };

  return (
    <div className="mx-auto max-w-7xl px-5 pb-14 pt-6 sm:px-8 sm:pb-20 sm:pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: "About", href: "/about" }, { label: "Rahim Iyaz", href: "/about/rahim-iyaz" }]} />

      <div className="mt-6 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* order-last on mobile: the H1 and profile lead; portrait follows. */}
        <div className="order-last max-w-sm lg:order-first lg:max-w-none">
          {/* Natural 853x1280 source portrait: intrinsic width/height, no crop. */}
          <Image
            src={MD.portrait.src}
            alt={MD.portrait.alt}
            width={MD.portrait.width}
            height={MD.portrait.height}
            priority
            quality={90}
            sizes="(min-width: 1024px) 420px, 384px"
            className="h-auto w-full rounded-xl"
          />
        </div>

        <div className="max-w-2xl">
          <p className="kicker mb-3 text-brandred">{MD.role}</p>
          <h1>
            <span className="sr-only">{MD.name}</span>
            <RahimSignature className="max-w-[18rem]" sizes="288px" />
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink">{MD_LEAD}</p>

          {/* CLIENT_CONFIRMATION_REQUIRED: the source renders this credential two
              ways (p.4: "PPIBAMI (IIFT), CBLR F-Card" vs the p.60 infographic:
              "FTP-IBAMI (IIFT), F-Card Qualified"). Uses p.4 wording in the user-confirmed order. */}
          <p className="kicker mt-6 text-navy/70">Qualifications</p>
          <p className="mt-1 text-base font-medium leading-relaxed text-ink">{MD.qualifications}</p>

          <section aria-labelledby="md-social-heading" className="mt-8">
            <h2 id="md-social-heading" className="font-display text-lg font-semibold text-ink">Follow our MD’s Social Media Handles</h2>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {SOCIAL_LINKS.map(({ label, handle, href, icon: Icon, whatsapp }, index) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={`${label}: ${handle}`} aria-label={`${label}: ${handle} (opens in a new tab)`} className={`flex min-h-14 items-center gap-3 rounded-lg border px-3 py-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${whatsapp ? "border-green-700/30 bg-green-50 text-green-800 hover:border-green-700 hover:bg-green-100 focus-visible:outline-green-700" : "border-navy/20 text-navy hover:border-navy hover:bg-navy/5 focus-visible:outline-navy"} ${index < 4 ? "justify-center" : "col-span-2 flex-wrap sm:flex-nowrap"}`}>
                  {Icon ? <Icon className="h-5 w-5 shrink-0" aria-hidden="true" /> : <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.4-8.5L.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20Z" /></svg>}
                  <span className={index < 4 ? "sr-only" : "min-w-0 flex-1"}>
                    <span className="block text-sm font-semibold">{label}</span>
                    <span className={`block break-words text-xs leading-relaxed ${whatsapp ? "text-green-800/80" : "text-slatey"}`}>{handle}</span>
                  </span>
                  {index >= 4 && <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />}
                </a>
              ))}
            </div>
          </section>

          <div className="mt-10 border-t-2 border-navy">
            <section aria-labelledby="role" className="grid gap-2 border-b border-hairline py-6 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <h2 id="role" className="font-display text-lg font-bold text-ink">Role</h2>
              <ul className="space-y-1.5 text-base leading-relaxed text-ink/85">
                <li>Managing Director, PORTMATRIX</li>
                <li>F-Card qualified Customs Broker</li>
              </ul>
            </section>

            <section aria-labelledby="experience" className="grid gap-2 border-b border-hairline py-6 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <h2 id="experience" className="font-display text-lg font-bold text-ink">Experience</h2>
              <ul className="space-y-3 text-base leading-relaxed text-ink/85">
                <li>Vintage experience in the foreign trade since 1996.</li>
                <li>
                  Worked extensively in the international markets:
                  <div className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                    {EXPERIENCE_MARKETS.map((group) => (
                      <div key={group.title}>
                        <h3 className="font-display font-bold text-ink">{group.title}:</h3>
                        <ul className="mt-2 list-[circle] space-y-1 pl-5">
                          {group.countries.map((country) => (
                            <li key={country}>{country}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </li>
                <li>
                  Having worked with India&rsquo;s largest banking group State Bank of India in Risk Mitigation
                  Management.
                </li>
              </ul>
            </section>

            <section aria-labelledby="training-roles" className="grid gap-2 border-b border-hairline py-6 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <h2 id="training-roles" className="font-display text-lg font-bold text-ink">Training roles</h2>
              <p className="text-base leading-relaxed text-ink/85">
                Authorised Resource Person in export training for the Govt. of India&ndash;MSME, EDII-TN, TNAPEx,
                FIEO, Alagappa University.
              </p>
            </section>
          </div>

          {/* "In the field": dated, ruled list, newest first; each
              entry's date/year moves into the left column. */}
          <section aria-labelledby="in-the-field" className="mt-12">
            <h2 id="in-the-field" className="h3 text-ink">In the field</h2>
            <ul className="mt-5 divide-y divide-hairline border-y border-hairline">
              {[...MD_IN_THE_FIELD].sort(newestFirst).map((item) => {
                const { label, text } = fieldParts(item);
                return (
                  <li key={item.text + (item.date || "")} className="py-4 sm:grid sm:grid-cols-[9rem_1fr] sm:gap-8">
                    <p className="text-sm font-semibold text-brandred sm:pt-0.5">{label}</p>
                    <p className="mt-1 text-base leading-relaxed text-ink/85 sm:mt-0">
                      {text}
                      {" — "}
                      <Link href={item.link.href} className={linkClass}>
                        {item.link.label}
                      </Link>
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>

      <div className="mt-14">
        <RelatedServices
          title="Related"
          items={[
            { title: "About PORTMATRIX", href: "/about" },
            { title: "Training Events", href: "/riit/training-events" },
            { title: "RIIT — Export Training & Research", href: "/riit" },
            { title: "China Import Sourcing", href: "/china-import-sourcing" },
          ]}
        />
      </div>
    </div>
  );
}
