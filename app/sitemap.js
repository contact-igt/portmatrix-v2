const SITE_URL = "https://www.portmatrix.in";

// Only routes that actually exist and render are listed here. The full
// planned route list (32 pages) is in docs/SEO_AEO_GEO_ARCHITECTURE.md —
// each entry gets added to this array as its page is built (M2B onward),
// not before, so the sitemap never advertises a URL that 404s.
const ROUTES = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about/rahim-iyaz", changeFrequency: "monthly", priority: 0.6 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/export-handholding", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/export-handholding/business-setup-registration", changeFrequency: "yearly", priority: 0.6 },
  { path: "/services/export-handholding/pre-export-planning", changeFrequency: "yearly", priority: 0.6 },
  { path: "/services/export-handholding/buyer-development-commercial-negotiations", changeFrequency: "yearly", priority: 0.6 },
  { path: "/services/export-handholding/pre-shipment-procedures", changeFrequency: "yearly", priority: 0.6 },
  { path: "/services/export-handholding/shipment-procedures", changeFrequency: "yearly", priority: 0.6 },
  { path: "/services/export-handholding/post-shipment-realisation", changeFrequency: "yearly", priority: 0.6 },
  { path: "/china-import-sourcing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/china-import-sourcing/canton-fair", changeFrequency: "monthly", priority: 0.6 },
  { path: "/services/licensed-customs-broker", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/export-import-clearance", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/freight-forwarding-logistics", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/msme-insurance", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/moowr", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/advance-authorisation", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/epcg", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/sez", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/ftwz", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/eou", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/aeo", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/nri-baggage-clearance", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/postal-export", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/e-commerce-export", changeFrequency: "monthly", priority: 0.7 },
  { path: "/riit", changeFrequency: "monthly", priority: 0.8 },
  { path: "/riit/courses", changeFrequency: "monthly", priority: 0.7 },
  { path: "/riit/training-events", changeFrequency: "monthly", priority: 0.7 },
  { path: "/media", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.9 },
];

export default function sitemap() {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
