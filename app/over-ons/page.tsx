import type { Metadata } from "next";
import Link from "next/link";
import { careerMarks, content } from "@/content";
import { ContactFacts } from "@/components/Blocks";
import { Photo } from "@/components/Photo";
import { Scarf } from "@/components/Joints";

export const metadata: Metadata = {
  title: "Over René Bruggeman",
  description:
    "René Bruggeman is sinds 1978 werkzaam als schilder. In 2007 werd hij ZZP'er. Schilderwerken in Nijverdal.",
};

export default function OverOnsPage() {
  return (
    <>
      <header className="mx-auto grid max-w-6xl items-end gap-10 px-5 pt-12 pb-6 md:pt-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.8fr)]">
        <div>
          <h1 className="font-display max-w-4xl text-[clamp(2.6rem,5.4vw,4.6rem)] leading-[1.05]">René Bruggeman</h1>
          <p className="mt-8 max-w-2xl font-display text-[clamp(1.45rem,2.4vw,2rem)] leading-snug">{content.intro.greet}</p>
        </div>
        <figure>
          <div className="inline-flex max-w-full bg-vlak p-3">
            <Photo photo={content.photos.rene} />
          </div>
          <figcaption className="mt-3 text-[1rem]">René aan het werk, aan een raam.</figcaption>
        </figure>
      </header>

      <section className="mt-8">
        <div className="mx-auto max-w-6xl px-5 pb-4">
          <h2 className="font-display text-3xl md:text-4xl">De jaartallen die hij zelf noemt</h2>
        </div>
        <div className="flex flex-col md:flex-row md:items-stretch">
          {careerMarks.map((mark, index) => (
            <div key={mark.year} className="contents">
              {index > 0 ? <Scarf /> : null}
              <article className={`flex-1 px-6 py-10 md:px-10 ${index === 0 ? "bg-vlak" : "bg-inkt text-wit"}`}>
                <p className="font-mono text-4xl md:text-5xl">{mark.year}</p>
                <p className="mt-4 max-w-sm text-[1.0625rem] leading-relaxed">{mark.text}</p>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Wat kan ik voor u betekenen?</h2>
          <div className="mt-5 grid gap-4">
            <p>{content.intro.painter}</p>
            <p>{content.intro.maintenance}</p>
            <p>{content.intro.self}</p>
          </div>
          <ul className="mt-6 grid gap-2">
            {content.nav.slice(0, 4).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-oker">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-vlak px-6 py-8">
          <h2 className="font-display text-3xl">Nijverdal</h2>
          <div className="mt-6">
            <ContactFacts />
          </div>
        </div>
      </section>
    </>
  );
}
