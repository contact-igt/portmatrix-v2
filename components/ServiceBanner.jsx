import Image from "next/image";
import ImageCaption from "./ImageCaption";

// Documentary/source banners retain the complete photograph and its caption.
export default function ServiceBanner({ image }) {
  return (
    <figure className="mx-auto w-full max-w-lg">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 100vw"
        className="h-auto w-full border border-hairline"
      />
      <ImageCaption>{image.caption}</ImageCaption>
    </figure>
  );
}
