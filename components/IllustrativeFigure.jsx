import Image from "next/image";
import { ILLUSTRATIVE_IMAGES } from "@/lib/illustrative-imagery";

// Supporting imagery; provenance is recorded in docs/PORTMATRIX_IMAGE_MAP.md.
export default function IllustrativeFigure({ image, className = "" }) {
  const asset = ILLUSTRATIVE_IMAGES[image];
  if (!asset) return null;
  return (
    <figure className={`min-w-0 ${className}`}>
      <Image
        src={asset.src}
        alt={asset.alt}
        width={1536}
        height={1024}
        sizes="(min-width: 1280px) 480px, (min-width: 1024px) 40vw, (min-width: 640px) 60vw, 100vw"
        className="h-auto w-full border border-hairline object-cover"
      />
      <figcaption className="caption mt-3 border-t border-hairline pt-2.5 text-slatey">
        {asset.caption}
      </figcaption>
    </figure>
  );
}
