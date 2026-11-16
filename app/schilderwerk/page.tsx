import type { Metadata } from "next";
import Link from "next/link";
import { content, winterMonths } from "@/content";
import { CallBand, PageHeader } from "@/components/Blocks";
import { Photo } from "@/components/Photo";
import { Scarf } from "@/components/Joints";

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

      <div className="flex flex-col lg:flex-row lg:items-stretch">
        <article className="flex-1 bg-vlak px-6 py-10 lg:px-10">
          <h2 className="font-display text-4xl leading-none md:text-5xl">Binnen</h2>
          <p className="mt-5 max-w-md">{intro.maintenance}</p>
        </article>
        <Scarf />
        <article className="flex-[1.15] bg-wit px-6 py-10 lg:px-10">
          <h2 className="font-display text-4xl leading-none md:text-5xl">Buiten</h2>
          <p className="mt-5 max-w-md">
            Ook buiten hoort het onderhoud bij het dagelijkse werk. Vaak blijkt dan dat er door houtrot deelvervanging
            van een kozijn nodig is.
          </p>
          <p className="mt-4">
            <Link href="/deelvervanging" className="text-oker">
              Dan is deelvervanging de volgende stap
            </Link>
          </p>
        </article>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="font-display max-w-3xl text-3xl leading-tight md:text-5xl">{intro.winter}</h2>
        <p className="mt-4 max-w-xl">Die periode, maand voor maand. Alleen voor binnenwerk, en alleen in overleg.</p>
        <ol className="mt-8 flex flex-col sm:flex-row sm:items-stretch">
          {winterMonths.map((month, index) => (
            <li key={month} className="contents">
              {index > 0 ? <Scarf /> : null}
              <div className={`min-w-0 flex-1 px-4 py-6 ${index % 2 === 0 ? "bg-inkt text-wit" : "bg-vlak"}`}>
                <p className="font-display text-2xl leading-none">{month}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 pb-16 lg:grid-cols-[minmax(0,1fr)_228px]">
        <figure>
          <div className="inline-flex max-w-full items-stretch bg-vlak">
            <span aria-hidden="true" className="w-[3px] shrink-0 bg-geel" />
            <div className="p-3">
              <Photo photo={content.photos.rene} />
            </div>
          </div>
          <figcaption className="mt-3 max-w-md text-[1rem]">
            René schildert een raam. Zijn gezicht staat in de weerspiegeling van het glas.
          </figcaption>
        </figure>
        <figure>
          <Photo photo={content.photos.kwast} />
          <figcaption className="mt-2 text-[1rem]">Kwast, op ware grootte.</figcaption>
        </figure>
      </div>

      <CallBand />
    </>
  );
}
