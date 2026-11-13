// Shared documentary-photo caption: rendered below the image, never
// overlaid/truncated. Names, dates and institutions in these captions are
// trust evidence — they must stay fully legible, not cropped by a gradient
// scrim or a line-clamp. 15px (caption scale), ruled off from the image.
export default function ImageCaption({ children, className = "" }) {
  return (
    <p className={`caption mt-3 border-t border-hairline pt-2.5 text-slatey ${className}`}>
      {children}
    </p>
  );
}
