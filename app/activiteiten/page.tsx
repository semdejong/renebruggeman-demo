import type { Metadata } from "next";
import { activiteitPhotos, activiteitStamp, content } from "@/content";
import { Photo } from "@/components/Photo";
import { Scarf } from "@/components/Joints";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Krent Slemdamesdubbel",
  description:
    "René Bruggeman Schilderwerken is ieder jaar hoofdsponsor van het Krent Slemdamesdubbel tennistoernooi in oktober.",
};

const marks = [
  { title: "Ieder jaar", text: "Oktober, jaar op jaar." },
  { title: "Hoofdsponsor", text: "Zijn naam staat op het bord." },
  { title: "Oktober", text: "Beker en speelsters, zonder namen erbij." },
];

export default function ActiviteitenPage() {
  return (
    <>
      <header className="mx-auto grid max-w-6xl items-end gap-8 px-5 pt-12 md:grid-cols-[minmax(0,1fr)_160px] md:pt-16">
        <div>
          <h1 className="font-display max-w-4xl text-[clamp(2.6rem,5.6vw,4.8rem)] leading-[1.02]">Krent Slemdamesdubbel</h1>
          <p className="mt-6 max-w-2xl font-display text-[clamp(1.35rem,2.2vw,1.8rem)] leading-snug">
            {content.activiteiten.line}
          </p>
        </div>
        <figure>
          <Photo photo={activiteitStamp} />
          <figcaption className="mt-2 text-[1rem]">Klein beeld bij de activiteiten, op ware grootte.</figcaption>
        </figure>
      </header>

      <div className="mt-10 flex flex-col lg:flex-row lg:items-stretch">
        {marks.map((mark, index) => (
          <div key={mark.title} className="contents">
            {index > 0 ? <Scarf /> : null}
            <article className={`min-w-0 flex-1 px-6 py-8 ${index === 1 ? "bg-inkt text-wit" : "bg-vlak"}`}>
              <h2 className="font-display text-3xl leading-none md:text-4xl">{mark.title}</h2>
              <p className="mt-4 max-w-sm">{mark.text}</p>
            </article>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-5 py-12 pb-16">
        <p className="max-w-xl">
          De reeks hieronder, op nummer.
        </p>
        <Gallery groups={[{ label: "01–10", photos: activiteitPhotos }]} layout="stack" />
      </div>
    </>
  );
}
