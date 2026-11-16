import Link from "next/link";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";
import { Photo } from "@/components/Photo";
import { CallBand, ServiceJoint } from "@/components/Blocks";

export default function Home() {
  const { company, overview, contact, intro } = content;
  return (
    <>
      <section data-section="hero" className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-12 md:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:py-20">
        <div>
          <h1 className="font-display max-w-3xl text-[clamp(2.7rem,6vw,4.8rem)] leading-[1.02]">
            {company.slogan}
          </h1>
          <p className="mt-6 max-w-xl">{overview}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={contact.phoneTel} data-cta={ctaType(contact.phoneTel)} className="btn btn-geel font-mono">
              {contact.phoneDisplay}
            </a>
            <Link href="/offerte" data-cta="offerte" className="btn btn-inkt">
              Vrijblijvende offerte
            </Link>
          </div>
        </div>
        <figure className="justify-self-start lg:justify-self-end">
          <div className="inline-flex max-w-full items-stretch bg-vlak">
            <span aria-hidden="true" className="w-[3px] shrink-0 bg-geel" />
            <div className="p-3">
              <Photo photo={content.photos.rene} priority />
            </div>
          </div>
          <figcaption className="mt-3 max-w-[28rem] text-[1rem]">René aan het werk, aan een raam.</figcaption>
        </figure>
      </section>

      <ServiceJoint />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.08]">Wat kan ik voor u betekenen?</h2>
          <div className="mt-6 grid max-w-xl gap-4">
            <p>{intro.painter}</p>
            <p>
              {intro.rot}{" "}
              <Link href="/deelvervanging" className="text-oker">
                Meer over deelvervanging
              </Link>
              .
            </p>
            <p>{intro.self}</p>
            <p>
              {intro.glass}{" "}
              <Link href="/glaswerk" className="text-oker">
                Glaswerk
              </Link>
              .
            </p>
            <p>
              {intro.maintenance}{" "}
              <Link href="/schilderwerk" className="text-oker">
                Schilderwerk
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="lg:col-span-5 lg:pt-16">
          <div className="relative bg-inkt px-6 py-8 text-wit">
            <span aria-hidden="true" className="absolute top-0 left-0 h-[3px] w-24 bg-geel" />
            <p>{intro.winter}</p>
          </div>
          <p className="mt-8 max-w-sm">
            <Link href="/over-ons" className="text-oker">
              Kennismaken met René Bruggeman
            </Link>
          </p>
        </div>
      </section>

      <CallBand />
    </>
  );
}
