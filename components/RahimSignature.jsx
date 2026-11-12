import Image from "next/image";

// Frame the supplied name graphic without modifying its original artwork.
export default function RahimSignature({ className = "", sizes = "(max-width: 640px) 85vw, 416px" }) {
  return (
    <span className={`relative block aspect-[1008/316] w-full overflow-hidden ${className}`}>
      <Image
        src="/images/source/branding/rahim-new.png"
        unoptimized
        alt="Rahim Iyaz — Customs Law Practitioner"
        width={2048}
        height={1152}
        sizes={sizes}
        className="absolute h-auto max-w-none"
        style={{ width: "203.1746%", left: "-51.5873%", top: "-132.2785%" }}
      />
    </span>
  );
}
