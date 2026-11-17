/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's.
 *  Verticaal in de rechtermarge, zodat hij op 1280 px geen formulierveld of foto afdekt. */
export default function SleadsBadge() {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener"
      aria-label="Concept door Sleads – bekijk sleads.nl"
      className="fixed right-3 bottom-4 z-40 hidden min-h-0 rotate-180 items-center gap-1.5 rounded-full border border-black/10 bg-white/85 px-1.5 py-3 text-[11px] font-medium text-neutral-700 shadow-sm backdrop-blur [writing-mode:vertical-rl] hover:bg-white hover:text-black md:inline-flex print:hidden"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
      Concept door <span className="font-semibold">Sleads</span>
    </a>
  );
}
