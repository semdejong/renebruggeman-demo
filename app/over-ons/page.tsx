import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { ContactFacts, PageHeader } from "@/components/Blocks";
import { Photo } from "@/components/Photo";

export const metadata: Metadata = {
  title: "Over René Bruggeman",
  description:
    "René Bruggeman is sinds 1978 werkzaam als schilder. In 2007 werd hij ZZP'er. Schilderwerken in Nijverdal.",
};

export default function OverOnsPage() {
  return (
    <>
      <PageHeader title="René Bruggeman" lede={content.intro.greet} />
      <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-8 lg:grid-cols-[minmax(0,1fr)_470px]">
        <div className="grid max-w-xl gap-4">
          <p>{content.intro.painter}</p>
          <p>
            Het werk zelf staat op de pagina&apos;s{" "}
            <Link href="/schilderwerk" className="text-oker">
              schilderwerk
            </Link>
            ,{" "}
            <Link href="/deelvervanging" className="text-oker">
              deelvervanging
            </Link>
            ,{" "}
            <Link href="/glaswerk" className="text-oker">
              glaswerk
            </Link>{" "}
            en{" "}
            <Link href="/vernieuwen" className="text-oker">
              vernieuwen
            </Link>
            .
          </p>
          <ContactFacts />
        </div>
        <figure>
          <div className="inline-flex max-w-full bg-vlak p-3">
            <Photo photo={content.photos.rene} />
          </div>
          <figcaption className="mt-3 text-[1rem]">René aan het werk.</figcaption>
        </figure>
      </div>
      <div className="h-8" />
    </>
  );
}
