import Image from "next/image";
import ImageCaption from "./ImageCaption";

// Genuine-photo evidence block: image at a sensible aspect + caption below,
// never cropped destructively, never captioned with an inferred name/date
// that isn't in the source. `illustrative` labels stock/AI-sourced images
// so they're never mistaken for real PORTMATRIX evidence.
const VARIANTS = {
  documentary: { aspect: "aspect-[4/3]", frame: "overflow-hidden rounded-2xl border border-hairline bg-white", image: "object-cover" },
  portrait: { aspect: "aspect-[4/5]", frame: "overflow-hidden rounded-[1.5rem] border border-hairline bg-white", image: "object-cover" },
  infographic: { aspect: "", frame: "min-h-[14rem] overflow-hidden border border-hairline bg-white p-2 sm:min-h-[18rem]", image: "object-contain" },
  "source-illustration": { aspect: "aspect-[16/10]", frame: "overflow-hidden border border-hairline bg-mist p-2", image: "object-contain" },
  "document-scan": { aspect: "", frame: "min-h-[16rem] overflow-hidden border border-hairline bg-white p-3", image: "object-contain" },
  "wide-evidence": { aspect: "aspect-[16/9]", frame: "overflow-hidden rounded-2xl border border-hairline bg-white", image: "object-cover" },
  "contained-graphic": { aspect: "", frame: "min-h-[14rem] overflow-hidden border border-hairline bg-white p-2", image: "object-contain" },
};

export default function EvidenceFigure({
  src,
  alt,
  caption,
  aspect,
  variant = "documentary",
  illustrative = false,
  priority = false,
  sizes = "(min-width: 1024px) 600px, 100vw",
  className = "",
}) {
  const treatment = VARIANTS[variant] || VARIANTS.documentary;
  return (
    <figure className={className}>
      <div className={`relative w-full ${treatment.frame} ${aspect || treatment.aspect}`}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={treatment.image} />
      </div>
      <ImageCaption>
        {caption}
        {illustrative && <span className="ml-1.5 text-slatey/60">(illustrative)</span>}
      </ImageCaption>
    </figure>
  );
}
