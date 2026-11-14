"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const boards = [
  { file: "image12.png", title: "Life insurance" },
  { file: "image13.png", title: "General insurance" },
  { file: "image14.png", title: "Standalone health insurance" },
];
const asset = (file) => `/images/source/branding/${file}`;
const control = "inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-navy";

export default function InsuranceAssociation() {
  const track = useRef(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) goTo((active + 1) % boards.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [active, paused]);

  function goTo(index) {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.current.scrollTo({ left: track.current.clientWidth * index, behavior: reduced ? "instant" : "smooth" });
  }

  return (
    <section id="insurance" aria-labelledby="insurance-heading" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="border-t-2 border-navy pt-7">
          <p className="kicker text-brandred">Insurance association</p>
          <h2 id="insurance-heading" className="h2 mt-3 max-w-3xl text-ink">PORTMATRIX in Association with Assure Bharat</h2>
        </div>
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="max-w-xl text-base leading-relaxed text-slatey sm:text-lg">
              Comprehensive insurance solutions for MSMEs with Marine Cargo Insurance to protect goods in transit and Trade Credit Insurance to safeguard export receivables against buyer default and specified political risks—supporting secure and confident international trade.
            </p>
            <Image src={asset("image11.png")} alt="PORTMATRIX and Assure Bharat: Marine Cargo Insurance and Trade Credit Insurance" width={512} height={262} unoptimized className="mt-6 h-auto w-full max-w-[512px] rounded-xl" />
            <Link href="/services/msme-insurance" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-navy underline-offset-4 hover:underline">
              Explore MSME insurance <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="min-w-0" role="region" aria-roledescription="carousel" aria-label="Assure Bharat insurance partner boards" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}>
            <div className="mb-5 flex items-center justify-between gap-4 border-b border-hairline pb-4">
              <h3 className="font-display text-lg font-semibold text-ink">Assure Bharat’s insurance partners</h3>
              <div className="flex shrink-0 gap-2">
                <button type="button" className={control} aria-label="Previous insurance partner board" aria-controls="insurance-boards" onClick={() => goTo((active + boards.length - 1) % boards.length)}><ArrowLeft className="h-4 w-4" aria-hidden="true" /></button>
                <button type="button" className={control} aria-label="Next insurance partner board" aria-controls="insurance-boards" onClick={() => goTo((active + 1) % boards.length)}><ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
              </div>
            </div>
            <div id="insurance-boards" ref={track} className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain motion-reduce:scroll-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" onScroll={(event) => setActive(Math.round(event.currentTarget.scrollLeft / event.currentTarget.clientWidth))}>
              {boards.map((board, index) => (
                <figure key={board.file} className="w-full shrink-0 snap-center" role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${boards.length}: ${board.title}`}>
                    <Image src={asset(board.file)} alt={`Assure Bharat — Our Partners in ${board.title}`} width={512} height={256} unoptimized className="h-auto w-full" />
                    <figcaption className="mt-4 min-h-11 text-sm text-navy">{board.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
