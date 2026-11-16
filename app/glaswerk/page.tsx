import type { Metadata } from "next";
import Link from "next/link";
import { content, glassLadder } from "@/content";
import { CallBand, PageHeader } from "@/components/Blocks";
import { Scarf } from "@/components/Joints";

export const metadata: Metadata = {
  title: "Glaswerk",
  description:
    "René Bruggeman plaatst glas, van een eenvoudige ruit tot allerlei soorten en maten, inclusief isolatieglas en het vervangen van enkelglas door hoog rendement glas.",
};

export default function GlaswerkPage() {
  return (
    <>
      <PageHeader title="Glas, van een eenvoudige ruit tot isolatieglas" lede={content.intro.glass} />
      <div className="mx-auto flex max-w-6xl flex-col px-5 pt-6 pb-16">
        {glassLadder.map((step, index) => (
          <div key={step} style={{ marginLeft: `${index * 6}%` }}>
            {index > 0 ? (
              <div className="max-w-3xl">
                <Scarf axis="y" />
              </div>
            ) : null}
            <h2
              className={`max-w-3xl px-6 py-8 font-display text-[clamp(1.8rem,3vw,2.8rem)] leading-tight ${index % 2 === 0 ? "bg-vlak" : "bg-wit"}`}
            >
              {step}
            </h2>
          </div>
        ))}
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 px-5 pb-16 md:grid-cols-2">
        <p>
          Isolatieglas plaatsen staat ook in de openingsregel van zijn werk, naast timmerwerk en de kozijnreparaties.
        </p>
        <p>
          Enkelglas vervangen door hoog rendement glas hoort bij het{" "}
          <Link href="/vernieuwen" className="text-oker">
            vernieuwen van houtwerk
          </Link>
          . Foto&apos;s zonder bijschrift staan bij de{" "}
          <Link href="/projecten" className="text-oker">
            projecten
          </Link>
          .
        </p>
      </div>
      <CallBand />
    </>
  );
}
