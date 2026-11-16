import type { Metadata } from "next";
import { content, vernieuwenPhotos } from "@/content";
import { CallBand, PageHeader } from "@/components/Blocks";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Vernieuwen van houtwerk",
  description:
    "Verbetering of restauratie van houtwerk, enkelglas vervangen door hoog rendement glas, en het vernieuwen van windveren en boeien.",
};

export default function VernieuwenPage() {
  const { vernieuwen } = content;
  return (
    <>
      <PageHeader title="Vernieuwen van houtwerk" lede={vernieuwen.lines[0]} />
      <div className="mx-auto max-w-6xl px-5 py-4">
        <ul className="grid max-w-xl gap-2">
          {vernieuwen.lines.slice(1).map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="mt-6">{vernieuwen.close}</p>
        <Gallery groups={[{ label: "01–05", photos: vernieuwenPhotos }]} layout="portraits" />
      </div>
      <div className="h-12" />
      <CallBand />
    </>
  );
}
