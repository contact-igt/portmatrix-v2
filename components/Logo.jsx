// Official PortMatrix Logo V6 — vector artwork converted 1:1 from the client-
// supplied "PortMatrix Logo V6.pdf" (pdftocairo -svg, viewBox trimmed to the
// artwork bounds only; no redraw, recolour or retyping). This is the sole
// PORTMATRIX logo. Do not recreate it in code — see CLAUDE.md.
const LOGO_SRC = "/images/source/branding/portmatrix-logo-v6.svg";
const LOGO_W = 954;
const LOGO_H = 170;

// The V6 strapline is black artwork, so on dark backgrounds the logo sits on
// a white plate rather than being recoloured.
export default function Logo({ variant = "dark", className = "", priority = false }) {
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGO_SRC}
      width={LOGO_W}
      height={LOGO_H}
      alt="PortMatrix"
      fetchPriority={priority ? "high" : undefined}
      // max-w-none + shrink-0: never let a flex parent squash the artwork's
      // aspect ratio.
      className="h-9 w-auto max-w-none shrink-0 sm:h-11"
    />
  );

  if (variant === "light") {
    return (
      <div className={`inline-flex shrink-0 items-center bg-white px-4 py-3 ${className}`}>
        {img}
      </div>
    );
  }

  return <div className={`inline-flex shrink-0 items-center ${className}`}>{img}</div>;
}
