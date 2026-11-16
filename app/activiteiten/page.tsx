import type { Metadata } from "next";
import { activiteitPhotos, activiteitStamp, content } from "@/content";
import { Photo } from "@/components/Photo";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Krent Slemdamesdubbel",
  description:
    "René Bruggeman Schilderwerken is ieder jaar hoofdsponsor van het Krent Slemdamesdubbel tennistoernooi in oktober.",
};

export default function ActiviteitenPage() {
  return (
    <>
      <div className="mx-auto grid max-w-6xl items-end gap-8 px-5 pt-12 md:grid-cols-[minmax(0,1fr)_145px] md:pt-16">
        <header className="pb-2">
          <h1 className="font-display max-w-4xl text-[clamp(2.5rem,5.4vw,4.4rem)] leading-[1.05]">Krent Slemdamesdubbel</h1>
          <p className="mt-6 max-w-2xl">{content.activiteiten.line}</p>
        </header>
        <figure className="pb-2">
          <Photo photo={activiteitStamp} />
          <figcaption className="mt-2 text-[1rem]">Klein beeld bij de activiteiten.</figcaption>
        </figure>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-16">
        <p className="max-w-xl">Foto&apos;s van het toernooi, onder meer het bord, de beker en de speelsters.</p>
        <Gallery groups={[{ label: "01–10", photos: activiteitPhotos }]} layout="stack" />
      </div>
    </>
  );
}
