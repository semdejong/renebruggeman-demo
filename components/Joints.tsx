import { Fragment } from "react";
import { content } from "@/content";

/** Halve houtlas: één stap, één gele naad. Niet herhaald als streep. */
export function EdgeJoint({ flip = false }: { flip?: boolean }) {
  const ink = "#111111";
  const paper = "#F5F2E8";
  const left = flip ? paper : ink;
  const right = flip ? ink : paper;
  return (
    <div className="flex h-2.5" aria-hidden="true">
      <div className="h-full min-w-0 flex-[1.15]" style={{ background: left }} />
      <svg viewBox="0 0 40 10" className="h-full w-10 shrink-0">
        <rect width="40" height="10" fill={right} />
        <path d="M0 0 H14 V5 H28 V10 H0 Z" fill={left} />
        <path d="M14 1 V5 H28" fill="none" stroke="#FFFF00" strokeWidth="2.5" />
      </svg>
      <div className="h-full min-w-0 flex-1" style={{ background: right }} />
    </div>
  );
}

/** Dunne schuine naad tussen twee leden. */
export function Scarf({ axis = "responsive" }: { axis?: "x" | "y" | "responsive" }) {
  const vertical = axis === "x" || axis === "responsive";
  const horizontal = axis === "y" || axis === "responsive";
  return (
    <span aria-hidden="true" className="block shrink-0 self-stretch">
      {horizontal && (
        <svg
          viewBox="0 0 100 8"
          preserveAspectRatio="none"
          className={`h-2 w-full ${axis === "responsive" ? "lg:hidden" : ""}`}
        >
          <polygon points="0,1 100,0 100,4 0,6" fill="#FFFF00" />
        </svg>
      )}
      {vertical && (
        <svg
          viewBox="0 0 8 100"
          preserveAspectRatio="none"
          className={`h-full w-2 ${axis === "responsive" ? "hidden lg:block" : ""} ${axis === "x" ? "block" : ""}`}
        >
          <polygon points="1,0 4,0 7,100 3,100" fill="#FFFF00" />
        </svg>
      )}
    </span>
  );
}

export function JointDiagram() {
  return (
    <figure className="w-full max-w-[15rem]">
      <svg viewBox="0 0 240 92" className="h-auto w-full" role="img" aria-labelledby="houtlas-titel">
        <title id="houtlas-titel">Twee stukken hout met een schuine naad</title>
        <polygon points="6,16 116,16 134,74 6,74" fill="#EBE6D8" stroke="#111111" strokeWidth="1.5" />
        <polygon points="126,16 234,16 234,74 144,74" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        <line className="seam-draw" x1="120" y1="16" x2="140" y2="74" stroke="#FFFF00" strokeWidth="4" />
      </svg>
      <figcaption className="mt-3 max-w-[15rem] text-[1rem] leading-snug">
        Twee delen, één naad. Het kozijn blijft staan; alleen het aangetaste stuk wordt vervangen.
      </figcaption>
    </figure>
  );
}

/** De vier las-labels, één keer op de site. */
export function ProcessStrip() {
  return (
    <ol className="flex flex-col lg:flex-row lg:items-stretch">
      {content.steps.map((step, index) => (
        <Fragment key={step.code}>
          {index > 0 ? <Scarf /> : null}
          <li
            className={`min-h-36 flex-1 px-5 py-6 ${index % 2 === 0 ? "bg-vlak" : "bg-wit"}`}
            style={index === 2 ? { boxShadow: "inset 0 3px 0 #FFFF00" } : undefined}
          >
            <p className="font-mono text-[0.95rem] font-medium tracking-wide">
              {step.code} {step.label}
            </p>
            <p className="mt-3 text-[1.0625rem] leading-relaxed">{step.text}</p>
          </li>
        </Fragment>
      ))}
    </ol>
  );
}
