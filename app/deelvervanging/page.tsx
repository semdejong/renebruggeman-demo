import type { Metadata } from "next";
import { content, deelGroups } from "@/content";
import { CallBand, PageHeader } from "@/components/Blocks";
import { JointDiagram, ProcessStrip, Scarf } from "@/components/Joints";
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
        <p className="mt-6 max-w-2xl">{content.intro.self}</p>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {deelvervanging.benefits.map((benefit, index) => (
          <div key={benefit} className="contents">
            {index > 0 ? <Scarf /> : null}
            <p className={`min-w-0 flex-1 px-6 py-10 font-display text-[clamp(1.7rem,3vw,2.5rem)] leading-tight md:px-10 ${index === 0 ? "bg-vlak" : "bg-wit"}`}>
              {benefit}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-5 py-8">
        <ProcessStrip />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-8 md:flex-row md:items-end">
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
