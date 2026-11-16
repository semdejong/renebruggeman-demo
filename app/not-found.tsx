import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { Scarf } from "@/components/Joints";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  description: "Dit adres bestaat niet op de site van René Bruggeman Schilderwerken.",
};

export default function NotFound() {
  return (
    <div className="pb-16">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="font-mono text-[0.95rem] text-oker">404</p>
        <h1 className="font-display mt-3 max-w-xl text-[clamp(2.5rem,5vw,4.2rem)] leading-[1.05]">
          Deze pagina bestaat niet
        </h1>
        <p className="mt-6 max-w-lg">Het adres klopt niet, of de pagina is er niet. Het werk zelf staat hieronder.</p>
        <p className="mt-8">
          <Link href="/" className="btn btn-inkt">
            Naar de beginpagina
          </Link>
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {content.nav.slice(0, 4).map((item, index) => (
          <div key={item.href} className="contents">
            {index > 0 ? <Scarf /> : null}
            <Link
              href={item.href}
              className={`member-link flex min-h-28 min-w-0 flex-1 items-end px-6 py-6 font-display text-3xl no-underline ${index % 2 === 0 ? "bg-vlak text-inkt" : "bg-wit text-inkt"}`}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
