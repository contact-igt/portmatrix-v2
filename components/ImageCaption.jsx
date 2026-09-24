// Shared documentary-photo caption: rendered below the image, never
// overlaid/truncated. Names, dates and institutions in these captions are
// trust evidence — they must stay fully legible, not cropped by a gradient
// scrim or a line-clamp.
export default function ImageCaption({ children, className = "" }) {
  return (
    <p className={`mt-2.5 text-[13px] leading-snug text-slatey ${className}`}>
      {children}
    </p>
  );
}
