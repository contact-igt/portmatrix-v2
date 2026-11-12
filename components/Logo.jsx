// Client-supplied official artwork. Preserve its colours and transparent padding.
const LOGO_SRC = "/images/source/branding/PortMatrix_Logo.png";

export default function Logo({ variant = "dark", className = "", priority = false }) {
  return (
    <div className={`inline-flex shrink-0 items-center ${variant === "light" ? "overflow-hidden rounded-xl bg-white px-4" : "h-11"} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOGO_SRC}
        width={2172}
        height={724}
        alt="PortMatrix"
        fetchPriority={priority ? "high" : undefined}
        className="h-auto w-[230px] max-w-none shrink-0 sm:w-[270px]"
      />
    </div>
  );
}
