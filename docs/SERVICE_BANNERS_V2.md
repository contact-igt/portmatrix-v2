# Generated service banners

Created with the built-in `image_gen` tool on 11 November 2026: one distinct 1536 × 1024 banner for each of the 18 service routes. The complete final prompts are saved in `SERVICE_BANNER_PROMPTS.json`. The contact sheet is `SERVICE_BANNER_PREVIEW.jpg`.

## Existing-image review

The previous banner set reused customs-documentation and industrial-campus scenes for multiple services. Other pages used documentary event photographs or a brand logo in the banner position. The new set gives each service a distinct subject while retaining a consistent editorial photographic style.

These are AI illustrations, not documentary photographs of PORTMATRIX employees, customers, offices, facilities or official scheme approvals. Each banner has a visible AI-illustration caption. No official logo was regenerated or incorporated in generated artwork.

## Files and implementation

- Web assets: `public/images/illustrative/services-v2/*.jpg` (18 images, approximately 5.3 MB total).
- Original generated PNGs: `output/imagegen/services-v2/*.png`.
- Image map and alt text: `lib/service-banner-images.js`.
- Renderer: existing `IllustrativeFigure` component, reused without new dependencies.
- Final prompts: `docs/SERVICE_BANNER_PROMPTS.json`.
- Route and asset checks: `docs/service-banner-verification.json`.

RIIT's supplied official logo remains separate from its AI training banner. Genuine China factory, export-inspection and MD photographs remain in their contextual sections. The India Post training photo is now in a dedicated training section on Postal Export. Source airport customs signage is shown in the customs-channels section on NRI Baggage Clearance.

## Review and verification

All 18 generated images were visually inspected for subject relevance, composition and visible generation defects, including a combined contact-sheet review. The production build passed. Route and asset checks are recorded separately.

The browser access host was unavailable. Desktop, tablet and mobile screenshot review could not be completed; no responsive visual verification is claimed. Existing responsive page-intro and image components are reused. Work remains local; nothing was deployed.

This report supersedes the banner-placement and shared-illustration descriptions in `SERVICE_IMAGE_REVIEW.md`; the original source-image references in that report remain valid.
