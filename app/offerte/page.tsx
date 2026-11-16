import type { Metadata } from "next";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";
import { PageHeader } from "@/components/Blocks";
import { Scarf } from "@/components/Joints";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Vrijblijvende offerte",
  description:
    "René Bruggeman maakt vrijblijvend en kosteloos een offerte. Het formulier opent uw e-mailprogramma en stuurt niets naar een server.",
};

const notes = [
  {
    title: "Wat u vraagt",
    text: "Vrijblijvend en kosteloos. U zit nergens aan vast.",
  },
  {
    title: "Wat u schrijft",
    text: "Het werk, en hoe hij u bereikt. Het formulier opent alleen uw mailprogramma.",
  },
  {
    title: "November tot maart",
    text: content.intro.winter,
  },
];

export default function OffertePage() {
  return (
    <>
      <PageHeader title="Vrijblijvende offerte" lede={content.quote} />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-6 pb-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <div className="flex flex-col">
            {notes.map((note, index) => (
              <div key={note.title}>
                {index > 0 ? <Scarf axis="y" /> : null}
                <article className={`px-5 py-6 ${index === 1 ? "bg-wit" : "bg-vlak"}`}>
                  <h2 className="font-display text-3xl leading-none">{note.title}</h2>
                  <p className="mt-3">{note.text}</p>
                </article>
              </div>
            ))}
          </div>
          <p className="mt-8">
            Liever bellen:{" "}
            <a href={content.contact.phoneTel} data-cta={ctaType(content.contact.phoneTel)} className="font-mono text-oker">
              {content.contact.phoneDisplay}
            </a>
          </p>
          <p className="mt-4 max-w-sm">
            In het bericht volstaat wat er moet gebeuren: schilderwerk, deelvervanging, glas of houtwerk, en hoe hij u
            bereikt.
          </p>
        </div>
        <QuoteForm intent="offerte" />
      </div>
    </>
  );
}
