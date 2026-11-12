import { CHINA, OPERATIONAL_PROOF } from "./content";
import { TRAINING_EVENTS } from "./riit-data";

// Photo-only selection from docs/PORTMATRIX_IMAGE_MAP.md. Reuse the
// approved captions; omit flyers, scans, stock and generated illustrations.
const trainingPhotos = TRAINING_EVENTS.flatMap((event) => [
  event,
  ...(event.more || []).map((photo) => ({ ...photo, caption: photo.alt })),
]).filter((photo) => !/flyer|certificate-of-appreciation/.test(photo.src));

export const GALLERY_SECTIONS = [
  {
    id: "china",
    title: "China visits & Canton Fair",
    images: [
      ...Object.values(CHINA.images),
      {
        src: "/images/source/china/rahim-iyaz-riaz-malik-canton-fair-2014.png",
        width: 960, height: 720,
        alt: "Rahim Iyaz with Mr. Riaz and Mr. Malik at China Canton Fair, 2014",
        caption: "Our MD Mr. Rahim Iyaz with Mr. Riaz, MD of King's Group of Companies and Mr. Malik of Tirunelveli at China Canton Fair in 2014",
      },
      {
        src: "/images/source/china/canton-fair-indian-clients-group-2015.png",
        width: 960, height: 540,
        alt: "Canton Fair group with Indian clients, 2015",
        caption: "Canton Fair group with Indian Clients in 2015",
      },
      {
        src: "/images/source/china/china-sourcing-canton-fair-2015.png",
        width: 960, height: 720,
        alt: "China sourcing at Canton Fair, 2015",
        caption: "China sourcing at Canton Fair in 2015",
      },
    ],
  },
  { id: "shipments", title: "Shipment inspections", images: OPERATIONAL_PROOF.images },
  {
    id: "training", title: "RIIT & export training",
    images: trainingPhotos.filter((photo) => photo.src.includes("/riit/") || photo.src.includes("/credentials/")),
  },
  {
    id: "events", title: "Events & institutional engagements",
    images: trainingPhotos.filter((photo) => photo.src.includes("/events/")),
  },
];
