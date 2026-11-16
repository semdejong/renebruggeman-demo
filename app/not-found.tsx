import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  description: "Dit adres bestaat niet op de site van René Bruggeman Schilderwerken.",
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <p className="font-mono text-[0.95rem] text-oker">404</p>
      <h1 className="font-display mt-3 max-w-xl text-[clamp(2.5rem,5vw,4.2rem)] leading-[1.05]">
        Deze pagina bestaat niet
      </h1>
      <p className="mt-6 max-w-lg">Het adres klopt niet, of de pagina is er niet.</p>
      <p className="mt-8">
        <Link href="/" className="btn btn-inkt">
          Naar de beginpagina
        </Link>
      </p>
    </div>
  );
}
