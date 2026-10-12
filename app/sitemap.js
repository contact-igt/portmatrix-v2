const SITE_URL = "https://www.portmatrix.in";

// Only routes that actually exist and render are listed here. The full
// planned route list (32 pages) is in docs/SEO_AEO_GEO_ARCHITECTURE.md —
// each entry gets added to this array as its page is built (M2B onward),
// not before, so the sitemap never advertises a URL that 404s.
const ROUTES = [
  { path: "/" },
  { path: "/about" },
  { path: "/about/rahim-iyaz" },
  { path: "/services" },
  { path: "/services/export-handholding" },
  { path: "/services/export-handholding/business-setup-registration" },
  { path: "/services/export-handholding/pre-export-planning" },
  { path: "/services/export-handholding/buyer-development-commercial-negotiations" },
  { path: "/services/export-handholding/pre-shipment-procedures" },
  { path: "/services/export-handholding/shipment-procedures" },
  { path: "/services/export-handholding/post-shipment-realisation" },
  { path: "/china-import-sourcing" },
  { path: "/china-import-sourcing/canton-fair" },
  { path: "/services/licensed-customs-broker" },
  { path: "/services/export-import-clearance" },
  { path: "/services/freight-forwarding-logistics" },
  { path: "/services/msme-insurance" },
  { path: "/services/moowr" },
  { path: "/services/advance-authorisation" },
  { path: "/services/epcg" },
  { path: "/services/sez" },
  { path: "/services/ftwz" },
  { path: "/services/eou" },
  { path: "/services/aeo" },
  { path: "/services/nri-baggage-clearance" },
  { path: "/services/postal-export" },
  { path: "/services/e-commerce-export" },
  { path: "/riit" },
  { path: "/riit/courses" },
  { path: "/riit/training-events" },
  { path: "/media" },
  { path: "/contact" },
];

export default function sitemap() {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
  }));
}
