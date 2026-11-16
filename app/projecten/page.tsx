import type { Metadata } from "next";
import { content, projectGroups } from "@/content";
import { PageHeader } from "@/components/Blocks";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Projecten",
  description: "Fotogalerij van werk van René Bruggeman Schilderwerken, zonder verzonnen titels, straten of jaartallen.",
};

export default function ProjectenPage() {
  return (
    <>
      <PageHeader title="Projecten" lede={content.projecten.line} />
      <div className="mx-auto max-w-6xl px-5 pb-16">
        <p className="max-w-2xl">{content.projecten.note}</p>
        <Gallery groups={projectGroups} />
      </div>
    </>
  );
}
