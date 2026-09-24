import Image from "next/image";

// Official PORTMATRIX logo, extracted losslessly from the approved source PDF
// (docs/source/PORTMATRIX-website-source.pdf, p.1). Do not redraw or recreate
// this mark in code — see CLAUDE.md.
const LOGO_SRC = "/images/source/branding/portmatrix-logo-primary.jpg";
const LOGO_W = 1151;
const LOGO_H = 494;

// The source file has a flat white background (JPEG, no transparency).
// On dark backgrounds we present it inside a small white card rather than
// altering the image itself.
export default function Logo({ variant = "dark", className = "", priority = false }) {
  const img = (
    <Image
      src={LOGO_SRC}
      width={LOGO_W}
      height={LOGO_H}
      alt="PortMatrix — Excellence in Compliance"
      priority={priority}
      className="h-9 w-auto sm:h-10"
    />
  );

  if (variant === "light") {
    return (
      <div
        className={`inline-flex items-center bg-white px-4 py-2.5 ${className}`}
      >
        {img}
      </div>
    );
  }

  return <div className={`inline-flex items-center ${className}`}>{img}</div>;
}
