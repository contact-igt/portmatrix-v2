# Final Source Visual Coverage

Source: `PORTMATRIX Website Final (2).pdf` (same file as `docs/source/PORTMATRIX-website-source.pdf`, checksum 21fe00cf…). Logo authority: `PortMatrix Logo V6.pdf`.
Inventory method: `pdfimages -list` (74 entries = 69 images + 5 soft masks) plus rendering all 87 pages. No visuals exist outside the embedded images; tables, text flow charts and arrows are text. p.17 and p.71 are the same photo, so there are 68 unique images. All 68 exist in `public/images/source/` (matched by md5).

**How the V6 logo correction works:** a source infographic's PNG file is never edited. `components/BrandedInfographic.jsx` renders the original at its exact aspect ratio and covers **only** the measured old-logo box (pixels in the source file, plus 6 px padding) with the V6 artwork. All source text, numbers, icons, arrows, order and colours stay untouched. Patch blending (client-review cleanup): the 6 px padding band around each patch is feathered into the real background, and the V6 logo is inset so it stays fully opaque. Where the artwork behind the old logo is a gradient (services overview sky, Phase 3 blue glow, hub corner shading), the patch fill blends between the source’s own colours, sampled just outside the patch on its top and bottom edges. Nothing outside the old-logo box and its 6 px band is recoloured.

**Rights substitutes:** no stock, AI or web imagery was introduced. The native substitute is the page's own source text, tables and flow charts. These introduce no new information.

| PDF PAGE | VISUAL DESCRIPTION | ASSET (`public/images/source/…`) | TYPE | DESTINATION ROUTE | DESTINATION SECTION | STATUS | LOGO STATUS | CONTEXT VERIFIED | NOTES |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Old PORTMATRIX logo ("Excellence in Compliance") | branding/portmatrix-logo-primary.jpg | logo | all routes | Header, drawer, footer, favicon, OG, JSON-LD | USED_WITH_V6_BRAND_CORRECTION | V6 replaces OLD | Yes | Superseded by `branding/portmatrix-logo-v6.svg`/`.png`, `portmatrix-og-v6.png`, `app/icon.png`, `app/apple-icon.png`. The original file is kept, never rendered |
| 2 | Services overview infographic | branding/portmatrix-services-overview-infographic.png | source infographic | /services | "Services overview" | USED_WITH_V6_BRAND_CORRECTION | OLD covered → V6 (box 33,33,444,81) | Yes | Contains stock plane/ship imagery inside the source artwork |
| 4 | MD portrait | md/rahim-iyaz-portrait.png | portrait | /, /about, /about/rahim-iyaz | MD profile | USED_ORIGINAL | NONE | Yes | Native 2:3, not cropped |
| 4 | MD signature / "Customs Law Practitioner" graphic (base) | md/rahim-iyaz-signature-base.png | logo (signature) | /about/rahim-iyaz | Under the portrait | USED_ORIGINAL | NONE | Yes | Used as the CSS background, drawn through its own mask |
| 4 | Soft mask for the signature | md/rahim-iyaz-signature-mask.png | mask | /about/rahim-iyaz | Under the portrait | USED_ORIGINAL | NONE | Yes | CSS `mask-image` (luminance) |
| 7 | Export Handholding overview infographic | export-handholding/export-handholding-hero-infographic.png | source infographic | /services/export-handholding | Below the intro | USED_WITH_V6_BRAND_CORRECTION | OLD covered → V6 (111,32,608,110) | Yes | Contains a stock handshake/port image inside the source artwork |
| 8 | Phase 1 infographic | export-handholding/phase1-business-setup-infographic.png | source infographic | /services/export-handholding/business-setup-registration | Phase figure | USED_WITH_V6_BRAND_CORRECTION | OLD covered → V6 (33,18,484,88) | Yes | Scrolls sideways on mobile (min width 720px) |
| 9 | Phase 2 infographic | export-handholding/phase2-pre-export-planning-infographic.png | source infographic | /services/export-handholding/pre-export-planning | Phase figure | USED_WITH_V6_BRAND_CORRECTION | OLD covered → V6 (30,17,481,88) | Yes | |
| 11 | Phase 3 infographic | export-handholding/phase3-buyer-development-infographic.png | source infographic | /services/export-handholding/buyer-development-commercial-negotiations | Phase figure | USED_WITH_V6_BRAND_CORRECTION | OLD covered → V6 (40,16,482,89) | Yes | |
| 12 | Phase 4 infographic | export-handholding/phase4-pre-shipment-infographic.png | source infographic | /services/export-handholding/pre-shipment-procedures | Phase figure | USED_WITH_V6_BRAND_CORRECTION | OLD covered → V6 (32,17,490,89) | Yes | |
| 14 | Phase 5 infographic | export-handholding/phase5-shipment-procedures-infographic.png | source infographic | /services/export-handholding/shipment-procedures | Phase figure | USED_WITH_V6_BRAND_CORRECTION | OLD covered → V6 (38,20,483,86) | Yes | |
| 15 | Phase 6 infographic | export-handholding/phase6-post-shipment-infographic.png | source infographic | /services/export-handholding/post-shipment-realisation | Phase figure | USED_WITH_V6_BRAND_CORRECTION | OLD covered → V6 (36,18,486,88) | Yes | |
| 16 | RIIT logo | branding/riit-logo.png | logo (allied institute) | /riit | Page header | USED_ORIGINAL | NONE (RIIT mark) | Yes | 412×109, shown at 48px height |
| 17 | MSME TN officials training (same photo as p.71) | riit/msme-tn-officials-training-2023-03-26.png | event-documentary | /riit/training-events | 26 March 2023 | USED_ORIGINAL | NONE | Yes | Duplicate of p.71 |
| 19 | China sourcing section photo (uncredited) | china/china-sourcing-section-photo-uncredited.png | third-party illustration | /china-import-sourcing | Page body | SUBSTITUTED_FOR_WATERMARK_OR_RIGHTS_REASON | NONE | Yes | Uncredited, 360px. Replaced by the genuine 1974 / 2015 China evidence photos and the source text |
| 20 | Founder Hong Kong delegation, May 1974 | china/founder-hong-kong-delegation-1974.png | genuine evidence | /, /china-import-sourcing | China history | USED_ORIGINAL | NONE | Yes | Native 1289:816, not cropped |
| 21 | MD China factory visit, 2015 | china/rahim-iyaz-china-factory-2015.png | genuine evidence | /, /china-import-sourcing | China sourcing | USED_ORIGINAL | NONE | Yes | |
| 23 | China Incharge Mr. Azeez with USA clients, Canton Fair 2025 | china/azeez-usa-clients-canton-fair-2025.png | genuine evidence | /, /china-import-sourcing/canton-fair | Canton Fair | USED_ORIGINAL | NONE | Yes | |
| 25 | Canton Fair 2014 | china/rahim-iyaz-riaz-malik-canton-fair-2014.png | genuine evidence | /china-import-sourcing/canton-fair | Evidence gallery | USED_ORIGINAL | NONE | Yes | |
| 26 | Canton Fair 2015, Indian clients group | china/canton-fair-indian-clients-group-2015.png | genuine evidence | /china-import-sourcing/canton-fair | Evidence gallery | USED_ORIGINAL | NONE | Yes | |
| 26 | China sourcing at Canton Fair, 2015 | china/china-sourcing-canton-fair-2015.png | genuine evidence | /china-import-sourcing/canton-fair | Evidence gallery | USED_ORIGINAL | NONE | Yes | |
| 27 | Customs broker illustration (Shutterstock watermark) | stock/customs-broker-stock-shutterstock.png | watermarked, licensing risk | /services/licensed-customs-broker | Page body | SUBSTITUTED_FOR_WATERMARK_OR_RIGHTS_REASON | NONE | Yes | Commercial watermark 2172351753; typographic definition layout |
| 28 | EXIM clearance illustration (icegate.gov.in) | stock/exim-clearance-stock.png | third-party illustration | /services/export-import-clearance | Page body | SUBSTITUTED_FOR_WATERMARK_OR_RIGHTS_REASON | NONE | Yes | Genuine NL 2024 / USA 2025 evidence and the native workflow used instead |
| 30 | Netherlands 2024 hotel-supplies inspection | customs/hotel-supplies-inspection-netherlands-2024.png | genuine evidence | /, /services/export-import-clearance | Export - Import Clearance | USED_ORIGINAL | NONE | Yes | No longer the sitewide OG image |
| 31 | USA 2025 export shipment inspection | customs/export-shipment-inspection-usa-2025.png | genuine evidence | /, /services/export-import-clearance | Export - Import Clearance | USED_ORIGINAL | NONE | Yes | |
| 32 | Freight/logistics illustration (iStock watermark) | stock/freight-logistics-stock.png | watermarked, licensing risk | /services/freight-forwarding-logistics | Page body | SUBSTITUTED_FOR_WATERMARK_OR_RIGHTS_REASON | NONE | Yes | iStock "Tryaging / 1273907220"; source workflow shown as a native ProcessFlow |
| 35 | Insurance marketing graphic | stock/msme-insurance-stock-graphic.png | third-party illustration | /services/msme-insurance | Page body | SUBSTITUTED_FOR_WATERMARK_OR_RIGHTS_REASON | NONE | Yes | Contains third-party taglines; native product list and tables |
| 39 | MOOWR warehouse (credited ChatGPT) | stock/moowr-aigenerated-warehouse.png | third-party illustration (AI) | /services/moowr | Page body | SUBSTITUTED_FOR_WATERMARK_OR_RIGHTS_REASON | NONE | Yes | Native flow chart and comparison table |
| 42 | Advance Authorisation (credited ChatGPT) | stock/advance-authorisation-aigenerated.png | third-party illustration (AI) | /services/advance-authorisation | Page body | SUBSTITUTED_FOR_WATERMARK_OR_RIGHTS_REASON | NONE | Yes | Native process layout |
| 45 | EPCG machine (Pexels) | stock/epcg-stock-pexels-machine.png | third-party illustration | /services/epcg | Page body | SUBSTITUTED_FOR_WATERMARK_OR_RIGHTS_REASON | NONE | Yes | Native process layout |
| 48 | SEZ cityscape (sezindia.gov.in) | stock/sez-stock-sezindia-cityscape.png | third-party illustration | /services/sez | Page body | SUBSTITUTED_FOR_WATERMARK_OR_RIGHTS_REASON | NONE | Yes | Native scheme layout |
| 50 | FTWZ warehouse (Pexels) | stock/ftwz-stock-pexels-warehouse.png | third-party illustration | /services/ftwz | Page body | SUBSTITUTED_FOR_WATERMARK_OR_RIGHTS_REASON | NONE | Yes | Native workflow and table |
| 53 | EOU aerial factory (uncredited) | stock/eou-aerial-factory-uncredited.png | third-party illustration | /services/eou | Page body | SUBSTITUTED_FOR_WATERMARK_OR_RIGHTS_REASON | NONE | Yes | Native scheme layout |
| 55 | AEO India official logo | stock/aeo-india-official-logo.png | third-party government mark | /services/aeo | Page body | SUBSTITUTED_FOR_WATERMARK_OR_RIGHTS_REASON | NONE | Yes | Government programme mark, not a PORTMATRIX asset; typographic layout |
| 55 | Soft mask for the AEO logo | stock/aeo-india-official-logo-mask.png | mask | /services/aeo | Page body | SUBSTITUTED_FOR_WATERMARK_OR_RIGHTS_REASON | NONE | Yes | Belongs to the row above |
| 58 | Airport baggage signage (uncredited) | customs/baggage-clearance-airport-signage-uncredited.png | third-party illustration | /services/nri-baggage-clearance | Page body | SUBSTITUTED_FOR_WATERMARK_OR_RIGHTS_REASON | NONE | Yes | Rule/table-first native layout |
| 60 | NRI baggage allowance infographic | customs/baggage-allowance-infographic.png | source infographic | /services/nri-baggage-clearance | After the rules | USED_WITH_V6_BRAND_CORRECTION | OLD covered → V6 (42,33,600,112) | Yes | CLIENT_CONFIRMATION_REQUIRED: its MD credential line ("…IBAMI (IIFT), F-Card Qualified") differs from p.4 |
| 64 | Postal export infographic | logistics/postal-export-infographic.png | source infographic | /services/postal-export | Below the intro | USED_WITH_V6_BRAND_CORRECTION | OLD covered → V6 (54,47,687,127) | Yes | Contains the India Post mark, as in the source |
| 65 | E-commerce export graphic (Gemini mark) | stock/ecommerce-export-stock-graphic.png | watermarked / AI | /services/e-commerce-export | Page body | SUBSTITUTED_FOR_WATERMARK_OR_RIGHTS_REASON | NONE | Yes | Gemini AI mark; native platform list |
| 67 | First export training flyer, 2 Aug 2020 | events/first-export-training-flyer-2020-08-02.png | event-documentary (flyer) | /riit/training-events | 2 August 2020 | USED_ORIGINAL | NONE | Yes | |
| 68 | RIIT inauguration, 14 Nov 2023 | riit/riit-inauguration-2023-11-14.png | event-documentary | /, /riit, /riit/training-events | RIIT | USED_ORIGINAL | NONE | Yes | |
| 68 | Soft mask for the inauguration photo | riit/riit-inauguration-2023-11-14-mask.png | mask | as above | as above | USED_ORIGINAL | NONE | Yes | Alpha channel of the row above. Near-opaque, so the rendered extracted image is visually identical; the mask file is not referenced separately |
| 68 | Certificate presentation photograph | credentials/certificate-appreciation-handoff-photo.png | event-documentary | /riit/training-events | Certificate of Appreciation (28 Nov 2023) | USED_ORIGINAL | NONE | Yes | Added this pass; neutral alt text, no one named |
| 69 | Certificate of Appreciation, MSME DFO | credentials/certificate-of-appreciation-msme-dfo-2023-11-28.png | certificate-document | /, /riit/training-events | Credibility / Certificate | USED_ORIGINAL | NONE | Yes | Date read off the certificate |
| 69 | Soft mask for the certificate | credentials/certificate-of-appreciation-msme-dfo-2023-11-28-mask.png | mask | as above | as above | USED_ORIGINAL | NONE | Yes | Alpha channel of the row above. Near-opaque; not referenced separately |
| 70 | FIEO / FaME-TN, 20 Dec 2022 | riit/fieo-training-sakthivel-unnikrishnan-2022-12-20.png | event-documentary | /, /riit/training-events | 20 December 2022 | USED_ORIGINAL | NONE | Yes | |
| 70 | Soft mask for the FIEO photo | riit/fieo-training-sakthivel-unnikrishnan-2022-12-20-mask.png | mask | as above | as above | USED_ORIGINAL | NONE | Yes | Alpha channel of the row above. Near-opaque; not referenced separately |
| 70 | FIEO Women Entrepreneurs, speaker | riit/fieo-women-entrepreneurs-training-2023-02-09-speaker.png | event-documentary | /riit/training-events | 9 February 2023 | USED_ORIGINAL | NONE | Yes | |
| 71 | FIEO Women Entrepreneurs (captioned photo) | riit/fieo-women-entrepreneurs-training-2023-02-09-audience.png | event-documentary | /riit/training-events | 9 February 2023 | USED_ORIGINAL | NONE | Yes | Added this pass |
| 71 | MSME TN officials training, 26 Mar 2023 | riit/msme-tn-officials-training-2023-03-26.png | event-documentary | /riit/training-events | 26 March 2023 | USED_ORIGINAL | NONE | Yes | Same photo as p.17 |
| 72 | Shiju Thomas IAS facilitation | events/shiju-thomas-ias-facilitation-2023-03-26.png | event-documentary | /riit/training-events | 26 March 2023 | USED_ORIGINAL | NONE | Yes | |
| 72 | Deputy DGFT session, 19 Nov 2023 | riit/deputy-dgft-reddy-session-2023-11-19.png | event-documentary | /, /riit/training-events | 19 November 2023 | USED_ORIGINAL | NONE | Yes | |
| 73 | Postal export session, 16 Nov 2023 | riit/postal-export-session-kalyani-2023-11-16.png | event-documentary | /riit/training-events | 16 November 2023 | USED_ORIGINAL | NONE | Yes | |
| 73 | FSSAI session, Nov 2023 | riit/fssai-session-rohini-2023-11.png | event-documentary | /riit/training-events | November 2023 | USED_ORIGINAL | NONE | Yes | |
| 74 | ECGC session, Nov 2023 | riit/ecgc-session-subhavignesh-2023-11.png | event-documentary | /riit/training-events | November 2023 | USED_ORIGINAL | NONE (RIIT mark) | Yes | |
| 74 | EIA session, Nov 2023 | riit/eia-session-antony-2023-11.png | event-documentary | /riit/training-events | November 2023 | USED_ORIGINAL | NONE (RIIT mark) | Yes | |
| 75 | India Post training, 25 Jan 2024 | riit/india-post-training-2024-01-25.png | event-documentary | /riit/training-events | 25 January 2024 | USED_ORIGINAL | NONE | Yes | |
| 75 | Agriculture export training, EDII-TN, 12 Aug 2025 | riit/agriculture-export-training-edii-tn-2025-08-12.png | event-documentary | /, /riit/training-events | 12 August 2025 | USED_ORIGINAL | NONE | Yes | |
| 76 | MSME-DFO MDP programme, 2025 | riit/msme-dfo-mdp-programme-2025.png | event-documentary | /riit/training-events | 2025 | USED_ORIGINAL | NONE (RIIT mark) | Yes | |
| 76 | Agricultural export procedures, 13 May 2026 | riit/agricultural-export-procedures-session-2026-05-13.png | event-documentary | /riit/training-events | 13 May 2026 | USED_ORIGINAL | NONE | Yes | |
| 77 | Alagappa University MoU, 31 Oct 2022 | events/alagappa-university-mou-2022-10-31.png | event-documentary | /, /riit, /riit/training-events | RIIT academic partnership | USED_ORIGINAL | NONE | Yes | Caption says HOD where the source says HOB: CLIENT_CONFIRMATION_REQUIRED |
| 78 | Loyola College seminar flyer | events/loyola-college-seminar-flyer-2025-08-22.png | event-documentary (flyer) | /riit/training-events | 22 August 2025 | USED_ORIGINAL | NONE | Yes | Added this pass |
| 79 | Loyola College seminar photo | events/loyola-college-seminar-photo-2025-08-22.png | event-documentary | /riit/training-events | 22 August 2025 | USED_ORIGINAL | NONE | Yes | |
| 79 | DG Vaishnav College flyer | events/dg-vaishnav-college-flyer-2025-08-04.png | event-documentary (flyer) | /riit/training-events | 4 August 2025 | USED_ORIGINAL | NONE | Yes | Added this pass |
| 80 | DG Vaishnav College photo | events/dg-vaishnav-college-photo-2025-08-04.png | event-documentary | /riit/training-events | 4 August 2025 | USED_ORIGINAL | NONE | Yes | |
| 80 | MEPCO Engineering College flyer | events/mepco-engineering-college-flyer-2024-09-11.png | event-documentary (flyer) | /riit/training-events | 11 September 2024 | USED_ORIGINAL | NONE | Yes | Added this pass |
| 81 | MEPCO Engineering College photo | events/mepco-engineering-college-photo-2024-09-11.png | event-documentary | /riit/training-events | 11 September 2024 | USED_ORIGINAL | NONE | Yes | |
| 81 | SIET / JBAS College, 12 Jul 2023 | events/siet-jbas-college-photo-2023-07-12.png | event-documentary | /riit/training-events | 12 July 2023 | USED_ORIGINAL | NONE | Yes | Timeline now sorted by date |
| 82 | Dawoodi Bohra community workshop, 8 Sep 2024 | events/dawoodi-bohra-workshop-2024-09-08.png | event-documentary | /riit/training-events | 8 September 2024 | USED_ORIGINAL | NONE | Yes | |
| 82 | Indo-UAE Economic Forum, 9 Aug 2025 | events/indo-uae-economic-forum-2025-08-09.png | event-documentary | /riit/training-events | 9 August 2025 | USED_ORIGINAL | NONE | Yes | |
| 83 | Interview frame (agri show) | media/youtube-interview-agri-show-screenshot.png | genuine evidence (press) | /media | Interview | USED_ORIGINAL | NONE | Yes | Added this pass, beside the embedded video |
| 83 | Interview frame (studio) | media/youtube-interview-studio-screenshot.png | genuine evidence (press) | /media | Interview; VideoObject thumbnail | USED_ORIGINAL | NONE | Yes | Added visibly this pass; absolute thumbnail URL |
| 84 | Nanayam Vikatan article, 4 Feb 2024 | media/nanayam-vikatan-article-2024-02-04.png | genuine evidence (press) | /, /media | Press Coverage | USED_ORIGINAL | NONE | Yes | Readable size plus "Open full size" link on /media |
| 86 | Registered office lockup (old logo + address + CIN) | branding/portmatrix-registered-office-lockup.png | logo lockup / legal | /contact, /, footer | Contact block | FAITHFULLY_REBUILT_AS_NATIVE_UI | OLD not rendered; V6 used | Yes | Address and CIN rendered as text from this lockup and p.87 |

## Totals

| Status | Rows |
|---|---|
| USED_ORIGINAL | 47 (4 of these are soft-mask rows) |
| USED_WITH_V6_BRAND_CORRECTION | 11 (includes the p.1 logo) |
| FAITHFULLY_REBUILT_AS_NATIVE_UI | 1 |
| SUBSTITUTED_FOR_WATERMARK_OR_RIGHTS_REASON | 15 (includes the AEO soft mask) |
| CLIENT_CONFIRMATION_REQUIRED | 0 as a row status. Flagged in notes: the p.60 credential line and the p.77 HOB/HOD caption |
| **Total rows** | **74**, one per `pdfimages` entry (69 images + 5 soft masks) |
| UNACCOUNTED | 0 |

Every genuine / documentary photograph, portrait, certificate and press scan in the source (41 rows, one of them the p.17/p.71 duplicate) is rendered on a route that matches its source context.
