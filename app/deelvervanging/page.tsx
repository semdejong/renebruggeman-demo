import type { Metadata } from "next";
import { content, deelGroups } from "@/content";
import { CallBand, PageHeader } from "@/components/Blocks";
import { JointDiagram, ProcessStrip } from "@/components/Joints";
import { Photo } from "@/components/Photo";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Deelvervanging",
  description:
    "Bij houtrot vervangt René Bruggeman alleen het aangetaste deel van een raam- of deurkozijn. Geen extra timmerman, en het hele kozijn hoeft niet vervangen te worden.",
};

export default function DeelvervangingPage() {
  const { deelvervanging } = content;
  return (
    <>
      <PageHeader title="Deelvervanging van een kozijn" lede={deelvervanging.lead} />
      <div className="mx-auto max-w-6xl px-5 py-6">
        <p className="max-w-2xl">{deelvervanging.body}</p>
        <ul className="mt-6 grid max-w-2xl gap-2">
          {deelvervanging.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl">{content.intro.self}</p>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-8">
        <ProcessStrip />
      </div>

      <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-6 lg:grid-cols-[15rem_minmax(0,1fr)]">
        <JointDiagram />
        <figure>
          <Photo photo={content.photos.kozijn} />
          <figcaption className="mt-2 max-w-xs text-[1rem]">Houten model van een kozijndeel.</figcaption>
        </figure>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-8">
        <p className="max-w-2xl">
          De foto&apos;s 51 tot en met 59 staan ook in de projectgalerij. Er is geen deel 04.
        </p>
        <Gallery groups={deelGroups} />
      </div>
      <CallBand />
    </>
  );
}
