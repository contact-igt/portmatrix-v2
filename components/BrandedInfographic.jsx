import Image from "next/image";
import ImageCaption from "./ImageCaption";

// A source infographic with ONLY its obsolete PORTMATRIX logo covered by the
// V6 logo. The original PNG is never edited (CLAUDE.md): the frame renders
// at the image's exact aspect ratio, so the patch can be positioned in
// percentages of the measured old-logo box (pixels in the source file,
// docs/FINAL_SOURCE_VISUAL_COVERAGE.md). Nothing else in the artwork —
// text, numbers, icons, arrows, order, colours — is touched.
//
// Dense artwork gets a min width on small screens and scrolls sideways
// inside its own frame, never the page.
const V6_RATIO = 954 / 170;

export default function BrandedInfographic({
  src,
  width,
  height,
  logoBox, // [x, y, w, h] of the old logo, in source-image pixels
  patchBg = "#ffffff",
  // Where the artwork behind the old logo is not flat (a sky/glow gradient),
  // pass the source's own colours sampled just outside the patch — 11 evenly
  // spaced stops along its top and bottom edges. The patch then blends
  // top→bottom between them instead of showing a flat rectangle.
  edgeTop,
  edgeBottom,
  alt,
  caption,
  minWidth = 720,
  priority = false,
  className = "",
}) {
  // A few px of padding so no edge of the old mark shows around the patch.
  const PAD = 6;
  const [x, y, w, h] = [logoBox[0] - PAD, logoBox[1] - PAD, logoBox[2] + PAD * 2, logoBox[3] + PAD * 2];
  // Feather only the padding band (outside the measured old-logo box) so the
  // patch dissolves into the real background instead of ending in a seam.
  const fx = (PAD / w) * 100;
  const fy = (PAD / h) * 100;
  const feather = `linear-gradient(to right, transparent, #000 ${fx}%, #000 ${100 - fx}%, transparent), linear-gradient(to bottom, transparent, #000 ${fy}%, #000 ${100 - fy}%, transparent)`;
  const pct = (v, total) => `${(v / total) * 100}%`;
  // V6 fitted inside the patch at its native proportions, left-aligned like
  // the original lockup.
  const logoH = Math.min(h * 0.86, (w * 0.96) / V6_RATIO);

  return (
    <figure className={className}>
      <div className="overflow-x-auto border border-hairline bg-white">
        <div
          className="relative w-full"
          style={{ aspectRatio: `${width} / ${height}`, minWidth: `min(${minWidth}px, ${width}px)` }}
        >
          <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 1280px) 1200px, 100vw" className="object-contain" />
          <span
            aria-hidden="true"
            className="absolute flex items-center"
            style={{
              left: pct(x, width),
              top: pct(y, height),
              width: pct(w, width),
              height: pct(h, height),
              // inset the logo past the feathered band so it stays fully opaque
              paddingLeft: pct(PAD, width),
              background: edgeBottom ? `linear-gradient(to right, ${edgeBottom.join(", ")})` : patchBg,
              WebkitMaskImage: feather,
              maskImage: feather,
              WebkitMaskComposite: "source-in",
              maskComposite: "intersect",
            }}
          >
            {edgeTop && (
              <span
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to right, ${edgeTop.join(", ")})`,
                  WebkitMaskImage: "linear-gradient(to bottom, #000, transparent)",
                  maskImage: "linear-gradient(to bottom, #000, transparent)",
                }}
              />
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/source/branding/portmatrix-logo-v6.svg"
              alt=""
              className="relative w-auto max-w-none"
              style={{ height: `${(logoH / h) * 100}%` }}
            />
          </span>
        </div>
      </div>
      {caption && <ImageCaption>{caption}</ImageCaption>}
    </figure>
  );
}
