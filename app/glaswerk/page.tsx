import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { CallBand, PageHeader } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Glaswerk",
  description:
    "René Bruggeman plaatst glas, van een eenvoudige ruit tot allerlei soorten en maten, inclusief isolatieglas en het vervangen van enkelglas door hoog rendement glas.",
};

export default function GlaswerkPage() {
  const { intro, vernieuwen } = content;
  return (
    <>
      <PageHeader title="Glas, van een eenvoudige ruit tot isolatieglas" lede={intro.glass} />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-8 md:grid-cols-2 md:py-12">
        <p>
          Ik plaats isolatieglas, en ik vervang enkelglas door hoog rendement glas. Dat hoort bij het{" "}
          <Link href="/vernieuwen" className="text-oker">
            vernieuwen van houtwerk
          </Link>
          .
        </p>
        <p className="bg-vlak px-6 py-6">{vernieuwen.lines[1]}</p>
      </div>
      <CallBand />
    </>
  );
}
