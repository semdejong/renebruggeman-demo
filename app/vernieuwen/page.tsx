import type { Metadata } from "next";
import { content, vernieuwenPhotos } from "@/content";
import { CallBand, PageHeader } from "@/components/Blocks";
import { Scarf } from "@/components/Joints";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Vernieuwen van houtwerk",
  description:
    "Verbetering of restauratie van houtwerk, enkelglas vervangen door hoog rendement glas, en het vernieuwen van windveren en boeien.",
};

const tones = ["bg-inkt text-wit", "bg-vlak text-inkt", "bg-wit text-inkt"];

export default function VernieuwenPage() {
  const { vernieuwen } = content;
  return (
    <>
      <PageHeader
        title="Vernieuwen van houtwerk"
        lede="Drie regels, zoals hij ze zelf zet. Daarna de foto's van dat werk."
      />
      <div className="flex flex-col">
        {vernieuwen.lines.map((line, index) => (
          <div key={line} className="contents">
            {index > 0 ? <Scarf axis="y" /> : null}
            <h2 className={`px-6 py-10 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] md:px-12 ${tones[index]}`}>
              {line}
            </h2>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-6xl px-5 py-10">
        <p className="max-w-xl">{vernieuwen.close}</p>
        <p className="mt-4 max-w-xl">
          Op de foto&apos;s: werk aan een raam, een deur of kozijn, en hout aan dakrand, boei en windveer. Zonder
          straat of jaartal.
        </p>
        <Gallery groups={[{ label: "01–05", photos: vernieuwenPhotos }]} layout="portraits" />
      </div>
      <CallBand />
    </>
  );
}
