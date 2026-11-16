import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { CallBand, PageHeader } from "@/components/Blocks";
import { Photo } from "@/components/Photo";

export const metadata: Metadata = {
  title: "Schilderwerk binnen en buiten",
  description:
    "Onderhoudsschilderwerk binnen en buiten door René Bruggeman in Nijverdal. Voor binnenwerk van november tot en met maart een kostendekkend uurloon, in overleg.",
};

export default function SchilderwerkPage() {
  const { intro } = content;
  return (
    <>
      <PageHeader title="Schilderwerk binnen en buiten" lede={intro.painter} />
      <div className="mx-auto grid max-w-6xl items-end gap-12 px-5 py-8 md:py-12 lg:grid-cols-[minmax(0,1fr)_228px]">
        <div className="grid max-w-xl gap-4">
          <p>{intro.maintenance}</p>
          <p>{intro.winter}</p>
          <p>
            {intro.rot}{" "}
            <Link href="/deelvervanging" className="text-oker">
              Lees hoe deelvervanging werkt
            </Link>
            .
          </p>
          <p>
            Foto&apos;s van uitgevoerd werk staan bij de{" "}
            <Link href="/projecten" className="text-oker">
              projecten
            </Link>
            , zonder bijschrift.
          </p>
        </div>
        <figure>
          <Photo photo={content.photos.kwast} />
          <figcaption className="mt-2 text-[1rem]">Kwast.</figcaption>
        </figure>
      </div>
      <CallBand />
    </>
  );
}
